import LinearProgress from "@material-ui/core/LinearProgress";

const MKTValue = ({ _ }) => {
    return (
        <div className="MKTValue">
            <div className="firstmktvalue">
                <div className="">
                    <label>Market Value</label>
                </div>
                <div className="">
                    <label className="MKTPrice">${_.Price * _.Quantity}</label>
                </div>
            </div>
            <div className="secondmktvalue">
                <div className="">
                    <label className="returnD">% of Portfolio Value</label>
                </div>
                <div className="">
                    <label className="returnvalue">{_.PortfolioValue}%</label>
                </div>
            </div>
            <LinearProgress
                variant="determinate"
                value={_.PortfolioValue}
                className="progressBar"
            />
        </div>
    )
}

export default MKTValue
