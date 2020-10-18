module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'newline-before-return': 2,
    'no-console': 2,
    'import/no-default-export': 2,
    'import/no-self-import': 2,
    'import/no-named-as-default': 2,
    'arrow-body-style': 2,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/ban-types': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
};
