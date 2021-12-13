const ShareRow = () => {
    return (
        <div>
            <div className="row">
                <div className="col-2 align-self-center">
                    <i className="fa fa-bars" />
                </div>
                <div className="col-3">
                    <span className="sharetype font-weight-bold">ITOT</span>
                    <br />
                    <span className="price">${}</span>
                </div>
            </div>
        </div>
    )
}
// props.sData.Price
export default ShareRow
