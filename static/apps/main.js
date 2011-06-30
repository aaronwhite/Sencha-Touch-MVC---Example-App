Ext.regApplication({
    name: 'app',
    defaultUrl: 'welcome/index',
    launch: function() {
      app.views.viewport = new app.views.Viewport();
    }
});