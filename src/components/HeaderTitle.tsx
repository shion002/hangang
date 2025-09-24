import { motion } from "framer-motion";

const HeaderTitle = () => {
  return (
    <>
      <div className="header-title">
        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="header-title-first"
        >
          Trusted today, transforming tomorrow
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="header-title-second"
        >
          한강구조공업은 당신과 함께 미래를 설계합니다.
        </motion.h3>
      </div>
    </>
  );
};

export default HeaderTitle;
