function Coin() {
  return (
    <div className="container mb-5" style={{marginTop:"10px",padding:"60px",borderRadius:"10px",width:"90%"}}>

      <div className="row">

      <div className="col">
        <img src="https://zerodha.com/static/images/products-coin.png" className="img-fluid" alt="" srcset="" />
      </div>

      <div className="col p-5 m-5">
      <h2 className="mb-3">Coin</h2>
      <p className="text-muted">Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>

      <div className="row">
          <div className="col "><a href="3" className="text-decoration-none">Coin <i class="fa-solid fa-arrow-right"></i></a></div>
          
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

  );
}       


export default Coin;