import { motion } from "framer-motion";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <motion.section
    className={`${styles.flexCenter} my-4`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
    <motion.div
      className={`${styles.flexCenter} w-full flex-wrap`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {clients.map((client) => (
        <motion.div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} m-5 min-w-[120px] sm:min-w-[192px]`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={client.logo}
            alt="client_logo"
            className="w-[100px] object-contain sm:w-[192px]"
          />
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);

export default Clients;
