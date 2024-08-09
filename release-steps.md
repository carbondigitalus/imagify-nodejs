# Release Instruction Notes

To create a new release, do the following:

## Prepare Git Hooks:

Run `npm run prepare` to install Husky and set up Git hooks.

## Linting:

We lint on save.

## Type Checking:

Run `npm run typecheck` to ensure there are no TypeScript type errors.

# Testing:

We do not have any testing.

# Building the Project:

Run `npm run clean` to remove any existing build artifacts.
Run `npm run build` to compile your TypeScript code based on the tsconfig.build.json.

# Publishing to NPM:

Run `npm run npm:publish` to clean, build, and publish the package to NPM with public access.

# Automated Release (Optional):

If you want to use semantic release for versioning and releasing, you can run `npm run semantic-release`.
