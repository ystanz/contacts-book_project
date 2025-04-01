import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettierPlugin from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] }, // Define quais arquivos serão analisados pelo ESLint. Aqui, ele verifica arquivos JavaScript (.js, .mjs, .cjs), TypeScript (.ts), e arquivos React (.jsx, .tsx).
  { languageOptions: { globals: globals.browser } }, // Diz ao ESLint que o código está rodando em um ambiente de navegador, permitindo o uso de variáveis globais como window e document.

  pluginJs.configs.recommended, // Ativa as regras padrão recomendadas para JavaScript.
  ...tseslint.configs.recommended, // Ativa as regras recomendadas para TypeScript (espalhando ... para pegar todas as configurações dentro do array).
  pluginReact.configs.flat.recommended, // Ativa as regras recomendadas para React, garantindo boas práticas no uso de JSX e componentes.

  {
    plugins: {
      'react-hooks': reactHooks, // Ativa o plugin do React Hooks.
      prettier: prettierPlugin
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error', // Garante que os hooks do sejam usados corretamente. Se houver algum erro na ordem ou no uso de hooks dentro de condicionais, ele será apontado como erro.
      'react-hooks/exhaustive-deps': 'warn', // Para apontar algum problema nas dependências, emite avisos caso alguma variável esteja ausente, o que pode causar bugs sutis.
      'react/prop-types': 'off', // Desativa a exigência de PropTypes, pois ja está se usando o TypeScript, que já fornece tipagem de props.
      'react/react-in-jsx-scope': 'off', // Para desabilitar a função de obrigar a importação do react em todos os arquivos, aonde as vezes ele não é utilizado.
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Para não precisar explicitar o tipo de retorno nas funções, tornando o código mais enxuto.
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'none',
          semi: false,
          printWidth: 110
        }
      ]
    }
  },
  {
    settings: {
      react: { version: 'detect' } // Para o ESLint detectar a versão do React utilizado.
    }
  }
]
