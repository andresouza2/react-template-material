import { Button } from '@mui/material'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useAppThemeContext } from '../shared/contexts'
// import { Home } from "../pages";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext()
  return (
    <Routes>
      <Route
        path='/inicial'
        element={
          <Button variant='contained' color='primary' onClick={toggleTheme}>
            Teste
          </Button>
        }
      />

      <Route path='/*' element={<Navigate to='/inicial' />} />
    </Routes>
  )
}
