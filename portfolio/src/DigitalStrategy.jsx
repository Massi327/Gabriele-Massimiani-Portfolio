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
                        DESCRIZIO CORSO BREVE CON ACCENNO PROGETTO
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
                        DESCRIZIONE DI COSA HO FATTO:
                        - GANTT
                        -ANALISI RATLOOP
                    </p>
                </Col>
            </Row>
        </>
    );
}