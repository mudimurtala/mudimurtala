const eventsContainer = document.querySelector('.events-container')
const nav = document.querySelector('nav')
const welcomeEvent = document.querySelector('.welcome-event')
const form = document.querySelector('.form')
const saveButton = form.querySelector('.btn')

// Show list of events on the page
const showEvents = (event, id) => {
  const { name, attendee, status, description, booked } = event
  const eventStatus = status === 0 ? 'free' : 'paid'
  
  const output = `
    <div class="card">
      <div class="card--details">
        <div>
          <h1>${name}</h1>
          <span>${attendee - booked} attendees</span>
        </div>
        <span class="card--details-ribbon ribbon-${eventStatus}">
            ${eventStatus}
        </span>
         <p>${description}</p>
        <button onclick="bookEvent(${booked}, '${id}')" class="btn btn-tertiary">Book</button>
      </div>
    </div>
    `
  eventsContainer.innerHTML += output;
}





const showLatestEvent = (latestEvent, id) => {
  const { name, attendee, status, description, booked } = latestEvent;

  welcomeEvent.innerHTML = `
    <h1>${name}</h1>
    <p>${description.length >= 100 ? `${description.substring(0, 100)}...` : description}</p>
    <button onclick="bookEvent(${booked}, '${id}')" class="btn btn-tertiary">Book Now</button>
  `;
};







// Fetch all events from Firestore
const fetchEvents = async () => {
  const eventsSnapshot = await getEventsFromDB();
  eventsSnapshot.forEach(doc => {
    const event = doc.data();
    showEvents(event, doc.id);
  });

  // Display the first event in the welcome section
  if (!eventsSnapshot.empty) {
    const firstEvent = eventsSnapshot.docs[0].data();
    showLatestEvent(firstEvent, eventsSnapshot.docs[0].id);
  }
}

// Add event to Firestore
const addEvent = async () => {
  const name = document.getElementById('name').value;
  const attendee = document.getElementById('attendee').value;
  const description = document.getElementById('description').value;
  const status = document.getElementById('status').value;
  
  if (!name || !attendee || !description) {
    alert("Please fill out all the fields.");
    return;
  }
  
  const newEvent = {
    name,
    attendee: Number(attendee),
    description,
    status: Number(status),
    booked: 0 // default booked value
  };

  await addEventToDB(newEvent);
  alert("Event added successfully!");
  
  // Refresh the page to show the new event
  location.reload();
}

// Book event
const bookEvent = async (booked, id) => {
  await updateBookedEvent(id, booked + 1);
  alert("You have successfully booked this event!");
  location.reload();
}

// Save button action
saveButton.addEventListener('click', addEvent);

// Fetch and display all events when the page loads
document.addEventListener('DOMContentLoaded', fetchEvents);
