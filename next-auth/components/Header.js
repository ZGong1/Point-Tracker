"use client"
import { logout } from "@/lib";
import Link from "next/link";

const Header = ( { loggedIn } ) => {

  return ( 
    <div className="header">
      <div className="left-buttons">
          <Link href="/"><button>Home</button></Link>
      </div>
      <div className="right-buttons">
        {loggedIn && <button onClick={() => logout()}>Sign out</button>}
      </div>
    </div> 
  );
}
 
export default Header;