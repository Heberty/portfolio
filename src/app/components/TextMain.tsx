import { Col, Container, Row } from "react-bootstrap"
import ButtonLink from "./ButtonLink"
interface TextMainProps {
    title: string
    subtitle: string
}

const TextMain: React.FC<TextMainProps> = ({ title, subtitle}) => {
    return(
        <Container fluid>
            <Row>
                <Col sm={{span: 12}}>
                    <div className="text-main">
                        <strong className="text-main-hi">Hello!</strong>
                        <h1 className="text-main-title">Eu sou {title}</h1>
                        <h4 className="text-main-subtitle">{subtitle}</h4>
                        <ButtonLink
                            text="Estou aqui"
                            href="#about-us"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default TextMain