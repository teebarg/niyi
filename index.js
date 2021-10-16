#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
const log = console.log;

const successStyle = chalk.bold.green;
const cyanStyle = chalk.bold.cyan;
const vaporStyle = chalk.bgMagenta.bold.cyan;

log(`
                ${vaporStyle("*******************************")}
                ${vaporStyle("                               ")}
                ${vaporStyle("=      Adeniyi Aderounmu      =")}
                ${vaporStyle("                               ")}
                ${vaporStyle("*******************************")}
`);

log(chalk`
  📧 Email: neyostica2000@yahoo.com
  ䷽ Github: https://github.com/teebarg
  🌍 Website: https://adeniyi.in/
`);

log(chalk`
  I am an enthusiastic self starting and highly capable Senior Software Developer 
  who has {bold 4+ years experience} developing Web Applications with {green.bold PHP, Javascript, 
  python, golang } and other web technologies, and building desktop apps with Java. 
  I love solving architecturally challenging and intricate software problems
`);

console.log(
  boxen(
    `Software Engineer - ${cyanStyle(
      "Bolsters Network Inc, Denver, Colorado."
    )}`,
    {
      title: successStyle("2021 - Date"),
      titleAlignment: "left",
      padding: 1,
    }
  )
);

console.log(
  boxen(
    `Software Engineer - ${cyanStyle(
      "Altara Credit Limited, VI, Lagos.      "
    )}`,
    {
      title: successStyle("2020 - 2021"),
      titleAlignment: "left",
      padding: 1,
    }
  )
);