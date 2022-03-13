module.exports = {
  apps: [
    {
      script: 'dist/src/main.js',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: '3000',
      },
    },
  ],
};
