import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
    plugins: [react(), viteTsconfigPaths(), svgrPlugin(), eslint()],
    resolve: {
        alias: [
            { find: '@', replacement: '/src' },
            { find: '@components', replacement: '/src/components' },
            { find: '@constants', replacement: '/src/constants' },
            { find: '@hooks', replacement: '/src/hooks' },
            { find: '@pages', replacement: '/src/pages' },
            { find: '@redux', replacement: '/src/redux' },
            { find: '@utils', replacement: '/src/utils' },
            { find: '@public', replacement: '/public' },
        ],
    },
    build: {
        outDir: 'build',
    },
    server: {
        port: 3000,
    },
});
