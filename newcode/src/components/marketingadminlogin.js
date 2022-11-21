import { useState } from 'react'
import Marketingadmin from '../components/marketingadmin'
import './styles.css'

const Marketingadminlogin = () => {
    const [errorMessages, setErrorMessages] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    // User Login info
    const database = [
        {
            username: 'user1',
            password: 'pass1',
        },
        {
            username: 'user2',
            password: 'pass2',
        },
    ]

    const errors = {
        uname: 'invalid username',
        pass: 'invalid password',
    }
    let newData = [
        {
            id: '11111',
            fullname: 'aaaaa',
            emailid: 22,
            contactno: 204567,
            cstatus: 'enquiry',
        },
        {
            id: '2222',
            fullname: 'bbbbbb',
            emailid: 16,
            contactno: 765498,
            progress: 40,
            cstatus: 'complicated',
        },
    ]

    const handleSubmit = (event) => {
        event.preventDefault()
        var { uname, pass } = document.forms[0]
        const userData = database.find((user) => user.username === uname.value)
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: 'pass', message: errors.pass })
            } else {
                setIsSubmitted(true)
            }
        } else {
            setErrorMessages({ name: 'uname', message: errors.uname })
        }
    }

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className='error'>{errorMessages.message}</div>
        )

    const renderForm = (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <label>Username </label>
                    <input type='text' name='uname' required />
                    {renderErrorMessage('uname')}
                </div>
                <div className='input-container'>
                    <label>Password </label>
                    <input type='password' name='pass' required />
                    {renderErrorMessage('pass')}
                </div>
                <div className='button-container'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )

    return (
        <div className='app'>
            <div className='login-form'>
                {isSubmitted ? (
                    <div>
                        <Marketingadmin tableData={newData} />
                    </div>
                ) : (
                    renderForm
                )}
            </div>
        </div>
    )
}

export default Marketingadminlogin
