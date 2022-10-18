import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {        
        file: "dist/index.esm.js",
        format: 'esm'
    },
    plugins: [typescript()]
}