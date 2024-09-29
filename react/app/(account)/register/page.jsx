'use client'
import Link from 'next/link'
export default function login() {
  return (
      <div className="page_center py-3">
          <div className="register-form">
              <div className="register-form__wrapper">
                  <div className="text-center">
                      <Link href="/"><img src="monnica.png" alt=""/></Link>
                  </div>
                  <h2>Register</h2>
                  <div className="social_form">
                      <a href="">
                          <img src="./logos_facebook.svg" alt=""/> Continue with Facebook
                      </a>
                      <a href="">
                          <img src="./flat-color-icons_google.svg" alt=""/> Continue with Google
                      </a>
                  </div>
                  <div className="or_span"><span>or</span></div>
                  <form method="post" action="/account" id="create_customer" accept-charset="UTF-8">
                      <input type="text" name="customer[first_name]" placeholder="First Name" className="form-field "/>
                      <input type="text" name="customer[last_name]" placeholder="Last Name" className="form-field "/>
                      <input type="email" name="customer[email]" placeholder="Email" className="form-field "/>
                      <input type="text" name="customer[mobile]" placeholder="Phone number"
                             className="form-field "/>
                      <input type="password" name="customer[password]" placeholder="Password"
                             className="form-field"/>
                      <input type="password" name="customer[password]"
                             placeholder="Password confirm" className="form-field"/>
                      <div className="register-form__description">
                          Bằng việc tạo tài khoản bạn có thể mua sắm nhanh hơn, theo dõi trạng
                          thái đơn hàng, và theo dõi đơn hàng mà bạn đã đặt.
                      </div>
                      <button className="button button--primary">
                          Register
                      </button>
                      <div className="" align="center">
                          Already have an account? <Link href="/login"><b>Log in</b></Link>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  )
}
