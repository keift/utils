import Package from '../package.json';

if (Package.dependencies.tailwindcss !== 'latest') throw new Error('❌ Error: tailwindcss');

if (Package.devDependencies.prettier !== 'latest') throw new Error('❌ Error: prettier');
if (Package.devDependencies.rulint !== 'latest') throw new Error('❌ Error: rulint');
if (Package.devDependencies.tsdown !== 'latest') throw new Error('❌ Error: tsdown');

console.log('✅ Success');
