module.exports = {
  apps : [
    {
    name: 'watchmen-monitor-server',
    script: 'run-monitor-server.js',
    instances: 1,
    autorestart: true,
    watch: true,
    },
    {
      name: 'watchmen-web-server',
      script: 'run-web-server.js',
      instances: 2,
      autorestart: true,
      watch: true,
    },
  ],
};
