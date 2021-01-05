import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import filesize from 'rollup-plugin-filesize';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      del({
        targets: ['dist/*'],
      }),
      typescript(),
      filesize(),
      resolve(),
      commonjs(),
    ],
    external: [
      ...Object.keys(pkg.dependencies || {
      }),
      ...Object.keys(pkg.peerDependencies || {
      }),
    ],
  },
];
