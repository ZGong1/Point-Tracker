"use server"
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import PocketBase from 'pocketbase';
import { redirect } from "next/navigation";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);
const pb = new PocketBase("http://127.0.0.1:8090")
const COOKIE_EXPIRE = 1000 * 10 // 1 MINUTE

export async function encrypt(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function decrypt(input) {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (e) {
    console.error(e.name)
  }
}

export async function login( { username, password } ) {
  // Verify credentials && get the user
  try {
    const authData = await pb.collection("users").authWithPassword(username, password)
  } catch (e) {
    if (e.name === "ClientResponseError 0") console.log("PB server isn't responding")
    if (e.name === "ClientResponseError 400") console.log("Invalid credentials")
    return 
  } 

  // Create the session
  const user = { username };
  const expires = new Date(Date.now() + COOKIE_EXPIRE); // 1 minute
  const session = await encrypt({ user, expires });

  // Save the session in a cookie
  cookies().set("session", session, { expires, httpOnly: true });
}

export const logout = async () => {
  // Destroy the session
  console.log("logout")
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

// returns null if not authorized
// returns [] if no associated ninjas
// returns [{}, {}, {}, ...] if there are associated records
export async function getNinjas() {
  const session = await getSession()
  
  // checks if cookie exists
  if (!session) return null;
  // checks if cookie is valid
  if (!session.user.username) return null;
  
  const records = await pb.collection("ninjas").getFullList({
    sort: '-created',
  });

  // only show records belonging to the user
  return records.filter(item => item.center === session.user.username)
}

export async function addNinja( name, bucks ) {
  try {
    const session = await getSession()
    if (!session || !session.user || !session.user.username) throw new Error("Session doesn't exist or is invalid")

    const data = {
      name: name,
      bucks: bucks,
      llu: "N/A",
      ice: true,
      belt: "white",
      imgNum: Math.floor(Math.random() * 20), // Random int between 0 and 19
      center: session.user.username
    };

    const record = await pb.collection('ninjas').create(data);
    console.log('Ninja added successfully:', record);
    return record;
  } catch (error) {
    console.error('Error adding ninja:', error);
    throw error;
  }
}

// refreshes token if still valid on refresh
export async function updateSession(request) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + COOKIE_EXPIRE);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}