import './NavBar.css'
import logoKeypad from './img/LogoKeypad.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../../asyncmock'


const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
      getCategories().then(categories => {
        setCategories(categories)
      })
    }, [])

    return (
        <nav className="nav-main" >
        <Link to='/'>
        <img src={logoKeypad} alt="Keypad" className="nav-logo"/>        
        </Link>
        <div className="nav-menu">         
          { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
            className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
          >{cat.description}</NavLink>)}
        </div>
        <CartWidget />
      </nav>
    )
}
export default NavBar