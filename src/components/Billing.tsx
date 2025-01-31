import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <motion.div
      className={layout.sectionImgReverse}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={bill}
        alt="billing"
        className="relative z-[5] h-[100%] w-[100%]"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      />

      <motion.div
        className="white__gradient absolute top-0 -left-1/2 z-[3] h-[50%] w-[50%] rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      />
      <motion.div
        className="pink__gradient absolute bottom-0 -left-1/2 z-[0] h-[50%] w-[50%] rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      />
    </motion.div>

    <motion.div
      className={layout.sectionInfo}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h2
        className={styles.heading2}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        Easily control your <br className="hidden sm:block" /> billing &
        invoicing
      </motion.h2>
      <motion.p
        className={`${styles.paragraph} mt-5 max-w-[470px]`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </motion.p>

      <motion.div
        className="mt-6 flex flex-row flex-wrap sm:mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <motion.img
          src={apple}
          alt="google_play"
          className="mr-5 h-[42.05px] w-[128.86px] cursor-pointer object-contain"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
        <motion.img
          src={google}
          alt="google_play"
          className="h-[43.08px] w-[144.17px] cursor-pointer object-contain"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Billing;
