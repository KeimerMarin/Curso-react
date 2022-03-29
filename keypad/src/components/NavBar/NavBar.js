import './NavBar.css'
import logoKeypad from './img/LogoKeypad.png'


const NavBar = () => {
    return (
        <nav className="nav-main">
        <img src={logoKeypad} alt="Keypad" class="nav-logo"/>
        <ul class="nav-menu">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">CCTV</a></li>
            <li><a href="#">Alarmas</a></li>
            <li><a href="#">Redes</a></li>
            <li><a href="#">Acceso y Video</a></li>  
            <li><a href="#">Contactenos</a></li>           
        </ul> 
        </nav>
    )
}
export default NavBar