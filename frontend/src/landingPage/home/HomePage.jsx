import React from "react"
import Hero from './Hero'
import Education from './Education'
import Pricing from './Pricing'
import Stats from './Stats'
import SignUp from '../signup'
import Account from './Account'
import NavBar from '../navbar'
import Footer from '../footer'
function HomePage()
{
    return(
        <>
        {/* <NavBar/> */}
        <Hero />
        {/* <SignUp/> */}
        <Stats/>
        <Pricing/>
        <Education/>
        <Account/>
        {/* <Footer/> */}
        {/* <SignUp/> */}
        
        </>
    )
}

export default HomePage;