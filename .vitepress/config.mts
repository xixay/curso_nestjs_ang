import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Curso NestJS y Angular",
  description: "Documentación del curso de NestJS y Angular 19",
  base: '/curso_nestjs_ang/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://docs.nestjs.com/assets/logo-small.svg',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Ayuda Memoria', link: 'https://xixay.github.io/ayuda-memoria/' }
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xixay/curso_nestjs_ang' }
    ]
  }
})
