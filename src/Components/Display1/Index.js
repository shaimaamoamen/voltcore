import React,{Component} from "react";
import { Animator,ScrollContainer,ScrollPage } from "react-scroll-motion";
import{AboutSection,AboutData,AboutInfo,AboutTitle1,AboutTitle2,AboutButton,Button,AboutDesc} from './Style.js'
import Picture13 from "./../../Images/13.jpg"
class Display1 extends Component{
    render(){
        return(
            <div className="container">
            <AboutSection>
            <AboutData>                  
                    <img src={Picture13} width="100%" height="100%"/>
                                                                 
               </AboutData>
                
                <AboutData>
                    <AboutInfo>
                        <AboutTitle1>
                            Web design and development
                        </AboutTitle1>
                        <AboutTitle2>
                            تصميم وتطوير مواقع الويب
                        </AboutTitle2>
                        
                        <AboutDesc>
                          <AboutButton to="/contact1">
                            <Button>للتواصل</Button>
                           </AboutButton> 
                        </AboutDesc>
                        
                    </AboutInfo>
                </AboutData>
                
            </AboutSection>
            </div>
        )
    }
}
export default Display1;