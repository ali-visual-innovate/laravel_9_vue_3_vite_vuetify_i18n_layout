import { defineConfig } from 'vite';
import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from "node:path";
import laravel from 'laravel-vite-plugin';
import Vue from '@vitejs/plugin-vue'
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/main.css', 'resources/js/main.js'],
            refresh: true,
        }),
        // added this vue plugin to start vue in laravel
        Vue({
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
            include: resolve(dirname(fileURLToPath(import.meta.url)), './resources/js/locales/**'),
          })
    ],
});
