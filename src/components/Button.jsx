import iconDice from "@/assets/images/icon-dice.svg";

const Button = ({ fetchData }) => {
  return (
    <button onClick={fetchData} className="btn">
      <img src={iconDice} alt="" className="btnImg" />
    </button>
  );
};

export default Button;
