export default function ({
  isHMR,
  store,
  route,
  redirect
}) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return
}
