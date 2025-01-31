import { motion } from "framer-motion";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <motion.section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} relative flex-col`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
    <motion.div
      className="blue__gradient absolute -right-[50%] bottom-40 z-[0] h-[60%] w-[60%] rounded-full"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    />

    <motion.div
      className="relative z-[1] mb-6 flex w-full flex-col items-center justify-between sm:mb-16 md:flex-row"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className={styles.heading2}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        What People are <br className="hidden sm:block" /> saying about us
      </motion.h2>
      <motion.div
        className="mt-6 w-full md:mt-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className={`${styles.paragraph} max-w-[450px] text-left`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </motion.div>
    </motion.div>

    <motion.div
      className="feedback-container relative z-[1] flex w-full flex-wrap justify-between"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </motion.div>
  </motion.section>
);

export default Testimonials;
