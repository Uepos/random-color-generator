import chalk from 'chalk';
import randomColor from 'randomcolor';

const lum = process.argv[3];
const col = process.argv[2];

const color = randomColor({
  luminosity: lum,
  hue: col,
});

function colorAndLog(str) {
  console.log(chalk.hex(color).bold(str));
}

if (col === 'ask') {
  console.log('which color and luminosity you want to use?');
} else {
  colorAndLog(`##############################
##############################
##############################
########              ########
########   ${color}    ########
########              ########
##############################
##############################
##############################`);
}
