"use client"
import { logout } from "@/lib";

const Header = (props) => {

  return ( 
    <div className="header">
      <div className="left-buttons">
          
      </div>
      <div className="right-buttons">
        <button onClick={() => logout()}>Sign out</button>
      </div>
    </div> 
  );
}
 
export default Header;