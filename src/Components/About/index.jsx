
import {
    Container, 
    BoxName, 
    BoxSkills, 
    Skills,
    AboutMe,
    BoxText,
    NamePhoto,
    NameSkills,
    BoxLogo } from "./style"



import Me from "../../assets/eu.png"
import R from "../../assets/react.png"
import RN from "../../assets/react-native.png"
import NX from "../../assets/next.png"
import N from "../../assets/node.png"
import T from "../../assets/typescript.png"
import S from "../../assets/sql.png"

export function About() {

    return (
        <Container>

            <BoxName>
                <NamePhoto>

                    <img src={Me} alt="" />
                    
                    <h1>Lucas Lima de Souza</h1>
                    <h2>Brazil - Rio de Janeiro</h2>

                </NamePhoto>

                <NameSkills>
                    <h1>Desenvolvedor de Software</h1>
                </NameSkills>

            </BoxName>

            <BoxSkills>

                <Skills>
                    <BoxLogo>
                        <img src={R} alt="" />
                        <p>React</p>
                    </BoxLogo>    
                    <BoxLogo>
                        <img src={RN} alt="" />
                        <p>React-Native</p>
                    </BoxLogo>    
                    <BoxLogo>
                        <img src={NX} alt="" />
                        <p>Next.Js</p>
                    </BoxLogo>    
                    <BoxLogo>
                        <img src={N} alt="" />
                        <p>Node.Js</p>
                    </BoxLogo>    
                    <BoxLogo>
                        <img src={T} alt="" />
                        <p>Typescript</p>
                    </BoxLogo>    
                    <BoxLogo>
                        <img src={S} alt="" />
                        <p>SQL</p>
                    </BoxLogo>    
                </Skills>

                <AboutMe>
                    <BoxText>

                        <h1>Sobre Mim</h1>
                        
                        <p>
                            Atualmente desenvolvo aplicações SPA (Single Page Application), 
                            aplicações responsivas, aplicações Fullstack e outros para Web 
                            utilizando tecnologias como React, NodeJs, TypeScript e SQL.
                            No momento estou aprimorando meus conhecimentos em <br />
                            React Native (Mobile).
                        </p>    
                    </BoxText>
                </AboutMe>

            </BoxSkills>
        </Container>
    )
}