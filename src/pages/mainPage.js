import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getStockFile } from "../Redux/Action/stockFile"
import DonutChart from 'react-donut-chart';
import { BsFillCaretDownFill } from "react-icons/bs";
import DataTable from '../Components/dataTable'
import ShareFile from '../Components/Table/ShareFile'
import Quantity from '../Components/Table/Quantity'
import MKTValue from '../Components/Table/MKTValue'
import Unrelized from '../Components/Table/Unrelized'
import ButtonFile from '../Components/Table/ButtonFile'

const MainPage = () => {
    const [stock, setStock] = useState()
    const [portfolio, setPortfolio] = useState([])
    const selector = useSelector(state => state.data.stockData)
    const dispatch = useDispatch()
    var mf = 0, etf = 0;

    useEffect(() => {
        dispatch(getStockFile())
    }, [])

    useEffect(() => {
        const res = selector && selector.map((_, index) => (_.PortfolioValue))

        setPortfolio(res)
        setStock(selector)

    }, [selector])

    portfolio && portfolio.map((_, index) => {
        if (portfolio.length / 2 + 1 > index) {
            mf = mf + _
        } else {
            etf = etf + _
        }
    })

    return (
        <div className="w-100 m-auto">
            <div className="p-4 mainDivContainer">
                <div className="mainDivContainerList">
                    {stock && stock.map((_, i) => (
                        <div className="grid-container" key={i}>
                            <div className="grid-item">
                                <ShareFile _={_} />
                            </div>
                            <div className="grid-item">
                                <Quantity _={_} />
                            </div>
                            <div className="grid-item">
                                <MKTValue _={_} />
                            </div>
                            <div className="grid-item">
                                <Unrelized _={_} />
                            </div>
                            <div className="grid-item">
                                <ButtonFile />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mainDivContainerList">
                    <div className="mainDivContainer_List">

                        <div className="portfolio">
                            <label>Portfolio</label>
                            <label>Asset wise <BsFillCaretDownFill /></label>
                        </div>
                        <DonutChart
                            className="DonutChart"
                            data={[{
                                label: 'MF',
                                value: mf ? mf : 0
                            },
                            {
                                label: 'ETF',
                                value: etf ? etf : 0,
                            }]}
                            colors={['aqua', '#a89f4b']}
                        />
                    </div>
                </div>
            </div>
            <div className="m-2">
                <DataTable stock={stock} />
            </div>
            {/*<div className="customeprogress">
                <div className="tryDiv" attr-val="60">
                    <div className="tryinside" style={{ width: "100%" }}></div>
                </div>
            div>*/}
        </div>
    )
}

export default MainPage