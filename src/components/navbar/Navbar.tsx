import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Moderator</span>
        <Link to="/" style={{ marginLeft: '15px', textDecoration: 'none', color: 'inherit' }}>
          <img src="/home.svg" alt="home" style={{ width: '20px', height: '20px' }} />
        </Link>
      </div>
      <div className="icons">
      <a href="/login_page/home.html">
  <img src="/app.svg" alt="App Icon" className="icon" />
</a>
 
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://www.jioinstitute.edu.in/sites/default/files/styles/webp/public/article/WhatsApp%20Image%202023-06-20%20at%207.37.52%20PM.jpeg.webp?itok=a-fUcHbY"
            alt="tg"
          />
          <span>Shashwat Nayak</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;