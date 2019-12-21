import {createElement, setState} from '../index'

const Button = state => {
    if (!state) state = {value: 1}

    console.log(state)

    setInterval(() => increase(), 1000)

    const increase = () => {
        setState(Button, render, {value: state.value + 1})
    }

    const render = () => createElement({
        type: 'button',
        attr: [],
        children: [],
        value: state,
    })

    return render()
}

export default Button
