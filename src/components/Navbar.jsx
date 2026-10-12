import { Link } from "react-router-dom";
function Navbar()
{
     const navLinks=[ {name:'Home',path:'/'},{name:'Find blood',path:'/find-blood'},{name:'Donate',path:'/donate-blood'},{name:'Login',path:'/login'},{name:'Register',path:'/register'},{name:'About',path:'/about'}];
     return (
     <nav className="Navbar">
        <h2>Hemo</h2>

          <ul>
          {navLinks.map((link)=>
          (
               <li key={link.name}>
                    <Link to={link.path}>{link.name}</Link>
                    </li>
               
          ))}
          </ul>
       
     </nav>
   )
}
export default Navbar