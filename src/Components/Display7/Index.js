import React,{Component} from "react";
import{AboutSection,AboutData,AboutInfo,AboutTitle1,AboutTitle2,AboutButton,Button,AboutDesc} from './Style.js'
import Picture19 from "./../../Images/19.jpg"
class Displa7 extends Component{
    render(){
        return(
            <div className="container">
            <AboutSection>
            <AboutData>
                    <img src={Picture19} width="100%" height="100%"/>
                </AboutData>
                <AboutData>
                    <AboutInfo>
                        <AboutTitle1>
                            Mix academy
                        </AboutTitle1>
                        <AboutTitle2>
                            كورسات تعليمية
                        </AboutTitle2>
                        
                        <AboutDesc>
                          <AboutButton to="/contact7">
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
export default Displa7;