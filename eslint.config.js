import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'

/** @type {import('eslint').Linter.RulesRecord} */
const importRules = {
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'unknown'],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
}

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['**/node_modules', '**/dist', '**/.yarn'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      prettier,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      ...tsPlugin.configs['eslint-recommended'].rules,
      ...tsPlugin.configs['recommended'].rules,
      ...importRules,
      ...prettier.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {prettier, import: importPlugin},
    rules: {...importRules, ...prettier.configs.recommended.rules},
  },
  {
    files: ['packages/client/src/**/*.{ts,tsx}'],
    languageOptions: {
      ...reactPlugin.configs.recommended.languageOptions,
      parser: tsParser,
      globals: {
        ...globals.browser,
      },
    },
    plugins: {react: reactPlugin},
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
