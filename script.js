/* ==========================================
   EVENTORA - EVENT BOOKING PLATFORM
========================================== */


/* ==========================================
   MOBILE NAVIGATION
========================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }
    });


    // Close menu after clicking a link
    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");
            menuBtn.textContent = "☰";

        });

    });
}


/* ==========================================
   DARK MODE
========================================== */

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkModeBtn.textContent = "☀️";
            localStorage.setItem("eventoraDarkMode", "enabled");
        } else {
            darkModeBtn.textContent = "🌙";
            localStorage.setItem("eventoraDarkMode", "disabled");
        }

    });


    // Remember user's preference
    const savedMode = localStorage.getItem("eventoraDarkMode");

    if (savedMode === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeBtn.textContent = "☀️";
    }
}


/* ==========================================
   EVENT SEARCH & FILTER
========================================== */

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const typeFilter = document.getElementById("typeFilter");
const searchBtn = document.getElementById("searchBtn");

const eventCards = document.querySelectorAll(".event-card");
const eventCount = document.getElementById("eventCount");
const noEvents = document.getElementById("noEvents");


function filterEvents() {

    const searchValue = searchInput.value
        .toLowerCase()
        .trim();

    const selectedCategory = categoryFilter.value;
    const selectedType = typeFilter.value;

    let visibleEvents = 0;


    eventCards.forEach(card => {

        const eventName =
            card.dataset.name.toLowerCase();

        const eventCategory =
            card.dataset.category.toLowerCase();

        const eventType =
            card.dataset.type.toLowerCase();


        const matchesSearch =
            eventName.includes(searchValue);

        const matchesCategory =
            selectedCategory === "all" ||
            eventCategory === selectedCategory;

        const matchesType =
            selectedType === "all" ||
            eventType === selectedType;


        if (
            matchesSearch &&
            matchesCategory &&
            matchesType
        ) {

            card.style.display = "block";
            visibleEvents++;

        } else {

            card.style.display = "none";

        }

    });


    eventCount.textContent =
        visibleEvents +
        (visibleEvents === 1 ? " Event" : " Events");


    if (visibleEvents === 0) {
        noEvents.style.display = "block";
    } else {
        noEvents.style.display = "none";
    }
}


/* Search button */

if (searchBtn) {
    searchBtn.addEventListener("click", filterEvents);
}


/* Search while typing */

if (searchInput) {

    searchInput.addEventListener("input", filterEvents);

}


/* Filter change */

if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        filterEvents
    );

}


if (typeFilter) {

    typeFilter.addEventListener(
        "change",
        filterEvents
    );

}


/* ==========================================
   CATEGORY BUTTONS
========================================== */

const categoryButtons =
    document.querySelectorAll(".category-card");


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.category;

        categoryFilter.value = category;

        filterEvents();

        document.getElementById("events")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* ==========================================
   EVENT DETAILS
========================================== */

const detailsModal =
    document.getElementById("detailsModal");

const closeDetails =
    document.getElementById("closeDetails");

const eventDetailsContent =
    document.getElementById("eventDetailsContent");


const eventDetails = {

    "Summer Music Festival": {

        image:
            "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85",

        category: "Music",

        description:
            "Enjoy an unforgettable evening filled with live music, DJs, entertainment and amazing performances.",

        date: "15 November 2026",

        time: "6:00 PM - 11:00 PM",

        venue: "Riverside Ground, Dehradun",

        price: "₹999 per ticket",

        organizer: "Eventora Entertainment"

    },


    "Future Tech Summit": {

        image:
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85",

        category: "Technology",

        description:
            "A technology conference covering artificial intelligence, web development, cybersecurity and future innovation.",

        date: "22 November 2026",

        time: "10:00 AM - 5:00 PM",

        venue: "India Expo Centre, New Delhi",

        price: "₹799 per ticket",

        organizer: "TechFuture India"

    },


    "Business Networking Meet": {

        image:
            "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",

        category: "Business",

        description:
            "Meet entrepreneurs, professionals and business leaders while building valuable connections.",

        date: "5 December 2026",

        time: "11:00 AM - 4:00 PM",

        venue: "Business Hub, Mumbai",

        price: "₹599 per ticket",

        organizer: "Business Connect India"

    },


    "Creative Design Workshop": {

        image:
            "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",

        category: "Workshop",

        description:
            "Learn practical UI/UX design, graphic design principles and modern creative techniques.",

        date: "12 December 2026",

        time: "2:00 PM - 6:00 PM",

        venue: "Online Event",

        price: "₹399 per ticket",

        organizer: "Creative Academy"

    },


    "Winter Food Festival": {

        image:
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85",

        category: "Festival",

        description:
            "Taste delicious dishes, street food and special cuisines from different regions.",

        date: "20 December 2026",

        time: "12:00 PM - 10:00 PM",

        venue: "City Ground, Chandigarh",

        price: "₹299 per ticket",

        organizer: "Foodie Events India"

    },


    "Digital Marketing Masterclass": {

        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",

        category: "Business",

        description:
            "Master SEO, social media marketing, content strategy and digital advertising.",

        date: "10 January 2027",

        time: "10:00 AM - 2:00 PM",

        venue: "Online Event",

        price: "₹499 per ticket",

        organizer: "Digital Growth Academy"

    }

};


