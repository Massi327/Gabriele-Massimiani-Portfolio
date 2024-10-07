import './App.css'
import { Row, Col } from 'react-bootstrap'

export default function LevelUpLab() {
    return (
            <>
            <Row className='section mt-5 mx-3 pt-4'>
              <h1><span className='red-text'>Level Up Lab</span></h1>
              <h2>Description</h2>
            </Row>
            <Row className='section mx-4 pt-1'>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <p className='p'>
                    Level Up Lab (LUL) is a student team from Politecnico di Torino driven by a collective passion for video gaming. This student-led initiative seeks to elevate game development skills among the student body, preparing them for successful careers in the gaming industry while cultivating a vibrant community centred on a shared love for video games.
                    LUL members aim to present the overarching student team activities and vision to academics and industry professionals, seeking to forge valuable connections and broaden the game development community within universities.         
                    </p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8}>
                    <img src='/Gabriele-Massimiani-Portfolio/assets/LUL_Press_Kit.png' alt='Level Up Lab Logo' className='imgPageProject'/>
                </Col>
            </Row>

            <Row className='section mt-5 mx-3 pt-4'>
              <h2>Role & Ownerships</h2>
            </Row>
            <Row className='section mx-4 pt-1'>
                <Col xs={12} sm={12} md={12} lg={8}>
                    <img src='/Gabriele-Massimiani-Portfolio/assets/LUL_Press_Kit.png' alt='Level Up Lab Logo' className='imgPageProject'/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <p className='p'>
                    Level Up Lab (LUL) is a student team from Politecnico di Torino driven by a collective passion for video gaming. This student-led initiative seeks to elevate game development skills among the student body, preparing them for successful careers in the gaming industry while cultivating a vibrant community centred on a shared love for video games.
                    LUL members aim to present the overarching student team activities and vision to academics and industry professionals, seeking to forge valuable connections and broaden the game development community within universities.         
                    </p>
                </Col>
            </Row>
            </>
    );
}