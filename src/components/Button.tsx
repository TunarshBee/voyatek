const Button = ({ styles }: { styles?: string }) => (
  <button
    type="button"
    className={`font-poppins text-primary bg-blue-gradient rounded-[10px] px-6 py-4 text-[18px] font-medium outline-hidden ${styles}`}
  >
    Get Started
  </button>
);

export default Button;
