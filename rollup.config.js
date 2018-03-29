import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/flatten-object.ts',
  output: {
    file: 'dist/flatten-object.js',
    format: 'umd',
    name: 'flattenObject',
    sourceMap: true,
  },
  plugins: [typescript()],
}
