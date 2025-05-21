
import {
    Container, 
    BoxName, 
    NamePhoto,
    Button,
} from "./style"



import Exo from "../../assets/exo.png"
import LETRAX from "../../assets/letrax-logo-app.svg"

import { useState } from "react"
import { ModalAboutJobs } from "../Modal/ModalAboutJobs"
import { ModalAboutJobsLetraXAndroid } from "../Modal/ModalAboutJobsLetraXAndroid"


export function Jobs() {

    const [open, setOpen] = useState(false)
    const [openL, setOpenL] = useState(false)

    const ActivityModalL = () => {
        setOpenL(!openL)
    }
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
                <BoxName>
                    <NamePhoto>

                        <img src={LETRAX} alt="logo" />
                        
                        <h1>LetraX Compose (Android)</h1>

                    </NamePhoto>

                    <Button
                        onClick={ActivityModalL}
                    >
                        <h1>Sobre o Projeto</h1>
                    </Button>

                </BoxName>


            </Container>

            <ModalAboutJobs
                isOpen={open}
                isClose={ActivityModal}
            />
            <ModalAboutJobsLetraXAndroid
                isOpen={openL}
                isClose={ActivityModalL}
            />
            
        </>
    )
}