import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

export default [
    js.configs.recommended,
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2022,
            sourceType: 'module',
        },
        env: {
            node: true, // Habilita variáveis globais do Node.js
            es2022: true,
        },
        plugins: {
            '@typescript-eslint': ts,
            prettier,
        },
        rules: {
            ...ts.configs.recommended.rules,
            'prettier/prettier': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/explicit-function-return-type': 'warn',
        },
    },
];
