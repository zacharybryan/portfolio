import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'

import Card from '../components/Card.js'
import MealPlanner from '../assets/images/welcomepage.png';
import Seeds from '../assets/images/seeds.png';
import EmployeeSummary from '../assets/images/Employee-Summary.jpg';
import PasswordGenerator from '../assets/images/password-gen.png'
import FitnessTracker from '../assets/images/charts.png'
import BudgetTracker from '../assets/images/budgetTracker.png'

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Meal Planner',
                    subTitle: 'Find recipes, schedule meal times, and create grocery lists',
                    imgSrc: MealPlanner,
                    imgAlt:"Photo of Home Screen",
                    link: 'https://tbsanders5.github.io/mealplanner/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Seeds',
                    subTitle: 'Elevate your mood!',
                    imgSrc: Seeds,
                    imgAlt:"Photo of Home Screen",
                    link: 'https://hidden-caverns-84141.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Employee Summary',
                    subTitle: 'Create rosters and manage your team',
                    imgSrc: EmployeeSummary,
                    imgAlt:"Photo of Home Screen",
                    link: 'https://github.com/zacharybryan/employeeSummary',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Password Generator',
                    subTitle: 'Create custom passwords',
                    imgSrc: PasswordGenerator,
                    imgAlt:"Photo of Home Screen",
                    link: 'https://github.com/zacharybryan/js-password-generator',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Fitness Tracker',
                    subTitle: 'Track your workouts',
                    imgSrc: FitnessTracker,
                    imgAlt:"Photo of Home Screen",
                    link: 'https://workout-tracker-zb.herokuapp.com/?id=5fbd5eea4fad1d00175def44',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Budget Tracker',
                    subTitle: 'This App works on and off line. Create an app shortcut on your smart phone',
                    imgSrc: BudgetTracker,
                    imgAlt:"Photo of Home Screen",
                    link: 'https://budget-trackerzb.herokuapp.com/',
                    selected: false
                },
            ]

        }
    }
// Toggle
    handleCardClick = (id, card) => {

        let items = [...this.state.items];
        // if its selected set it to false if not selected set it to true to create a toggle
        items[id].selected = items[id].selected ? false : true;

        // only one selected at one time 
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }

    // maps to items
    makeItem = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container>
                <Row className='justify-content-around'>
                    {this.makeItem(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;