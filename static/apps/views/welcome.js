Ext.reg("WelcomeIndex", Ext.extend(Ext.Panel, {
   layout:'fit',
   items: [
      {
        xtype: 'button',
        text: 'hit me!',

        listeners: {
          tap: function() {
            Ext.dispatch({
              controller: 'Welcome',
              action: 'sayHi'
            });
          }
        }
      }
   ]
}));