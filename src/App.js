import React from 'react';
import Login from './components/Login';
import Feeds from './components/Feeds';
import {Divider} from 'semantic-ui-react'

import {testUser} from './mockData/loginData'
import {feedData} from './mockData/feedData'

const App = () => (
  <div>
    <Divider horizontal>Login</Divider>
    <Login
      surname={testUser.surname}
      name={testUser.name}
      role={testUser.role}
      regNumber={testUser.regNumber}
      mobile={testUser.mobile}
      mail={testUser.mail}
      driverLicense={testUser.driverLicense}
      deadLines={testUser.deadLines}/>
    <Divider horizontal>Feed</Divider>
    <Feeds feeds={feedData}/>
  </div>
)

export default App;
