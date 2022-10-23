import React, { Component } from 'react'
import { connect } from "react-redux";

 class ThongTinGhe extends Component {
  render() {
    return (
      <div>
        <div className='mt-5'>
        <button className='gheDuocChon mb-3'></button> <span className='text-light' style={{fontSize:'18px'}}>Ghế đã chọn</span>
        <br />
        <button className='gheDangChon mb-3'></button> <span className='text-light' style={{fontSize:'18px'}}>Ghế đang chọn</span>
        <br />
        <button className='ghe' style={{marginLeft:'0'}}></button> <span className='text-light' style={{fontSize:'18px'}}>Ghế chưa chọn</span>
      </div>

      <div className='mt-5 '>
        <table className="table bd-warning" border={2} >
          <thead>
            <tr style={{fontSize:'20px', fontFamily:'sans-serif',color:'white'}}>
              <th>Số ghế</th>
              <th>Giá</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='text-warning' style={{fontSize:'18px'}}>
          {this.props.danhSachGheDangDat.map((gheDangDat,index)=>{
            return <tr key={index}>
              <td>{gheDangDat.soGhe}</td>
              <td>{gheDangDat.gia.toLocaleString()}</td>
              <td><button onClick={()=>{
                this.props.dispatch({
                  type:'HUY_GHE',
                  soGhe: gheDangDat.soGhe
                })
              }}>Hủy</button></td>
            </tr>
          })}
          </tbody>
          <tfoot>
            <tr className='text-danger bg-light'>
              <td></td>
              <td>Tổng tiền</td>
              <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                return tongTien += gheDangDat.gia;

              },0).toLocaleString()}</td>
           
            </tr>
          </tfoot>
        </table>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    danhSachGheDangDat:state.bookingTicketReducer.danhSachGheDangDat
  }
}

export default connect (mapStateToProps,null)(ThongTinGhe);