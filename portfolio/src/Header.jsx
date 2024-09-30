import { useEffect } from 'react';
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importazione delle icone


export default function Header(props) {

    const {homePage} = props;
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const href = homePage ? '#' : '/Gabriele-Massimiani-Portfolio/';

    return (
        <Navbar className="navbar" data-bs-theme='dark'>
        <Container>
            <a href={href} className='navbar-brand'>
                <img alt="Logo_GM" src="/Gabriele-Massimiani-Portfolio/assets/Logo_GM.svg" className="navbar-brand-logo"/>
            </a>
            <a href={href} className='navbar-brand d-none d-lg-block'>
                Gabriele Massimiani | Portfolio
            </a>
            {homePage && 
            <>
                <Nav className="ms-auto d-none d-lg-flex">
                    <Nav.Link href="#projects" className="navlink">Projects</Nav.Link>
                    <Nav.Link href="#contact" className="navlink">Contact</Nav.Link>
                    <Nav.Link href="/Gabriele-Massimiani-Portfolio/assets/CV GABRIELE MASSIMIANI.pdf" className="navlink">Resume</Nav.Link>
                </Nav>

                <Dropdown align={{ lg: 'end' }} className='d-lg-none'>
                <Dropdown.Toggle className="dropdown-outline" variant=''>
                    <i className="bi bi-list"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item >Storico Partite</Dropdown.Item>
                    <Dropdown.Item >Logout</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </>
            }
        </Container>
        </Navbar>
    );
}