# verssai-components

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Environment Variables for Build

The build process includes a step that modifies the `dist/play-manifest.json` file by replacing placeholder variables with actual values. This allows for dynamic configuration of the library when deployed in different environments.

### Available Environment Variables

- `PACKAGE_NAME`: The name of the package (defaults to the name in package.json)
- `PUBLIC_URL`: The base URL where the library assets are hosted (defaults to 'https://ui-lib.qelos.io')

### Example Usage

```sh
# Build with custom environment variables
PACKAGE_NAME="my-custom-lib" PUBLIC_URL="https://cdn.example.com/assets" npm run build
```

### How It Works

During the build process, the script automatically:

1. Builds the library using Vite
2. Runs a post-build script that reads the `dist/play-manifest.json` file
3. Replaces all occurrences of `{{PACKAGE_NAME}}` and `{{PUBLIC_URL}}` with their respective values
4. Saves the modified manifest back to the dist folder
