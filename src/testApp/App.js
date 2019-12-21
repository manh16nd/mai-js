import {createElement} from '../index'
import Button from './Button'

const App = () => {
    const state = {
        name: 'Manh Nguyen',
    }

    return createElement({
        type: 'h1',
        children: [Button],
        attr: [],
        value: state,
    })
}

export default App
