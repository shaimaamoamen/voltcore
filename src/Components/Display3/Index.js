import React,{Component} from "react";
import{AboutSection,AboutData,AboutInfo,AboutTitle1,AboutTitle2,AboutButton,Button,AboutDesc} from './Style.js'
import Picture15 from "./../../Images/15.jpeg"
class Display3 extends Component{
    render(){
        return(
            <div className="container">
            <AboutSection>
            <AboutData>
                    <img src={Picture15} width="100%" height="100%"/>
                </AboutData>
                
                <AboutData>
                    <AboutInfo>
                        <AboutTitle1>
                           Digital marketing services
                        </AboutTitle1>
                        <AboutTitle2>
                            خدمات التسويق الرقمى
                        </AboutTitle2>
                        
                        <AboutDesc>
                          <AboutButton to="/contact3">
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
export default Display3;