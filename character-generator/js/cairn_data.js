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
  'alchimista'
, 'artista'
, 'becchino'
, 'cacciatore'
, 'carpentiere'
, 'chierico'
, 'contrabbandiere'
, 'erborista'
, 'fabbro'
, 'fuorilegge'
, 'macellaio'
, 'mago'
, 'mercante'
, 'mercenario'
, 'minatore'
, 'norseggiatore'
, 'ranger'
, 'scassinatore'
, 'scommettitore'
, 'servitore'
]

gen_data['physique'] = [
 'atletico'
, 'basso'
, 'corpulento'
, 'gracile'
, 'imponente'
, 'longilineo'
, 'massiccio'
, 'muscoloso'
, 'robusto'
, 'statuario'
]

gen_data['skin'] = [
   'abbronzata'
,  'butterata' 
,  'con una voglia'	
,  'flaccida'
,  'liscia'	
,  'morbida'
,  'rosea'
,  'scura'
,  'segnata' 	
,  'tatuata'  	
]

gen_data['hair'] = [
  'calvi'
, 'crespi'
, 'grassi'
, 'intrecciati'
, 'lunghi'
, 'mossi'
, 'ricci'
, 'sparsi'
, 'sporchi'
, 'voluminosi'
]

gen_data['face'] = [
  'allungata'
, 'appuntita'
, 'cesellata'
, 'da topo'
, 'infossata'
, 'ossuta'
, 'pallida'
, 'perfetta'
, 'quadrata'
, 'rotta'
]

gen_data['speech'] = [
  'balbettante'
, 'bisbigliante'
, 'formale'
, 'greve'
, 'misteriosa'
, 'monotona'
, 'precisa'
, 'profonda'
, 'schietta'
, 'stridula'
]

gen_data['clothing'] = [
  'antichi'
, 'di livrea'
, 'eleganti'
, 'esotici'
, 'fetidi'
, 'insanguinati'
, 'logori'
, 'sgargianti'
, 'sporchi'
, 'sudici'

]

gen_data['virtue'] = [
  'ambizioso'
, 'cauto'
, 'compassionevole'
, 'coraggioso'
, 'disciplinato'
, 'onorevole'
, 'sereno'
, 'socievole'
, 'tollerante'
, 'umile'
]

gen_data['vice'] = [
  'aggressivo'
, 'avido'
, 'bugiardo'
, 'nervoso'
, 'pigro'
, 'rude'
, 'scorbutico'
, 'vanitoso'
, 'vendicativo'
, 'vile'
]

gen_data['reputation'] = [
  'ambizioso'
, 'eccentrico'
, 'fannullone'
, 'intrattenitore'
, 'onesto'
, 'pericoloso'
, 'ripugnante'
, 'rispettato'
, 'saggio'
, 'zoticone'
]

gen_data['misfortune'] = [
  'abbandonato'
, 'assuefatto'
, 'condannato'
, 'declassato'
, 'maledetto'
, 'ricattato'
, 'ripudiato'
, 'ripudiato'
, 'screditato'
, 'truffato'
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
  'Canna da pesca'
, 'Cesello'
, 'Chiodi'
, 'Clessidrea'
, 'Colla'
, 'Gessetto'
, 'Grasso'
, 'Lima metallica'
, 'Martello'
, 'Pala (7,5m)'
, 'Pentole'
, 'Piede di Porco'
, 'Pinze (7,5m)'
, 'Pinze'
, 'Rete (7,5m)'
, 'Secchio'
, 'Sega (7,5m)'
, 'Sigillante (7,5m)'
, 'Soffietto'
, 'Trapano (manuale)'
]

