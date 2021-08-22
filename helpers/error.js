const chalk = require("chalk");
class Failed extends Error {
    constructor({ message, expected, received, title }) {
        super(message);
        this.message = message;
        this.expected = expected;
        this.received = received;
        this.title = title;
        this._color = "FF4646";
        this.formatError();
    }

    formatError() {
        const title = `${chalk.hex("845EC2")(this.title)}`;
        const msg = `${chalk.bold.bgRed(" ERROR ")}: ${chalk.bold.red(this.message)}`;
        const expected = `${chalk.bold.green(this.expected)}`;
        const received = `${chalk.bold.red(this.received)}`;

        console.log(`
        ${chalk.bold.red("✖")}   ${title}\n\t
        ${msg}
        expected: ${expected}
        but received: ${received} 
        `);
    }
}

module.exports = Failed;
