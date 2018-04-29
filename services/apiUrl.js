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
  // getUserMe: `${prefix}/api/v1/user`,
  /* Categories with subcats */
  getCategories: `${prefix}/api/v1/wc/category`, // GET
  /* Product */
  getProductByAttr: `${prefix}/api/v1/wc/product`, // GET
  getProductsByCatSlug: `${prefix}/api/v1/wc/products_by_cat_slug`,
  // Cart
  getCartContent: `${prefix}/api/v1/wc/cart`,
  addToCart: `${prefix}/api/v1/wc/cart/add`, // POST
  updateProductQuantity: `${prefix}/api/v1/wc/cart/update`, // PUT
  clearCart: `${prefix}/api/v1/wc/cart/clear`, // POST
  removeFromCart: `${prefix}/api/v1/wc/cart/remove`,
  // Other assets
  getSlideshow: `${prefix}/wp/v2/slideshows`
}