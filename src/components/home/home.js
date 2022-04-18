import { Carddata } from '../data';
import Navbar from '../navbar/navbar';
import Header from '../header/header';
import Card from '../card/card';
import About from '../About/about';
import Pricing from '../pricing/pricing';
import Pool from '../pool/pool';
import Roadmap from '../roadmap/roadmap';
import Tokenomics from '../tokenomics/tokenomics';
import Team from '../team/team';
import Footer from '../footer/footer';
const Home=()=>{
    return(
        <>
          <Navbar></Navbar>
      <Header />
      <Card />
      <About />
      <Pricing cardData={Carddata}></Pricing>
      <Pool />
      <Roadmap></Roadmap>
      <Tokenomics />
      <Team />
      <Footer />
        </>
    )
}
export default Home