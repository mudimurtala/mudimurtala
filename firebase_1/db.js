// Get reference to Firestore
const db = firebase.firestore();

// Function to add a new event
const addEvent = async (name, attendee, description, status) => {
    try {
        await db.collection('events').add({
            name: name,
            attendee: attendee,
            booked: 0,  // Default booked attendees to 0
            description: description,
            status: status
        });
        alert("Event added successfully!");
        // Optionally, reload the events after adding a new one
        loadEvents();
    } catch (error) {
        console.error("Error adding event: ", error);
    }
};

// Function to fetch and display events from Firestore
const loadEvents = async () => {
    try {
        const eventsSnapshot = await db.collection('events').get();
        eventsContainer.innerHTML = "";  // Clear the container before appending
        eventsSnapshot.forEach((doc) => {
            showEvents(doc.data(), doc.id);
        });
    } catch (error) {
        console.error("Error fetching events: ", error);
    }
};

// Function to fetch and display the latest event in the welcome section
const loadLatestEvent = async () => {
    try {
        const eventsSnapshot = await db.collection('events').orderBy('createdAt', 'desc').limit(1).get();
        eventsSnapshot.forEach((doc) => {
            showLatestEvent(doc.data(), doc.id);
        });
    } catch (error) {
        console.error("Error fetching latest event: ", error);
    }
};

// Function to book an event (incrementing the booked attendees)
const bookEvent = async (booked, id) => {
    try {
        await db.collection('events').doc(id).update({
            booked: booked + 1
        });
        alert("Event booked successfully!");
        // Optionally, reload events to reflect the booking
        loadEvents();
    } catch (error) {
        console.error("Error booking event: ", error);
    }
};

// Initial load of events when the page loads
window.addEventListener('DOMContentLoaded', () => {
    loadEvents();
    loadLatestEvent();
});

// Add event handler for the "Save" button in the form
saveButton.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const attendee = parseInt(document.getElementById('attendee').value);
    const description = document.getElementById('description').value;
    const status = parseInt(document.getElementById('status').value);

    if (name && attendee && description) {
        addEvent(name, attendee, description, status);
    } else {
        alert("Please fill all the fields.");
    }
});
