// listeners.js

// Add user form submission event
document.getElementById('addUserForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const projects = document.getElementById('projects').value.split(',');
  
    // Call the Firestore addUser function
    addUser(name, email, projects);
  });
  
  // Get all users
  document.getElementById('getUsersButton').addEventListener('click', function () {
    getUsers();
  });
  
  // Update a user's email
  document.getElementById('updateUserForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const docId = document.getElementById('docId').value;
    const newEmail = document.getElementById('newEmail').value;
  
    updateUser(docId, newEmail);
  });
  
  // Delete a user
  document.getElementById('deleteUserForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const docId = document.getElementById('deleteDocId').value;
  
    deleteUser(docId);
  });
  
  // Firestore functions
  function addUser(name, email, projects) {
    db.collection("users").add({
      name: name,
      email: email,
      projects: projects
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }
  
  function getUsers() {
    db.collection("users").get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }
  
  function updateUser(docId, newEmail) {
    db.collection("users").doc(docId).update({
      email: newEmail
    })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
  }
  
  function deleteUser(docId) {
    db.collection("users").doc(docId).delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error deleting document: ", error);
      });
  }
  