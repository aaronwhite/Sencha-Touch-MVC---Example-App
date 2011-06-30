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
                  animation: {type:'slide', direction:'down'}
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
                          animation: {type:'slide', direction:'down'}
                      });
                  }
              }
          }
        ]
      }
   ],
   
  items: [
    {
        xtype: 'selectfield',
        name: 'difficulty',
        label: 'Difficulty',
        options: [
          {
            text: 'Hard',
            value: 'hard'
          }, 
          {
            text: 'Easy',
            value: 'easy'
          }, 
          {
            text: 'Medium',
            value: 'medium'
          }, 
          {
            text: 'Impossible',
            value: 'impossible'
          },
          , 
          {
            text: 'Cake walk',
            value: 'cake_walk'
          }  
        ]
    },
    {
        xtype: 'datepickerfield',
        name: 'date',
        label: 'Date',
        picker: { yearFrom: 2011 }
    }
   ]
}));