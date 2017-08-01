import 'colors';
import lib from './lib/build';
import { copy } from './fs-utils';
import { imagesRoot, imagesDist } from './constants';

export default function Build() {
  return Promise.all([
    lib()
  ])
  .then(() => copy(imagesRoot, imagesDist));
}
