import React from "react";
import { NavLink } from "react-router-dom";

const contract = [
    {
        id: 1,
        checkIn: '20-11-2020',
        checkOut: '25-11-2020',
        advanceDepositAmount: '202390',
        totalPaymentAmount: '2379474928'
    },
    {
        id: 2,
        checkIn: '20-11-2020',
        checkOut: '25-11-2020',
        advanceDepositAmount: '202390',
        totalPaymentAmount: '2379474928'
    },
    {
        id: 3,
        checkIn: '20-11-2020',
        checkOut: '25-11-2020',
        advanceDepositAmount: '202390',
        totalPaymentAmount: '2379474928'
    },
    {
        id: 4,
        checkIn: '20-11-2020',
        checkOut: '25-11-2020',
        advanceDepositAmount: '202390',
        totalPaymentAmount: '2379474928'
    },
    {
        id: 5,
        checkIn: '20-11-2020',
        checkOut: '25-11-2020',
        advanceDepositAmount: '202390',
        totalPaymentAmount: '2379474928'
    },
    {
        id: 6,
        checkIn: '20-11-2020',
        checkOut: '25-11-2020',
        advanceDepositAmount: '202390',
        totalPaymentAmount: '2379474928'
    },
    {
        id: 7,
        checkIn: '20-11-2020',
        checkOut: '25-11-2020',
        advanceDepositAmount: '202390',
        totalPaymentAmount: '2379474928'
    },
];

