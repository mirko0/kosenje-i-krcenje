import React from 'react'
import { motion } from "framer-motion";


export const SECTIONS = [
    {
        title: 'KOŠENJE TRAVE I KRČENJE PLACEVA',
        image: [
            "/kosenje.jpg",
            "/kos2.jpeg",
            "/kos1.webp",
        ],
        id: 'kosenje',
        description:
            'Naše usluge košenja trave i krčenja prostora pružaju vam mogućnost da uživate u vašem okruženju bez smetnji. Brzo i efikasno uklanjamo visoku travu, žbunje i šiblje kako biste imali uređen prostor. Redovno održavanje vaših placeva takođe je deo naše ponude, uz fleksibilnost u cenama.',
        sections: [
            'Kada je reč o održavanju i uređenju zemljišta, posebno važnu ulogu igra košenje i krčenje placeva. Ovi procesi su ključni za održavanje čistoće i uređenosti prostora, ali i za sprečavanje pojave korova i divljeg rastinja.',
            'Košenje placeva podrazumeva redovno sečenje trave i niskog rastinja na zemljištu. Ovaj proces ne samo da doprinosi estetici prostora već i sprečava nagomilavanje suvog biljnog materijala koji može biti izuzetno opasan tokom sušnih perioda.',
            'S druge strane, krčenje placeva obuhvata uklanjanje guste vegetacije, šiblja, drveća i drugog rastinja sa zemljišta. Ovaj proces je posebno važan kada je potrebno pripremiti zemljište za gradnju ili sadnju novih kultura. Takođe, krčenje placeva može biti neophodno radi očuvanja biodiverziteta i zaštite prirodnih staništa.',
            'U oba slučaja, važno je angažovati stručnjake sa odgovarajućom opremom kako bi se posao obavio efikasno i bezbedno. Takođe, treba voditi računa o zaštiti životne sredine prilikom izvođenja ovih radova kako bi se sačuvala priroda i ekosistem naše okoline.',
            'Mi posedujemo sredstva za rad najnovijih tehnologija i obavljamo usluge - košenje trave i krčenje placeva po veoma pristupačnim cenama.',
        ]
    },
    {
        title: 'OBARANJE MANJIH I SREDNJIH STABALA',
        image: '/obaranje.jpg',
        id: 'obaranje',
        description:
            "Potreba za uklanjanjem suvih ili neplodnih stabala može biti važna za sigurnost i estetiku vašeg prostora. Naš tim efikasno i sigurno obara manja i srednja stabla, kao i grane koje predstavljaju rizik. Vaša bezbednost i mir su naš prioritet.",
        sections: [
            'Obaranje stabala je složen proces koji zahteva pažnju, veštinu i odgovarajuću opremu. Prvo, važno je pažljivo proceniti stablo i okolinu kako biste odredili pravac obaranja. Zatim se vrši priprema prostora oko stabla, uklanjanje prepreka i postavljanje sigurnosnih mera.',
            'Kada je sve spremno, pristupa se obaranju stabla. To se obično radi sečenjem trupa u određenom redosledu kako bi se postigao kontrolisan pad stabla. Važno je pravilno proceniti ugao sečenja i pravac pada kako bi se izbegle nezgode i oštećenja okoline.',
            'Nakon što stablo padne, obavlja se čišćenje i uklanjanje preostalih delova. Ovo može biti opasan posao, pa je važno imati iskustvo i pravilnu opremu kako biste obezbedili sigurnost tokom celog procesa.',
            'Obaranje stabala je važna aktivnost u održavanju šuma i uređenju prostora, ali zahteva stručnost i oprez kako bi se izbegle nezgode i očuvala okolina.',
            'Ukoliko na vašem prostoru posedujete stablo ili više stabala, a da vam predstavljaju smetnju,dovode vas u opasnost ili vam više nisu potrebna, budite slobodni da nas kontaktirate.',
        ]
    },
    {
        title: 'VAĐENJE MANJIH PANJEVA SA KORENOM',
        image: '/panj.jpg',
        id: 'vadjenjepanjeva',
        description:
            'Uklanjanje panjeva sa korenom može biti delikatan posao, ali mi to obavljamo brzo i efikasno. Ova usluga može ići u sklopu usluge obaranja manjih i srednjih stabala, pri čemu će cena biti korigovana. Bez obzira da li je u pitanju obaranje stabla ili samo uklanjanje panja, naš tim izlazi na vašu adresu kako bi osigurao potpuno čist prostor.',
        sections: [
            'Uklanjanje panjeva sa korenom je proces koji zahteva određenu opremu i veštinu kako bi se izvršio uspešno. Kada se panj izvadi sa korenom, to osigurava da će biljka potpuno biti uklonjena iz zemlje i smanjuje verovatnoću ponovnog rasta iste biljke na tom mestu. Postupak može biti fizički zahtevan, ali je važan kako bi se oslobodio prostor za nove sadnice ili gradnju na tom mestu. Nakon vađenja panja sa korenom, zemljište se može pripremiti za nove biljke ili druge namene.',
            'Naš tim obavlja vađenje manjih panjeva sa korenom u kombinaciji sa prethodnom uslugom obaranje stabala ili nezavisno od nje.',
        ]
    },
    {
        title: 'ODVOZ GRANA I DRVEĆA',
        image: '/odvoz.png',
        id: 'odvozgrana',
        description: 'Uklanjanje grana i drveća je ključno za održavanje čistoće i uređenosti životnog prostora. Garantujemo bezbedno i efikasno uklanjanje, čuvajući prirodu i sprečavajući štetu. Nakon odvoza, brinemo se o recikliranju otpada, smanjujući uticaj na okolinu. Bez obzira na prethodne usluge, nudimo pristupačno uklanjanje grana i drveća. Očistite svoje dvorište, prepustite nama brigu o prirodi!',
        sections: [
            'Odvoz grana i drveća je važan deo održavanja čistoće i uređenosti životnog prostora. Kada je potrebno ukloniti grane ili drveće sa neke lokacije, važno je angažovati stručnu ekipu koja će to obaviti na bezbedan i efikasan način. Pravilno uklanjanje grana i drveća može pomoći u očuvanju životne sredine i sprečavanju mogućih nezgoda ili oštećenja imovine. Nakon odvoza, važno je pravilno zbrinuti i reciklirati otpad kako bi se smanjio uticaj na okolinu. ',
            'Bez razmišljanja, sve ovo možete da prepustite nama. Sa izvršenim prethodnim uslugama ili bez njih, uvek nas možete pozvati da izvršimo odvoz grana i drveća koje vam smetaju u vašem dvorištu po pristupačnim cenama. Očistite  vaše dvorište, neka priroda zablista!',
        ]
    },
    {
        title: 'SEČENJE DRVA ZA OGREV',
        image: '/secenje.jpeg',
        id: 'secenjedrva',
        description:
            'Za sve vaše potrebe u pripremi ogreva, možete računati na nas. Pružamo uslugu sečenja drva tokom cele godine, omogućavajući vam da spremno dočekate hladne dane. Naš tim vam stoji na raspolaganju za sečenje drva prema vašim zahtevima, osiguravajući vam kvalitetno ogrevno drvo koje će vas grejati tokom zime.',
        sections: [
            'Sečenje drva za ogrev je važan proces koji zahteva veštinu i opremu. Naš tim poseduje kvalitetne motorne testere za obavljanje ove usluge. Drva sečemo na manje komade ili veličinu koja vama odgovara kako biste ih kasnije lako ubacili u peć.',
            'Uslugu sečenja drva vršimo tokom cele godine. Kada obezbedite drva za ogrev, budite slobodni da nas odmah kontaktirate za ovu uslugu kako biste na vreme skladištili drva i u miru dočekali hladne jesenje i zimske dane.',
        ]
    },
    {
        title: 'SLAGANJE I SKLADIŠTENJE DRVA ZA OGREV',
        image: '/slaganje.jpg',
        id: 'slaganjedrva',
        position: "bottom",
        description:
            'Pre kišnih i hladnih dana je vrlo važno skloniti drva za ogrev na sigurno. Vršimo usluge skladištenja drva za ogrev tokom cele godine. Ova usluga može iči u sklopu prethodne, koja se odnosi na sečenje ili zasebno.',
        sections: [
            'Skladištenje drva za ogrev je važan korak kako bi se osiguralo da drvo bude suvo i spremno za upotrebu kada dođe vreme loženja. Predstavljamo vam nekoliko korisnih saveta o tome kako pravilno skladištiti drva za ogrev:',
            '1. Izbor odgovarajućeg mesta - drva za ogrev treba čuvati na suvom i provetrenom mestu. Idealno bi bilo da je skladište za drva daleko od vlage i direktnog kontakta sa zemljom.',
            '2. Krov ili nadstrešnica - ako je moguće, drva za ogrev treba čuvati pod nadstrešnicom ili nekim oblikom krova koji će ih zaštititi od kiše i snega.',
            '3. Dobar protok vazduha - važno je osigurati dobar protok vazduha oko drva kako bi se sprečila pojava plesni i buđi. Drva treba postaviti na način da vazduh može slobodno cirkulisati između njih.',
            '4. Podignuti drva - drva za ogrev treba čuvati podignuta od poda kako bi se sprečilo upijanje vlage iz zemlje. Možete koristiti palete ili drvene daske za podizanje drva.',
            '5. Redovno proveravanje - redovno proveravajte drva za ogrev kako biste bili sigurni da su suva i spremna za upotrebu. Ako primetite da su drva vlažna, potrebno ih je dodatno osušiti pre nego što ih koristite za loženje.',
            'Efikasno i brzo skladištimo vaša drva u vašem prostoru kako biste spremno dočekali zimu. Na vama je da odlučite gde ćete smestiti drva i da nas pozovete. Sledeći naše savete, budite sigurni da će vaša drva biti suva i spremna za ogrev.',
        ]
    },
]


