import React, { Component, useState } from "react";
import { Tooltip, OverlayTrigger, Button } from "react-bootstrap";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import _ from "lodash";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibHVmZnkzcXZpZXRuYW0iLCJhIjoiY2s4aWpjenA1MDZwdjNmcGx1NmtuOWFxcCJ9.GptIQDqja_y5E83YNUT_vg";

export default class Center extends Component {
  // state = {
  //   viewport: {
  //     width: "100%",
  //     height: 800,
  //     latitude: 10.944297,
  //     longitude: 107.391024,
  //     zoom: 3
  //   }
  // };
  setViewport = (viewport) => {
    this.setState({
      ...this.state,
      viewport: {
        ...this.state.viewport,
        long: viewport.longitude,
        lat: viewport.lat,
      },
    });
  };
  // componentDidMount() {
  //   console.log("load");
  //   const { activeFocus, showActive } = this.props;
  //   if (showActive) {
  //     this.setState({
  //       ...this.state,
  //       viewport: {
  //         ...this.state.viewport,
  //         longitude: parseFloat(activeFocus.long),
  //         latitude: parseFloat(activeFocus.lat)
  //       }
  //     });
  //   }
  // }
  handleCloseActive = () => {
    this.props.actions.closeActive();
  };
  render() {
    const { allCountry, activeFocus, showActive, theme } = this.props;
    if (allCountry) {
      return (
        <div className="center">
          <Map allCountry={allCountry} showActive={showActive} theme={theme} />
          {showActive && (
            <div className="card card__item">
              <span className="close-btn" onClick={this.handleCloseActive}>
                X
              </span>
              <p className="card__title">{activeFocus.countryName}</p>
              <p class="card--confirm">{activeFocus.confirmed}</p>
              <div className="card__info">
                <Status
                  confirmed={activeFocus.confirmed}
                  deaths={activeFocus.deaths}
                  recovered={activeFocus.recovered}
                />
                <div className="card__row">
                  <span className="card__type card__type--red">
                    Active cases
                  </span>
                  <span className="card__num">
                    {activeFocus.confirmed -
                      activeFocus.recovered -
                      activeFocus.deaths}
                  </span>
                </div>
                <div className="card__row">
                  <span className="card__type card__type--green">
                    Recover cases
                  </span>
                  <span className="card__num">{activeFocus.recovered}</span>
                </div>
                <div className="card__row">
                  <span className="card__type card__type--gray">
                    Death cases
                  </span>
                  <span className="card__num">{activeFocus.deaths}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    } else return null;
  }
}

function Map({ allCountry, theme }) {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 850,
    latitude: 10.944297,
    longitude: 107.391024,
    zoom: 3,
  });
  const [showPopup, setShowPopup] = useState(false);
  const [position, setPosition] = useState({
    longitude: 0,
    latitude: 0,
  });
  const [dataPopup, setDataPopup] = useState({
    country: "",
    confirmed: "",
    deaths: "",
    recovered: "",
  });
  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapStyle={
        theme
          ? "mapbox://styles/mapbox/dark-v9"
          : "mapbox://styles/mapbox/light-v10"
      }
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      {allCountry &&
        allCountry.map((data) => {
          if (!_.isEmpty(data)) {
            return (
              <Marker
                latitude={parseFloat(data.lat)}
                longitude={parseFloat(data.long)}
              >
                <div
                  className={`marker ${
                    parseInt(data.confirmed) < 999
                      ? "marker--small"
                      : parseInt(data.confirmed) < 9999
                      ? "marker--medium"
                      : "marker--big"
                  }`}
                  onMouseOut={() => {
                    setShowPopup(false);
                  }}
                  onMouseOver={() => {
                    setPosition({
                      latitude: parseFloat(data.lat),
                      longitude: parseFloat(data.long),
                    });
                    setDataPopup({
                      country: data.countryName,
                      confirmed: data.confirmed,
                      deaths: data.deaths ? data.deaths : 0,
                      recovered: data.recovered,
                    });
                    setShowPopup(!showPopup);
                  }}
                >
                  {/* <div className="marker__modal">
                    <p>{data.countryName}</p>
                    <p>Số ca nhiễm: {data.confirmed}</p>
                    <p>Hồi phục: {data.recovered}</p>
                    <p>Tử vong: {data.deaths}</p>
                  </div> */}
                </div>
              </Marker>
            );
          }
        })}
      {showPopup && (
        <Popup
          latitude={position.latitude}
          longitude={position.longitude}
          closeButton={false}
          closeOnClick={false}
          onClose={() => setShowPopup(false)}
          anchor="bottom"
        >
          <div className="marker__modal">
            <p className="modal__country">{dataPopup.country}</p>
            <hr />
            <p>Số ca nhiễm: {dataPopup.confirmed}</p>
            <p>Hồi phục: {dataPopup.recovered}</p>
            <p>Tử vong: {dataPopup.deaths}</p>
          </div>
        </Popup>
      )}
    </ReactMapGL>
  );
}
function Status({ confirmed, recovered, deaths }) {
  let percentActive = parseInt(
    ((confirmed - recovered - deaths) / confirmed) * 100
  );
  let percentRecovered = parseInt((recovered / confirmed) * 100);
  let percentDeath = parseInt((deaths / confirmed) * 100);

  return (
    <div className="all-line">
      <div
        className="line--red"
        style={{
          width: percentActive + "%",
        }}
      ></div>
      <div
        className="line--green"
        style={{
          width: percentRecovered + "%",
        }}
      ></div>
      <div
        className="line--gray"
        style={{
          width: percentDeath + "%",
        }}
      ></div>
    </div>
  );
}
