
const chalk = require("chalk");
module.exports = (title, fn) => {
    const _color = "F0A500";
    const fg = chalk.hex(_color)("ℹ ");
    const bg = chalk.bgHex(_color).black(`  ${title}  `);
    console.log(fg, bg);
    fn();
}