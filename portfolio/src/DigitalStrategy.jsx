import './App.css'
import { Row, Col, Carousel } from 'react-bootstrap'

export default function DigitalStrategy() { 
    return (
        <>
            <Row className='section mt-5 mx-3 pt-4'>
              <h1><span className='red-text'>Digital Strategy</span></h1>
            </Row>
            <Row className='section mx-4 pt-3'>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <p className='p'>
                        The course provided me with an in-depth knowledge of the mechanisms and key tools for <b>managing</b>, <b>planning</b>, <b>monitoring</b>, and <b>advertising</b> on Social Media.
                        <br/><br/>
                        Together with a team of 6 people, we analyzed and understood the <b>users' needs</b>, conceived <b>concepts</b>, 
                        and integrated marketing and digital communication experiences and knowledge to achieve specific <b>business objectives</b>.
                        <br/>
                        The theoretical and practical skills I gained allowed me to meet the needs of a start-up, but they can also be applied to medium and large companies.
                    </p>
                    <p className='p'>
                        Project products: <br/>
                        <a href='https://drive.google.com/drive/folders/1biMq4AQVDDZXvaZfLCvhotBVq3u4BZuv?usp=sharing' className='aOtherPages'>Dramatic Iceberg Digital Strategy</a>
                    </p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} >
                <Carousel className="custom-carousel-dx">
                    <Carousel.Item>
                        <img src='/Gabriele-Massimiani-Portfolio/assets/DigitalStrategy_Funnel_B2C.png' alt='DigitalStrategy_Funnel_B2C'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='/Gabriele-Massimiani-Portfolio/assets/DigitalStrategy_Goals.png' alt='DigitalStrategy_Goals'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='/Gabriele-Massimiani-Portfolio/assets/DigitalStrategy_Competitors.png' alt='DigitalStrategy_Competitors' />  
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='/Gabriele-Massimiani-Portfolio/assets/DigitalStrategy_Concepts.png' alt='DigitalStrategy_Concepts' />
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>

            <Row className='section mx-3 pt-5'>
              <h2>Role & Structure</h2>
            </Row>
            <Row className='section mx-4 pt-3'>
                <Col xs={{ order: 2, span: 12 }} sm={{ order: 2, span: 12 }} md={12} lg={{ order: 1, span: 8 }} className='pb-3'>
                    <img src='/Gabriele-Massimiani-Portfolio/assets/DigitalStrategyGANTT.jpg' alt='DigitalStrategyGANTT' className='imgPageProjectSx'/>
                </Col>
                <Col xs={{ order: 1, span: 12 }} sm={{ order: 1, span: 12 }} md={12} lg={{ order: 2, span: 4 }} className='pb-3'>
                    <p className='p'>
                        In the initial phase of the project, I focused on <b>analyzing a competitor</b> of Dramatic Iceberg, <b>Ratloop Games Canada</b>, a video game company.
                        <br/><br/>
                        I started with organic research and an analysis of their <b>Google My Business</b> profile, then moved on to review their <b>website</b> and <b>social media</b>, suggesting improvements for certain aspects.
                        <br/>
                        Afterwards, along with the work done by my teammates on other video game companies, we compiled all the analyses into a single document.            
                    </p>
                </Col>
            </Row>

            <Row className='section mx-4'>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <p className='p'>                        
                        The second phase of the project was specifically dedicated to Dramatic Iceberg, with the goal of creating a <b>custom digital strategy</b>.
                        <br/><br/>
                        I was responsible for: 
                        <ul>
                            <li>designing and creating <b>mockups</b> for organic content</li>
                            <li>defining both physical and digital <b>touchpoints</b></li>
                            <li>analyzing the <b>market</b> and trends</li>
                            <li>developing a <b>GANTT chart</b> that included advertising formats, organic content, and real-world activities like industry events</li>
                            <li>creating a <b>contingency plan</b></li>
                            <li>identifying the most relevant <b>KPIs</b></li>
                        </ul>                    
                    </p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8}>
                    
                    <Carousel className="custom-carousel-dx">                    
                        <Carousel.Item>
                            <img src='/Gabriele-Massimiani-Portfolio/assets/DigitalStrategy_Mockup.png' alt='DigitalStrategy_Mockup' />  
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src='/Gabriele-Massimiani-Portfolio/assets/DigitalStrategy_Contingency.png' alt='DigitalStrategy_Contingency' /> 
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src='/Gabriele-Massimiani-Portfolio/assets/DigitalStrategy_Touchpoint.png' alt='DigitalStrategy_Touchpoint' />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </>
    );
}