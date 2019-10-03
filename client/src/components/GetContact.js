import React from "react";
import axios from "axios";

// the point of this GetContact component is so that we don't have to hard code the comments section
class GetContact extends React.Component {

  state = {
    firstname: "",
    lastname: "",
    email: "",
    user_name: "",
    message: "",
    contact_id: "",
    old_message: ""
  };

  updateMessage = () => {
    const url = "http://localhost:8000/api/updatecontact";
      let message = 'hello';
      let contact_id = 10;
      fetch(url,
        {
          method: "POST",
          mode: 'no-cors',
          headers:{
                  'Accept':'application/json',
                  'Content-Type': 'application/json'
                },
                body:JSON.stringify({message: message, contact_id: contact_id})
        }) 
        .then((data) => {
          console.log("Passing");
        })
      .catch((error) => {
        console.log('BAD', error)
      });
  };

  deleteContact = () => {
    const { contact_id } = this.props;
    const url = "http://localhost:8000/api/deletecontact/";
    // fetch(url).catch(error => console.log('BAD', error)).then(response => console.log('GOOD', response));
    // Used axios to call the api endpoint and then just retrieved the data from above to create a new contact
    axios
      .delete("http://localhost:8000/api/deletecontact", { data:
        {contact_id: contact_id}
      })
      .then(res => {
        console.log("Passing");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="commentSection">
        <h2 className="userName">{this.props.user_name}</h2>
        <p className="commentMessage">{this.props.message}</p>
        <button className="commentBtn" onClick={this.updateMessage}>Edit</button>
        <button className="commentBtn" onClick={this.deleteContact}>Delete</button>
      </div>
    );
  }
}

export default GetContact;
