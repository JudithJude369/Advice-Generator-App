import patternDividerDesktop from "@/assets/images/pattern-divider-desktop.svg";
import patternDividerMobile from "@/assets/images/pattern-divider-mobile.svg";

const Advice = ({ advice, id }) => {
  return (
    <div>
      <p className="id-text">Advice #{id}</p>
      <h5 style={{ textAlign: "center" }}> "{advice}"</h5>
      <img src={patternDividerDesktop} alt="" className="img-desktop" />
      <img src={patternDividerMobile} alt="" className=" img-mobile" />
    </div>
  );
};

export default Advice;
