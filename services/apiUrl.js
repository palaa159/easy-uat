const prefix = `/wp-json`

export default {
  getToken: `${prefix}/jwt-auth/v1/token`, // PUT
  emailRegister: `${prefix}/api/v1/auth/email`, // POST
  fbLogin: `${prefix}/api/v1/auth/fb`,
  fbRegister: `${prefix}/api/v1/auth/fb`,
  logout: `${prefix}/api/v1/auth/logout`, // POST
  changePassword: `${prefix}/api/v1/auth/password`, // PUT
  forgotPassword: `${prefix}/api/v1/auth/forgot_password`, // PUT
  forgotSetPassword: `${prefix}/api/v1/auth/check_password_key`, // PUT
  /* User */
  updateBasicProfile: `${prefix}/api/v1/user/me`, // PUT
  getUserMe: `${prefix}/wp/v2/users/me?context=edit`, // PUT
  /* Categories with subcats */
  catData: `${prefix}/api/v1/cat`, // GET
  /* Product */
  getProductBySlug: `${prefix}/api/v1/product` // GET
}