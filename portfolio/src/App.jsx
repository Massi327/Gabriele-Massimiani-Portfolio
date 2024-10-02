import React, { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './App.css'
import Header from './Header'
import Card from 'react-bootstrap/Card'
import emailjs from 'emailjs-com';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import LevelUpLab from './LevelUpLab';
import GameJam from './GameJam';
import GameDesign from './GameDesign';
import VirtualReality from './VirtualReality';
import DigitalStrategy from './DigitalStrategy';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './Pdf';

function App() {

  const navigate = useNavigate();
  const siteBase = '/Gabriele-Massimiani-Portfolio';
  const [homePage, setHomePage] = useState(true);

  const projects = [
    {
      title: 'Level Up Lab', 
      img: '/Gabriele-Massimiani-Portfolio/assets/LUL_FROG_Complete_Name.png',
      url: '/LevelUpLab',
      description: 'TODO'
    },
    {
      title: (
      <>
        Game Jam (2023/2024)
      </>
    ), 
      img: '/Gabriele-Massimiani-Portfolio/assets/Clownageddon.png', 
      url: '/GameJam',
      description: 'TODO'
    },
    {
      title: (
        <>
        Game Design <br/> 
        (University Project - 2023)
        </>
      ), 
      img: '/Gabriele-Massimiani-Portfolio/assets/Game Design.png', 
      url: '/GameDesign',
      description: 'TODO'
    },
    {
      title: (
        <>
        Virtual Reality <br/> 
        (University Project - 2023)
        </>
      ),  
      img: '/Gabriele-Massimiani-Portfolio/assets/The Sky Postman.png', 
      url: '/VirtualReality',
      description: 'TODO'
    },
    {
      title:  (
        <>
        Digital Strategy <br/> 
        (University Project - 2023)
        </>
      ),    
      img: '/Gabriele-Massimiani-Portfolio/assets/APPy family.png', 
      url: '/DigitalStrategy',
      description: 'TODO'
    },

  ]

  const oldProject = [
    {
      title: 'Level Up Lab', 
      img: '/Gabriele-Massimiani-Portfolio/assets/LUL_FROG_Complete_Name.png',
      url: 'https://www.leveluplab.it/',
      description: 'TODO'
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
      description: 'TODO'
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
      description: 'TODO'
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
      description: 'TODO'
    },
    {
      title: 'Computer Graphics (University Project - 2023)', 
      img: '/Gabriele-Massimiani-Portfolio/assets/Computer Grafica.png', 
      url: 'https://drive.google.com/drive/folders/1ExdxCFqfp_qRhEA5NKu8tBZz6U6Zeihh?usp=sharing',
      description: 'TODO'
    },
    {
      title: 'Computer Animation (University Project - 2023)', 
      img: '/Gabriele-Massimiani-Portfolio/assets/Computer Animation.png', 
      url: 'https://drive.google.com/drive/folders/1_HJ8RKqDarBg5fbkirwpYArqR78tFC_6?usp=sharing',
      description: 'TODO'
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
      description: 'TODO'
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
      description: 'TODO'
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
    {src: '/Gabriele-Massimiani-Portfolio/assets/react-logo.svg', alt: 'React'},
    {src: '/Gabriele-Massimiani-Portfolio/assets/bootstrap-logo.svg', alt: 'Bootstrap'},
    {src: '/Gabriele-Massimiani-Portfolio/assets/javascript-logo.svg', alt: 'Javascript'},
    {src: '/Gabriele-Massimiani-Portfolio/assets/html-logo.svg', alt: 'HTML'},
    {src: '/Gabriele-Massimiani-Portfolio/assets/css-logo.svg', alt: 'CSS'},
  ]

  const handleCardClick = (url) => {
    setHomePage(false);
    navigate(siteBase+url);
  }

  const [badge, setBadge] = useState('hidden');
  const [spinner, setSpinner] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setSpinner(true);
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_YOUR_USER_ID)
      .then((result) => {
          console.log('result.text: '+result.text);
          setSpinner(false);
          setBadge('ok');
          setTimeout(() => {
            setBadge(false);
          }, 5000);
      }, (error) => {
          console.log(error.text);
          setSpinner(false);
          setBadge('error');
          setTimeout(() => {
            setBadge(false);
          }, 5000);
      });
    form.current.reset();
  };

  return (
    
    <Routes>
      <Route path="/" element={
        <>
        <Header homePage={homePage}/>
        <Container className="home">
          <Outlet/>
          <footer className='footer'>
            <div className="footer-content">
              <a href='https://www.linkedin.com/in/gabriele-massimiani/'>
              <img src='/Gabriele-Massimiani-Portfolio/assets/Linkedin logo.png' alt="LinkedIn" className="footer-logo" />
              LinkedIn
              </a>
              <span className='footer-text'>© 2024 Gabriele Massimiani</span>
            </div>
          </footer>
        </Container>
        </>
        } >
      
        <Route index element={
          <>
          
            
            {/*About*/}
            <Row className='section mt-5 mx-2 pt-4'>
              <h1>Hi, I'm <span className='red-text'>Gabriele Massimiani!</span></h1>
              <h2>Project Manager</h2>
            </Row>
            <Row className='section mx-3 pt-1'>
              <p className='p'>
              I am a university student at Politecnico di Torino, with a background in engineering and a deep passion for the gaming industry.
              </p>
              <p className='p'>
              Through my participation in various projects, I have gained experience in project coordination, time management, budget planning, and effective communication, all essential components of successful project management.
              </p>
              <p className='p'>
              I am an organized, detail-oriented person who excels in teamwork. I prioritize tasks effectively, adapt well to change, and I am committed to delivering high-quality results while seeking continuous growth.
              </p>
              <p className='p'>
              My goal is to work in the video game industry as a producer or project manager, where I can apply my skills to contribute to the development of innovative and impactful projects.
              </p>
              <p className='p'>
              I am excited about the opportunity to contribute to your esteemed team!
              </p>
              
              <h2 className='mb-3 mt-3'>Skills & Tools</h2>
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
              <div id='projects'></div>
            </Row>
    
            {/*Projects*/}
            <Row className='section mt-5 mx-2'>
              <h1>Projects</h1>
            </Row>
            <Row className='section pt-1 mb-2 mx-3 d-flex justify-content-center'>
              {projects.map((project, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center mb-4">
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
            <Row className='section mt-5 mb-2 mx-2'>
              <h1 id='contact' className='mb-3'>Contact</h1>
            </Row>
            <Row className='section mx-3 mb-2'>
              <Col xs={12} sm={12} md={6} lg={6}>
              <h2>Let's stay in touch!</h2>
              <p className='p'>
              Feel free to fill in the form to contact me for any information or collaboration. <br/> I will reply as soon as possible. 
              </p>
              <p className='p'>
              You can also find me on LinkedIn:<a className='a' href='https://www.linkedin.com/in/gabriele-massimiani/'> Gabriele Massimiani</a>.
              </p>
              <p className='p'>
              If you want to meet and chat, you can contact me on this discord channel: <a className='a' href='https://discord.com/invite/5M9fJyWYtE'> Level Up Lab</a>.
              </p>
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
                <div className="button-container">
                <Button type="submit" className="button">
                  Send
                </Button>
                {spinner && <Spinner animation="border" role="status" className="spinner"/>}
                {badge==='ok' && <Badge pill className="badgeOk" bg="#E1E2D0">Email sent</Badge>}
                {badge==='error' && <Badge pill className="badgeError" bg="#E1E2D0">Email error</Badge>}
                </div>
              </Form>
              </Col>
              
              <Col xs={12} sm={12} md={6} lg={6}>
              <iframe
                src="/Gabriele-Massimiani-Portfolio/assets/CV GABRIELE MASSIMIANI.pdf"
                title="CV"
                className='pt-4 pdf-iframe'
                allow="fullscreen"
              ></iframe>
              
              {/*<PDFViewer>
                <MyDocument />
              </PDFViewer>*/}

              </Col>
            </Row>
          </>
        } />

        <Route path="/LevelUpLab" element={<LevelUpLab/>}/>
        <Route path="/GameJam" element={<GameJam/>}/>
        <Route path="/GameDesign" element={<GameDesign/>}/>
        <Route path="/VirtualReality" element={<VirtualReality/>}/>
        <Route path="/DigitalStrategy" element={<DigitalStrategy/>}/>
      </Route>
      
    </Routes>
      
    
  )
}

export default App
