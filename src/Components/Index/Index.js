import React,{Component} from "react";
import Navbar from './../Navbar/Index.js'
import Ourservices from './../Ourservices/Index.js'
import Display1 from './../Display1/Index.js'
import Display2 from './../Display2/Index.js'
import Display3 from './../Display3/Index.js'
import Display4 from './../Display4/Index.js'
import Display5 from './../Display5/Index.js'
import Display6 from './../Display6/Index.js'
import Display7 from './../Display7/Index.js'
import Explain from './../Explain/Index.js'
import Contact from './../Contact/Index.js'
import Footer from './../Footer/Index.js'
class Index extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Ourservices/>
                <Display1/>
                <Display2/>
                <Display3/>
                <Display4/>
                <Display5/>
                <Display6/>
                <Display7/>
                <Explain/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}
export default Index