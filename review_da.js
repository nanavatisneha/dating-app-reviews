var gplay = require('google-play-scraper');
var i;
var yay=[];
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var rem=500;
for (i = 0; i < 500; i++) { 
	gplay.reviews({
	  // appId: 'com.bumble.app',
	  // appId: 'com.tinder',
	  // appId: 'com.okcupid.okcupid', 
	  appId: 'com.ftw_and_co.happn', 
	  page: i,
	  sort: gplay.sort.NEWEST
	}).then(function(response){
	yay=yay.concat(response);
	--rem;
	if (rem<=0){
		console.log(JSON.stringify(yay));
	}
});

	sleep(10000);
}
