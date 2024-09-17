import { Col, Container, Row } from "react-bootstrap"
import TextMain from "./components/TextMain"

const Page: React.FC = () => {
    return(
        <Container>
            <Row>
                <Col sm={{span: 12}}>
                    <TextMain
                        title="Heberty"
                        subtitle="Desenvolvedor de Softwares Full-stack"
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Page