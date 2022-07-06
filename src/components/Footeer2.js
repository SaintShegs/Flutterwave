import React, { Component } from 'react'

export class Footeer2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LastName:"",
            FirstName:"",
            Email:"",
            Phone:"",
            Address:"",
            City:"",
            State:"",
            Country:"",
            PostalCode:"",
        };
        this.handleChange = this.handleChange.bind(this);
        this.modelClose = this.modalOpen.bind(this);
        this.modelClose= this.modelClose.bind(this);
    }

    handleChange(e) {
        const field = e.target.name;
        const value = e.target.value;
    
        this.setState({ [field]: [value] });
      }

      modalOpen(){
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    }

    modelClose(){
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }


  render() {
    
    return (
      <div>
        <div className="footer">
            <h2>Join our team of writers</h2>
            <p>On dasdas, writers earn a living doing what they love.<br/>Getting started is easy. Just pay a one time <span>$25 fee</span> and everything is ready to go.</p>

            {/* <button>Join us</button> */}

            {/* <!-- Trigger/Open The Modal --> */}

            <button onClick={this.modalOpen} id="myBtn">Join Us</button>
 
        </div>





            {/* <!-- The Modal --> */}
            <div id="myModal" className="modal">
                {/* <!-- Modal content --> */}
                <div className="modal-content">
                    <span onClick={this.modelClose} className="close">&times;</span>
                    <form method="POST" action="https://checkout.flutterwave.com/v3/hosted/pay">
                        <input type="hidden" name="public_key" value="FLWPUBK_TEST-SANDBOXDEMOKEY-X" />
                        <input type="hidden" name="customer[email]" value={this.state.Email} />
                        <input type="hidden" name="customer[name]" value={`${this.state.LastName} ${this.state.FirstName}`} />
                        <input type="hidden" name="tx_ref" value="bitethtx-019203" />
                        <input type="hidden" name="amount" value="25" />
                        <input type="hidden" name="currency" value="USD" />
                        <input type="hidden" name="meta[token]" value="54" />
                        {/* <input type="hidden" name="redirect_url" value="./Blog" /> */}

                      <div className="inputs">
                            <h3>Please fill the below to sign up</h3>
                          <div>
                              <label> Lastname:
                                  <input onChange={this.handleChange} type="text" name="LastName" />
                              </label>
                          </div>
                          <div>
                              <label> Firstname:
                                  <input onChange={this.handleChange} type="text" name="FirstName" />
                              </label>
                          </div>
                          <div>
                              <label> Email:
                                  <input onChange={this.handleChange} type='email' name="Email" />
                              </label>
                          </div>
                          <div>
                              <label> Phone:
                                  <input onChange={this.handleChange} type='number' name="Phone" />
                              </label>
                          </div>
                          <div>
                              <label> Address:
                                  <input onChange={this.handleChange} type="text" name="Address" />
                              </label>
                          </div>

                          <div>
                              <label> City:
                                  <input onChange={this.handleChange} type="text" name="City" />
                              </label>
                          </div>

                          <div>
                              <label> State:
                                  <input onChange={this.handleChange} type="text" name="State" />
                              </label>
                          </div>

                          <div>
                              <label> Country:
                                  <input onChange={this.handleChange} type="text" name="Country"/>
                              </label>
                          </div>

                          <div>
                              <label> Postal Code:
                                  <input onChange={this.handleChange} type="text" name="PostalCode"/>
                              </label>
                          </div>

                        <button type="submit" id="start-payment-button">Sign up</button>

                      </div>





                    </form>
                </div>

            </div>

      </div>
    )
  }
}

export default Footeer2