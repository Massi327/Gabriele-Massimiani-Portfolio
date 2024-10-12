import './App.css'
import { Row, Col, Carousel } from 'react-bootstrap'

export default function DigitalStrategy() { 
    return (
        <>
            <Row className='section mt-5 mx-4 pt-4'>
              <h1><span className='red-text'>Digital Strategy</span></h1>
            </Row>
            <Row className='section mx-4 pt-3'>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <p className='p'>
                        The course provided me with an in-depth knowledge of the mechanisms and key tools for managing, planning, monitoring, and advertising on Social Media.
                        Together with a team of 6 people, we initially decided that the company for which we would develop a digital strategy would be Dramatic Iceberg.
                        We then analyzed and understood the users' needs, conceived concepts, 
                        and integrated marketing and digital communication experiences and knowledge to achieve specific business objectives.
                        The theoretical and practical skills I gained allowed me to meet the needs of a start-up, but they can also be applied to medium and large companies.
                    </p>
                    <p className='p'>
                        Project products: <a href='https://drive.google.com/drive/folders/1biMq4AQVDDZXvaZfLCvhotBVq3u4BZuv?usp=sharing' className='aOtherPages'>Dramatic Iceberg Digital Strategy</a>
                    </p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} >
                <Carousel className="custom-carousel-dx">
                    <Carousel.Item>
                        <img src='/Gabriele-Massimiani-Portfolio/assets/BeyondTheShellMenu.png' alt='Level Up Lab Logo'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='/Gabriele-Massimiani-Portfolio/assets/BeyondTheShellCamelCase.png' alt='Level Up Lab Logo'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='/Gabriele-Massimiani-Portfolio/assets/BeyondTheShellElevatorPitch.png' alt='Level Up Lab Logo' />  
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='/Gabriele-Massimiani-Portfolio/assets/BeyondTheShellSummary.png' alt='Level Up Lab Logo' />
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>

            <Row className='section mx-3 pt-1 mt-2'>
              <h2>Role & Structure</h2>
            </Row>
            <Row className='section mx-4 pt-1'>
                <Col xs={12} sm={12} md={12} lg={8}>
                    <Carousel className="custom-carousel-sx">
                        <Carousel.Item>
                            <img src='/Gabriele-Massimiani-Portfolio/assets/BeyondTheShellPT.png' alt='Level Up Lab Logo' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src='/Gabriele-Massimiani-Portfolio/assets/BeyondTheShellBudget.png' alt='Level Up Lab Logo' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src='/Gabriele-Massimiani-Portfolio/assets/BeyondTheShellBenchmarkHK.png' alt='Level Up Lab Logo' />  
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src='/Gabriele-Massimiani-Portfolio/assets/BeyondTheShellBenchmarkOri.png' alt='Level Up Lab Logo' /> 
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <p className='p mt-2'>
                        In the initial phase of the project, I focused on analyzing a competitor of Dramatic Iceberg, Ratloop Games Canada, a video game company.
                        I started with organic research and an analysis of their Google My Business profile, then moved on to review their website and social media, suggesting improvements for certain aspects.
                        Afterwards, along with the work done by my teammates on other video game companies, we compiled all the analyses into a single document.

                        The second phase of the project was specifically dedicated to Dramatic Iceberg, with the goal of creating a custom digital strategy.
                        I was responsible for: designing and creating mockups for organic content; defining both physical and digital touchpoints; analyzing the market and trends;
                        developing a GANTT chart that included advertising formats, organic content, and real-world activities like industry events;
                        creating a contingency plan; and identifying the most relevant KPIs.
                    </p>
                </Col>
            </Row>
        </>
    );
}