import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

type ButtonType = {
  icon: string;
  title: string;
  content: string;
  index: number;
};

const FeatureCard = ({ icon, title, content, index }: ButtonType) => (
  <motion.div
    className={`flex flex-row rounded-[20px] p-6 ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <div
      className={`h-[64px] w-[64px] rounded-full ${styles.flexCenter} bg-[#09977C1A]`}
    >
      <img src={icon} alt="star" className="h-[50%] w-[50%] object-contain" />
    </div>
    <div className="ml-3 flex flex-1 flex-col">
      <h4 className="font-poppins mb-1 text-[18px] leading-[23.4px] font-semibold text-white">
        {title}
      </h4>
      <p className="font-poppins text-[16px] leading-[24px] font-normal text-white/70">
        {content}
      </p>
    </div>
  </motion.div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <motion.div
      className={layout.sectionInfo}
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
        You do the business, <br className="hidden sm:block" /> we’ll handle the
        money.
      </motion.h2>
      <motion.p
        className={`${styles.paragraph} mt-5 max-w-[470px]`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Button styles={`mt-10`} />
      </motion.div>
    </motion.div>

    <motion.div
      className={`${layout.sectionImg} flex-col`}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </motion.div>
  </section>
);

export default Business;
