import React, { Component }   from 'react'
import {  MuiThemeProvider  } from '@material-ui/core/styles'
import theme                  from 'configs/config-theme'
import AppBar                 from 'components/AppBar'
import Home                   from 'containers/Home'
import { appConfig }          from 'configs/config-main'
import Button                 from 'components/Button'

// global styles for entire app
import './styles.scss'

class App extends Component {
  signIn = () => {
    console.log('Click')
    alert('Clicked')
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <AppBar>{appConfig.name}</AppBar>
          <Home />
          <Button
            variant="fab"
            color="primary"
            onClick={this.signIn}
          >
            Sign into Apple Music
          </Button>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
