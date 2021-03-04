import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RepoProvider } from './providers/repos';
import { AuthProvider } from './providers/auth';
import { FolowProvider } from './providers/followers';

ReactDOM.render(
  <React.StrictMode>
    <RepoProvider>
      <FolowProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </FolowProvider>
    </RepoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

