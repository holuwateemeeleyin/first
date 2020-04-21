import React from 'react'
import SideView from 'react-simple-sidenav';
import SideNavItems from './sideNavItems'

const SideNav =(props)=>{
    return (
        <SideView
            showNav={props.showNav}
            onHideNav={props.onHideNav}
            navStyle={{
                background:"#072255",
                maxWidth:"270px"
            }}
        >
           <SideNavItems />
        </SideView>
    )
}
export default SideNav;