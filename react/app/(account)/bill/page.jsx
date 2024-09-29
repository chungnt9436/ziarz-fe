'use client'
import  '@/styles/Cart.scss';
import Link from 'next/link';

export default function Bill() {
      return (
        <div className="page_bill py-3">
            <div className="text-center">
                <Link href="/"><img src="monnica.png" alt=""/></Link>
            </div>
            <div className="inner_row">
                <div className="inner_col_right">
                    <div className="bill_check">
                        <img src="check.svg" alt=""/>
                        <p>
                            <b>Cảm ơn bạn đã đặt hàng</b>
                            Một email xác nhận đã được gửi tới ahieu5377@gmail.com.
                            Xin vui lòng kiểm tra email của bạn.
                        </p>
                    </div>
                    <div className="bill_info">
                        <ul>
                            <li>Tên Khách hàng: Thanh Hieu</li>
                            <li>Email: ahieu5377@gmail.com</li>
                            <li>SĐT: 0987654321</li>
                            <li>Địa chỉ: Hà nội</li>
                            <li>Phương thức vận chuyển: Phí vận chuyển Toàn quốc: 35,000đ</li>
                            <li>Phương thức thanh toán: Chuyển khản</li>
                        </ul>
                    </div>
                </div>
                <div className="inner_col_left">
                    <div className="code_bill">Mã đơn hàng <b>#898989</b> (4)</div>
                    <table>
                        <tr>
                            <td>
                                <img width="50" src="7.1b.webp" alt=""/>
                            </td>
                            <td>1</td>
                            <td>2,687,999đ</td>
                        </tr>
                        <tr>
                            <td>
                                <img width="50" src="7.1b.webp" alt=""/>
                            </td>
                            <td>1</td>
                            <td>2,687,999đ</td>
                        </tr>
                    </table>
                    <ul className="bill_price">
                        <li>
                            <span>Tạm tính </span>
                            <span>22,687,000đ</span>
                        </li>
                        <li>
                            <span>Phí vận chuyển</span>
                            <span>35,000đ</span>
                        </li>
                        <li>
                            <span>Tổng cộng</span>
                            <span>22,898,000đ</span>
                        </li>
                    </ul>
                    <div className="bil_stt">
                        <div className="">Trạng thái đơn hàng</div>
                        <div className="flex justify-between">
                            <span>Chờ xác nhận</span>
                            <span>Ngày: 15/07/2024 - 23:03 PM</span>
                        </div>
                    </div>
                    <Link href="/" className="button button--primary">
                        Tiếp tục mua hàng
                    </Link>
                </div>
            </div>
        </div>
      )
}
