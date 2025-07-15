import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "V-Anime",
  description: "Examples of JS animations",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Float Effect', link: '/examples/float-effect' },
          { text: 'Progress Bar', link: '/examples/progress-bar' },
          { text: 'Spinner', link: '/examples/spinner' },
          { text: 'Typing Text', link: '/examples/typing-text' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Huy-DNA/v-anime' }
    ]
  }
})
