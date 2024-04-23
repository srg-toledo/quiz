import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'

export default defineConfig({
  plugins: [
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: [
        'resources/css/app.css',
        'resources/js/app.js',


        'resources/js/navbar.js',
        'resources/js/sidebar.js',
        'resources/js/quiz.js',
        'resources/js/ordem.js',
        'resources/js/calculoQquadrado.js',
        'resources/js/imparPar.js',
        'resources/js/media.js',


      
      ],

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['resources/views/**/*.edge'],
    }),
  ],
})
