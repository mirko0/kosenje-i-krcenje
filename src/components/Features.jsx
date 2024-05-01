import React from 'react'
import { motion } from "framer-motion";

export const FEATURES = [
    {
        title: 'KOŠENJE TRAVE I KRČENJE PLACEVA',
        image: '/kosenje.jpg',
        id: 'kosenje',
        description:
            'Naše usluge košenja trave i krčenja prostora pružaju vam mogućnost da uživate u vašem okruženju bez smetnji. Brzo i efikasno uklanjamo visoku travu, žbunje i šiblje kako biste imali uređen prostor. Redovno održavanje vaših placeva takođe je deo naše ponude, uz fleksibilnost u cenama.',
    },
    {
        title: 'OBARANJE MANJIH I SREDNJIH STABALA',
        image: '/obaranje.jpg',
        id: 'obaranje',
        description:
            "Potreba za uklanjanjem suvih ili neplodnih stabala može biti važna za sigurnost i estetiku vašeg prostora. Naš tim efikasno i sigurno obara manja i srednja stabla, kao i grane koje predstavljaju rizik. Vaša bezbednost i mir su naš prioritet.",
    },
    {
        title: 'VAĐENJE MANJIH PANJEVA SA KORENOM',
        image: '/panj.jpg',
        id: 'vadjenjepanjeva',
        description:
            'Uklanjanje panjeva sa korenom može biti delikatan posao, ali mi to obavljamo brzo i efikasno. Ova usluga može ići u sklopu usluge obaranja manjih i srednjih stabala, pri čemu će cena biti korigovana. Bez obzira da li je u pitanju obaranje stabla ili samo uklanjanje panja, naš tim izlazi na vašu adresu kako bi osigurao potpuno čist prostor.',
    },
    {
        title: 'ODVOZ GRANA I DRVEĆA',
        image: '/odvoz.png',
        id: 'odvozgrana',
        description: 'Uklanjanje grana i drveća je ključno za održavanje čistoće i uređenosti životnog prostora. Garantujemo bezbedno i efikasno uklanjanje, čuvajući prirodu i sprečavajući štetu. Nakon odvoza, brinemo se o recikliranju otpada, smanjujući uticaj na okolinu. Bez obzira na prethodne usluge, nudimo pristupačno uklanjanje grana i drveća. Očistite svoje dvorište, prepustite nama brigu o prirodi!'
    },
    {
        title: 'SEČENJE DRVA ZA OGREV',
        image: '/secenje.jpeg',
        id: 'secenjedrva',
        description:
            'Za sve vaše potrebe u pripremi ogreva, možete računati na nas. Pružamo uslugu sečenja drva tokom cele godine, omogućavajući vam da spremno dočekate hladne dane. Naš tim vam stoji na raspolaganju za sečenje drva prema vašim zahtevima, osiguravajući vam kvalitetno ogrevno drvo koje će vas grejati tokom zime.',
    },
    {
        title: 'SLAGANJE I SKLADIŠTENJE DRVA ZA OGREV',
        image: '/slaganje.jpg',
        id: 'slaganjedrva',
        position: "bottom",
        description:
            'Pre kišnih i hladnih dana je vrlo važno skloniti drva za ogrev na sigurno. Vršimo usluge skladištenja drva za ogrev tokom cele godine. Ova usluga može iči u sklopu prethodne, koja se odnosi na sečenje ili zasebno.',
    },
];

const Features = () => {
    return (
        <div id='usluge' style={{ marginTop: "1.5rem", overflowX: "hidden"}} >

            <div className="flex flex-wrap justify-center mt-10">
                {FEATURES.map((feature) => (
                    <FeatureItem
                        key={feature.title}
                        title={feature.title}
                        description={feature.description}
                        image={feature.image}
                        id={feature.id}
                    />
                ))}


            </div>

        </div>
    )
}

const FeatureItem = ({ title, description, image, id }) => {
    return (
        <motion.div
            className="p-4 max-w-md" style={{ minHeight: "28rem" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{
                scale: 0.8
            }}
            whileInView={{
                scale: 1.0,
            }}
            viewport={{ once: true }}
            transition={{ type: 'spring' }}
        >
            <div className="flex rounded-lg h-full p-8 flex-col" style={{ background: "linear-gradient(140deg, rgba(136, 51, 39, 0) 0%, #0e0e0eb2 0%), url(" + image + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="flex items-center mb-3">
                    <h2 className="text-white text-lg font-extrabold">{title}</h2>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                    <p className="leading-relaxed text-base text-stone-300 font-medium">
                        {description}
                    </p>
                    <a href={"#" + id} className="mt-3 text-white font-semibold hover:text-orange-600 inline-flex items-center">Više Informacija
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>

            </div>
        </motion.div >
    )
}

export default Features