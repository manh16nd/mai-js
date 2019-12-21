import {createElement, setState} from '../index'

const Button = state => {
    if (!state) state = {value: 1}

    console.log(state)

    setInterval(() => increase(), 1000)

    const increase = () => {
        setState(Button, {value: state.value + 1})
    }

    return createElement({
        type: 'button',
        attr: [],
        children: [],
        value: state,
    })
}

export default Button
