import { arrowUp } from "../assets";
import styles from "../style";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} bg-blue-gradient h-[140px] w-[140px] cursor-pointer rounded-full p-[2px]`}
  >
    <div
      className={`${styles.flexCenter} bg-primary h-[100%] w-[100%] flex-col rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins text-[18px] leading-[23.4px] font-medium">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow-up"
          className="h-[23px] w-[23px] object-contain"
        />
      </div>

      <p className="font-poppins text-[18px] leading-[23.4px] font-medium">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
