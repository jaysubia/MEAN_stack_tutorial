function myOriginalFunction(){
	console.log('Jermaine');
}

function hello(callback){
	var y = setInterval(function(){
	callback();
	}, 4000)
}

hello(myOriginalFunction);
hello(function(){console.log('subia')});