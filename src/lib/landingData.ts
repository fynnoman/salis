import type { LandingPageData } from "@/components/LandingPageTemplate";

/* =========================================================================
 * Cities — neighborhood data, intro flavor, geo context
 * =======================================================================*/

export const CITIES = {
  pirmasens: {
    name: "Pirmasens",
    region: "Südwestpfalz",
    plz: "66953–66955",
    neighborhoods: [
      "Innenstadt",
      "Winzeln",
      "Niedersimten",
      "Erlenbrunn",
      "Fehrbach",
      "Hengsberg",
      "Gersbach",
      "Ruhbank",
      "Eichelsberg",
      "Husterhöhe",
      "Ohmbach",
      "Windsberg",
      "Pirmasens-Nord",
      "Pirmasens-Süd",
      "Lemberg (Umland)",
      "Rodalben (Umland)",
    ],
    intro:
      "die Schuhmetropole am Rand des Pfälzer Waldes — eine Stadt mit gewachsenen Gewerbevierteln, dichten Mehrfamilienhaus-Quartieren und einer aktiven Geschäftsmitte rund um Hauptstraße und Schloßplatz",
    geo: "Pfälzerwald-Klima mit hoher Feuchtigkeit, viel Pollenflug im Frühling und schneereichen Wintern in den Höhenlagen",
    landmarks: "Schlossplatz, Exerzierplatz, Husterhöhe, Strecktal-Park",
  },
  kaiserslautern: {
    name: "Kaiserslautern",
    region: "Westpfalz",
    plz: "67655–67663",
    neighborhoods: [
      "Innenstadt-West",
      "Innenstadt-Ost",
      "Bännjerrück",
      "Betzenberg",
      "Erfenbach",
      "Erlenbach",
      "Erzhütten",
      "Mölschbach",
      "Hohenecken",
      "Morlautern",
      "Siegelbach",
      "Dansenberg",
      "Einsiedlerhof",
      "Lämmchesberg",
      "Mittelstadt",
      "Universitätsviertel",
    ],
    intro:
      "die Barbarossastadt mit Universität, TU, FCK-Stadion und einer großen Anzahl Bürogebäude, WEG-Anlagen und Studentenwohnheime — eine Stadt, in der zuverlässige Gebäudedienstleistung tagtäglich gefragt ist",
    geo: "Westpfälzer Beckenklima mit warmen Sommern und feuchten Wintern, ausgeprägte Pollensaison und hohe Verkehrsdichte im Stadtkern",
    landmarks: "Stiftskirche, Pfalztheater, Gartenschau, Fritz-Walter-Stadion",
  },
  zweibruecken: {
    name: "Zweibrücken",
    region: "Südwestpfalz",
    plz: "66482",
    neighborhoods: [
      "Innenstadt",
      "Ernstweiler",
      "Bubenhausen",
      "Ixheim",
      "Niederauerbach",
      "Oberauerbach",
      "Mittelbach-Hengstbach",
      "Mörsbach",
      "Rimschweiler",
      "Wattweiler",
    ],
    intro:
      "die Rosenstadt mit Outlet, Flugplatz und gewachsenen Wohnvierteln — eine Stadt, in der Geschäftsleute, Vermieter und Privathaushalte gleichermaßen auf zuverlässige Gebäudereinigung zählen",
    geo: "Bliesgau-Klima mit ausgeprägten Jahreszeiten und einer langen Pollensaison",
    landmarks: "Outlet, Rosengarten, Herzogplatz, Schlossberg",
  },
  landstuhl: {
    name: "Landstuhl",
    region: "Sickinger Höhe",
    plz: "66849",
    neighborhoods: [
      "Atzel",
      "Melkerei",
      "Kaiserstraße",
      "Am Forst",
      "Stadtmitte",
      "Bahnhofsviertel",
    ],
    intro:
      "die Sickinger-Stadt mit Burg, US-Militärstandort und einer Mischung aus historischer Innenstadt und modernen Wohnvierteln",
    geo: "Hochlagen-Klima mit feuchten Wintern und kühlen Nächten — Schmutz und Algen auf Außenflächen sind ein Dauerthema",
    landmarks: "Burg Nanstein, Stadtkirche, Sickinger Höhe",
  },
  homburg: {
    name: "Homburg",
    region: "Saarpfalz-Kreis",
    plz: "66424",
    neighborhoods: [
      "Innenstadt",
      "Erbach",
      "Beeden",
      "Bruchhof-Sanddorf",
      "Einöd",
      "Kirrberg",
      "Schwarzenbach",
      "Wörschweiler",
    ],
    intro:
      "die Saarpfalz-Stadt mit Uniklinik, großen Industrieparks und gepflegten Wohnvierteln rund um den Schlossberg",
    geo: "Bliesgau-Klima mit ausgewogenen Niederschlägen und einer ausgeprägten Vegetationsperiode",
    landmarks: "Schlossberghöhlen, Karlsberg, Saarpfalz-Park",
  },
} as const;

export type CityKey = keyof typeof CITIES;

/* =========================================================================
 * Service blueprints — generic content that flexes by city
 * =======================================================================*/

type ServiceBlueprint = {
  service: string;
  kicker: string;
  h1Highlight: string;
  breadcrumbLabel: (city: string) => string;
  introLead: (city: string) => string;
  introSecondary: (city: string) => string;
  why: (city: string, cityIntro: string) => string[];
  services: LandingPageData["services"];
  steps: LandingPageData["steps"];
  pricing: (city: string) => string[];
  trustBullets: string[];
  faqsBase: (city: string) => LandingPageData["faqs"];
};

const sharedTrust = (city: string): string[] => [
  `Inhabergeführter Familienbetrieb mit Sitz in Pirmasens — kurze Wege auch nach ${city}`,
  "Faire Festpreise und schriftliche Angebote ohne versteckte Kosten",
  "Eigenes Material, eigene Geräte, eigenes Personal — keine Subunternehmer",
  "Erreichbar Mo – Sa von 7 bis 20 Uhr per Telefon und WhatsApp",
];

const sharedSteps: LandingPageData["steps"] = [
  {
    step: "1",
    title: "Anruf oder WhatsApp",
    desc: "Sie melden sich telefonisch oder per WhatsApp. Wir klären die wichtigsten Eckdaten: Objektart, Größe, Häufigkeit, Wunschtermin und Besonderheiten.",
  },
  {
    step: "2",
    title: "Besichtigung & Festpreis",
    desc: "Wir kommen — wenn nötig — kostenlos und unverbindlich vorbei oder kalkulieren auf Basis Ihrer Angaben. Sie erhalten ein klares, schriftliches Angebot.",
  },
  {
    step: "3",
    title: "Terminvereinbarung",
    desc: "Wir vereinbaren einen Termin, der zu Ihrem Alltag passt — gerne auch früh morgens, abends oder samstags. Bei laufenden Aufträgen feste Wochentage und Uhrzeiten.",
  },
  {
    step: "4",
    title: "Professionelle Ausführung",
    desc: "Unser Team kommt pünktlich, gut ausgerüstet und in Berufskleidung. Wir arbeiten zügig, gründlich und mit Respekt vor Ihrem Eigentum.",
  },
  {
    step: "5",
    title: "Abnahme & Garantie",
    desc: "Sie prüfen das Ergebnis gemeinsam mit uns. Sollte etwas nicht zur Zufriedenheit ausgeführt sein, bessern wir kostenfrei nach — das ist unser Versprechen.",
  },
];

/* ---------------------------- service: Wintergartenreinigung --------------*/
const wintergarten: ServiceBlueprint = {
  service: "Wintergartenreinigung",
  kicker: "Glasklarer Wintergarten vom Profi",
  h1Highlight: "Glasklar bis ins kleinste Profil",
  breadcrumbLabel: (city) => `Wintergartenreinigung ${city}`,
  introLead: (city) =>
    `Ein verschmutzter Wintergarten verliert viel von dem, was ihn besonders macht: Licht, Weite und das Gefühl, mitten im Garten zu sitzen. Wir reinigen Wintergärten in ${city} und Umgebung außen wie innen — Glas, Profile, Dichtungen, Dachflächen und schwer erreichbare Übergänge.`,
  introSecondary: (city) =>
    `<strong class='text-white/80'>Salif Gebäudeservice</strong> hat sich auf die fachgerechte Wintergartenreinigung in ${city} spezialisiert: mit Teleskoptechnik, osmotisch entsalztem Wasser und Reinigungsmitteln, die Aluminium, Holz, Kunststoff und Glas schonen.`,
  why: (city, cityIntro) => [
    `Ein Wintergarten ist ein Lieblingsplatz — und gleichzeitig eine bauliche Schwachstelle, wenn er ungepflegt bleibt. In ${city}, ${cityIntro}, ist die Belastung durch Pollen, Staub, Vogelkot und Algen besonders hoch. Schon nach wenigen Monaten setzen sich Schmutzfilme fest, die mit Wischer und Spülmittel kaum noch zu entfernen sind.`,
    `Dazu kommt das Dachglas: schräg geneigt, oft schwer erreichbar, häufig der erste Bereich, an dem Moose und Algen ansetzen. Wer hier zu lange wartet, riskiert Bewuchs in den Dichtungen, Korrosion an den Profilen und milchige Glasflächen, die selbst nach der Reinigung nicht mehr restlos klar werden.`,
    `Mit unserer professionellen Wintergartenreinigung in ${city} sorgen wir für maximalen Lichteinfall, intakte Dichtungen und ein gepflegtes Erscheinungsbild — innen wie außen. Eine 1–2 jährliche Reinigung reicht im Privatbereich häufig aus, im Gewerbe (Restaurants, Praxen, Hotels) empfehlen wir 4 Termine im Jahr.`,
    `Wir arbeiten mit demineralisiertem Wasser, weichen Bürsten und säurefreien Reinigern. So bleibt das Glas streifenfrei, die Profile makellos und die Dichtungen elastisch — ohne aggressive Chemie und ohne mechanische Beschädigungen.`,
  ],
  services: [
    {
      title: "Wintergarten innen — Glasflächen, Profile, Dichtungen",
      text: "Wir reinigen sämtliche Innenflächen Ihres Wintergartens: Senkrechtverglasung, Dachschrägen, Lamellen, Profile und Dichtungen. Auf Wunsch übernehmen wir auch das vorsichtige Verschieben von Möbeln und Pflanzen.",
    },
    {
      title: "Wintergarten außen — Dachglas, Fassade, Regenrinne",
      text: "Außen ist die Belastung am höchsten. Wir entfernen Pollen, Vogelkot, Algen und Moose von der gesamten Außenhaut — inklusive Dachglas, Übergängen zur Hauswand und der Regenrinne.",
    },
    {
      title: "Profil- und Dichtungspflege",
      text: "Aluminium-, Kunststoff- und Holzprofile reinigen wir materialschonend. Dichtungen werden vorsichtig gereinigt, getrocknet und auf Wunsch mit einem pflegenden Mittel nachbehandelt — das verlängert die Lebensdauer deutlich.",
    },
    {
      title: "Schwer erreichbare Stellen — Teleskoptechnik bis 12 m",
      text: "Hohe Dachverglasungen und enge Übergänge reinigen wir mit Teleskopstangen und osmotisch reinem Wasser. Kein Gerüst, keine Leiter im Wohnbereich — sauber, sicher, ohne Schäden.",
    },
  ],
  steps: sharedSteps,
  pricing: (city) => [
    `Die Kosten für eine Wintergartenreinigung in ${city} richten sich nach Größe, Bauart (Aluminium, Holz, Kunststoff) und Verschmutzungsgrad. Ein kleiner Anbau-Wintergarten ist in wenigen Stunden erledigt, eine große Wohnglashalle benötigt entsprechend mehr Zeit und Material.`,
    `Wir kalkulieren pro Objekt — nicht pauschal — und Sie erhalten vor jedem Termin einen klaren Festpreis. Mehr zu unseren <a href='/preise' class='text-[#22c55e] hover:underline font-semibold'>Preisstrukturen erfahren Sie hier</a>.`,
  ],
  trustBullets: sharedTrust("Ihrer Region"),
  faqsBase: (city) => [
    {
      q: `Wie oft sollte ein Wintergarten in ${city} gereinigt werden?`,
      a: `Im Privatbereich reichen 1 bis 2 professionelle Reinigungen pro Jahr — idealerweise im Frühjahr nach der Pollensaison und im Herbst vor dem Winter. Gewerbliche Wintergärten (Gastronomie, Praxen) empfehlen wir vierteljährlich zu reinigen.`,
    },
    {
      q: "Reinigen Sie auch das Dachglas von außen?",
      a: "Ja — Dachglas zu reinigen ist sogar einer unserer Schwerpunkte. Mit Teleskopstangen und osmotisch entsalztem Wasser erreichen wir auch hohe Dachflächen sicher vom Boden aus, ohne Leiter oder Gerüst.",
    },
    {
      q: "Welche Reinigungsmittel verwenden Sie?",
      a: "Wir setzen ausschließlich auf säurefreie, materialschonende Reiniger und demineralisiertes Wasser. So entstehen weder Kalkflecken noch Beschädigungen an Aluminium, Holz, Kunststoff oder Dichtungen.",
    },
    {
      q: "Müssen Möbel und Pflanzen ausgeräumt werden?",
      a: "Nein — wir bewegen Pflanzen und kleinere Möbel auf Wunsch vorsichtig zur Seite und stellen alles nach der Reinigung wieder zurück. Größere Möbel sprechen wir bei der Besichtigung ab.",
    },
    {
      q: `Wie lange dauert eine Wintergartenreinigung in ${city}?`,
      a: `Ein Standard-Wintergarten ist in 2–4 Stunden komplett gereinigt — innen und außen. Bei großen Wohnglashallen oder stark vernachlässigten Wintergärten planen wir entsprechend mehr Zeit ein.`,
    },
    {
      q: "Reinigen Sie auch im Winter?",
      a: "Ja, wir arbeiten ganzjährig — solange die Außentemperaturen es zulassen. Bei Frost konzentrieren wir uns auf die Innenflächen, im Frühjahr folgt dann die Außenreinigung mit Dachglas.",
    },
  ],
};

