const globals = require('globals');
const js = require('@eslint/js');
const ts = require('typescript-eslint');

module.exports = [
  { languageOptions: { globals: globals.node } },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2016,
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
    },
    files: ['src/**/*.ts'],
    ignores: ['node_modules/**/*.js', 'node_modules/**/*.ts'],
    rules: {
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'no-undef': 'warn',
    },
    settings: {
      'import/resolver': {
        typescript: {}, // this loads tsconfig.json to eslint
      },
    },
  },
];
