Ext.define('PartDB2.PartUnitEditor', {
	extend: 'PartDB2.Editor',
	alias: 'widget.PartUnitEditor',
	items: [{
		xtype: 'textfield',
		name: 'name',
		fieldLabel: i18n("Unit Name")
	},{
		xtype: 'textfield',
		name: 'shortName',
		fieldLabel: i18n("Short Name")
	}],
	saveText: i18n("Save Part Unit"),
	model: 'PartDB2.PartUnit'
});
