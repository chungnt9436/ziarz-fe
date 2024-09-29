'use client'
import Link from 'next/link'
export default function login() {
  return (
      <div className="page_center">
          <div className="register-form">
              <div className="register-form__wrapper">
                  <div className="text-center">
                      <Link href="/"><img src="monnica.png" alt=""/></Link>
                  </div>
                  <h2>Đổi mật khẩu</h2>
                  <form method="post" action="/account" id="create_customer" accept-charset="UTF-8">
                      <input type="password" name="customer[password]" placeholder="Mật khẩu mới" className="form-field"/>
                      <input type="password" name="customer[password]" placeholder="Nhập lại mật khẩu mới" className="form-field"/>
                      <div className="row_btn">
                          <button className="button button--secondary">
                              Hủy
                          </button>
                          <button className="button button--primary">
                              Xác nhận
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  )
}
