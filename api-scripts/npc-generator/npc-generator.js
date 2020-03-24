;(function(){
    "use strict";
    
    var genders = ['male', 'female', 'nonbinary'];
    var hairColors = [ 'bald', 'brown', 'gray', 'blond', 'red', 'black', 'salt and pepper' ];
    var hairStyles = [ 'balding', 'bowl cut', 'long', 'short', 'spiked', 'greasy', 'shoulder length', 'Prince Valiant', 'mullet-style', 'dreadlocked', 'center-parted', 'side-parted', 'messy', 'tousled', 'slicked back' ];
    var eyes = [ 'blue', 'green', 'hazel', 'brown', 'blue and green', 'almost black' ];
    var skin = [ 'pink', 'dark brown', 'ruddy', 'light brown', 'tan', 'grayish', 'yellowish' ];
    
    // You notice that they have...
    var features = [ 'a large nose mole', 'a sleepy left eye', 'a sleepy right eye', 'a stye', 'a cold sore', 'a missing finger', 'an extra finger', 'a scar along the nose ridge', 'a pronounced chin divot', 'a cauliflower ear', 'a hand tremor', 'a habit of licking their lips a lot', 'a falsetto voice', 'a speech impediment', 'a necklace made of goblin fingers' ];
    
    // They speak in...
    var voices = [ 'a hoarse whisper', 'a monotone', 'a nasal intonation', 'a gravelly tone', 'a lilt', 'an Irish brogue', 'an overloud tone' ];
    
    // They seem... (good for insight checks and mannerisms)
    var demeanors = ['trustworthy', 'untrustworthy', 'a little shifty', 'very shady', 'eager to help', 'as if they do not wish to be bothered', 'pleasant', 'good humored', 'ill tempered', 'confused', 'sort of pervy', 'sort of stupid' ];

    // They are motivated by...
    var motivations = [ 'money', 'power', 'fame', 'honor', 'the possibility of redemption for past misdeeds', 'simple good nature', 'revenge', 'altruism', 'being well liked', 'spite for someone', 'a desire to impress someone'];
    
    var npcs = {
        dwarf: {
            male: ['Gremryl','Benman','Hjulmond','Balgurn','Beladin','Tynar','Krommir','Thardur','Hjulmus','Adduhr','Beldan','Ragkuhm','Ummun','Tharmin','Dalmar','Bermyr','Ragmyl','Bandrus','Thyrim','Ummond','Dolgrom','Dolnik','Thulgram','Theldan','Tynir','Horgran','Magbek','Bengrim','Therdir','Guldek','Ermkahm','Gerrum','Branrik','Horgrun','Grilnur','Thykom','Gardus','Balrak','Thurdar','Thurnar','Rotdrus','Ragdain','Ebdram','Mordan','Kargran','Doldrum','Murrus','Ragdrom','Amduhr','Raggus'],
            female: ['Brilleselle', 'Misnyss', 'Naerres', 'Dimgiel', 'Gemryl', 'Gerleen', 'Lestyn', 'Bryllemyl', 'Maevnyl', 'Kathnyss', 'Tasdryn', 'Lasthel', 'Bellebera', 'Braenrin', 'Naernas', 'Ryntyn', 'Brannera', 'Ketlynn', 'Ketmyla', 'Tysnyl', 'Mystdelle', 'Mystleen', 'Mystdryn', 'Jennsael', 'Brytthel', 'Nassmyla', 'Tisleil', 'Tismura', 'Nesnura', 'Raenwynn', 'Mystdelle', 'Mystleen', 'Mystdryn', 'Jennsael', 'Brytthel', 'Nassmyla', 'Tisleil', 'Tismura', 'Nesnura', 'Raenwynn', 'Bralgwyn', 'Edleil', 'Naermura', 'Tiznera', 'Bronmera', 'Lassnys', 'Maergiel', 'Katra', 'Lessnas', 'Brytla'],
            nonbinary: ["Para","Suriel"],
            family: ['Axerock', 'Koboldgrog', 'Metalbrew', 'Barrelbuster', 'Boulderbow', 'Bloodhand', 'Marblebraid', 'Anvilshaper', 'Chaosfoot', 'Bitterarm', 'Ashsunder', 'Forgeblade', 'Bloodbelly', '    Bitterbelt', 'Forgehide', 'Bronzechin', 'Deepforged', 'Metalstone', 'Kragstone', 'Duskshaper', 'Beryldigger', 'Whithand', 'Lightjaw', 'Hornbuster', 'Heavyfeet', 'Wartoe', 'Brownfall', 'Brownheart', 'Brewguard', 'Berylrock', 'Brewstone', 'Nightjaw', 'Hardcloak', 'Alebelt', 'Cavegranite', 'Chaosfeet', 'Flintbreaker', 'Ironmace', 'Hornfinger', 'Trollborn'],
        },
        
        hafling: {
            male: ['Maura', 'Vulmar', 'Theodulf', 'Lothar', 'Ingund', 'Bingo', 'Berno', 'Saradoc', 'Gorbadoc', 'Mosco', 'Merimas', 'Grimald', 'Polo', 'Berengar', 'Sadoc', 'Gereon', 'Hugo', 'Celedor', 'Tescelin', 'Nevelung', 'Fulrad', 'Godun', 'Goscelin', 'Rudolph', 'Gouzlim', 'Polo', 'Isumbras', 'Ingelram', 'Hildigrim', 'Wilibald', 'Agiulf', 'Rothad', 'Clodio', 'Marco', 'Robur', 'Grifo', 'Wulfram', 'Robin', 'Cerdic', 'Marachar', 'Grimoald', 'Engilbert', 'Ebbo', 'Boso', 'Sigebert', 'Evrard', 'Arnoul', 'Fulk', 'Bilba'],
            female: ['Amber', 'Angelica', 'Fredegunde', 'Audofleda', 'Asphodel', 'Lily', 'Poppy', 'Angelica', 'Austrechild', 'Deuteria', 'Cara', 'Diamanda', 'Rigunth', 'Gudula', 'Clotild', 'Gomatrudis', 'Angelica', 'Brianna', 'Jessamine', 'Radegund', 'Alia', 'Laura', 'Clotilde', 'Ermenberga', 'Samantha', 'Moira', 'Neela', 'Bertha', 'Rose', 'Gisela', 'Shawna', 'Cora', 'Theudelinde', 'Hildegarde', 'Gudule', 'Emma', 'Merofled', 'Miranda', 'Hodierna', 'Begga'],
            nonbinary: ["Pat","Sam"],
            family: ['Greenhill', 'Sackville', 'Bunce', 'Swiftfoot', 'Twofoot', 'Banks', 'Boulderhill', 'Longriver', 'Fairfoot', 'Boffin', 'Dewfoot', 'Goodsong', 'Langham', 'Lothran', 'Bramblethorn', 'Bolger', 'Silentfoot', 'Headstrong', 'Goodwort', 'Heathertoes', 'Brandagamba', 'Maggot', 'Brandybuck', 'Gardner', 'Took-Took', 'Thornburrow', 'Barrowes', 'Butcher', 'Boulderhill', 'Gawkroger', 'Greenhill', 'Hedgehopper', 'Gawkroger', 'Townsend', 'Brownlock', 'Finnagund', 'Noakes', 'Butcher', 'Featherbottom', 'Leafwalker', 'Brandagamba', 'Mugwort', 'Greenh    and', 'Farfoot', 'Oakbottom', 'Hedgehopper'],
        },
        
        human: {
            male: ['Lawrence', 'Elliott', 'Monty', 'Stefan', 'Alfie', 'Zakaria', 'Theo', 'Abraham', 'Angus', 'Ayden', 'Tim', 'Nicklas', 'Edvard', 'Filip', 'Tim', 'Liam', 'Alex', 'Olov', 'Gorm', 'Harshad', 'Ambar', 'Mahadev', 'Vyshnav', 'Nripendra', 'Harihar', 'Prayaag', 'Pankaj', 'Mihir', 'Akhilesh', 'Dequinn', 'Dakuan', 'Jamerrell', 'Trivelle', 'Demarien', 'Anderius', 'Omonteez', 'Dawan', 'Alamar', 'Shawnee', 'Lewis', 'Alexander', 'Ernest', 'Stanley', 'Dan', 'Lester', 'Tyler', 'Louis', 'Ayden', 'Jaden', 'Hunfried', 'Goswin', 'Baldwin', 'Wedekind', 'Bernard', 'Hildebrand', 'Dietrich', 'Astolfo', 'Hademar', 'Siegbald', 'Friedhelm', 'Degenhard', 'Albert', 'Norbert', 'Hildebrand', 'Gerwin', 'Bertrand', 'Bernward', 'Willibald', 'Sachso', 'Wobberen', 'Minas', 'Stefanos', 'Markos', 'Philippos', 'Stergios', 'Angelos', 'Lavrentios', 'Angelos', 'Thanos', 'Platon'],
            female: ['Voula', 'Efimia', 'Melina', 'Kyriaki', 'Yeorgia', 'Zoi', 'Paraskevoula', 'Lambrini', 'Evengelia', 'Athanasia', 'Adowa', 'Awetash', 'Waletta', 'Meharene', 'Heran', 'Besrat', 'Yeshi', 'Deborha', 'Sitina', 'Mimi', 'Deineira', 'Aedon', 'Apseudes', 'Persis', 'Theophania', 'Helice', 'Gorgo', 'Lampetie', 'Aganippe', 'Kephissa', 'Arabella', 'Lydia', 'Aurelia', 'Eva', 'Faith', 'Paige', 'Margot', 'Emily', 'Connie', 'Annabella', 'Ariella', 'Nellie', 'Edith', 'Kate', 'Leah', 'Dorothy', 'Ciara', 'Sasha', 'Alana', 'Flora', 'Rebekah', 'Shiza', 'Naomi', 'Bethel', 'Mara', 'Zillah', 'Micah', 'Shachia', 'Rinnah', 'Eden', 'Kakra', 'Yasmeen', 'Nona', 'Amal', 'Dendera', 'Hafsah', 'Asmaa', 'Bassant', 'Pili', 'Babu'],
            nonbinary: ['Pat', 'Sam', 'Logan', 'Noel', 'Skylar', 'Quinn', 'Eli', 'Clem', 'Ryan', 'Jody', 'Gail'],
            family: ['Nicolatis', 'Tripolallis', 'Sperilis', 'Stathilis', 'Nicolopoulos', 'Pepopoulos', 'Chronas', 'Anthellis', 'Rondotis', 'Gallou', 'Lester', 'Koning', 'Booth', 'Hawkins', 'Hamilton', 'Morrison', 'Coffey', 'Hewitt', 'McKenzie', 'Hawkins', 'Holder', 'Frisk', 'Tornquist', 'Holmquist', 'Wallenberg', 'Skoog', 'Lundell', 'Dahlman', 'Axelsson', 'Ahlgren', 'Balaji', 'Paramartha', 'Vyomakesh', 'Upendra', 'Oorjit', 'Ikshu', 'Abhilash', 'Vrisini', 'Amitaabh', 'Jivan', 'McCray', 'Austin', 'Oneal', 'Moss', 'Cooper', 'Mills', 'Burnett', 'Davis', 'Fuller', 'Barber'],
        },
        
        tiefling: {
            male: ['Ozmos', 'Skalius', 'Arkxius', 'Salchar', 'Garrius', 'Kosthor', 'Ralxes', 'Uriris', 'Morshoon', 'Amvius', 'Thynecius', 'Ervir', 'Iamenos', 'Ozxius', 'Dexterity', 'Adventure', 'Extreme', 'Guvius', 'Meemon', 'Aetlech', 'Ekxikas', 'Malchar', 'Urivir', 'Kosichar', 'Hunt', 'Hatred', 'Salrakas', 'Aranthos', 'Damrus', 'Saladius', 'Sirris', 'Thynenon', 'Mavakas', 'Cunning', 'Relentless', 'Ashes'],
            female: ['Sarhala', 'Zaiyola', 'Levxibis', 'Lilfirith', 'Sarhiri', 'Gririssa', 'Ariahala', 'Euphoria', 'Orihiri', 'Margrea', 'Natari', 'Agneyola', 'Orizes', 'Iniwala', 'Natlies', 'Nethuphis', 'Yuhala', 'Velnarei', 'Iniki', 'Yalies', 'Phenise', 'Afmeia', 'Redemption', 'Awe', 'Void', 'Nelyvia', 'Hiswala', 'Quyola', 'Mavine', 'Zaicyra', 'Shalies', 'Ariayola', 'Psalm', 'Euphoria'],
            nonbinary: ["Patha","Samel", 'Gail', 'Kosta', 'Amaria'],
            family: [''],
            // Tieflings have special eye and skin situations, so provide overrides to the defaults.
            skin: ["red", "purple", "gray", "black", "pink", "tan" ],
            eyes: [ "solid red", "solid black", "solid silver", "solid gold", "solid white" ]
            
        }
    };
    
    var BoxStyle = "<div style='box-shadow: 3px 3px 2px #000000; font-family: Verdana; fontWeight: bold; vertical-align: middle; padding: 2px 2px; margin-top: 0.2em; border: 1px solid #000; border-radius: 8px 8px 8px 8px; color: #000000; background-color: #FFFFFF;'>";
    
    on('chat:message', function(msg) {
        if('api' !== msg.type){
            return;
        }
        
        let cmds = msg.content.split(/\s+/);
        
        if(cmds[0] === '!npc') {
            npc();
        }
        
        function npc(){
            if('!npc' === cmds.shift()){
                if ( 'help' === cmds[0] ){
                  usage();   
                  return;
                }
                
                var race = _.sample(_.keys(npcs));
                var gender = _.sample(genders);
                var name = _.sample(npcs[race][gender]);
                var familyName = _.sample(npcs[race]['family']);
                var hairColor = _.sample(hairColors);
                var hairStyle = _.sample(hairStyles);
                var feature = _.sample(features);
                var voice = _.sample(voices);
                var demeanor = _.sample(demeanors);
                var motivation = _.sample(motivations);
                var eyeColor = _.sample(eyes);
                var skinColor = _.sample(skin);

                if(cmds.length){
                    race=(cmds.shift() || '').toLowerCase();
                    if(_.has(npcs,race)){
                        gender=(cmds.shift() || '').toLowerCase();
                        gender = _.has(npcs[race],gender) ? gender : _.sample(genders);

                        name = _.sample(npcs[race][gender]);
                    }
                    
                    if ( _.has(npcs[race],'eyes') ){
                        eyeColor = _.sample( npcs[race]['eyes']);
                    } 
                    
                    if ( _.has(npcs[race],'skin') ){
                        skinColor = _.sample( npcs[race]['skin']);
                    }
                } 
                
                name = name + ' ' + familyName;
                
                sendNPC( name, race, gender, hairColor, hairStyle, eyeColor, skinColor, feature, voice, demeanor, motivation );
                
            }
        }
        
        function sendNPC(name, race, gender, hairColor, hairStyle, eyeColor, skinColor, feature, voice, demeanor, motivation ){
            var hairString = '';

            if ('bald' == hairColor ) {
                hairString = 'no';
            } else {
                hairString = hairColor + ' ' + hairStyle;
            }
            
            var text = `<p><strong>${name}</strong> is a ${gender} <span style="font-color: red;">${race}</span> with ${eyeColor} eyes, ${hairString} hair, and ${skinColor} skin.</p>`;
                text += `<p>You notice that they have <strong>${feature}</strong>. They speak in <strong>${voice}</strong>.</p>`;
                text += `<p>They seem <strong>${demeanor}</strong> and are motivated by <strong>${motivation}</strong>.</p>`;
                       
            sendChat('GM',`/w gm ${BoxStyle}${text}</div>`);
        }
        
        function usage(){
            sendChat('GM',`/w gm <div>Usage: <br /><code>!npc [race] [gender]</code><br />Options are... optional. Available options:<br /><b>race</b>: ${_.keys(npcs).join(', ')}<br /><b>gender:</b> ${_.keys(genders).join(', ')}</div>`);
        }
    } );
    
    log( 'Random Generator Ready! Command: !npc, or !npc help')
    
}());
