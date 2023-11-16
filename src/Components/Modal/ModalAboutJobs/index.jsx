
import Exo from "../../../assets/exo.png"

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

export function ModalAboutJobs({isOpen, isClose}) {

    if (isOpen) {

        return (
            <Content>
                <BoxText>

                    <ContainerText>
                        <BoxButton>

                            <ButtonLink
                                href="https://api.exosolucoes.com/"
                                target="_blank"
                            >
                                <h1>ExoTabela</h1>
                            </ButtonLink>

                            <Button
                                onClick={isClose}
                            >
                                <h1>Fechar</h1>
                            </Button>

                        </BoxButton>

                        <BoxAbout>

                            <TextHeader>
                                <img src={Exo} alt="logo" />
                                <h1>ExoTabela</h1>
                            </TextHeader>

                            <TextMain>
                                <p>
                                    Este software foi desenvolvido para a empresa de processos jurídicos Exo Soluções. 
                                    Onde o desejado era uma plataforma (React.js) onde tanto o ADM quanto o usuário 
                                    tivesse o seu próprio acesso com seu login e senha (Node.js + Firebase). 
                                    Tendo para o usuário uma área com tabela de cadastros (CRUD) e para o ADM 
                                    uma tabela geral dos pedidos podendo visualizar, buscar e editar todos os pedidos (também CRUD).
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