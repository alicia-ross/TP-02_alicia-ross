import { resolve } from 'path'

export default {
    root: resolve(__dirname, 'src'),
    build: {
    outDir: '../dist',
    rollupOptions: {
        input: {
        index: './src/index.html',
        chien: './src/chien.html',
        about: './src/apropos.html',
        contact: './src/contact.html',
        }
    }
    },
    server: {
        port: 8080
    }
}