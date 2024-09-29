'use client'

export default function Cart() {
      return (
        <div>
            <h2 className="title-page">Giỏ hàng của bạn</h2>
            <div className="sub_title">Có 2 sản phẩm trong giỏ hàng</div>
            <div className="inner_row">
                <div className="inner_col_right">
                    <div className="cart_list">
                        <div className="cart_item">
                            <img className="cart_thumb" src="/7.1b.webp" alt=""/>
                            <div className="cart_info">
                                <h3>
                                    Áo Măng Tô dạ
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                             className="size-6">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                                        </svg>
                                    </span>
                                </h3>
                                <div className="cart_item_price">5.999.000đ</div>
                                <div className="cart_item_quantity">
                                    <div className="quantity_group">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14"/>
                                            </svg>
                                        </button>
                                        <input type="number"/>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <b>5.999.000đ</b>
                                </div>

                            </div>
                        </div>
                        <div className="cart_item">
                            <img className="cart_thumb" src="/7.1b.webp" alt=""/>
                            <div className="cart_info">
                                <h3>
                                    Áo Măng Tô dạ
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                             className="size-6">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                                        </svg>
                                    </span>
                                </h3>
                                <div className="cart_item_price">5.999.000đ</div>
                                <div className="cart_item_quantity">
                                    <div className="quantity_group">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14"/>
                                            </svg>
                                        </button>
                                        <input type="number"/>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <b>5.999.000đ</b>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="inner_col_left">
                    <div className="cart_info_left">
                        <h2>Thông tin đơn hàng</h2>
                        <div className="cart_total">
                            <span>Tổng tiền (2 sản phẩm) :</span>
                            <b>5.999.000đ</b>
                        </div>
                        <div className="cart_sub">
                            Phí vận chuyển sẽ được tính ở trang
                            thanh toán. <br/>
                            Bạn cũng có thể nhập mã giảm giá ở
                            trang thanh toán.
                        </div>
                        <div className="cart_btn">
                            <a href="" className="button button--primary">Thanh toán</a>
                            <a href="" className="button button--secondary">Tiếp tục mua hàng</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}
