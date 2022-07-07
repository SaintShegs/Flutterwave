import React, { Component } from 'react'
import {Helmet} from "react-helmet";




export class Footer extends Component {
  /**
   * The constructor function is used to initialize the state of the component.
   * @param props - The props passed to the component.
   */
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
        this.modalOpen = this.modalOpen.bind(this);
        this.modelClose= this.modelClose.bind(this);
        this.handleCommand = this.handleCommand.bind(this);
    }

   /**
    * When the user types in the input field, the value of the input field is set to the state of the
    * component.
    * @param e - the event object
    */
    handleChange(e) {
        const field = e.target.name;
        const value = e.target.value;
        this.setState({ [field]: [value] });
      }



  /* A function that opens and closes the modal. */
    modalOpen(){
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
    modelClose(){
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }



   /**
    * If the event is a keyboard event and the key is not Enter or Space, then return.
    * @param event - The event that triggered the command.
    * @returns the value of the function.
    */
    handleCommand(event) {
    if (event instanceof KeyboardEvent && event.key !== 'Enter' && event.key !== ' ') {
        return;
        }
    }
    


  render() {
    return (
        
      <div>
        <div className="footer" aria-label="Footer of the page">
            <h2>Join our team of writers</h2>
            <p>On dasdas, writers earn a living doing what they love.<br/>Getting started is easy. Just pay a one time <span>$25 fee</span> and everything is ready to go.</p>


            {/* <!-- Trigger/Open The Modal --> */}
            <button role="button" onKeyDown={this.handleCommand} onClick={this.modalOpen} id="myBtn">Join Us</button>
 
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
                        <input type="hidden" name="redirect_url" value="https://blog-flutter.netlify.app/" />

                      <div className="inputs">
                            <h3>Please fill the below to sign up</h3>
                          <div>
                              <label htmlFor="LastName"> Lastname:
                                  <input onChange={this.handleChange} required aria-required="true" type="text" id='LastName' name="LastName" />
                              </label>
                          </div>
                          <div>
                              <label htmlFor="FirstName"> Firstname:
                                  <input onChange={this.handleChange} required aria-required="true" type="text" id="FirstName" name="FirstName" />
                              </label>
                          </div>
                          <div>
                              <label htmlFor="Email"> Email:
                                  <input onChange={this.handleChange} required aria-required="true" type='email' id="Email" name="Email" />
                              </label>
                          </div>
                          <div>
                              <label htmlFor="Phone"> Phone:
                                  <input onChange={this.handleChange} required aria-required="true" type='number' id='Phone' name="Phone" />
                              </label>
                          </div>
                          <div>
                              <label htmlFor="Address"> Address:
                                  <input onChange={this.handleChange} required aria-required="true" type="text" id='Address' name="Address" />
                              </label>
                          </div>

                          <div>
                              <label htmlFor="City"> City:
                                  <input onChange={this.handleChange} required aria-required="true" type="text" id='City' name="City" />
                              </label>
                          </div>

                          <div>
                              <label htmlFor="State"> State:
                                  <input onChange={this.handleChange} required aria-required="true" type="text" id='State' name="State" />
                              </label>
                          </div>

                          <div>
                              <label htmlFor="Country"> Country:
                                  <input onChange={this.handleChange} required aria-required="true" type="text" id='Country' name="Country"/>
                              </label>
                          </div>

                          <div>
                              <label htmlFor="PostalCode"> Postal Code:
                                  <input onChange={this.handleChange} required aria-required="true" type="text" id='PostalCode' name="PostalCode"/>
                              </label>
                          </div>

                        <button role='button' type="submit" id="start-payment-button">Sign up</button>

                      </div>





                    </form>
                </div>

            </div>

      </div>
    )
  }
}

export default Footer