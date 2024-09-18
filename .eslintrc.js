module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    env: {
      browser: true,
      node: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:@next/next/recommended', 'prettier' ],
    plugins: ['@typescript-eslint', 'prettier' , 'eslint-plugin-import-helpers'],
    rules: {
      'prettier/prettier': ['error'],
      'react/react-in-jsx-scope': 'off',
      "react/prop-types": "off",
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }], 
      "import-helpers/order-imports": [
        "warn",
        {
          newlinesBetween: "always",
          groups: [
            ["/^next/", "module"],
            "/@styles/",
            "/@components/",
            "/@lib/",
            ["parent", "sibling", "index"],
          ],
          alphabetize: { order: "asc", ignoreCase: true },
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };