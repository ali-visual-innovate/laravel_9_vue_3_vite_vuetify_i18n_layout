import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from "node:path";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import vuetify from "vite-plugin-vuetify";
import path from 'path'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/sass/main.scss', 'resources/js/main.js'],
            refresh: true,
        }),
        // added this vue plugin to start vue in laravel
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                }
            }
        }),
        // this plugin is imported for treeshaking -- small chunk size for build whenever its required
        vuetify({ autoImport: true }), // Enabled by default
        // added this vueI18nPlugin to define locales
        VueI18nPlugin({
            include: resolve(
                dirname(fileURLToPath(import.meta.url)),
                "./resources/js/locales/**"
            ),
        }),
    ],
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            '@': '/resources/js',
        },
    },
});
