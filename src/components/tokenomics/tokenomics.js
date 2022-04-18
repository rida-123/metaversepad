import './tokenomics.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Tokenomics=()=>{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <>
        <div className='token'>
            <div className='container'>
            <div data-aos="zoom-in" data-aos-duration="700">
                <div className='tokenomics'>
                    <div className='title1'>
                        <div className='title-line'></div>
                        <h3>TOKENOMICS</h3>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-sm-6 col-lg-3'>
<img src='tokenomic_grafic.png' className='img-fluid'></img>
                        </div>
                        <div className='col-12 col-sm-6 col-lg-9'>
<div className='graph'>
    <div className='row'>
        <div className='col-12 col-sm-5'>
<div className='title1'>
    <h4>Max Supply</h4>
    <div className='title-line'></div>
    <h3>100,000,000</h3>
</div>
        </div>
        <div className='col-12 col-sm-4'>
            <p><img src="e1.png"></img>&nbsp; Company reserve - 40m</p>
            <p><img src="e2.png"></img>&nbsp;  Token sell - 21m</p>
            <p><img src="e3.png"></img>&nbsp;  Liquidity- 15m</p>
        </div>
        <div className='col-12 col-sm-3'>
        <p><img src="e4.png"></img>&nbsp;  Marketing - 9.5m</p>
            <p><img src="e5.png"></img>&nbsp;   Team - 10m</p>
            <p><img src="e6.png"></img>&nbsp;   Advisor - 4.5m</p>
        </div>
    </div>
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
export default Tokenomics;