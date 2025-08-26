import { useState, useEffect } from "react"
import logo from "../../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Link, Outlet } from "react-router"
import './navbar.css'

library.add(fas)


function Navbar() {

    const [searchVisible, setSearchVisible] = useState(window.innerWidth > 800);

    const handleSearchVisibility = (e) => {
        setSearchVisible(prevState => !prevState)
    }

    useEffect(() => {
        window.addEventListener("resize", (e) => {
            if(window.innerWidth > 800){
                setSearchVisible(true)
            }
        });
    }, [])

    return (
        <>
        <nav className="navbar">
            <div className="navbar_left">
                <Link to="/">
                    <img src={logo} className="navbar_logo" alt="website logo" />
                </Link>
                <div 
                    className="navbar_search-wrapper" 
                    style={{display:searchVisible ? "block" : "none"}}
                >
                    <div className="navbar_search">
                        <input 
                            type="text"
                            placeholder="Search..."
                            className="navbar_search-input"
                        />
                        <FontAwesomeIcon icon="fa-solid fa-search" className="navbar_search-icon" />
                    </div>
                </div>
            </div>
            <div className="navbar_right">
                <div className="navbar_right-search" onClick={handleSearchVisibility}>
                    <FontAwesomeIcon icon="fa-solid fa-search" />
                </div>
                <Link to="/write" className="navbar_btn-write">
                    <FontAwesomeIcon icon="fa-solid fa-edit" />
                    <span style={{marginLeft:"6px"}}>Write</span>
                </Link>
                <Link to="/signin" className="navbar_btn-signin">
                    Sign In
                </Link>
                <Link to="/signup" className="navbar_btn-signup">
                    Sign Up
                </Link>
            </div>
        </nav>
        <Outlet />
    </>
    )
}

export default Navbar
