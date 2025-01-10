import React from 'react'
import './landing.css'
import Navbar from '../components/Navbar'
import StockChart from '../components/StockChart'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


const landing = ({ userProfile }) => {
  return (
    <div className='landing'>
        <div className='header'>
          <div className='main-navbar'>
            <img
            src="https://i.pinimg.com/736x/ca/88/b1/ca88b10896be01bc285b01ec959aeab9.jpg"
            alt="Logo"
            className="navbar-logo"
          />
            <Navbar />
          </div>
          <div className="user-profile">
          {userProfile ? (
            <div className="profile-icon" title="User Profile">
            {userProfile}
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="login">Login</button>
              </Link>
              <Link to="/register">
                <button className="login">Register</button>
              </Link>
            </>
          )}
        </div>
          
            
        </div>

        <div className='main-landing'>
          <div className='leftsidemain'>
            <div>
              <h1>Welcome to Paddy Distribution System</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet tristique lectus, vitae consectetur velit. In hac habitasse platea dictumst. Nullam lobortis, turpis vitae consectetur pulvinar, ligula felis auctor velit, at tempor est justo vel velit. Sed varius, orci vel mattis lobortis, velit nunc semper ex, vel pulvinar ipsum velit in ex.</p>
            </div>
            <div className='leftside-image'>
               <img src="https://i.pinimg.com/736x/2b/90/b7/2b90b75c737128ef4748d41d627c402f.jpg" alt="image" />
            </div>
          </div>

          <div className='rightsidemain'>
            
            <div className='chart'>
              <StockChart />
            </div>
            <div className='sinhala-description'>
              මේක තමයි අනාගතයේ ඔබේ සියලු සහල් තොග විකිණීමේ පහසුම මාර්ගය. ඉතින් ගොවි මහතුනි වී වෙලෙන්දනි අප හා එක්වන්න
            </div>
          </div>
        </div>

        <div className='footer-holder'>
          <Footer />
        </div>
        
    </div>
  )
}

export default landing
