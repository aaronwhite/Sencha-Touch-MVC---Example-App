Ext.reg("WelcomeIndex", Ext.extend(Ext.Panel, {
   layout:'fit',
   
   dockedItems: [
      {
        xtype: 'toolbar',
        title: 'Welcome'
      }
   ],
   

   html: '<div class="welcome">Welcome to the best app ever! Tap anywhere to start</div>',

   listeners: {
     afterrender: function (c) {
         c.el.on('click', function () {
           Ext.dispatch({
             controller: 'welcome',
             action: 'startUsing'
           });
         })
      }
   },
   
   cardSwitchAnimation: {
     type: 'pop',
     scaleOnExit: true
   },
  
}));