import React from 'react'
import styles from './footer.css'
import { Link } from 'react-router-dom'


const Footer =()=> {
    const logo = () =>{
        return (
            <Link to="/" className={styles.logo}>
                <img alt="unilorin logo" src="/images/logo.png" />
            </Link>   
        )
    }

    
    return (
        <footer className={styles.footer}>
            <div className={styles.HeaderItems}>
                {logo()}
            </div>
            <div className={styles.right}> 
                @2020 All rights reserved 
            </div>
        </footer>
    )
}
export default Footer;
