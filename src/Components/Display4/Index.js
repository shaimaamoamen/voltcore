import React,{Component} from "react";
import{AboutSection,AboutData,AboutInfo,AboutTitle1,AboutTitle2,AboutButton,Button,AboutDesc} from './Style.js'
import Picture16 from "./../../Images/16.jpg"
class Display4 extends Component{
    render(){
        return(
            <div className="container">
            <AboutSection>
            <AboutData>
                    <img src={Picture16} width="100%" height="100%"/>
                </AboutData>
                
                <AboutData>
                    <AboutInfo>
                        <AboutTitle1>
                            Logo design and visual identity
                        </AboutTitle1>
                        <AboutTitle2>
                            تصميم الشعارات والهوية البصرية
                        </AboutTitle2>
                        
                        <AboutDesc>
                          <AboutButton to="/contact4">
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
export default Display4;