import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Row, Col } from 'react-bootstrap';
import './App.css'
import Header from './Header'
import Card from 'react-bootstrap/Card'

function App() {

  const projects = [
    {
      title: 'Level Up Lab', 
      img: 'src/Asset/LUL_FROG_Complete_Name.png', 
      url: 'https://www.leveluplab.it/',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'Clownageddon - GLOBAL GAME JAM (2024)', 
      img: 'src/Asset/Clownageddon.png', 
      url: 'https://abstractborderstudio.itch.io/clownageddon',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'Line Spacing - FAIL/SAFE GAME JAM (2023)', 
      img: 'src/Asset/Line Spacing.png', 
      url: 'https://abstractborderstudio.itch.io/linespacing',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'GAME DESIGN (University Project - 2023)', 
      img: 'src/Asset/Game Design.png', 
      url: 'https://drive.google.com/drive/folders/1xQgwhUWqW5u1B2fjd0F76i_cZb1jxiJW?usp=sharing',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'COMPUTER GRAPHICS (University Project - 2023)', 
      img: 'src/Asset/Computer Grafica.png', 
      url: 'https://www.dropbox.com/sh/fjle2b7s5uz53gt/AAA4iSq1DHIa9hGZljldnr2-a?dl=0',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'COMPUTER ANIMATION (University Project - 2023)', 
      img: 'src/Asset/Computer Animation.png', 
      url: 'https://www.dropbox.com/sh/fjle2b7s5uz53gt/AAA4iSq1DHIa9hGZljldnr2-a?dl=0',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'VIRTUAL REALITY (University Project - 2023)', 
      img: 'src/Asset/The Sky Postman.png', 
      url: 'https://cutt.ly/LwvVVqop',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'HUMAN COMPUTER INTERACTION (University Project - 2023)', 
      img: 'src/Asset/APPy family.png', 
      url: 'https://www.dropbox.com/scl/fi/9dpr5tni9gc4pcbblkkie/APPy-Family-Final-Group-Report.pdf?rlkey=wq0pvi7ylnhm63dlbb81n62db&dl=0',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },

  ]

  const handleCardClick = (url) => {
    window.location.href = url
  }

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

        <Row className='section m-5 d-flex justify-content-center'>
          {projects.map((project, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
              <Card className='card' onClick={() => handleCardClick(project.url)}>
                <Card.Img variant="top" src={project.img} className="card-img-small"/>
                <Card.Body>
                  <Card.Title className='text-center'>{project.title}</Card.Title>
                  <Card.Text className='text-center'>
                    {project.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
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
