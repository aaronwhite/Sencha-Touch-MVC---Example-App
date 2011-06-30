Ext.reg("ClimbsIndex", Ext.extend(Ext.Panel, {
  layout: 'fit',
   dockedItems: [
      {
        xtype: 'toolbar',
        title: 'Climbs',       
      }
   ],
     
   items:[
      {
        xtype: 'list',
        store: 'AllClimbs',        
        itemTpl: '{difficulty} - {date}',
        onItemDisclosure: function(record) {
          Ext.dispatch({
            controller: 'climbs',
            action: 'view',
            historyUrl: 'climbs/view/' + record.data.id,
            record: record
          });
        }   
      }
   ]
}));