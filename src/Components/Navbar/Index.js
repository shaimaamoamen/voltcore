import React,{Component} from "react";
import{AboutSection,AboutData,AboutDesc,Image ,Word,Slideshow,Img} from './Style.js'
import Picture4 from "./../../Images/1.png"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Picture1 from "./../../Images/3.jpg"
import Picture2 from "./../../Images/4.jpg"
import Picture3 from "./../../Images/5.jpg"
class Navbar extends Component{
    render(){
        return(
            <AboutSection>
                <center>
               <AboutData>
                    <Image  src={Picture4}  />
                </AboutData>
                 </center>
                <AboutData>
                    
                        <AboutDesc>
                          
                        <Word>[voltcore]</Word> is aleading company in digital marketing, mobile app development
                        and website programming and development we provide comprehensive services
                        that help our clients achieve their business goals    
                         
                        </AboutDesc>
                        </AboutData>
                        <center>
                    <Slideshow>
                    <Carousel  >
        
        <Carousel.Item interval={3000}>
            
          <Img
            className="d-block w-100 img1"
src={Picture1}
            alt=""
          />
          
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Img
            className="d-block w-100 img1"
src={Picture2}
            alt=""
          />
        
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Img 
            className="d-block w-100 img1"
src={Picture3}
            alt=""
          />
         
        </Carousel.Item>
        
        </Carousel>
                    
                </Slideshow>
                </center>
            </AboutSection>
            
        )
    }
}
export default Navbar;