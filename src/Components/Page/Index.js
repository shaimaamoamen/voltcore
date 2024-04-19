import React, { Fragment } from "react";
import Footer from './../Footer/Index.js'
import Explain from './../Explain/Index.js'
import Contact from './../Contact/Index.js'
import picture22 from './../../Images/22.png'
import{ContactSection,Form,FormInput,InputText,InputEmail,InputExp,TextArea,Input,InputSubmit}from './Style.js'
const Page=()=>{
    return(
        <React.Fragment>
            <center>
                <img src={picture22}/>
            </center>
       <ContactSection>
           <div className="container">
                   <Form action="">
                   <FormInput>
                       <InputText type='text' placeholder="Your Name"/>
                       <InputEmail type='email' placeholder="Your Email"/>
                   </FormInput>
                   <InputExp type='text' className="sub" placeholder="Your Subject"/>
                   <TextArea cols='30' rows='10' placeholder="Your Message"></TextArea>
                   <InputSubmit type="submit" value="Send Message"/>
               </Form>
           </div>
       </ContactSection>
       <div>
        <center>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.0123564738674!2d29.970439674684293!3d31.248081260545913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c502b91847fb%3A0x55ef3cb0651b4cb5!2sPaolo%20Rossini%20Luran!5e0!3m2!1sen!2seg!4v1706550657234!5m2!1sen!2seg" width="775" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </center>
        </div>
       <Explain/>
       <Contact/>
       <Footer/>
       </React.Fragment>
    )
}
export default Page;