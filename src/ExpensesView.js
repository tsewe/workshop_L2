import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Grid, Row, Col} from 'react-bootstrap';

import Header from './Header';
import './App.css';

class ExpensesView extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };
  state = {
    totalAmount: '',
    currency: '',
    mycontribution: '',
    allParticipants: '',
  }

  handleStart = () => {
    //localStorage.clear();
    this.context.router.history.push('/createsplit');
  }
  componentWillMount() {
    const creator = JSON.parse(localStorage.getItem('creator'));
    const participants = JSON.parse(localStorage.getItem('participants'));
    this.setState({ allParticipants: participants });
    console.log('data',localStorage);
    this.setState({totalAmount: creator.totalAmount, currency: creator.currency, mycontribution:creator.creatorContribution});
  }

  addUserData (userA, action, userB, amount) {
    let userData = {};
    userData.userA = userA;
    userData.action = action;
    userData.userB = userB;
    userData.amount = amount;
    return userData;
  }

  calcuateShare () {
    let result = [];

    return result;
  }
  render() {
    const share = this.calcuateShare().map((item, index) =>(
      <tr key={index}>
        <td>{item.userA}</td>
        <td>{item.action}</td>
        <td>{item.userB}</td>
        <td>{item.amount}</td>
      </tr>
    ));
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <Jumbotron>
                <h1>Overview of expenses</h1>
              </Jumbotron>
            </Col>
          </Row>
          <Row className="text-left">
            <Col xs={12} md={12}>
              <Jumbotron>
                <h2>
                The group spent a total amount of &nbsp;
                <strong>{this.state.currency}&nbsp;{this.state.allParticipants.map(item => Number(item.contribution)).reduce((prev, next) => prev + next)}</strong>
                .</h2>
                <h2>
                The cost of shopping was &nbsp;
                <strong>&nbsp;{this.state.totalAmount}</strong>
                .</h2>
                <h2>
                  The following people paid : &nbsp;
                </h2>
                <table className="table table-condensed">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.allParticipants.map(item =>(
                    <tr key={item.name}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phoneNumber}</td>
                      <td>{item.contribution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>                  
                <h2>
                  Costs should be split the following way
                </h2>
                <table className="table table-condensed">
                <thead>
                  <tr>
                    <th>User A</th>
                    <th>Action</th>
                    <th>User B</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {share}
                </tbody>
              </table>  
              </Jumbotron>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ExpensesView;
