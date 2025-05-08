import { NavLink } from "react-router-dom"
import { Container, BoxName, BoxLink } from "./style"
import { useState } from "react"


export function Header() {

    const [isActive, setIsActive] = useState(false)

    const Active = () => {
        setIsActive(!isActive)
    }

    return (
        <Container>
            <BoxName>
                <h1>Lucas Lima de Souza</h1>
            </BoxName>

            <BoxLink >

                <NavLink
                    className="NameLink" 
                    to="/contatos"
                >
                    Contatos
                </NavLink>

                <NavLink 
                    className="NameLink" 
                    to="/"
                    onClick={Active}
                >
                    Sobre Mim
                </NavLink>
                
                <NavLink 
                    className="NameLink" 
                    to="portifolio"
                    onClick={Active}
                >
                    Portifólio
                </NavLink>
            </BoxLink>

        </Container>
    )
}