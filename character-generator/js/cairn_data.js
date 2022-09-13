gen_data['character'] = [
  'Sei <i> {name} {surname}</i>, precedentemente un {background}. Hai un fisico {physique}, pelle {skin}, capelli {hair}, e una faccia {face}. Parli in modo {speech} e indossi vestiti {clothing}. Sei {vice} ma {virtue} e generalmente considerato {reputation}. Hai avuto la sfortuna di essere {misfortune}.'
]

gen_data['name'] = [
'Agune'
, 'Beatrice'
, 'Breagan'
, 'Bronwyn'
, 'Cannora'
, 'Drelil'
, 'Elgile'
, 'Esme'
, 'Griya'
, 'Henaine'
, 'Lirann'
, 'Lirathil'
, 'Lisabeth'
, 'Moralil'
, 'Morgwen'
, 'Sybil'
, 'Theune'
, 'Wenain'
, 'Ygwal'
, 'Yslen'
, 'Arwel'
, 'Bevan'
, 'Boroth'
, 'Borrid'
, 'Breagle'
, 'Breglor'
, 'Canhoreal'
, 'Emrys'
, 'Ethex'
, 'Gringle'
, 'Grinwit'
, 'Gruwid'
, 'Gruwth'
, 'Gwestin'
, 'Mannog'
, 'Melnax'
, 'Orthax'
, 'Triunein'
, 'Wenlan'
, 'Yirmeor'
]

gen_data['surname'] = [
'Abernathy'
, 'Addercap'
, 'Burl'
, 'Candlewick'
, 'Cormick'
, 'Crumwaller'
, 'Dunswallow'
, 'Getri'
, 'Glass'
, 'Harkness'
, 'Harper'
, 'Loomer'
, 'Malksmilk'
, 'Smythe'
, 'Sunderman'
, 'Swinney'
, 'Thatcher'
, 'Tolmen'
, 'Weaver'
, 'Wolder'
]

gen_data['background'] = [
  'Alchimista'
, 'Fabbro'
, 'Macellaio'
, 'Scassinatore'
, 'Carpentiere'
, 'Chierico'
, 'Scommettitore'
, 'Becchino'
, 'Erborista'
, 'Cacciatore'
, 'Mago'
, 'Mercenario'
, 'Mercante'
, 'Minatore'
, 'Fuorilegge'
, 'Artista'
, 'Borseggiatore'
, 'Contrabbandiere'
, 'Servitore'
, 'Ranger'
]

gen_data['physique'] = [
  'atletico'
, 'muscoloso'
, 'corpulento'
, 'longilineo'
, 'massiccio'
, 'gracile'
, 'basso'
, 'statuario'
, 'robusto'
, 'imponente'
]

gen_data['skin'] = [
  'con una voglia'	
  ,  'scura'
  ,  'flaccida'
  ,  'butterata' 
  ,  'rosea'
  ,  'morbida'
  ,  'liscia'	
  ,  'abbronzata'
  ,  'tatuata'  	
  ,  'segnata' 	
]

gen_data['hair'] = [
  'calvi'
,  'Intrecciati'
,  'ricci'
,  'sporchi'
,  'crespi'
,  'lunghi'
,  'voluminosi'
,  'grassi'
,  'mossi'
,  'sparsi'
]

gen_data['face'] = [
  'ossuta'
,  'rotta'
,  'cesellata'
,  'allungata'
,  'pallida'
,  'perfetta'
,  'da topo'
,  'appuntita'
,  'quadrata'
,  'infossata'
]

gen_data['speech'] = [
  'schietta'
,  'profonda'
,  'misteriosa'
,  'monotona'
,  'formale'
,  'greve'
,  'precisa'
,  'stridula'
,  'balbettante'
,  'bisbigliante'
]

gen_data['clothing'] = [
  'antichi'
,  'insanguinati'
,  'eleganti'
,  'sporchi'
,  'esotici'
,  'logori'
,  'sgargianti'
,  'di livrea'
,  'fetidi'
,  'sudici'
]

gen_data['virtue'] = [
  'Ambizioso'
,  'Cauto'
,  'Coraggioso'
,  'Disciplinato'
,  'Socievole'
,  'Onorevole'
,  'Umile'
,  'Compassionevole'
,  'Sereno'
,  'Tollerante'
]

gen_data['vice'] = [
  'aggressivo'
,  'scorbutico'
,  'vile'
,  'bugiardo'
,  'avido'
,  'pigro'
,  'nervoso'
,  'rude'
,  'vanitoso'
,  'vendicativo'
]

gen_data['reputation'] = [
  'ambizioso'
,  'zoticone'
,  'pericoloso'
,  'intrattenitore'
,  'onesto'
,  'fannullone'
,  'eccentrico'
,  'ripugnante'
,  'rispettato'
,  'saggio'
]

gen_data['misfortune'] = [
  'abbandonato'
,  'assuefatto'
,  'ricattato'
,  'condannato'
,  'maledetto'
,  'truffato'
,  'declassato'
,  'screditato'
,  'ripudiato'
,  'ripudiato'
]

gen_data['equipment'] = [
  'armatura: {armor}<br>Elmo/Scudo: {helmet}<br>Armi: {weapons}<br>Oggetti: {tool,gear,trinket}<br>Oggetto bonus: {bonus}'
]
gen_data['armor'] = {
  '1-3': 'Nessuna protezione',
  '4-14': 'Brigantina (1 Armatura, ingombrante)',
  '15-19': 'Cotta di Maglia (2 Armatura, ingombrante)',
  '20': 'Piastre (3 Armatura, ingombrante)'
}

