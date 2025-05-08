import styled from "styled-components"



export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: ${props => props.theme.colors.secondary}; */
    
    
    
`;


export const Contant = styled.div`
    height: 18.8rem;
    width: 12.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 23px;
    
    `;

export const LinkContact = styled.a`
    height: 85px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    list-style: none;
    cursor: pointer;

    transition-property: width;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);

    
    &:hover{
        background-color: transparent;
        border: 2.5px solid ${props => props.theme.colors.text_activy};
        color: ${props => props.theme.colors.text_activy};
        width: 10rem;
    }
`;
