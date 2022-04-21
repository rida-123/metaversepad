import { ethers } from 'ethers'
import './centeredmodal.css';
function MyVerticallyCenteredModal() {
  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      console.log("Account:", await signer.getAddress());
      let balance = await signer.getBalance();

      console.log("balance: ", ethers.utils.formatEther(balance))
      let network = await provider.getNetwork();
      let chainId = network.chainId;
      console.log("network:", network.name);
      console.log("chainId: ", chainId);
    }

    else {
      alert("please install MetaMask chrome extension")
    }
  }
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

              <h2 style={{ paddingTop: "5px" }}>MetaMask</h2>


              <p style={{ color: "#A9A9BC", fontSize: "20px", paddingTop: "5px" }}>Connect to your MetaMask Wallet</p>
            </center>
          </div>

        </div>
      </div>
    </div>

  );
}
export default MyVerticallyCenteredModal;