import React,{Component} from "react";
import{ContactSection,ContactData,ContactDesc,SpanInfo,SpanTitle,Image,Imge,ContactIcon} from './Style.js'
import Picture21 from "./../../Images/21.png"
class Contact extends Component{
    render(){
        return(
            <ContactSection>
        
                    
            <ContactData >
            <ContactDesc>
            <SpanTitle>Mobile</SpanTitle>
            <SpanInfo>01227999907</SpanInfo>
            <SpanInfo>01092162260</SpanInfo>  
            </ContactDesc>
           </ContactData>
            <ContactData >
            
            <ContactDesc>
                 <SpanTitle>Email</SpanTitle>
                <SpanInfo>voltcoremarketing@gmail.com
                </SpanInfo>
          <SpanInfo>marketing@voltcore.org
                </SpanInfo>
                <Image to="https://www.facebook.com/voltcormarketing?mibextid=kFxxJD">
                    
                        <ContactIcon>
                         <center>
                     <Imge src={Picture21} />
                        </center>
                        </ContactIcon>
                        
                </Image>
            </ContactDesc>
            
           </ContactData>
           <ContactData >
            <ContactDesc>
            <SpanTitle>Address</SpanTitle>
                <SpanInfo>
                    Headquarters..loran abu qir street banque misr building,
                    loran branch,seventh floor-bab al-amara next to apple halwani
                </SpanInfo>
                
            </ContactDesc>
            
           </ContactData>
           
            </ContactSection>
        )
    }
}
export default Contact;