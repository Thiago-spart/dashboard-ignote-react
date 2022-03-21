# Setup Project Details

## Environment config

- [Install yarn](https://classic.yarnpkg.com/en/docs/install)
- [Install VSCode](https://code.visualstudio.com/Download)
- Install **ALL** the extensions recommended in `.vscode/extensions.json`
- **If the changes are not applied automatically** add the content of `.vscode/settings.json` in your personal `settings.json`

## Initial config

- [ ] Change the project name on `package.json`
- [ ] Change `name` and `url` of SITE from `src/configs/site.ts`
- [ ] Change `siteUrl` and `additionalSitemaps` from `sitemap-generator.js`
- [ ] Add project to [CodeFactor](https://www.codefactor.io)
- [ ] Add project to [DeepScan](https://deepscan.io/dashboard/#view=team&tid=13883)
- [ ] Add project to [Coveralls](https://coveralls.io/welcome)
- [ ] Update the `title` and `badges` of `README.md`

## After the first test file be added to the project

- [ ] Remove "Test TypeScript Syntax" step from `.github/workflows/tests.yml`
- [ ] Remove script "temp:test-tsc" from `package.json`
- [ ] Uncomment steps "Run Tests" and "Colect Coverage" from `.github/workflows/tests.yml`
- [ ] Uncomment "coverageThreshold" from `jest.config.ts`

## After all other steps are completed

- [ ] Delete this file
