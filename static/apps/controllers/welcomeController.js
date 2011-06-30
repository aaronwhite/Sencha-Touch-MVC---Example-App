Ext.regController("Welcome", {
    
  init: function(){
    this.indexView = this.render(
      {
        xtype: 'WelcomeIndex',
      }
    );
  },
  
  index: function(options) {
    app.views.viewport.setActiveItem(this.indexView))
  }

});