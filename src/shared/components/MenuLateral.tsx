import React from 'react'
import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Box } from '@mui/system'
import { useDrawerContext } from '../contexts'

interface IMenuLateralProps {
  children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext()

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height='100%'
          display='flex'
          flexDirection='column'
        >
          <Box
            width='100%'
            height={theme.spacing(20)}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Avatar
              sx={{
                height: theme.spacing(12),
                width: theme.spacing(12),
              }}
              src='/static/images/avatar/1.jpg'
            />
          </Box>

          <Divider />
          <Box flex={1}>
            <List component='nav'>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{ display: 'inline' }}
                      component='span'
                      variant='h6'
                      color='text.primary'
                    >
                      Página inicial
                    </Typography>
                  }
                />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(29)}>
        {children}
      </Box>
    </>
  )
}
