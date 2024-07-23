import { redirect } from "next/navigation";
import { getSession, login, logout } from "@/lib";
import LoginPage from "@/components/LoginPage"


export default async function Page() {
  const session = await getSession();


  return (
    <div>
      <LoginPage/>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}