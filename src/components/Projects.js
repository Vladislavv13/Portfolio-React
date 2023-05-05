import { Col, Container, Row, Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import  TrackVisibility  from "react-on-screen";
import ProjectCard from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png"
import proImg1 from "../assets/img/project-img1.png";
import proImg2 from "../assets/img/project-img2.png";
import proImg3 from "../assets/img/project-img3.png";

const Projects = () => {

    const projects = [
        {
           title:"Business Startup",
           description: "Design & Development",
           imgUrl: proImg1, 
        },
        {
            title:"Business Startup",
            description: "Design & Development",
            imgUrl: proImg2, 
         },
         {
            title:"Business Startup",
            description: "Design & Development",
            imgUrl: proImg3, 
         },
         {
            title:"Business Startup",
            description: "Design & Development",
            imgUrl: proImg1, 
         },
         {
            title:"Business Startup",
            description: "Design & Development",
            imgUrl: proImg2, 
         },
         {
            title:"Business Startup",
            description: "Design & Development",
            imgUrl: proImg3, 
         },
    ]
    return (
        <section className="project" id="project"> 
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible}) => 
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quod minus quidem, impedit laboriosam maiores exercitationem! Quisquam eum tempore beatae asperiores cumque? Placeat, quia pariatur veritatis quam natus excepturi dignissimos.</p>
                        </div>}
                        </TrackVisibility>
                        <TabContainer id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="first" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                Tab Three
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <TabContent>
                            <TabPane eventKey="first">
                                <Row>
									{
										projects.map((project, index) => {
											return (
												<ProjectCard 
													key={index}
													{...project}/>
											)
										})
									}
					  </Row>
                            </TabPane>
							<TabPane eventKey="second">Lorem Ipsum</TabPane>
							<TabPane eventKey="third">Lorem Ipsum</TabPane>
                        </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
			<img className="background-image-right" src={colorSharp2} alt="ColorSharp2"/>
        </section>
    );
}
 
export default Projects;