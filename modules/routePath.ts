import { defineNuxtModule } from '@nuxt/kit'
export default defineNuxtModule({
    setup(options, nuxt) {
        nuxt.hook('pages:extend', (route) => {
            route.forEach(item => {
                if (item.path == '/') {
                    item.path = item.path + 'index.html'
                } else {
                    item.path = item.path + '.html'
                }
            })
        });
    }
})