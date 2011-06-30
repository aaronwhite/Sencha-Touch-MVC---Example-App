app.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    
    dockedItems: [
      {
        xtype: 'toolbar',
        title: 'Rock Log',
      },
    ],
});