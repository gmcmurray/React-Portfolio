import React from 'react';
import Work from './Work';
import mealPlan from '../assets/images/mealplan.jpg';
import mtBike from '../assets/images/mtbike.jpg';
import clouds from '../assets/images/clouds.jpg';
import techBlog from '../assets/images/techblog.jpg';
import codingQuiz from '../assets/images/shakespeare.jpg';

const styles = {
    sectionStyles: {
      display: "flex",
      maxWidth:" 800px"
    },
  };
 
function Portfolio(props) {
    return (
        <div   style={styles.display, styles.maxWidth}  className='portfolio-container'>
            <Work 
                name='Bike Trails'
                repoLink='https://github.com/aaroncenteno/wanderpro'
                liveLink='http://wanderpro.herokuapp.com/'
                projectImage={mtBike}
                className='work-item'
            />
            <Work 
                name='Meal Plan'
                repoLink='https://github.com/xuannga/Meal-Planner'
                liveLink='https://meal-planner-5.herokuapp.com/'
                projectImage={mealPlan}
                className='work-item'
            />
            <Work 
                name='Weather Report'
                repoLink='https://github.com/gmcmurray/WeatherReport'
                liveLink='https://gmcmurray.github.io/WeatherReport/'
                projectImage={clouds}
                className='work-item'
            />
            <Work 
                name='Tech Blog'
                repoLink='https://github.com/gmcmurray/TechBlog'
                liveLink='https://techblog-gmcmurray.herokuapp.com/'
                projectImage={techBlog}
                className='work-item'
            />
            <Work 
                name='Code Quiz'
                repoLink='https://github.com/gmcmurray/Code-Quiz'
                liveLink=' https://gmcmurray.github.io/Code-Quiz/'
                projectImage={codingQuiz}
                className='work-item'
            />
        </div>
    )
}

export default Portfolio;
