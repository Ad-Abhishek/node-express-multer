import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('File uploaded successfully');
    } catch (error) {
      toast.error('Error uploading file', error);
    }
  };

  return (
    <div>
      <h1>File upload using multer</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>File: </Form.Label>
          <Form.Control type="file" placeholder="Select a file" onChange={handleFileChange} />
        </Form.Group>
        
        <Button variant="primary" onClick={handleUpload}>
          Upload
        </Button>
      </Form>




      {/* <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button> */}
    </div>
  );
};

export default FileUpload;