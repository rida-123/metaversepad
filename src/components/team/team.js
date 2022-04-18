import './team.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Team=()=>{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <>
        <div className='team'>
            <div className='container'>
            <div data-aos="zoom-in" data-aos-duration="700">
                <div className='title2'>
               <h3>OUR PARTNERS</h3>
                </div>
                <div className='part-line'></div>
                <div className='logos'>
                    <img src="1.png" className='img-fluid'></img>
                    <img src="2.png" className='img-fluid'></img>
                    <img src="3.png" className='img-fluid'></img>
                    <img src="4.png" className='img-fluid'></img>
                    <img src="5.png" className='img-fluid'></img>
                    <img src="6.png" className='img-fluid'></img>
                    <img src="7.png" className='img-fluid'></img>
                    <img src="8.png" className='img-fluid'></img>
                    <img src="9.png" className='img-fluid'></img>
                    <img src="10.png" className='img-fluid'></img>
                    <img src="11.png" className='img-fluid'></img>
                    <img src="12.png" className='img-fluid'></img>
                    <img src="13.png" className='img-fluid'></img>
                    <img src="14.png" className='img-fluid'></img>
                    <img src="15.png" className='img-fluid'></img>
                    <img src="16.png" className='img-fluid'></img>
                    <img src="17.png" className='img-fluid'></img>
                    <img src="18.png" className='img-fluid'></img>
                </div>
            </div>
        </div>
        </div>
      
        </>
    )
}
export default Team;