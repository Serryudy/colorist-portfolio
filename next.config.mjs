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
};

export default nextConfig;
