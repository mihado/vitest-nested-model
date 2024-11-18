import vue from '@vitejs/plugin-vue2';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [vue()],
    server: {
        host: true,
        port: 8080,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    test: {
        include: ['tests/unit/**/**/*.spec.js'],
    }
})