gen_data['helmet'] = {
  '1-13': ', né elemo né scudo',
  '14-16': ', un Elmo (+1 Armatura)',
  '17-19': ', uno Scudo (+1 Armatura)',
  '20': ', un Elmo (+1 Armatura) e uno Scudo (+1 Armatura)'
}

gen_data['weapons'] = {
'1-10':'{wgroup1}',
'11-14':'{wgroup2}',
'15-19':'{wgroup3}',
'20':'{wgroup4}'
}

gen_data['wgroup1'] = ['Pugnale', 'Randello', 'Falcetto', 'Bastone']
gen_data['wgroup2'] = ['Spada', 'Mazza', 'Ascia']
gen_data['wgroup3'] = ['Arco (ingombrante)', 'Balestra (ingombrante)', 'Fionda']
gen_data['wgroup4'] = ['Alabarda (ingombrante)', 'Martello da guerra (ingombrante)', 'Ascia da guerra (ingombrante)']

gen_data['armor_weapons'] = {
  '1-10':'{armor}',
  '11-20':'{weapons}'
}

gen_data['tool_trinket'] = {
  '1-10':'{tool}',
  '11-20':'{trinket}'
}

gen_data['bonus'] = {
  '1-6': '{tool_trinket}',
  '7-13': '{gear}',
  '14-17': '{armor_weapons}',
  '18-20': 'Libro di incantesimi contenente un incantesimo \'{spellbook}\''
}

gen_data['tool'] = [
  'Bellows'
  ,  'Bucket (stacks)'
  ,  'Caltrops'
  ,  'Chalk'
  ,  'Chisel'
  ,  'Cook Pots'
  ,  'Crowbar'
  ,  'Drill (Manual)'
  ,  'FishingRod'
  ,  'Glue (stacks)'
  ,  'Grease'
  ,  'Hammer'
  ,  'Hourglass'
  ,  'Metal File (stacks)'
  ,  'Nails (stacks)'
  ,  'Net (stacks)'
  ,  'Saw'
  ,  'Sealant'
  ,  'Shovel'
  ,  'Tongs'
]

gen_data['trinket'] = [
  'Bottle'
,  'Card Deck (stacks)'
,  'Dice Set (stacks)'
,  'Face Paint'
,  'Fake Jewels (stacks)'
,  'Horn'
,  'Incense (stacks)'
,  'Instrument'
,  'Lens'
,  'Marbles (stacks)'
,  'Mirror'
,  'Perfume'
,  'Quill &  Ink'
,  'Salt Pack (stacks)'
,  'Small Bell'
,  'Soap (stacks)'
,  'Sponge'
,  'Tar Pot'
,  'Twine (stacks)'
,  'Whistle'
]

gen_data['gear'] = [
  'Air Bladder'
,  'Antitoxin'
,  'Cart (+4 slots, bulky)'
,  'Chain (10ft)'
,  'Dowsing Rod'
,  'Fire Oil'
,  'Grappling Hook '
,  'Large Sack'
,  'Large Trap'
,  'Lockpicks'
,  'Manacles'
,  'Pick'
,  'Pole (10ft)'
,  'Pulley'
,  'Repellent'
,  'Rope (25ft)'
,  'Spirit Ward'
,  'Spyglass'
,  'Tinderbox'
,  'Wolfsbane '
]

gen_data['spellbook'] = [
  'Adhere'
,  'Anchor'
,  'Animate Object'
,  'Anthropomorphize'
,  'Arcane Eye'
,  'Astral Prison'
,  'Attract'
,  'Auditory Illusion'
,  'Babble'
,  'Bait Flower'
,  'Beast Form'
,  'Befuddle'
,  'Body Swap'
,  'Charm'
,  'Command'
,  'Comprehend'
,  'Cone of Foam'
,  'Control Plants'
,  'Control Weather'
,  'Cure Wounds'
,  'Deafen'
,  'Detect Magic'
,  'Disassemble'
,  'Disguise'
,  'Displace'
,  'Earthquake'
,  'Elasticity'
,  'Elemental Wall'
,  'Filch'
,  'Flare'
,  'Fog Cloud'
,  'Frenzy'
,  'Gate'
,  'Gravity Shift'
,  'Greed'
,  'Haste'
,  'Hatred'
,  'Hear Whispers'
,  'Hover'
,  'Hypnotize'
,  'Icy Touch'
,  'Identify Owner'
,  'Illuminate'
,  'Invisible Tether'
,  'Knock'
,  'Leap'
,  'Liquid Air'
,  'Magic Dampener'
,  'Manse'
,  'Marble Craze'
,  'Masquerade'
,  'Miniaturize'
,  'Mirror Image'
,  'Mirrorwalk'
,  'Multiarm'
,  'Night Sphere'
,  'Objectify'
,  'Ooze Form'
,  'Pacify'
,  'Phobia'
,  'Pit'
,  'Primal Surge'
,  'Push/Pull'
,  'Raise Dead'
,  'Raise Spirit'
,  'Read Mind'
,  'Repel'
,  'Scry'
,  'Sculpt Elements'
,  'Sense'
,  'Missile Shield'
,  'Shroud'
,  'Shuffle'
,  'Sleep'
,  'Slick'
,  'Smoke Form'
,  'Sniff'
,  'Snuff'
,  'Sort'
,  'Spectacle'
,  'Spellsaw'
,  'Spider Climb'
,  'Summon Cube'
,  'Swarm'
,  'Telekinesis'
,  'Telepathy'
,  'Teleport'
,  'Target Lure'
,  'Thicket'
,  'Summon Idol'
,  'Time Control'
,  'True Sight'
,  'Upwell'
,  'Vision'
,  'Visual Illusion'
,  'Ward'
,  'Web'
,  'Widget'
,  'Wizard Mark'
,  'X-Ray Vision'
]
