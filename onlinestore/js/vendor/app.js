(function () {
	var app = angular.module('store', []);

	app.controller('StoreController',  function(){
		this.gamesps4 = PS4;
		this.gamesxbox = XBOX;	
		this.gameswiiu = WIIU;	
		
	});

	var PS4 = [
		{
			number: 2,
			name: 'FFXIII-2',
			price: 49.99,
			canPurchase: true,
			soldOut: false,
				images: [
					{
						full: 'images/gem-01.gif',
						thumb: 'img/tmb/ffxivtmb.jpg'
					}			]
		},
		{
			number: 3,
			name: 'FIFA 2014',
			price: 49.99,
			canPurchase: false,
			soldOut: false,
				images:[
					{
						full: 'images/gem-02.gif',
						thumb: 'img/tmb/fifa2014tmb.jpg'
					}
				]
		},
		{
			number: 4,
			name: 'PES 2014',
			price: 49.99,
			canPurchase: false,
			soldOut: false,
				images:[
					{
						full: 'images/gem-02.gif',
						thumb: 'img/tmb/pesps3tmb.jpg'
					}
				]
		},
		{
			number: 5,
			name: 'MV VS CP 3',
			price: 49.99,
			canPurchase: false,
			soldOut: false,
				images:[
					{
						full: 'images/gem-02.gif',
						thumb: 'img/tmb/marvelvscapcomps3tmb.jpg'
					}
				]
		}
	];

	var XBOX = [
		{
			number: 2,
			name: 'WATCH DOGS',
			price: 49.99,
			canPurchase: true,
			soldOut: false,
				images: [
					{
						full: 'images/gem-01.gif',
						thumb: 'img/tmb/watchxboxtmb.png'
					}			]
		},
		{
			number: 3,
			name: 'FIFA 2014',
			price: 49.99,
			canPurchase: false,
			soldOut: false,
				images:[
					{
						full: 'images/gem-02.gif',
						thumb: 'img/tmb/fifa2014xboxtmb.jpg'
					}
				]
		},
		{
			number: 4,
			name: 'PES 2014',
			price: 49.99,
			canPurchase: false,
			soldOut: false,
				images:[
					{
						full: 'images/gem-02.gif',
						thumb: 'img/tmb/pesxboxtmb.jpg'
					}
				]
		},
		{
			number: 5,
			name: 'MV VS CP 3',
			price: 49.99,
			canPurchase: false,
			soldOut: false,
				images:[
					{
						full: 'images/gem-02.gif',
						thumb: 'img/tmb/marvelvscapcomxboxtmb.jpg'
					}
				]
		}
	];

	var WIIU = [
		{
			number: 2,
			name: 'DONKEY KONG',
			price: 49.99,
			canPurchase: true,
			soldOut: false,
				images: [
					{
						full: 'images/gem-01.gif',
						thumb: 'img/tmb/donkeytmb.jpg'
					}			]
		},
		{
			number: 3,
			name: 'MARIO KART',
			price: 49.99,
			canPurchase: false,
			soldOut: false,
				images:[
					{
						full: 'images/gem-02.gif',
						thumb: 'img/tmb/mariokarttmb.jpg'
					}
				]
		},
		{
			number: 4,
			name: 'MARIO WORLD',
			price: 49.99,
			canPurchase: false,
			soldOut: false,
				images:[
					{
						full: 'images/gem-02.gif',
						thumb: 'img/tmb/mariotmb.jpg'
					}
				]
		},
		{
			number: 5,
			name: 'TL OF ZELDA',
			price: 49.99,
			canPurchase: false,
			soldOut: false,
				images:[
					{
						full: 'images/gem-02.gif',
						thumb: 'img/tmb/zeldatmb.jpg'
					}
				]
		}
	];
})();	 	