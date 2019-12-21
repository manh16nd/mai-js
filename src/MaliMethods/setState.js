const setState = (component, value) => {
    console.log(window.APP)
    console.log(window.EXECUTE())
    return {
        ...component,
        value
    }
}

export default setState
