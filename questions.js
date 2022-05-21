const questions1 = [
	{
		q: 'Mely álltás hamis? A követelmények feltárását nehezítheti, hogy...',
		a: [
			{ a: 'a vevők bizonytalanok az elvárásokban.', correct: false },
			{ a: 'a vevők a szoftver közvetlen felhasználói.', correct: true },
			{
				a: 'a vevők nem rendelkeznek informatikai ismeretekkel.',
				correct: false,
			},
			{
				a: 'a vevők nem egyértelműen fejtik ki az elvárásokat.',
				correct: false,
			},
		],
	},
	{
		q: 'Melyik nem "nem funkcionális" követelmény?',
		a: [
			{ a: 'Termék követelmények', correct: false },
			{ a: 'Menedzselési követelmények', correct: false },
			{ a: 'Szolgáltatások, reakciók leírása', correct: true },
			{ a: 'Külső követelmények', correct: false },
		],
	},
	{
		q: 'Mely reláció típus nem része a használati eset diagramnak?',
		a: [
			{ a: 'Előfeltétel', correct: false },
			{ a: 'Tartalmazás', correct: false },
			{ a: 'Származtatás', correct: false },
			{ a: 'Kompozíció', correct: true },
		],
	},
	{
		q: 'Melyik a használati történet (user story) szerkezete?',
		a: [
			{
				a: 'WHEN tevékenység APPLYING funkció IN ORDER TO cél',
				correct: false,
			},
			{ a: 'AS A szerepkör USE funkció TO cél', correct: false },
			{
				a: 'USER felhasználó IN USE CASE használati eset WITH RELATION kapcsolat',
				correct: false,
			},
			{ a: 'GIVEN környezet WHEN tevékenység THEN hatás', correct: true },
		],
	},
	{
		q: 'Melyik állítás hamis a tervezés fázisait illetően?',
		a: [
			{
				a: 'A funkcionálisan elaprózódott osztályokat egy csomagba kell tennünk.',
				correct: true,
			},
			{ a: 'A bonyolulttá váló osztályokat felbonthatjuk.', correct: false },
			{
				a: 'Minden fázisban tovább pontosíthatók a már létező osztályok.',
				correct: false,
			},
			{ a: 'Minden fázisban bevezethetünk új osztályokat.', correct: false },
		],
	},
	{
		q: 'Hány alapelvet célszerű követnünk a SOLID elv szerint?',
		a: [
			{ a: '4', correct: false },
			{ a: '3', correct: false },
			{ a: '5', correct: true },
			{ a: '6', correct: false },
		],
	},
	{
		q: 'Mi a szoftver architektúra?',
		a: [
			{
				a: 'Az az osztályszerkezet, amelyből a csomagdiagramot építjük fel.',
				correct: false,
			},
			{
				a: 'A szoftver fejlesztése során meghozott elsődleges tervezési döntések halmaza.',
				correct: true,
			},
			{
				a: 'A szoftvernek a hardver architektúrájára való kitelepülési módja.',
				correct: false,
			},
			{ a: 'A szoftver komponens diagramja.', correct: false },
		],
	},
	{
		q: 'Mely architektúra esetében a legnehezebb elkülöníteni a program funkcióit?',
		a: [
			{ a: 'Monolitikus architektúra.', correct: true },
			{ a: 'Model-nézet architektúra.', correct: false },
			{ a: 'Model-nézet-kontroller architektúra.', correct: false },
		],
	},
	{
		q: 'Mi nem lehet program komponens?',
		a: [
			{ a: 'Programkönyvtár. (Class library)', correct: false },
			{ a: 'Végrehajtható állomány. (Executable)', correct: false },
			{ a: 'Alkotóelem. (Artifact)', correct: true },
		],
	},
	{
		q: 'Melyik nem része a rendszertervnek?',
		a: [
			{ a: 'Költségbecslés', correct: true },
			{ a: 'Felhasználói felület', correct: false },
			{ a: 'Statikus terv', correct: false },
			{ a: 'Dinamikus terv', correct: false },
		],
	},
	{
		q: 'Melyik SOLID elv ad lehetőséget a polimorfizmus megvalósítására?',
		a: [
			{ a: 'SRP', correct: false },
			{ a: 'LSP', correct: true },
			{ a: 'OCP', correct: false },
			{ a: 'ISP', correct: false },
		],
	},
	{
		q: 'Mely állítás hamis a Single Responsibility Principle-el kapcsolatban?',
		a: [
			{
				a: 'Feltöredezheti a programszerkezetet a túlzott használata.',
				correct: false,
			},
			{
				a: 'Ha az SRP elvet megszegjük, akkor az Open/Closed Principle-t is.',
				correct: true,
			},
			{
				a: 'Egy programegység csak egy felelősséggel rendelkezhet.',
				correct: false,
			},
			{
				a: 'Elősegíti a programegységek laza összekapcsolását.',
				correct: false,
			},
		],
	},
	{
		q: 'Melyik állítás hamis? A Liskov helyettési elv...',
		a: [
			{
				a: '...elvárja a visszatérési értékek kovarianciáját.',
				correct: false,
			},
			{ a: '...elvárja a paraméterek kontravarianciáját.', correct: false },
			{ a: '...megengedi az invariánsok gyengítését.', correct: true },
			{ a: '...tiltja a kivételek típusának bővítését.', correct: false },
		],
	},
	{
		q: 'Mely állítás állja meg a helyét a Függőségek megfordítása elvnél?',
		a: [
			{
				a: 'Az osztály mezői a konkrét osztályok példányait tartalmazzák.',
				correct: false,
			},
			{
				a: 'A konkrét osztályok az absztrakció segítségével lépnek kapcsolatba egymással.',
				correct: true,
			},
			{
				a: 'Az objektum az osztályok példányosítását közvetlen saját maga végzi.',
				correct: false,
			},
			{ a: 'A konkrét osztályokat nem alakíthatjuk át.', correct: false },
		],
	},
	{
		q: 'Milyen módon NEM fecskendezhetünk be függőséget?',
		a: [
			{
				a: 'Interfész segítségével, ahol a kliens megvalósítja a beállító műveletet.',
				correct: false,
			},
			{ a: 'Beállító műveleten keresztül.', correct: false },
			{ a: 'Konstruktor paraméteren keresztül.', correct: false },
			{ a: 'Egyke tervminta használatával.', correct: true },
		],
	},
	{
		q: 'Mely feladatot nem látja el a build rendszer?',
		a: [
			{ a: 'Program lefordítása', correct: false },
			{ a: 'Függőségek kezelése', correct: false },
			{ a: 'Automatizált tesztek végrehajtása', correct: false },
			{
				a: 'A megváltozott projekt fájlok automatikus feltöltése a verziókezelőbe.',
				correct: true,
			},
		],
	},
	{
		q: 'Melyik nem build rendszer?',
		a: [
			{ a: 'Gradle', correct: false },
			{ a: 'Cthulhu', correct: true },
			{ a: 'Ant', correct: false },
			{ a: 'Maven', correct: false },
		],
	},
	{
		q: 'Hogy nevezik a Maven build rendszer projekt fájlját?',
		a: [
			{ a: 'build.pom', correct: false },
			{ a: 'pom.xml', correct: true },
			{ a: 'build.xml', correct: false },
			{ a: 'pom.pom', correct: false },
		],
	},
	{
		q: 'Minek a rövidítése a GAV a Maven rendszerben?',
		a: [
			{ a: 'Group, Artifact Id, Version', correct: true },
			{ a: 'Genuine Application Verifier', correct: false },
			{ a: 'Group, Application Id, Version', correct: false },
			{ a: 'Graphical Advanced Visualizer', correct: false },
		],
	},
	{
		q: 'Mely állítás igaz a pom.xml tartalmával kapcsolatban?',
		a: [
			{
				a: 'modelVersion: az alkalmazás modell rétegének verziószáma',
				correct: false,
			},
			{
				a: 'version: a fordításhoz szükséges minimális Maven verzió',
				correct: false,
			},
			{
				a: 'groupId: a modult fejlesztő csapat cégen belüli azonosítója',
				correct: false,
			},
			{ a: 'artifactId: a projekt egyedi neve', correct: true },
		],
	},
	{
		q: 'Mely állítás igaz a verifikációval kapcsolatban?',
		a: [
			{
				a: 'A statikus elemzés ellenére nem garantált a hibák egymás általi elfedése.',
				correct: false,
			},
			{
				a: 'A dinamikus elemzés nem alkalmas a program teljesítményének mérésére.',
				correct: false,
			},
			{
				a: 'A dinamikus elemzés felfedheti a programegységek együttműködéséből származó hibákat.',
				correct: true,
			},
			{
				a: 'A statikus elemzés a teljes programkód ismeretében végezhető el.',
				correct: false,
			},
		],
	},
	{
		q: 'A tesztelés...',
		a: [
			{ a: '...célja fordítási időben felderíteni a hibákat.', correct: false },
			{ a: '...garantálja, hogy a program hibamentes.', correct: false },
			{
				a: '...futási idejű hibák, rendellenességek, kompatibilitási problémák keresésére használatos.',
				correct: true,
			},
			{
				a: '...garantálja, hogy a program minden körülmény között helytáll.',
				correct: false,
			},
		],
	},
	{
		q: 'Mely állítás igaz?',
		a: [
			{
				a: 'A felhasználói teszt jellemzően fekete doboz tesztekből áll.',
				correct: true,
			},
			{ a: 'A kiadás tesztet a fejlesztő csapat végzi.', correct: false },
			{
				a: 'A füst tesztet a tápegységből felszálló füst mennyiségének mérésével végzik.',
				correct: false,
			},
			{
				a: 'A fejlesztői teszt jellemzően fekete doboz tesztekből áll.',
				correct: false,
			},
		],
	},
	{
		q: 'A fejlesztői teszt lépéseinek helyes sorrendje:',
		a: [
			{ a: 'integrációs teszt, egységteszt, rendszerteszt', correct: false },
			{ a: 'rendszerteszt, integrációs teszt, egységteszt', correct: false },
			{ a: 'egységteszt, integrációs teszt, rendszerteszt', correct: true },
			{ a: 'egységteszt, rendszerteszt, integrációs teszt', correct: false },
		],
	},
	{
		q: 'Mely állítás hamis?',
		a: [
			{
				a: 'A tesztgyűjtemények által letesztelt programkód mértékét nevezzük kód lefedettségnek.',
				correct: false,
			},
			{
				a: 'A kiadásteszt nem foglalja magába a kihelyezést (pl. telepítés).',
				correct: true,
			},
			{
				a: 'A kiadásteszt és a felhasználói teszt során a szoftvernek már általában a célkörnyezetben, tényleges adatokkal kell dolgoznia.',
				correct: false,
			},
			{
				a: 'Az integrációs és rendszertesztek első lépése a füst teszt.',
				correct: false,
			},
		],
	},
	{
		q: 'A folytonos integráció célja...',
		a: [
			{
				a: '... az elkészített szoftver automatikus eljuttatása a felhasználókhoz.',
				correct: false,
			},
			{
				a: '... a több, kisebb részből álló kód egy nagyobb, összefüggő kódbázissá alakítása.',
				correct: false,
			},
			{
				a: '... a lehetséges hibák, integrációs problémák azonnali, automatizált kiszűrése, visszajelzés a fejlesztőknek.',
				correct: true,
			},
			{
				a: '... a programverziók tárolása, visszakereshetősége.',
				correct: false,
			},
		],
	},
	{
		q: 'A folyamatos teljesítés célja...',
		a: [
			{
				a: '... az önszerveződő, kis csapatok folytonos interakciójának biztosítása gyors visszajelzésekkel.',
				correct: false,
			},
			{
				a: '... a gyors alkalmazásfejlesztés megvalósítása, inkrementális alapon.',
				correct: true,
			},
			{ a: '... a folyamatos kiadások automatizálása.', correct: false },
			{
				a: '... hogy a programkódok verziókezelő rendszer segítségével egy központi tárhelyre kerüljenek, naponta többször.',
				correct: false,
			},
		],
	},
	{
		q: 'Hogy hívjuk a folyamatos integráció és teljesítés egymásra épülő feladatait?',
		a: [
			{ a: 'milestone', correct: false },
			{ a: 'module', correct: false },
			{ a: 'job', correct: true },
			{ a: 'task', correct: false },
		],
	},
	{
		q: 'Milyen nyelven írható le a Git CI/CD konfigurációja?',
		a: [
			{ a: 'YAML', correct: true },
			{ a: 'PHP', correct: false },
			{ a: 'XAML', correct: false },
			{ a: 'XML', correct: false },
		],
	},
	{
		q: 'Az alábbiak közül melyik nincs kapcsolatban a folytonos integrációval?',
		a: [
			{ a: 'Travis', correct: false },
			{ a: 'Jetlag', correct: true },
			{ a: 'AppVeyor', correct: false },
			{ a: 'GitLab', correct: false },
		],
	},
	{
		q: 'Melyik NEM része a TDD három alapszabályának?',
		a: [
			{
				a: 'NE kódoljunk semmit, kivéve ami ahhoz kell, hogy a programunk átmenjen a sikertelen teszten.',
				correct: false,
			},
			{ a: 'A sikeres tesztelést mindig refaktorálás követi.', correct: true },
			{
				a: 'Csak annyi kódot írjunk, amennyi éppen elegendő a sikeres teszthez.',
				correct: false,
			},
			{
				a: 'Tesztből csak éppen elegendő mértékűt írjunk a hiba demonstrálásához.',
				correct: false,
			},
		],
	},
	{
		q: 'Mi igaz a TDD elvű fejlesztésre?',
		a: [
			{
				a: 'A végső kódnak elegendő jól működnie az utoljára bevezetett tesztesetekben.',
				correct: false,
			},
			{
				a: 'Végeredményként egy struktúrált kódot kapunk, ami kielégíti a teszteket, de még esetlegesen refaktorálásra szorul.',
				correct: false,
			},
			{
				a: 'A tesztek a lehetséges használati eseteknek csak egy részhalmazát fedik le.',
				correct: true,
			},
			{
				a: 'Elegendő, ha csak annyit kódolunk, ami pillanatnyilag szükséges.',
				correct: false,
			},
		],
	},
	{
		q: 'Mely tulajdonságok jellemzőek a Clean Code-ra?',
		a: [
			{ a: 'Olvasható, karbantartható, tesztelhető, elegáns', correct: true },
			{
				a: 'Könnyen olvasható, nem tartalmaz kódismétlést, tesztelhető',
				correct: false,
			},
			{ a: 'Jól dokumentált, tesztelt, elegáns', correct: false },
			{ a: 'Olvasható, tömör, öndokumentáló', correct: false },
		],
	},
	{
		q: 'Mi NEM jellemző oka a megírt kód folytonos változásának?',
		a: [
			{ a: 'követelmény változások', correct: false },
			{ a: 'új funkciók bevezetése', correct: false },
			{ a: 'hibajavítások', correct: false },
			{ a: 'kód minőségének javítása', correct: true },
		],
	},
	{
		q: 'Melyik koncepció része a Clean Code-nak?',
		a: [
			{ a: 'Ugyanazt a nevet ne használjuk különböző célra', correct: true },
			{ a: 'Használjunk prefixeket az elnevezéseknél', correct: false },
			{
				a: 'A break és continue utasításokat elővigyázatosan kell alkalmaznunk.',
				correct: false,
			},
			{ a: 'Rövidítsük mindig a változó neveket', correct: false },
		],
	},
	{
		q: 'Melyik állítás hamis a metódusokkal kapcsolatban a Clean Code-nál?',
		a: [
			{ a: 'Ne ismételjük önmagunkat a kódban (DRY).', correct: false },
			{
				a: 'A blokkoknak egyértelmű be- és kilépési pontja kell legyen (break, continue nem megengedett).',
				correct: false,
			},
			{
				a: 'Egy metódus több asztrakciós szintet is megvalósíthat.',
				correct: true,
			},
			{ a: 'A megvalósítás férjen rá egy képernyőre.', correct: false },
		],
	},
	{
		q: 'Melyik állítás igaz a Clean Code-al kapcsolatban?',
		a: [
			{
				a: 'A komment segít a nehezen érthető kódot megérteni.',
				correct: false,
			},
			{
				a: 'Hibakódokat és kivételeket egyaránt használatunk.',
				correct: false,
			},
			{ a: 'A kód és a komment nem feltétlenül él együtt.', correct: true },
			{
				a: 'A függvények egyszerre válaszolhatnak egy kérdésre és hajthatnak végre valamit.',
				correct: false,
			},
		],
	},
	{
		q: 'Mely szál futtatja az eseménykezelésért felelős tevékenységeket?',
		a: [
			{ a: 'ELT', correct: false },
			{ a: 'DDT', correct: false },
			{ a: 'EDT', correct: true },
			{ a: 'DBT', correct: false },
		],
	},
	{
		q: 'Melyik nem létező szál állapot?',
		a: [
			{ a: 'Running', correct: false },
			{ a: 'Stopped', correct: true },
			{ a: 'Suspended', correct: false },
			{ a: 'Resumed', correct: false },
		],
	},
	{
		q: 'Mi a szálak alapértelmezett prioritása?',
		a: [
			{ a: '0', correct: false },
			{ a: '10', correct: false },
			{ a: '1', correct: false },
			{ a: '5', correct: true },
		],
	},
	{
		q: 'A Thread objektum mely metódusával indítható el új szál?',
		a: [
			{ a: 'run', correct: false },
			{ a: 'spawn', correct: false },
			{ a: 'start', correct: true },
			{ a: 'execute', correct: false },
		],
	},
	{
		q: 'Mely metódussal tud egy szál lemondani a CPU időről?',
		a: [
			{ a: 'suspend', correct: false },
			{ a: 'wait', correct: false },
			{ a: 'interrupt', correct: false },
			{ a: 'sleep', correct: true },
		],
	},
	{
		q: 'Egy szál mely metódusának meghívásával lehet megvárni a szál befejeződését?',
		a: [
			{ a: 'wait', correct: false },
			{ a: 'join', correct: true },
			{ a: 'await', correct: false },
			{ a: 'stop', correct: false },
		],
	},
	{
		q: 'Mit jelent párhuzamos környezetben a kiéheztetés?',
		a: [
			{
				a: 'A szálak nem mondanak le a használt erőforrásaikról.',
				correct: false,
			},
			{
				a: 'A párhuzamos program szálai nem tudnak elindulni, mert az operációs rendszer korábban zombi állapotba került.',
				correct: false,
			},
			{
				a: 'Egy szál nem tud hozzáférni a kívánt erőforráshoz huzamosabb ideig, mert más, hosszú futásidejű szálak korábban kapják azt meg.',
				correct: true,
			},
			{
				a: 'Mire a program hajlandó befejeződni, a felhasználó már régen éhen halt.',
				correct: false,
			},
		],
	},
	{
		q: 'Egy lock-ként használt objektum mely metódusával ébreszthető fel az arra várakozó szál?',
		a: [
			{ a: 'spotifiy', correct: false },
			{ a: 'wait', correct: false },
			{ a: 'wake', correct: false },
			{ a: 'notify', correct: true },
		],
	},
	{
		q: 'Mi igaz egy immutable objektumra?',
		a: [
			{
				a: 'Az objektum állapota nem változtatható meg a konstruktor lefutása után.',
				correct: true,
			},
			{
				a: 'Az objektumban nem tárolhatunk referenciát más objektumokra.',
				correct: false,
			},
			{
				a: 'Az objektumban attribútumai nem változtathatók meg, de a referenciák esetében a rajtuk keresztül elérhető objektumokon ez megengedett.',
				correct: false,
			},
			{
				a: 'Attribútumai csak setter metódusok segítségével változtathatók meg.',
				correct: false,
			},
		],
	},
	{
		q: 'Melyik NEM LÉTEZŐ tervminta osztály?',
		a: [
			{ a: 'Létrehozási', correct: false },
			{ a: 'Viselkedési', correct: false },
			{ a: 'Szerkezeti', correct: false },
			{ a: 'Végrehajtási', correct: true },
		],
	},
	{
		q: 'Melyik tervmintát soroltuk rossz osztályba?',
		a: [
			{ a: 'Építő - Létrehozási minta', correct: false },
			{ a: 'Egyke - Létrehozási minta', correct: false },
			{ a: 'Pehelysúlyú - Viselkedési minta', correct: true },
			{ a: 'Felelősséglánc - Viselkedési minta', correct: false },
		],
	},
	{
		q: 'Mely tervmintával csökkenthetjük a szükséges memóriát úgy, hogy megosztjuk az állapot közös részeit több objektum között egy új objektumban?',
		a: [
			{ a: 'Összetétel (Composite)', correct: false },
			{ a: 'Pehelysúlyú (Flyweight)', correct: true },
			{ a: 'Helyettes (Proxy)', correct: false },
			{ a: 'Illesztő (Adapter)', correct: false },
		],
	},
	{
		q: 'Mely tervminta ad egyszerűsített felületet egy könyvtárhoz, keretrendszerhez stb.?',
		a: [
			{ a: 'Helyettes (Proxy)', correct: false },
			{ a: 'Illesztő (Adapter)', correct: false },
			{ a: 'Homlokzat (Facade)', correct: true },
			{ a: 'Híd (Bridge)', correct: false },
		],
	},
	{
		q: 'Mely tervminta fordítja le egy osztály interfészét egy kompatibilis másik interfészre?',
		a: [
			{ a: 'Homlokzat (Facade)', correct: false },
			{ a: 'Illesztő (Adapter)', correct: true },
			{ a: 'Híd (Bridge)', correct: false },
			{ a: 'Helyettes (Proxy)', correct: false },
		],
	},
	{
		q: 'Mely tervminta teszi lehetővé a kérések továbbítását a kezelők lánca mentén?',
		a: [
			{ a: 'Közvetítő (Mediator)', correct: false },
			{ a: 'Felelősséglánc (Chain of Responsibility)', correct: true },
			{ a: 'Híd (Bridge)', correct: false },
			{ a: 'Építő (Builder)', correct: false },
		],
	},
	{
		q: 'Mely tervminta tudja csökkenteni az objektumok közötti függőségeket?',
		a: [
			{ a: 'Közvetítő (Mediator)', correct: true },
			{ a: 'Gyártó művelet (Factory method)', correct: false },
			{ a: 'Híd (Bridge)', correct: false },
			{ a: 'Illesztő (Adapter)', correct: false },
		],
	},
	{
		q: 'Mely tervminta ad lehetőséget egy gyűjtemény bejárására anélkül, hogy az elemek ábrázolását ismernénk?',
		a: [
			{ a: 'Bejáró (Iterator)', correct: true },
			{ a: 'Stratégia (Strategy)', correct: false },
			{ a: 'Közvetítő (Mediator)', correct: false },
			{ a: 'Emlékeztető (Memento)', correct: false },
		],
	},
	//5 szoftech kviz
	{
		q: 'Minek jelölésére nem való a cédulák (tickets) használata egy projektmenedzsment eszközben?',
		a: [
			{ a: 'Hiba', correct: false },
			{ a: 'Új funkcionalitás', correct: false },
			{ a: 'Dokumentációs feladat', correct: false },
			{ a: 'A futam lezárásához kapcsolódó megbeszélés', correct: true },
		],
	},
	{
		q: 'Mit nem ad meg egy cédula (ticket)?',
		a: [
			{ a: 'Feladat költsége', correct: true },
			{ a: 'Feladat határideje', correct: false },
			{ a: 'Feladat leírása', correct: false },
			{ a: 'Feladat felelőse', correct: false },
		],
	},
	{
		q: 'Mely állítás hamis a verziókövető rendszerekkel kapcsolatban?',
		a: [
			{
				a: 'A segítségével az összes eddigi program változatot eltárolhatjuk.',
				correct: false,
			},
			{
				a: 'A használatának segítségével nincs szükségünk a konfliktusok kezelésére.',
				correct: true,
			},
			{ a: 'Megengedi a változtatások visszavonását.', correct: false },
			{ a: 'Lehetővé teszi a módosítások ellenőrzését.', correct: false },
		],
	},
	{
		q: 'Mely állítás vonatkozik az elosztott verziókövető rendszerekre?',
		a: [
			{
				a: 'A kommunikáció peer to peer elven történik, de kitüntetett szerverek felállítására van lehetőség.',
				correct: true,
			},
			{ a: 'Fájl alapú műveletvégzést végez.', correct: false },
			{
				a: 'A konkurenciakezelés jellemzően beküldés előtti egyesítéssel történik.',
				correct: false,
			},
			{ a: 'Ismert megvalósításai pl.: CVS, SVN, SourceSafe', correct: false },
		],
	},
	{
		q: 'A git mely parancsával szinkronizálhatjuk a távoli tárolóba a lokális tárolónkban létrehozott új verziót?',
		a: [
			{ a: 'git pull', correct: false },
			{ a: 'git synchronize', correct: false },
			{ a: 'git commit', correct: false },
			{ a: 'git push', correct: true },
		],
	},
];