/* ---------------------------- service: Unterhaltsreinigung ---------------*/
const unterhalt: ServiceBlueprint = {
  service: "Unterhaltsreinigung",
  kicker: "Tägliche Sauberkeit ohne Aufwand für Sie",
  h1Highlight: "Zuverlässige Reinigung auf Festtermin",
  breadcrumbLabel: (city) => `Unterhaltsreinigung ${city}`,
  introLead: (city) =>
    `Unterhaltsreinigung ist die Grundlage jedes gepflegten Objekts — und in ${city} eine der häufigsten Anfragen, die wir bekommen. Ob Büro, Praxis, Treppenhaus, Kindergarten oder Verkaufsfläche: regelmäßige Reinigung auf festem Plan spart Geld, schützt die Substanz und sorgt für ein professionelles Erscheinungsbild.`,
  introSecondary: (city) =>
    `<strong class='text-white/80'>Salif Gebäudeservice</strong> übernimmt die komplette Unterhaltsreinigung in ${city} — täglich, wöchentlich oder im individuellen Rhythmus, mit festem Ansprechpartner und kontrollierter Qualität.`,
  why: (city, cityIntro) => [
    `${city}, ${cityIntro}, hat eines mit fast jeder anderen Stadt gemeinsam: Sauberkeit ist kein Zufallsergebnis. Wer auf eigene Faust putzt, putzt einmal viel und dann lange gar nicht — das Ergebnis ist eine Substanz, die langsam verschleißt, und ein Eindruck, der gegenüber Kunden, Mitarbeitern oder Mietern nicht professionell wirkt.`,
    `Unterhaltsreinigung heißt nichts anderes als: kleine, regelmäßige Eingriffe statt großer Verzweiflungsaktionen. Böden werden bevor Schmutz sich festsetzt gereinigt, Sanitärbereiche bleiben hygienisch, Tastaturen, Türgriffe und Lichtschalter werden in den Rhythmus aufgenommen, in dem sich Keime wirklich vermehren.`,
    `Im Gewerbe spart das spürbar Geld: PVC-Böden halten doppelt so lange, Teppiche müssen seltener gegrundreinigt werden, und Mitarbeiter melden sich nachweislich seltener krank, wenn Hygieneflächen regelmäßig gewischt werden. Im Privatbereich (insbesondere bei größeren WEGs in ${city}) sinkt der Aufwand für den Verwalter, weil Probleme früher erkannt werden.`,
    `Wir kommen mit eigenem Material, eigener Maschine und festen Mitarbeitern — Sie sehen also nicht jede Woche ein anderes Gesicht. Das schafft Vertrauen, und es macht die Qualität dauerhaft kontrollierbar.`,
  ],
  services: [
    {
      title: "Büroreinigung — Schreibtische, Böden, Sanitär, Küchen",
      text: "Wir reinigen Büroräume nach festem Plan: Schreibtische, Bildschirme (nur auf Wunsch), Sanitärbereiche, Teeküchen, Böden und Müll. Inklusive Auffüllen von Seife, Handtüchern und Toilettenpapier auf Wunsch.",
    },
    {
      title: "Praxis- und Therapiereinigung — mit Hygienefokus",
      text: "In Praxen, Therapieeinrichtungen und medizinischen Räumen arbeiten wir mit Flächendesinfektion und festem Hygieneprotokoll. Wischtücher werden pro Raum gewechselt, kritische Kontaktflächen separat behandelt.",
    },
    {
      title: "Treppenhausreinigung in Mehrfamilienhäusern",
      text: "Wir übernehmen die wöchentliche, 14-tägige oder monatliche Reinigung von Treppenhäusern, Aufzügen, Eingangsbereichen, Briefkästen und Kellerfluren in WEGs und Mietshäusern.",
    },
    {
      title: "Reinigung von Verkaufsflächen und Gastronomie",
      text: "Geschäfte, Cafés und Restaurants in der Innenstadt reinigen wir vor oder nach Öffnungszeit — Böden, Tische, Theken, Sanitärbereiche und Schaufenster. Alles in einem Rhythmus, der zu Ihrem Geschäftsalltag passt.",
    },
  ],
  steps: sharedSteps,
  pricing: (city) => [
    `Unterhaltsreinigung in ${city} wird in der Regel pro Quadratmeter und pro Termin oder als Stundensatz (ca. 28 €/h inkl. Material) abgerechnet. Bei laufenden Verträgen sinken die Preise spürbar, weil Anfahrt und Logistik nur einmal kalkuliert werden müssen.`,
    `Wir erstellen Ihnen ein klares Festpreis-Angebot mit fixem Wochen- oder Monatsbetrag — keine Überraschungen, keine versteckten Aufschläge. Details zur Preisstruktur finden Sie auf unserer <a href='/preise' class='text-[#22c55e] hover:underline font-semibold'>Preisseite</a>.`,
  ],
  trustBullets: sharedTrust("Ihrer Region"),
  faqsBase: (city) => [
    {
      q: `Wie oft sollte unsere Büro-Unterhaltsreinigung in ${city} kommen?`,
      a: `Das hängt von Größe, Personenzahl und Branche ab. Ein kleines Büro mit 5–8 Personen reicht meist 1× pro Woche, ein Großraumbüro oder eine Arztpraxis braucht 3–5 Reinigungen pro Woche. Wir beraten Sie ehrlich — auch wenn weniger reicht.`,
    },
    {
      q: "Bringen Sie Material und Maschinen selbst mit?",
      a: "Ja — wir kommen mit kompletter Ausstattung: Wischsystem, Sauger, Reinigungsmittel, Mikrofasertücher, Müllsäcke und alles, was wir brauchen. Sie müssen nichts vorhalten außer (auf Wunsch) Verbrauchsmaterial wie Seife und Toilettenpapier.",
    },
    {
      q: "Können wir feste Mitarbeiter behalten?",
      a: "Ja — bei laufenden Aufträgen arbeiten Sie mit festen Reinigungskräften, die Ihr Objekt kennen. Bei Urlaub oder Krankheit übernimmt ein eingearbeitetes Backup-Team, damit der Rhythmus nicht reißt.",
    },
    {
      q: "Reinigen Sie auch außerhalb der Bürozeiten?",
      a: "Ja — die meisten unserer Kunden wünschen Reinigung früh morgens vor Öffnung, abends nach Feierabend oder am Wochenende. Wir richten uns nach Ihrem Geschäftsalltag, nicht umgekehrt.",
    },
    {
      q: `Sind Sie haftpflichtversichert?`,
      a: `Ja — Salif Gebäudeservice ist umfassend haftpflichtversichert. Bei Schäden an Ihrem Eigentum übernimmt unsere Versicherung — dokumentiert, transparent, unkompliziert.`,
    },
    {
      q: `Kann der Vertrag flexibel angepasst werden?`,
      a: `Selbstverständlich. Bei Personalwechsel, Umzug innerhalb von ${city} oder veränderten Anforderungen passen wir Frequenz und Umfang flexibel an. Eine schriftliche Mitteilung reicht.`,
    },
  ],
};

