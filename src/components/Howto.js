import React from "react";
import How2 from "../How2.png";
import Styled from "styled-components";


const Image = Styled.img`
margin: 60px 0 0 0 ;
height: 50vh;
width: 50%

`

function Howto(){
    return <Image src={How2} alt="How2" />;
}
export default Howto;