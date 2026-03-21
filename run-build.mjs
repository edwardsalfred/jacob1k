import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

try {
  execSync('npm run build', { encoding: 'utf8', stdio: 'pipe' });
  console.log('Build succeeded');
} catch (e) {
  writeFileSync('build_errors.txt', e.stdout + '\n' + e.stderr, 'utf8');
}
