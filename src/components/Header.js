import React from "react";
import Styled from "styled-components";

const Head = Styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  padding: 2em;
  background: #12726a;
`
export default function Header(){
    return (
        <Head>
            <h1>How To??</h1>
        </Head>
    );
};