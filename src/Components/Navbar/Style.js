import Styled from 'styled-components'
import Picture5 from "./../../Images/2.jpg"
export const AboutSection=Styled.div`
background-image:url(${Picture5});
background-repeat: no-repeat;
background-size:cover;
width:auto;
height:auto;
text-align:center;
`
export const AboutData=Styled.div`
box-sizing: border-box;

`

export const AboutDesc=Styled.p`
margin-left:15px;
margin-right:30px;
font-family:Roboto;
font-size: 25px;
color: white;
line-height: 1.5;
`
export const Image=Styled.img`
height:100px;
width:150px;
`
export const Word=Styled.span`
font-weight:bold;
`
export const Slideshow=Styled.div`
width:75%;

animation-name: text;
animation-duration: 2s;
animation-delay: 0s;
animation-timing-function: cubic-bazier(0,0,.9,.9);
animation-iteration-count:1;
animation-direction: normal;
@keyframes text{
    from{
        transform:translatey(-600px)
        
    }
    to{
        transform:translatey(0px) 
    }
}
@media(max-width:480px){
    
    width:85%;
 }
`


export const Img=Styled.img`
height:500px;
@media(max-width:480px){
    
    height:350px;
 }
`