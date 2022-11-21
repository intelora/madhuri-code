import React from "react";
import { useTable } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';
import AlertStatusDropdown from './statusDropdown'
import FilterDropdown from './filtermarketingtable'

const Marketingadmin = () => {
    const columns = [
        {
            Header: 'Id',
            accessor: 'id',
        },
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Phone',
            accessor: 'phone',
        },
        {
            Header: 'Status',
            accessor: 'status',
            Cell: () => {
                return <AlertStatusDropdown />;
              }
        },
    ];

    const data = [
        {
            "id": "horn-od926",
            "name": "selection-gsykp",
            "email": 22,
            "phone": 20,
            "status": "enquiry"
        },
        {
            "id": "heart-nff6w",
            "name": "information-nyp92",
            "email": 16,
            "phone": 98,
            "progress": 40,
            "status": "complicated"
        }
    ]


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    return (
        <>

        <div style={{ display: "flex" }} > Filter :  <FilterDropdown /> </div>
        <table className="table" {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>

        </>
    )
}

export default Marketingadmin;