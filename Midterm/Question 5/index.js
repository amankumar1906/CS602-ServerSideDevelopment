const os = require("os");

let cpuUsage = [];

setInterval(() => {
  const cpu = os.cpus()[0];
  const total =
    cpu.times.user + cpu.times.nice + cpu.times.sys + cpu.times.idle;
  const idle = cpu.times.idle;
  const usage = 100 - (100 * idle) / total;

  cpuUsage.push(usage);

  if (cpuUsage.length > 5) {
    cpuUsage.shift();
  }

  const avgUsage = cpuUsage.reduce((acc, n) => acc + n, 0) / cpuUsage.length;

  console.log(
    `Average CPU usage over the last 5 seconds: ${avgUsage.toFixed(2)}%`
  );
}, 5000);
