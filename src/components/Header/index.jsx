import React from 'react'
import { withRouter } from 'react-router-dom'
import { ButtonToolbar, Button } from 'react-bootstrap'

const Menu = ({ history: { push } }) => <ButtonToolbar>
    <Button variant='outline-secondary' size='lg' onClick={() => push('/')}>
        Main
    </Button>
    <Button variant='outline-secondary' size='lg' onClick={() => push('/add')}>
        Add
    </Button>
    <Button variant='outline-secondary' size='lg' onClick={() => push('/settings')}>
        Settings
    </Button>
</ButtonToolbar>

export default withRouter(Menu)
