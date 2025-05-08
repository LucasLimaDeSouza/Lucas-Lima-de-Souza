
import { red } from "@mui/material/colors"
import LETRAX from "../../../assets/letrax_icon.svg"

import { 
    Content,
    BoxText,
    ContainerText,
    TextHeader,
    TextMain,
    BoxButton,
    Button,
    ButtonLink,
    BoxAbout,
 } from "./style"

export function ModalAboutJobsLetraXAndroid({isOpen, isClose}) {

    if (isOpen) {

        return (
            <Content>
                <BoxText>

                    <ContainerText>
                        <BoxButton>

                            <ButtonLink
                                href="https://drive.google.com/uc?export=download&id=17r0y6AKGWekfrMDSeivqaCt9TrRmeATN"
                                target="_blank"
                            >
                                <h1>Baixar app</h1>
                            </ButtonLink>

                            <Button
                                onClick={isClose}
                            >
                                <h1>Fechar</h1>
                            </Button>

                        </BoxButton>

                        <BoxAbout>

                            <TextHeader>
                                <img src={LETRAX} alt="logo" />
                                <h1>LetraX Compose (Android)</h1>
                            </TextHeader>

                            <TextMain>
                                <p>
                                    Este app foi um desafio pessoal e, ao mesmo tempo, uma resolução
                                    de um problema que eu enfrentei em meu dia a dia como compositor
                                    e acredito ser um problema para muitos amantes de música.
                                    Pois, <b>niguém merece compor letras importantes em blocos de notas sem graça</b>
                                </p>

                            </TextMain>

                        </BoxAbout>



                    </ContainerText>
                    
                </BoxText>
            </Content>
        )
    } else {
        return null
    }
}