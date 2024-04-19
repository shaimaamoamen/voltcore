import React,{Component} from "react";
import{OurservicesSection,OurservicesPart,Image,Title}from "./Style.js"
import Picture6 from "./../../Images/6.png"
import Picture7 from "./../../Images/7.png"
import Picture8 from "./../../Images/8.png"
import Picture9 from "./../../Images/9.png"
import Picture10 from "./../../Images/10.png"
import Picture11 from "./../../Images/11.png"
import Picture12 from "./../../Images/12.png"
class Ourservices extends Component{
    render(){
        return(
            
            <OurservicesSection>
                <OurservicesPart to="/call1">
                    
                        
                    < Image src={Picture6}/>
                        
                        
                         <Title>
                            advertising photography and editing
                        </Title>
                    
                </OurservicesPart>
                <OurservicesPart to="/call2">
                
                        
                    < Image src={Picture7}/>
                        
                         <Title>
                            digital marketing services
                        </Title>
                       
                    
                </OurservicesPart>
                <OurservicesPart to="/call3">
                
                        
                    < Image src={Picture8}/>
                        
                         <Title>
                          mobile application programming and development
                        </Title>
                    
                </OurservicesPart>
                <OurservicesPart to="/call4">
                
                        
                    < Image src={Picture9}/>
                        
                         <Title>
                            web design and development
                        </Title>
                    
                </OurservicesPart>
                <OurservicesPart to="/call5">
            
                        
                    < Image src={Picture10}/>
                        
                         <Title>
                            social media designs
                        </Title>
                    
                </OurservicesPart>
                <OurservicesPart to="/call6">
                
                        
                    < Image src={Picture11}/>
                        
                         <Title>
                            logo design and visual identity
                        </Title>
                    
                </OurservicesPart>
                <OurservicesPart to="/call7">
            
                        
                    < Image src={Picture12}/>
                        
                         <Title>
                            mix academy
                        </Title>
                    
                </OurservicesPart>
            </OurservicesSection>
            
        )
    }
}
export default Ourservices;