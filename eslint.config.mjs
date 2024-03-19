import nuxt from './.nuxt/eslint.config.mjs'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...nuxt,
  {
    ignores: [
      '.nitro/**',
      '.nuxt/**',
      '.output/**',
      '.vscode/**',
      'dist/**',
      'node_modules/**',
      'coverage/**',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts', '**/*.vue'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'vue/no-v-html': 'off',
    },
  },
]