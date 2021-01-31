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
                onSubmit={this.onSubmit}
              >
                <div
                  className="form-group"
                >
                  <label>Auto Purchase Price</label>
                  <input
                    className="form-control"
                    type="number"
                    value={this.state.autoPurchasePrice}
                    onChange={this.onPurchasePriceChange}
                  />
                </div>
                <br />
                <div
                  className="form-group"
                >
                  <label>Automobile Make</label>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.autoMake}
                    onChange={this.onAutoMakeChange}
                  />
                  </div>
                <br />
                <div
                  className="form-group"
                >
                  <label>Automobile Model</label>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.autoModel}
                    onChange={this.onAutoModelChange}
                  />
                </div>
                <br />
                <div
                  className="form-group"
                >
                  <label>Estimated Annual Income</label>
                  <input
                    className="form-control"
                    type="number"
                    value={this.state.estimatedIncome}
                    onChange={this.onIncomeChange}
                  />
                </div>
                <br />
                <div
                  className="form-group"
                >
                <label>Estimated Credit Score</label>
                  <input
                    className="form-control"
                    type="number"
                    value={this.state.creditScore}
                    onChange={this.onCreditChange}
                  />
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-primary"
              >
              Submit
            </button>
            </form>
      </div>

    );
  }
}
export default LandingPage;