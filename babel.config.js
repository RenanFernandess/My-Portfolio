module.exports = {
  presets: [
    ['@babel/preset-env', { modules: 'auto' }],
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
};
