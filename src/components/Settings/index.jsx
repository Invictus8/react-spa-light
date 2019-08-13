import React from 'react'
import { connect } from 'react-redux'

import { changeSettings } from '../../reducers/settings';

class Settings extends React.Component {

    handleChange = key => event => {
        const { changeSettings } = this.props
        const { checked } = event.target
        console.log(event.target.checked)
        changeSettings({ key, checked })
    }

    render() {
        const { settings } = this.props

        return (
            <div>
                <h1>Settings</h1>
                {Object.entries(settings).map(([ key, { label, visible } ]) => (
                    <div key={key}>
                        <input type='checkbox' checked={visible} onChange={this.handleChange(key)} />
                        <label>{label}</label>
                    </div>
                ))}
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
