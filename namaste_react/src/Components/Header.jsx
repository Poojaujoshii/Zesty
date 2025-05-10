import logo from '../assets/Zesty.png'
import "./CSS/Header.css"
export default function Header(){
    return(<>
        <div className="header">
            <div className="logo">
                <img src={logo} alt=""  className='lo'/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Cart</li>
                    <li>Profile</li>
                </ul>
            </div>
        </div>

        
        
    </>)
}