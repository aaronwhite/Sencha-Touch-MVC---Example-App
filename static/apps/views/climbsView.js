Ext.reg("ClimbsView", Ext.extend(Ext.Panel, {
     
   dockedItems: [
      {
        xtype: 'toolbar',
        title: 'Climb Details',
        items: [
          {
            xtype: 'button',
            text: 'Back',
            ui: 'back',
            listeners: {
              tap: function() {
                Ext.dispatch({
                  controller: 'climbs',
                  action: 'index',
                  historyUrl: 'climbs/index',
                  animation: {type:'slide', direction:'right'}
                });
              }
            }
          },        
        ]
      }
   ],
  
   tpl: '<div class="climb"><p><span>Difficulty:</span> {difficulty}</p><p><span>When:</span> {date}</p></div>'
}));