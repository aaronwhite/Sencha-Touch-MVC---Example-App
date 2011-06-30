Ext.regApplication({
    name: 'app',
    defaultUrl: 'Welcome/index',
    launch: function() {
      app.views.viewport = new app.views.Viewport();
    }
});