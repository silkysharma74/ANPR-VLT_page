import { Box } from '@mui/material'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
     <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header/>
      <Box sx={{ display: "flex", marginTop: "64px" }}> {/* Offset for AppBar */}
        <Sidebar/>
        <Dashboard />
      </Box>
    </Box>
    </>
  )
}

export default App
