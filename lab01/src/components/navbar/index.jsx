import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  return(
    <nav>
      <ul>
        <li>
          <Link to="/" className="menu-item">Home</Link>
        </li>
        <li>
          <Link to="/about" class="menu-item">About</Link>
        </li>
        <li>
          <Link to="/contact" class="menu-item">Contact Us</Link>
        </li>
        <li>
          <Link to="/products" class="menu-item">Products</Link>
        </li>
      </ul>
    </nav>
  );
}