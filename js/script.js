new Vue({
	el:'.content',
	data:{
		yastvoq:'Котэ не одобряет?',
		productname:'Нямушка',
		cats:[
			{available:true, mit:'фуф-гра',porcii:10,bonus:'мышь в подарок',size:0.5,descr2:'Печень утки разварная с артишоками.'},
			{available:true,mit:'рыбой',porcii:40,bonus:'<strong>2</strong> мыши в подарок',size:2,descr2:'Головы щучьи с чесноком да свежайшая сёмгушка.'},
			{available:false,mit:'курой',porcii:100,bonus:'<strong>5</strong> мышей в подарок<br/>заказчик доволен',size:5,descr2:'Филе из цыплят с трюфелями в бульоне.'}
		],
	},
	created:function(){
		for(var i=0;i<this.cats.length;i++){
			Vue.set(this.cats[i],'sel',false);
			Vue.set(this.cats[i],'afterhover',false);
		}
			
		console.log('das');
	},
	methods:{
		hoverel:function(cat,e){
			//  ловим выход именно из элемента 
			if (e.relatedTarget.children)
			for (var k in e.relatedTarget.children)
				if(e.relatedTarget.children[k] == e.target)
					cat.afterhover=false;
			
			
		},
		makeselected:function (cat){

			cat.sel=!cat.sel&&cat.available;
			if (cat.sel)
				cat.afterhover=true;
		},
	}
});