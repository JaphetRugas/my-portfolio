/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { 
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.opencollective.com',
            port: '', 
            pathname: '/drizzle-orm/**',
          },
          {
            protocol: 'https',
            hostname: 'docs.pmnd.rs',
            port: '', 
            pathname: '/_next/**',
          },
          {
            protocol: 'https',
            hostname: 'i.cloudup.com',
            port: '', 
            pathname: '/**',
          },
        ], 
    }
}; 
export default nextConfig; 