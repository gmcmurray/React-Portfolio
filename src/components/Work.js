import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const styles = {
    sectionStyles: {
      display: "flex",
      border: "solid 2px black",
      borderRadius: " 10px",
      height: "100%",
    },
    img:{
       objectPosition: "5px 5px",
        height:"90%" ,
        width: "100%",
        objectFit: "cover"
    },
    atag:{
        font:"1em",
        fontWeight:"bolder"
    }
  };
function Work(props) {
    const { name, projectImage, liveLink, repoLink } = props;

    return (
        <div style={styles.sectionStyles} href={liveLink} target="_blank" className="work-container" onClick={liveLink}>
                                <a
                        href={liveLink}
                        target='_blank'
                        className='project-name'
                        rel="noreferrer">
                        {name}
                        <img style={styles.img} src={projectImage} className="project-img" alt={name}  ></img></a>
            <div className="link-container">
                <div className="links">
                        <a style={styles.atag} href={repoLink} target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="github-icon"/>
                        </a>
                </div>
            </div>
        </div>
    );
}

export default Work;