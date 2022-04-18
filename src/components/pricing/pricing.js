import './pricing.css';
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react'
const Pricing = ({cardData}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (

        <>
            <div className='pricing' id="tier">
                <div className='container'>
                    <div className='titles'>
                        <div className='title-line'></div>
                        <h3>TIER SYSTEM</h3>
                    </div>
                    <div className='mpdbal'>
                        <p>YOUR WALLET BALANCE</p>
                        <h3>MPD</h3>
                    </div>
                    <div className='row price-table'>
                        {
                            cardData.map((carddata)=>{
                                return(
                                    <>
                                      <div className='col-12 col-sm-6'>
                                      <div data-aos={carddata.dataaos} data-aos-duration={carddata.duration}>  
                            <div className='bronze' style={{border:carddata.border}}>
                                <h2 style={{color:carddata.color}}>{carddata.title}</h2>
                                <div className='plainline'></div>
                                <br></br>

                                <div className='pplan1'>
                                    <p>Min. Staking amount</p>
                                    <h3>{carddata.amount}</h3>
                                </div>
                                <p>Staking Time</p>
                                <h3>30/180 Days</h3>
                                <p>Requirements</p>
                                <h3>-</h3>
                                <p>Weight</p>
                                <h3>{carddata.weight}</h3>
                                <div className='grant'>
                                    <p>Guaranteed allocation</p>
                                    <h3 style={{ color: "#3ddf84" }}>✓</h3>
                                </div>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">

                                        <button className='accordion ido_button' data-toggle="collapse"
                                            data-target={carddata.datatarget}
                                            aria-expanded="true"
                                            aria-controls={carddata.ariacontrols} style={{ width: "340px" }}>30 Days</button>

                                        <div
                                            id={carddata.id}
                                            className="accordion-collapse collapse "
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className='panel' >

                                                <div className='stalepanel'>
                                                    <input type="number" id="amount0" className='form-control' placeholder='0 MPD'></input>
                                                    <button type="button" className='applied' style={{ marginTop: "10px", width: "100%" }}>Stake</button>
                                                </div>
                                                <div className='st-form'>
                                                    <div className='st-title'>Staked</div>
                                                    <div className='st-amount' id="invested0">0.0000 MPD</div>
                                                </div>
                                                <div className='st-form'>
                                                    <div className='st-title'>Unstaked</div>
                                                    <div className='st-amount' id="unstacked0">0.0000 MPD</div>
                                                    <div className='row'>
                                                        <div className='col-6'>
                                                            <button type="button" className='applied' style={{ marginTop: "10px", width: "100%" }}>Restake</button>
                                                        </div>
                                                        <div className='col-6'>
                                                            <button type="button" className='applied' style={{ marginTop: "10px", width: "100%" }}>Withdraw</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='clr' style={{ height: "50px" }}></div>
                                            </div>
                                            <div className='clr'></div>
                                        </div>
                                    </div>
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">

                                        </div>                            <button className='accordion ido_button' style={{ width: "340px" }}
                                            data-toggle="collapse"
                                            data-target={carddata.target}
                                            aria-expanded="true"
                                            aria-controls={carddata.controls}>180 Days</button>
                                        <div
                                            id={carddata.Uniqueid}
                                            className="accordion-collapse collapse "
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className='panel' >
                                                <br></br>
                                                <center>
                                                    <h4>46% APR</h4>
                                                </center>
                                                <div className='plainline'></div>
                                                <div className='stalepanel'>
                                                    <input type="number" id="amount0" className='form-control' placeholder='0 MPD'></input>
                                                    <button type="button" className='applied' style={{ marginTop: "10px", width: "100%" }}>Stake</button>
                                                </div>
                                                <div className='st-form'>
                                                    <div className='st-title'>Staked</div>
                                                    <div className='st-amount' id="invested0">0.0000 MPD</div>
                                                </div>
                                                <div className='st-form'>
                                                    <div className='st-title'>Unstaked</div>
                                                    <div className='st-amount' id="unstacked0">0.0000 MPD</div>
                                                    <div className='row'>
                                                        <div className='col-6'>
                                                            <button type="button" className='applied' style={{ marginTop: "10px", width: "100%" }}>Restake</button>
                                                        </div>
                                                        <div className='col-6'>
                                                            <button type="button" className='applied' style={{ marginTop: "10px", width: "100%" }}>Withdraw</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='st-form'>
                                                    <div className='st-title'>Rewards</div>
                                                    <div className='st-amount' id="unstacked0">0.0000 MPD</div>
                                                    <div className='row'>
                                                        <div className='col-6'>
                                                            <button type="button" className='applied' style={{ marginTop: "10px", width: "100%" }}>Withdraw</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='clr' style={{ height: "40px" }}></div>
                                </div>                        </div>
                        </div>
                        </div>
                                    </>
                                )
                            })
                        }
                      
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing;