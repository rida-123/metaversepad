import './footer.css';
const Footer=()=>{
    return (
        <>
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-4'>
                      <div className='git'>
                          <a href="https://docs.metaversepad.app/" target="_blank"><img src="git_img.png"></img></a>
                      </div>
                    </div>
                    <div className='col-12 col-sm-8'>
                        <div className='social'>
                            <div className='row'>
                                <div className='col-12 col-sm-12 col-lg-5'>
                                    <h3>FIND US ON SOCIAL</h3>
                                </div>
                                <div className='col-12 col-sm-12 col-lg-7'>
<div className='social_img'>
    <a href="https://t.me/MetaPad_Community" target="_blank">
        <img src="telegram.png"></img>
    </a>
    <a href="https://twitter.com/meta_ecosystem" target="_blank">
        <img src="twitter.png"></img>
    </a>
    <a href="https://medium.com/@metaverse.ecosystem" target="_blank">
        <img src="medium.png"></img>
    </a>
    <a href="mailto:metaverse.ecosystem@gmail.com" target="_blank">
        <img src="message.png"></img>
    </a>
    

</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-sm-4'>
<div className='copy'>© 2021 MetaPad. All rights reserved.</div>
                    </div>
                    <div className='col-12 col-sm-8'>
<div className='contract'>
    <a href="https://bscscan.com/token/0xD88C6Ec2D3fBD90892c6749CF83De6ad10c30B4b" target="_blank">
        <button type='button' className='con_btn'>MPD Contract</button>
    </a>
</div>
<div className='mail'>
    <a href="mailto:metaverse.ecosystem@gmail.com"  className='anchor'>metaverse.ecosystem@gmail.com</a>
</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;