Ext.regController("welcome", {
    
  init: function(){
    this.indexView = this.render({
      xtype: 'WelcomeIndex',
    });    
  },
  
  index: function(options) {
    app.views.viewport.setActiveItem(this.indexView);
  },
  
  startUsing: function(e, target) {
    Ext.dispatch({
      controller: 'climbs',
      action    : 'index',
      animation: {type:'slide', direction:'left'},
      historyUrl: 'climbs/index'
    });
  }

});