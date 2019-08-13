import React from 'react'
import { connect } from 'react-redux'
import { ListGroup, Col, Row } from 'react-bootstrap'

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
            .filter(([ key ]) => settings[key].visible)
            .map(([ key, value ]) => (
                <ListGroup.Item key={key}>
                    {settings[key].label}: {value}
                </ListGroup.Item>
            ))

        return(
            <div>
                <h2>List of Employees</h2>
                    <Row>
                        <Col sm>
                            <ListGroup>
                                {employees.map(employee =>
                                    <ListGroup.Item
                                        action
                                        key={employee.personnelNumber}
                                        onClick={this.handleClick(employee.personnelNumber)}
                                    >
                                        {employee.lastName} - {employee.position}
                                    </ListGroup.Item>
                                )}
                            </ListGroup>
                        </Col>
                        <Col sm>
                            <ListGroup>
                                {employeeFields}
                            </ListGroup>
                        </Col>
                    </Row>
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
