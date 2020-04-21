import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import styles from './sideitems.css'

const SideNavItems =()=>{
    const items=[
        {
            type:styles.items,
            text:"Home",
            link:"/",
            icon:faHome

        },
        {
            type:styles.items,
            text:"Feed Back",
            link:"/feedback",
            icon:faCommentDots
        },
        {
            type:styles.items,
            text:"sign-in",
            link:"/sign-in",
            icon:faSignInAlt
        }
    ]
    const showItems =()=>{
        return items.map((item,i)=>{  
            return (
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesomeIcon icon={item.icon} />
                            {item.text}
                        
                    </Link>
                </div>
            )
        })
    }
    return(
        <div>
            {showItems()}
        </div>
    )
}
export default SideNavItems;