import React, { Component } from "react";

export default class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
      }
      return (
        <button key={index} className={`ghe ${cssGheDaDat}`}>
          {ghe.soGhe}
        </button>
      );
    });
  };

  render() {
    return (
      <div
        className="text-left mt-2 ml-2 text-light"
        style={{ fontSize: "20px" }}
      >
        {this.props.hangGhe.hang}
        {this.renderGhe()}
      </div>
    );
  }
}
