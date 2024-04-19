import Styled from 'styled-components'
import { Link } from 'react-router-dom'
import Picture20 from "./../../Images/20.jpg"
export const HomeSection=Styled.div`
text-align:center;
height: auto;
background: url(${Picture20});
background-size: cover;
background-position: center;
background-attachment: fixed;
margin-top:50px;

` 
export const HomeInformation=Styled.div`
padding-top:125px;
`
export const HomeTitle=Styled.p`
    font-weight:bold;
    color: white;
    font-family:Roboto;
    
    
`
export const HomeDesc=Styled.div`
float:none;

`
export const HomeButton=Styled(Link)`
text-decoration:none;


`
export const Button=Styled.button`
font-size: 20px;
color: black;
border-radius:50px;
border-width:0px;
background-color:white;
width:150px;
height:50px;
&:hover{
    background-color:#F7B500;
    color:white;
}

`
export const Span1=Styled.span`
font-size:40px;
`
export const Span2=Styled.span`
font-size:60px;

`
export const Span3=Styled.span`
font-size:30px;
`