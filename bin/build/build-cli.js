/* eslint no-process-exit: 0 */

import 'colors';
import build from './build';
import { setExecOptions } from './exec';

import yargs from 'yargs';

const argv = yargs
  .help('h')
  .option('verbose', {
    demand: false,
    default: false,
    describe: 'Increased debug output'
  })
  .argv;

setExecOptions(argv);

let buildProcess;

buildProcess = build(argv);

buildProcess
  .catch(err => {
    if (err.stack) {
      console.error(err.stack.red);
    } else {
      console.error(err.toString().red);
    }
    process.exit(1);
  });
