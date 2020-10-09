/* eslint-disable no-use-before-define */
import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Theme from './components/Ui/Theme'
import Box from '@material-ui/core/Box'
import Navbar from './components/Ui/Navbar'
import { ThemeProvider } from '@material-ui/core'
import { UserContext, IUserContext } from './context/UserContext'
import { User, Usercart } from './type/type'
import { GET_ME, client } from './api/graphql'
import Chat from './components/Chat'
import EchoInstance from './components/Echo'
import EchoContext from './context/EchoContext'
import { ApolloProvider, useQuery } from '@apollo/client'
import Notification from './utils/Notification'
import Routes from './Routes'

const App = () => {
  const [session, setSession] = useState<IUserContext>({ isLogged: false })
  const [carts, setCarts] = useState<Array<Usercart | null>>([])
  const { loading, data, refetch } = useQuery(GET_ME, {
    client: client
  })
  useEffect(() => {
    if (!loading && data !== undefined) {
      wrapper(data)
      console.log(data)
    }
  }, [loading, data])
  const wrapper = (data: any) => {
    if (data.me != null && localStorage.getItem('token')) {
      setSession({ isLogged: true, session: data.me as User })
      setCarts(data.me.usercart as Usercart[])
    }
  }
  const destroySession = useCallback(() => {
    setSession({ isLogged: false })
    localStorage.removeItem('token')
    return true
  }, [])

  const refetchCarts = useCallback(() => {
    refetch()
    return true
  }, [refetch])
  const sessionData = useMemo(
    () => ({
      session,
      carts,
      setCarts,
      setSession,
      destroySession,
      refetchCarts
    }),
    [session, carts, setSession, setCarts, destroySession, refetchCarts]
  )

  const EchoClient = EchoInstance
  const echoClient = useMemo(() => ({ EchoClient }), [EchoClient])
  useEffect(() => {
    EchoInstance.channel('GlobalNotifications').listen(
      'GlobalNotifications',
      (data: any) => {
        console.log(data)
      }
    )
  }, [])
  return (
    <>
      <Router>
        <Switch>
          <UserContext.Provider value={sessionData}>
            <ApolloProvider client={client}>
              <EchoContext.Provider value={echoClient}>
                <ThemeProvider theme={Theme}>
                  <Navbar />
                  <Notification />
                  {session.isLogged ? <Chat /> : null}
                  <Box mt={10}>
                    <Routes />
                  </Box>
                </ThemeProvider>
              </EchoContext.Provider>
            </ApolloProvider>
          </UserContext.Provider>
        </Switch>
      </Router>
    </>
  )
}
export default App
