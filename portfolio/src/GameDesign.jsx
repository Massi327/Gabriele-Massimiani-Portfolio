import './App.css'
import { Row, Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

export default function GameDesign() { 
    return (
        <>
            <Row className='section mt-5 mx-3 pt-4'>
              <h1><span className='red-text'>Game Design</span></h1>
              <h2>Game Producer and Programmer</h2>
            </Row>
            <Row className='section mx-4 pt-3'>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <p className='p'>
                    The university course Game Design and Gamification, taught by Marco Mazzaglia, allowed me to gain a deeper understanding of the video game industry and learn the basics of game design. 
                    The goal of the course was to create a video game project, from the initial idea to economic sustainability. 
                    Therefore, together with a team of 6 people, we developed a video game prototype from the end of March to the end of July. 
                    We also produced a Teaser Trailer and a Pitch document, following all the steps for technical, creative, and business realization.
                    </p>
                    <p className='p'>
                        Project products: <a href='https://drive.google.com/drive/folders/1xQgwhUWqW5u1B2fjd0F76i_cZb1jxiJW' className='aOtherPages'>Beyond The Shell</a>
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
                    The ideation of Beyond The Shell was my first experience in video game creation.
                    <br/>
                    My main tasks were project management and UI programming, but I also contributed to brainstorming the core mechanics during the initial idea phase.
                    Regarding project management, I was responsible for dividing tasks, creating a work plan, and monitoring progress.
                    <br/><br/>
                    I also developed a long-term project plan, which allowed me to schedule the development phases and have a clear idea of the timeline.
                    This plan, along with a benchmark, helped me better understand the project's costs and the product's launch price, enabling us to request an appropriate budget during the pitch phase. 
                    </p>
                </Col>
            </Row>
            <Row className='section mx-4 pt-1'>
                <Col xs={12} sm={12} md={12} lg={5}>
                    <p className='p'>
                        I also programmed all the menus, the tutorial texts, the respawn system, the save and load system, and an entire game area.
                        This area is a timed zone where players must collect objects and place them in the correct spots to unlock the power-up and then exit.
                        <br/><br/>
                        Finally, I took care of the concept, creation, and editing of the Teaser Trailer.
                        I initially created a storyboard based on the music and sounds from our sound designer.
                        <br/>
                        I made most of the scenes in Blender, animating the camera and characters, while the lighting was a joint effort with another team member.
                        <br/>
                        The remaining scenes were captured directly in Unity.
                    </p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={7}>
                <div className="video-container-dx">
                        <iframe 
                            src="https://www.youtube.com/embed/CZwNN3VPHRc" 
                            title="Beyond The Shell - Teaser Trailer 2023" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                </div>               
                </Col>
            </Row>
        </>
    );
}