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
                        In the <b>Virtual Reality</b> course, I learned the specific concepts for developing virtual and augmented reality applications. 
                        <br /> <br />
                        In addition to the theoretical part, I developed a prototype for a narrative VR experience, <b>The Sky Postman</b>, together with four of my colleagues.
                        It was developed with the 2021 version of Unity and designed to be enjoyed via HMD (especially <b>Oculus Quest 2</b>).
                    </p>
                    <iframe frameborder="0" 
                    src="https://itch.io/embed/1924681?bg_color=E1E2D0&amp;fg_color=101419&amp;link_color=D81919&amp;border_color=E1E2D0" 
                    className='embededItch'>
                    <a href="https://andreaderedita.itch.io/the-sky-postman-a-narrative-low-poly-journey">
                    The Sky Postman - A Virtual Narrative Journey by Andrea D'Eredità, Gabriele Massimiani</a>
                    </iframe>
                </Col>
                <Col xs={12} sm={12} md={12} lg={7}>
                    <div className="video-container-dx-GJ">
                        <iframe 
                            src="https://www.youtube.com/embed/nNKYUwGtGRo" 
                            title="The Sky Postman - A Virtual Narrative Journey | Official Trailer" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>               
                </Col>
            </Row>
            <Row className='section mx-3 pt-5'>
              <h2>Role & Structure</h2>
            </Row>
            <Row className='section mx-4 pt-3'>
                <Col xs={{ order: 2, span: 12 }} sm={{ order: 2, span: 12 }} md={12} lg={{ order: 1, span: 6 }} className='pb-3'>
                    <Carousel className="custom-carousel-sx-VR">
                        <Carousel.Item>
                            <img src='/Gabriele-Massimiani-Portfolio/assets/The Sky Postman.png' alt='Level Up Lab Logo' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src='/Gabriele-Massimiani-Portfolio/assets/TheSkyPostmanHouse.png' alt='Level Up Lab Logo' />
                        </Carousel.Item>                
                    </Carousel>
                </Col>
                <Col xs={{ order: 1, span: 12 }} sm={{ order: 1, span: 12 }} md={12} lg={{ order: 2, span: 6 }} className='pb-3'>
                    <p className='p'>
                        <b>The Sky Postman</b> was the first project I developed using Unity. <br />
                        In addition to <b>modeling</b> and <b>animating</b> some objects, I also worked on <b>programming</b> certain elements. 
                        <br /><br />
                        Specifically, I was responsible for an <b>animated cutscene</b> between the initial and final parts of the experience.
                        I used <b>coroutines</b> to manage the animation of the airplane, the clouds, and the scene transition.                    
                    </p>
                </Col>
            </Row>

            <Row className='section mx-4 pt-3'>
                <Col xs={12} sm={12} md={12} lg={6}>                    
                    <p className='p'>                        
                        As <b>Project Coordinator</b>, I assigned tasks to all group members to ensure they stayed motivated and that no one was overloaded.
                        <br />
                        I monitored the project's progress from October to February and adjusted the scope when necessary, also thanks to feedback from our professor.
                        We used <b>Notion</b> both for task management and project documentation.
                    </p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <Carousel className="custom-carousel-dx-VR">
                        <Carousel.Item>
                            <img src='/Gabriele-Massimiani-Portfolio/assets/TheSkyPostmanBakery.png' alt='Level Up Lab Logo' />  
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src='/Gabriele-Massimiani-Portfolio/assets/TheSkyPostmanMilitary.png' alt='Level Up Lab Logo' /> 
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </>
    );
}