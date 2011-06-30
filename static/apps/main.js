Ext.regApplication({
    name: 'app',
    launch: function() {
      new Ext.Panel({
          fullscreen: true,
          html: 'Sencha Touch has taken over your browser!'
      });
    }
});