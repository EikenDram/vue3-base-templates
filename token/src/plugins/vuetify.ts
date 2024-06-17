/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files
import 'vuetify/styles'
import { aliases, fa } from 'vuetify/iconsets/fa'

// Composables
import { createVuetify, type IconProps, type IconSet } from 'vuetify'
import { h } from 'vue'

// returns filename from path
function filename(path: string) {
  return path
    .split(/(\\|\/)/g)
    .pop()!
    .replace(/\.[^/.]+$/, '')
}

/// svg icons in assets/icons directory
const svgIcons = Object.fromEntries(
  Object.entries(
    import.meta.glob('@/assets/icons/*.svg', {
      eager: true,
      query: '?raw',
      import: 'default',
    }),
  ).map(([k, v]) => [filename(k), v]),
)

/// custom icon set
const custom: IconSet = {
  component: (props: IconProps) =>
    h(props.tag, { innerHTML: svgIcons[props.icon as string] }),
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      custom
    }
  },
  theme: {
    defaultTheme: 'dark'
  },
  display: {
    mobileBreakpoint: 'sm',
  },
})