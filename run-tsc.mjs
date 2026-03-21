import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

try {
  execSync('npx tsc --noEmit', { encoding: 'utf8' });
  console.log('No TS errors');
} catch (e) {
  writeFileSync('ts_errors.txt', e.stdout, 'utf8');
}
