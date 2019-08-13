import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { addEmployee } from '../../reducers/employees'

class AddForm extends React.Component {
    initialEmployeeState = {
        lastName: '',
        firstName: '',
        personnelNumber: '',
        age: '',
        position: '',
        unit: '',
    }

    state = {
        employee: this.initialEmployeeState,
        returnToMain: false,
    }

    handleChange = key => event => {
        const { employee } = this.state
        const { value } = event.target

        this.setState({
            employee: {
                ...employee,
                [key]: value,
            },
        })
    }

    handleClick = () => {
        this.setState({
            returnToMain: true,
        })
    }

    handleSubmit = event => {
        const { addEmployee, history } = this.props
        const { employee, returnToMain } = this.state

        event.preventDefault()
        addEmployee({ ...employee })
        this.setState({
            employee: this.initialEmployeeState,
        })
        returnToMain && history.push('/')
    }

    render() {
        const { settings } = this.props
        const { employee } = this.state

        return (
            <div>
                <h1>Add form</h1>
                <form onSubmit={this.handleSubmit} >
                    {Object.entries(settings).map(([ key, { label } ]) => (
                        <div key={key}>
                            <label>{label}</label>
                            <input
                                type='text'
                                placeholder={label}
                                value={employee[key]}
                                onChange={this.handleChange(key)}
                                required
                            />
                        </div>
                    ))}
                    <div>
                        <button type='submit'>Add and add else</button>
                        <button type='submit' onClick={this.handleClick}>Add and return to Main</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default compose(
    connect(
        state => ({
            employees: state.employees,
            settings: state.settings,
        }),
        {
            addEmployee,
        },
    ),
    withRouter,
)(AddForm)
