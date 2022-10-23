import React, { Component } from "react";
import "../../assets/css/BaiTapBookingTicket.css";
import ThongTinGhe from "./ThongTinGhe";
import DanhSachGheData from "../../assets/danhSachGhe.json"
import HangGhe from "./HangGhe";


export default class BookingTicket extends Component {


  renderHangGhe = () =>{
    return DanhSachGheData.map((hangGhe,index)=>{
      return <div key={index}>
        <HangGhe hangGhe={hangGhe}/>

      </div>
    })

  }


  render() {
    return (
      <div
        className="bookingMovie "
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url(./img/bgmovie.jpg)",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning  "></div>
                <div className="mt-2 text-light" style={{fontSize:'20px'}}>Màn hình</div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
                {this.renderHangGhe()}
              </div>
              
              <div className="col-4 ">
                <div style={{fontSize:'25px', color:'orange'}} className="mt-5">DANH SÁCH GHẾ BẠN CHỌN
                
                </div>
                <ThongTinGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
