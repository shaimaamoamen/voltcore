import React,{Component} from "react";
import{AboutSection,AboutData,AboutInfo,AboutTitle1,AboutTitle2,AboutButton,Button,AboutDesc} from './Style.js'
import Picture17 from "./../../Images/17.jpg"
class Display5 extends Component{
    render(){
        return(
            <div className="container">
            <AboutSection>
            <AboutData>
                    <img src={Picture17} width="100%" height="100%"/>
                </AboutData>
                <AboutData>
                    <AboutInfo>
                        <AboutTitle1>
                            Social media designs
                        </AboutTitle1>
                        <AboutTitle2>
                            تصميمات سوشيال ميديا
                        </AboutTitle2>
                        
                        <AboutDesc>
                          <AboutButton to="/contact5">
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
export default Display5;