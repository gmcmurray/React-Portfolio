import React from 'react';
import Work from './Work';
import mealPlan from '../assets/images/mealplan.jpg';
import mtBike from '../assets/images/mtbike.jpg';
import clouds from '../assets/images/clouds.jpg';
import techBlog from '../assets/images/techblog.jpg';
import codingQuiz from '../assets/images/shakespeare.jpg';
import dailyplanner from '../assets/images/dailyplanner.jpg'

const styles = {
    sectionStyles: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 48%)",
      gridGap:'5px',
      placeItems:"top",
      gridAutoRows: "150px",
     },
    boxone:{
        gridColumnStart:"1",
        gridRowStart:"1",
        gridRowEnd:"span 2",
        justifySelf:"center",
        alignSelf: "stretch",
        margin: "1%",
        maxHeight: "295px",
        maxWidth:"300px"
    },
    boxtwo:{
        gridColumnStart:"1",
        gridRowStart:"3",
        gridRowEnd:"span 2",
        justifySelf:"center",
        alignSelf: "stretch",
        margin: "1%",
        maxHeight: "295px",
        maxWidth:"300px"
    },
    boxthree:{
        gridColumnStart:"1",
        gridRowStart:"5",
        gridRowEnd:"span 2",
        justifySelf:"center",
        alignSelf: "stretch",
        margin: "1%",
        maxHeight: "295px",
        maxWidth:"300px"
    },
    boxfour:{
        gridColumnStart:"2",
        gridRowStart:"1",
        gridRowEnd:"span 2",
        justifySelf:"center",
        alignSelf: "stretch",
        margin: "1%",
        maxHeight: "445px"
    },
    boxfive:{
        gridColumnStart:"2",
        gridRowStart:"3",
        gridRowEnd:"span 2",
        justifySelf:"center",
        alignSelf: "stretch",
        margin: "1%",
        maxHeight: "445px"
    },
    boxsix:{
        gridColumnStart:"2",
        gridRowStart:"5",
        gridRowEnd:"span 2",
        justifySelf:"center",
        alignSelf: "stretch",
        margin: "1%",
        maxHeight: "445px"
    }
  };
 
function Portfolio(props) {
    return (
        <div   style={styles.sectionStyles}  className='portfolio-container'>
           <div style={styles.boxone} >
                <Work 
                    name='Bike Trails'
                    repoLink='https://github.com/DN-Vanguard/BikeTrails'
                    liveLink='https://dn-vanguard.github.io/BikeTrails/'
                    projectImage={mtBike}
                    className='work-item'
                />
            </div>
            <div style={styles.boxfour} >
                <Work 
                    name='Meal Plan'
                    repoLink='https://github.com/xuannga/Meal-Planner'
                    liveLink='https://meal-planner-5.herokuapp.com/'
                    projectImage={mealPlan}
                    className='work-item'
                />
            </div>
            <div style={styles.boxtwo} >
                <Work 
                    name='Weather Report'
                    repoLink='https://github.com/gmcmurray/WeatherReport'
                    liveLink='https://gmcmurray.github.io/WeatherReport/'
                    projectImage={clouds}
                    className='work-item'
                />
            </div>
            <div style={styles.boxfive} >
                <Work 
                    name='Tech Blog'
                    repoLink='https://github.com/gmcmurray/TechBlog'
                    liveLink='https://techblog-gmcmurray.herokuapp.com/'
                    projectImage={techBlog}
                    className='work-item'
                />
            </div>
            <div style={styles.boxthree} >
                <Work 
                    name='Code Quiz'
                    repoLink='https://github.com/gmcmurray/Code-Quiz'
                    liveLink=' https://gmcmurray.github.io/Code-Quiz/'
                    projectImage={codingQuiz}
                    className='work-item'
                />
            </div>
            <div style={styles.boxsix} >
                <Work 
                    name='Day Scheduler'
                    repoLink='https://github.com/gmcmurray/DayScheduler'
                    liveLink=' https://gmcmurray.github.io/DayScheduler/'
                    projectImage={dailyplanner}
                    className='work-item'
                />
            </div>
        </div>
    )
}

export default Portfolio;
