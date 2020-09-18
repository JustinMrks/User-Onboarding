import React from 'react'


const Form = ( props ) => {

    const { values, update, submit, disabled, errors} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        update(name, valueToUse)
    }

    return (
        <form className='formContainer' data-cy='form'>
            <h2>Add a New User</h2>
            <button disabled={disabled} onSubmit={onSubmit} data-cy='submit'> submit </button>
            <br />
            <div id='errors'>
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.pass}</div>
                <div>{errors.tos}</div>
            </div>
            <label>First Name
                <input
                    name='first_name'
                    type='text'
                    value={values.first_name}
                    onChange={onChange}
                    data-cy='fName'
                />
            </label>
            <br />
            <label>Last Name
                <input
                    name='last_name'
                    type='text'
                    value={values.last_name}
                    onChange={onChange}
                    data-cy='lName'
                />
            </label>
            <br />
            <label>Email
                <input
                    name='email'
                    type='email'
                    value={values.email}
                    onChange={onChange}
                    data-cy='email'
                />
            </label>
            <br />
            <label>Password
                <input
                    name='pass'
                    type='password'
                    value={values.pass}
                    onChange={onChange}
                    data-cy='pass'
                />
            </label>
            <br />
            <label>Terms of Service
                <input
                    name='tos'
                    type='checkbox'
                    value= {values.tos}
                    onChange={onChange}
                    checked={values.tos === true}
                    data-cy='tos'
                />
            </label>

        </form>
    )
}

export default Form