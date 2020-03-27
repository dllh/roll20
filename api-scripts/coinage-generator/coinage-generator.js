;(function(){
	"use strict";
	
	var baseCopper = 10;
	var maxCopper = Math.pow( baseCopper, 20 );
	
	var BoxStyle = "<div style='box-shadow: 3px 3px 2px #000000; font-family: Verdana; fontWeight: bold; vertical-align: middle; padding: 2px 2px; margin-top: 0.2em; border: 1px solid #000; border-radius: 8px 8px 8px 8px; color: #000000; background-color: #FFFFFF;'>";
	
	// Items to add semi-randomly to the treasure list sometimes.
	var items = {
		'copper'   : [ 'whetstone', 'piece of chalk', 'flask', 'pipe', 'mess kit', 'piton', 'candle', 'bar of soap', 'signal whistle', 'torch', '10 feet of string', 'tinderbox' ],
		'silver'   : [ 'fishing tackle', 'grappling hook', 'hooded lantern', 'quiver', 'signet ring', 'two-person tent', 'silk rope (50 feet)', 'mining pick', 'ink (1 oz bottle)', 'holy symbol' ],
		'gold'	 : [ 'bag of 500 ball bearings', 'bell', 'bag of 20 caltrops', 'map case', 'crowbar', 'lock with key', 'sheaf of 50 sheets of paper', 'potion of healing', 'hourglass (25gp)', 'component pouch', 'climbing kit', 'book', 'vial of acid', 'abacus' ],
		'platinum' : [ 'spellbook', 'vial of antitoxin', 'vial of acid', 'vial of poison', 'potion of heroism', 'potion of greater healing' ]
	};
	
	on('chat:message', function(msg) {
		if('api' !== msg.type){
			return;
		}
		
		let cmds = msg.content.split(/\s+/);
		
		if(cmds[0] === '!treasure') {
			treasure();
		}
		
		function countMoney( hoardSize ) {
			
			var lowerRange = Math.pow( baseCopper, hoardSize - 1);
			var upperRange = Math.pow( baseCopper, hoardSize );
			
			var copper = Math.floor( Math.random() * ( upperRange - lowerRange ) ) + lowerRange;

			var data = {
				copper: 0,
				silver: 0,
				gold:   0
			};

			if ( copper > maxCopper ) {
				copper = maxCopper;
			}
			
			var gold = Math.floor( copper / 100 );
			if ( gold > 0 ) {
				data['gold'] = gold;
				copper -= gold * 100;
				// Add an item from the gold or platinum item lists one out of 
				// ten times if we don't already have an item in the list.
				if ( copper % 10 == 1 && !_.has( data, 'item' ) ) {
					if ( gold > 500 ) {
						data['item'] = _.sample( items['platinum'] );
					} else {
						data['item'] = _.sample( items['gold'] );
					}
				}
			}
			
			var silver = Math.floor( copper / 10 );
			data['silver'] = silver;
			if ( silver > 0 ) {
				copper -= silver * 10;
				// Add an item from the silver list one out of ten times
				// if we don't already have an item in the list.
				if ( copper % 10 == 1 && !_.has( data, 'item' ) ) {
					data['item'] = _.sample( items['silver'] );
				}
			}
				
			if ( copper > 0 ) {
				data['copper'] = copper;
				copper = Math.floor( copper );
				// Add an item from the copper list one out of ten times
				// if we don't already have an item in the list.
				if ( copper % 10 == 1 && !_.has( data, 'item' ) ) {
					data['item'] = _.sample( items['copper'] );
				}
			}
			
			return data;
		}
		
		function treasure(){
			if('!treasure' === cmds.shift()){
				if ( 'help' === cmds[0] ){
				  usage();   
				  return;
				}
				
				var treasure;
				var message;
				var hoardSize = parseInt(cmds.shift() || 1 ) ;
				var count = parseInt( (cmds.shift() || 1) );
				
				var text = '<p>Treasure found:</p><ol>';
				for ( var i = 0; i < count; i++ ) {
					treasure = countMoney( hoardSize );
					if ( _.has( treasure, 'item' ) ) {
						treasure['item'] = ', ' + treasure['item'];
					} else {
						treasure['item'] = '';
					}

					text += `<li>${treasure['gold']}<span style="color: #af9500;">gp</span>, ${treasure['silver']}<span style="color:#b4b4b4;">sp</span>, ${treasure['copper']}<span style="color: #AD8A56;">cp</span>${treasure['item']}</li>`;
				}
				text += '</ol>';
				

				sendChat( 'GM', `/w gm ${BoxStyle}${text}</div>`)
				
			}
		}
		
		function usage(){
			sendChat('GM',`/w gm <div>Usage: <br /><code>!trasure [hoardSize] [count]</code><br />Available options:<br /><ul><li><b>hoardSize:</b> How big should the hoard be? Calculation raises ${baseCopper} to the specified power to determine the upper bound of the value in copper pieces. Defaults to 1.</li><li><b>count</b>: How many batches of treasure (e.g. how many NPCs looted?)? Defaults to 1.</li></ul></div>`);
		}
	} );
	
	log( 'Treasure Generator Ready! Command: !treasure, or !treasure help')
	
}());
