var application = function () {
	var components = new Array();

	components.push(new BaseComponent());

	return {
		getComponentCount: function() {
			return components.length;
		},

		registerComponet: function(component) {
			if (typeof component == 'object') {
				components.push(component);
			}
		}
	};	
}();


var t = new application();
t.registerComponet({name:'cat',age:28});
console.log(t.getComponentCount());