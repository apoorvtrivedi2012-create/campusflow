import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import CursorGlow from './components/CursorGlow'

import Dashboard from './pages/Dashboard'
import Opportunities from './pages/Opportunities'

function App() {
  return (
    <BrowserRouter>

      <div className="cf-app-background min-h-screen flex">
      
        <CursorGlow />
        <Sidebar />

        <div className="flex-1 min-w-0">

          <Topbar />

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/opportunities"
              element={<Opportunities />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  )
}

export default App