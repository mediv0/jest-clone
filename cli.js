const { files } = require("./helpers/file");
const runTest  = require("./helpers/runTest");

(() => {
    const _files = files();
    _files.forEach(async (file) => {
        await runTest(file);
    })
})()