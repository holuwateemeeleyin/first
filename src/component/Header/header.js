import React from 'react'
import styles from './header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons' 
import SideNav from './SideNav/sideNav'

const Header =(props)=>{
    const navBar = () => (
        <div>
            <FontAwesomeIcon icon={faBars}
                onClick={props.onOpenNav}
                style = {{
                    fontSize:'20px',
                    padding:'17px 10px',
                    cursor:'pointer'
                }}
            />
        </div>
    )

    const logo = ()=> {
        return (
            <Link to="/" className={styles.logo}>
                <img alt="unilorin logo" src="/images/logo.png" />
            </Link>
        )
    }
    return(
        <header className={styles.header}>
            <SideNav {...props} />
            <div className={styles.headerItems}>
                {navBar()}
                {logo()}
            </div>
        </header>
    )
}
export default Header;