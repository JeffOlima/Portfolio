import '../styles/components/projectscontainer.sass'

const ProjectsContainer = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
                <div className='projects-grid'>
                    <div className="projects-card">
                        <a className="btn" href="https://jeffolima.github.io/robofriends/"> Robofriends</a>
                        <p>A basic react web aplication using API</p>
                    </div>
                    <div className="projects-card">
                    <a className="btn" href="https://github.com/JeffOlima/GET_A_PET"> Geta a pet</a>
                        <p>Node.js/ react aplication for pet adoption </p>
                    </div>
                    <div className="projects-card">
                    <a className="btn" href="https://github.com/JeffOlima/11_THOUGHTS"> Thoughts</a>
                        <p>Node.js aplication where you post Thoughts that are saved on a database</p>
                    </div> 
                    </div> 
        </div>
    )
}

export default ProjectsContainer;