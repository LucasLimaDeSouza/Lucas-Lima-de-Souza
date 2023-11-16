
import { 
    Container, 
    Contant, 
    LinkContact, } from "./style"

export function Contact() {

    return (
        <Container>
            <Contant>
                <LinkContact href="https://web.whatsapp.com/send?phone=5521981055096" target="_blank">
                    WhatsApp
                </LinkContact>
                
                <LinkContact href="mailto:lukxx23121996@gmail.com" target="_blank">
                    Email
                </LinkContact>
                
                <LinkContact href="https://github.com/lucaslimadesouza" target="_blank">
                    GitHub
                </LinkContact>
                
                <LinkContact href="https://www.linkedin.com/in/lucas-lima-de-souza/" target="_blank">
                    LinkedIn
                </LinkContact>
                
                
            </Contant>
        </Container>
    )
}