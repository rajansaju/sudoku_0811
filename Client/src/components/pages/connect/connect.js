/** @format */

import React, { Component } from "react";
import history from "../../../config/history";
import Header from "../../common/header";

class Contact extends Component {
   constructor(props) {
      super(props);
      this.state = {
         formValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: ""
         }
      };
   }

   handleSubmit = () => {
      const { formValues } = this.state;
      console.log("formValues ---> ", formValues);
   };

   render() {
      const { formValues } = this.state;
      return (
         <>
            <div className="basic-bg">
               <div className="form-main">
                  <div className="contact-form">
                     <form>
                        <h1 className="contact-label">Connect Wallet</h1>
                        <div class="row">
                           <div class="col">
                              <div class="form-group">
                                 <label for="exampleInputEmail1">
                                    First Name
                                 </label>
                                 <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter First Name"
                                    value={formValues.firstName}
                                    onChange={e =>
                                       this.setState({
                                          formValues: {
                                             ...formValues,
                                             firstName: e.target.value
                                          }
                                       })
                                    }
                                 />
                              </div>
                           </div>
                           <div class="col">
                              <div class="form-group">
                                 <label for="exampleInputEmail1">
                                    Last Name
                                 </label>
                                 <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter Last Name"
                                    value={formValues.lastName}
                                    onChange={e =>
                                       this.setState({
                                          formValues: {
                                             ...formValues,
                                             lastName: e.target.value
                                          }
                                       })
                                    }
                                 />
                              </div>
                           </div>
                        </div>

                        <div class="form-group">
                           <label for="exampleInputEmail1">Email address</label>
                           <input
                              type="email"
                              class="form-control"
                              placeholder="Enter email"
                              value={formValues.email}
                              onChange={e =>
                                 this.setState({
                                    formValues: {
                                       ...formValues,
                                       email: e.target.value
                                    }
                                 })
                              }
                           />
                        </div>
                        <div className="text-center">
                           <label>OR</label>
                        </div>
                        <div class="form-group">
                           <label for="exampleInputEmail1">Phone Number</label>
                           <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Phone Number"
                              value={formValues.phoneNumber}
                              onChange={evt =>
                                 this.setState({
                                    formValues: {
                                       ...formValues,
                                       phoneNumber: evt.target.value
                                    }
                                 })
                              }
                           />
                        </div>
                        <button
                           type="button"
                           class="btn btn-primary contact-submit"
                           onClick={() => this.handleSubmit()}
                        >
                           Submit
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </>
      );
   }
}
export default Contact;
