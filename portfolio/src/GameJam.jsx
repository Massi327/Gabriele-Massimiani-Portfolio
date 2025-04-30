import './App.css'
import { Row, Col } from 'react-bootstrap'

export default function GameJam() {
    return (
        <>
            <Row className='section mt-5 mx-3 pt-4'>
              <h1><span className='red-text'>Game Jam</span></h1>
            </Row>
            <Row className='section mx-3 pt-3'>
              <h2>Global Game Jam 2025</h2>
            </Row>
            <Row className='section mx-4 pt-3'>
                <Col xs={{ order: 2, span: 12 }} sm={{ order: 2, span: 12 }} md={12} lg={{ order: 1, span: 7 }}>
                <div className="video-container-sx-GJ">
                    <iframe 
                        src="https://www.youtube.com/embed/a0rl1BCaJ_o?si=bmgpf2H5TXcY1C-K" 
                        title="The Bubble Dance - GGJ25" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>                    
                </Col>
                <Col xs={{ order: 1, span: 12 }} sm={{ order: 1, span: 12 }} md={12} lg={{ order: 2, span: 5 }} className='pb-3'>
                    <p className='p'>
                    At the <b>Global Game Jam 2025</b>, I applied what I learned over a year in a <b>student game dev team</b> by managing both the project and team in my usual role as <b>project manager</b>. 
                    I also contributed to <b>game design</b>, testing a concept of mine: using parrying as the only attack and defense mechanic in a boss fight. 
                    After aligning team goals and defining roles, I handled the <b>UI and menu design</b>, as in my previous projects. 
                    It was a great experience that helped me better understand the challenges of game design and managing resources and skills in a short timeframe.                    </p>
                    <iframe src="https://itch.io/embed/3273683?linkback=true&amp;bg_color=E1E2D0&amp;fg_color=101419&amp;link_color=D81919&amp;border_color=E1E2D0" className='embededItch'><a href="https://gabriele-massimiani.itch.io/the-bubble-dance">The Bubble Dance by Gabriele Massimiani, ZanyRig, ByElenn, LeslieLxt, GalaSenpai</a></iframe>                </Col>
            </Row>

            <Row className='section mx-3 pt-3'>
              <h2>Global Game Jam 2024</h2>
            </Row>
            <Row className='section mx-4 pt-3'>
                <Col xs={12} sm={12} md={12} lg={5} className='pb-3'>
                    <p className='p'>
                    In the <b>Global Game Jam 2024</b>, I collaborated with two other game designers on the <b>game's design</b> of <b>Clownageddon</b>. 
                    It was my first time stepping outside of my usual role to challenge myself and learn something new. 
                    I found it exciting to understand the perspective of a different role compared to my typical position as a <b>project manager</b>. 
                    This experience helped me improve my skills in my primary role by gaining a deeper understanding of the design process.
                    </p>
                    <iframe src="https://itch.io/embed/2496957?linkback=true&amp;bg_color=E1E2D0&amp;fg_color=101419&amp;link_color=D81919&amp;border_color=E1E2D0" className='embededItch'><a href="https://abstractborderstudio.itch.io/clownageddon">Clownageddon by AbstractBorderStudio, IlariaPasini, plummycake, nyolind, Gabriele Massimiani, Pietro</a></iframe>
                </Col>
                <Col xs={12} sm={12} md={12} lg={7} className='pb-5'>
                <div className="video-container-dx-GJ">
                        <iframe 
                            src="https://www.youtube.com/embed/ZV5B9T892ec" 
                            title="Clowageddon trailer" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                </div>               
                </Col>
            </Row>

            <Row className='section mx-3'>
              <h2>Fail/Safe Game Jam 2023</h2>
            </Row>
            <Row className='section mx-4 pt-3'>
                <Col xs={{ order: 2, span: 12 }} sm={{ order: 2, span: 12 }} md={12} lg={{ order: 1, span: 7 }}>
                <div className="video-container-sx-GJ">
                    <iframe 
                        src="https://www.youtube.com/embed/gx0rGHIhqkE" 
                        title="LineSpacing - Fail/Safe game jam entry" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>                    
                </Col>
                <Col xs={{ order: 1, span: 12 }} sm={{ order: 1, span: 12 }} md={12} lg={{ order: 2, span: 5 }} className='pb-3'>
                    <p className='p'>
                    The <b>Fail/Safe Game Jam 2023</b>, organized by <b>IGDA Italy</b>, was my first experience participating in a game jam. <br />
                    I focused primarily on <b>programming</b> the UI and menus of <b>Line Spacing</b>. 
                    <br />
                    It was an exciting challenge that pushed me to work within a shorter timeframe than usual. 
                    <br /> <br />
                    I can't wait to take part in future game jams, explore new roles, and continue expanding my skills.
                    </p>
                    <iframe src="https://itch.io/embed/2296794?linkback=true&amp;bg_color=E1E2D0&amp;fg_color=101419&amp;link_color=D81919&amp;border_color=E1E2D0" className='embededItch'><a href="https://abstractborderstudio.itch.io/linespacing">LineSpacing by AbstractBorderStudio, Gabriele Massimiani, Pietro</a></iframe>
                </Col>
            </Row>
        </>
    );
}