const Sections = () => {
    return (
        <div id='sekcije'>
            {SECTIONS.map((section, index) => (
                <Section
                    index={index}
                    key={section.id}
                    title={section.title}
                    description={section.description}
                    id={section.id}
                    image={section.image}
                    sections={section.sections}
                />
            ))}
        </div>
    )
}

export default Sections

const Section = ({ title, description, image, id, sections, index }) => {
    const color = index % 2 === 0 ? "#ffffff" : "#f5f7f5"
    return (
        <div id={id} style={{overflowX: "hidden", background: color}}>
            <motion.div
                initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    x: index % 2 === 0 ? 100 : -100
                }}
                whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position
                    transition: {
                        duration: 1 // Animation duration
                    }
                }}
                viewport={{ once: true }}
                className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between -mx-4">
                        {/* <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src={image[0]}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src={image[1]}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <img
                                            src={image[2]}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                        <span className="absolute -right-7 -bottom-7 z-[-1]">
                                            <svg
                                                width={134}
                                                height={106}
                                                viewBox="0 0 134 106"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="1.66667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 31 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3334"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3334 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 103 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 132 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="74.6673"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 74.6673)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 1.66683)"
                                                    fill="#3056D3"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* lg:w-1/2 xl:w-5/12 */}
                        <div className="w-full px-4 ">
                            <div className="mt-10 lg:mt-0">
                                <h2 className="mb-5 text-3xl text-center font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                                    {title}
                                </h2>
                                <ul className="list-disc">
                                    {sections.map((s, index) => (<li key={index + "section"}>{s}</li>))}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

    )
}