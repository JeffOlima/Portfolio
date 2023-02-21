import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiMongodb
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies =[
    { id: "html",name: "HTML5", icon: <DiHtml5 />},
    { id: "css",name: "CSS3", icon: <DiCss3 />},
    { id: "js",name: "JavaScript", icon: <DiJsBadge />},
    { id: "node",name: "Node.js", icon: <DiNodejsSmall />},
    { id: "mysql",name: "MySQL", icon: <DiMysql />},
    { id: "react",name: "React", icon: <DiReact />},
    { id: "mongo",name: "Mongo", icon: <DiMongodb />},
];

const TechnologiesContainer = () => {
    return (
        <section className='technologies-container'>
            <h2>Technologies</h2>
            <div className='technologies-grid'>
                {technologies.map((tech) => (
                    <div className='technologies-card' id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className='technology-info'>
                            <h3>{tech.name}</h3>
                            <p></p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnologiesContainer