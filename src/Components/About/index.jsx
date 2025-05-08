
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





import Me from "../../assets/euzao.png"

import A from "../../assets/android.svg"
import K from "../../assets/kotlin.svg"
import C from "../../assets/compose.svg"
import RN from "../../assets/react-native.png"
import KT from "../../assets/ktor.svg"
import S from "../../assets/sql.png"

export function About() {

    return (
        <Container>

            <BoxName>
                <NamePhoto>

                    <img src={Me} alt="" />
                    
                    <h1>Lucas Lima de Souza</h1>
                    <h2>Brasil - Rio de Janeiro</h2>

                </NamePhoto>

                <NameSkills>
                    <h1>Desenvolvedor Mobile</h1>
                </NameSkills>

            </BoxName>

            <BoxSkills>

                <Skills>

                    <BoxLogo>
                        <img src={A} alt="Android" />
                        <p>Android</p>
                    </BoxLogo>  

                    <BoxLogo>
                        <img src={K} alt="Kotlin" />
                        <p>Kotlin</p>
                    </BoxLogo>

                    <BoxLogo>
                        <img src={C} alt="Jetpack Compose" />
                        <p>Jetpack Compose</p>
                    </BoxLogo>

                    <BoxLogo>
                        <img src={RN} alt="React Native" />
                        <p>React Native</p>
                    </BoxLogo>

                    <BoxLogo>
                        <img src={KT} alt="Ktor" />
                        <p>Ktor</p>
                    </BoxLogo>

                    <BoxLogo>
                        <img src={S} alt="SQL" />
                        <p>SQL</p>
                    </BoxLogo>

                </Skills>

                <AboutMe>
                    <BoxText>

                        <h1>Sobre Mim</h1>
                    
                        <p>
                            Olá! Me chamo Lucas, sou Desenvolvedor Mobile e programo desde 2021
                            Minha paixão por tecnologia vai além de escrever código tenho grande interesse em resolver problemas reais através da programação, criando soluções que impactem positivamente o dia a dia das pessoas.
                            Seja desenvolvendo apps inovadores ou otimizando processos, estou sempre buscando desafios que unam minha stack técnica à minha vontade de fazer a diferença.
                            Dê uma olhada no meu <b>Portifólio</b> <span class="emoji">😊</span>
                        </p> 

                    </BoxText>
                </AboutMe>

            </BoxSkills>
        </Container>
    )
}