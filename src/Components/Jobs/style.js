import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BoxName = styled.div`
    width: 234px;
    height: 343px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    margin-right: 82px;

    text-align: center;
    background-color: ${props => props.theme.colors.primary};

    h2 {
        font-size: 12px;
    }

    
`;

export const NamePhoto = styled.div`
    img {
        
        width: 87px;
        margin-bottom: 1rem;
    }
    margin-bottom: 2.5rem;
`;

export const Button = styled.button`
    width: 139px;
    height: 39px;
    
    cursor: pointer;
    border: none;
    background-color: ${props => props.theme.colors.secondary};

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