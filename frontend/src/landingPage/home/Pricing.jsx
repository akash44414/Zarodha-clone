import './Pricing.css';

export default function Pricing() {
    return (
        <>
            <div className="container p-5">
                <div className="row text-start">
                    <div className="col-md-6">
                        <h2>Unbeatable pricing</h2>
                        <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-around align-items-center">
                        <img src="https://zerodha.com/static/images/other-trades.svg" alt="" className="img-fluid m-2 custom-img-size" />
                        <img src="https://zerodha.com/static/images/other-trades.svg" alt="" className="img-fluid m-2 custom-img-size" />
                        <img src="https://zerodha.com/static/images/other-trades.svg" alt="" className="img-fluid m-2 custom-img-size" />
                    </div>
                </div>
                <a href="" className="me-5 text-decoration-none"> See pricing </a>
            </div>
        </>
    );
}