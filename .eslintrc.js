module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'react',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'node': true
  },
  rules: {
    'max-len': ['error', 140, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
    }],
    'react/react-in-jsx-scope': 'off',

    quotes: ['error', 'single'],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-wrap-multilines': ['error', {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'parens-new-line'
    }
    ],
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'always' }],
    'react/jsx-indent': ['error', 2, { checkAttributes: true }],
    'indent': ['error', 2],
    'react/jsx-closing-bracket-location': [1, { selfClosing: 'tag-aligned' }],
    semi: ['error', 'never'],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    'import/extensions': [
      'warn',
      'never',
      { svg: 'always', scss: 'always', json: 'always' },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling']],
        'newlines-between': 'always',
      },
    ],
    'react/prop-types': [0],
    // '@calm/react-intl/missing-formatted-message': 1,
    // '@calm/react-intl/missing-attribute': [
    //   2,
    //   {
    //     noSpreadOperator: false,
    //   },
    // ],
    // '@calm/react-intl/missing-values': 2,
    'import/no-self-import': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'css-modules': {
      basePath: './src/',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
