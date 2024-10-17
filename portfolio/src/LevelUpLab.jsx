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
                    <b>Level Up Lab (LUL)</b> is a student team from <b>Politecnico di Torino</b> driven by a collective passion for video gaming. 
                    <br/>
                    This student-led initiative seeks to elevate <b>game development skills</b> among the student body, preparing them for <b>successful careers</b> in the gaming industry while cultivating a <b>vibrant community</b> centred on a shared love for video games.
                    <br/>
                    LUL members aim to present the overarching student team activities and vision to <b>academics</b> and <b>industry professionals</b>, seeking to forge <b>valuable connections</b> and broaden the game development community within universities.         
                    </p>
                    <p className='p'>
                        Go to website for more: <a href='https://www.leveluplab.it/' className='aOtherPages'>Level Up Lab</a>
                    </p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8}>
                    <img src='/Gabriele-Massimiani-Portfolio/assets/LUL_Press_Kit.png' alt='Level Up Lab Logo' className='imgPageProjectDx'/>
                </Col>
            </Row>

            <Row className='section mx-3 pt-5'>
              <h2>Role & Structure</h2>
            </Row>
            <Row className='section mx-4 pt-3'>
                <Col xs={{ order: 2, span: 12 }} sm={{ order: 2, span: 12 }} md={12} lg={{ order: 1, span: 8 }} className='pb-3'>
                    <img src='/Gabriele-Massimiani-Portfolio/assets/NotionProgram Plan.png' alt='Level Up Lab Logo' className='imgPageProjectSx'/>
                </Col>
                <Col xs={{ order: 1, span: 12 }} sm={{ order: 1, span: 12 }} md={12} lg={{ order: 2, span: 4 }} >
                    <p className='p'>
                    At Level Up Lab, I held the role of <b>General Project Manager</b> in the Management team and served as <b>Project Manager</b> in one of the five development teams. 
                    <br/><br/>
                    As part of the <b>Management</b>, consisting of 7 members, we conducted weekly meetings, and I was responsible for overseeing all 5 projects of Level Up Lab.
                    <br/><br/>
                    Specifically, together with the Team Leader, we created a <b>Program Plan</b> and decided to implement <b>two-week Sprints</b>. 
                    We divided our time into project phases: Brainstorming, Preproduction, Production, Polishing, and finally a Pitch phase.
                    </p>
                </Col>
            </Row>
            <Row className='section mx-4'>
                <Col xs={12} sm={12} md={12} lg={4} className='pb-3'>
                    <p className='p'>
                    Additionally, we defined the <b>deliverables</b> for each phase and created a <b>risk assessment</b> to address the challenges posed by a student team, anticipating that members would frequently change.
                    <br/><br/>
                    At the end of each two-week Sprint, we had a <b>Review phase</b>, during which I assessed any issues within the teams and provided advice on how to resolve them if necessary.
                    <br/><br/>
                    As our main tool, we used <b>Notion</b> to manage the entire student team.
                    </p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={8} className='pb-3'>
                    <img src='/Gabriele-Massimiani-Portfolio/assets/NotionHome.png' alt='Level Up Lab Logo' className='imgPageProjectDx'/>
                </Col>
            </Row>
            <Row className='section mx-4'>
                <Col xs={{ order: 2, span: 12 }} sm={{ order: 2, span: 12 }} md={12} lg={{ order: 1, span: 8 }} >
                    <img src='/Gabriele-Massimiani-Portfolio/assets/JiraBacklog.png' alt='Level Up Lab Logo' className='imgPageProjectSx'/>
                </Col>
                <Col xs={{ order: 1, span: 12 }} sm={{ order: 1, span: 12 }} md={12} lg={{ order: 2, span: 4 }} >
                <p className='p'>
                    As Project Manager for the <b>ThoseClowns Games</b> team, I ensured that Sprint Planning, Reviews, Retrospectives, and general meetings were organized and efficient.
                    <br/><br/>
                    We used <b>Jira</b> to track the project's status and <b>Notion</b> for documentation.
                    </p>
                </Col>
            </Row>
            </>
    );
}