Ext.regController("climbs", {
    
  init: function(){
    this.indexView = this.render({
      xtype: 'ClimbsIndex'
    });    
        
    this.viewClimb = this.render({
      xtype: 'ClimbsView'
    })
  },
  
  index: function(options){
    app.views.viewport.setActiveItem(this.indexView, options.animation);
  },
    
  view: function(options){
    this.viewClimb.update(options.record.data);
    app.views.viewport.setActiveItem(this.viewClimb, options.animation);
  }  

});