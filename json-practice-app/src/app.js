// Load the config.json file and display the data
fetch('./config.json')
  .then(response => response.json())
  .then(data => {
    // Display the JSON data
    const output = document.getElementById('config-output');
    output.innerHTML = `
      <p><strong>App Name:</strong> ${data.appName}</p>
      <p><strong>Version:</strong> ${data.version}</p>
      <p><strong>Primary Color:</strong> ${data.theme.primaryColor}</p>
      <p><strong>Language:</strong> ${data.userPreferences.language}</p>
    `;
  })
  .catch(error => console.error('Error fetching JSON:', error));

// Function to update config data (you can extend this)
function updateConfig() {
  // For now, just log to the console
  console.log('This will update the config settings...');
}
