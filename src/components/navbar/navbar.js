import './navbar.css'
const Navbar = () => {
  return (
    <>
      <div className='bg'>
        <div className='container-fluid' style={{ padding: "0px" }}>
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid" style={{ padding: "50px" }}>
              <a className="navbar-brand" href="#">
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
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      <img src="menu_icon1.png" className='img'></img>
                      Launchpad
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pool">
                      <img src="menu_icon2.png" className='img'></img>
                      View Pools
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tier">
                      <img src="menu_icon4.png" className='img'></img>
                      Staking
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <img src="menu_icon3.png" className='img'></img>
                      Projects
                    </a>
                  </li>


                </ul>
                <form className="d-flex">
                  <button className="btn1" >
                    Wallet Connect
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
export default Navbar;