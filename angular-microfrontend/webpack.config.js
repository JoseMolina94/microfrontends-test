const { share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'angular-frontend',

  exposes: {
    './MyAngularModule': './src/app/my-angular-module/my-angular-module.module.ts',
  },

  shared: {
    ...share({
      '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    }),
  },
  
  output: {
    publicPath: 'http://localhost:3001/',
  },

});