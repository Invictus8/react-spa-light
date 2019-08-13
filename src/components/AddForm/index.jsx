import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, Button, ButtonGroup } from 'react-bootstrap'

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
                <h2>Add form</h2>
                <Form onSubmit={this.handleSubmit} >
                    {Object.entries(settings).map(([ key, { label } ]) => (
                        <Form.Group key={key}>
                            <Form.Label>{label}</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder={label}
                                value={employee[key]}
                                onChange={this.handleChange(key)}
                                required
                            />
                        </Form.Group>
                    ))}
                    <ButtonGroup>
                        <Button variant='primary' type='submit'>Add and add else</Button>
                        <Button variant='secondary' type='submit' onClick={this.handleClick}>Add and return to Main</Button>
                    </ButtonGroup>
                </Form>
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
