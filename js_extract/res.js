const res = [
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
