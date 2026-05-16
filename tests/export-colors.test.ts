import fs from 'fs/promises';
import { Colors } from '../src/main';

const colors_file = `${JSON.stringify(Colors, undefined, 2)}
`;

await fs.writeFile('./assets/colors.json', colors_file);

console.log('✅ Success');
