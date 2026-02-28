module.exports = {
  apps: [
    {
      name: "plato-landing",
      script: ".next/standalone/server.js",
      env: {
        NODE_ENV: "production",
        PORT: 3003,
      },
    },
    {
      name: "plato-landing-worker",
      script: "npm",
      args: "run worker:start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
