import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const DataTable = ({ stock }) => {
    
    return (
        <div className="w-75 m-auto">
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Scrip</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Avg. Cost</th>
                        <th>Invested Amount</th>
                        <th>% of Portfolio Value</th>
                        <th>Unrealized P&L</th>
                        <th>% Return </th>
                    </tr>
                </thead>
                <tbody>
                    {stock && stock.map((_, index) => (<tr key={index}>
                        <td>{_.Scrip}</td>
                        <td>{_.Quantity}</td>
                        <td>{_.Price}</td>
                        <td>{_.AvgCost}</td>
                        <td>{_.InvestedAmount}</td>
                        <td>{_.PortfolioValue}</td>
                        <td>{_.UnrealizedPL}</td>
                        <td>{_.Return}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable
