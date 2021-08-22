const { workerData, parentPort } = require("worker_threads");
const fs = require("fs");

// GLOBALS for tests
const group = require("../helpers/group");
const test = require("../helpers/test");

const worker = async () => {
    try {
        console.log(`file: ${workerData}`);
        const _test = workerData;
        const code = await fs.promises.readFile(_test, "utf8");
        eval(code);
        parentPort.postMessage({ message: "done!" });
    } catch (e) {
    }
};

worker();
