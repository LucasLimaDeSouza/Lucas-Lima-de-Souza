import styled from "styled-components";

export const Content = styled.div`

    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.primary_modal};
    `;

export const BoxText = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


width: 655px;
height: 65%;
padding: 2rem;

background-color: ${props => props.theme.colors.primary};

    
@media(max-width: 661px){
        
        height: auto;
        width: 70%;
        /* text-align: center; */
        padding: 1.5rem;
}
@media(max-width: 521px){
        
        height: auto;
        width: 90%;
        /* text-align: center; */
        padding: 1.5rem;
}
@media(max-width: 374px){
        
        height: auto;
        width: 95%;
        /* text-align: center; */
        padding: 1.5rem;
}
        

/* h2 {
    position: relative;
    left: 240px;
    bottom: 60px;
} */

`;
export const ContainerText = styled.div`

    width: 100%;
    height: 100%;
`;

export const TextHeader = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    /* background-color: ${props => props.theme.colors.secondary}; */
    margin-bottom: 2rem;

    img {  
        width: 35px;
        transition-property: width;
        transition-duration: 1s;
        transition-timing-function: cubic-bezier(5.52, 5, 0.58, 5);
        cursor: pointer;
    }
    
    
    
    img:hover{
        width: 45px;
        
    }
    
    `;

export const TextMain = styled.div`

width: 100%;
height: 80%;

text-align: left;

    p {
        /* width: 500px;
        height: 100%; */
        width: auto;
        height: auto;
    }

`;

export const BoxButton = styled.header`
    width: 100%;

    display: flex;
    justify-content: space-between;
    margin-bottom: 4.5rem;
`
export const ButtonLink = styled.a`
    width: 139px;
    height: 39px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    background-color: ${props => props.theme.colors.secondary};
    
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover{
        background-color: transparent;
        border: 2.5px solid ${props => props.theme.colors.text_activy};
        color: ${props => props.theme.colors.text_activy};
        
    }
    `

export const Button = styled.button`
    width: 139px;
    height: 39px;
    border-radius: 10px;
    cursor: pointer;
    background-color: transparent;
    border: 2.5px solid ${props => props.theme.colors.text_activy};
    color: ${props => props.theme.colors.text_activy};
    
`;
export const BoxAbout = styled.div`
    width: 100%;
`;