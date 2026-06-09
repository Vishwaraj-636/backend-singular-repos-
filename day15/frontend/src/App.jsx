import { useState } from 'react'
import FaceExpression from './features/expression/components/FaceExpression'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <FaceExpression/>
    </div>
  )
}

export default App
