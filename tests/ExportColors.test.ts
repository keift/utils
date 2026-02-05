import fs from 'fs/promises';
import { Colors } from '../src/main';

await fs.writeFile('./assets/colors.json', JSON.stringify(Colors, undefined, 2));

console.log('✅ Success');
