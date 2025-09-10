module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser', // Add TS parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: './tsconfig.json', // Needed for some TS rules
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended', // Add TS rules
    '@react-native',
  ],
  plugins: ['react', 'react-native', 'react-hooks', '@typescript-eslint'],
  rules: {
    // Your existing rule
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // React rules
    'react/react-in-jsx-scope': 'off', // Not needed in RN / React 17+
    'react/prop-types': 'off', // We use TypeScript for props
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],

    // Airbnb adjustments
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.{ts,tsx,js,jsx}', '**/*.spec.{ts,tsx,js,jsx}'] },
    ],

    // React Native specific
    'react-native/no-inline-styles': 'warn',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'warn',

    // TypeScript rules
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/explicit-function-return-type': 'off',

    // General
    'no-console': 'warn',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'], // allow "state" mutation (RTK)
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'react-native': {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
