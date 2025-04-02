import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Card() {
  return (
    <>
      <div className="container mb-5 p-5">
        <div className="row">
          <h1 className="mb-4 text-center">Open a free demat and trading account online</h1>
          <h5 className="mb-4 text-center text-muted">Start investing brokerage free and join a community of 1.5+ crore investors and traders</h5>

          <div className="col p-5 m-5">
            <img src="https://zerodha.com/static/images/account_open.svg" alt="" srcSet="" className="img-fluid" />
          </div>
          <div className=" col p-5 m-5">
            <form action="">
              <h1 className="mb-3">Signup now</h1>
              <h5 className="text-muted mb-4"> Or track your existing application </h5>
              <PhoneInput
                country={'in'}
                value={''}
                onChange={phone => console.log(phone)}
                inputStyle={{ width: '100%' }}
                placeholder="Enter phone number"
              />
              <button className='bg-primary text-white p-2 w-50 h-50 mt-4 border-0 rounded'><h5>Get Otp</h5></button>
            </form>
            <p className='mt-4 text-muted'>By proceeding, you agree to the Zerodha terms & privacy policy</p>
          </div>
        </div>
      </div>

      <div className="container mb-5 p-5">
        <div className="row">
          <div className="col">
            <img src="https://zerodha.com/static/images/stocks-acop.svg" alt="" className='img-fluid' />
            
          </div>
          <h1>Stocks</h1>
            <p>Invest in all exchange-listed securities</p>

          <div className="col">
            
            </div>
           
        </div>
        <div className='text-center'><button className='bg-primary text-white p-2 w-50 h-50 mt-4 border-0 rounded'><h5>Get Otp</h5></button>
        </div>
        <div className="row">
          <div className="col">

          </div>

          <div className="col">
            
            </div>
        </div>
      </div>

      <div className="container mb-5 p-5">
       <div className="row">
        <h2 className='text-center mb-5'>Steps to open a demat account with Zerodha</h2>
          <div className="col text-center">
            <img src="https://zerodha.com/static/images/steps-acop.svg" alt="" className='img-fluid' />
          </div>
          <div className="col">
            <ol>
              <li >
                <h6 className='mb-5 me-5 border-bottom-5 border-dark text-muted'>Enter the requested details</h6>
              </li>

              <li >
                <h6 className='mb-5 me-5 border-bottom-5 border-dark text-muted'>Enter the requested details</h6>
              </li>

              <li >
                <h6 className='mb-5 me-5 border-bottom-5 border-dark text-muted'>Enter the requested details</h6>
              </li>

              
            </ol>
          </div>  
       </div>
        
      </div>

      <div className="container mb-5 p-5">
       <div className="row">
        
          <div className="col">
            <img src="https://zerodha.com/static/images/acop-benefits.svg" alt="" className='img-fluid pt-5 mt-5 ' style={{width:"60%"}} />

            <h1 className='mt-5'>Benefits of opening a Zerodha <br /> demat account</h1>
          </div>
          <div className="col">
         <h3 className='mb-4'> Unbeatable pricing </h3>
         <p className='mb-5'>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>


          <h3 className='mb-4'>Best investing experience</h3>
         <p className='mb-5'> Simple and intuitive trading platform with an easy-to-understand user interface.</p>


          <h3 className='mb-4'>No spam or gimmicks</h3>
          <p className='mb-5'>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>


          <h3 className='mb-4'>The Zerodha universe</h3>
          <p className='mb-5'>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
          </div>  
       </div>
        
      </div>

      <div className="container mb-5 p-5">
        <div className="row mb-5">
          <h2 className='mb-4 text-center'>Explore different account types</h2>


          <div className="col">
          <div className="card" style={{width: "18rem"}}>
          {/* <img src="..." class="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">Individual Account</h5>
            <p className="card-text">Invest in equity, mutual funds and derivatives</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
          </div>

          <div className="col">
          <div className="card" style={{width: "18rem"}}>
          {/* <img src="..." class="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">HUF Account</h5>
            <p className="card-text">Make tax-efficient investments for your family</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
          </div>

          <div className="col">
          <div className="card" style={{width: "18rem"}}>
          {/* <img src="..." class="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">NRI Account</h5>
            <p className="card-text">Invest in equity, mutual funds, debentures, and more</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
          </div>
        </div>

        <div className="row mb-5">
        <div className="col">
        <div className="card" style={{width: "18rem"}}>
          {/* <img src="..." class="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">Minor Account</h5>
            <p className="card-text">Teach your little ones about money & invest for their future with them</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
           </div>

           <div className="col">
           <div className="card" style={{width: "18rem"}}>
          {/* <img src="..." class="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">Corporate / LLP/ Partnership</h5>
            <p className="card-text">Manage your business surplus and investments easily</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
          </div>

          <div className="col">
           <div className="card" style={{width: "18rem"}}>
          {/* <img src="..." class="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
          </div>
        </div>
      </div>

      <div className="container mb-5 p-5"> 
      <h1 className='mb-5'>FAQ</h1>

      </div>


      <div className="container">
      <div className="container p-5">
            <div className="row text-center">
            {/* <img src="https://zerodha.com/static/images/landing.png" alt="" srcset="" /> */}
            <h1 className="mt-5">Open a Zerodha account</h1>
            <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <button className="btn btn-primary" style={{width:"25%", margin:"0 auto"}}>Sign up now</button>
            {/* <button className="btn btn-outline-primary">Login</button> */}
            </div>
        </div>
      </div>
    </>
  );
}

export default Card;