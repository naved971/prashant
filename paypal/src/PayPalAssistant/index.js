import './style.css';
import PayPalAssistantBody from './body'
import PayPalAssistantHeader from './header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import constant from '../content'

function PayPalAssistant() {
    return (
        <div >
            <Container border={1} className={'containerMain'}>
                <Row>
                    <Col> <PayPalAssistantHeader header={constant.header} /> </Col>
                </Row>
                <Row>
                    <Col> <PayPalAssistantBody body={constant.body} /> </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PayPalAssistant;
