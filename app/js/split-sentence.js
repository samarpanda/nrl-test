class SplitSentence {
	constructor(){
		this.init();
	}

	init(){
		this.items = document.getElementsByClassName('sen');
		for(var i=0; i<this.items.length; i++){
			this.wrapWords(this.items[i]);
		}
	}

	wrapWords(el){
		var content = el.innerHTML;
		var str = content.split(' ').map(function(word){
			return '<span>'+word+'</span>';
		});
		el.innerHTML = str.join(' ');
	}
}

export default new SplitSentence();