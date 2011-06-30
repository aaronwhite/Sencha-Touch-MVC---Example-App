Ext.regController("welcome", {
    
  init: function(){
    this.indexView = this.render({
      xtype: 'WelcomeIndex',
    });    
  },
  
  index: function() {
    app.views.viewport.setActiveItem(this.indexView, {type:'fade'});
  },
  
});