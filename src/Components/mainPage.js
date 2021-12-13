import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getStockFile } from "../Redux/Action/stockFile"
import DataTable from "./dataTable"
import DonutChart from 'react-donut-chart';
import { Doughnut } from "react-chartjs-2";
import ShareFile from "./Table/ShareFile"
import Quantity from "./Table/Quantity"
import MKTValue from "./Table/MKTValue"
import ButtonFile from "./Table/ButtonFile"

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
        <div className="w-100 m-auto border ">
            <Row className="p-4">
                <Col xl={9} sm={9} lg={9} md={9} xs={9}>
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
                            <div className="grid-item">4</div>
                            <div className="grid-item">
                                <ButtonFile />
                            </div>
                        </div>
                    ))}
                </Col>
                <Col xl={3} sm={3} lg={3} md={3} xs={3}>
                    {<DonutChart
                        width={300}
                        height={230}
                        data={[{
                            label: 'MF',
                            value: mf
                        },
                        {
                            label: 'ETF',
                            value: etf,
                            // isEmpty: true
                        }]}
                        colors={['aqua', '#a89f4b']}
                    />}

                </Col>
            </Row >
            <div className="m-2">
                <DataTable stock={stock} />
            </div>
        </div >
    )
}

export default MainPage
{/*<Row>
                            <div>
                                <Col xl={2} sm={2} lg={2} md={2} xs={2}>
                                    <Row>
                                        <Col xl={2} sm={2} lg={2} md={2} xs={2}>
                                            <div className="listIcon">
                                                {/*<i className="bi bi-list "></i>
                                                <BsList />
                                            </div>
                                        </Col>
                                        <div className="col-3">
                                            <span className="sharetype font-weight-bold ">{_.Scrip}</span>
                                            <br />
                                            <span className="price">${_.Price}</span>
                                        </div>
                                    </Row>
                                </Col>
                                {/* <Col xl={2} sm={2} lg={2} md={2} xs={2}>2</Col>
                                <Col xl={2} sm={2} lg={2} md={2} xs={2}>3</Col>
                                <Col xl={2} sm={2} lg={2} md={2} xs={2}>4</Col>
                                <Col xl={2} sm={2} lg={2} md={2} xs={2}>5</Col>
                    <Col xl={2} sm={2} lg={2} md={2} xs={2}>6</Col>
                            </div>
                </Row>*/}