export default function ListContract() {
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
                            {contract.map((contracts)=>(
                                <tr key={contracts.id}>
                                    <td>{contracts.id}</td>
                                    <td>{contracts.checkIn}</td>
                                    <td>{contracts.checkOut}</td>
                                    <td>{contracts.advanceDepositAmount}</td>
                                    <td>{contracts.totalPaymentAmount}</td>
                                </tr>
                            ))}
                            {/* <tr>
                                <td>AAC</td>
                                <td>AUSTRALIAN COMPANY </td>
                                <td>$1.38</td>
                                <td>+2.01</td>
                                <td>-0.36%</td>
                            </tr>
                            <tr>
                                <td>AAD</td>
                                <td>AUSENCO</td>
                                <td>$2.38</td>
                                <td>-0.01</td>
                                <td>-1.36%</td>
                            </tr>
                            <tr>
                                <td>AAX</td>
                                <td>ADELAIDE</td>
                                <td>$3.22</td>
                                <td>+0.01</td>
                                <td>+1.36%</td>
                            </tr>
                            <tr>
                                <td>XXD</td>
                                <td>ADITYA BIRLA</td>
                                <td>$1.02</td>
                                <td>-1.01</td>
                                <td>+2.36%</td>
                            </tr>
                            <tr>
                                <td>AAC</td>
                                <td>AUSTRALIAN COMPANY </td>
                                <td>$1.38</td>
                                <td>+2.01</td>
                                <td>-0.36%</td>
                            </tr>
                            <tr>
                                <td>AAD</td>
                                <td>AUSENCO</td>
                                <td>$2.38</td>
                                <td>-0.01</td>
                                <td>-1.36%</td>
                            </tr>
                            <tr>
                                <td>AAX</td>
                                <td>ADELAIDE</td>
                                <td>$3.22</td>
                                <td>+0.01</td>
                                <td>+1.36%</td>
                            </tr>
                            <tr>
                                <td>XXD</td>
                                <td>ADITYA BIRLA</td>
                                <td>$1.02</td>
                                <td>-1.01</td>
                                <td>+2.36%</td>
                            </tr>
                            <tr>
                                <td>AAC</td>
                                <td>AUSTRALIAN COMPANY </td>
                                <td>$1.38</td>
                                <td>+2.01</td>
                                <td>-0.36%</td>
                            </tr>
                            <tr>
                                <td>AAD</td>
                                <td>AUSENCO</td>
                                <td>$2.38</td>
                                <td>-0.01</td>
                                <td>-1.36%</td>
                            </tr>
                            <tr>
                                <td>AAX</td>
                                <td>ADELAIDE</td>
                                <td>$3.22</td>
                                <td>+0.01</td>
                                <td>+1.36%</td>
                            </tr>
                            <tr>
                                <td>XXD</td>
                                <td>ADITYA BIRLA</td>
                                <td>$1.02</td>
                                <td>-1.01</td>
                                <td>+2.36%</td>
                            </tr>
                            <tr>
                                <td>AAC</td>
                                <td>AUSTRALIAN COMPANY </td>
                                <td>$1.38</td>
                                <td>+2.01</td>
                                <td>-0.36%</td>
                            </tr>
                            <tr>
                                <td>AAD</td>
                                <td>AUSENCO</td>
                                <td>$2.38</td>
                                <td>-0.01</td>
                                <td>-1.36%</td>
                            </tr>
                            <tr>
                                <td>AAX</td>
                                <td>ADELAIDE</td>
                                <td>$3.22</td>
                                <td>+0.01</td>
                                <td>+1.36%</td>
                            </tr>
                            <tr>
                                <td>XXD</td>
                                <td>ADITYA BIRLA</td>
                                <td>$1.02</td>
                                <td>-1.01</td>
                                <td>+2.36%</td>
                            </tr>
                            <tr>
                                <td>AAC</td>
                                <td>AUSTRALIAN COMPANY </td>
                                <td>$1.38</td>
                                <td>+2.01</td>
                                <td>-0.36%</td>
                            </tr>
                            <tr>
                                <td>AAD</td>
                                <td>AUSENCO</td>
                                <td>$2.38</td>
                                <td>-0.01</td>
                                <td>-1.36%</td>
                            </tr>
                            <tr>
                                <td>AAX</td>
                                <td>ADELAIDE</td>
                                <td>$3.22</td>
                                <td>+0.01</td>
                                <td>+1.36%</td>
                            </tr>
                            <tr>
                                <td>XXD</td>
                                <td>ADITYA BIRLA</td>
                                <td>$1.02</td>
                                <td>-1.01</td>
                                <td>+2.36%</td>
                            </tr>
                            <tr>
                                <td>AAC</td>
                                <td>AUSTRALIAN COMPANY </td>
                                <td>$1.38</td>
                                <td>+2.01</td>
                                <td>-0.36%</td>
                            </tr>
                            <tr>
                                <td>AAD</td>
                                <td>AUSENCO</td>
                                <td>$2.38</td>
                                <td>-0.01</td>
                                <td>-1.36%</td>
                            </tr>
                            <tr>
                                <td>AAX</td>
                                <td>ADELAIDE</td>
                                <td>$3.22</td>
                                <td>+0.01</td>
                                <td>+1.36%</td>
                            </tr>
                            <tr>
                                <td>XXD</td>
                                <td>ADITYA BIRLA</td>
                                <td>$1.02</td>
                                <td>-1.01</td>
                                <td>+2.36%</td>
                            </tr>
                            <tr>
                                <td>AAC</td>
                                <td>AUSTRALIAN COMPANY </td>
                                <td>$1.38</td>
                                <td>+2.01</td>
                                <td>-0.36%</td>
                            </tr>
                            <tr>
                                <td>AAD</td>
                                <td>AUSENCO</td>
                                <td>$2.38</td>
                                <td>-0.01</td>
                                <td>-1.36%</td>
                            </tr>
                            <tr>
                                <td>AAX</td>
                                <td>ADELAIDE</td>
                                <td>$3.22</td>
                                <td>+0.01</td>
                                <td>+1.36%</td>
                            </tr>
                            <tr>
                                <td>XXD</td>
                                <td>ADITYA BIRLA</td>
                                <td>$1.02</td>
                                <td>-1.01</td>
                                <td>+2.36%</td>
                            </tr>
                            <tr>
                                <td>AAC</td>
                                <td>AUSTRALIAN COMPANY </td>
                                <td>$1.38</td>
                                <td>+2.01</td>
                                <td>-0.36%</td>
                            </tr>
                            <tr>
                                <td>AAD</td>
                                <td>AUSENCO</td>
                                <td>$2.38</td>
                                <td>-0.01</td>
                                <td>-1.36%</td>
                            </tr>
                            <tr>
                                <td>AAX</td>
                                <td>ADELAIDE</td>
                                <td>$3.22</td>
                                <td>+0.01</td>
                                <td>+1.36%</td>
                            </tr>
                            <tr>
                                <td>XXD</td>
                                <td>ADITYA BIRLA</td>
                                <td>$1.02</td>
                                <td>-1.01</td>
                                <td>+2.36%</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </section>
        </body>
    );
}