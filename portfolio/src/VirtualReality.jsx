import './App.css'
import { Row, Col, Carousel } from 'react-bootstrap'

export default function VirtualReality() { 
    return (
        <>
            <Row className='section mt-5 mx-3 pt-4'>
                <h1><span className='red-text'>Virtual Reality</span></h1>
                <h2>Project coordinator, Modeler, Programmer & Animator</h2>
            </Row>
            <Row className='section mx-4 pt-3'>
                <Col xs={12} sm={12} md={12} lg={5}>
                    <p className='p'>
                        In the Virtual Reality course, I learned the specific concepts for developing virtual and augmented reality applications. <br />
                        I was able to study the techniques and methodologies for creating real-time interactive 3D environments, 
                        as well as the hardware and software needed to build immersive experiences.
                        <br /> <br />
                        In addition to the theoretical part, I developed a prototype for a narrative VR experience, The Sky Postman, together with four of my colleagues.
                        It was developed with the 2021 version of Unity and designed to be enjoyed via HMD (especially Oculus Quest 2).
                    </p>
                    <iframe frameborder="0" 
                    src="https://itch.io/embed/1924681?bg_color=E1E2D0&amp;fg_color=101419&amp;link_color=D81919&amp;border_color=E1E2D0" 
                    className='embededItch'>
                    <a href="https://andreaderedita.itch.io/the-sky-postman-a-narrative-low-poly-journey">
                    The Sky Postman - A Virtual Narrative Journey by Andrea D'Eredità, Gabriele Massimiani</a></iframe>
                </Col>
                <Col xs={12} sm={12} md={12} lg={7}>
                    <div className="video-container-dx">
                        <iframe 
                            src="https://www.youtube.com/embed/nNKYUwGtGRo" 
                            title="The Sky Postman - A Virtual Narrative Journey | Official Trailer" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>               
                </Col>
            </Row>
            <Row className='section mx-3 pt-1 mt-2'>
              <h2>Role & Structure</h2>
            </Row>
            <Row className='section mx-4 pt-1'>
                <Col xs={12} sm={12} md={12} lg={8}>
                    <Carousel className="custom-carousel-sx">
                        <Carousel.Item>
                            <img src='/Gabriele-Massimiani-Portfolio/assets/The Sky Postman.png' alt='Level Up Lab Logo' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src='/Gabriele-Massimiani-Portfolio/assets/TheSkyPostmanHouse.png' alt='Level Up Lab Logo' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src='/Gabriele-Massimiani-Portfolio/assets/TheSkyPostmanBakery.png' alt='Level Up Lab Logo' />  
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src='/Gabriele-Massimiani-Portfolio/assets/TheSkyPostmanMilitary.png' alt='Level Up Lab Logo' /> 
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <p className='p mt-2'>
                        The Sky Postman was the first project I developed using Unity.
                        In addition to modeling and animating some objects, I also worked on programming certain elements.
                        Specifically, I was responsible for an animated cutscene between the initial and final parts of the experience.
                        I used coroutines to manage the animation of the airplane, the clouds, and the scene transition.
                        As Project Coordinator, I assigned tasks to all group members to ensure they stayed motivated and that no one was overloaded.
                        I monitored the project's progress from October to February and adjusted the scope when necessary, also thanks to feedback from our professor.
                        We used Notion both for task management and project documentation.
                    </p>
                </Col>
            </Row>
        </>
    );
}