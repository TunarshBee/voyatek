import { quotes } from "../assets";
type FeedbackType = {
  img: string;
  title: string;
  content: string;
  name: string;
};
const FeedbackCard = ({ content, name, title, img }: FeedbackType) => (
  <div className="feedback-card my-5 mr-0 flex max-w-[370px] flex-col justify-between rounded-[20px] px-10 py-12 sm:mr-5 md:mr-10">
    <img
      src={quotes}
      alt="double_quotes"
      className="h-[27.6px] w-[42.6px] object-contain"
    />
    <p className="font-poppins my-10 text-[18px] leading-[32.4px] font-normal text-white">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="h-[48px] w-[48px] rounded-full" />
      <div className="ml-4 flex flex-col">
        <h4 className="font-poppins text-[20px] leading-[32px] font-semibold text-white">
          {name}
        </h4>
        <p className="font-poppins text-[16px] leading-[24px] font-normal text-white/70">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
