import React from "react";
import CommentBox from "../components/Commentbox";
import axios from "axios";

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
};

// create Contact class
class Contact extends React.Component {
  // created state inside of class component to refer to the contact database
  state = initialState;

  // created update functions for each field I have
  updateFirstname = e => {
    this.setState({ firstname: e.target.value });
  };

  updateLastname = e => {
    this.setState({ lastname: e.target.value });
  };

  updateEmail = e => {
    this.setState({ email: e.target.value });
  };

  updateUsername = e => {
    this.setState({ user_name: e.target.value });
  };

  updateMessage = e => {
    this.setState({ message: e.target.value });
  };

  validate = () => {
    let usernameError = "";
    let emailError = "";
    let firstnameError = "";
    let lastnameError = "";
    let messageError = "";

    if (!this.state.user_name) {
      usernameError = "username cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (!this.state.firstname) {
      firstnameError = "field cannot be blank";
    }

    if (!this.state.lastname) {
      lastnameError = "field cannot be blank";
    }

    if (!this.state.message) {
      messageError = "needs a message";
    }

    if (
      emailError ||
      usernameError ||
      firstnameError ||
      lastnameError ||
      messageError
    ) {
      this.setState({
        usernameError,
        emailError,
        firstnameError,
        lastnameError,
        messageError
      });
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
      axios
        .post("http://localhost:8000/api/newcontact", {
          // payload
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          user_name: this.state.user_name,
          message: this.state.message
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
      console.log("error", isValid);
    }
  };

  render() {
    return (
      <div className="Contactpage">
      {/* HEADER */}
      <header id="contactHeader">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto text-center">
              </div>
            </div>
          </div>
        </header>
      <section id="contact" className="py-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="card p-4">
                <h4>Get In Touch</h4>
                <p>
                  We are more than happy to assist you at your convenience! 
                </p>
                <h4>Address</h4>
                <p>36 Hillcrest St. Ontario, CA 91761</p>
                <h4>Email</h4>
                <p>propermail@hotmail.com</p>
                <h4>Phone</h4>
                <p>(310)-432-3444</p>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card p-4">
                <h3 className="text-center">
                  If you have any questions we are here for you!
                </h3>
                <hr />
                <form className="form" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <fieldset className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          id="firstname"
                          value={this.state.firstname}
                          onChange={this.updateFirstname}
                        />
                        <div style={{ fontSize: 12, color: "#FF7900" }}>
                          {this.state.firstnameError}
                        </div>
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="lastname"
                          placeholder="Last Name"
                          value={this.state.lastname}
                          onChange={this.updateLastname}
                        />
                        <div style={{ fontSize: 12, color: "#FF7900" }}>
                          {this.state.lastnameError}
                        </div>
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          id="email"
                          value={this.state.email}
                          onChange={this.updateEmail}
                        />
                        <div style={{ fontSize: 12, color: "#FF7900" }}>
                          {this.state.emailError}
                        </div>
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          id="user_name"
                          value={this.state.user_name}
                          onChange={this.updateUsername}
                        />
                        <div style={{ fontSize: 12, color: "#FF7900" }}>
                          {this.state.usernameError}
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <fieldset className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Message"
                          defaultValue={""}
                          id="message"
                          value={this.state.message}
                          onChange={this.updateMessage}
                        />
                        <div style={{ fontSize: 12, color: "#FF7900" }}>
                          {this.state.messageError}
                        </div>
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          onSubmit={this.handleSubmit}
                          type="submit"
                          value="Submit"
                          className="btn btn-outline-info btn-block"
                          id="btn"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Calling the CommentBox here to retrieve the data from it */}
            <CommentBox />
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default Contact;
