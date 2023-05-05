import { Col, Container, Row } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


const Fotter = () => {
    return (
        <fotter className="fotter">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm/>
                    <Col sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#/"><img src={navIcon1} alt="NavIcon"/></a>
                            <a href="#/"><img src={navIcon2} alt="NavIcon2"/></a>
                            <a href="#/"><img src={navIcon3} alt="NavIcon3"/></a>
                        </div>
                        <p>CopyRight 2022, Will be Fine</p>
                    </Col>
                </Row>
            </Container>
        </fotter>
    );
}
 
export default Fotter;