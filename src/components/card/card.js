import './card.css'
const Card=()=>{
return<>
<div className='card'>
<div className='container' style={{backgroundColor: "#061123"}}>
<div className='row' style={{paddingTop:"50px",paddingBottom:"50px"}}>
    <div className='col-12 col-sm-4'>

    <div className="media">
  <img className="mr-3" src="ido_icon.png" alt="Generic placeholder image" />
  <span className="head mt-0">Launchpad</span>
  <div className="media-body">
    
    Fundrising and launching new metaverse <br></br>projects.
  </div>
</div>

    </div>
    <div className='col-12 col-sm-4'>
    <div className="media">
  <img className="mr-3" src="nft_icon.png" alt="Generic placeholder image" />
  <span className="head mt-0">NFT Produce</span>
  <div className="media-body">
  Opportunity to produce and trade items on the metaverse ecosystem.
  </div>
</div>
    </div>
    <div className='col-12 col-sm-4'>
    <div className="media">
  <img className="mr-3" src="audit_icon.png" alt="Generic placeholder image" />
  <span className="head  mt-0">Contracts Audits</span>
  <div className="media-body">Smart Contract audits and support with development
  </div>
</div>
    </div>
</div>
</div>
</div>
</>
}
export default Card