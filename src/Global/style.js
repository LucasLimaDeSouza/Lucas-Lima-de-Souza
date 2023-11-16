import styled from "styled-components";
import image from "../../src/assets/imageBackground.jpg";

export const Container = styled.main`

    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;

    height: 90vh;
    width: 100%;

    
    background-image: url(${image}); 
    background-size: cover; 
    /* background-position: fixed; */
    background-repeat: no-repeat;
    
    
    a {
        color : ${props => props.theme.colors.text};
    }
    
    @media(max-width: 1020px){
        
        /* margin-top: 5rem; */
        background-image: none;
        padding: 1rem;
        margin: 2rem 0;
        /* border-bottom: 50px solid red; */
        /* background-color: ${props => props.theme.colors.text_activy}; */
    }
    
`;