const { share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'angularApp',
  filename: 'remoteEntry.js',
  exposes: {
    './UserDetailsComponent': './src/app/user-details/user-details.component.ts'
  },
  shared: share({
    '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: false },
    '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: false },
    '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: false },
    'rxjs': { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: false }
  })
});