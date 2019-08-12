import React from 'react'
import { connect } from 'react-redux'

class Main extends React.Component {

    state = {
        selectedEmployee: null,
    }

    handleClick = number => () => {
        const { selectedEmployee } = this.state

        this.setState({
            selectedEmployee: selectedEmployee === number ? null : number
        })
    }

    render() {
        const { employees, settings } = this.props
        const { selectedEmployee } = this.state

        const selected = employees.find(employee => employee.personnelNumber === selectedEmployee)

        const employeeFields = selected && Object.entries(selected)
            .map(([ label, value ]) => (
                <div key={label}>
                    {settings[label].label}: {value}
                </div>
            ))

        return(
            <div>
                <h1>List of Employees</h1>
                <ul>
                    {employees.map(employee =>
                        <li
                            key={employee.personnelNumber}
                            onClick={this.handleClick(employee.personnelNumber)}
                        >
                            {employee.lastName} - {employee.position}
                        </li>
                    )}
                </ul>
                <div>
                    {employeeFields}
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        employees: state.employees,
        settings: state.settings,
    })
)(Main)
