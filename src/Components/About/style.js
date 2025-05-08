import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    
    @media(max-width: 1020px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        padding: 1.5rem 0;
    }
    `;

export const BoxName = styled.div`
    height: 25rem;
    width: 234px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    gap: 25px;
    
    text-align: center;
    
    h2 {
        font-size: 12px;
    }
    
    background-color: ${props => props.theme.colors.primary};
    
    @media(max-width: 1020px){
        margin-top: 5rem;
        padding-top: 1.5rem;
        width: 90%;
    }
    @media(max-width: 354px){
        height: 200px;
        width: 90%;
    }
`;

export const NameSkills = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    height: 7.9rem;
    width: 100%;
    background-color: ${props => props.theme.colors.secondary};
`;

export const BoxSkills = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    height: 27.6rem;
    width: 48.3rem;
    gap: 1.5rem;

    @media(max-width: 1020px){
        width: 90%;

    }
    
`;

export const Skills = styled.div`

border-radius: 10px;
    width: 100%;
    height: 11.6rem;
    background-color: ${props => props.theme.colors.primary};
    /* margin-bottom: 41px; */
    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 50px;
    
    @media(max-width: 872px){
        
        height: auto;
        text-align: center;
        padding: 1.5rem;
    }
`;

export const AboutMe = styled.div`
    height: 19.7rem;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
    background-color: ${props => props.theme.colors.primary};
    
    
    @media(max-width: 872px){
        /* height: auto; */
        /* width: 90%; */
        padding: 1.5rem;
    }
    `;
export const BoxText = styled.div`

    height: auto;
    width: 32.6rem;
    text-align: left;
    line-height: 25px;

    h1{
        font-size: 26px;
        margin-bottom: 12px;
    }
    
    @media(max-width: 872px){
        height: auto;
        padding: 20px;
        width: 90%;
        h1{
            font-size: 21px;
            margin-bottom: 12px;
        }
        p {
            font-size:11px;
        }
    }
`

export const NamePhoto = styled.div`
padding: 20px;
    img {
        
        width: 157px;
        border-radius: 100px;
        

        transition-property: width;
        transition-duration: 1s;
        transition-timing-function: cubic-bezier(5.52, 5, 0.58, 5);
        cursor: pointer;
    }

    img:hover{
        width: 137px;
    
    }
    
    margin-bottom: 1rem;
    
    /* @media(max-width: 354px){

        img {
            width: 107px;
        
        }

        img:hover{
            width: 137px;
        
        }
    } */
`;
export const BoxLogo = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 20px;

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

    p{

        font-weight : bold;
    }

    
    @media(max-width: 872px){
        
        width: 97px;
        p {
            width:97px;
        }
    }
`;


