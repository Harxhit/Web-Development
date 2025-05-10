import { readFileSync } from 'fs';
import path from 'path';

try {
  const envPath = path.resolve(process.cwd(), '.env');
  const envContent = readFileSync(envPath, 'utf-8');
  console.log(' .env FOUND at:', envPath);
  console.log(' Contents:\n', envContent);
} catch (err) {
  console.log(' .env NOT FOUND in:', process.cwd());
}
