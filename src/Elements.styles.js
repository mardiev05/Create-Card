import styled from "styled-components";

// Side Image
export const SideImage = styled.img`
    max-height: 100vh;
    width: 35%;
`

// Form

export const FormContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    width: 400px;
`

export const Label = styled.label`
    display: block;
    font-size: 13px;
    font-weight: 500;
    color: hsl(278, 68%, 11%);
    font-family: monospace;
    margin-bottom: 6px;
`

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 5px 12px;
    font-family: monospace;
    font-size: 14px;
    font-weight: 500;
    border-radius: 6px;
    border: 1px solid hsl(0deg 0% 46%);
    outline-color: hsl(249, 69%, 63%);
`

export const Inputs = styled.div`
    position:relative;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
`

export const ExpErrors = styled.p`
    position: absolute;
    bottom: -3px;
    color: #ff0000;
    font-size: 14px;
    FONT-WEIGHT: 500;
    font-family: serif;
`
export const CVCError = styled.p`
    position: absolute;
    bottom: -3px;
    right: 2%;
    color: #ff0000;
    font-size: 14px;
    FONT-WEIGHT: 500;
    font-family: serif;
`

export const Button = styled.button`
    width: 100%;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: hsl(270deg 56% 13%);
    color: #fff;    
`

// Front of Card

export const Front = styled.div`
    position: absolute;
    top: 17%;
    left: 13%;
    width: 447px;
    height: 245px;
`

export const CardNumber = styled.p`
    position: absolute;
    top: 50%;
    left: 7%;
    font-size: 27px;
    letter-spacing: 8px;
    FONT-WEIGHT: 900;
    color: #fff;
    font-family: monospace;
`

export const CardName = styled.p`
    position: absolute;
    bottom: 10%;
    left: 6%;
    color: #ccc;
    FONT-WEIGHT: 500;
    font-size: 18px;
    font-family: monospace;
`

export const CardExp = styled.p`
    position: absolute;
    bottom: 10%;
    right: 10%;
    color: #ccc;
    font-size: 18px;
    FONT-WEIGHT: 500;
    font-family: monospace;
`


// Back of Card

export const Back = styled.div`
    position: absolute;
    top: 57%;
    left: 20%;
    width: 447px;
    height: 245px;
`

export const CVC = styled.p`
    position: absolute;
    top: 44%;
    right: 16%;
    font-size: 21px;
    FONT-WEIGHT: 500;
    font-family: monospace;
    color: #fff;
`

// after completed

export const CompletedCont = styled.div`
    text-align: center;
    margin-bottom: 30px;
`

export const CheckedImg = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`

export const ThankText = styled.h2`
    margin: 25px 0 10px 0;
    FONT-WEIGHT: 300;
    font-size: 25px;
    font-family: sans-serif;
`
export const Text = styled.p`
    color: #8c8989;
    font-size: 15px;
    font-family: sans-serif;
    FONT-WEIGHT: 500;
`

