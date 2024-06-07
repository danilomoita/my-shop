// css in ts

import { createGlobalStyle } from "styled-components";

export const Globalstyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #f5f5f5;
    }

    body , button, input{
        font-family: 'Poppins', sans-serif;
    }

    button{
        cursor: pointer;
        transition: 0.3s;

        &:hover{
            filter: brightness(1.2);
            transition: 0.3s;
        }
    }


`;