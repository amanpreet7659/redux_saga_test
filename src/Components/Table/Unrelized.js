import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

const Unrelized = ({ _ }) => {
    return (
        <div className="unrelizedDiv">
            <div className="">
                <div className="unfirstDiv">
                    <div className="">Unrealized P&L</div>
                    <div className="" style={{ }}>
                        <span>${_.UnrealizedPL}</span>
                    </div>
                </div>
                <div className="unsecondDiv">
                    <div className="return">% Return</div>
                    <div className=" returnarrowdiv">
                        <span> {0 > _.Return ? (
                            <BsFillCaretDownFill className="icondown" />
                        ) : (
                            <BsFillCaretUpFill className="iconup" />
                        )}{_.Return}%</span>
                    </div>
                </div>
                <div className="return-val">
                    <div
                        className="negative"
                        attr-val={_.Return < 0 ? _.Return : 0}
                    >
                        <div
                            className="neg-val"
                            style={{
                                width:
                                    _.Return < 0
                                        ? `${100 + _.Return}%`
                                        : "100%",
                            }}
                        ></div>
                    </div>
                    <div
                        className="positive"
                        attr-val={_.Return > 0 ? _.Return : 0}
                    >
                        <div
                            className="pos-val"
                            style={{
                                width:
                                    _.Return > 0 ? `${_.Return}%` : "0%",
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Unrelized
