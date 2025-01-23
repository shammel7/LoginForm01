// script.js

const form = document.getElementById('file-upload-form');
const fileInput = document.getElementById('file-upload');
const fileList = document.getElementById('file-list');

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const files = fileInput.files;

  if (files.length === 0) {
    alert('Please select at least one file.');
    return;
  }

  fileList.innerHTML = ''; // Clear previous file list

  Array.from(files).forEach((file) => {
    const fileDiv = document.createElement('div');
    fileDiv.textContent = `File: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
    fileList.appendChild(fileDiv);

    // Simulate file upload (replace this with your backend logic)
    setTimeout(() => {
      fileDiv.style.backgroundColor = '#d4edda'; // Success (green background)
      fileDiv.textContent += ' - Uploaded successfully!';
    }, 1000);
  });
});
