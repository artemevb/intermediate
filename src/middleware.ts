import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['ru', 'uz', 'en'],
 
  defaultLocale: 'ru'
});
 
export const config = {
  matcher: ['/', '/(ru|uz|en)/:path*']
};