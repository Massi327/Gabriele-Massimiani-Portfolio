import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './App.css'
import Header from './Header'
import Card from 'react-bootstrap/Card'
import emailjs from 'emailjs-com';

function App() {

  const projects = [
    {
      title: 'Level Up Lab', 
      img: 'public/Asset/LUL_FROG_Complete_Name.png',
      url: 'https://www.leveluplab.it/',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: (
      <>
        Clownageddon <br/>
        GLOBAL GAME JAM (2024)
      </>
    ), 
      img: 'public/Asset/Clownageddon.png', 
      url: 'https://abstractborderstudio.itch.io/clownageddon',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: (
        <>
        Line Spacing <br/> 
        FAIL/SAFE GAME JAM
        </>
    ), 
      img: 'public/Asset/Line Spacing.png', 
      url: 'https://abstractborderstudio.itch.io/linespacing',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: (
        <>
        Game Design <br/> 
        (University Project - 2023)
        </>
      ), 
      img: 'public/Asset/Game Design.png', 
      url: 'https://drive.google.com/drive/folders/1xQgwhUWqW5u1B2fjd0F76i_cZb1jxiJW?usp=sharing',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'Computer Graphics (University Project - 2023)', 
      img: 'public/Asset/Computer Grafica.png', 
      url: 'https://drive.google.com/drive/folders/1ExdxCFqfp_qRhEA5NKu8tBZz6U6Zeihh?usp=sharing',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'Computer Animation (University Project - 2023)', 
      img: 'public/Asset/Computer Animation.png', 
      url: 'https://drive.google.com/drive/folders/1_HJ8RKqDarBg5fbkirwpYArqR78tFC_6?usp=sharing',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: (
        <>
        Virtual Reality <br/> 
        (University Project - 2023)
        </>
      ),  
      img: 'public/Asset/The Sky Postman.png', 
      url: 'https://cutt.ly/LwvVVqop',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title:  (
        <>
        HCI <br/> 
        (University Project - 2023)
        </>
      ),    
      img: 'public/Asset/APPy family.png', 
      url: 'https://drive.google.com/drive/folders/1HvJw8jJ-kHlRQ4E_pqUz4vJm_PtwBvn1?usp=sharing',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },

  ]

  const skillLogo = [
    {src: 'public/Asset/unity-logo.png', alt: 'Unity'},
    {src: 'public/Asset/unreal-engine-logo.png', alt: 'Unreal Engine'},
    {src: 'public/Asset/blender-logo.png', alt: 'Blender'},
    {src: 'public/Asset/notion-logo.png', alt: 'Notion'},
    {src: 'public/Asset/jira-logo.png', alt: 'Jira'},
    {src: 'public/Asset/javascript-logo.svg', alt: 'Javascript'},
    {src: 'public/Asset/adobe-logo.png', alt: 'Adobe'},
    {src: 'public/Asset/bootstrap-logo.svg', alt: 'Bootstrap'},
    {src: 'public/Asset/c-logo.svg', alt: 'C'},
    {src: 'public/Asset/csharp.png', alt: 'Csharp'},
    {src: 'public/Asset/css-logo.svg', alt: 'CSS'},
    {src: 'public/Asset/html-logo.svg', alt: 'HTML'},
    {src: 'public/Asset/react-logo.svg', alt: 'React'},
    {src: 'public/Asset/sqlite-logo.svg', alt: 'Sqlite'},
  ]

  const handleCardClick = (url) => {
    window.location.href = url
  }

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_YOUR_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    form.current.reset();
  };

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
                  <Card.Title className='card-title'>{project.title}</Card.Title>
                  <Card.Text className='card-text'>
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
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="user_name" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="user_email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} name="message" placeholder="Enter your message" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
          </Col>
        </Row>
      </Container>
      
      <footer className='footer'>
        <div className="footer-content">
          <a href='https://www.linkedin.com/in/gabriele-massimiani/'>
          <img src='public/Asset/Linkedin logo.png' alt="LinkedIn" className="footer-logo" />
          LinkedIn
          </a>
          <span>© 2024 Gabriele Massimiani. All rights reserved.</span>
        </div>
      </footer>
    </>
  )
}

export default App
