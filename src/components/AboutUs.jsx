import React from 'react'
import { motion } from "framer-motion";


function AboutUs() {

  const text = "Naš mali tim posluje veoma uspešno na teritoriji cele Vojvodine, a nekada izlazimo i van tih granica. Kao vrlo brz, efikasan i tim sa povoljnim cenama, sarađujemo sa fizičkim i pravnim licima. Za stalnu saradnju nudimo značajnu korekciju cene. Imajte na umu da, ukoliko želite više naših usluga ili stalnu saradnju nudimo vam značajnu korekciju cene.".split(" ");

  return (
    <div id='onama' className='text-center'>
      <motion.div
      style={{ marginTop: "3.5rem" }}
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          y: 50
        }}
        whileInView={{
          opacity: 1,
          y: 0, // Slide in to its original position
          transition: {
            duration: 1 // Animation duration
          }
        }}
        viewport={{ once: true }}
      >
        <div>
          <h1 style={{ color: "#2e3135" }} className={"titleline mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl"}>O nama</h1>


          <p style={{ color: "#2b2c2e" }} className={"mb-6 text-lg font-normal text-white lg:text-xl sm:px-18 xl:px-72"}>
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </p>
        </div>

      </motion.div>
    </div>
  )
}

export default AboutUs