"use server"

import { getNinjas, getSession } from "@/lib";
import LoginPage from "@/components/LoginPage"
import { redirect } from "next/navigation";


export default async function Page() {
  const session = await getSession();

  if (session) redirect("/dashboard")

  return (
    <div>
      <LoginPage/>
      {/* <pre>{JSON.stringify(session, null, 2)}</pre>
      <pre>{JSON.stringify(ninjas, null, 2)}</pre> */}
    </div>
  );
}