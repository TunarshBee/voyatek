import { motion } from "framer-motion";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <motion.section
    className={layout.section}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    <motion.div
      className={layout.sectionInfo}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <motion.h2
        className={styles.heading2}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        Find a better card deal <br className="hidden sm:block" /> in few easy
        steps.
      </motion.h2>
      <motion.p
        className={`${styles.paragraph} mt-5 max-w-[470px]`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Button styles={`mt-10`} />
      </motion.div>
    </motion.div>

    <motion.div
      className={layout.sectionImg}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <motion.img
        src={card}
        alt="billing"
        className="h-[100%] w-[100%]"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      />
    </motion.div>
  </motion.section>
);

export default CardDeal;
