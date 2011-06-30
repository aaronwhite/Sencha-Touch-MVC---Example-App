Ext.reg("WelcomeIndex", Ext.extend(Ext.Panel, {
   layout:'fit',
   
   dockedItems: [
      {
        xtype: 'toolbar',
        title: 'Welcome'
      }
   ],
   
   items: [
      {
        xtype: 'button',
        text: 'hit me!',

        listeners: {
          tap: function() {
            Ext.dispatch({
              controller: 'welcome',
              action: 'startUsing'
            });
          }
        }
      }
   ]
}));