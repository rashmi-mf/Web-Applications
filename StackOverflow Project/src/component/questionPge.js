import React from 'react';
import Moment from 'react-moment';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import UserPage from './userPage';
class QuestionPage extends React.Component {
    state = {
        votes: [],
        answer: [],
        views: [],
        bounty: [],
        bountyTitle: [],
        date: [],
        ownerName: [],
        tagVal: []
    }

    async componentDidMount() {
        const url = "https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow";
        const response = await fetch(url);
        const data = await response.json();
        let ownerName = data.items.map((val) => val.owner.display_name);
        let votes = data.items.map((val) => val.score);
        let answer = data.items.map((val) => val.answer_count);
        let views = data.items.map((val) => val.view_count);
        let bounty = data.items.map((val) => val.bounty_amount);
        let bountyTitle = data.items.map((val) => val.title);
        let tagVal = data.items.map((val) => val.tags);
        let date = data.items.map((val) => val.last_edit_date);

        this.setState({
            votes: votes,
            answer: answer,
            views: views,
            bounty: bounty, 
            bountyTitle: bountyTitle,
            tagVal: tagVal,
            date: date,
            ownerName: ownerName,
            items: data.items
        })
        console.log(data);
    }

    fetchQuestions() {
        let rows = [];
        for(let index = 0; index < this.state.items.length; index++) { 
            rows.push(
                <tr>
                <tr>
                    <td style={{width: "5%"}}>{this.state.votes[index]}</td>
                    <td style={{width: "5%"}}>{this.state.answer[index]}</td>
                    <td style={{width: "5%"}}>{this.state.views[index]}</td>
                    <td style={{width: '20px', backgroundColor: "lightGreen"}}>+{this.state.bounty[index]}</td>
                    <td style={{width: "70%", color: "#005999", float:"left"}}>{this.state.bountyTitle[index]}</td>
                </tr>
                <tr>
                    <td style={{width: "5%"}}>Votes</td>
                    <td style={{width: "5%"}}>Answer</td>
                    <td style={{width: "5%"}}>Views</td>
                    <td></td>
                    <td>
                    {this.state.tagVal[index].map(val => <td>{val}</td>)}
                    </td>
                    <td>Modifed <Moment>{this.state.date.last_activity_date}</Moment>&nbsp;&nbsp;
                        <Router>
                            <Link to="/userPage">{this.state.ownerName[index]}</Link>
                            <Switch>
                                <Route path="/:users" component={UserPage} />
                            </Switch>
                        </Router>
                    </td>
                </tr>
                <hr/>
            </tr>
            );
           
        }
        return rows;
    }



    render() {        
        return (
            <div>
                <h1 style={{textAlign:"left"}}>Top Questions [Featured]</h1>
                <table style={{width: "80%", margin: "20px"}}>
                {this.state.items ? this.fetchQuestions() : null}
                
                </table>
            </div>
        );
    }
}

export default QuestionPage;