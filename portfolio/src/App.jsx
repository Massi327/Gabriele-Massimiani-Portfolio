import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Row, Col } from 'react-bootstrap';
import './App.css'
import Header from './Header'
import Card from 'react-bootstrap/Card'

function App() {

  return (
    <>
      <Header/>
      <Container className="home">
        <Row className='section m-5 pt-4'>
          <Col>
          <h1>Hi, I'm <span className='red-text'>Gabriele Massimiani!</span></h1>
          <p className='p'>
            During my years at the Politecnico di
            Torino I was able to combine both
            engineering and creative skills. 
          </p>
          <p className='p'>
            I had the chance to take part in 5+ projects in
            which I explored multiple roles such as
            producer, project coordinator, and
            programmer. <br/> This had been important to
            test how to work in a team, manage time
            better, make a budget plan and how to
            make a good pitch.
          </p>
          <p className='p'>
            I am an organised, precise and goal-oriented person, and I
            always give my best. <br/> I would like to work
            in the video game market, which I follow
            as an enthusiast and user, but I am open
            to jobs that allow me to test my skills and
            learn more and more.
          </p>
          </Col>
        </Row>

        <Row className='section m-5'>
          <Col>
          <Card className='card'>
            <Card.Img variant="top" src="src/Asset/LUL_FROG_Complete_Name.png" className="card-img-small"/>
            <Card.Body>
              <Card.Title>Level Up Lab</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>

        <Row className='section m-5'>
          <Col>
          <h1 id='projects'>Projects</h1>
          <p className='p'>
            During my years at the Politecnico di
            Torino I was able to combine both
            engineering and creative skills. 
          </p>
          <p className='p'>
            I had the chance to take part in 5+ projects in
            which I explored multiple roles such as
            producer, project coordinator, and
            programmer. <br/> This had been important to
            test how to work in a team, manage time
            better, make a budget plan and how to
            make a good pitch.
          </p>
          <p className='p'>
            I am an organised, precise and goal-oriented person, and I
            always give my best. <br/> I would like to work
            in the video game market, which I follow
            as an enthusiast and user, but I am open
            to jobs that allow me to test my skills and
            learn more and more.
          </p>
          </Col>
        </Row>

        <Row className='section m-5'>
          <Col>
          <h1 id='contact'>Contact</h1>
          <p className='p'>
            During my years at the Politecnico di
            Torino I was able to combine both
            engineering and creative skills. 
          </p>
          <p className='p'>
            I had the chance to take part in 5+ projects in
            which I explored multiple roles such as
            producer, project coordinator, and
            programmer. <br/> This had been important to
            test how to work in a team, manage time
            better, make a budget plan and how to
            make a good pitch.
          </p>
          <p className='p'>
            I am an organised, precise and goal-oriented person, and I
            always give my best. <br/> I would like to work
            in the video game market, which I follow
            as an enthusiast and user, but I am open
            to jobs that allow me to test my skills and
            learn more and more.
          </p>
          </Col>
        </Row>
      </Container>
      
      <footer className='footer'>
        <p>© 2024 Gabriele Massimiani. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