/* ---------------------------- service: Grundreinigung --------------------*/
const grund: ServiceBlueprint = {
  service: "Grundreinigung",
  kicker: "Frischer Start — bis in jede Fuge",
  h1Highlight: "Tief sauber statt nur oberflächlich",
  breadcrumbLabel: (city) => `Grundreinigung ${city}`,
  introLead: (city) =>
    `Eine Grundreinigung ist mehr als nur „einmal richtig putzen". Sie ist die Tiefenreinigung, die Beläge entfernt, die normale Unterhaltsreinigung nicht mehr schafft — alte Wachsschichten, eingebrannter Fettfilm in Küchen, Algen in Fliesenfugen, Vergrauungen im Teppich. In ${city} ist sie der Klassiker beim Mieterwechsel, bei der Übergabe eines neuen Bürogebäudes und vor Eröffnungen.`,
  introSecondary: (city) =>
    `<strong class='text-white/80'>Salif Gebäudeservice</strong> übernimmt Grundreinigungen in ${city} mit professioneller Maschinentechnik (Einscheibenmaschine, Nasssauger, Polierautomat) und einem geschulten Team, das auch eingebrannten Schmutz beseitigt.`,
  why: (city, cityIntro) => [
    `Auch der bestgeführte Unterhaltsreinigungsplan kommt irgendwann an seine Grenzen. Über Jahre setzen sich Beläge ab, die mit Wischwasser und normaler Pflege nicht mehr zu entfernen sind: alte Wachs- und Polymerschichten auf PVC, kalkartige Vergrauungen auf Steinböden, eingebrannte Fettfilme in gewerblichen Küchen, oder schlicht das, was eine schlechte Vorgängerreinigung hinterlassen hat.`,
    `In ${city}, ${cityIntro}, sehen wir besonders häufig Grundreinigungsbedarf nach Mieterwechseln, bei Übernahme eines Bestandsobjekts oder vor einer geplanten Vermietung. Eine Grundreinigung zur richtigen Zeit spart langfristig erhebliche Renovierungskosten, weil Böden, Fliesen und Sanitäranlagen wieder in den Ausgangszustand zurückgeführt werden.`,
    `Wir arbeiten mit Einscheibenmaschine, Pad-System und materialgerechten Grundreinigern. Anschließend kann der Boden — wenn gewünscht — frisch eingepflegt werden: PVC versiegelt, Stein imprägniert, Teppich tiefengereinigt. Das Ergebnis ist nicht nur sichtbar, sondern hält im Idealfall mehrere Jahre.`,
    `Eine Grundreinigung lohnt sich übrigens auch im Privathaushalt — vor Einzug, nach Renovierung, nach Wasserschäden oder einfach alle paar Jahre, um die Substanz zu erhalten. Wir beraten ehrlich, ob eine Grundreinigung sinnvoll ist oder ob eine intensive Unterhaltsreinigung reicht.`,
  ],
  services: [
    {
      title: "Grundreinigung Bodenbeläge — PVC, Linoleum, Stein, Fliesen",
      text: "Wir entfernen alte Pflegefilme, Wachsschichten und Verkrustungen mit Einscheibenmaschine und passendem Grundreiniger. Anschließend Nasssaugen, klar wischen und auf Wunsch neue Pflegeschicht aufbringen.",
    },
    {
      title: "Sanitär-Grundreinigung — Kalk, Urinstein, Schimmel",
      text: "Sanitärbereiche tiefen wir mit speziellen sauren und alkalischen Reinigern: Urinstein, Kalk, Schimmel und Verfärbungen in Fugen werden gründlich entfernt. Inklusive Lüftungsgittern und Armaturen.",
    },
    {
      title: "Küchen-Grundreinigung — Fettfilme und Verkrustungen",
      text: "Gewerbeküchen, Gastronomie und private Küchen reinigen wir bis hinter Herd und Dunstabzug. Alte Fettfilme, eingebrannter Schmutz und Verkrustungen werden mit professionellen Fettlösern entfernt.",
    },
    {
      title: "Teppich-Tiefenreinigung — Sprühextraktion",
      text: "Wir reinigen Teppichböden in Sprühextraktion mit Profimaschine. Schmutz, Hausstaubmilben und Gerüche werden tief aus dem Flor gelöst. Trocknungszeit meist nur wenige Stunden.",
    },
  ],
  steps: sharedSteps,
  pricing: (city) => [
    `Die Kosten für eine Grundreinigung in ${city} hängen stark von der Fläche, Bodenart und Verschmutzungsgrad ab. Als Richtwert: PVC- oder Linoleum-Grundreinigung liegt häufig im Bereich von 3–6 €/m² (zzgl. Pflegeschicht). Sanitär- und Küchen-Grundreinigungen kalkulieren wir pro Objekt.`,
    `Wir kommen kostenlos zur Besichtigung und kalkulieren ohne versteckte Aufschläge. Mehr zu unseren Preisen finden Sie auf der <a href='/preise' class='text-[#22c55e] hover:underline font-semibold'>Preisseite</a>.`,
  ],
  trustBullets: sharedTrust("Ihrer Region"),
  faqsBase: (city) => [
    {
      q: `Was ist der Unterschied zwischen Unterhalts- und Grundreinigung?`,
      a: `Unterhaltsreinigung ist die regelmäßige Pflege (täglich, wöchentlich) — sie hält den Status. Grundreinigung ist die Tiefenreinigung (alle 1–3 Jahre) — sie stellt den Ausgangszustand wieder her. Beide ergänzen sich; nur eine Grundreinigung ohne Pflege ist auf Dauer keine sinnvolle Strategie.`,
    },
    {
      q: "Wie lange dauert eine Grundreinigung?",
      a: "Faustregel: 50–100 m² PVC-Boden grundreinigen + neu einpflegen dauert mit Maschine 4–6 Stunden inkl. Trocknung. Sanitär und Küchen sind je nach Verschmutzung schneller erledigt.",
    },
    {
      q: "Muss der Raum komplett leer sein?",
      a: "Idealerweise ja, weil Maschinen wie die Einscheibenmaschine Bewegungsfreiheit brauchen. Kleinere Möbel rücken wir auf Wunsch zur Seite — größere sollten vorher geräumt werden.",
    },
    {
      q: `Reinigen Sie auch nach Wasserschäden oder Renovierung in ${city}?`,
      a: `Ja — Bauendreinigung und Grundreinigung nach Wasserschaden sind klassische Anwendungsfälle. Wir entfernen Staub, Farb- und Gipsspritzer, polieren Böden und übergeben das Objekt im einwandfreien Zustand.`,
    },
    {
      q: "Wird der Boden anschließend neu versiegelt?",
      a: "Auf Wunsch — ja. Wir bringen für PVC, Linoleum und Vinyl eine frische Pflegeschicht (2–3 Schichten Polymerdispersion) auf. Stein und Fliese können imprägniert werden. Das ist optional und im Angebot transparent ausgewiesen.",
    },
    {
      q: `Wie schnell ist ein Termin in ${city} möglich?`,
      a: `In der Regel innerhalb von 5–10 Werktagen. Bei kurzfristigem Bedarf (Mieterwechsel, Notfälle) versuchen wir, schneller zu reagieren — rufen Sie uns einfach an.`,
    },
  ],
};

/* ---------------------------- service: Büroreinigung ---------------------*/
const buero: ServiceBlueprint = {
  service: "Büroreinigung",
  kicker: "Sauberes Büro, fokussierter Kopf",
  h1Highlight: "Frische Arbeitsräume jeden Morgen",
  breadcrumbLabel: (city) => `Büroreinigung ${city}`,
  introLead: (city) =>
    `Ein sauberes Büro ist nicht nur eine Frage der Optik — es senkt Krankenstand, schützt Geräte und sendet ein klares Signal an Kunden, Bewerber und Mitarbeiter. In ${city} reinigen wir vom 2-Personen-Coworking bis zum Etagenbüro mit 50 Arbeitsplätzen.`,
  introSecondary: (city) =>
    `<strong class='text-white/80'>Salif Gebäudeservice</strong> ist Ihr verlässlicher Partner für Büroreinigung in ${city}: feste Teams, klare Reinigungspläne, dokumentierte Qualität.`,
  why: (city, cityIntro) => [
    `Ein durchschnittlicher Bürotag hinterlässt mehr Spuren, als man denkt: Hautschuppen auf Schreibtischen, Mikropartikel auf Tastaturen und Telefonen, Staub in Druckern, Krümel und Kaffeerand in Teeküchen. Bleibt das liegen, leidet zuerst die Stimmung — und dann das Material.`,
    `In ${city}, ${cityIntro}, ist die Bürodichte hoch und der Wettbewerb um Mitarbeiter ebenso. Eine gepflegte Arbeitsumgebung ist ein Faktor, der bei Bewerbungsgesprächen, Kundenterminen und Mitarbeiterbindung mehr Gewicht hat, als die meisten Geschäftsführer annehmen.`,
    `Wir arbeiten nach festem Reinigungsplan — angepasst an Ihre Branche und Ihren Rhythmus. Schreibtische, Sanitärbereiche, Küchen, Böden und Eingangsbereiche werden in dokumentierten Intervallen gereinigt. Sie wissen jederzeit, was wann gemacht wird.`,
    `Auf Wunsch ergänzen wir die klassische Büroreinigung um Fensterreinigung, Polsterreinigung, Teppich-Tiefenreinigung und das Auffüllen von Verbrauchsmaterial (Seife, Handtücher, Toilettenpapier). Alles aus einer Hand — ein Ansprechpartner, eine Rechnung.`,
  ],
  services: [
    {
      title: "Schreibtische, Bildschirme, Telefone",
      text: "Wir wischen Schreibtische staubfrei (private Unterlagen bleiben unangetastet), reinigen auf Wunsch Bildschirme antistatisch und desinfizieren Telefonhörer sowie Tastaturen.",
    },
    {
      title: "Sanitärbereiche & Küchen",
      text: "WCs, Waschbecken, Armaturen, Spiegel, Türgriffe — alles wird desinfiziert und glänzend gereinigt. Teeküchen inklusive Spüle, Mikrowelle (außen), Kühlschrankgriffen und Müllbehältern.",
    },
    {
      title: "Böden & Eingangsbereiche",
      text: "Hartböden werden gesaugt und feucht gewischt, Teppichböden gesaugt. Schmutzfangmatten im Eingangsbereich werden täglich oder wöchentlich ausgeklopft bzw. ausgetauscht.",
    },
    {
      title: "Verbrauchsmaterial & Müll",
      text: "Auf Wunsch füllen wir Seife, Handtuchpapier und Toilettenpapier auf. Müll wird täglich oder wöchentlich entleert und nach Fraktionen getrennt — Papier, Restmüll, Bio.",
    },
  ],
  steps: sharedSteps,
  pricing: (city) => [
    `Büroreinigung in ${city} berechnen wir nach Quadratmeter und Frequenz oder pauschal pro Termin. Bei wöchentlicher Reinigung von 100–200 m² Büroflächen liegen die monatlichen Kosten meist im niedrigen dreistelligen Bereich.`,
    `Sie erhalten ein klares Festpreis-Angebot mit transparenter Aufstellung der Leistungen. Weitere Hinweise zur Preisstruktur finden Sie auf unserer <a href='/preise' class='text-[#22c55e] hover:underline font-semibold'>Preisseite</a>.`,
  ],
  trustBullets: sharedTrust("Ihrer Region"),
  faqsBase: (city) => [
    {
      q: "Reinigen Sie auch außerhalb der Geschäftszeiten?",
      a: "Ja — die meisten Bürokunden in der Region buchen Reinigung früh morgens (vor 8 Uhr) oder abends (ab 18 Uhr). Wir richten uns flexibel nach Ihrem Geschäftsalltag, auch am Samstag.",
    },
    {
      q: `Können wir die Reinigung in ${city} kurzfristig pausieren?`,
      a: `Ja — bei Betriebsferien, Schließungen oder Urlaub können Sie die Reinigung mit wenigen Tagen Vorlauf pausieren. Wir berechnen nur tatsächlich erbrachte Leistungen.`,
    },
    {
      q: "Wer reinigt unser Büro — immer dieselbe Person?",
      a: "Ja, wir setzen feste Mitarbeiter ein. Sie lernen Ihr Objekt kennen, wissen, was zu tun ist, und Sie wissen, wer kommt. Bei Urlaub oder Krankheit übernimmt ein eingearbeiteter Vertretungskraft.",
    },
    {
      q: "Wie ist die Sicherheit (Schlüssel, Zugang) geregelt?",
      a: "Schlüssel werden mit Übergabeprotokoll übergeben, dokumentiert und sicher verwahrt. Alternativ können Sie uns Code-Zugang oder Wachschutz-Übergabe stellen. Mitarbeiter unterzeichnen Verschwiegenheitserklärungen.",
    },
    {
      q: "Bekommen wir eine ordentliche Rechnung mit MwSt.?",
      a: "Selbstverständlich — Sie erhalten monatlich eine ordentliche Rechnung mit ausgewiesener Umsatzsteuer, geeignet für die Buchhaltung und auch für Vorsteuerabzug.",
    },
    {
      q: `Bedienen Sie nur ${city} oder auch das Umland?`,
      a: `Wir sind in ${city} und dem gesamten Umkreis aktiv — typische Anfahrt 0–30 Minuten. Für Aufträge außerhalb sprechen wir die Anfahrt im Angebot transparent ab.`,
    },
  ],
};

