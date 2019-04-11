const moto = document.getElementById('moto');
const roda2 = document.getElementById('rodaFrente');
const roda1 = document.getElementById('rodaAtras');
const caixa = document.getElementById('caixa');
const entre = document.getElementById('entregador');

TweenMax.to([roda1,roda2],.3,{
		rotation: 360,
		transformOrigin: 'center center',
		repeat: -1
	});

const t1 = new TimelineMax();
t1.to(caixa,0.5,{//caixa
		transformOrigin: 'center center',
		y: -10
	},"primeiro").to(caixa,.5,{//caixa
		transformOrigin: 'center center',
		rotation: 20
	},"primeiro+=0.1").to(caixa,.5,{//caixa
		transformOrigin: 'center center',
		y: 42,
		rotation: 0
	},"primeiro+=.1").to(entre,0.1,{//entregador
		transformOrigin: 'center center',
		y: -.1
	},"primeiro").to(entre,0.2,{//entregador
		y: 42
	},"primeiro+=0.2").to(moto,0.1,{//moto
		transformOrigin: 'center center',
		y: 30,
		rotation: -5
	},"primeiro").from(moto,.8,{//moto
		transformOrigin: 'center center',
		y: 30,
		rotation: 0
	},"primeiro+=0.3").to(roda2,.1,{//moto
		transformOrigin: 'center center',
		y: -7,
		x: 7
	},"primeiro").from(roda2,0.5,{
		transformOrigin: 'center center',
		y: 10,
		x: 2
	},"primeiro+=.3");


window.setInterval(function(){
	t1.restart();
}, 3000);
