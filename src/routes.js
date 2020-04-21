import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './component/Home/home'
import SignIn from './component/signIn/signIn'
import Layout from './hoc/Layout/layout'

const Routes = () => {
    return(
        <Layout>
            <Switch>
                <Route path ="/" exact component={Home}/>
                <Route path ="/" component={SignIn} />
            </Switch>
            </Layout>
    )
} 
export default Routes;