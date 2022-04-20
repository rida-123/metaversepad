
import {ethers} from 'ethers'
import  './centeredmodal.css';
function MyVerticallyCenteredModal() {
  const connectWallet=async()=>{
  if(window.ethereum){
  await window.ethereum.request({method:"eth_requestAccounts"})
  .then(result=>{
    accountChangeHandler(result[0])
  })
  }
  else{
    alert("please install MetaMask chrome extension")
  }
  }
  const accountChangeHandler=(newAccount)=>{
    alert("Address is "+newAccount)
    getUserBalance(newAccount.toString())
  }
  const chainChanged=()=>{
    window.location.reload()
  }
  const getUserBalance=(address)=>{
    window.ethereum.request({method:"eth_getBalance",params:[address,"latest"]})
    .then(balance=>{
      alert("Balance is "+ethers.utils.formatEther(balance))
    })
  }
  window.ethereum.on("accountChanged",accountChangeHandler);
  window.ethereum.on("chainChanged",chainChanged)
    return (
        <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body" onClick={connectWallet}>
                <center>
            <img src="metamask.svg" width="50px" height="60px"></img>
            <br></br>
       
            <h2 style={{paddingTop:"5px"}}>MetaMask</h2>
          
         
            <p style={{color:"#A9A9BC",fontSize:"20px",paddingTop:"5px"}}>Connect to your MetaMask Wallet</p>
            </center>
            </div>
          
          </div>
        </div>
      </div>
      
    );
  }
  export default MyVerticallyCenteredModal;