import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react'
import { Link } from "react-router-dom";
import './pool.css'
const Pool = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <>
            <div className='pools' id="pool">
                <div className='pool-bg'>
                    <div className='container'>
                        <div className='pool-place'>
                            <div className='title1'>
                                <div className='title-line'></div>
                                <h3>POOLS</h3>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm-12 col-lg-6'>
                                    <div data-aos="flip-up" data-aos-duration="900">
                                    <div className='mid_pool'>
                                        <div className='row'>
                                            <div className='col-12 col-sm-5 col-lg-6'>
                                                <div className='polava'>
                                                    <img src="crafty.jpg" className='img_fluid'></img>
                                                </div>
                                            </div>
                                            <div className='col-12 col-sm-7 col-lg-6'>
                                                <div className='pool_info'>
                                                    <h3>CraftyFi</h3>
                                                    <p> 3D MMORPG based on Smart Chain</p>
                                                    <div className='time_bg'>
                                                        <img src="time_icon.png"></img>Loading...
                                                    </div>
                                                    <div className='row'>
                                                        <div className='pool_footer'>
                                                            <div className='col'>
                                                                <img src="craftyicon.png"></img>
                                                                <h3>CRAFTY</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pool_down'>
                                        <div className='row'>
                                            <div className='col-12 col-sm-9'>
                                                <div className='dpbg'>
                                                    <b>Access</b>
                                                    &nbsp;For tier stakers

                                                </div>
                                            </div>
                                            <div className='col-12 col-sm-3'>
                                                <div className='col'>
                                                    <Link to="/crafty">
                                                    <button type='button' className='pool_btn'>Visit</button>
                                                    </Link>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='pools'>
                <div className='pool-bg' >
                    <div className='container'>
                        <div className='pool-place'>
                            <div className='title1'>
                                <div className='title-line'></div>
                                <h3> CLOSED POOLS</h3>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm-12 col-lg-6'>
                                <div data-aos="flip-up" data-aos-duration="900">
                                    <div className='mid_pool'>
                                        <div className='row'>
                                            <div className='col-12 col-sm-5 col-lg-6'>
                                                <div className='polava'>
                                                    <img src="tmon.jpg" className='img_fluid'></img>
                                                </div>
                                            </div>
                                            <div className='col-12 col-sm-7 col-lg-6'>
                                                <div className='pool_info'>
                                                    <h3>Two Monkey</h3>
                                                    <p> Match-Three-Puzzle Play2Earn Game</p>
                                                    <div className='time_bg'>
                                                        <img src="time_icon.png"></img>Connect Wallet
                                                    </div>
                                                    <div className='row'>
                                                        <div className='pool_footer'>
                                                            <div className='col'>
                                                                <img src="tmon.png"></img>
                                                                <h3>TMON</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pool_down'>
                                        <div className='row'>
                                            <div className='col-12 col-sm-9'>
                                                <div className='dpbg'>
                                                    <b>Access</b>
                                                    &nbsp;For tier stakers

                                                </div>
                                            </div>
                                            <div className='col-12 col-sm-3'>
                                                <div className='col'>
                                                    <Link to="/tmon"><button type='button' className='pool_btn'>Visit</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
</div>
                            </div>


                        </div>
                        <div className='clr' style={{height:"40px"}}></div>
                      
                    </div>
                </div>
            </div>
        </>
    )
}
export default Pool;