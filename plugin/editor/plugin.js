const edit = (element) => {
	element.setAttribute("contentEditable", "true");
	const target = element.closest('section').querySelector('[data-edit]');
	const targetAttributeName = target.getAttribute('data-edit');
	element.addEventListener('keyup', () => {
		const text = element.textContent.split('"')[1]; // the text variable
		target.setAttribute(targetAttributeName, text);
		const style = element.textContent.split(/<style>|<\/style>/)[1]; // the style variable
		const color = style.split(':')[2].split(';')[0]; // the color variable
		const r = document.querySelector(':root');
		r.style.setProperty('--hw-color', color);
	});
};

const Plugin = {

	id: 'editor',

	init: function( reveal ) {

		reveal.getRevealElement().addEventListener( 'click', function( { target } ) {
			if (target.classList.contains('hljs') && target.getAttribute("contentEditable") === null) {
				edit(target);
			}
			if (target.classList.contains('hljs-string')) {
				const parent = target.closest(".hljs");
				if (parent.getAttribute("contentEditable") === null) {
					edit(parent);
				}
			}
		} );

	},

	destroy: () => {

		console.log('zoom zoom bye bye');

	}

};

export default () => Plugin;
