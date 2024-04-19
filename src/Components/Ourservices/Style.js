import Styled from 'styled-components'
import { Link } from 'react-router-dom'
export const OurservicesSection=Styled.div`
width:100%;
height: 375px;
overflow: hidden;
margin-top:45px;
text-align:center;
@media(max-width:480px){
    height:auto;
    
 }

`
export const OurservicesPart=Styled(Link)`
text-decoration:none;
width: 14.2%;
float: left;
height: 100px;
box-sizing: border-box;

@media(max-width:480px){
   float:none;
    
}

`

export const Image=Styled.img`
width:100px;
height:100px;


`
export const Title=Styled.h5`
color:black;
text-align:center;
margin-top:20px;
font-weight:900;
`
