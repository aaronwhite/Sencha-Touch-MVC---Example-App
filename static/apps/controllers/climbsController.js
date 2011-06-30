Ext.regController("climbs", {
    
  init: function(){
    this.indexView = this.render({
      xtype: 'ClimbsIndex'
    });    
    
    this.newView = this.render({
      xtype: 'ClimbsNew'
    }),
    
    this.viewClimb = this.render({
      xtype: 'ClimbsView'
    })
  },
  
  index: function(options){
    app.views.viewport.setActiveItem(this.indexView, options.animation);
  },
  
  newClimb: function(options){
    app.views.viewport.setActiveItem(this.newView, options.animation);
  },
  
  view: function(options){
    this.viewClimb.update(options.record.data);
    app.views.viewport.setActiveItem(this.viewClimb, options.animation);
  },
  
  save: function(options) {
    var store = Ext.getStore('AllClimbs');
    var climb = this.newView.getValues();
    climb.id = store.getCount() + 1
    var record = Ext.getStore('AllClimbs').add(climb)[0];
    
    Ext.dispatch({
      controller: 'climbs',
      action: 'view',
      historyUrl: 'climbs/view/' + climb.id,
      record: record
    });
  }

});