document.addEventListener("DOMContentLoaded", function () {
    const symptomInput = document.getElementById("symptomInput");
    const diagnoseButton = document.getElementById("diagnoseButton");
    const resultContainer = document.getElementById("resultContainer");
  
    if (symptomInput && diagnoseButton && resultContainer) {
      diagnoseButton.addEventListener("click", async function () {
        const symptom = symptomInput.value.trim();
        if (!symptom) {
          resultContainer.innerText = "Please enter a symptom.";
          return;
        }
  
        try {
          const response = await fetch(`${baseUrl}?symptom=${encodeURIComponent(symptom)}&key=${API_KEY}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          });
  
          if (!response.ok) {
            throw new Error("Network response was not ok.");
          }
  
          const data = await response.json();
  
          if (data && data.diagnosis) {
            resultContainer.innerText = `Diagnosis: ${data.diagnosis}`;
          } else {
            resultContainer.innerText = "Sorry, we couldn't fetch the data. Please try again later.";
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          resultContainer.innerText = "Sorry, we couldn't fetch the data. Please try again later.";
        }
      });
    } else {
      console.error("One or more elements not found in the DOM.");
    }
  });
  