import styled from "styled-components/native";


export const TextBox = styled.View `
    flex-direction: row;
    margin: 10px 10px 10px 10px;
`

export const Text = styled.Text `
    font-size: 18px;
    font-weight: bolder;
`

export const PriceCaption = styled.Text `
    font-size: 16px;
    font-weight: bolder;
`

export const TextCaption = styled.Text `
    font-size: 12px;
    font-weight: bolder;
    text-overflow-mode: 'tail';
    color: dimgray;
`

export const Image = styled.Image `
    width: 50px;
    height: 50px;
    margin-right: 10px;
`

export const Separator = styled.View `
    height: 1px;
    width: 100%;
    background-color: #ccc;
`