import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token'); 
  const { pathname } = request.nextUrl;

  console.log("Token dari cookies:", token);
  console.log("Current pathname:", pathname);
  
  const isProtectedRoute = 
    pathname === '/admin' || 
    (pathname.startsWith('/admin/') && pathname !== '/admin/login');
  
  if (!token && isProtectedRoute) {
    console.log("Redirecting to /admin/login"); 
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};