/* ---------------------------- service: Dachrinnenreinigung ---------------*/
const dachrinne: ServiceBlueprint = {
  service: "Dachrinnenreinigung",
  kicker: "Bevor das Wasser den falschen Weg sucht",
  h1Highlight: "Freie Rinnen, intaktes Dach",
  breadcrumbLabel: (city) => `Dachrinnenreinigung ${city}`,
  introLead: (city) =>
    `Verstopfte Dachrinnen sind die häufigste Ursache für Wasserschäden an Fassade, Sockel und Keller — und in ${city} ein Dauerthema, weil Laub, Moos und Vogelnester regelmäßig zu Verstopfungen führen. Wir reinigen Dachrinnen, Fallrohre und Sammler fachgerecht — vom Boden aus oder mit Hubsteiger.`,
  introSecondary: (city) =>
    `<strong class='text-white/80'>Salif Gebäudeservice</strong> übernimmt Dachrinnenreinigung in ${city}, prüft auf Schäden, beseitigt Verstopfungen in Fallrohren und dokumentiert das Ergebnis fotografisch.`,
  why: (city, cityIntro) => [
    `Eine Dachrinne ist klein — und wird häufig vergessen, bis es zu spät ist. Sammelt sich Laub und Moos in der Rinne, läuft das Regenwasser über die Kante, durchfeuchtet die Fassade und sucht sich seinen Weg in den Sockel. Im Keller folgen feuchte Wände, Schimmel und teure Renovierungen.`,
    `In ${city}, ${cityIntro}, sind die Belastungen besonders hoch: viel Baumbestand, Pollenflug im Frühling, Laubfall im Herbst, Algenwachstum im Sommer. Eine Reinigung 1–2 Mal pro Jahr ist nicht Luxus, sondern bauliche Vorsorge.`,
    `Wir reinigen Dachrinnen wenn möglich vom Boden aus mit Teleskopstangen und Kamera — das ist sicher, schnell und für die meisten Einfamilienhäuser ideal. Bei großen oder schwer zugänglichen Objekten (Mehrfamilienhäuser, Industrie) setzen wir Hubsteiger ein. Verstopfte Fallrohre spülen wir mit Hochdruck frei.`,
    `Im Anschluss erhalten Sie eine kurze Dokumentation: was war drin, gibt es Schäden, müssen einzelne Schellen oder Verbindungen erneuert werden. So entscheiden Sie auf Faktenbasis, was kurzfristig oder mittelfristig zu tun ist.`,
  ],
  services: [
    {
      title: "Dachrinne reinigen — Laub, Moos, Schlamm",
      text: "Wir entfernen Laub, Moos, Schlamm und Vogelnester aus den Dachrinnen — vom Boden aus mit Teleskoptechnik oder vom Hubsteiger aus. Anschließend kurze Spülung, damit das Wasser frei fließt.",
    },
    {
      title: "Fallrohre durchspülen & Verstopfungen lösen",
      text: "Verstopfte Fallrohre spülen wir mit Hochdruck oder mechanisch frei. Bei hartnäckigen Verstopfungen (Vogelnest, Kalkplaque) arbeiten wir mit speziellen Reinigungsspiralen.",
    },
    {
      title: "Sichtprüfung & Schadensprotokoll",
      text: "Wir prüfen die Rinne auf Risse, lose Schellen, gebrochene Verbindungsstücke und durchgerostete Stellen. Auf Wunsch erhalten Sie ein fotografisches Schadensprotokoll mit klaren Handlungsempfehlungen.",
    },
    {
      title: "Laubschutzgitter montieren",
      text: "Auf Wunsch montieren wir Laubschutzgitter, die zukünftiges Verstopfen deutlich reduzieren — besonders sinnvoll bei Häusern unter Bäumen oder mit schwer zugänglicher Rinne.",
    },
  ],
  steps: sharedSteps,
  pricing: (city) => [
    `Eine Dachrinnenreinigung in ${city} kostet bei einem Standard-Einfamilienhaus (ca. 30–40 Meter Rinne) typischerweise zwischen 150 und 280 €. Bei mehrgeschossigen Objekten oder Hubsteigereinsatz entsprechend mehr.`,
    `Sie erhalten vorab einen Festpreis nach einer kurzen Begehung. Mehr Informationen auf unserer <a href='/preise' class='text-[#22c55e] hover:underline font-semibold'>Preisseite</a>.`,
  ],
  trustBullets: sharedTrust("Ihrer Region"),
  faqsBase: (city) => [
    {
      q: `Wie oft muss die Dachrinne in ${city} gereinigt werden?`,
      a: `Standard ist 1× pro Jahr im Spätherbst — wenn das Laub gefallen ist. Bei viel Baumbestand oder Nadelbäumen empfehlen wir 2× jährlich (Herbst und Frühjahr). Pflanzenfreie Lagen reichen oft alle 2 Jahre.`,
    },
    {
      q: "Brauchen Sie für die Reinigung ein Gerüst?",
      a: "Meist nicht. Für die meisten Einfamilienhäuser arbeiten wir vom Boden aus mit Teleskopsystemen und einer Endoskop-Kamera. Nur bei Sonderfällen (Industriehallen, Gewerbeobjekte ab 3 Geschossen) setzen wir Hubsteiger ein.",
    },
    {
      q: "Was passiert mit dem Schmutz?",
      a: "Wir nehmen den gesamten Schmutz mit und entsorgen ihn fachgerecht. Sie haben nach unserer Arbeit weder Säcke noch verstreuten Schmutz im Garten.",
    },
    {
      q: "Erkennen Sie auch versteckte Schäden?",
      a: "Ja — mit Endoskop-Kamera prüfen wir den Innenzustand der Rinnen und Fallrohre. Risse, lose Verbindungen und Korrosionsstellen werden dokumentiert und auf Wunsch in einem kurzen Protokoll festgehalten.",
    },
    {
      q: `Reinigen Sie auch bei feuchtem Wetter in ${city}?`,
      a: `Leichten Regen können wir oft ignorieren. Bei Dauerregen oder Sturm verschieben wir den Termin im Sinne der Sicherheit — Arbeit auf nassen Dächern und an offenen Rinnen ist zu riskant.`,
    },
    {
      q: "Wie lange dauert eine Dachrinnenreinigung?",
      a: "Ein Standard-Einfamilienhaus ist in 1–2 Stunden komplett gereinigt — inklusive Sichtprüfung und Endabnahme. Bei größeren Objekten entsprechend länger.",
    },
  ],
};

/* ---------------------------- service: Winterdienst ----------------------*/
const winter: ServiceBlueprint = {
  service: "Winterdienst",
  kicker: "Sicherer Weg, sauberer Eingang",
  h1Highlight: "Schneeräumung & Streudienst pünktlich",
  breadcrumbLabel: (city) => `Winterdienst ${city}`,
  introLead: (city) =>
    `Der Winterdienst ist eine der wichtigsten, aber auch unbeliebtesten Pflichten von Eigentümern und Vermietern in ${city}. Wer nicht räumt und streut, haftet — und in der Praxis bedeutet das früh aufstehen, körperlich anstrengende Arbeit und die ständige Sorge, ob alles rechtzeitig erledigt ist.`,
  introSecondary: (city) =>
    `<strong class='text-white/80'>Salif Gebäudeservice</strong> übernimmt den kompletten Winterdienst in ${city} für Wohngebäude, Gewerbeobjekte, Praxen und WEG-Anlagen — zuverlässig, pünktlich, mit dokumentiertem Räumprotokoll.`,
  why: (city, cityIntro) => [
    `Die Räum- und Streupflicht trifft in Deutschland den Eigentümer — und kann per Mietvertrag oder Verwaltervertrag auf Mieter oder Dienstleister übertragen werden. In ${city}, ${cityIntro}, gelten die kommunalen Räumpflichten ab in der Regel 7 Uhr werktags und 8 Uhr sonn- und feiertags bis 20 Uhr.`,
    `Wer der Räumpflicht nicht nachkommt, riskiert Bußgelder und — im Schadensfall — empfindliche Haftungsansprüche. Stürzt jemand auf einem ungeräumten Gehweg, haftet der Pflichtige für Behandlungskosten, Verdienstausfall und Schmerzensgeld. Hier zahlt sich ein professioneller Winterdienst sofort aus.`,
    `Wir übernehmen die komplette Winterdienst-Saison: vom ersten Schneefall bis zum Tauwetter. Geräumt wird in allen Schneefall-Szenarien (Pulver, Pappschnee, Eisregen). Gestreut wird mit Splitt oder umweltschonendem Granulat — auf Wunsch auch mit Auftausalz bei Glatteis.`,
    `Sie erhalten ein Räumprotokoll, das im Schadensfall Ihre Haftung minimiert: wer hat wann geräumt und gestreut, mit welchem Material, an welcher Stelle. Das ist nicht nur Service, sondern aktive Risikoabsicherung.`,
  ],
  services: [
    {
      title: "Schneeräumung — Gehweg, Hofeinfahrt, Parkplatz",
      text: "Wir räumen Gehwege auf der ganzen Front Ihrer Liegenschaft, Hofeinfahrten, Parkplätze und gemeinschaftliche Zugänge nach kommunaler Vorgabe — in der Regel auf 1,2–1,5 m Breite.",
    },
    {
      title: "Streudienst — Splitt, Granulat oder Salz",
      text: "Standard ist umweltschonender Splitt oder Granulat. Bei Glatteis setzen wir auf Anfrage Auftausalz ein. Streuung erfolgt vollflächig auf allen Verkehrsflächen.",
    },
    {
      title: "Bereitschaft 24/7 in der Wintersaison",
      text: "In der Winterperiode sind wir 7 Tage die Woche im Einsatz und reagieren auf Schneefall innerhalb der gesetzlichen Räumfrist. Auch bei nächtlichem Schneefall ist morgens alles geräumt.",
    },
    {
      title: "Räumprotokoll & Haftungssicherheit",
      text: "Wir dokumentieren jeden Einsatz mit Uhrzeit, Temperatur und Material. Dieses Protokoll erhalten Sie monatlich und können es im Schadensfall vorweisen — wichtig für die Haftungsfrage.",
    },
  ],
  steps: sharedSteps,
  pricing: (city) => [
    `Winterdienst in ${city} wird üblicherweise als Saisonpauschale (November bis März) abgerechnet — abhängig von der zu räumenden Fläche und der Komplexität. Alternativ: Abrechnung pro Einsatz, wenn Sie nur Bereitschaft buchen möchten.`,
    `Wir kommen kostenlos zur Vorab-Besichtigung und kalkulieren transparent. Details zu unseren Tarifen finden Sie auf der <a href='/preise' class='text-[#22c55e] hover:underline font-semibold'>Preisseite</a>.`,
  ],
  trustBullets: sharedTrust("Ihrer Region"),
  faqsBase: (city) => [
    {
      q: `Welche Räumzeiten gelten in ${city}?`,
      a: `In der Regel werktags ab 7 Uhr, sonn- und feiertags ab 8 Uhr — beide Tage bis 20 Uhr. Genaue Vorgaben können je nach Stadtteil leicht abweichen; wir richten uns nach der Satzung Ihrer Kommune.`,
    },
    {
      q: "Wer haftet, wenn jemand auf dem Gehweg stürzt?",
      a: "Grundsätzlich der Eigentümer (häufig per Vertrag der Mieter oder ein Dienstleister wie wir). Mit einem klar dokumentierten Winterdienst durch Salif Gebäudeservice geht die Verkehrssicherungspflicht auf uns über — entsprechend dokumentiert und versichert.",
    },
    {
      q: "Welches Streumittel verwenden Sie?",
      a: "Standard ist Splitt oder umweltschonendes Granulat. Auftausalz nur bei tatsächlichem Glatteis und nach Absprache — wir wissen, dass es Pflanzen und Pfoten schadet und setzen es sparsam ein.",
    },
    {
      q: "Was passiert bei nächtlichem Schneefall?",
      a: "Wir überwachen Wetterdaten und sind morgens vor der gesetzlichen Räumzeit vor Ort. Bei extremen Wetterlagen erfolgt ein Mehrfachgang, damit der Weg den Tag über sicher bleibt.",
    },
    {
      q: "Kann ich den Winterdienst nur für Glatteis-Bereitschaft buchen?",
      a: "Ja — Glatteis-Bereitschaft ohne Saisonpauschale ist möglich. Wir kommen dann auf Abruf bei Bedarf und berechnen pro Einsatz.",
    },
    {
      q: `Ab wann sollte der Vertrag in ${city} stehen?`,
      a: `Idealerweise bis Mitte Oktober. So sind alle Liegenschaften erfasst, Routen geplant und Material vorbereitet, bevor der erste Schnee fällt. Spätere Anfragen versuchen wir trotzdem aufzunehmen, soweit Kapazitäten reichen.`,
    },
  ],
};

