import fs from 'fs/promises';
import { colors } from '../src/main';

const colors_file = `${JSON.stringify(colors, undefined, 2)}
`;

await fs.writeFile('./assets/colors.json', colors_file);

console.log('✅ Success');
