import { BsList, BsAt, BsCashCoin, BsServer } from "react-icons/bs";

const Quantity = ({_}) => {
    return (
        <div className="centerdiv">
            <div className="grid_container">
                <div className="grid_item">
                    <div className="grid_item_list_container">
                        <div className="grid_item_list">
                            <BsServer />
                        </div>
                        <div className="grid_item_list">
                            <div className="d-flex ">
                                <div className="w-50">
                                    <label>Quantity</label>
                                </div>
                                <div className="w-50">
                                    <label className="quantityDiv">{_.Quantity}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid_item_list_container ">
                        <div className="grid_item_list">
                            <BsAt />
                        </div>
                        <div className="grid_item_list">
                            <div className="d-flex ">
                                <div className="w-50">
                                    <label>Avg. Cost</label>
                                </div>
                                <div className="w-50">
                                    <label className="quantityDiv">${_.AvgCost}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid_item_list_container ">
                        <div className="grid_item_list">
                            <BsCashCoin />
                        </div>
                        <div className="grid_item_list">
                            <div className="d-flex ">
                                <div className="w-50">
                                    <label>Invested Amt.</label>
                                </div>
                                <div className="w-50">
                                    <label className="quantityDiv">${_.InvestedAmount}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Quantity
