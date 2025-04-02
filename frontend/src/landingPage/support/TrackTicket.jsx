function TrackTicket(){
    return(
        <div className="container-fluid  p-5 bg-primary text-white" style={{width: "100%"}}>
            
            <div className="row">
                <div className="col-md-6">

                    <h3 className="mb-5">Support Portal</h3>
                    <h2 className="mb-3">Search for an answer or browse help topics to create a ticket</h2>
                    <div className="form-group mb-4">
                        
                        <input type="text" className="form-control" id="ticketId" placeholder=" Eg: how do i activate F&O' why is my order getting rejected ..." />
                    </div>
                    <a href="" className="me-4 text-white">Track account opening</a><a href="" className="me-4 text-white"> Track segment activation</a><a href="" className="me-4 text-white"> Intraday margins</a><a href="" className="me-4 text-white">Kite user manual</a>
                    
            </div>


            <div className="col-md-6">

                <h5 className="p-5 "><a href="#" className="text-white">Track ticket</a></h5>

                <h3 className="mb-3">
                Featured
                </h3>
                <ol>
                    <li>
                        <a href="" className="mb-5 text-white">Exclusion of F&O contracts on 5 securities from May 27, 2025</a>
                    </li>
                    <li>
                        <a href="" className="text-white">Rights Entitlements listing in March 2025</a>
                    </li>
                </ol>
               
            </div>
        </div>

        </div>
    )
}
export default TrackTicket;