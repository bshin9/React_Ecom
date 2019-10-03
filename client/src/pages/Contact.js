import React from "react";
import CommentBox from "../components/Commentbox"
import axios from "axios";
import "../Contactpage.css";

// create Contact class
class Contact extends React.Component {
// created state inside of class component to refer to the contact database
  state = {
    firstname: "",
    lastname: "",
    email: "",
    user_name: "",
    message: ""
  }
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

  createContact = () => {
    // const url = "http://localhost:8000/api/newcontact/";
    // fetch(url).catch(error => console.log('BAD', error)).then(response => console.log('GOOD', response));
    // Used axios to call the api endpoint and then just retrieved the data from above to create a new contact
    axios.post('http://localhost:8000/api/newcontact', {
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
    });;
  }
  
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
                <form id="name_form" onSubmit={this.refreshPage}>
                <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="user_name"
                      placeholder="Username"
                      onChange={this.updateUsername}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      id="email"
                      placeholder="Email"
                      onChange={this.updateEmail}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="firstname"
                      placeholder="First Name"
                      onChange={this.updateFirstname}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="lastname"
                      placeholder="Last Name"
                      onChange={this.updateLastname}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      className="form-control form-control-sm"
                      id="message"
                      placeholder="Comments"
                      onChange={this.updateMessage}
                      rows={3}
                      defaultValue={""}
                    />
                  </fieldset>
                  <button
                    onClick={this.createContact}
                    type="button"
                    className="btn btn-outline-info btn-block" id="btn">
                    Submit
                  </button>
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
