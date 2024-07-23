"use client"
import { logout } from "@/lib";

const Header = (props) => {

  return ( 
    <div className="header">
      <div className="left-buttons">
          
      </div>
      <div className="left-buttons">
        {/* <form action={logout}><button type="submit">Sign out</button></form> */}
        <button onClick={() => logout()}>Sign out</button>
      </div>
    </div> 
  );
}
 
export default Header;