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
      creditScore: 0,
      errors: {
        purchasePriceError: '',
        makeError: '',
        modelError: '',
        incomeError: '',
        creditScoreError: '',
      }
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.purchasePriceValidation();
    console.log("Submit button was pressed");
  }

  onPurchasePriceChange = (e) => {
    console.log("New value", e.target.value);
    this.setState({ autoPurchasePrice: e.target.value })

  }

  onPurchasePriceBlur = (e) => {
    if (e.target.value < 1 && e.target.value.length > 0) {
    let errors = this.state.errors;
      this.setState({ errors: {...this.state.errors, purchasePriceError: "You must put in a number greater than zero" } });
      console.log("errors", errors);
    }
    else if (!e.target.value.length) {
      this.setState({ errors: {...this.state.errors, purchasePriceError: "Field cannot be blank" } });
    }
  }

  purchasePriceValidation = () => {
    if (this.state.autoPurchasePrice < 1) {
      let errors = this.state.errors;
      this.setState({ errors: {...this.state.errors, purchasePriceError: "You must put in a number greater than zero" } });

    }
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
                    onBlur={this.onPurchasePriceBlur}
                  />
                  {this.state.errors.purchasePriceError && <p className="text-danger">{this.state.errors.purchasePriceError}</p>}
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
