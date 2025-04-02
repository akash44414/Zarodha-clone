
import React from "react";
import List from './List'
import Calculator from './Calculator'
import Charges from './Charges'
import Table from './Table'
import Footer from '../footer'
import NavBar from '../navbar'

function Pricing()
{
    return(
        <>
        {/* <NavBar/> */}
        <List/>
        <Charges/>
        <Calculator/>
        <Table/>
        {/* <Footer/> */}
        </>
    )
}

export default Pricing;