/* ---------------------------- service: Glasreinigung --------------------*/
const glas: ServiceBlueprint = {
  service: "Glasreinigung",
  kicker: "Streifenfreie Glasflächen vom Profi",
  h1Highlight: "Klare Sicht auf jedes Detail",
  breadcrumbLabel: (city) => `Glasreinigung ${city}`,
  introLead: (city) =>
    `Glasflächen prägen den Eindruck eines Gebäudes wie kaum etwas anderes. Saubere Schaufenster, klare Fassaden und streifenfreie Bürofenster sind in ${city} ein unmittelbarer Wettbewerbsvorteil — verschmutzte Glasflächen dagegen wirken vernachlässigt und schrecken Kunden ab.`,
  introSecondary: (city) =>
    `<strong class='text-white/80'>Salif Gebäudeservice</strong> übernimmt die professionelle Glasreinigung in ${city} und Umgebung — vom Schaufenster bis zur Glasfassade, mit osmotisch reinem Wasser und Teleskoptechnik bis 12 m.`,
  why: (city, cityIntro) => [
    `Glas zu reinigen klingt einfach — bis man es ernsthaft macht. Wer streifenfrei arbeiten will, braucht weiches Wasser, das richtige Werkzeug (Einwascher, Lederabzieher), die richtige Technik und am Ende viel Übung. Anders gesagt: jeder kann Fenster putzen, aber kaum jemand erzielt das Ergebnis, das ein Profi in einem Bruchteil der Zeit liefert.`,
    `In ${city}, ${cityIntro}, kommen weitere Faktoren dazu: Straßenstaub, Abgas-Partikel, Kalk-Niederschläge nach Regen und Pollen im Frühling lagern sich tagtäglich auf Glas ab. Bei Schaufenstern und Ladenfassaden bedeutet das: alle 2–4 Wochen ist Pflichtprogramm, sonst leidet der Eindruck.`,
    `Wir reinigen mit osmotisch demineralisiertem Wasser, das auf dem Glas trocknet, ohne Kalkstreifen zu hinterlassen — der goldene Standard. Bei großen Glasflächen, Wintergartendächern und Glasfassaden arbeiten wir mit Teleskopsystemen bis 12 m Reichweite, sicher vom Boden aus.`,
    `Für Privatkunden bieten wir Frühjahrs- und Herbst-Termine, für Gewerbe regelmäßige Wartungsverträge. Beides mit klaren Festpreisen, dokumentierten Terminen und festen Ansprechpartnern.`,
  ],
  services: [
    {
      title: "Schaufenster & Ladenfronten",
      text: "Wir reinigen Schaufenster, Eingangstüren und Ladenfronten innen und außen — auf Wunsch vor oder nach Öffnungszeit, damit Ihr Geschäftsalltag nicht gestört wird. Ergebnis: makelloses Glas, ohne Streifen, ohne Schlieren.",
    },
    {
      title: "Glasfassaden & Bürogebäude",
      text: "Große Glasfassaden reinigen wir mit Teleskoptechnik vom Boden aus. Für höhere Gebäude oder Sonderfälle setzen wir Hubsteiger ein. Wartungsverträge mit fester Frequenz sorgen für konstant gutes Erscheinungsbild.",
    },
    {
      title: "Wintergärten & Lichtkuppeln",
      text: "Wintergärten, Glasdächer und Lichtkuppeln reinigen wir innen und außen — inklusive Profile und Dichtungen. Gerade bei Dachschrägen ist Erfahrung entscheidend, damit das Wasser nicht in die Profile läuft.",
    },
    {
      title: "Glasbrüstungen, Trennwände, Glastüren",
      text: "Im Bürobereich reinigen wir Glasbrüstungen, Trennwände und Glastüren — alles, was im Sichtfeld liegt und ständig in Bewegung ist. Inklusive Beseitigung von Fingerabdrücken und Handabdrücken.",
    },
  ],
  steps: sharedSteps,
  pricing: (city) => [
    `Glasreinigung in ${city} berechnen wir entweder pro Fenster, pro m² oder bei Wartungsverträgen pauschal pro Termin. Für eine Standard-Wohnhaus-Fensterreinigung (15–20 Fenster, beidseitig inkl. Rahmen) liegen die Kosten meist zwischen 90 und 180 €.`,
    `Sie erhalten ein klares Angebot ohne versteckte Kosten. Mehr zur Preisstruktur auf unserer <a href='/preise' class='text-[#22c55e] hover:underline font-semibold'>Preisseite</a>.`,
  ],
  trustBullets: sharedTrust("Ihrer Region"),
  faqsBase: (city) => [
    {
      q: "Was unterscheidet professionelle Glasreinigung von Eigenreinigung?",
      a: "Drei Dinge: das Wasser (osmotisch entsalzt — keine Kalkstreifen), das Werkzeug (Einwascher mit echtem Lederabzieher) und die Technik (in einer Bewegung, ohne Nachreiben). Das Ergebnis ist sichtbar und hält länger.",
    },
    {
      q: `Wie oft sollte ich Schaufenster in ${city} reinigen lassen?`,
      a: `Bei Verkehrslagen und stark frequentierten Lagen empfehlen wir 14-tägige Reinigung, in ruhigeren Lagen monatlich. Bei Privathaushalten reicht eine Reinigung 2–4 Mal pro Jahr — bevorzugt im Frühjahr und Herbst.`,
    },
    {
      q: "Reinigen Sie auch hohe Fassaden?",
      a: "Bis 12 m Höhe arbeiten wir vom Boden aus mit Teleskopsystemen — sicher und ohne Gerüst. Für höhere Gebäude oder besondere Geometrien organisieren wir Hubsteiger bzw. setzen Industriekletterer zu.",
    },
    {
      q: "Kann ich einen Wartungsvertrag abschließen?",
      a: "Ja — gerade für Gewerbeobjekte sind Wartungsverträge sinnvoll. Sie sparen pro Reinigung, haben feste Termine und müssen sich um nichts kümmern. Die Verträge sind monatlich kündbar.",
    },
    {
      q: "Was, wenn nach der Reinigung Streifen sichtbar sind?",
      a: "Dann reinigen wir auf eigene Kosten nach. Ihre Zufriedenheit ist der Maßstab — wenn wir es nicht streifenfrei hinbekommen, ist es kein professionelles Ergebnis.",
    },
    {
      q: `Bedienen Sie auch ${city}-Umgebung?`,
      a: `Ja, wir sind in der gesamten Region aktiv — Pirmasens, Kaiserslautern, Zweibrücken, Landstuhl, Homburg, Landau, Rodalben, Dahn und Umgebung. Anfahrt ist in der Region in der Regel nicht zusätzlich berechnet.`,
    },
  ],
};

