import 'colors';
import lib from './lib/build';

export default function Build() {
  return Promise.all([
    lib()
  ])
}
