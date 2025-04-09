import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

async function modifyManifest() {
  // Read package.json to get the package name as fallback
  const packageJsonPath = path.resolve('package.json');
  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
  
  const packageName = process.env.PACKAGE_NAME || packageJson.name;
  const publicUrl = process.env.PUBLIC_URL || 'https://ui-lib.qelos.io';
  
  try {
    // Read the manifest from the public directory
    const manifestPath = path.resolve('dist/play-manifest.json');
    
    // Check if the file exists
    try {
      await fs.access(manifestPath);
    } catch (error) {
      // If the file doesn't exist in dist, copy it from public
      const sourceManifestPath = path.resolve('public/play-manifest.json');
      const sourceManifest = await fs.readFile(sourceManifestPath, 'utf-8');
      await fs.writeFile(manifestPath, sourceManifest, 'utf-8');
      console.log(`Created manifest file at ${manifestPath}`);
    }
    
    // Read the manifest file
    const manifestContent = await fs.readFile(manifestPath, 'utf-8');
    
    // Replace the placeholders
    const modifiedContent = manifestContent
      .replace(/{{PACKAGE_NAME}}/g, packageName)
      .replace(/{{PUBLIC_URL}}/g, publicUrl);
    
    // Write the modified content back to the file
    await fs.writeFile(manifestPath, modifiedContent, 'utf-8');
    
    console.log(`Successfully updated manifest with:`);
    console.log(`- PACKAGE_NAME: ${packageName}`);
    console.log(`- PUBLIC_URL: ${publicUrl}`);
  } catch (error) {
    console.error('Error modifying manifest:', error);
    process.exit(1);
  }
}

modifyManifest();
