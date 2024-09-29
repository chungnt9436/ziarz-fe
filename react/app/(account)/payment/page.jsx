'use client'
import  '@/styles/Cart.scss';
import Link from 'next/link';

export default function Payment() {
      return (
        <div className="page_checkouts">
            <div className="inner_row">
                <div className="inner_col_right">
                    <Link href="/"><img src="monnica.png" alt=""/></Link>
                    <h2 className="text-2xl font-bold my-3">Hình thức thanh toán</h2>
                    <form action="">
                        <div className="pay_item">
                            <label>
                                <input name="pay" type="radio"/>
                                <span></span>
                                <img src="atm.png" alt=""/>
                                <p>
                                    <b>Chuyển khoản</b>
                                    Sử dụng thẻ ATM hoặc dịch vụ Internet Banking
                                    để tiến hành chuyển khoản cho chúng tôi
                                </p>
                            </label>
                        </div>
                        <div className="pay_item">
                            <label>
                                <input name="pay" type="radio"/>
                                <span></span>
                                <img src="cod.png" alt=""/>
                                <p>
                                    <b>Thu tiền tại nhà (COD)</b>
                                    Khách hàng thanh toán bằng tiền mặt cho nhân viên
                                    giao hàng khi sản phẩm được chuyển tới địa chỉ nhận hàng
                                </p>
                            </label>
                        </div>

                        <div className="row_btn">
                            <Link href="checkouts" className="button button--secondary">
                                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"/>
                                </svg>
                                Quay lại
                            </Link>
                            <Link href="cart" className="button button--primary">
                                Đặt hàng
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="inner_col_left">
                    <div className="cart_info_bg_bg">
                        <div className="CartDrawer_item">
                            <Link href="" className="CartDrawer_thumb">
                                <img src="7.1b.webp" alt=""/>
                            </Link>
                            <div className="CartDrawer_item_info">
                                <h3>
                                    Áo măng tô
                                </h3>
                                <span>Số lượng: 2</span>
                                <div>1,699,999đ</div>
                            </div>
                        </div>
                        <div className="CartDrawer_item">
                            <Link href="" className="CartDrawer_thumb">
                                <img src="7.1b.webp" alt=""/>
                            </Link>
                            <div className="CartDrawer_item_info">
                                <h3>
                                    Áo măng tô
                                </h3>
                                <span>Số lượng: 2</span>
                                <div>1,699,999đ</div>
                            </div>
                        </div>

                        <div className="CartDrawer_footer">
                            <div className="CartDrawer_total">
                                <span>Thành tiền</span>
                                <b>2,787,787đ</b>
                            </div>
                            <div className="CartDrawer_total">
                                <span>Phí vận chuyển</span>
                                <b>50.000đ</b>
                            </div>
                            <div className="CartDrawer_total_bot">
                                <span>Tổng tiền</span>
                                <b>50.000đ</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}
