import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class NewAccount extends React.Component {
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
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("Submit button was pressed");
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
                <label>Username</label>
                  <input
                    className="form-control"
                    type="text"
                  />
              </div>
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
export default NewAccount;
