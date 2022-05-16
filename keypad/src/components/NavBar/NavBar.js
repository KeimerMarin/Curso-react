import "./NavBar.css";
import logoKeypad from "./img/LogoKeypad.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { firestoreDb } from "../../services/firebase";
import { getDocs, collection, orderBy, query } from "firebase/firestore";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getDocs(
      query(collection(firestoreDb, "categories"), orderBy("order", "asc"))
    ).then((response) => {
      const categories = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setCategories(categories);
    });
  }, []);

  return (
    <nav className="nav-main">
      <Link to="/">
        <img src={logoKeypad} alt="Keypad" className="nav-logo" />
      </Link>
      <div className="nav-menu">
        {categories.map((cat) => (
          <NavLink
            key={cat.id}
            to={`/category/${cat.id}`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            {cat.description}
          </NavLink>
        ))}
      </div>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
