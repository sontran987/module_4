import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getContract } from "../service/contractService";


export default function ListContract() {
    const [contracts, setContract] = useState([]);
    const getList = async () => {
        const data = await getContract();
        setContract(data);
    }
    useEffect(() => {
        getList();
    }, [])

    return (
        <body>
            <NavLink to={'/contract/create'} className="btn btn-primary py-md-3 px-md-5 animated slideInRigh" style={{ zIndex: '0944', float: "left", borderRadius: '10px' }}>Book A Room</NavLink>
            <section>
                {/*for demo wrap*/}
                <h1>Contract Table</h1>

                <div style={{ marginTop: '30px' }} className="tbl-header">
                    <table cellPadding={0} cellSpacing={0} border={0}>
                        <thead>
                            <tr>
                                <th>Id Contract</th>
                                <th>Check In</th>
                                <th>Check Out</th>
                                <th>Advance Deposit Amount</th>
                                <th>Total Payment Amount</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="tbl-content">
                    <table cellPadding={0} cellSpacing={0} border={0}>
                        <tbody>
                            {contracts.map((contract) => (
                                <tr key={contract.id}>
                                    <td>{contract.id}</td>
                                    <td>{contract.checkIn}</td>
                                    <td>{contract.checkOut}</td>
                                    <td>{contract.advanceDepositAmount}</td>
                                    <td>{contract.totalPaymentAmount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                </div>
            </section>
        </body>
    );
}