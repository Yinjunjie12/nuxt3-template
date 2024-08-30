// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives, transformerVariantGroup,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
export default defineConfig({
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
    }
  ],
  theme: {
    colors: {
    }
  },
  presets: [presetUno(), presetAttributify(), presetIcons(), presetRemToPx({ baseFontSize: 4 })],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
