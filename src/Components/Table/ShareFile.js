import { Col, Row } from "react-bootstrap"
import { BsList } from "react-icons/bs"

const ShareFile = ({_}) => {
    return (
        <Row>
            <Col xl={2} sm={2} lg={2} md={2} xs={2}>
                <div className="iconList"><BsList /></div>
            </Col>
            <Col xl={4} sm={4} lg={4} md={4} xs={4}>
                <div className="col-3">
                    <span className="sharetype">{_.Scrip}</span>
                    <br />
                    <span className="doller">$</span><span className="price">{_.Price}</span>
                </div>
            </Col>
            <Col xl={6} sm={6} lg={6} md={6} xs={6}>
                <div className="sharediv">
                    <span className="iShares">iShares</span><br />
                    <small className="bydiv">by xxxxxxxx</small><br />
                    <span className="scriptDiv">{_.Scrip} Index</span><br />
                    <span className="enquiry">US Equity</span>
                </div>
            </Col>
        </Row>
    )
}

export default ShareFile
