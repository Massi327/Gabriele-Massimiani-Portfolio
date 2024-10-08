import './App.css'
import { Row, Col } from 'react-bootstrap'

export default function GameJam() {
    return (
        <>
            <Row className='section mt-5 mx-3 pt-4'>
              <h1><span className='red-text'>Game Jam</span></h1>
            </Row>
            <Row className='section mx-3 pt-1 mt-2'>
              <h2>Global Game Jam 2024</h2>
            </Row>
            <Row className='section mx-4 pt-3'>
                <Col xs={12} sm={12} md={12} lg={5}>
                    <p className='p'>
                    TODO
                    </p>
                    <iframe src="https://itch.io/embed/2496957?bg_color=E1E2D0&amp;fg_color=101419&amp;link_color=D81919&amp;border_color=E1E2D0" className='embededItch'><a href="https://abstractborderstudio.itch.io/clownageddon">Clownageddon by AbstractBorderStudio, IlariaPasini, plummycake, nyolind, Gabriele Massimiani, Pietro</a></iframe>
                </Col>
                <Col xs={12} sm={12} md={12} lg={7}>
                <div className="video-container-dx">
                        <iframe 
                            src="https://www.youtube.com/embed/ZV5B9T892ec" 
                            title="Clowageddon trailer" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                </div>               
                </Col>
            </Row>

            <Row className='section mx-3 pt-1 mt-2'>
              <h2>Fail/Safe Game Jam 2023</h2>
            </Row>
            <Row className='section mx-4 pt-1'>
                <Col xs={12} sm={12} md={12} lg={7}>
                <div className="video-container-sx">
                    <iframe 
                        src="https://www.youtube.com/embed/gx0rGHIhqkE" 
                        title="LineSpacing - Fail/Safe game jam entry" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>                    </Col>
                <Col xs={12} sm={12} md={12} lg={5}>
                    <p className='p mt-2'>
                    TODO
                    </p>
                    <iframe src="https://itch.io/embed/2296794?bg_color=E1E2D0&amp;fg_color=101419&amp;link_color=D81919&amp;border_color=E1E2D0" className='embededItch'><a href="https://abstractborderstudio.itch.io/linespacing">LineSpacing by AbstractBorderStudio, Gabriele Massimiani, Pietro</a></iframe>
                </Col>
            </Row>
        </>
    );
}