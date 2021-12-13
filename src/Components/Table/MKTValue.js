const MKTValue = ({_}) => {
    return (
        <div className="grid_item_list_container_marketValue">
            <div className="grid_item_list_marketValue">
                <div className="d-flex p-2">
                    <div className="w-75">
                        <label>Market Value</label>
                    </div>
                    <div className="w-25">
                        <label className="marketValue">${_.Price * _.Quantity}</label>
                    </div>
                </div>
                <div className="d-flex p-2">
                    <div className="w-75">
                        <label>% of Portfolio Value</label>
                    </div>
                    <div className="w-25">
                        <label className="marketValue">{_.PortfolioValue}%</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MKTValue
