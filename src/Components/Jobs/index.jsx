
import {
    Container, 
    BoxName, 
    NamePhoto,
    Button,
} from "./style"



import Exo from "../../assets/exo.png"
import { useState } from "react"
import { ModalAboutJobs } from "../Modal/ModalAboutJobs"


export function Jobs() {

    const [open, setOpen] = useState(false)

    const ActivityModal = () => {
        setOpen(!open)
    }

    return (
        <>
            <Container>
                <BoxName>
                    <NamePhoto>

                        <img src={Exo} alt="logo" />
                        
                        <h1>ExoTabela (Freelance)</h1>

                    </NamePhoto>

                    <Button
                        onClick={ActivityModal}
                    >
                        <h1>Sobre o Projeto</h1>
                    </Button>

                </BoxName>


            </Container>

            <ModalAboutJobs
                isOpen={open}
                isClose={ActivityModal}
            />
            
        </>
    )
}