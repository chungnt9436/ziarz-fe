'use client'
import Link from 'next/link'
export default function login() {
  return (
      <div className="page_center">
          <div className="wrap_login">
              <div className="text-center w-full">
                  <Link href="/"><img src="monnica.png" alt=""/></Link>
              </div>
              <div className="register-form__wrapper">
                  <h2>Đăng nhập</h2>
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
                      <input type="email" name="customer[email]" placeholder="Email" className="form-field "/>
                      <input type="password" name="customer[password]" placeholder="Password" className="form-field"/>
                      <div className="mb-15 form_text">
                          <div className="check_custom">
                              <input type="checkbox" id="remember" className="styled-checkbox"/>
                              <label htmlFor="remember">Ghi nhớ mật khẩu</label>
                          </div>
                          <Link href="forgotpassword">Quên mật khẩu?</Link>
                      </div>
                      <button className="button button--primary">
                          Login
                      </button>
                  </form>
              </div>
              <div className="register-form__wrapper">
                  <h2>Quyền lợi thành viên</h2>
                  <p className="register-form__description">
                      Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click
                      unsubscribe in our emails.
                  </p>
                  <Link href="register" className="button button--primary">
                      Đăng ký
                  </Link>
              </div>
          </div>
      </div>
  )
}
