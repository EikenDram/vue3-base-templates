# vue3 project template

Vue 3 + Vuetify 3 typescript single page application

## Create project:

With `codepack enable`

Install yarn:
```sh
yarn set version stable
yarn install
```

Create vue project with:

```sh
yarn create vue
```

And choose all options

Rearrange project files to root directory and run:

```sh
yarn add vuetify
yarn add vite-plugin-mkcert -D
yarn add unplugin-vue-components -D
yarn add @fortawesome/fontawesome-free -D
yarn add vite-plugin-vuetify -D
yarn add unplugin-fonts -D
yarn add vue-i18n@9
yarn add @vueuse/core
yarn add axios
```

Add sdks with
```sh
yarn dlx @yarnpkg/sdks
yarn dlx @yarnpkg/sdks vscode
```

Then paste files from one of the folders for basic setup:

| folder | description 
|--------|------------------
| token  | project with token authentication
| oauth  | project with OAuth authentication