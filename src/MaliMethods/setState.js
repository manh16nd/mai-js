const setState = (component, render, value) => {
    console.log(window.APP)
    return {
        ...component,
        ...render(),
        value
    }
}

export default setState
