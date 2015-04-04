//this specifies the way in which our custom shortcode injecting TinyMCE button appears.

(function() {
	tinymce.PluginManager.add('BRS_mce_button', function( editor, url ) {
		editor.addButton('BRS_mce_button', {
			text: 'ADD FORM',
			icon: false,
			onclick: function() {
				editor.insertContent('[BRS_contact-form]');
			}
		});
	});
})();
