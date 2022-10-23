import React, { Component } from 'react'

export default class ThongTinGhe extends Component {
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
        <table className="table" border={2} >
          <thead>
            <tr style={{fontSize:'18px', fontFamily:'sans-serif',color:'orange'}}>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>Số ghế</td>
              <td>Gía</td>
              <td>Hủy</td>
            </tr>
            <tr>
              <td>Số ghế</td>
              <td>Gía</td>
              <td>Hủy</td>
            </tr>
            
          </tbody>
        </table>
      </div>
      </div>
    )
  }
}
