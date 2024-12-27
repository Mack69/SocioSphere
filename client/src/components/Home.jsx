
import { Link } from 'react-router-dom'
import '../components/CSS/home.css'

function Home() {
  return (
    <>
    <div className='navbar'>
      {/* Logo Section */}
      <div className="logo">
        <i className="fa-solid fa-building"></i>
        <p style={{paddingLeft:"10px"}}>Socio-Sphere</p>
      </div>
      {/* Menu Section */}
      <div className="menu">
        <a href="#"><i className="fa-solid fa-house"></i> Home</a>
        <a href="#"><i className="fa-solid fa-circle-info"></i> About</a>
        <a href="#"><i className="fa-solid fa-envelope"></i> Contact</a>
      </div>
      {/* Admin Section */}
      <div className="admin">
        <a href="#" style={{ marginRight: "50px" }}> Admin </a>
      </div>
    </div>
    
    
    
    
    </>    
  )
} 

export default Home

