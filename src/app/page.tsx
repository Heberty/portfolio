import { Col, Container, Row } from "react-bootstrap"
import TextMain from "./components/TextMain"
import brMoto from "@/app/image/br-moto.png"
import heberty from "@/app/image/eu.png"
import CardPortfolio from "./components/CardPortfolio"
import Profile from "./components/Profile"
import Section from "./components/Section"

const Page: React.FC = () => {
    return(
        <>
            <Section id="main">
                <Container>
                    <Row>
                        <Col sm={{span: 8}}>
                            <TextMain
                                title="Heberty"
                                subtitle="Desenvolvedor de Softwares Full-stack"
                            />
                        </Col>
                        <Col sm={{span: 4}}>
                            <Profile
                                image={heberty.src}
                                alt="Heberty"
                                link="https://github.com.br"
                                target="_blank"
                            />
                        </Col>
                    </Row>
                </Container>
            </Section>
            <Section id="about-us">
                <Row>
                    <Col sm={{span: 12}} md={{span: 6}} lg={{span: 4}} xl={{span: 3}}>
                        <CardPortfolio
                            title="Br Moto"
                            subtitle="Site de venda de motocicletas"
                            image={`${brMoto.src}`}
                            link="https://brmoto.com.br/"
                            text="Usamos react com NextJS e Back-end em NodeJS"
                            target="_blank"
                        />
                    </Col>
                </Row>
            </Section>
        </>
    )
}

export default Page