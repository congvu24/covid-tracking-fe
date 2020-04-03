import React, { Component } from "react";
import { ToggleButtonGroup, Tabs, Tab } from "react-bootstrap";
import _ from "lodash";

export default class Left extends Component {
  handleChangeFocus = data => {
    this.props.actions.changeFocus(data);
  };
  render() {
    const { allCountry, overView } = this.props;
    if (overView) {
      return (
        <div className="left">
          <div className="card card--overview">
            <p className="card__title">Total Confirmed Cases</p>
            <p class="card--confirm">{overView.global.cases}</p>
            <div className="card__info">
              <div className="card__row">
                <span className="card__type card__type--red">Active cases</span>
                <span className="card__num">
                  {overView.global.cases -
                    overView.global.recovered -
                    overView.global.deaths}
                </span>
              </div>
              <div className="card__row">
                <span className="card__type card__type--green">
                  Recover cases
                </span>
                <span className="card__num">{overView.global.recovered}</span>
              </div>
              <div className="card__row">
                <span className="card__type card__type--gray">Death cases</span>
                <span className="card__num">{overView.global.deaths}</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="list">
            <ul>
              {allCountry &&
                allCountry.map(data => {
                  if (!_.isEmpty(data)) {
                    return (
                      <li
                        className="list__item"
                        onClick={() => {
                          this.handleChangeFocus(data);
                        }}
                      >
                        <span className="list__name">{data.countryName}</span>
                        <span className="list__num">{data.confirmed}</span>
                      </li>
                    );
                  }
                })}
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
