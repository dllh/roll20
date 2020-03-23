;(function(){
    "use strict";
    
    var baseCopper = 10;
    var maxCopper = Math.pow( baseCopper, 20 );
    
    var BoxStyle = "<div style='box-shadow: 3px 3px 2px #000000; font-family: Verdana; fontWeight: bold; vertical-align: middle; padding: 2px 2px; margin-top: 0.2em; border: 1px solid #000; border-radius: 8px 8px 8px 8px; color: #000000; background-color: #FFFFFF;'>";
    
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

            if ( copper > maxCopper ) {
                copper = maxCopper;
            }
            
            var gold = Math.floor( copper / 100 );
            if ( gold > 0 ) {
                copper -= gold * 100;
            }
            
            var silver = Math.floor( copper / 10 );
            if ( silver > 0 ) {
                copper -= silver * 10;
            }
                
            if ( copper > 0 ) {
                copper = Math.floor( copper );
            }
            
            return {
              gold: gold,
              silver: silver,
              copper: copper
            };
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
                    //text += '<li>count: ' + count + '; hoardSize: ' + hoardSize + '; treasure: ' + treasure['copper'] + '</li>';
                    text += `<li>${treasure['gold']}<span style="color: #af9500;">gp</span>, ${treasure['silver']}<span style="color:#b4b4b4;">sp</span>, ${treasure['copper']}<span style="color: #AD8A56;">cp</span></li>`;
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
