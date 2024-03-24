const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['mongoose'],
        missingSuspenseWithCSRBailout: false,
    },
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
    webpack: (
        config,
        {buildId, dev, isServer, defaultLoaders, nextRuntime, webpack}
    ) => {
        // Important: return the modified config
        return config
    },
    
};

export default nextConfig;