gen_data['trinket'] = [
  'Biglie'
, 'Bottiglia'
, 'Campanella'
, 'Corno'
, 'Fischietto (7,5m)'
, 'Gioielli falsi'
, 'Incenso'
, 'Lente'
, 'Mazzo di carte'
, 'Pacchetto di sale'
, 'Pennino e inchiostro'
, 'Profumo'
, 'Sapone (7,5m)'
, 'Set di dadi'
, 'Spago (7,5m)'
, 'Specchio'
, 'Spugna (7,5m)'
, 'Strumento'
, 'Trucchi facciali'
, 'Vaso di pece (7,5m)'
]

gen_data['gear'] = [
  'Acciarino'
, 'Aconito'
, 'Amuleto'
, 'Antitossina'
, 'Asta (3m)'
, 'Bastone da rabdomante'
, 'Cannocchiale'
, 'Carretto (+4 slot, ingombrante)'
, 'Carrucola'
, 'Catena (3m)'
, 'Corda (7,5m)'
, 'Grimaldelli'
, 'Manette'
, 'Olio di fuoco'
, 'Piccone'
, 'Rampino'
, 'Repellente'
, 'Sacca d’Aria'
, 'Sacco grande'
, 'Trappola grande'
]

gen_data['spellbook'] = [
  'Adesione'
, 'Affascinare'
, 'Aggeggio'
, 'Ancora'
, 'Animare gli Spiriti'
, 'Animare i Morti'
, 'Animare Oggetto'
, 'Antropomorfismo'
, 'Aria Liquida'
, 'Ascoltare i Sussurri'
, 'Assordare'
, 'Attrarre'
, 'Avidità'
, 'Bagliore'
, 'Balzo'
, 'Blaterare'
, 'Boscaglia'
, 'Bussare'
, 'Camuffamento'
, 'Comando'
, 'Comprensione'
, 'Confusione'
, 'Cono di Schiuma'
, 'Controllare il Tempo'
, 'Controllare Piante'
, 'Controllare Tempo Atmosferico'
, 'Cura Ferite'
, 'Dislocare'
, 'Divinazione'
, 'Elasticità'
, 'Esca Bersaglio'
, 'Esca Fiore'
, 'Evoca Cubo'
, 'Evoca Idolo'
, 'Fiuto'
, 'Fobia'
, 'Forma Bestiale'
, 'Forma di Fumo'
, 'Forma Melmosa'
, 'Fossa'
, 'Frenesia'
, 'Gazza'
, 'Identifica Proprietario'
, 'Illuminare'
, 'Illusione sonora'
, 'Illusione visiva'
, 'Immagine Speculare'
, 'Impulso Primordiale'
, 'Individuazione del Magico'
, 'Inversione di Gravità'
, 'Ipnotizzare'
, 'Lama Incantata'
, 'Legame Invisibile'
, 'Leggere la Mente'
, 'Levitazione'
, 'Mania delle Biglie'
, 'Maniero'
, 'Marchio del Mago'
, 'Mascherata'
, 'Miniaturizzare'
, 'Movimenti del Ragno'
, 'Multibraccio'
, 'Muro Elementale'
, 'Nube di Nebbia'
, 'Occhio Arcano'
, 'Odio'
, 'Oggettivare'
, 'Ordine'
, 'Pacificare'
, 'Passaspecchi'
, 'Percepire Oggetto'
, 'Portale'
, 'Prigione Astrale'
, 'Ragnatela'
, 'Repuslione'
, 'Risalita'
, 'Scambio'
, 'Scambio di Corpi'
, 'Sciame'
, 'Scolpire Elementi'
, 'Scudo'
, 'Sfera Notturna'
, 'Sigillo'
, 'Smontare'
, 'Smorzatore Magico'
, 'Sonno'
, 'Spegnimento'
, 'Spettacolo'
, 'Spingere/Tirare'
, 'Telecinesi'
, 'Telepatia'
, 'Teletrasporto'
, 'Terremoto'
, 'Tocco Gelido'
, 'Velo'
, 'Velocità'
, 'Viscido'
, 'Visione'
, 'Visione del Vero'
, 'Vista a Raggi-X'
]
