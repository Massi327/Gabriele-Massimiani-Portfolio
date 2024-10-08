import './App.css'
import { Row, Col } from 'react-bootstrap'

export default function GameJam() {
    return (
        <>
            <Row className='section mt-5 mx-3 pt-4'>
              <h1><span className='red-text'>Game Jam</span></h1>
              <h2>UI Programmer & Game Designer</h2>
            </Row>
            <Row className='section mx-4 pt-3'>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <p className='p'>
                    TODO
                    </p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8}>
                    <img src='/Gabriele-Massimiani-Portfolio/assets/LUL_Press_Kit.png' alt='Level Up Lab Logo' className='imgPageProjectDx'/>
                </Col>
            </Row>

            <Row className='section mx-3 pt-1 mt-2'>
              <h2>Role & Structure</h2>
            </Row>
            <Row className='section mx-4 pt-1'>
                <Col xs={12} sm={12} md={12} lg={8}>
                    <img src='/Gabriele-Massimiani-Portfolio/assets/NotionProgram Plan.png' alt='Level Up Lab Logo' className='imgPageProjectSx'/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <p className='p mt-2'>
                    TODO
                    </p>
                </Col>
            </Row>
        </>
    );
}