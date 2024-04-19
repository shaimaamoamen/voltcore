import Styled from 'styled-components'
import { Link } from 'react-router-dom'
export const ContactSection=Styled.div`
background-color:black;
width:auto;
height: auto;
overflow: hidden; 
`
export const ContactData=Styled.div`
margin-top:50px;
height:400px;
width: 33.3%;
float: left;
box-sizing: border-box;
padding: 100px 0 100px 60px;
@media(max-width:480px){
    float:none;
    height:auto;
    width:auto; 
}


`

export const ContactDesc=Styled.p`
font-weight: normal;
font-size: 20px;
color: white;
float:left;

`
export const SpanInfo=Styled.span`
display: block;
margin-bottom: 8px;
`
export const SpanTitle=Styled.h4`
font-weight: bold;
`
export const Image=Styled(Link)`
text-decoration:none;
`
export const Imge=Styled.img`
width:50px;
height:50px;
background-color:white;
border-radius:50px;
&:hover{
    background-color:#F7B500;
    
}
`
export const ContactIcon=Styled.div`
padding:60px;
`

