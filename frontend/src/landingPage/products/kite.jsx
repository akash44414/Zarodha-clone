function kite() {
  return (
    <>
    <div className="container mb-5" style={{marginTop:"10px",padding:"60px",borderRadius:"10px",width:"90%"}}>
      <div className="row mt-5">
        <div className="col text-center ">
          <h1 className="mb-3">Zerodha Products</h1>
          <h5 className="mb-3 text-muted">Sleek, modern, and intuitive trading platforms</h5>
          <h6 className="text-muted">Check out our investment offerings →</h6>
        </div>
      </div>
    </div>

    <div className="container mb-5" style={{marginTop:"10px",padding:"60px",borderRadius:"10px",width:"90%"}}>

      <div className="row">

      <div className="col">
        <img src="https://zerodha.com/static/images/products-kite.png" className="img-fluid" alt="" srcset="" />
      </div>

      <div className="col p-5 m-5">
      <h2 className="mb-3">Kite</h2>
      <p className="text-muted">Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>

      <div className="row">
          <div className="col "><a href="3" className="text-decoration-none">Try demo <i class="fa-solid fa-arrow-right"></i></a></div>
          <div className="col "><a href="3" className="text-decoration-none">
          Learn more <i class="fa-solid fa-arrow-right"></i> </a></div>
        </div>

        <div className="row">
          <div className="col">
            <a href="">
            <img src="https://zerodha.com/static/images/google-play-badge.svg" alt="" className="img-fluid mt-3"/>
            </a>
          </div>
          <div className="col "> 
            <a href="">
              <img src="https://zerodha.com/static/images/appstore-badge.svg" className="img-fluid mt-3" alt="" />
            </a>
          </div>
        </div>
  
        </div>

        </div>

        

      
    </div>

    </>
  );
}   

export default kite;