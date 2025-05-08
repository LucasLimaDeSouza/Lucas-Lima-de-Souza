import styled from "styled-components";



export const Container = styled.header`

    display: flex;
    justify-content: center;
    align-items: center;

    height: 10vh;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};

    /* position: relative; */
    a{
        
        color: ${props => props.theme.colors.text};
    }

    
    @media(max-width: 1020px){
       
       margin-bottom: 5rem;
   }


`;
export const BoxName = styled.div`
    width: 191px;
    height: 100px;
    border-radius: 10px;
    display: flex;
    align-items: end;
    justify-content: center;
    padding-bottom: 17px;
    margin-left: -749px;
    margin-right: 285px;
    margin-bottom: -42px;
    /* right: 1138px;
    top: 42px; */
    
    background-color: ${props => props.theme.colors.secondary};

    @media(max-width: 1277px){
        visibility: hidden;
    }

`

export const BoxLink = styled.div`

    width: 318px;
    height: 20px;

    display: flex;
    align-items: end;
    justify-content: center;
    gap: 2.1rem;
    margin-right: -299px;

    transition-property: width;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);

        
    .Name:hover{
        color: ${props => props.theme.colors.text_activy};
    }
    .NameLink{
        color: ${props => props.theme.colors.text};
    }
    .active{
        color: ${props => props.theme.colors.text_activy }; //Ativa altomaticamente quando o NavLink é clicado
    }
    

`