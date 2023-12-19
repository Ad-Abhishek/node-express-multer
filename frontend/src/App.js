import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import FileUpload from './components/FileUpload';

function App() {
  return (
    <div>
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />

      <BrowserRouter>
        <Routes>
          <Route path='/upload' element={<FileUpload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
