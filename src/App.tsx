import { RatingProvider } from './context/comic-provider'
import './index.scss'
import { Comic } from './page/comic/comic'
function App() {
  return (
    <RatingProvider>
      <Comic />
    </RatingProvider>
  )
}

export default App
