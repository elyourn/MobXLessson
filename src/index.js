import React from 'react'
import ReactDOM from 'react-dom'
import {configure} from 'mobx'
import {Provider} from 'mobx-react'
import App from './components/App/'
import stores from './stores'

configure({
    enforceActions: 'always'
})

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>,
    document.getElementById('root')
)

