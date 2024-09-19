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
      img: '/Gabriele-Massimiani-Portfolio/assets/LUL_FROG_Complete_Name.png',
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
      img: '/Gabriele-Massimiani-Portfolio/assets/Clownageddon.png', 
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
      img: '/Gabriele-Massimiani-Portfolio/assets/Line Spacing.png', 
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
      img: '/Gabriele-Massimiani-Portfolio/assets/Game Design.png', 
      url: 'https://drive.google.com/drive/folders/1xQgwhUWqW5u1B2fjd0F76i_cZb1jxiJW?usp=sharing',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'Computer Graphics (University Project - 2023)', 
      img: '/Gabriele-Massimiani-Portfolio/assets/Computer Grafica.png', 
      url: 'https://drive.google.com/drive/folders/1ExdxCFqfp_qRhEA5NKu8tBZz6U6Zeihh?usp=sharing',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      title: 'Computer Animation (University Project - 2023)', 
      img: '/Gabriele-Massimiani-Portfolio/assets/Computer Animation.png', 
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
      img: '/Gabriele-Massimiani-Portfolio/assets/The Sky Postman.png', 
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
      img: '/Gabriele-Massimiani-Portfolio/assets/APPy family.png', 
      url: 'https://drive.google.com/drive/folders/1HvJw8jJ-kHlRQ4E_pqUz4vJm_PtwBvn1?usp=sharing',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },

  ]

  const skillLogoUp = [
    {src: '/Gabriele-Massimiani-Portfolio/assets/mark-gradient-blue-jira.svg', alt: 'Jira'},
    {src: '/Gabriele-Massimiani-Portfolio/assets/notion-logo.png', alt: 'Notion'},
    {src: '/Gabriele-Massimiani-Portfolio/assets/unreal-engine-logo.png', alt: 'UE5'},
    {src: '/Gabriele-Massimiani-Portfolio/assets/unity-logo.png', alt: 'Unity'},
    {src: '/Gabriele-Massimiani-Portfolio/assets/blender-logo.png', alt: 'Blender'},
    {src: '/Gabriele-Massimiani-Portfolio/assets/c-logo.svg', alt: 'C'},
    {src: '/Gabriele-Massimiani-Portfolio/assets/csharp.png', alt: 'Csharp'},
  ]

  const skillLogoDown = [
    {src: '/Gabriele-Massimiani-Portfolio/assets/adobe-logo.png', alt: 'Adobe'},
    {src: '/Gabriele-Massimiani-Portfolio/assets/Microsoft-logo.svg', alt: 'Microsoft'},
    {src: '/Gabriele-Massimiani-Portfolio/assets/react-logo.svg', alt: 'React'},
    {src: '/Gabriele-Massimiani-Portfolio/assets/bootstrap-logo.svg', alt: 'Bootstrap'},
    {src: '/Gabriele-Massimiani-Portfolio/assets/javascript-logo.svg', alt: 'Javascript'},
    {src: '/Gabriele-Massimiani-Portfolio/assets/html-logo.svg', alt: 'HTML'},
    {src: '/Gabriele-Massimiani-Portfolio/assets/css-logo.svg', alt: 'CSS'},
    {src: '/Gabriele-Massimiani-Portfolio/assets/sqlite-logo.svg', alt: 'Sqlite'},
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
          
          <h2 className='mb-3'>Skills & Tools</h2>
          <div className="skill-logo-container">
          {skillLogoUp.map((skillLogo, index) => (
            <img src={skillLogo.src} alt={skillLogo.alt} className="skill-logo" key={index}/>
          ))}
          </div>
          <div className="skill-logo-container">
          {skillLogoDown.map((skillLogo, index) => (
            <img src={skillLogo.src} alt={skillLogo.alt} className="skill-logo" key={index}/>
          ))}
          </div>
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
        <h1 id='contact' className='mb-3'>Contact</h1>
          <Col>
          <Form ref={form} onSubmit={sendEmail} className="form-container">
            <Form.Group controlId="formName">
              <Form.Label className="form-label">Name*</Form.Label>
              <Form.Control type="text" name="user_name" placeholder="Enter your name" required className="form-control"/>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label className="form-label">Email address*</Form.Label>
              <Form.Control type="email" name="user_email" placeholder="Enter your email" required className="form-control"/>
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label className="form-label">Message*</Form.Label>
              <Form.Control as="textarea" rows={3} name="message" placeholder="Enter your message" required className="form-control"/>
            </Form.Group>
            <Button type="submit" className="button">
              Send
            </Button>
          </Form>
          </Col>
          <Col>
          Let's stay in touch!

          Feel free to fill in the form to contact me for any information or collaboration. I will reply as soon as possible. You can also find me on LinkedIn.
          If you want to meet and chat, you can contact me on this discord channel.

          </Col>
        </Row>
      </Container>
      
      <footer className='footer'>
        <div className="footer-content">
          <a href='https://www.linkedin.com/in/gabriele-massimiani/'>
          <img src='/Gabriele-Massimiani-Portfolio/assets/Linkedin logo.png' alt="LinkedIn" className="footer-logo" />
          LinkedIn
          </a>
          <span>© 2024 Gabriele Massimiani. All rights reserved.</span>
        </div>
      </footer>
    </>
  )
}

export default App
