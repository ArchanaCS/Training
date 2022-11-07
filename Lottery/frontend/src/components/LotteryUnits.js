import './LotteryUnits.css';

export default function LotteryUnits() {
    return (
        <>
            <div className="LotteryUnits_outer" >
                <div className="LotteryUnits_col11">
                    <div className="LotteryUnits_sell">
                        <label>
                            Now selling …
                        </label>
                    </div>
                    <div className="LotteryUnits_date">
                        <label>Draw on Date</label>
                    </div >
                    <div className="LotteryUnits_buy">
                        <button>Buy</button>
                    </div>
                </div>
                <div className="LotteryUnits_col12">
                    <label>Lottery Drum</label>
                </div>

            </div>
        </>
    )
};