import React from 'react';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Meal Planner',
                    subTitle: 'Find recipes, schedule meal times, and create grocery lists',
                    imgSrc: '../assets/images/welcomepage.png',
                    imgAlt:"Photo of Home Screen",
                    link: 'https://tbsanders5.github.io/mealplanner/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Seeds',
                    subTitle: 'Elevate your mood!',
                    imgSrc: '../assets/images/seeds.png',
                    imgAlt:"Photo of Home Screen",
                    link: 'https://hidden-caverns-84141.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Employee Summary',
                    subTitle: 'Create rosters and manage your team',
                    imgSrc: '../assets/images/Employee-Summary.jpg',
                    imgAlt:"Photo of Home Screen",
                    link: 'https://github.com/zacharybryan/employeeSummary',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Password Generator',
                    subTitle: 'Create custom passwords',
                    imgSrc: '../assets/images/password-gen.png',
                    imgAlt:"Photo of Home Screen",
                    link: 'https://github.com/zacharybryan/js-password-generator',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Fitness Tracker',
                    subTitle: 'Track your workouts',
                    imgSrc: '../assets/images/charts.png',
                    imgAlt:"Photo of Home Screen",
                    link: 'https://workout-tracker-zb.herokuapp.com/?id=5fbd5eea4fad1d00175def44',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Budget Tracker',
                    subTitle: 'This App works on and off line. Create an app shortcut on your smart phone',
                    imgSrc: '../assets/images/budgetTracker.png',
                    imgAlt:"Photo of Home Screen",
                    link: 'https://budget-trackerzb.herokuapp.com/',
                    selected: false
                }
            ]

        }
    }
    render() {
        return(
            <p>works</p>
        );
    }
}

export default Carousel;