/* ---------------------------- service: Gebäudereinigung (variants) -------*/
const gebaeude: ServiceBlueprint = {
  service: "Gebäudereinigung",
  kicker: "Komplettservice für Ihr Objekt",
  h1Highlight: "Sauberkeit auf festem Plan",
  breadcrumbLabel: (city) => `Gebäudereinigung ${city}`,
  introLead: (city) =>
    `Gebäudereinigung in ${city} bedeutet Verlässlichkeit: feste Termine, klare Pläne, sichtbares Ergebnis. Wir betreuen Mehrfamilienhäuser, Bürogebäude, Praxen, Gewerbeflächen und WEG-Objekte mit eigenen Teams und transparenten Verträgen.`,
  introSecondary: (city) =>
    `<strong class='text-white/80'>Salif Gebäudeservice</strong> ist in ${city} und der gesamten Region für Eigentümer, Vermieter, Hausverwaltungen und Gewerbekunden im Einsatz — mit fairem Stundensatz und klaren Festpreisen.`,
  why: (city, cityIntro) => [
    `Ein Gebäude ist ein lebendiges System: Treppenhäuser werden täglich begangen, Aufzüge stündlich genutzt, Fenster monatlich verstaubt, Außenflächen saisonal beansprucht. Wer hier keinen Plan hat, reagiert auf Probleme — wer einen Plan hat, vermeidet sie.`,
    `In ${city}, ${cityIntro}, übernehmen wir genau diese Planung. Wir analysieren Ihr Objekt, schlagen einen Reinigungsplan vor und setzen ihn mit festen Mitarbeitern um. Sie haben einen Ansprechpartner, einen Vertrag, eine Rechnung — und ein sauberes Objekt.`,
    `Unsere Stärke liegt in der Kombination: Unterhaltsreinigung, Grundreinigung, Fensterreinigung, Hausmeisterservice und Winterdienst aus einer Hand. Das senkt Reibung, vermeidet Schnittstellenprobleme und macht Verwaltung deutlich einfacher.`,
    `Wir arbeiten transparent: Reinigungspläne sind dokumentiert, Termine sind dokumentiert, Sonderaufträge bekommen Sie schriftlich angeboten. So wissen Sie jederzeit, was wann gemacht wird — und was es kostet.`,
  ],
  services: [
    {
      title: "Unterhaltsreinigung — feste Pläne nach Frequenz",
      text: "Tägliche, wöchentliche oder monatliche Reinigung in Büros, Praxen, Treppenhäusern, Verkaufsflächen und Industrieobjekten. Mit dokumentiertem Plan und festem Personal.",
    },
    {
      title: "Grundreinigung — die Tiefenreinigung alle 1–3 Jahre",
      text: "Maschinelle Grundreinigung von PVC, Stein, Fliese, Teppich. Inklusive Sanitär-Tiefenreinigung, Küchen-Entfettung und auf Wunsch frischer Pflegeschicht.",
    },
    {
      title: "Fenster-, Glas- und Fassadenreinigung",
      text: "Streifenfreie Glasreinigung innen und außen — vom Privathaushalt bis zur Glasfassade. Mit osmotisch entsalztem Wasser und Profi-Werkzeug.",
    },
    {
      title: "Sonderreinigungen — nach Wasserschaden, Brand, Mieterwechsel",
      text: "Bauendreinigung, Renovierungsreinigung, Brandgeruchsbeseitigung und Reinigung vor Übergabe. Inklusive fachgerechter Entsorgung und Dokumentation.",
    },
  ],
  steps: sharedSteps,
  pricing: (city) => [
    `Gebäudereinigung in ${city} berechnen wir entweder pro Stunde (ab ca. 28 €/h inkl. Material) oder als Festpreis pro Termin bzw. pro Monat. Bei laufenden Verträgen sinken die Stundensätze, weil Anfahrt und Material effizienter werden.`,
    `Sie erhalten ein verbindliches Festpreisangebot nach einer kurzen Begehung — Details auf der <a href='/preise' class='text-[#22c55e] hover:underline font-semibold'>Preisseite</a>.`,
  ],
  trustBullets: sharedTrust("Ihrer Region"),
  faqsBase: (city) => [
    {
      q: `Welche Objekte reinigen Sie in ${city}?`,
      a: `Wir reinigen Bürogebäude, Mehrfamilienhäuser, Praxen, Kindergärten, Gewerbeflächen, Hotels, Restaurants, WEG-Anlagen und Industrieobjekte. Privat und Gewerbe gleichermaßen.`,
    },
    {
      q: "Können Hausverwaltungen mehrere Objekte bündeln?",
      a: "Ja — Hausverwaltungen bekommen bei mehreren Objekten Rahmenverträge mit gestaffelten Konditionen, festen Ansprechpartnern und dokumentierter Qualitätssicherung.",
    },
    {
      q: "Sind Sie haftpflichtversichert und ordnungsgemäß angemeldet?",
      a: "Selbstverständlich — Salif Gebäudeservice ist gewerblich angemeldet, umfassend haftpflichtversichert und sozialversichert. Alle Nachweise erhalten Sie auf Wunsch schriftlich.",
    },
    {
      q: "Was ist im Stundensatz enthalten?",
      a: "Material (Reiniger, Tücher, Müllsäcke), Maschinen (Sauger, Wischsysteme), Anfahrt im Einzugsgebiet und MwSt. Sondermaterial (Pflegeschicht, Spezialreiniger) ist separat ausgewiesen.",
    },
    {
      q: "Wie kurzfristig können Sie reagieren?",
      a: "Bei akuten Anfragen (Wasserschaden, Mieterauszug, Notfall) sind wir innerhalb von 24–72 Stunden vor Ort. Bei Wartungsverträgen sowieso fest im Plan.",
    },
    {
      q: `Bedienen Sie nur ${city} oder auch das Umland?`,
      a: `Wir sind in ganz Südwestpfalz und Westpfalz aktiv — neben ${city} insbesondere Pirmasens, Kaiserslautern, Zweibrücken, Landstuhl, Homburg, Rodalben und Landau.`,
    },
  ],
};

/* ---------------------------- service: Fensterreinigung ------------------*/
const fenster: ServiceBlueprint = {
  service: "Fensterreinigung",
  kicker: "Streifenfrei vom Profi",
  h1Highlight: "Streifenfreier Durchblick",
  breadcrumbLabel: (city) => `Fensterreinigung ${city}`,
  introLead: (city) =>
    `Saubere Fenster machen einen riesigen Unterschied — mehr Licht, ein besserer Eindruck und Werterhalt Ihrer Immobilie. In ${city} reinigen wir Privathaushalte, Büros, Ladenfronten und Glasfassaden professionell und streifenfrei.`,
  introSecondary: (city) =>
    `<strong class='text-white/80'>Salif Gebäudeservice</strong> übernimmt die Fensterreinigung in ${city} mit Profi-Ausrüstung, geschultem Personal und Erfahrung aus hunderten gereinigten Objekten.`,
  why: (city, cityIntro) => [
    `Fensterputzen ist eine dieser Aufgaben, die scheinbar einfach sind — bis man sie wirklich ernsthaft macht. Ein Einfamilienhaus hat schnell 15–20 Fenster, ein Bürogebäude ein Vielfaches. Beidseitig gereinigt inkl. Rahmen und Fensterbänken kostet das stundenweise wertvolle Lebenszeit.`,
    `In ${city}, ${cityIntro}, lohnt sich der Profi gleich doppelt. Wir reinigen mit osmotisch entsalztem Wasser, Lederabzieher und Profi-Wischer — streifenfrei, ohne Kalkflecken, mit Rahmen und Falzen.`,
    `Schwer erreichbare Stellen — Dachfenster, Oberlichter, hohe Glasfronten — sind für Laien gefährlich und für Profis Routine. Wir arbeiten mit Teleskopsystemen bis 12 m und garantieren ein sicheres, sauberes Ergebnis.`,
    `Für Privatkunden bieten wir Frühjahrs- und Herbsttermine, für Gewerbe regelmäßige Wartungsverträge. Beides mit festen Festpreisen und einem klaren Versprechen: streifenfrei, oder wir reinigen kostenfrei nach.`,
  ],
  services: [
    {
      title: "Fensterreinigung Privat — Einfamilienhäuser, Wohnungen",
      text: "Wir reinigen Fenster streifenfrei, inkl. Rahmen, Falze und Fensterbänke. Beliebt vor und nach der Heizperiode für klare Sicht und maximalen Lichteinfall.",
    },
    {
      title: "Fensterreinigung Gewerbe — Büros, Schaufenster, Fassaden",
      text: "Geschäfte, Büros und Gewerbebetriebe in der Region buchen regelmäßige Fensterreinigung — auf Wunsch vor oder nach den Öffnungszeiten, damit der Geschäftsalltag nicht gestört wird.",
    },
    {
      title: "Rahmen, Falze & Fensterbänke",
      text: "Sauberes Glas allein reicht nicht. Wir reinigen Rahmen, Falze und Fensterbänke gründlich — gegen Schmutzablagerungen, die langfristig zu Schäden führen können.",
    },
    {
      title: "Schwer erreichbare Stellen — Dachfenster, Oberlichter",
      text: "Mit professioneller Teleskoptechnik erreichen wir Dachfenster, Oberlichter und hohe Glasfronten sicher vom Boden aus — ohne Risiko für Sie oder das Gebäude.",
    },
  ],
  steps: sharedSteps,
  pricing: (city) => [
    `Die Kosten für Fensterreinigung in ${city} hängen von Anzahl, Größe und Erreichbarkeit ab. Standard-Wohnhaus (15–20 Fenster, beidseitig inkl. Rahmen) liegt meist zwischen 90 und 180 €. Wartungsverträge im Gewerbe entsprechend günstiger pro Termin.`,
    `Sie erhalten ein transparentes Festpreisangebot. Mehr zur Preisstruktur auf unserer <a href='/preise' class='text-[#22c55e] hover:underline font-semibold'>Preisseite</a>.`,
  ],
  trustBullets: sharedTrust("Ihrer Region"),
  faqsBase: (city) => [
    {
      q: "Was kostet Fensterreinigung pro Fenster?",
      a: "Der Preis hängt von Größe, Erreichbarkeit und ob ein- oder beidseitig gereinigt wird ab. Für ein Standardfenster (beidseitig inkl. Rahmen) liegen die Kosten im einstelligen Euro-Bereich. Genaue Kalkulation nach Begehung.",
    },
    {
      q: "Werden auch Rahmen und Fensterbänke gereinigt?",
      a: "Ja — standardmäßig. Glas, Rahmen, Falze und Fensterbänke gehören bei uns zu jeder Reinigung dazu. Sie erhalten eine Komplettreinigung, nicht nur sauberes Glas.",
    },
    {
      q: `Wie oft sollte man Fenster in ${city} professionell reinigen lassen?`,
      a: `Für Privathaushalte 2–4 Mal pro Jahr (idealerweise Frühjahr und Herbst). Gewerbeflächen je nach Lage und Verschmutzung monatlich oder sogar wöchentlich.`,
    },
    {
      q: "Reinigen Sie auch Dachfenster und schwer erreichbare Stellen?",
      a: "Ja — wir verfügen über professionelle Teleskoptechnik bis 12 m und Erfahrung mit Dachfenstern, Oberlichtern und hohen Glasfronten. Sicherheit und Qualität stehen an erster Stelle.",
    },
    {
      q: "Arbeiten Sie auch bei schlechtem Wetter?",
      a: "Bei leichtem Regen ist Arbeit problemlos möglich — Profi-Technik liefert auch dann streifenfreie Ergebnisse. Bei starkem Regen oder Sturm verschieben wir den Termin im Sinne der Sicherheit.",
    },
    {
      q: `Wie schnell ist ein Termin in ${city} möglich?`,
      a: `In der Regel innerhalb weniger Tage. Bei Wartungsverträgen sind die Termine fest im Plan. Bei Eilanfragen versuchen wir, schnell zu reagieren.`,
    },
  ],
};

