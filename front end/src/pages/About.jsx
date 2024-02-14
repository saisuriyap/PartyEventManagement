import Product from "../components/Product"
import CustomNavBar from "../components/nvbar"
import Events from "./events"
const About=()=>{
    return (
        <div>
            <header>
                <CustomNavBar></CustomNavBar>
            </header>
            <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
            <br/>
            <br/>
           <Events/>
        </div>
        
    )
    }
    export default About