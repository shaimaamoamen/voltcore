import React,{Component} from "react";
import{AboutSection,AboutData,AboutInfo,AboutTitle1,AboutTitle2,AboutButton,Button,AboutDesc} from './Style.js'
import Picture14 from "./../../Images/14.png"
class Display2 extends Component{
    render(){
        return(
            <div className="container">
            <AboutSection>
            <AboutData>
                    <img src={Picture14} width="100%" height="100%"/>
                </AboutData>
                
                <AboutData>
                    <AboutInfo>
                        <AboutTitle1>
                            Mobile application programming and development
                        </AboutTitle1>
                        <AboutTitle2>
                            برمجة وتطوير تطبيق موبايل
                        </AboutTitle2>
                        
                        <AboutDesc>
                          <AboutButton to="/contact2">
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
export default Display2;