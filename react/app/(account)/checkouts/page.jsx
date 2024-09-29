'use client'
import  '@/styles/Cart.scss';
import Link from 'next/link';

export default function Checkouts() {
      return (
        <div className="page_checkouts">
            <div className="inner_row">
                <div className="inner_col_right">
                    <Link href="/"><img src="monnica.png" alt=""/></Link>
                    <h2 className="text-2xl font-bold my-3">Thông tin giao hàng</h2>
                    <form action="">
                        <input type="text" name="" placeholder="Họ và tên" className="form-field "/>
                        <div className="flex -mx-2">
                            <div className="w-6/12 px-2">
                                <input type="email" name="" placeholder="Email" className="form-field "/>
                            </div>
                            <div className="w-6/12 px-2">
                                <input type="text" name="" placeholder="Số điện thoại" className="form-field "/>
                            </div>
                        </div>
                        <div className="flex -mx-2">
                            <div className="w-6/12 px-2">
                                <input type="text" name="" placeholder="Quốc gia" className="form-field "/>
                            </div>
                            <div className="w-6/12 px-2">
                                <input type="text" name="" placeholder="Tỉnh / TP" className="form-field "/>
                            </div>
                        </div>
                        <div className="flex -mx-2">
                            <div className="w-6/12 px-2">
                                <input type="text" name="" placeholder="Huyện / Quận" className="form-field "/>
                            </div>
                            <div className="w-6/12 px-2">
                                <input type="text" name="" placeholder="Phường / Xã" className="form-field "/>
                            </div>
                        </div>
                        <input type="text" name="" placeholder="Địa chỉ chi tiết : Số 22, Ngõ 222, Di Trạch, Hoài Đức" className="form-field "/>
                        <textarea name="" placeholder="Ghi chú" rows="3"  className="form-field "></textarea>
                        <div className="check_custom mb-3">
                            <input type="checkbox" id="remember" className="styled-checkbox"/>
                            <label htmlFor="remember">Yêu cầu hóa đơn</label>
                        </div>
                        <div className="row_btn">
                            <Link href="cart" className="button button--secondary">
                                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"/>
                                </svg>
                                Giỏ hàng
                            </Link>
                            <Link href="payment" className="button button--primary">
                                Tiếp tục
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
                        <div className="flex -mx-2">
                            <div className="w-9/12 px-2">
                                <input type="text" name="" placeholder="Mã miễn phí vận chuyển" className="form-field mb-0"/>
                            </div>
                            <div className="w-3/12 px-2">
                                <button className="button button--secondary mb-0">Apply</button>
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
