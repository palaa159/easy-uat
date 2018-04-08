const prefix = `/wp-json`

export const apiUrl = () => ({
  emailLogin: `${prefix}/api/v1/auth/email`, // PUT
  emailRegister: `${prefix}/api/v1/auth/email`, // POST
  fbLogin: `${prefix}/api/v1/auth/fb`,
  fbRegister: `${prefix}/api/v1/auth/fb`,
  logout: `${prefix}/api/v1/auth/logout`, // POST
  changePassword: `${prefix}/api/v1/auth/password`, // PUT
  forgotPassword: `${prefix}/api/v1/auth/forgot_password`, // POST,
  forgotSetPassword: `${prefix}/api/v1/auth/forgot_password`, // PUT
  /* User */
  profile: `${prefix}/wp/v2/user`, // PUT
  /* Categories with subcats */
  catData: `${prefix}/api/v1/cat`, // GET
  /* Product */
})