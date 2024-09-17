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
      url: 'https://drive.google.com/drive/folders/1ExdxCFqfp_qRhEA5NKu8tBZz6U6Zeihh?usp=sharing',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'COMPUTER ANIMATION (University Project - 2023)', 
      img: 'src/Asset/Computer Animation.png', 
      url: 'https://drive.google.com/drive/folders/1_HJ8RKqDarBg5fbkirwpYArqR78tFC_6?usp=sharing',
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
      url: 'https://drive.google.com/drive/folders/1HvJw8jJ-kHlRQ4E_pqUz4vJm_PtwBvn1?usp=sharing',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },

  ]

  const skillLogo = [
    {src: 'src/Asset/unity-logo.png', alt: 'Unity'},
    {src: 'src/Asset/unreal-engine-logo.png', alt: 'Unreal Engine'},
    {src: 'src/Asset/blender-logo.png', alt: 'Blender'},
    {src: 'src/Asset/notion-logo.png', alt: 'Notion'},
    {src: 'src/Asset/jira-logo.png', alt: 'Jira'},
    {src: 'src/Asset/javascript-logo.svg', alt: 'Javascript'},
    {src: 'src/Asset/adobe-logo.svg', alt: 'Adobe'},
    {src: 'src/Asset/bootstrap-logo.svg', alt: 'Bootstrap'},
    {src: 'src/Asset/c-logo.svg', alt: 'C'},
    {src: 'src/Asset/cs-logo.svg', alt: 'C#'},
    {src: 'src/Asset/css-logo.svg', alt: 'CSS'},
    {src: 'src/Asset/html-logo.svg', alt: 'HTML'},
    {src: 'src/Asset/Microsoft-logo.svg', alt: 'Microsoft'},
    {src: 'src/Asset/react-logo.svg', alt: 'React'},
    {src: 'src/Asset/sqlite-logo.svg', alt: 'Sqlite'},
  ]

  const handleCardClick = (url) => {
    window.location.href = url
  }

  return (
    <>
      <Header/>
      <Container className="home">
        
        {/*About*/}
        <Row className='section m-5 pt-4'>
          <Col>
          <h1>Hi, I'm <span className='red-text'>Gabriele Massimiani!</span></h1>
          <p className='p'>
           TODO
          </p>
          
          <h2>Skills & Tools</h2>
          <p className='p'>Blender, Unity, Unreal Engine, Notion, Jira, Suite Microsoft, Suite Adobe, Java, Javascript (React), HTML, C#, C, SQL</p>
          {skillLogo.map((skillLogo, index) => (
            <img src={skillLogo.src} alt={skillLogo.alt} className="skill-logo" key={index}/>
          ))}
          </Col>
        </Row>

        

        {/*Projects*/}
        <Row className='section m-5'>
          <Col>
          <h1 id='projects'>Projects</h1>
          <p className='p'>TODO</p>
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
        
        {/*Contacts*/}
        <Row className='section m-5'>
          <Col>
          <h1 id='contact'>Contact</h1>
          <p className='p'>
            TODO
          </p>
          </Col>
        </Row>
      </Container>
      
      <footer className='footer'>
        <div className="footer-content">
          <a href='https://www.linkedin.com/in/gabriele-massimiani/'>
          <img src='src/Asset/Linkedin logo.png' alt="LinkedIn" className="footer-logo" />
          LinkedIn
          </a>
          <span>© 2024 Gabriele Massimiani. All rights reserved.</span>
        </div>
      </footer>
    </>
  )
}

export default App
