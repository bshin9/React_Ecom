import React from "react";
import axios from "axios";

// the point of this GetContact component is so that we don't have to hard code the comments section
class EditComment extends React.Component {
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
    let message = "hello";
    let contact_id = 10;
    fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: message, contact_id: contact_id })
    })
      .then(data => {
        console.log("Passing");
      })
      .catch(error => {
        console.log("BAD", error);
      });
  };

  deleteContact = () => {
    const { contact_id } = this.props;
    // Used axios to call the api endpoint and then just retrieved the data from above to create a new contact
    axios
      .delete("http://localhost:8000/api/deletecontact", {
        data: { contact_id: contact_id }
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
      // <section id="faq" className="p-5 bg-dark text-white">
      //     <div className="row">
      //       <div className="col-md-12">
      //         <div id="accordion">
      //           <div className="card">
      //             <div className="card-header">
      //               <h5 className="mb-0">
      //                 <a
      //                   href="#collapseOne"
      //                   data-toggle="collapse"
      //                   data-parent="accordion"
      //                 >
      //                   {this.props.user_name}
      //                 </a>
      //               </h5>
      //             </div>
      //             <div id="collapseOne" className="collapse">
      //               <div className="card-body">{this.props.message}</div>
      //               <button className="commentBtn" onClick={this.deleteContact}>
      //                 Delete
      //               </button>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="commentSection">
      //   <h2 className="userName">{this.props.user_name}</h2>
      //   <p className="commentMessage">{this.props.message}</p>
      //   <button className="commentBtn" onClick={this.updateMessage}>
      //     Edit
      //   </button>
      //   <button className="commentBtn" onClick={this.deleteContact}>
      //     Delete
      //   </button>
      // </div>
      // </section>
      <div className ="album py-5 bg-dark">

      <div className="container-fluid">
        <div className="row">
      

          <div className="col-md-12">
            <div className="card card-white post">
              <div className="post-heading">
                <div className="float-left image">
                  <img
                    src="http://bootdey.com/img/Content/user_1.jpg"
                    className="img-circle avatar"
                    alt="user"
                  />
                </div>
                <div className="float-left meta">
                  <div className="title h5">
                    <h4>{this.props.user_name}</h4>
                  </div>
                </div>
              </div>
              <div className="post-description">
                <p>{this.props.message}</p>
                <button className="commentBtn" onClick={this.updateMessage}>
                  Edit
                </button>
                <button className="commentBtn" onClick={this.deleteContact}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default EditComment;
