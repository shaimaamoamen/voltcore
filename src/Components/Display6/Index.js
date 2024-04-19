import React,{Component} from "react";
import{AboutSection,AboutData,AboutInfo,AboutTitle1,AboutTitle2,AboutButton,Button,AboutDesc} from './Style.js'
import Picture18 from "./../../Images/18.webp"
class Display6 extends Component{
    render(){
        return(
            <div className="container">
            <AboutSection>
            <AboutData>
                    <img src={Picture18} width="100%" height="100%"/>
                </AboutData>
                <AboutData>
                    <AboutInfo>
                        <AboutTitle1>
                            Advertising photography and editing
                        </AboutTitle1>
                        <AboutTitle2>
                            تصوير اعلانات ومونتاج
                        </AboutTitle2>
                        
                        <AboutDesc>
                          <AboutButton to="/contact6">
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
export default Display6;