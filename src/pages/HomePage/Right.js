import React, { Component } from "react";
import _ from "lodash";

export default class Right extends Component {
  render() {
    const { news } = this.props;
    return (
      <div className="right">
        <div className="direction">
          <p className="title">Chú thích:</p>
          <div className="direction__row">
            <div class="marker-box">
              <div className="marker marker--big"></div>
            </div>
            <span>Số nguời nhiễm trên 100000</span>
          </div>
          <div className="direction__row">
            <div class="marker-box">
              <div className="marker marker--medium"></div>
            </div>
            <span>Số nguời nhiễm trên 10000</span>
          </div>{" "}
          <div className="direction__row">
            <div class="marker-box">
              <div className="marker marker--small"></div>
            </div>
            <span>Số nguời nhiễm trên 100</span>
          </div>
        </div>
        <div className="all-news">
          <p className="title">Tin tức:</p>
          {!_.isEmpty(news) &&
            news.map(data => (
              <div class="news">
                <img className="news__img" src={data.thumbnail} />
                <div className="news__body">
                  <p className="news__title">{data.title}</p>
                  <p className="news__content">{data.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
