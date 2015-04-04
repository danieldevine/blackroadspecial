
(function() {
	tinymce.PluginManager.add('my_mce_button', function( editor, url ) {
		editor.addButton('my_mce_button', {
			text: 'ADD FORM',
			icon: false,
			onclick: function() {
				editor.insertContent('[BRS_contact-form]');
			}
		});
	});
})();
