// firestore.js

// Import Firestore from the Firebase SDK
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

// Initialize Firestore
const db = getFirestore();

// Add a user to the "users" collection
async function addUser(name, email, projects) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      email: email,
      projects: projects
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

// Get all users from the "users" collection
async function getUsers() {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  } catch (error) {
    console.log("Error getting documents: ", error);
  }
}

// Update a user's email by document ID
async function updateUser(docId, newEmail) {
  try {
    const userDoc = doc(db, "users", docId);
    await updateDoc(userDoc, { email: newEmail });
    console.log("Document successfully updated!");
  } catch (error) {
    console.error("Error updating document: ", error);
  }
}

// Delete a user by document ID
async function deleteUser(docId) {
  try {
    const userDoc = doc(db, "users", docId);
    await deleteDoc(userDoc);
    console.log("Document successfully deleted!");
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}
