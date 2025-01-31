import { motion } from "framer-motion";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
      >
        <motion.div
          className="bg-discount-gradient mb-2 flex flex-row items-center rounded-[10px] px-4 py-[6px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={discount} alt="discount" className="h-[32px] w-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </motion.div>

        <div className="flex w-full flex-row items-center justify-between">
          <motion.h1
            className="font-poppins ss:text-[72px] ss:leading-[100.8px] flex-1 text-[52px] leading-[75px] font-semibold text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Next <br className="hidden sm:block" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </motion.h1>
          <div className="ss:flex mr-0 hidden md:mr-4">
            <GetStarted />
          </div>
        </div>

        <motion.h1
          className="font-poppins ss:text-[68px] ss:leading-[100.8px] w-full text-[52px] leading-[75px] font-semibold text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Payment Method.
        </motion.h1>

        <motion.p
          className={`${styles.paragraph} mt-5 max-w-[470px]`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </motion.p>
      </div>

      <motion.div
        className={`flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}
        initial={{ opacity: 50, y: 100 }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <img
          src={robot}
          alt="billing"
          className="relative z-[5] h-[100%] w-[100%]"
        />

        <motion.div
          className="pink__gradient absolute top-0 z-[0] h-[35%] w-[40%]"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        <motion.div
          className="white__gradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
        <motion.div
          className="blue__gradient absolute right-20 bottom-20 z-[0] h-[50%] w-[50%]"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </motion.div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </motion.section>
  );
};

export default Hero;
