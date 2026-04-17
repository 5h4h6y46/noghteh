/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",       // ← tells Next.js to produce a static ./out folder
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig