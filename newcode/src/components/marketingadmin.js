import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { useTable } from 'react-table'
import FilterDropdown from './filtermarketingtable'
import AlertStatusDropdown from './statusDropdown'
import './styles.css'

const Marketingadmin = ({ tableDataFromParent }) => {
    const [loading, setLoading] = useState(false)
    // const [data, setData] = useState(
    // let data = [
    //     {
    //         id: 'horn-od926',
    //         fullname: 'selection-gsykp',
    //         emailid: 22,
    //         contactno: 204567,
    //         cstatus: 'enquiry',
    //     },
    //     {
    //         id: 'heart-nff6w',
    //         fullname: 'information-nyp92',
    //         emailid: 16,
    //         contactno: 765498,
    //         progress: 40,
    //         cstatus: 'complicated',
    //     },
    // ]

    const columns = [
        {
            Header: 'Id',
            accessor: 'id',
        },
        {
            Header: 'Name',
            accessor: 'fullname',
        },
        {
            Header: 'Email',
            accessor: 'emailid',
        },
        {
            Header: 'Phone',
            accessor: 'contactno',
        },
        {
            Header: 'DateTime',
            accessor: 'datetime',
        },
        {
            Header: 'Status',
            accessor: 'cstatus',
            Cell: () => {
                return <AlertStatusDropdown />
            },
        },
    ]

    // useEffect(() => {
    //     setLoading(true);
    //     console.log("called ue....")

    // data = newData;

    // },)
    // useEffect( async ()=>{
    //     await axios.get('http://intelora.co.in/api/rest/musicnftapi/customerenq_services.php?startCnt=0')
    //     .then(res=>{
    //       console.log(res.data);
    //       setData(res.data);
    //     })
    // },[data])

    useEffect(() => {
        console.log('data11')
        setLoading(false)
    }, [loading])

    fetch(
        'http://intelora.co.in/api/rest/musicnftapi/customerenq_services.php?startCnt=0',
    )
        .then((response) => response.json())
        .then((newdata) => {
            console.log('>>>>', newdata)
            // data = newdata
        })
        .catch((error) => {
            console.log(error)
        })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            tableDataFromParent,
        })

    return (
        <>
            <div style={{ display: 'flex' }}>
                {' '}
                Filter : <FilterDropdown />{' '}
            </div>
            {console.log('rows data')}
            <table className='table' {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {console.log('rows data0 ', rows)}
                    {rows &&
                        rows.map((row, i) => {
                            console.log('Rowwwwwwwwww', row)
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </>
    )
}

export default Marketingadmin
