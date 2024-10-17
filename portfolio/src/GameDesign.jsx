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
                    The university course <b>Game Design and Gamification</b>, taught by <b>Marco Mazzaglia</b>, allowed me to gain a deeper understanding of the video game industry and learn the basics of game design. 
                    <br/><br/>
                    The goal of the course was to create a <b>video game project</b>, from the initial idea to economic sustainability. 
                    <br/>
                    Therefore, together with a team of 6 people, we developed a video game prototype from the end of March to the end of July. 
                    <br/>
                    We also produced a <b>Teaser Trailer</b> and a <b>Pitch document</b>, following all the steps for technical, creative, and business realization.
                    </p>
                    <p className='p'>
                        Project products: <a href='https://drive.google.com/drive/folders/1xQgwhUWqW5u1B2fjd0F76i_cZb1jxiJW' className='aOtherPages'>Beyond The Shell</a>
                    </p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} >
                <Carousel className="custom-carousel-dx-GD">
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

            <Row className='section mx-3 pt-5'>
              <h2>Role & Structure</h2>
            </Row>
            <Row className='section mx-4 pt-3'>
                <Col xs={{ order: 2, span: 12 }} sm={{ order: 2, span: 12 }} md={12} lg={{ order: 1, span: 8 }} className='pb-3'>
                    <Carousel className="custom-carousel-sx-GD">
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
                <Col xs={{ order: 1, span: 12 }} sm={{ order: 1, span: 12 }} md={12} lg={{ order: 2, span: 4 }} className='pb-3'>
                    <p className='p'>
                    The ideation of <b>Beyond The Shell</b> was my first experience in video game creation.
                    <br/>
                    My main tasks were <b>project management</b> and <b>UI programming</b>, but I also contributed to brainstorming the <b>core mechanics</b> during the initial idea phase.
                    Regarding project management, I was responsible for dividing tasks, creating a work plan, and monitoring progress.
                    <br/><br/>
                    I also developed a <b>long-term project plan</b>, which allowed me to schedule the development phases and have a clear idea of the <b>timeline</b>.
                    This plan, along with a benchmark, helped me better understand the <b>project's costs</b> and the <b>product's launch price</b>, enabling us to request an appropriate budget during the <b>pitch phase</b>. 
                    </p>
                </Col>
            </Row>
            <Row className='section mx-4'>
                <Col xs={12} sm={12} md={12} lg={5}>
                    <p className='p'>
                        I also <b>programmed</b> all the menus, the tutorial texts, the respawn system, the save and load system, and an entire game area.
                        This area is a timed zone where players must collect objects and place them in the correct spots to unlock the power-up and then exit.
                        <br/><br/>
                        Finally, I took care of the concept, creation, and editing of the <b>Teaser Trailer</b>.
                        I initially created a storyboard based on the music and sounds from our sound designer.
                        <br/>
                        I made most of the scenes in Blender, <b>animating</b> the camera and characters, while the lighting was a joint effort with another team member.
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