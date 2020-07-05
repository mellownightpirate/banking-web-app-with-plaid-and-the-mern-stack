import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "50vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Connect</b> your bank details to {" "}
              <span style={{ fontFamily: "monospace" }}>OpenBank</span> safely and
              securely
            </h4>
            <p className="flow-text grey-text text-darken-1">
              The (easiest) way for users to connect their bank accounts to an app
            </p>
            <br />
            <div className="col push-s4">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col push-s4">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect waves-light hoverable white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
