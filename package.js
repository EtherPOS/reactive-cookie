Package.describe({
  summary: "Reactive cookie support for client",
  // Version number.
  version: "0.0.7",
  // Optional.  Default is package directory name.
  name: "steeve:reactive-cookie",
  // Optional github URL to your source repository.
  git: "https://github.com/EtherPOS/reactive-cookie.git",
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('deps', 'client');
  

  api.addFiles('reactivecookie.js', 'client');
  
  api.export('ReactiveCookie', 'client');
});