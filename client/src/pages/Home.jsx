
import { Link } from 'react-router-dom';
import  "../CSS/home.css";

function Home() {
  return (
    <>
    <div className="homescreen">
    <div className='navbar'>
      {/* Logo Section */}
      <div className="logo">
        <i className="fa-solid fa-building"></i>
        <p style={{paddingLeft:"10px"}}>Socio-Sphere</p>
      </div>
      {/* Menu Section */}
      <div className="menu">
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-house" ></i> <p style={{color:"black"}}>Home</p></a>
        <a href="#"><i className="fa-solid fa-circle-info"></i> <p style={{color:"black"}}>About</p></a>
        <Link to="/contact">Contact Us</Link>
      </div>
      {/* Admin Section */}
      <div className="admin">
        <a href="/admin_dashboard.html" target="_blank" rel="noopener noreferrer" style={{ marginRight: "50px",color:"black" }}>Admin</a>
      </div>
    </div>
    <div className='description'>
        {/* Description Section */}
        <section className="Description-txt">
          <span style={{ fontFamily: "Vast Shadow" }}>Socio-Sphere</span>
          <h1>Smart Society Management System</h1>
          <br />
          <Link to='/Login'>Sign IN</Link>
        </section>
    </div>
    </div>
    </>    
  )
} 
export default Home

