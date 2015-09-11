class HandleComma{
	constructor(){
		this.init();
	}

	init(){
		this.container = document.getElementById('cont');
		this.addListener();
	}

	addListener(){
		this.container.addEventListener('click', (e) => {
			var tar = e.target;
			if(tar.innerHTML.endsWith(",")){
				tar.innerHTML = tar.innerHTML.replace(",", "");
			}else{
				tar.innerHTML = tar.innerHTML + ',';
			}
		});
	}
}

export default new HandleComma();