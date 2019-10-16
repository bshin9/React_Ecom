import React from "react";
import CommentBox from "../components/Commentbox"
import axios from "axios";
import "../Contactpage.css";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  user_name: "",
  message: "",
  usernameError: "",
  emailError: "",
  firstnameError: "",
  lastnameError: "",
  messageError: ""
}

// create Contact class
class Contact extends React.Component {
// created state inside of class component to refer to the contact database
  state = initialState;

  // created update functions for each field I have
  updateFirstname = (e) => {
    this.setState({ firstname: e.target.value });
  }

  updateLastname = (e) => {
    this.setState({ lastname: e.target.value });
  }

  updateEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  updateUsername = (e) => {
    this.setState({ user_name: e.target.value });
  }

  updateMessage = (e) => {
    this.setState({ message: e.target.value });
  }

  validate = () => {
    let usernameError = "";
    let emailError = "";
    let firstnameError = "";
    let lastnameError = "";
    let messageError = "";
    
    if (!this.state.user_name) {
      usernameError = "username cannot be blank"
    }
    
    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (!this.state.firstname) {
      firstnameError = "field cannot be blank"
    }
    
    if (!this.state.lastname) {
      lastnameError = "field cannot be blank"
    }

    if (!this.state.message) {
      messageError = "needs a message"
    }

    if (emailError || usernameError || firstnameError || lastnameError || messageError) {
      this.setState({ usernameError, emailError, firstnameError, lastnameError, messageError });
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clearing the form here by calling initialState
      axios.post('http://localhost:8000/api/newcontact', {
        // payload
         firstname:this.state.firstname,
         lastname:this.state.lastname,
         email:this.state.email,
         user_name:this.state.user_name,
         message:this.state.message
      })
      .then(res => {
        console.log("Passing");
      })
      .catch(err => {
        console.log(err);
      });
      this.setState(initialState);
    }
    if (!isValid) {
      console.log('error', isValid);
    }
  };

  // createContact = () => {
  //   // Used axios to call the api endpoint and then just retrieved the data from above to create a new contact
  //   axios.post('http://localhost:8000/api/newcontact', {
  //     // payload
  //      firstname:this.state.firstname,
  //      lastname:this.state.lastname,
  //      email:this.state.email,
  //      user_name:this.state.user_name,
  //      message:this.state.message
  //   })
  //   .then(res => {
  //     console.log("Passing");
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }
  
  render() {
    return (
      <div className="Contact">
        {/* HEADER */}
        <section id="header2">
          <div className="container text-center">
            <div className="row"></div>
          </div>
        </section>
        {/* Contact */}
        <section id="contact">
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <h2>Contact Us!</h2>
                <hr width="30%" />
                <p>If you have any questions we are here for you!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 mx-auto">
                <form onSubmit={this.handleSubmit}>
                <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="user_name"
                      placeholder="Username"
                      value={this.state.user_name}
                      onChange={this.updateUsername}
                    />
                    <div style={{fontSize: 12, color: "#DD3514"}}>{this.state.usernameError}</div>
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      id="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.updateEmail}
                    />
                    <div style={{fontSize: 12, color: "#DD3514"}}>{this.state.emailError}</div>
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="firstname"
                      placeholder="First Name"
                      value={this.state.firstname}
                      onChange={this.updateFirstname}
                    />
                    <div style={{fontSize: 12, color: "#DD3514"}}>{this.state.firstnameError}</div>
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="lastname"
                      placeholder="Last Name"
                      value={this.state.lastname}
                      onChange={this.updateLastname}
                    />
                    <div style={{fontSize: 12, color: "#DD3514"}}>{this.state.lastnameError}</div>
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      className="form-control form-control-sm"
                      id="message"
                      placeholder="Comments"
                      value={this.state.message}
                      onChange={this.updateMessage}
                      rows={3}
                      defaultValue={""}
                    />
                    <div style={{fontSize: 12, color: "#DD3514"}}>{this.state.messageError}</div>
                  </fieldset>
                  <input
                    onSubmit={this.handleSubmit}
                    type="submit"
                    value="Submit"
                    className="btn btn-outline-info btn-block" id="btn"
                  />
                </form>
                <h1>See What Our Customers Are Saying!</h1>
                {/* Calling the CommentBox here to retrieve the data from it */}
                <CommentBox />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
