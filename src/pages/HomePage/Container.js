import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isEmpty } from "lodash";

import { name } from "./redux/reducer";
import HomePage from "./HomePage";
import * as action from "./redux/actions";
import * as actionToogle from "../../setting/actions";
import { all } from "redux-saga/effects";

class Container extends React.Component {
  componentDidMount() {
    const { actions, allCountry, overView } = this.props;
    if (isEmpty(overView)) {
      actions.getOverView();
    }
    actions.getAllData();
    actions.getNews();
  }
  render() {
    return <HomePage {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    ...state[name],
    ...state.setting
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    ...action,
    ...actionToogle
  };
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
