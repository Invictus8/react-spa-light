import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-bootstrap'

import { changeSettings } from '../../reducers/settings';

class Settings extends React.Component {

    handleChange = key => () => {
        const { changeSettings } = this.props

        changeSettings(key)
    }

    render() {
        const { settings } = this.props

        return (
            <div>
                <h2>Settings</h2>
                <Form>
                    {Object.entries(settings).map(([ key, { label, visible } ]) => (
                        <Form.Group key={key}>
                            <div onClick={this.handleChange(key)}>
                                <Form.Check
                                    custom
                                    checked={visible}
                                    readOnly
                                    label={label}
                                />
                            </div>
                        </Form.Group>
                    ))}
                </Form>
            </div>
        )
    }
}

export default connect(
    state => ({
        settings: state.settings,
    }),
    {
        changeSettings,
    }
)(Settings)
