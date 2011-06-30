Ext.reg("WelcomeIndex", Ext.extend(Ext.Panel, {
   layout:'fit',
   
   dockedItems: [
      {
        xtype: 'toolbar',
        title: 'Welcome'
      }
   ],
   

   html: '<div class="welcome">Welcome to the best app ever!</div>',
  
}));