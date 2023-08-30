import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
    resolve: {
        alias: [
            { find: '@', replacement: '/src' },
            { find: '@components', replacement: '/src/components' },
            { find: '@constants', replacement: '/src/constants' },
            { find: '@hooks', replacement: '/src/hooks' },
            { find: '@pages', replacement: '/src/pages' },
            { find: '@redux', replacement: '/src/redux' },
            { find: '@utils', replacement: '/src/utils' },
        ],
    },
    server: {
        port: 3000,
    },
});