import React from 'react'

const Footer = () => {
    

    // function makePayment() {
    //     FlutterwaveCheckout({
    //       public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
    //       tx_ref: "titanic-48981487343MDI0NzMx",
    //       amount: 25,
    //       currency: "USD",
    //       payment_options: "card, mobilemoneyghana, ussd",
    //       redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
    //       meta: {
    //         consumer_id: 23,
    //         consumer_mac: "92a3-912ba-1192a",
    //       },
    //       customer: {
    //         email: "rose@unsinkableship.com",
    //         phone_number: "08102909304",
    //         name: "Rose DeWitt Bukater",
    //       },
    //       customizations: {
    //         title: "The Titanic Store",
    //         description: "Payment for an awesome cruise",
    //         logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
    //       },
    //     });
    //   }


    function modalOpen(){
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    }

    function modelClose(){
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }



  return (
    <div>
        <div className="footer">
            <h2>Join our team of writers</h2>
            <p>On dasdas, writers earn a living doing what they love.<br/>Getting started is easy. Just pay a one time <span>$25 fee</span> and everything is ready to go.</p>

            {/* <button>Join us</button> */}

            {/* <!-- Trigger/Open The Modal --> */}

            <button onClick={modalOpen} id="myBtn">Join Us</button>
 
        </div>





            {/* <!-- The Modal --> */}
            <div id="myModal" className="modal">
                {/* <!-- Modal content --> */}
                <div className="modal-content">
                    <span onClick={modelClose} className="close">&times;</span>
                    <form method="POST" action="https://checkout.flutterwave.com/v3/hosted/pay">
                        <input type="hidden" name="public_key" value="FLWPUBK_TEST-SANDBOXDEMOKEY-X" />
                        <input type="hidden" name="customer[email]" value="aaretobi@gmail.com" />
                        <input type="hidden" name="customer[name]" value="Aare Oluwatobi" />
                        <input type="hidden" name="tx_ref" value="bitethtx-019203" />
                        <input type="hidden" name="amount" value="25" />
                        <input type="hidden" name="currency" value="USD" />
                        <input type="hidden" name="meta[token]" value="54" />
                        {/* <input type="hidden" name="redirect_url" value="./Blog" /> */}

                      <div className="inputs">
                            <h3>Please fill the below to sign up</h3>
                          <div>
                              <label> Lastname:
                                  <input type="text" name="LastName" />
                              </label>
                          </div>
                          <div>
                              <label> Firstname:
                                  <input type="text" name="FirstName" />
                              </label>
                          </div>
                          <div>
                              <label> Email:
                                  <input type='email' name="Email" />
                              </label>
                          </div>
                          <div>
                              <label> Phone:
                                  <input type='number' name="Phone" />
                              </label>
                          </div>
                          <div>
                              <label> Address:
                                  <input type="text" name="Address" />
                              </label>
                          </div>

                          <div>
                              <label> City:
                                  <input type="text" name="City" />
                              </label>
                          </div>

                          <div>
                              <label> State:
                                  <input type="text" name="State" />
                              </label>
                          </div>

                          <div>
                              <label> Country:
                                  <input type="text" name="Country"/>
                              </label>
                          </div>

                          <div>
                              <label> Postal Code:
                                  <input type="text" name="PostalCode"/>
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

export default Footer