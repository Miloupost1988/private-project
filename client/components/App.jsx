import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin();

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={{textAlign: 'center'}}>
          <h1>Hello World</h1>
          <RaisedButton
            label={'Login'}
            secondary={true}
            onTouchTap={()=>{console.log('hello i work')}}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}
