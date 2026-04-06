// This example models a tiny typed Node-style helper.

type EnvConfig = {
  port: number;
  appName: string;
};

function startServer(config: EnvConfig) {
  console.log(`${config.appName} listening on port ${config.port}`);
}

const config: EnvConfig = {
  port: 3000,
  appName: "study-api",
};

startServer(config);
