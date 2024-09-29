'use client'
import  '@/styles/Cart.scss';
import {useState } from 'react';
import Link from 'next/link'
import { useAuth } from '@/context/authContext';

function CartDrawer({toggleCart}) {
    const cartItems = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        name: 'Áo măng tô',
        price: '1,699,999đ',
        image: '7.1b.webp',
    }));
    return (
        <div className="wrap_CartDrawer">
            <div onClick={toggleCart} className="over_lay_cart"></div>
            <div className="CartDrawer">
                <h2>
                    Giỏ hàng
                    <span onClick={toggleCart}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                         className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                    </svg>
                </span>
                </h2>
                <div className="CartDrawer_list">
                    {cartItems.map((item) => (
                        <div key={item.id} className="CartDrawer_item">
                            <Link href="" className="CartDrawer_thumb">
                                <img src="7.1b.webp" alt=""/>
                            </Link>
                            <div className="CartDrawer_item_info">
                                <h3>
                                    <Link href="">Áo măng tô</Link>
                                    <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                </svg>
                            </span>
                                </h3>
                                <div>1,699,999đ</div>
                                <span>Số lượng</span>
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
                            </div>
                        </div>
                    ))}
                </div>
                <div className="CartDrawer_footer">
                    <div className="CartDrawer_total">
                        <span>Tổng thanh toán</span>
                        <b>2,787,787đ</b>
                    </div>
                    <Link href="checkouts" className="button button--primary">Thanh toán</Link>
                    <Link href="cart" className="button button--secondary">Xem giỏ hàng</Link>
                </div>
            </div>
        </div>
        
    );
}
export default CartDrawer;
