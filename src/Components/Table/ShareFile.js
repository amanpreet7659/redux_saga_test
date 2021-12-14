import { Col, Row } from "react-bootstrap"
import { BsList } from "react-icons/bs"
import ishare from '../../images/IShares.png'

const ShareFile = ({ _ }) => {
    return (
        <Row className="firstDiv">
            <Col xl={2} sm={2} lg={2} md={2} xs={2}>
                <div className="icon"><BsList /></div>
            </Col>
            <Col xl={4} sm={4} lg={4} md={4} xs={4}>
                <div className="childSecond">
                    <span className="scrip">{_.Scrip}</span>
                    <br />
                    <span className="priceD">${_.Price}</span>
                </div>
            </Col>
            <Col xl={6} sm={6} lg={6} md={6} xs={6}>
                <div className="childthird">
                    <img src={ishare} className="ishareImage" />
                    <br />
                    <span className="_Scrip">{_.Scrip} Index</span><br />
                    <span className="enquiryD">US Equity</span>
                </div>
            </Col>
        </Row>
    )
}

export default ShareFile
