const prefix = `/wp-json`

export default {
  getSiteInit: `${prefix}/api/v1/site-init`,
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
  customer: `${prefix}/api/v1/user/customer`,
  getUserMe: `${prefix}/wp/v2/users/me?context=edit`, // PUT
  // getUserMe: `${prefix}/api/v1/user`,
  /* Categories with subcats */
  getShopCategories: `${prefix}/api/v2/product-category?withProducts=true`, // GET
  /* Product */
  getProduct: `${prefix}/api/v2/product`, // GET
  getProductBySlug: `${prefix}/api/v2/wc/product-slug`, // GET
  getProductVariations: `${prefix}/api/v1/wc/product_variations_by_id`, // GET
  getProductsByCatSlug: `${prefix}/api/v1/wc/products_by_cat_slug`,
  // Cart
  getCartContent: `${prefix}/api/v1/wc-auth/cart`,
  addToCart: `${prefix}/api/v1/wc-auth/cart/add`, // POST
  updateProductQuantity: `${prefix}/api/v1/wc-auth/cart/update`, // PUT
  clearCart: `${prefix}/api/v1/wc-auth/cart/clear`, // POST
  removeFromCart: `${prefix}/api/v1/wc-auth/cart/remove`,
  // Other assets
  getSlideshow: `${prefix}/wp/v2/slideshows`,
  getContent: `${prefix}/api/v1/content`,
  getProductsAndSubcats: `${prefix}/api/v1/wc/products_and_subcats_by_cat_slug`,
  getCountryCodes: `${prefix}/api/v1/utils/countries`,
}
