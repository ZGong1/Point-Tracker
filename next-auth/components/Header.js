"use client"
import { logout } from "@/lib";
import Link from 'next/link'

const Header = (props) => {

  const onLogout = async () => {
    await logout()
  }

  return ( 
    <div className="header">
      <div className="left-buttons">
          
      </div>
      <div className="left-buttons">
        <Link href="/" onClick={onLogout}><button>Sign out</button></Link>
      </div>
    </div> 
  );
}
 
export default Header;