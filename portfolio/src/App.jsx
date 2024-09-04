import 'bootstrap/dist/css/bootstrap.min.css' 
import './index.css'
import { Container, Row, Col } from 'react-bootstrap';
import './App.css'
import Header from './Header'

function App() {

  return (
    <>
      <Header/>
      <Container fluid className="home">
        <Row>
          <Col>
          <h1>Home</h1>
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default App
