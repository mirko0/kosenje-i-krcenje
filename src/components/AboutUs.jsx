import React from 'react'
import { motion } from "framer-motion";

function AboutUs() {
  const description = "Naš mali tim posluje veoma uspešno na teritoriji cele Vojvodine, a nekada izlazimo i van tih granica. Kao vrlo brz, efikasan i tim sa povoljnim cenama, sarađujemo sa fizičkim i pravnim licima. Imajte na umu da, ukoliko želite više naših usluga ili stalnu saradnju nudimo vam značajnu korekciju cene.";

  return (
    <section id='onama' className='py-20 bg-white overflow-hidden'>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-primary font-black uppercase tracking-widest mb-4">Upoznajte nas</h2>
          <h1 className="text-dark mb-8 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            O nama
          </h1>

          <div className="relative">
            <div className="absolute -left-4 -top-4 text-primary opacity-20 text-8xl font-serif">"</div>
            <p className="relative z-10 text-xl md:text-2xl font-medium text-gray-700 leading-relaxed px-6">
              {description}
            </p>
            <div className="absolute -right-4 -bottom-4 text-primary opacity-20 text-8xl font-serif">"</div>
          </div>

          {/* <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full border border-gray-100 shadow-sm">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-gray-800">Dostupni odmah</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full border border-gray-100 shadow-sm">
              <span className="font-black text-primary">100%</span>
              <span className="font-bold text-gray-800">Zadovoljstvo</span>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs