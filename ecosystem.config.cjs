module.exports = {
  apps: [
    {
      name: "plato-web",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "plato-worker",
      script: "npm",
      args: "run worker:start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
