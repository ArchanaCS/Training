import "./LotteryUnits.css";
import MyTimer from "./Timer";

export default function LotteryUnits(time) {
  return (
    <>
      <div className="LotteryUnits_outer">
        <div className="LotteryUnits_col">
          <div className="LotteryUnits_col_row">
            <button className="LotteryUnits_sell">
              Now selling lotteryname
            </button>
          </div>
          <div className="LotteryUnits_col_row">
            <button className="LotteryUnits_date">Draw on Date</button>
          </div>
          <div className="LotteryUnits_col_rowleft">
            <button className="LotteryUnits_buy">Buy</button>
          </div>
        </div>
        <div className="LotteryUnits_col">
          <MyTimer />
        </div>
      </div>
    </>
  );
}
