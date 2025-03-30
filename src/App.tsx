import { Provider } from 'react-redux'
import Home from './pages/Home'
import GlocalCss from './styles'
import store from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <GlocalCss />
        <Home />
      </Provider>
    </>
  )
}

export default App
