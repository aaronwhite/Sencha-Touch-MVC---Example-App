Ext.regController("welcome", {
    
  init: function(){
    this.indexView = this.render({
      xtype: 'WelcomeIndex',
    });    
  },
  
  index: function(options) {
    app.views.viewport.setActiveItem(this.indexView, {type:'fade'});
  },
  
  startUsing: function(e, target) {
    Ext.dispatch({
      controller: 'climbs',
      action    : 'index',
      animation: {type:'fade'},
      historyUrl: 'climbs/index'
    });
  }

});