import React, { Component } from "react";
import { connect } from "react-redux";

 class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
       //Trạng thái ghế đã bị đặt
       let disabled = false;
      let cssGheDaDat = "";
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true
      }
      //Trạng thái ghế đang đặt
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
      if (indexGheDangDat !== -1){
        cssGheDangDat="gheDangChon";
        
      }

      return (
        <button key={index} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} onClick={()=>{
          this.props.datGhe(ghe)
        }} >
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

const mapStateToProps = state => {
  return {
    danhSachGheDangDat:state.bookingTicketReducer.danhSachGheDangDat
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    datGhe:(ghe) => {
      dispatch({
        type:'DAT_GHE',
        ghe
      })
    }
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(HangGhe);
