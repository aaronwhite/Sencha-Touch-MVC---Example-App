Ext.reg("ClimbsNew", Ext.extend(Ext.form.FormPanel, {
     
   dockedItems: [
      {
        xtype: 'toolbar',
        title: 'New Climb',
        items: [
          {
            xtype: 'button',
            text: 'Cancel',
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
          {
            xtype: 'spacer'
          },
          {
              xtype: 'button',
              text: 'Save',
              listeners: {
                  'tap': function () {
                      Ext.dispatch({
                          controller: 'climbs',
                          action: 'save',
                          historyUrl: 'climbs/index',                          
                          animation: {type:'slide', direction:'right'}
                      });
                  }
              }
          }
        ]
      }
   ],
   
  items: [
    {
      name : 'difficulty',
      label: 'Difficulty',
      xtype: 'textfield'
    },
    {
      name : 'date',
      label: 'Date',
      xtype: 'textfield'
    }
   ]
}));