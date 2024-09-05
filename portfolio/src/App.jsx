import 'bootstrap/dist/css/bootstrap.min.css' 
import './index.css'
import { Container, Row, Col } from 'react-bootstrap';
import './App.css'
import Header from './Header'

function App() {

  return (
    <>
      <Header/>
      <Container className="home">
        <Row className='section m-5'>
          <Col>
          <h1>Home</h1>
          </Col>
        </Row>
        <Row className='section m-5'>
          <Col>
          <h1 id='about'>About</h1>
          </Col>
        </Row>
        <Row className='section m-5'>
          <Col>
          <h1 id='projects'>Projects</h1>
          </Col>
        </Row>
        <Row className='section m-5'>
          <Col>
          <h1 id='contact'>Contact</h1>
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default App