/* ---------------------------- service: Treppenhausreinigung -------------*/
const treppe: ServiceBlueprint = {
  service: "Treppenhausreinigung",
  kicker: "Sauberer erster Eindruck",
  h1Highlight: "Gepflegtes Haus, glückliche Mieter",
  breadcrumbLabel: (city) => `Treppenhausreinigung ${city}`,
  introLead: (city) =>
    `Das Treppenhaus ist die Visitenkarte jedes Mehrfamilienhauses — wer es betritt, urteilt in den ersten zehn Sekunden. In ${city} übernehmen wir die regelmäßige Treppenhausreinigung in WEGs, Mietshäusern und Bürogebäuden, mit festen Wochenterminen und dokumentierter Qualität.`,
  introSecondary: (city) =>
    `<strong class='text-white/80'>Salif Gebäudeservice</strong> reinigt Treppenhäuser in ${city} zuverlässig und sauber — ohne wechselndes Personal, ohne Diskussionen mit Mietern, ohne ständig nachfragen zu müssen.`,
  why: (city, cityIntro) => [
    `Treppenhausreinigung im Mietverhältnis ist häufig Streitthema: einer macht zu wenig, einer fühlt sich übergangen, einer ist zu alt, einer reist immer ab, wenn er dran ist. Wer als Vermieter oder Verwalter klare Verhältnisse will, gibt die Reinigung in feste Hände.`,
    `In ${city}, ${cityIntro}, betreuen wir Mehrfamilienhäuser, WEG-Anlagen und gemischt genutzte Objekte. Standardrhythmus ist wöchentlich oder 14-tägig, in Bürogebäuden täglich. Auch monatliche Treppenhauspflege ist möglich — wir beraten ehrlich, was bei Ihrer Mieterstruktur sinnvoll ist.`,
    `Gereinigt wird: Treppenstufen, Geländer, Handläufe, Lichtschalter, Eingangsbereich, Briefkästen, Fußmatten, Türen und auf Wunsch Aufzug. Im Eingangsbereich oft auch Glas und Außenfläche — wir denken das Haus als Ganzes.`,
    `Sie erhalten dokumentierte Termine, einen festen Ansprechpartner und auf Wunsch eine kurze Reinigungsliste, die im Treppenhaus aushängt. So sehen Mieter, was wann gemacht wird, und Beschwerden werden seltener.`,
  ],
  services: [
    {
      title: "Treppenhaus wöchentlich / 14-tägig / monatlich",
      text: "Wir reinigen Treppenstufen, Geländer, Handläufe und Eingangsbereiche im gewählten Rhythmus. Standard ist wöchentlich; in ruhigeren Häusern reicht 14-tägig.",
    },
    {
      title: "Aufzug, Briefkasten, Eingang",
      text: "Aufzugskabine und -tasten, Briefkastenanlage, Eingangsbereich und Glastüren werden mit reinigt — alles, was Bewohner und Besucher täglich sehen.",
    },
    {
      title: "Glasreinigung im Treppenhaus",
      text: "Treppenhausfenster, Glaseinlässe und Eingangsverglasung können wir je nach Bedarf 2–4 Mal jährlich reinigen — sinnvoll, weil hier sonst niemand putzt.",
    },
    {
      title: "Sonderreinigung — nach Renovierung, Wasserschaden, Auszug",
      text: "Wir übernehmen auch Sonderaufträge: nach Renovierungsarbeiten im Haus, nach Wasserschäden im Treppenhausbereich oder nach Auszug eines Mieters, wenn das Treppenhaus stärker verschmutzt ist.",
    },
  ],
  steps: sharedSteps,
  pricing: (city) => [
    `Treppenhausreinigung in ${city} berechnen wir pro Termin oder als Monatspauschale. Standardrhythmus wöchentlich, kleiner 3-stöckiger Aufgang: typischerweise 25–45 € pro Termin (je nach Größe). Größere Häuser entsprechend mehr.`,
    `Ein klares Festpreisangebot erhalten Sie nach einer kurzen Begehung — Details auf der <a href='/preise' class='text-[#22c55e] hover:underline font-semibold'>Preisseite</a>.`,
  ],
  trustBullets: sharedTrust("Ihrer Region"),
  faqsBase: (city) => [
    {
      q: "Wer trägt die Kosten — Eigentümer oder Mieter?",
      a: "Bei Eigentumswohnungen die WEG (über die Hausgeldumlage). Bei Mietobjekten kann die Reinigung als Betriebskosten umgelegt werden, sofern der Mietvertrag das vorsieht. Wir stellen die Rechnung an den Auftraggeber, die Umlage erfolgt separat.",
    },
    {
      q: `Wie oft reinigen Sie in ${city} typischerweise?`,
      a: `Standard ist wöchentlich. In ruhigen WEGs reicht oft 14-tägig, in Bürogebäuden oder Häusern mit Praxen empfehlen wir täglich. Wir beraten je nach Mieterstruktur und Frequenz.`,
    },
    {
      q: "Was passiert bei Urlaub oder Krankheit des Reinigers?",
      a: "Wir setzen feste Teams ein — bei Urlaub oder Krankheit übernimmt eine eingearbeitete Vertretung. Der Rhythmus reißt nicht, das Haus bleibt sauber.",
    },
    {
      q: "Bekommen wir eine Reinigungsliste fürs Treppenhaus?",
      a: "Auf Wunsch — ja. Wir liefern eine Liste mit Datum jeder Reinigung, sodass die Mieter sehen, dass regelmäßig gereinigt wird. Das reduziert Beschwerden spürbar.",
    },
    {
      q: "Reinigen Sie auch den Kellerflur und die Gemeinschaftsräume?",
      a: "Ja — auf Wunsch sind Kellerflur, Waschküche, Müllraum und Fahrradkeller im Reinigungsplan mit drin. Frequenz dabei meist monatlich oder vierteljährlich.",
    },
    {
      q: `Wie schnell können Sie in ${city} starten?`,
      a: `Nach Begehung und Vertragsunterschrift starten wir in der Regel innerhalb von 1–2 Wochen — bei dringenden Übernahmen früher.`,
    },
  ],
};

/* ---------------------------- service: Hausmeisterservice ---------------*/
const hausmeister: ServiceBlueprint = {
  service: "Hausmeisterservice",
  kicker: "Eine Nummer für Ihr Objekt",
  h1Highlight: "Kleinreparatur, Pflege, Service — aus einer Hand",
  breadcrumbLabel: (city) => `Hausmeisterservice ${city}`,
  introLead: (city) =>
    `Ein guter Hausmeisterservice nimmt Vermietern, Hausverwaltungen und Eigentümern in ${city} dutzende Kleinaufgaben pro Monat ab. Kleinreparaturen, Grünpflege, Müllmanagement, Winterdienst, Sichtkontrollen, Glühbirnenwechsel — alles, was anfällt, ohne dass jeder Auftrag einzeln vergeben werden muss.`,
  introSecondary: (city) =>
    `<strong class='text-white/80'>Salif Gebäudeservice</strong> übernimmt den kompletten Hausmeisterservice in ${city} — mit fester Stundenpauschale, dokumentierten Einsätzen und einer einzigen monatlichen Rechnung.`,
  why: (city, cityIntro) => [
    `Wer schon einmal versucht hat, für jede defekte Glühbirne, jeden tropfenden Wasserhahn und jeden überfüllten Müllbehälter einen separaten Handwerker zu beauftragen, kennt das Problem: viel Telefon, viel Wartezeit, viele kleine Rechnungen.`,
    `In ${city}, ${cityIntro}, lösen wir das mit einem klassischen Hausmeisterservice: Sie haben eine Nummer, wir kümmern uns. Kleinreparaturen erledigen wir selbst, größere Arbeiten organisieren wir mit Partnerbetrieben. Sie bekommen einmal im Monat eine Rechnung — übersichtlich und prüfbar.`,
    `Typische Aufgaben: Mülltonnenservice (rausstellen, reinwerfen), Grünpflege (Rasen, Hecken, Beete), Winterdienst, Sichtkontrollen, Glühbirnen-Tausch, Filter wechseln, Türen und Fenster nachstellen, kleine Sanitärreparaturen, Schlüsselübergaben, Annahme von Lieferungen.`,
    `Sie sparen sich Zeit, Diskussionen mit Handwerkern und das Risiko, dass Kleinkram liegen bleibt, bis er groß wird. Genau dafür gibt es uns.`,
  ],
  services: [
    {
      title: "Kleinreparaturen — bis 2 Stunden Aufwand",
      text: "Tropfender Wasserhahn, klemmende Tür, lose Steckdose, gebrochene Fliese, defekte Türschwelle. Was wir selbst können, machen wir selbst — Werkzeug haben wir dabei.",
    },
    {
      title: "Grünpflege — Rasen, Hecken, Beete",
      text: "Rasenmähen, Hecken schneiden, Beete pflegen, Laub harken. Im Frühjahr Pflanzschnitt, im Herbst Laubentfernung, dazwischen Pflege im 14-tägigen Rhythmus.",
    },
    {
      title: "Mülltonnenservice & Containermanagement",
      text: "Tonnen rausstellen, zurückstellen, reinigen. Bei großen Anlagen Containermanagement, Mülltrennungssortierung und Beratung zur Optimierung der Müllgebühren.",
    },
    {
      title: "Sichtkontrollen & Dokumentation",
      text: "Regelmäßige Begehung mit Sichtkontrolle (Brandschutz, Türen, Lichter, Aushänge, Außenflächen). Auffälligkeiten werden fotografisch dokumentiert und an Verwaltung oder Eigentümer weitergeleitet.",
    },
  ],
  steps: sharedSteps,
  pricing: (city) => [
    `Hausmeisterservice in ${city} berechnen wir entweder als Stundensatz (ca. 28 € inkl. Material für Kleinverbrauch) oder als monatliche Pauschale, wenn der Aufwand sich regelmäßig wiederholt. Bei Pauschalen ist die Planungssicherheit für Sie deutlich höher.`,
    `Sie erhalten ein klares Angebot nach kurzer Begehung. Mehr auf unserer <a href='/preise' class='text-[#22c55e] hover:underline font-semibold'>Preisseite</a>.`,
  ],
  trustBullets: sharedTrust("Ihrer Region"),
  faqsBase: (city) => [
    {
      q: "Was gehört zum Hausmeisterservice — und was nicht?",
      a: "Zum Hausmeisterservice gehören Kleinarbeiten bis ca. 2 Stunden Aufwand sowie regelmäßige Pflege (Grün, Müll, Sichtkontrolle). Größere Sanitär-, Elektro- oder Bauarbeiten organisieren wir mit Partnerbetrieben — und stellen Ihnen das Ergebnis als Komplettlösung dar.",
    },
    {
      q: `Wie häufig kommen Sie ins Objekt in ${city}?`,
      a: `Standard ist 1× pro Woche oder 1× pro 14 Tage. Bei größeren Anlagen 2–3 Mal pro Woche. Auf Wunsch auch nur bei Bedarf — dann mit Hotline und Reaktionszeit innerhalb von 24–72 h.`,
    },
    {
      q: "Übernehmen Sie auch Winterdienst?",
      a: "Ja — Winterdienst ist häufig Teil des Hausmeisterpakets. Wir übernehmen Schneeräumung und Streuung mit dokumentiertem Räumprotokoll, das im Schadensfall die Haftung absichert.",
    },
    {
      q: "Bekomme ich eine Übersicht über alle Einsätze?",
      a: "Ja — monatlich erhalten Sie ein Leistungsprotokoll mit Datum, Uhrzeit und ausgeführter Arbeit. Sie sehen genau, wofür Sie bezahlen, und können es als Verwalter sauber abrechnen.",
    },
    {
      q: "Können Sie auch Schlüssel verwahren und Lieferungen annehmen?",
      a: "Ja — mit Übergabeprotokoll und entsprechender Vereinbarung. Schlüssel werden sicher verwahrt, Lieferungen können bei vorheriger Absprache entgegengenommen werden.",
    },
    {
      q: `Was kostet Hausmeisterservice in ${city} typischerweise?`,
      a: `Für ein Mehrfamilienhaus mit 8–12 Parteien bewegen sich die monatlichen Pauschalen meist zwischen 120 und 280 € — je nach Aufwand. Wir kalkulieren transparent, kein versteckter Aufpreis.`,
    },
  ],
};

