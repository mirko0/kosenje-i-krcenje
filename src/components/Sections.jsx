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


import { Link } from 'react-router-dom'
import { IconArrowRight } from '@tabler/icons-react'

const Sections = () => {
    return (
        <section id='sekcije' className="py-20 bg-white">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="text-primary font-black uppercase tracking-widest mb-4">Šta radimo</h2>
                <h1 className="text-dark text-4xl font-black md:text-6xl mb-6">Naše Usluge</h1>
                <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="space-y-24">
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
        </section>
    )
}

export default Sections

const Section = ({ title, description, image, id, sections, index }) => {
    const isEven = index % 2 === 0
    const mainImage = Array.isArray(image) ? image[0] : image

    return (
        <div id={id} className={`py-16 ${isEven ? 'bg-white' : 'bg-orange-50/30'}`}>
            <div className="container mx-auto px-4">
                <div className={`flex flex-wrap items-center -mx-4 ${isEven ? '' : 'flex-row-reverse'}`}>
                    <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                        <motion.div
                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] rotate-3 -z-10"></div>
                            <img
                                src={mainImage}
                                alt={title}
                                className="w-full h-[400px] md:h-[500px] object-cover rounded-[2rem] shadow-2xl border-4 border-white"
                            />
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-xl hidden md:block border border-orange-100">
                                <span className="text-primary font-black text-2xl">0{index + 1}</span>
                                <span className="ml-3 font-bold text-gray-800">Profesionalna usluga</span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2 px-4">
                        <motion.div
                            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}
                        >
                            <h3 className="text-3xl md:text-4xl font-black text-dark mb-6 leading-tight">
                                {title}
                            </h3>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                {description}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-10">
                                {sections.slice(0, 1).map((s, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-gray-600">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        </div>
                                        <span className="font-medium line-clamp-3">{s}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                to={`/usluga/${id}`}
                                className="inline-flex items-center gap-3 bg-dark text-white hover:bg-primary px-8 py-4 rounded-2xl font-black transition-all shadow-lg hover:shadow-primary/30 group active:scale-95"
                            >
                                VIŠE INFORMACIJA
                                <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
