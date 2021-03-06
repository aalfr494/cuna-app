import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPurchasePrice: 0,
      autoMake: "",
      autoModel: "",
      estimatedIncome: 0,
      creditScore: 0,
      purchasePriceError: '',
      makeError: '',
      modelError: '',
      incomeError: '',
      creditScoreError: '',
      isQualified: true
    };
  }



  onSubmit = (e) => {
    e.preventDefault();
    this.purchasePriceValidation();
    this.autoMakeValidation();
    this.autoModelValidation();
    this.incomeValidation();
    this.creditValidation();
    this.validateAbilityToPay();
    console.log("Submit button was pressed");


    if (!this.state.purchasePriceError && !this.state.makeError && !this.state.modelError && !this.state.incomeError && !this.state.creditScoreError && this.state.isQualified) {
      //this.setState({ isQualified: true });
      console.log("You are qualified", this.state.isQualified);
      console.log("credit score is", this.state.creditScore);
      console.log("history", this.props.history);
      this.props.history.push('/newaccount');
    }
    else  {
      this.props.history.push('/disqualified');
    }
  }

  onPurchasePriceChange = (e) => {
    console.log("New value", e.target.value);
    this.setState({ autoPurchasePrice: e.target.value })

  }

  onPurchasePriceBlur = (e) => {
    if (e.target.value < 1 && e.target.value.length > 0) {
      this.setState({ purchasePriceError: "You must put in a number greater than zero"  });
    }
    else if (!e.target.value.length) {
      this.setState({ purchasePriceError: "Field cannot be blank" });
    }

    else {
      this.setState({ purchasePriceError: "" });
    }
  }

  purchasePriceValidation = () => {
    if (this.state.autoPurchasePrice < 1) {
      this.setState({ purchasePriceError: "You must put in a purchase price greater than zero" });

    }
  }

  onAutoMakeChange = (e) => {
    console.log("New value", e.target.value);
    this.setState({ autoMake: e.target.value })

  }

  onAutoMakeBlur = (e) => {
    if (e.target.value.trim() === '') {
      this.setState({ makeError: "Field cannot be blank" });
    }
    else {
      this.setState({ makeError: "" });
    }
  }

  autoMakeValidation = () => {
    if (this.state.autoMake === '') {
      this.setState({ makeError: "Field cannot be blank" });
    }
  }

  onAutoModelChange = (e) => {
    console.log("New value", e.target.value);
    this.setState({ autoModel: e.target.value })

  }

  onAutoModelBlur = (e) => {
    if (e.target.value.trim() === '') {
      this.setState({ modelError: "Field cannot be blank" });
    }
    else {
      this.setState({ modelError: "" });
    }
  }

  autoModelValidation = () => {
    if (this.state.autoModel === '') {
      this.setState({ modelError: "Field cannot be blank" });
    }
  }

  onIncomeChange = (e) => {
    console.log("New value", e.target.value);
    this.setState({ estimatedIncome: e.target.value })

  }

  onIncomeBlur = (e) => {
    if (e.target.value < 1 && e.target.value.length > 0) {
      this.setState({ incomeError: "You must put in a number greater than zero"  });
    }
    else if (!e.target.value.length) {
      this.setState({ incomeError: "Field cannot be blank" });
    }
    else {
      this.setState({ incomeError: "" });
    }
  }

  incomeValidation = () => {
    if (this.state.estimatedIncome < 1) {
      this.setState({ incomeError: "You must put in an income greater than zero" });
      console.log("purchase price error");
    }
  }

  onCreditChange = (e) => {
    console.log("New value", e.target.value);
    this.setState({ creditScore: e.target.value })

  }

  onCreditBlur = (e) => {
    if (e.target.value < 1 && e.target.value.length > 0) {
      this.setState({ creditScoreError: "You must put in a number greater than zero"  });
    }
    else if (!e.target.value.length) {
      this.setState({ creditScoreError: "Field cannot be blank" });
    }
    else {
      this.setState({ creditScoreError: "" });
    }
  }

  creditValidation = () => {
    if (this.state.creditScore < 300 || this.state.creditScore > 850) {
      this.setState({ creditScoreError: "Credit score must be between 300 and 850" });
      console.log("purchase price error");
    }

    else if (this.state.creditScore < 600) {
      this.setState({ isQualified: this.state.isQualified = !this.state.isQualified });

      //without the above very specific syntax boolean value doesnt update
      console.log("low credit score here", this.state.isQualified);
    }
  }

  validateAbilityToPay = () => {
    const moneyComingIn = this.state.estimatedIncome;
    const vehicleCost = this.state.autoPurchasePrice;
    const fifthOfIncome = (moneyComingIn * .2);
    if (vehicleCost > fifthOfIncome ) {
      console.log("your car is more than a fifth of your income");
      this.setState({ isQualified: this.state.isQualified = !this.state.isQualified });
    }

    else {
      console.log("You have a reasonable car loan");
    }
  }




  render() {
    return (
      <div>
        <h3>Auto Loan Landing Page</h3>
        <br />
        <br />
          <h4>Loan Application Info</h4>
          <h5>Marketing Copy</h5>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tempus orci. Sed enim arcu, ultrices sed eleifend euismod, aliquam eu nulla. Donec non odio vel tellus hendrerit pretium vitae ac metus. Quisque consectetur, tellus non rhoncus vulputate, diam est gravida purus, id dignissim ligula sem sit amet nisi. Mauris at dui quis mi feugiat porttitor et in urna. Duis posuere hendrerit sem, in cursus tellus elementum ac. Nam eget posuere libero, sodales accumsan magna. Morbi   aliquet tortor quis velit rutrum rutrum. Praesent feugiat ante nulla, a feugiat eros auctor quis. Nunc consequat leo quis congue fermentum. Nam euismod aliquet tristique.
            </p>
            <p>
            Nulla euismod lacus nec mauris vehicula pharetra. Praesent ut cursus nisl, quis ultrices felis. Morbi fringilla neque est, eu consequat nibh laoreet hendrerit. Curabitur pellentesque lorem vehicula metus porttitor venenatis. Sed hendrerit pulvinar sodales. Proin nec diam pellentesque, bibendum diam nec, dictum urna. Mauris nec ipsum lacus. Donec a tincidunt nisi. Fusce mollis odio eget pellentesque vehicula. Donec ac ante sapien.
            </p>
          </div>
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
                  {this.state.purchasePriceError && <p className="text-danger">{this.state.purchasePriceError}</p>}
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
                    onBlur={this.onAutoMakeBlur}
                  />
                  {this.state.makeError && <p className="text-danger">{this.state.makeError}</p>}
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
                    onBlur={this.onAutoModelBlur}
                  />
                  {this.state.modelError && <p className="text-danger">{this.state.modelError}</p>}
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
                    onBlur={this.onIncomeBlur}
                  />
                  {this.state.incomeError && <p className="text-danger">{this.state.incomeError}</p>}
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
                    onBlur={this.onCreditBlur}
                  />
                  {this.state.creditScoreError && <p className="text-danger">{this.state.creditScoreError}</p>}
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
export default withRouter (LandingPage);
