import React from "react";
import {HomeSection,HomeInformation,HomeTitle,HomeDesc,HomeButton,Button,Span1,Span2,Span3} from './Style.js'
const Explain=()=>{
    return(
        <HomeSection>
            
            
                <HomeInformation>
                    
                    <HomeTitle>
                         <Span1>ثقتك محل تقدير لدينا</Span1>
                         <br/>
                         <Span2>نقدم لك الخدمة بأفضل سعر وأعلى جودة</Span2>
                         <br/>
                        <Span3> تواصل معنا من خلال الرابط الاسفل</Span3>
                    </HomeTitle> 
                    
                    
                    <HomeDesc>
                          <HomeButton to="/contact8">
                            <Button>تواصل معنا</Button>
                           </HomeButton> 
                        </HomeDesc>
                        
                </HomeInformation>
              
        </HomeSection>
    )
}
export default Explain;