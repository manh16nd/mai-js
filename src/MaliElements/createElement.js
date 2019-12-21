import {Element} from './index'

const createElement = el => {
    const elm = (typeof el === 'function') ? el() : el
    const {type, attr, children, value} = elm

    if (!type) return elm.toString()
    if (!children) return Element({type, attr})
    const _children = children.map(child => {
        return createElement(child)
    })
    return Element({type, attr, children: _children, value})
}

export default createElement
