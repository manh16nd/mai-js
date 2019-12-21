const mountApp = (app, doc) => {
    if (!window.APP) window.APP = app()
    if (!window.EXECUTE) window.EXECUTE = app
    console.log(window.APP)
}

export default mountApp
