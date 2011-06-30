Ext.regController("climbs", {
    
  init: function(){
    this.indexView = this.render({
      xtype: 'ClimbsIndex'
    });           
  },
  
  index: function(options){
    app.views.viewport.setActiveItem(this.indexView, options.animation);
  }  

});