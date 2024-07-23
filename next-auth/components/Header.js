"use client"
import { logout } from "@/lib";
import Link from 'next/link'

const Header = (props) => {

  const onLogout = () => {
    logout()
    console.log("test")
  }

  return ( 
    <div className="header">
      <div className="left-buttons">
          
      </div>
      <div className="left-buttons">
        <Link href="/" onClick={onLogout}>Sign out</Link>
      </div>
    </div> 
  );
}
 
export default Header;