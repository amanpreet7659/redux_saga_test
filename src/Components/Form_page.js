import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { ageUp, getFileData } from "../Redux/Action/Action_File"

const Form_page = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    console.log("selector", selector);
    const [arr, setArr] = useState([])

    useEffect(() => {
        dispatch(getFileData())
    }, [])
    
    const [obj, setObj] = useState({
        fname: "", lname: "", section: "", branch: "", email: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setObj({ ...obj, [name]: value })
    }

    const handleSubmit = () => {
        setArr((o) => ([...o, obj]))
    }

    const handleClick = () => {
        // dispatch(ageUp())
    }
    return (
        <div className="m-2">
            <button onClick={handleClick}>Age Up</button>
            <Row>
                <Col xs={6} lg={6} md={6} xl={6} sm={6} >
                    <form onSubmit={e => {
                        e.preventDefault()
                        handleSubmit()
                    }}>
                        <div className="d-flex p-2">
                            <div className="w-25"><label>First Name</label></div>
                            <div className="w-75">
                                <input type="text" name="fname" onChange={handleChange} placeholder="First name" className="form-control" />
                            </div>
                        </div>
                        <div className="d-flex p-2">
                            <div className="w-25">Last Name</div>
                            <div className="w-75">
                                <input type="text" name="lname" onChange={handleChange} placeholder="Last name" className="form-control" />
                            </div>
                        </div>
                        <div className="d-flex p-2">
                            <div className="w-25">Branch</div>
                            <div className="w-75">
                                <input type="text" name="branch" onChange={handleChange} placeholder="Branch" className="form-control" />
                            </div>
                        </div>
                        <div className="d-flex p-2">
                            <div className="w-25">Email</div>
                            <div className="w-75">
                                <input type="text" name="email" onChange={handleChange} placeholder="Email" className="form-control" />
                            </div>
                        </div>
                        <div className="d-flex p-2">
                            <div className="w-25"><label>Section</label></div>
                            <div className="w-75">
                                <input type="text" name="section" onChange={handleChange} placeholder="Section" className="form-control" />
                            </div>
                        </div>
                        <div className="d-flex p-2">
                            <div className="w-25"><label></label></div>
                            <div className="w-75">
                                <input type="submit" placeholder="" value="Submit" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </Col>
                <Col xs={6} lg={6} md={6} xl={6} sm={6} >
                    <table className="table table-responsive ">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Branch</th>
                                <th>Email</th>
                                <th>Section</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arr && arr.map((item) => (<tr>
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                                <td>{item.branch}</td>
                                <td>{item.email}</td>
                                <td>{item.section

                                }</td>
                            </tr>))}
                        </tbody>
                    </table>
                </Col>
            </Row>

        </div>
    )
}

export default Form_page
