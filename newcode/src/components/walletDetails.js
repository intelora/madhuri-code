import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import Web3 from 'web3'
import Footer from '../components/footer'
import Header from '../components/header'

const WalletDetails = () => {
    const [wallet, setWallet] = useState({
        isCreated: false,
        Address: '',
        PrivateKey: '',
        Balance: '',
    })
    const [showKey, setshowKey] = useState(false)
    const [email, setEmail] = useState('')
    const [EmailError, setEmailError] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('walletDetails')) {
            const newWallet = JSON.parse(localStorage.getItem('walletDetails'))
            if (newWallet.isCreated) {
                setWallet(newWallet)
            }
        }
    }, [])
    const createNewWallet = async () => {
        if (!email) {
            setEmailError(true)
            return
        }
        const web3 = new Web3()
        const acc = await web3.eth.accounts.create()
        let newAcc = {
            isCreated: true,
            Address: acc.address,
            PrivateKey: acc.privateKey,
            Balance: 0.0,
        }
        setWallet(newAcc)
        await axios.post('http://13.233.183.117:5000/api/sendMail', {
            email: email,
            address: newAcc.Address,
            privatekey: newAcc.PrivateKey,
        })
        // localStorage.setItem("walletDetails", JSON.stringify(newAcc));
        alert('Wallet Details sent on your email address, Please check!')
    }
    return (
        <>
            <Header />
            <div className='row' style={{ marginTop: '150px' }}>
                <div className='col-md-4'></div>
                <div className='col-md-4' style={{ color: '#fff' }}>
                    {!wallet.isCreated ? (
                        <div>
                            <h4>
                                If you don't have wallet, Create new Ethereum
                                wallet and purchase ETH.{' '}
                            </h4>
                            <h3>Click To Create Wallet</h3>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='form-control'
                                placeholder='Enter Email'
                            />
                            {EmailError ? (
                                <small style={{ color: 'red' }}>
                                    Please enter email
                                </small>
                            ) : (
                                ''
                            )}
                            <br />{' '}
                            <button
                                onClick={() => createNewWallet()}
                                className='custom-nav-btn btn-sm'
                            >
                                Create Now
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <h3>Wallet Details</h3>
                                </div>
                            </div>

                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label>
                                        Your Wallet Address : {wallet.Address}
                                    </label>
                                </div>
                            </div>

                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label>
                                        Balance :{' '}
                                        {parseFloat(wallet.Balance).toFixed(6)}{' '}
                                        ETH
                                    </label>
                                </div>
                            </div>

                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <label>
                                        Private Key :{' '}
                                        {showKey
                                            ? wallet.PrivateKey
                                            : '************************'}{' '}
                                        <i
                                            className='fa fa-eye'
                                            onClick={() => {
                                                setshowKey(!showKey)
                                            }}
                                            style={{ cursor: 'pointer' }}
                                        ></i>
                                    </label>
                                </div>
                            </div>

                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <button
                                        className='custom-nav-btn btn-sm'
                                        onClick={() => {
                                            alert(
                                                'Purchasing under process......',
                                            )
                                        }}
                                    >
                                        Purchase Crypto
                                    </button>
                                    <p>
                                        <small>
                                            Note : Purchase ETH using a Credit
                                            or Debit Card
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* <div style={{ display: "flex" }} > Filter :  <FilterDropdown /> </div>
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
            </table> */}

            <Footer />
        </>
    )
}

export default WalletDetails
