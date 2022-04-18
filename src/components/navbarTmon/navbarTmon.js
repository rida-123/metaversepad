import React from 'react'
import './navbarTmon.css'
const NavbarTmon = () => {
  return (
    <>
     <>
      <div className='bg1'>
        <div className='container' >
          <nav className="navbar navbar-expand-lg navbar-light " style={{ paddingTop: "30px" }}>
            <a className="navbar-brand" href="#" >
              <img src="logo.png"></img>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

             <ul className='navbar-nav me-auto mb-2 mb-lg-0'>

             </ul>
             <span className='navbar-text'>
               <button type='button' className='btn2'>Wallet Connect</button>
             </span>
            </div>
          </nav>

        </div>
        <div className='container' style={{paddingBottom:"40px"}}>
          <div className='row'>
            <div className='col-12 col-sm-6'>
              <div className='proj_icon'>
                <div className='row'>
                  <div className='col-3'>
                    <img src="logo_about (1).png" className='img-fluid'></img>
                  </div>
                  <div className='col-9'>
                    <h3>TWO MONKEY</h3>
                    <p>twomonkeyjuicebar.com</p>
                  </div>
                </div>
                <div className='preline'></div>
                <img src="bsc.png" className='img-fluid'></img>
                <div className='allocation'>
                  <p>Pool Size</p>
                  <h2>BUSD&nbsp;<span id="totalInvestBUSD">-</span></h2>
                  <h2>TMON&nbsp;<span id="totalInvestBUSD">-</span></h2>
                  <div className='progress' style={{ height: "20px" }}>

                  </div>
                  <h3>
                    <img src="upline.png" className='img-fluid' style={{ marginTop: "-5px" }}></img> &nbsp;RAISED  &nbsp;<span>-</span> &nbsp; /  &nbsp;<span>-</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6'>

              <div className='form-bg'>
                <div className='forwho'>
FOR TIER STAKERS
                </div>
                <div className='whilist'>
                  Only for tier Stakers
                </div>
                <div className='timebg'>
                    <img src="time_icon.png"></img>
                    <span>&nbsp;&nbsp;Connect Wallet</span>
                </div>
                <div className='formido'>
                  <input type="number" className='form-control' placeholder='Min. 50 BUSD'></input>
                  <br></br>
                  <p>Token Prize&nbsp;<b>BUSD &nbsp;-</b></p>
                  <p>Max Allocation&nbsp;<b>BUSD &nbsp;-</b></p>
                  <button type="button" className='ido_button'>Contribute</button>
                </div>
                <div className='aloc'>
                  <p>Reserved Tokens:</p>
                  <h3>0&nbsp;TMON</h3>
                  <p>Tokens for Withdrawal</p>
                  <h3>0&nbsp;TMON</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    </>
  )
}

export default NavbarTmon