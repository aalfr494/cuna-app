import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPurchasePrice: 0,
      autoMake: "",
      autoModel: "",
      estimatedIncome: 0,
      creditScore: 0
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("Submit button was pressed");
  }

  onPurchasePriceChange = (e) => {
    console.log("New value", e.target.value);
    this.setState({ autoPurchasePrice: e.target.value })

  }

  onAutoMakeChange = (e) => {
    console.log("New value", e.target.value);
    this.setState({ autoMake: e.target.value })

  }

  onAutoModelChange = (e) => {
    console.log("New value", e.target.value);
    this.setState({ autoModel: e.target.value })

  }

  onIncomeChange = (e) => {
    console.log("New value", e.target.value);
    this.setState({ estimatedIncome: e.target.value })

  }

  onCreditChange = (e) => {
    console.log("New value", e.target.value);
    this.setState({ creditScore: e.target.value })

  }


  render() {
    return (
      <div>
        <h3>Auto Loan Landing Page</h3>
        <br />
        <br />
          <h4>Loan Application Info</h4>
            <form
              onSubmit={this.onSubmit}>
              <label>Auto Purchase Price</label>
              <input
                type="number"
                value={this.state.autoPurchasePrice}
                onChange={this.onPurchasePriceChange}
               />
              <br />
              <label>Automobile Make</label>
              <input
                type="text"
                value={this.state.autoMake}
                onChange={this.onAutoMakeChange}
               />
              <br />
              <label>Automobile Model</label>
              <input
                type="text"
                value={this.state.autoModel}
                onChange={this.onAutoModelChange}
               />
              <br />
              <label>Estimated Annual Income</label>
              <input
                type="number"
                value={this.state.estimatedIncome}
                onChange={this.onIncomeChange}
               />
              <br />
              <label>Estimated Credit Score</label>
              <input
                type="number"
                value={this.state.creditScore}
                onChange={this.onCreditChange}
               />
              <br />
              <button type="submit">Submit</button>
            </form>
      </div>

    );
  }
}
export default LandingPage;
