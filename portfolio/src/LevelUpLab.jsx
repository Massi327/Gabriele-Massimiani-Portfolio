import './App.css'
import { Row, Col } from 'react-bootstrap'

export default function LevelUpLab() {
    return (
            <>
            <Row className='section mt-5 mx-3 pt-4'>
              <h1><span className='red-text'>Level Up Lab</span></h1>
              <h2>Co-founder and General Project Manager</h2>
            </Row>
            <Row className='section mx-4 pt-3'>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <p className='p'>
                    Level Up Lab (LUL) is a student team from Politecnico di Torino driven by a collective passion for video gaming. This student-led initiative seeks to elevate game development skills among the student body, preparing them for successful careers in the gaming industry while cultivating a vibrant community centred on a shared love for video games.
                    LUL members aim to present the overarching student team activities and vision to academics and industry professionals, seeking to forge valuable connections and broaden the game development community within universities.         
                    </p>
                    <p className='p'>
                        Go to website for more: <a href='https://www.leveluplab.it/' className='aOtherPages'>Level Up Lab</a>
                    </p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8}>
                    <img src='/Gabriele-Massimiani-Portfolio/assets/LUL_Press_Kit.png' alt='Level Up Lab Logo' className='imgPageProjectDx'/>
                </Col>
            </Row>

            <Row className='section mx-3 pt-1 mt-2'>
              <h2>Role & Structure</h2>
            </Row>
            <Row className='section mx-4 pt-1'>
                <Col xs={12} sm={12} md={12} lg={8}>
                    <img src='/Gabriele-Massimiani-Portfolio/assets/NotionProgram Plan.png' alt='Level Up Lab Logo' className='imgPageProjectSx'/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <p className='p mt-2'>
                    At Level Up Lab, I held the role of General Project Manager in the Management team and served as Project Manager in one of the five development teams. 
                    <br/><br/>
                    As part of the Management, consisting of 7 members, we conducted weekly meetings, and I was responsible for overseeing all 5 projects of Level Up Lab.
                    <br/><br/>
                    Specifically, together with the Team Leader, we created a Program Plan and decided to implement two-week Sprints. 
                    We divided our time into project phases: Brainstorming, Preproduction, Production, Polishing, and finally a Pitch phase.
                    </p>
                </Col>
            </Row>
            <Row className='section mx-4 pt-1'>
                <Col xs={12} sm={12} md={12} lg={4}>
                    <p className='p'>
                    Additionally, we defined the deliverables for each phase and created a risk assessment to address the challenges posed by a student team, anticipating that members would frequently change.
                    <br/><br/>
                    At the end of each two-week Sprint, we had a Review phase, during which I assessed any issues within the teams and provided advice on how to resolve them if necessary.
                    <br/><br/>
                    As our main tool, we used Notion to manage the entire student team.
                    </p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8}>
                    <img src='/Gabriele-Massimiani-Portfolio/assets/NotionHome.png' alt='Level Up Lab Logo' className='imgPageProjectDx'/>
                </Col>
            </Row>
            <Row className='section mx-4 pt-1'>
                <Col xs={12} sm={12} md={12} lg={8}>
                    <img src='/Gabriele-Massimiani-Portfolio/assets/JiraBacklog.png' alt='Level Up Lab Logo' className='imgPageProjectSx mt-2'/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4}>
                <p className='p mt-3'>
                    As Project Manager for the ThoseClowns Games team, I ensured that Sprint Planning, Reviews, Retrospectives, and general meetings were organized and efficient.
                    <br/><br/>
                    We used Jira to track the project's status and Notion for documentation.
                    </p>
                </Col>
            </Row>
            </>
    );
}