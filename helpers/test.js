const Failed = require("../helpers/error");
const chalk = require("chalk");

const error = (expected, received, msg, title) => {
    throw new Failed({
        expected: expected,
        received: received,
        message: msg,
        title: title,
    });
};

const done = (msg) => {
    const success = chalk.hex("61B15A");
    const _msg = `\t${success.bold("✔")}  ${msg}`;
    console.log(_msg);
};

class Test {
    constructor(title, expression) {
        this._title = title;
        this._expression = expression;
    }
    toBe(value) {
        try {
            this._expression === value ? done(this._title) : error(this._expression, value, "expression is not equal to value", this._title);
        } catch (e) {}
    }
}

module.exports = (title, expression) => {
    return new Test(title, expression);
};
