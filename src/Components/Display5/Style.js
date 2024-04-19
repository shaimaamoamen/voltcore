import Styled from 'styled-components'
import { Link } from 'react-router-dom'
export const AboutSection=Styled.div`
height: auto;
overflow: hidden; 
margin-top:50px;
text-align:center;

`
export const AboutData=Styled.div`
width: 50%;
float: left;
box-sizing: border-box;
@media(max-width:480px){
    float:none;
    width:100%;
 }
`
export const AboutInfo=Styled.div`
width: 100%;
float: left;

`
export const AboutTitle1=Styled.h1`

margin-bottom: 20px;
font-weight:bold;

`
export const AboutDesc=Styled.div`
float:none;

`
export const AboutTitle2=Styled.h1`
float:none;
margin-bottom: 20px;
font-weight:bold;
`
export const AboutButton=Styled(Link)`
text-decoration:none;


`
export const Button=Styled.button`
font-size: 20px;
color: white;
border-radius:50px;
border-width:0px;
background-color:#1579E6;
width:100px;
height:40px;
&:hover{
    background-color:#F7B500;
}

`
