import React from "react";

import Left from "./Left";
import Center from "./Center";
import Right from "./Right";
import Header from "./Header";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="main" data-theme={this.props.theme == 1 ? "dark" : ""}>
        <Header {...this.props} />
        <div className="container">
          <div className="col-left">
            <Left {...this.props} />
          </div>
          <div className="col-right">
            <Center {...this.props} />
          </div>
          {/* <Col xs={12} md={3} className="stick">
              <Right {...this.props} />
            </Col> */}
        </div>
      </div>
    );
  }
}
