const { Worker } = require("worker_threads");

const runTestService = (workerData) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker("./helpers/worker.js", { workerData });
        worker.on("message", resolve);
        worker.on("error", reject);
    });
};

module.exports = async (test) => {
    const result = await runTestService(test);
    // do something with result
}
