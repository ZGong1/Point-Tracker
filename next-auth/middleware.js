import { NextResponse } from 'next/server';
import { updateSession, getSession } from "./lib";

export async function middleware(request) {
  // First, update the session
  const response = await updateSession(request);

  // Get the current session
  const session = await getSession(request);

  // Check if the request is for the dashboard
  if (request.nextUrl.pathname === '/dashboard') {
    // If there's no session or no username, redirect to the login page
    if (!session || !session.user || !session.user.username) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Return the response from updateSession if no redirect was needed
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}