const questions2 = [
	// 3. EA
	{
		q: 'Mi lehet Java-ban generikus paraméter?',
		a: [
			{ a: 'Bármely osztály.', correct: false },
			{
				a: 'Osztályok, melyek megvalósítják a generikus által igénybe vett metódusokat.',
				correct: true,
			},
			{ a: 'Bármilyen típus.', correct: false },
			{
				a: 'Bármilyen típus, ami megvalósítja a generikus által igénybe vett metódusokat.',
				correct: false,
			},
		],
	},
	{
		q: 'Melyiket tekintjük absztrakciós módszernek?',
		a: [
			{
				a: 'A generikus osztályok és az műveletek használata is absztrakciós módszer.',
				correct: true,
			},
			{ a: 'Az absztrakt műveletek használatát.', correct: false },
			{ a: 'A generikus osztályok használatát.', correct: false },
			{ a: 'Egyik sem absztrakciós módszer.', correct: false },
		],
	},
	{
		q: 'Lehet-e egy generikus osztálynak absztrakt művelete?',
		a: [
			{ a: 'Igen.', correct: true },
			{ a: 'Nem.', correct: false },
		],
	},
	{
		q: 'Lehet-e egy absztrakt osztálynak generikus művelete?',
		a: [
			{ a: 'Igen.', correct: true },
			{ a: 'Nem.', correct: false },
		],
	},
	{
		q: 'Melyik állítás hamis?',
		a: [
			{
				a: 'A gyűjtemény tetszőleges mennyiségű adatot csoportosít.',
				correct: false,
			},
			{
				a: 'Primitív típusok esetében azok beburkoló osztályával példányosíthatjuk a gyűjteményt.',
				correct: false,
			},
			{ a: 'A tömbök nem gyűjtemények.', correct: false },
			{ a: 'A gyűjteményben tárolt adatok típusa azonos.', correct: true },
		],
	},

	// 4. EA
	{
		q: 'Milyen adattagokat használhat a saját osztályán belül egy statikus metódus?',
		a: [
			{ a: 'A statikusakat', correct: true },
			{ a: 'Minden adattagot', correct: false },
			{ a: 'A statikusakat és a publikusakat', correct: false },
			{ a: 'Azokat, amelyekhez adtunk gettert', correct: false },
		],
	},
	{
		q: 'Mire nem használható egy statikus attribútum?',
		a: [
			{ a: 'Konstans értékek definiálására', correct: false },
			{
				a: 'Az osztály objektumainak példány szintű értékeihez',
				correct: true,
			},
			{ a: 'Jelzők definiálására (flag-ek)', correct: false },
			{
				a: 'Az osztály objektumai által közösen használt értékekhez',
				correct: false,
			},
		],
	},
	{
		q: 'Milyen típusú kivételeket kötelező elkapni vagy jelezni a továbbadását?',
		a: [
			{ a: 'Exception', correct: true },
			{ a: 'Egyiket sem kell', correct: false },
			{ a: 'Exception és RuntimeException', correct: false },
			{ a: 'RuntimeException', correct: false },
		],
	},
	{
		q: 'Hogyan definiálunk saját kivétel típust?',
		a: [
			{ a: 'Erre nincs lehetőségünk', correct: false },
			{
				a: 'Származtatjuk a kivétel típusunkat az Exception-ből',
				correct: true,
			},
			{ a: 'Létrehozunk egy egyszerű osztályt', correct: false },
			{
				a: 'Készítünk egy felsorolási típust, a hibák fajtáival',
				correct: false,
			},
		],
	},
	{
		q: 'Melyik állítás hamis a Serializable által megvalósított szerializációval kapcsolatban?',
		a: [
			{
				a: 'A szerializáció elmenti az objektum állapotát, és kapcsolatait is, és ezeket automatikusan képes deszerializálni is.',
				correct: true,
			},
			{
				a: 'Az objektum bináris reprezentációjának előállítására.',
				correct: false,
			},
			{
				a: 'A távoli metódus hívás (RMI) egy jellemző segédeszköze.',
				correct: false,
			},
			{ a: 'Az objektumokról pillanatképet készíthetünk vele', correct: false },
		],
	},

	// 5. EA
	{
		q: 'Mely közös ősosztályból származnak a Java Swing vezérlő elemek?',
		a: [
			{ a: 'JControl', correct: false },
			{ a: 'JObject', correct: false },
			{ a: 'JComponent', correct: true },
			{ a: 'JFrame', correct: false },
		],
	},
	{
		q: 'Melyik osztály testesítő meg Swing környezetben az ablakot?',
		a: [
			{ a: 'JWindow', correct: false },
			{ a: 'JFrame', correct: true },
			{ a: 'JDialog', correct: false },
			{ a: 'JPanel', correct: false },
		],
	},
	{
		q: 'Mely művelettel lehet megadni az ablak bezárásakori viselkedést?',
		a: [
			{ a: 'setDefaultCloseOperation(...)', correct: true },
			{ a: 'setCloseBehavior(...)', correct: false },
			{ a: 'setAutoClose(...)', correct: false },
			{ a: 'enableExitOnClose(...)', correct: false },
		],
	},
	{
		q: 'Mely párossal lehet az ablakeseményeket kezelni?',
		a: [
			{
				a: 'addWindowEvents metódusnak átadott WindowEvents megvalósítás',
				correct: false,
			},
			{
				a: 'addWindowListener metódusnak átadott WindowAdapter megvalósítás',
				correct: true,
			},
			{
				a: 'addWindowListener metódusnak átadott WindowEvents megvalósítás',
				correct: false,
			},
			{
				a: 'addWindowEvents metódusnak átadott WindowAdapter megvalósítás',
				correct: false,
			},
		],
	},
	{
		q: 'Melyik állítás igaz? Az ablak ikonjának fájlja...',
		a: [
			{ a: '...csak bmp vagy ico formátumú lehet.', correct: false },
			{
				a: '...JAR-ból és fájlrendszerből ugyanúgy tölthető be.',
				correct: false,
			},
			{
				a: '...ha a program JAR fájljában van, akkor garantáltan elérhetjük mindig.',
				correct: true,
			},
			{ a: '...mindig a projektben kell legyen elhelyezve.', correct: false },
		],
	},

	// 6. EA
	{
		q: 'Mely metódussal lehet egy Swing komponenshez egér kattintás figyelőt hozzáadni?',
		a: [
			{ a: 'addMouseListener', correct: true },
			{ a: 'addMouseWheelListener', correct: false },
			{ a: 'addMouseClickListener', correct: false },
			{ a: 'addMouseMotionListener', correct: false },
		],
	},
	{
		q: 'Mit célszerű tennünk, ha több fajta egér eseményt is kezelnünk kell?',
		a: [
			{
				a: 'Megvalósítjuk egyenként a MouseListener, MouseMotionListener, MouseWheelListener interfészeket.',
				correct: false,
			},
			{
				a: 'Származtatunk egy eseménykezelő osztályt a MouseAdapter-ből.',
				correct: true,
			},
			{
				a: 'Minden eseményhez külön-külön interfész megvalósítást kell adnunk.',
				correct: false,
			},
			{
				a: 'Készítünk egy osztályt, amely megvalósítja mindhárom interfészt (MouseListener, MouseMotionListener, MouseWheelListener).',
				correct: false,
			},
		],
	},
	{
		q: 'Mi az eseménykezelést alkalmazó programok alapötlete?',
		a: [
			{
				a: 'A program futása közben események hatására menjenek végbe bizonyos folyamatok.',
				correct: true,
			},
			{ a: 'A hibákat eseményekként dolgozzuk fel.', correct: false },
			{
				a: 'Az egér kattintásokra külön függvényekben tudjunk reagálni.',
				correct: false,
			},
			{
				a: 'Az esemény objektumot az eseménykezelőnek kell definiálnia.',
				correct: false,
			},
		],
	},
	{
		q: 'Mely állítás hamis az eseményobjektummal kapcsolatban?',
		a: [
			{
				a: 'Hasonló típusú eseményekhez létrehozható megfelelő eseményosztály.',
				correct: false,
			},
			{
				a: 'Rendelkezik referenciával arról, hogy hol váltódott ki az esemény.',
				correct: false,
			},
			{
				a: 'Az esemény forrását tartalmazó source attribútum mindig valós objektumra mutat.',
				correct: true,
			},
			{ a: 'Hordozza az esemény tulajdonságait.', correct: false },
		],
	},
	{
		q: 'Mely állítás hamis? Az eseménykezelő függvény...',
		a: [
			{ a: '...működése közben kiválthat más eseményeket is.', correct: false },
			{
				a: '...csak a grafikus elemek eseményeinek kezelésére használatos.',
				correct: true,
			},
			{
				a: '...paraméterként megkapja a kiváltott eseményt, amelyre éppen reagálni kell.',
				correct: false,
			},
			{
				a: '...tartalmazza azt a tevékenységet, amelyet az adott eseményre reagálásképp végre kell hajtani.',
				correct: false,
			},
		],
	},

	// 7. EA

	{
		q: 'Mely állítás igaz?',
		a: [
			{
				a: 'A RadioButton példányai közül egy JFrame-ben legfeljebb csak egy lehet kiválasztva.',
				correct: false,
			},
			{
				a: 'A ButtonGroup lényege, hogy a hozzá rendelt Button-ok stílusa együttesen legyen kezelhető.',
				correct: false,
			},
			{
				a: 'A ButtonGroup egy vizuális keretbe fogja össze a RadioButton-okat.',
				correct: true,
			},
			{
				a: 'A kölcsönös kizárásban lévő RadioButton-okhoz csoportot kell rendelni.',
				correct: false,
			},
		],
	},
	{
		q: 'A NetBeans designer-e az alábbi metódusba gyűjti a vizuális elemek inicializálását...',
		a: [
			{ a: 'initApplication', correct: false },
			{ a: 'initControls', correct: false },
			{ a: 'initializeComponents', correct: false },
			{ a: 'initComponents', correct: true },
		],
	},
	{
		q: 'A gombok tevékenységeinek megvalósítását a következő interface-el valósítjuk meg',
		a: [
			{ a: 'EventClickListener', correct: false },
			{ a: 'ButtonClickListener', correct: false },
			{ a: 'ActionListener', correct: true },
			{ a: 'ActionHandler', correct: false },
		],
	},
	{
		q: 'Az ActionListener mely metódusát kell megvalósítani gomb esemény kezelésekor?',
		a: [
			{ a: 'onEvent', correct: false },
			{ a: 'actionPerformed', correct: true },
			{ a: 'onClick', correct: false },
			{ a: 'handleClick', correct: false },
		],
	},
	{
		q: 'Mi igaz a JList-re?',
		a: [
			{ a: 'A JList tárolja a megjelenítendő adatait.', correct: false },
			{ a: 'A JList modelljében tárolt adatok típusa String.', correct: false },
			{
				a: 'A JList alapértelmezett modellje a DefaultContainerModel.',
				correct: false,
			},
			{
				a: 'A JList vezérlőben az elem kijelölését a valueChanged eseményen keresztül érzékelhetjük.',
				correct: true,
			},
		],
	},

	// 8. EA
	{
		q: 'A JTextField mely metódusával kérdezhető le a szerkesztett szöveg?',
		a: [
			{ a: 'getText', correct: true },
			{ a: 'setText', correct: false },
			{ a: 'setContent', correct: false },
			{ a: 'getContent', correct: false },
		],
	},
	{
		q: 'Mely interfészt kell megvalósítani, ha értesülni akarunk a Slider értékének változásáról?',
		a: [
			{ a: 'StateChangeListener', correct: false },
			{ a: 'ScrollListener', correct: false },
			{ a: 'ChangeListener', correct: true },
			{ a: 'ValueChangedListener', correct: false },
		],
	},
	{
		q: 'Mely metódus hívással kaphatunk grafikus eszközkapcsolatot egy BufferedImage-n, hogy rajzolni tudjunk rá?',
		a: [
			{ a: 'getGraphics', correct: true },
			{ a: 'getContent', correct: false },
			{ a: 'getBitmap', correct: false },
			{ a: 'getImage', correct: false },
		],
	},
	{
		q: 'Mely metódusban definiálható felül egy Swing UI komponens felületének kirajzolása?',
		a: [
			{ a: 'paintComponent', correct: true },
			{ a: 'draw', correct: false },
			{ a: 'paint', correct: false },
			{ a: 'drawComponent', correct: false },
		],
	},
	{
		q: 'A Graphics2D mely metódusával rajzolhatunk?',
		a: [
			{ a: 'drawPie', correct: false },
			{ a: 'clearRectange', correct: false },
			{ a: 'fillRectangle', correct: false },
			{ a: 'drawRoundRect', correct: true },
		],
	},

	// 9. EA

	{
		q: 'Melyik parancs része a DQL-nek (Data Query Language) ?',
		a: [
			{ a: 'SELECT * FROM table', correct: true },
			{ a: 'INSERT INTO table (...) VALUES (...)', correct: false },
			{ a: 'UPDATE table SET ...', correct: false },
			{ a: 'CREATE TABLE tablename(...)', correct: false },
		],
	},
	{
		q: 'Mire való a Connection rollback() metódusa?',
		a: [
			{
				a: 'Visszavonja egy felhasználó hozzáférési jogosultságát.',
				correct: false,
			},
			{
				a: 'Visszavonja az utolsó kiadott módosítási kérelmet.',
				correct: false,
			},
			{
				a: 'Visszavonja a kapcsolat létrejötte óta megvalósult adatbázis módosításokat.',
				correct: false,
			},
			{
				a: 'Visszavonja az utolsó megkezdett, de még nem commit-olt tranzakciót.',
				correct: true,
			},
		],
	},
	{
		q: 'Melyik metódus hívás biztosan helytelen a ResultSet típusú rs változón?',
		a: [
			{ a: 'rs.getInt(2);', correct: false },
			{ a: 'rs.getInt(0);', correct: true },
			{ a: 'rs.getString("ADDR");', correct: false },
			{ a: 'rs.getString(5);', correct: false },
		],
	},
	{
		q: 'Mit nevezünk Dirty Reads-nek?',
		a: [
			{ a: 'Helytelen formátumban tárolt adatok olvasását.', correct: false },
			{ a: 'Nem véglegesített adatok olvasása.', correct: true },
			{ a: 'Véglegesített adatok olvasása.', correct: false },
			{ a: 'Túl sok adatot kérünk le az adatbáziskezelőtől.', correct: false },
		],
	},
	{
		q: 'Mi igaz egy jó adatbázissal kapcsolatban?',
		a: [
			{ a: 'A kulcsok csak egyetlen mezőből állhatnak.', correct: false },
			{ a: 'Minden tábla minden oszlopa indexelt.', correct: false },
			{ a: 'Biztosítja az adatok épségét.', correct: true },
			{ a: 'Tartalmazhat redundanciát.', correct: false },
		],
	},

	// 10. EA

	{
		q: 'Milyen típust használ a JPasswordField az adatok tárolásához?',
		a: [
			{ a: 'Character[]', correct: false },
			{ a: 'char[]', correct: true },
			{ a: 'byte[]', correct: false },
			{ a: 'String', correct: false },
		],
	},
	{
		q: 'Mely állítás igaz a JTable-el kapcsolatban?',
		a: [
			{ a: 'Az adatokat a JTable tárolja.', correct: false },
			{
				a: 'A táblázatohoz tartozik egy adatokat tároló objektum, ami a TableModel interfészt implementálja.',
				correct: true,
			},
			{
				a: 'A TableModel-nek nem létezik alapértelmezett (absztrakt) megvalósítása.',
				correct: false,
			},
			{
				a: 'A fireTableStructureChanged metódus csak a táblázat struktúráját érvényteleníti.',
				correct: false,
			},
		],
	},
	{
		q: 'Mely metódusait kell mindenképpen implementálni a TableModel-nek a minimális működéshez?',
		a: [
			{ a: 'getColumnName, getValueAt, getColumnClass', correct: false },
			{ a: 'getValueAt', correct: false },
			{ a: 'getRowCount, getColumnCount, getValueAt', correct: true },
			{ a: 'getValueAt, getColumnName', correct: false },
		],
	},
	{
		q: 'A JTable megjelenítéséhez a Cell renderer a következő típus-megjelenítés párt használja.',
		a: [
			{ a: 'Number - TextField', correct: false },
			{ a: 'Date - dátum választó', correct: false },
			{ a: 'Boolean - jelölő négyzet', correct: true },
			{ a: 'ImageIcon, Icon - PictureBox', correct: false },
		],
	},

	// 11. EA
	{
		q: 'Mely állítás NEM IGAZ az állapottal kapcsolatban?',
		a: [
			{
				a: 'Az állapotnak van azonosítója, így megkülönböztethető a többitől.',
				correct: false,
			},
			{
				a: 'Az objektum állapotát az attribútumok konkrét értékeinek n-esével jellemezzük.',
				correct: false,
			},
			{
				a: 'Az állapot addig marad fenn, amíg az objektumok attribútumainak értékei kielégítik az állapothoz rendelt invariánst.',
				correct: false,
			},
			{
				a: 'Az állapot megszűnése a programban magától is bekövetkezhet.',
				correct: true,
			},
		],
	},
	{
		q: 'Mely állítás HAMIS?',
		a: [
			{
				a: 'Az állapot megszűnésekor egy másik állapotba kerül az objektum.',
				correct: false,
			},
			{
				a: 'Az állapot megszűnése esemény hatására következik be.',
				correct: false,
			},
			{
				a: 'Az objektum megszűnésekor egy rendszeren kívüli befejező állapotba kerül az objektum.',
				correct: false,
			},
			{
				a: 'Az objektum megszűnésekor az objektum állapota egyszerűen törlődik.',
				correct: true,
			},
		],
	},
	{
		q: 'Mely állítás igaz az állapotdiagrammal kapcsolatban?',
		a: [
			{
				a: 'Az állapotdiagram egy egyszeresen összefüggő irányított gráf.',
				correct: true,
			},
			{
				a: 'Az állapotdiagram gráfjának csúcsai az események, élei az állapotátmenetek.',
				correct: false,
			},
			{
				a: 'Az állapotdiagram több kezdő állapotot is tartalmazhat.',
				correct: false,
			},
			{
				a: 'Az állapotdiagram egy összefüggő irányítatlan gráf.',
				correct: false,
			},
		],
	},
	{
		q: 'Az állapotdiagram bonyolultságát a következő módszerrel csökkenthetjük:',
		a: [
			{ a: 'Sehogy.', correct: false },
			{ a: 'Állapotok általánosítása.', correct: false },
			{ a: 'Állapotok aggregációja.', correct: false },
			{ a: 'Állapotok általánosítása, illetve aggregációja.', correct: true },
		],
	},
	{
		q: 'Mely állítás igaz?',
		a: [
			{
				a: 'Az általánosított és az aggregált állapot állapotinvaránsa megegyezik.',
				correct: false,
			},
			{
				a: 'Az általánosított állapot állapotinvaránsa a részállapotok állapotinvariánsainak diszjunkciója.',
				correct: true,
			},
			{
				a: 'Az aggregált állapot állapotinvaránsa a részállapotok állapotinvariánsainak diszjunkciója.',
				correct: false,
			},
			{
				a: 'Az általánosított állapot állapotinvaránsa a részállapotok állapotinvariánsainak konjunkciója.',
				correct: false,
			},
		],
	},
	// 12. EA

	{
		q: 'Hogyan jelöljük a sávos alapú tevékenység diagramon a szinkronizációs pontot?',
		a: [
			{ a: 'Lekerekített sarkú téglalappal', correct: false },
			{ a: 'Rombusszal', correct: false },
			{ a: 'Szaggatott vízszintes vonallal', correct: false },
			{ a: 'Vastagított vízszintes vonallal', correct: true },
		],
	},
	{
		q: 'Az együttműködési diagramban az együttműködés mely objektumok között valósul meg?',
		a: [
			{ a: 'Amelyek ugyanazon osztály példányai.', correct: false },
			{ a: 'Amelyek életciklusa összekapcsolódik.', correct: false },
			{ a: 'Amelyeket ugyanaz az objektum példányosítja.', correct: false },
			{
				a: 'Amelyek asszociációs kapcsolattal vannak összekötve.',
				correct: true,
			},
		],
	},
	{
		q: 'Az együttműködési diagram mely diagram kiterjesztéseként fogható fel?',
		a: [
			{ a: 'Komponens diagram', correct: false },
			{ a: 'Osztály diagram', correct: false },
			{ a: 'Objektum diagram', correct: true },
			{ a: 'Csomag diagram', correct: false },
		],
	},
	{
		q: 'Hogyan jelöljük az együttműködési diagramon az üzenetküldés során átadott argumentumot?',
		a: [
			{ a: 'Az asszociáción feltüntetett boríték ikonnal.', correct: false },
			{ a: 'Kis körből indított nyíllal.', correct: true },
			{ a: 'A küldőtől a fogadó felé mutató nyíllal.', correct: false },
			{ a: 'Az asszociáción feltüntett üzenet azonosítóval.', correct: false },
		],
	},
	{
		q: 'Hogyan jelöljük az együttműködési diagramon, ha egy üzenetnek több címzettje is van?',
		a: [
			{
				a: 'A fogadó feleket együttesen három, egymáshoz képest elcsúsztatott téglalappal jelöljük.',
				correct: true,
			},
			{ a: 'Erre nincs lehetőségünk.', correct: false },
			{ a: 'Az asszociáción feltüntetett több nyíllal.', correct: false },
			{ a: 'Multiplicitással.', correct: false },
		],
	},
	{
		q: 'Mely NEM RÉSZE a felhasználói eset diagramnak?',
		a: [
			{ a: 'Felhasználói esetek', correct: false },
			{ a: 'Felhasználói fiók', correct: true },
			{ a: 'Felhasználási relációk', correct: false },
			{ a: 'Felhasználók', correct: false },
		],
	},
	{
		q: 'Hogyan jelöljük a felhasználói esetet a felhasználói eset diagramon?',
		a: [
			{ a: 'Az eset nevének aláhúzásával', correct: false },
			{ a: 'Ellipszissel', correct: true },
			{ a: 'Téglalappal', correct: false },
			{ a: 'Körrel', correct: false },
		],
	},
];

// kapott kérdéssor opciók goes here
const questions3 = [
	{
		q: 'DUMMY question',
		a: [
			{ a: 'Igaz', correct: false },
			{ a: 'Ellipszissel', correct: true },
		],
	},
];
