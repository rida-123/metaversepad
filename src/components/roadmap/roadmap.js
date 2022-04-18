import './roadmap.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Roadmap=()=>{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <>
        <div className='road'>
        <div className='container' >
            <div className='roadmap'>
                <div className='title1'>
<div className='title-line'></div>
    <h3>ROADMAP</h3>

                </div>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-lg-3'>
                    <div data-aos="fade-down" data-aos-duration="900">
                        <div className='row'>
                            <div className='col'>
                                <div className='q'>Q3</div>
                            </div>
                            <div className='col'>
                                <h2>2021</h2>
                            </div>
                        </div>
                        <div className='map'>
                            <p><img src="s.png"></img>&nbsp; Start developing</p>
                            <p><img src="s.png"></img>&nbsp; Beta test platform</p>
                            <p><img src="s.png"></img>&nbsp; Community building</p>
                        </div>
                        <div className='road-line'></div>
                    </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-3'>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className='drop'>
                        <div className='row'>
                            <div className='col'>
                                <div className='q'>Q4</div>
                            </div>
                            <div className='col'>
                                <h2>2021</h2>
                            </div>
                        </div>
                        <div className='map'>
                            <p><img src="s.png"></img>&nbsp; Launch platform</p>
                            <p><img src="s.png"></img>&nbsp; Start marketing company</p>
                            <p><img src="s.png"></img>&nbsp; Public token sell</p>
                            <p><img src="s.png"></img>&nbsp;  Listing on DEX</p>
                            <p><img src="s.png"></img>&nbsp;  Launch staking</p>
                            <p><img src="s.png"></img>&nbsp; First launch IDO</p>
                            <p><img src="s.png"></img>&nbsp; Strategic partnerships</p>
                        </div>
                        <div className='road-line'></div>
                        </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-3'>
                    <div data-aos="fade-down" data-aos-duration="1100">
                        <div className='row'>
                            <div className='col'>
                                <div className='q'>Q1</div>
                            </div>
                            <div className='col'>
                                <h2>2022</h2>
                            </div>
                        </div>
                        <div className='map'>
                            <p><img src="s.png"></img>&nbsp; Launch NFT</p>
                            <p><img src="s.png"></img>&nbsp; Support NFT BEP1155</p>
                            <p><img src="s.png"></img>&nbsp; Listing on CEX</p>
                            <p><img src="s.png"></img>&nbsp; Start developing MetaDEX</p>
                            <p><img src="s.png"></img>&nbsp; AirDrop event</p>
                            <p><img src="s.png"></img>&nbsp;  Pools update</p>
                        </div>
                        <div className='road-line'></div>
                    </div>
                    </div>
                    <div className='col-12 col-sm-6 col-lg-3'>
                    <div data-aos="fade-up" data-aos-duration="1200">
                        <div className='drop'>
                        <div className='row'>
                            <div className='col'>
                                <div className='q'>Q2</div>
                            </div>
                            <div className='col'>
                                <h2>2022</h2>
                            </div>
                        </div>
                        <div className='map'>
                            <p><img src="s.png"></img>&nbsp;  Launch MetaDex</p>
                            <p><img src="s.png"></img>&nbsp; Developing MetaWallet</p>
                            <p><img src="s.png"></img>&nbsp; Launch new major CEX</p>
                            <p><img src="s.png"></img>&nbsp;  Listing on DEX</p>
                            <p><img src="s.png"></img>&nbsp;   Launch MetaWallet</p>
                            <p><img src="s.png"></img>&nbsp; Ecosystem refinement</p>
                        </div>
                        <div className='road-line'></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
        </>
    )
}
export default Roadmap;