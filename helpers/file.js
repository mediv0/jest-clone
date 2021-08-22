const glob = require("glob");

module.exports.files = () => {
    const files = glob.sync("**/*.spec.js");
    return files;
}