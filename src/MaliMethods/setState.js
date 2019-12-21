const setState = (component, value) => {
    console.log(window.APP)
    return {
        ...component,
        value
    }
}

export default setState
