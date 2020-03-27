;(function(){
	"use strict";
	
	var vendors = {
	  'inn'	: { 
		  'adj'  : [ 'Potent', 'Hungry', 'Sleepy', 'Resting', 'Rested', 'Green', 'Groaning', 'Happy', 'Fargone', 'Homesick', 'Somnolent', 'Graceful', 'Lusty', 'Drunken', 'Staggering', 'Filthy', 'Reeling', 'Salty', 'Frosty', 'Lucky', 'Besotted', 'Dangerous', 'Fighting', 'Thundering', 'Farting', 'Gray', 'Bitter', 'Happy', 'Sodden', 'Black', 'Gray', 'Spotted', 'Roaring', 'Pissing', 'Valiant', 'Wandering' ],
		  'noun' : [ 'Haven', 'Hovel', 'Hostel', 'Wanderer', 'Ape', 'Pilgrim', 'Wayfarer', 'Soul', 'Swan', 'Sheep', 'Stag', 'Vagrant', 'Duck', 'Dog', 'Wench', 'Tankard', 'Cup', 'Mug', 'Bachelor', 'Swine', 'Widow', 'Vagabond', 'Mouse', 'Knight', 'Drunkard', 'Goat', 'Wolf', 'Arsehole', 'Lantern', 'Hornet', 'Egg', 'Pony', 'Alehouse', 'Cask', 'Bunghole', 'Crab', 'Lion' ]
	  },
	  'apothecary': { 
		  'adj'  : [ 'Cautious', 'Steady', 'Earthen', 'Rainbow', 'Poisoned', 'Burning', 'Bubbling', 'Black', 'Stone', 'Screaming', 'Lulling' ],
		  'noun' : [ 'Cask', 'Root', 'Herb', 'Jar', 'Tincture', 'Junip', 'Alum', 'Elixir', 'Pestle', 'Boil', 'Gout', 'Fever', 'Powder', 'Digestive', 'Cure', 'Poison', 'Vial', 'Man', 'Woman', 'Halfling' ]
	  },
	  'butcher'   : { 
		  'adj'  : [ 'Bloody', 'Fatty', 'Well-Hung', 'Tasty', 'Very Clean', 'Marbled', 'Little', 'Ruddy', 'Angry', 'Tasty', 'Edible', 'Branded', 'Running', 'Pastured', 'Butchered', 'Chopped', 'Flayed', 'Screaming', 'Flaming', 'Cloven' ],
		  'noun' : [ 'Calf', 'Lamb', 'Rack', 'Rib', 'Butcher', 'Block', 'Swine', 'Ram', 'Joint', 'Beef', 'Hoof', 'Chop', 'Loin', 'Corpse', 'Offal', 'Goose', 'Bull', 'Rat', 'Cleaver', 'Bone', 'Marrow', 'Turkey', 'Apron', 'Gullet', 'Shank', 'Pizzle' ]
	  },
	  'stable'	: { 
		  'adj'  : [ 'Steady', 'Trotting', 'Prancing', 'Quicksilver', 'Reliable', 'Purple', 'Well-worn', 'Seasoned', 'Charging', 'Fastest', 'Cheapest', 'Noble' ],
		  'noun' : [ 'Mount', 'Ride', 'Cart', 'Ass', 'Buggy', 'Warhorse', 'Dray', 'Stable', 'Saddle', 'Hob', 'Fetlock', 'Hooves', 'Hoof', 'Wagon', 'Wheel', 'Axle' ]
	  },
	  'clothier'  : { 
		  'adj'  : [ 'Dandy', 'Dapper', 'Noble', 'Fancy', 'Gallant', 'Magnificent', 'Decked-Out', 'Alluring', 'Floral', 'Debonair', 'Stuffed', 'Prancing', 'Stunning' ],
		  'noun' : [ 'Bastard', 'Dandy', 'Trader', 'Gentleman', 'Lady', 'Wearhouse', 'Orchid', 'Rose', 'Fop', 'Rambler', 'Dwarf', 'Boot', 'Ruff', 'Stocking', 'Girdle', 'Robe', 'Chapeau', 'Cap', 'Hide', 'Peacock', 'Statue', 'Image' ]
	  },
	  'herbalist' : { 
		  'adj'  : [ 'Purifying', 'Sun-kissed', 'Kissing', 'Curing', 'Earthen', 'Cramped', 'Earthy', 'Cheerful','Bitter', 'Sweetened', 'Healing', 'Soothing' ],
		  'noun' : [ 'Root', 'Shrub', 'Poultice', 'Cure', 'Balm', 'Salve', 'Cramp', 'Wound', 'Heal-All', 'Bud', 'Leaf', 'Stem', 'Thorn', 'Horn', 'Garden', 'Mill', 'Millstone', 'Hoe', 'Spade', 'Pestle' ]
	  },
	  'arcanist'  : { 
		  'adj'  : [ 'Eternal', 'Purblind', 'Steel', 'Clever', 'Diamond', 'Ruby', 'Sapphire', 'Amethyst', 'Pearl', 'Hooded', 'Shadowed', 'Summoned', 'Creeping', 'Celestial', 'Falling', 'Fallen', 'Withered', 'Invulnerable', 'Arcane', 'Magic', 'Mystical', 'Rueful', 'Bloody', 'Healing' ],
		  'noun' : [ 'Artifact', 'Talisman', 'Diamond', 'Ruby', 'Sapphire', 'Amethyst', 'Pearl', 'Eyelid', 'Throat', 'Shadow', 'Shade', 'Face', 'Knuckle', 'Knucklebone', 'Scale', 'Brazier', 'Eye', 'Talon', 'Companion', 'Familiar', 'Rune', 'Stone', 'Arcanist', 'Staff', 'Focus', 'Claw', 'Feather', 'Beak', 'Arcanist', 'Curse', 'Orb', 'Word', 'Vagrant', 'Bolt', 'Flame', 'Tongue', 'Tooth', 'Fang', 'Angel', 'Demon', 'Banshee', 'Fortune' ]
	  },
	  'error'	 : { 
		  'adj'  : [ 'Lazy' ],
		  'noun' : [ 'DM' ]
	  },
	};
	
	var BoxStyle = "<div style='box-shadow: 3px 3px 2px #000000; font-family: Verdana; fontWeight: bold; vertical-align: middle; padding: 4px 4px; margin-top: 0.2em; border: 1px solid #000; border-radius: 8px 8px 8px 8px; color: #000000; background-color: #FFFFFF;'>";
	
	on('chat:message', function(msg) {
		if('api' !== msg.type){
			return;
		}
		
		let cmds = msg.content.split(/\s+/);
		
		if ( cmds[0] === '!vendor') {
			vendor();
		}
		
		function vendor(){
			if ( '!vendor' === cmds.shift() ) {
				if ( cmds.length === 0 || 'help' === cmds[0] ){
				  usage();   
				  return;
				}
				
				var type = ( cmds.shift() || 'error' ).toLowerCase();
				if ( _.has( vendors, type ) ) {
					var adj = _.sample( vendors[type]['adj'] );
					var noun = _.sample( vendors[type]['noun'] );
					sendChat( 'GM', `/w gm ${BoxStyle}The ${adj} ${noun}</div>` );
				}
			}
		}
		
		function usage(){
			sendChat('GM',`/w gm <div><strong>Usage:</strong> <br /><code>!vendor [type]</code><br /><strong>Available options:</strong><code> ${_.keys( vendors ).join('</code>, <code>')}</code></div>`);
		}
	} );
	
	log( 'Vendor Generator Ready! Command: !vendor <type>, or !vendor help')
	
}());
