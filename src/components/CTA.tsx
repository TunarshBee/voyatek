import { motion } from "framer-motion";
import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <motion.section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 box-shadow flex-col rounded-[20px] sm:flex-row`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
    <motion.div
      className="flex flex-1 flex-col"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.h2
        className={styles.heading2}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Let’s try our service now!
      </motion.h2>
      <motion.p
        className={`${styles.paragraph} mt-5 max-w-[470px]`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </motion.p>
    </motion.div>

    <motion.div
      className={`${styles.flexCenter} mt-10 ml-0 sm:mt-0 sm:ml-10`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <Button />
    </motion.div>
  </motion.section>
);

export default CTA;
