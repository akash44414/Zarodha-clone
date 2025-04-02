import React from "react";
import Card from './Card';
import Navbar from '../navbar'; // Corrected import statement
import Footer from '../footer';
import DematAccount from './DematAccount';
import Faq from './Faq';
import OpenDematAccount from './OpenDemat'; // Ensure this path is correct
import Pricing from './Pricing';
import TradingAccount from './TradingAccount';

export default function Signup() {
    return (
        <>
            {/* <Navbar /> */}
            <Card />
             {/* <OpenDematAccount />
            <TradingAccount />
            <DematAccount />
            <Pricing />
            <Faq />  */}
            {/* <Footer /> */}
        </>
    );
}
