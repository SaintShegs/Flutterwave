import React from 'react'
import { useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import dasdas from '../images/Dasdas Logo 1.png'


const Footer = () => {

    const [lastName, setlastName] = useState();
    const [firstName, setfirstName] = useState();
    const [email, setemail] = useState();
    const [phone, setphone] = useState();
    const [address, setaddress] = useState();
    const [city, setcity] = useState();
    const [state, setstate] = useState();
    const [country, setcountry] = useState();
    const [postalCode,setpostalCode]=useState();

    

    function handleLastName(e){
        setlastName(e.target.value);
    }
    function handleFirstName(e){
        setfirstName(e.target.value);
    }
    function handleEmail(e){
        setemail(e.target.value);
    }
    function handlePhone(e){
        setphone(e.target.value);
    }
    function handleAddress(e){
        setaddress(e.target.value);
    }
    function handleCity(e){
        setcity(e.target.value);
    }
    function handleState(e){
        setstate(e.target.value);
    }
    function handleCountry(e){
        setcountry(e.target.value);
    }
    function handlePostalCode(e){
        setpostalCode(e.target.value);
    }
    

  

    const config = {
        public_key: 'FLWPUBK_TEST-5c785e2dc893fc106213bbfc2db2dd56-X',
        tx_ref: Date.now(),
        amount: 25,
        currency: 'USD',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: `${email}`,
          phone_number: `${phone}`,
          name: `${lastName} ${firstName}`,
        },
        customizations: {
          title: 'Dasdas',
          description: 'Payment for Dasdas membership',
          logo: `${dasdas}`,
        },
      };
    
      const handleFlutterPayment = useFlutterwave(config);






    function modalOpen(){
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
   function modelClose(){
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    function handleCommand(e) {
        if (e instanceof KeyboardEvent && e.key !== 'Enter' && e.key !== ' ') {
            return;
            }
        }
  return (
    <div>

        <div className="footer" aria-label="Footer of the page">
            <h2>Join our team of writers</h2>
            <p>On dasdas, writers earn a living doing what they love.<br/>Getting started is easy. Just pay a one time <span>$25 fee</span> and everything is ready to go.</p>


            {/* <!-- Trigger/Open The Modal --> */}
            <button role="button" onKeyDown={handleCommand} onClick={modalOpen} id="myBtn">Join Us</button>
 
        </div>


        <div id="myModal" className="modal">
                {/* <!-- Modal content --> */}
                <div className="modal-content">
                    <span onClick={modelClose} className="close">&times;</span>
                    <form>
                      

                      <div className="inputs">
                            <h3>Please fill the below to sign up</h3>
                          <div>
                              <label htmlFor="LastName"> Lastname:
                                  <input onChange={handleLastName} required aria-required="true" type="text" id='LastName' name="LastName" />
                              </label>
                          </div>
                          <div>
                              <label htmlFor="FirstName"> Firstname:
                                  <input onChange={handleFirstName} required aria-required="true" type="text" id="FirstName" name="FirstName" />
                              </label>
                          </div>
                          <div>
                              <label htmlFor="Email"> Email:
                                  <input onChange={handleEmail} required aria-required="true" type='email' id="Email" name="Email" />
                              </label>
                          </div>
                          <div>
                              <label htmlFor="Phone"> Phone:
                                  <input onChange={handlePhone} required aria-required="true" type='number' id='Phone' name="Phone" />
                              </label>
                          </div>
                          <div>
                              <label htmlFor="Address"> Address:
                                  <input onChange={handleAddress} required aria-required="true" type="text" id='Address' name="Address" />
                              </label>
                          </div>

                          <div>
                              <label htmlFor="City"> City:
                                  <input onChange={handleCity} required aria-required="true" type="text" id='City' name="City" />
                              </label>
                          </div>

                          <div>
                              <label htmlFor="State"> State:
                                  <input onChange={handleState} required aria-required="true" type="text" id='State' name="State" />
                              </label>
                          </div>

                          <div>
                              <label htmlFor="Country"> Country:
                                  <input onChange={handleCountry} required aria-required="true" type="text" id='Country' name="Country"/>
                              </label>
                          </div>

                          <div>
                              <label htmlFor="PostalCode"> Postal Code:
                                  <input onChange={handlePostalCode} required aria-required="true" type="text" id='PostalCode' name="PostalCode"/>
                              </label>
                          </div>

                        <button onKeyDown={handleCommand} role='button' type="submit" id="start-payment-button"
                             onClick={(e) => {
                                e.preventDefault()
                                handleFlutterPayment({
                                  callback: (response) => {
                                    console.log(response);
                                      setTimeout((response) => {
                                          if (response.status === 'successful') {
                                              closePaymentModal();
                                              alert('Payment successful');

                                        } else {
                                            alert(response.data.message);
                                            console.log(response);
                                        }
                                    }, 10000);
                                  },
                                  onClose: () => {},
                                });
                              }}>Sign up</button>

                      </div>





                    </form>
                </div>

            </div>
    </div>
  )
}

export default Footer