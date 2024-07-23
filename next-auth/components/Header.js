"use client"
import { logout } from "@/lib";
import { redirect } from "next/navigation";

const Header = (props) => {

  return ( 
    <div className="header">
      <div className="left-buttons">
          
      </div>
      <div className="left-buttons">
        <form action={logout}><button type="submit">Sign out</button></form>
      </div>
    </div> 
  );
}
 
export default Header;