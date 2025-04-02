export default function Hero()
{
    return(
        <>
        <div className="container p-5">
            <div className="row text-center">
            <img src="https://zerodha.com/static/images/landing.png" alt="" srcset="" />
            <h1 className="mt-5">Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
            <button className="btn btn-primary" style={{width:"25%", margin:"0 auto"}}>Sign up now</button>
            {/* <button className="btn btn-outline-primary">Login</button> */}
            </div>
        </div>
        </>
    )
}