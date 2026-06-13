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
        title: 'OBARANJE STABALA',
        image: '/obaranje2.jpg',
        id: 'obaranje',
        description:
            'Vršimo profesionalno obaranje stabala uz maksimalnu bezbednost i efikasnost. Specijalizovani smo za obaranje manjih i srednjih stabala u dvorištima, voćnjacima, šumama i na drugim terenima.',
        sections: [
            'Radimo obaranje manjih i srednjih stabala klasičnom tehnikom sečenja, uz korišćenje profesionalne opreme i dugogodišnje iskustvo u radu.',
            'Za veća i zahtevnija stabla radimo uz pomoć korpe, što omogućava bezbedno uklanjanje stabla deo po deo, posebno u urbanim sredinama i skučenim prostorima.',
            'Obaranje stabala je složen proces koji zahteva pažnju, veštinu i odgovarajuću opremu. Prvo, važno je pažljivo proceniti stablo i okolinu kako biste odredili pravac obaranja. Zatim se vrši priprema prostora oko stabla, uklanjanje prepreka i postavljanje sigurnosnih mera.',
            'Kada je sve spremno, pristupa se obaranju stabla. To se obično radi sečenjem trupa u određenom redosledu kako bi se postigao kontrolisan pad stabla. Važno je pravilno proceniti ugao sečenja i pravac pada kako bi se izbegle nezgode i oštećenja okoline.',
            'Nakon što stablo padne, obavlja se čišćenje i uklanjanje preostalih delova. Ovo može biti opasan posao, pa je važno imati iskustvo i pravilnu opremu kako biste obezbedili sigurnost tokom celog procesa.',
            'Ukoliko na vašem prostoru posedujete stablo ili više stabala, a da vam predstavljaju smetnju, dovode vas u opasnost ili vam više nisu potrebna, budite slobodni da nas kontaktirate.'        ]
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
        title: 'OBARANJE STABALA',
        image: '/obaranje2.jpg',
        id: 'obaranje',
        position: "bottom",
        description:
            'Vršimo profesionalno obaranje stabala uz maksimalnu bezbednost i efikasnost. Specijalizovani smo za obaranje manjih i srednjih stabala u dvorištima, voćnjacima, šumama i na drugim terenima.',
        sections: [
            'Bezbednost je naš prioritet. Svakom stablu pristupamo pažljivo, uz procenu pravca pada, okoline i potencijalnih prepreka kako bismo izbegli oštećenja objekata, ograda ili drugih stabala.',
            'Radimo obaranje manjih i srednjih stabala klasičnom tehnikom sečenja, uz korišćenje profesionalne opreme i dugogodišnje iskustvo u radu.',
            'Za veća i zahtevnija stabla radimo uz pomoć korpe (auto-korpe), što omogućava bezbedno uklanjanje stabla deo po deo, posebno u urbanim sredinama i skučenim prostorima.',
            'Po potrebi vršimo i sečenje stabla na manje delove radi lakšeg uklanjanja ili pripreme za ogrev.',
            'Uslugu prilagođavamo vašim potrebama – bilo da je u pitanju pojedinačno stablo ili više stabala na istoj lokaciji.'
        ]
    },
]


import { Link } from 'react-router-dom'
import { IconArrowRight } from '@tabler/icons-react'

const textItem = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const Sections = () => {
    return (
        <section id='sekcije' className="py-20 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="container mx-auto px-4 mb-16 text-center"
            >
                <h2 className="text-primary font-black uppercase tracking-widest mb-4">Šta radimo</h2>
                <h1 className="text-dark text-4xl font-black md:text-6xl mb-6">Naše Usluge</h1>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-24 h-1.5 bg-primary mx-auto rounded-full origin-center"
                ></motion.div>
            </motion.div>

            <div className="space-y-24">
                {SECTIONS.map((section, index) => (
                    <Section
                        index={index}
                        key={`${section.id}-${index}`}
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
                            initial={{ opacity: 0, x: isEven ? -60 : 60, rotate: isEven ? -2 : 2 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-80px" }}
                            whileHover={{ y: -6 }}
                            className="relative group/img"
                        >
                            <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] rotate-3 -z-10 transition-transform duration-500 group-hover/img:rotate-6"></div>
                            <div className="overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white">
                                <img
                                    src={mainImage}
                                    alt={title}
                                    className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover/img:scale-105"
                                />
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-xl hidden md:block border border-orange-100"
                            >
                                <span className="text-primary font-black text-2xl">0{index + 1}</span>
                                <span className="ml-3 font-bold text-gray-800">Profesionalna usluga</span>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="w-full lg:w-1/2 px-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
                            }}
                            className={`${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}
                        >
                            <motion.h3
                                variants={textItem}
                                className="text-3xl md:text-4xl font-black text-dark mb-6 leading-tight"
                            >
                                {title}
                            </motion.h3>
                            <motion.p
                                variants={textItem}
                                className="text-lg text-gray-700 mb-8 leading-relaxed"
                            >
                                {description}
                            </motion.p>

                            <motion.div variants={textItem} className="flex flex-wrap gap-4 mb-10">
                                {sections.slice(0, 1).map((s, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-gray-600">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        </div>
                                        <span className="font-medium line-clamp-3">{s}</span>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div variants={textItem}>
                                <Link
                                    to={`/usluga/${id}`}
                                    className="inline-flex items-center gap-3 bg-dark text-white hover:bg-primary px-8 py-4 rounded-2xl font-black transition-all shadow-lg hover:shadow-primary/30 group active:scale-95"
                                >
                                    VIŠE INFORMACIJA
                                    <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
