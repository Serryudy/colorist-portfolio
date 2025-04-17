/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'], // Add any domains you're using for images
      },
    webpack: (config) => {
    config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        use: ['raw-loader', 'glslify-loader'],
    });
    return config;
    },
    // Add if you need to handle large video files
    experimental: {
    largePageDataBytes: 128 * 100000, // 128KB -> 12.8MB
    },
};

export default nextConfig;
