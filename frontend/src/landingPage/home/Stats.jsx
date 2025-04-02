export default function Stats()
{
    return(
        <>
        <div className="container p-5">
            <div className="row text-start">
                <div className="col-md-6">
                <h2 className="mb-5">Trust with confidence</h2>
                    <h3>Customer-first always</h3>
                    <p className="mb-5">That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h3>No spam or gimmicks</h3>
                    <p className="mb-5">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h3>The Zerodha universe</h3>
                    <p className="mb-5">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3>Do better with money</h3>
                    <p className="mb-5">With initiatives like <a href="https://support.zerodha.com/category/trading-and-markets/alerts-and-nudges/nudges/articles/what-is-nudge" className="text text-primary" style={{textDecoration:"none"}}>Nudge</a> and <a href="https://support.zerodha.com/category/trading-and-markets/alerts-and-nudges/nudges/articles/what-is-nudge" className="text text-primary" style={{textDecoration:"none"}}>Kill Switch</a> , we don't just facilitate transactions, but actively help you do better with your money</p>
                </div>
                <div className="col-md-6">
                 <img src="https://zerodha.com/static/images/ecosystem.png" alt="" className="img-fluid" style={{cursor:"pointer"}} />
                 <div className="p-5" >
                <a href="" className="me-5 text-decoration-none">Explore our products</a>
                <a href="" className="text-decoration-none">Try Kite demo </a>
             </div>
                </div>
                <div className="text-center">
                    <img src="https://zerodha.com/static/images/press-logos.png" 
                    className='img-fluid' alt="" srcset="" />
                </div>
            </div>
        </div>
        </>
    )
}