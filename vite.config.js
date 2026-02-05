import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({

  base:"./",
  build:{
    rollupOptions:{
      input:{
        main: 'index.html',
        account: 'account.html',
        checkout: 'checkout.html',
        login: 'login.html',
        register: 'register.html',
        shop: 'shop.html',
        checkout: 'checkout.html',
        whislist: 'whistlist.html',
        account: 'account.html',
        view: 'view.html'

      }
    }
  },
  plugins: [
    tailwindcss(),
  ],
})