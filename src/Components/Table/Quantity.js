import { BsList, BsAt, BsCashCoin, BsServer } from "react-icons/bs";

const Quantity = ({ _ }) => {
    return (
        <div className="quantityDiv">
            <div className="firstchild">
                <div className="">
                    <BsServer />
                </div>
                <div className="qtylabel">
                    <label className="firstlabel">Quantity</label>
                    <label className="lastLabel">{_.Quantity}</label>
                </div>
            </div>
            <div className="secondChild">
                <div className="">
                    <BsAt />
                </div>
                <div className="qtylabel">
                    <label className="firstlabel">Avg. Cost</label>
                    <label className="lastLabel">${_.AvgCost}</label>
                </div>
            </div>
            <div className="thirdChild">
                <div className="">
                    <BsCashCoin />
                </div>
                <div className="qtylabel">
                    <label className="firstlabel">Invested Amt.</label>
                    <label className="lastLabel">${_.InvestedAmount}</label>
                </div>
            </div>
        </div>)
}

export default Quantity