/* ---------------------------- service: Entrümpelung ---------------------*/
const entruempelung: ServiceBlueprint = {
  service: "Entrümpelung",
  kicker: "Schnell, sauber, besenrein",
  h1Highlight: "Komplette Räumung mit Entsorgung",
  breadcrumbLabel: (city) => `Entrümpelung ${city}`,
  introLead: (city) =>
    `Entrümpelung in ${city} ist häufig emotional — und logistisch komplex. Wohnungsauflösungen, Haushaltsauflösungen nach Erbfall, Keller- oder Garagenentleerungen, Gewerbeauflösungen: wir übernehmen die komplette Räumung mit fachgerechter Entsorgung und besenreiner Übergabe.`,
  introSecondary: (city) =>
    `<strong class='text-white/80'>Salif Gebäudeservice</strong> übernimmt Entrümpelungen in ${city} mit eigenem Personal, eigenem Transporter und kompletter Entsorgungslogistik — vom Sortieren bis zur Schlüsselübergabe.`,
  why: (city, cityIntro) => [
    `Eine Wohnungsauflösung — sei es nach Sterbefall, vor einem Umzug ins Pflegeheim oder vor einem Mieterwechsel — bedeutet schnell hunderte einzelne Entscheidungen: was geht raus, was bleibt, was wird gespendet, was muss in den Sondermüll. Wer das selbst macht, braucht Wochen.`,
    `In ${city}, ${cityIntro}, übernehmen wir die komplette Räumung als Festpreisauftrag. Wir gehen Raum für Raum durch, sortieren nach Müllfraktionen, demontieren Möbel, räumen Keller und Dachböden, fahren alles weg und übergeben besenrein.`,
    `Bei Bedarf führen wir vorab eine Werteanrechnung durch: gut erhaltene Möbel, Elektrogeräte, Werkzeug oder Schmuck können angerechnet werden und reduzieren den Entrümpelungspreis. Das ist transparent dokumentiert und schriftlich ausgewiesen.`,
    `Auch die diskrete Behandlung ist uns wichtig — gerade bei Sterbefällen. Wir arbeiten respektvoll, sortieren Persönliches aus und übergeben Ihnen Wertgegenstände oder Dokumente, die uns auffallen. Das schafft Vertrauen in einer Situation, in der man darauf angewiesen ist.`,
  ],
  services: [
    {
      title: "Wohnungsauflösung & Haushaltsauflösung",
      text: "Komplette Räumung von Wohnungen, Häusern und Ferienimmobilien — inklusive Möbelabbau, Teppich- und Bodenbelagsentfernung sowie besenreiner Übergabe an den nächsten Mieter oder Käufer.",
    },
    {
      title: "Keller-, Garagen- und Dachbodenentrümpelung",
      text: "Wir räumen Keller, Garagen und Dachböden — vom alten Fahrrad bis zum kompletten Werkstattinhalt. Sondermüll (Farben, Lacke, Batterien) wird fachgerecht entsorgt.",
    },
    {
      title: "Gewerbeauflösung & Büroräumung",
      text: "Schließt ein Geschäft oder Büro, übernehmen wir die komplette Räumung inklusive Möbeln, Akten (auf Wunsch DSGVO-konform geschreddert) und Technik. Übergabe besenrein an Vermieter.",
    },
    {
      title: "Messie-Wohnung & Entrümpelung mit Reinigung",
      text: "Auch stark verwahrloste Wohnungen räumen wir — diskret, ohne Wertung, mit kompletter Reinigung und Desinfektion im Anschluss. Die Wohnung ist nach unserem Einsatz wieder vermietbar.",
    },
  ],
  steps: sharedSteps,
  pricing: (city) => [
    `Entrümpelung in ${city} wird in der Regel als Festpreis pro Objekt kalkuliert — abhängig von Wohnfläche, Möbelmenge, Stockwerk und Erreichbarkeit. Eine 60 m²-Wohnung in normalem Zustand bewegt sich häufig zwischen 800 und 1.500 €, inklusive Entsorgung.`,
    `Werte (Möbel, Geräte, Wertgegenstände) können gegengerechnet werden und reduzieren den Preis. Sie erhalten einen schriftlichen Festpreis nach Besichtigung — Details auf der <a href='/preise' class='text-[#22c55e] hover:underline font-semibold'>Preisseite</a>.`,
  ],
  trustBullets: sharedTrust("Ihrer Region"),
  faqsBase: (city) => [
    {
      q: `Wie schnell können Sie in ${city} entrümpeln?`,
      a: `Nach Besichtigung in der Regel innerhalb von 5–10 Werktagen. Bei Eilanfragen (Sterbefall, kurzfristiger Mietwechsel) versuchen wir, in 48–72 Stunden zu starten.`,
    },
    {
      q: "Was passiert mit den Möbeln und Geräten?",
      a: "Brauchbare Sachen werden — wenn möglich — gespendet oder weitervermittelt. Der Rest wird sortenrein zur Entsorgung gebracht. Sondermüll (Farben, Batterien, Elektroschrott) wird fachgerecht entsorgt.",
    },
    {
      q: "Können wir Wertgegenstände vorher aussortieren?",
      a: "Selbstverständlich. Wir empfehlen, Persönliches vorher rauszusuchen. Sollten wir während der Räumung Dokumente, Schmuck oder Wertsachen finden, übergeben wir sie Ihnen — das ist Selbstverständlichkeit.",
    },
    {
      q: "Bekomme ich einen Entsorgungsnachweis?",
      a: "Ja — für gewerbliche Auftraggeber und auf Wunsch auch privat erhalten Sie einen Entsorgungsnachweis nach Kreislaufwirtschaftsgesetz.",
    },
    {
      q: "Reinigen Sie die Wohnung nach der Entrümpelung?",
      a: "Auf Wunsch — ja. Wir bieten besenreine Übergabe als Standard und eine vollständige Endreinigung (inkl. Sanitär, Küche, Fenster) als Zusatzleistung. Beides wird im Angebot getrennt ausgewiesen.",
    },
    {
      q: `Übernehmen Sie auch in ${city}-Umgebung?`,
      a: `Ja — wir entrümpeln im gesamten Umkreis: Pirmasens, Kaiserslautern, Zweibrücken, Landstuhl, Homburg, Landau, Rodalben, Dahn und weitere Orte. Anfahrt ist in der Regel im Festpreis enthalten.`,
    },
  ],
};

/* =========================================================================
 * SERVICES master table
 * =======================================================================*/

export const SERVICES = {
  wintergartenreinigung: wintergarten,
  unterhaltsreinigung: unterhalt,
  grundreinigung: grund,
  bueroreinigung: buero,
  dachrinnenreinigung: dachrinne,
  winterdienst: winter,
  glasreinigung: glas,
  gebaeudereinigung: gebaeude,
  fensterreinigung: fenster,
  treppenhausreinigung: treppe,
  hausmeisterservice: hausmeister,
  entruempelung: entruempelung,
} as const;

export type ServiceKey = keyof typeof SERVICES;

/* =========================================================================
 * Cross-link generator — wichtig für SEO (interne Verlinkung)
 * =======================================================================*/

export function buildCrossLinks(
  serviceKey: ServiceKey,
  cityKey: CityKey
): LandingPageData["crossLinks"] {
  const city = CITIES[cityKey];
  const otherCity = cityKey === "pirmasens" ? "kaiserslautern" : "pirmasens";
  const otherCityName = CITIES[otherCity].name;

  const sameServiceOtherCity: LandingPageData["crossLinks"] = [
    {
      label: `${SERVICES[serviceKey].service} ${otherCityName}`,
      href: `/${serviceKey}-${otherCity}`,
    },
  ];

  const otherServicesSameCity: LandingPageData["crossLinks"] = (
    Object.keys(SERVICES) as ServiceKey[]
  )
    .filter((k) => k !== serviceKey)
    .slice(0, 5)
    .map((k) => ({
      label: `${SERVICES[k].service} ${city.name}`,
      href: `/${k}-${cityKey}`,
    }));

  return [...sameServiceOtherCity, ...otherServicesSameCity];
}

/* =========================================================================
 * Build full LandingPageData for a service x city combination
 * =======================================================================*/

export function buildLandingData(
  serviceKey: ServiceKey,
  cityKey: CityKey
): LandingPageData {
  const svc = SERVICES[serviceKey];
  const city = CITIES[cityKey];

  return {
    service: svc.service,
    city: city.name,
    kicker: svc.kicker,
    h1Highlight: svc.h1Highlight,
    breadcrumbLabel: svc.breadcrumbLabel(city.name),
    introLead: svc.introLead(city.name),
    introSecondary: svc.introSecondary(city.name),
    whyParagraphs: svc.why(city.name, city.intro),
    services: svc.services,
    steps: svc.steps,
    pricingParagraphs: svc.pricing(city.name),
    referenceTitle: `${svc.service} ${city.name} — Praxisbeispiel`,
    referenceText: `Wir haben in ${city.name} mehrfach ${svc.service.toLowerCase()} für Privat- und Gewerbekunden ausgeführt — vom kleinen Privathaushalt bis hin zu größeren Objekten in der Innenstadt und im Umkreis von ${city.landmarks}. Kunden schätzen besonders die kurze Reaktionszeit, die transparente Kalkulation und das saubere, dokumentierte Ergebnis. Lassen Sie uns auch Ihr Objekt zu einer Referenz machen.`,
    trustBullets: svc.trustBullets,
    faqs: svc.faqsBase(city.name),
    crossLinks: buildCrossLinks(serviceKey, cityKey),
    path: `/${serviceKey}-${cityKey}`,
    neighborhoods: [...city.neighborhoods],
  };
}

/* =========================================================================
 * SEO metadata helper
 * =======================================================================*/

export function buildSeoMeta(serviceKey: ServiceKey, cityKey: CityKey) {
  const svc = SERVICES[serviceKey];
  const city = CITIES[cityKey];
  const url = `https://www.salif-gebaeudeservice.de/${serviceKey}-${cityKey}`;

  return {
    title: `${svc.service} ${city.name} | Festpreis & Profi-Ergebnis`,
    description: `${svc.service} in ${city.name} vom Profi: faire Festpreise, eigenes Personal, dokumentierte Qualität. Jetzt unverbindliches Angebot anfordern: 01522 904 3159.`,
    keywords: [
      `${svc.service} ${city.name}`,
      `${svc.service.toLowerCase()} ${city.name.toLowerCase()}`,
      `Reinigungsfirma ${city.name}`,
      `Reinigungsservice ${city.name}`,
      `Gebäudeservice ${city.name}`,
      `${svc.service} ${city.region}`,
    ],
    url,
    canonical: url,
  };
}
