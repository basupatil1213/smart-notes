export  { auth as middleware } from "@/auth"
 
// export default auth((req) => {
//   if (!req.auth && req.nextUrl.pathname !== "/signin") {
//     const newUrl = new URL("/signin", req.nextUrl.origin)
//     return Response.redirect(newUrl)
//   }
// })