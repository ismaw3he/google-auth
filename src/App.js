import React from 'react';
import './App.css';

import { GoogleLogin } from 'react-google-login';

function App() {

  function google() {

  }
  return (
    <div className="App">
      <GoogleLogin
        clientId={"236063375563-amqjpkg9ik1fmfccqfhu9sti1h7u9u0o.apps.googleusercontent.com"}
        render={renderProps => (
          <button
            onClick={renderProps.onClick}
            id="google-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" id="google-logo" height="20" viewBox="0 0 20 20">
              <g fill="none">
                <path fill="#FBBB00" d="M4.432 12.086l-.696 2.6-2.544.053C.432 13.329 0 11.715 0 10c0-1.658.403-3.222 1.118-4.599l2.266.415.992 2.252c-.207.606-.32 1.256-.32 1.932 0 .734.132 1.437.376 2.086z" />
                <path fill="#518EF8" d="M19.825 8.132C19.94 8.737 20 9.362 20 10c0 .716-.075 1.414-.219 2.088-.486 2.292-1.758 4.294-3.52 5.71h-.001l-2.853-.146-.404-2.52c1.169-.686 2.083-1.76 2.564-3.044H10.22V8.132h9.605z" />
                <path fill="#28B446" d="M16.26 17.798C14.547 19.176 12.37 20 10 20c-3.808 0-7.12-2.129-8.808-5.261l3.24-2.653c.845 2.254 3.02 3.859 5.568 3.859 1.096 0 2.122-.297 3.003-.814l3.257 2.667z" />
                <path fill="#F14336" d="M16.383 2.302l-3.24 2.652c-.911-.57-1.989-.899-3.143-.899-2.607 0-4.821 1.678-5.624 4.013L1.12 5.401C2.781 2.192 6.134 0 10 0c2.426 0 4.651.864 6.383 2.302z" />
              </g>
            </svg>
                    Sign up with Google
          </button>
        )}
        onSuccess={(response) => {
          console.log(response)
          // googleResponse(response) 
        }}
        onFailure={(response) => {
          console.log(response)
          // googleAuthFail(response)
        }}
        
      />
    </div>
  );
}

export default App;
