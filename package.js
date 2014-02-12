Package.describe({
  summary: "Reactive cookie support for client"
});

Package.on_use(function (api, where) {
  if(api.export) {
    api.use('deps', 'client');
    api.export('ReactiveCookie', 'client');
  }
  api.add_files('reactivecookie.js', 'client');
});