function openDetails(eventName) {

    const event = eventDetails[eventName];

    if (!event) {
        return;
    }


    eventDetailsContent.innerHTML = `

        <img
            src="${event.image}"
            alt="${eventName}"
            class="details-image"
        >

        <div class="details-body">

            <p class="section-label">
                ${event.category}
            </p>

            <h2>${eventName}</h2>

            <p>
                ${event.description}
            </p>

            <div class="details-info">

                <div class="detail-item">
                    📅 <strong>Date</strong><br>
                    ${event.date}
                </div>

                <div class="detail-item">
                    ⏰ <strong>Time</strong><br>
                    ${event.time}
                </div>

                <div class="detail-item">
                    📍 <strong>Venue</strong><br>
                    ${event.venue}
                </div>

                <div class="detail-item">
                    💰 <strong>Ticket</strong><br>
                    ${event.price}
                </div>

            </div>

            <h3>Organizer</h3>

            <p>
                ${event.organizer}
            </p>

            <h3>Event Schedule</h3>

            <p>
                Registration → Welcome Session → Main Event →
                Networking → Closing Ceremony
            </p>

        </div>

    `;


    detailsModal.classList.add("active");

    document.body.classList.add("no-scroll");
}


/* Details buttons */

const detailsButtons =
    document.querySelectorAll(".details-btn");


detailsButtons.forEach(button => {

    button.addEventListener("click", () => {

        const eventName =
            button.dataset.event;

        openDetails(eventName);

    });

});


/* Close details */

if (closeDetails) {

    closeDetails.addEventListener("click", closeDetailsModal);

}


/* ==========================================
   BOOKING MODAL
========================================== */

const bookingModal =
    document.getElementById("bookingModal");

const closeBooking =
    document.getElementById("closeBooking");

const eventNameSelect =
    document.getElementById("eventName");


function openBooking(eventName = "") {

    bookingModal.classList.add("active");

    document.body.classList.add("no-scroll");


    if (eventName) {

        eventNameSelect.value = eventName;

    }

}


function closeBookingModal() {

    bookingModal.classList.remove("active");

    document.body.classList.remove("no-scroll");

}


/* Book Now buttons */

const bookButtons =
    document.querySelectorAll(".book-btn");


bookButtons.forEach(button => {

    button.addEventListener("click", () => {

        const eventName =
            button.dataset.event;

        openBooking(eventName);

    });

});


/* Close booking */

if (closeBooking) {

    closeBooking.addEventListener(
        "click",
        closeBookingModal
    );

}


/* ==========================================
   BOOKING FORM VALIDATION
========================================== */

const bookingForm =
    document.getElementById("bookingForm");

const successModal =
    document.getElementById("successModal");

const successMessage =
    document.getElementById("successMessage");

const closeSuccess =
    document.getElementById("closeSuccess");


if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name")
                    .value.trim();

            const phone =
                document.getElementById("phone")
                    .value.trim();

            const email =
                document.getElementById("email")
                    .value.trim();

            const selectedEvent =
                eventNameSelect.value;

            const tickets =
                document.getElementById("tickets")
                    .value;

            const payment =
                document.getElementById("payment")
                    .value;


            /* Name validation */

            if (name.length < 3) {

                alert(
                    "Please enter a valid name."
                );

                return;

            }


            /* Phone validation */

            if (!/^[0-9]{10}$/.test(phone)) {

                alert(
                    "Please enter a valid 10-digit phone number."
                );

                return;

            }


            /* Email validation */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                alert(
                    "Please enter a valid email address."
                );

                return;

            }


            if (
                selectedEvent === "" ||
                tickets === "" ||
                payment === ""
            ) {

                alert(
                    "Please complete all required fields."
                );

                return;

            }


            /* Show success */

            successMessage.textContent =
                `Thank you ${name}! Your booking for ${selectedEvent} (${tickets} ticket${tickets > 1 ? "s" : ""}) has been confirmed.`;


            closeBookingModal();

            successModal.classList.add("active");

            bookingForm.reset();

        }
    );

}


/* Close success */

if (closeSuccess) {

    closeSuccess.addEventListener(
        "click",
        () => {

            successModal.classList.remove("active");

        }
    );

}


/* ==========================================
   MODAL OUTSIDE CLICK
========================================== */

window.addEventListener("click", event => {

    if (event.target === bookingModal) {

        closeBookingModal();

    }


    if (event.target === detailsModal) {

        closeDetailsModal();

    }


    if (event.target === successModal) {

        successModal.classList.remove("active");

    }

});


/* ==========================================
   ESCAPE KEY
========================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeBookingModal();

        closeDetailsModal();

        successModal.classList.remove("active");

    }

});


/* ==========================================
   CLOSE DETAILS FUNCTION
========================================== */

function closeDetailsModal() {

    detailsModal.classList.remove("active");

    document.body.classList.remove("no-scroll");

}


/* ==========================================
   COUNTDOWN TIMER
========================================== */

/*
   Event date:
   15 November 2026
*/

const eventDate =
    new Date("November 15, 2026 18:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference =
        eventDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60)) /
                (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60)) /
                1000
        );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* ==========================================
   INITIAL EVENT COUNT
========================================== */

filterEvents();