app.views.Viewport = Ext.extend(Ext.Panel, {

    fullscreen: true,
    layout: 'card',
    
    initComponent: function() {        
      //put instances of cards into app.views namespace
        Ext.apply(app.views, {
            welcome: new app.views.Welcome(),
        });
        
        //put instances of cards into viewport
        Ext.apply(this, {
          items: [              
            app.views.welcome,
          ]
        });
      
        app.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});