import {mountApp} from './index'
import App from './testApp/App'

export default () => {
    mountApp(App, document.getElementById('root'))
}
