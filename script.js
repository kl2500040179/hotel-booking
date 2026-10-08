/* =====================================================
   STAYEASY HOTEL BOOKING PLATFORM
===================================================== */


/* =====================================================
   HOTEL DATA
===================================================== */

let hotels =
    JSON.parse(
        localStorage.getItem("hotels")
    ) || [

        {
            id: 1,

            name:
                "Grand Vijayawada Hotel",

            location:
                "Vijayawada",

            price:
                1800,

            rating:
                4.5,

            rooms:
                12,

            amenities:
                [
                    "WiFi",
                    "AC",
                    "Parking"
                ],

            image:
                "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80"
        },


        {
            id: 2,

            name:
                "River View Residency",

            location:
                "Vijayawada",

            price:
                2500,

            rating:
                4.3,

            rooms:
                8,

            amenities:
                [
                    "WiFi",
                    "AC",
                    "Pool"
                ],

            image:
                "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80"
        },


        {
            id: 3,

            name:
                "Hyderabad Grand Palace",

            location:
                "Hyderabad",

            price:
                3200,

            rating:
                4.6,

            rooms:
                15,

            amenities:
                [
                    "WiFi",
                    "AC",
                    "Parking",
                    "Pool"
                ],

            image:
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80"
        },


        {
            id: 4,

            name:
                "Vizag Beach Resort",

            location:
                "Visakhapatnam",

            price:
                2800,

            rating:
                4.7,

            rooms:
                10,

            amenities:
                [
                    "WiFi",
                    "AC",
                    "Pool"
                ],

            image:
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
        },


        {
            id: 5,

            name:
                "Bengaluru Comfort Inn",

            location:
                "Bengaluru",

            price:
                1500,

            rating:
                4.1,

            rooms:
                20,

            amenities:
                [
                    "WiFi",
                    "AC",
                    "Parking"
                ],

            image:
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80"
        },


        {
            id: 6,

            name:
                "City Star Hotel",

            location:
                "Hyderabad",

            price:
                2200,

            rating:
                4.2,

            rooms:
                14,

            amenities:
                [
                    "WiFi",
                    "Parking"
                ],

            image:
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80"
        }

    ];


localStorage.setItem(
    "hotels",
    JSON.stringify(hotels)
);


/* =====================================================
   ADMIN LOGIN DETAILS
===================================================== */

const ADMIN_EMAIL =
    "admin@stayeasy.com";

const ADMIN_PASSWORD =
    "admin123";


/* =====================================================
   LOGIN / SIGNUP TABS
===================================================== */

function showLogin() {

    document
        .getElementById("loginForm")
        .classList
        .remove("hidden");


    document
        .getElementById("signupForm")
        .classList
        .add("hidden");


    document
        .getElementById("loginTab")
        .classList
        .add("active-tab");


    document
        .getElementById("signupTab")
        .classList
        .remove("active-tab");

}


function showSignup() {

    document
        .getElementById("signupForm")
        .classList
        .remove("hidden");


    document
        .getElementById("loginForm")
        .classList
        .add("hidden");


    document
        .getElementById("signupTab")
        .classList
        .add("active-tab");


    document
        .getElementById("loginTab")
        .classList
        .remove("active-tab");

}


/* =====================================================
   SIGNUP
===================================================== */

function signupUser() {

    const name =
        document
            .getElementById("signupName")
            .value
            .trim();


    const email =
        document
            .getElementById("signupEmail")
            .value
            .trim();


    const password =
        document
            .getElementById("signupPassword")
            .value;


    const confirmPassword =
        document
            .getElementById("signupConfirmPassword")
            .value;


    const message =
        document.getElementById(
            "signupMessage"
        );


    if (
        !name ||
        !email ||
        !password ||
        !confirmPassword
    ) {

        message.style.color = "red";

        message.innerText =
            "Please fill all fields.";

        return;
    }


    if (
        password !==
        confirmPassword
    ) {

        message.style.color = "red";

        message.innerText =
            "Passwords do not match.";

        return;
    }


    let users =
        JSON.parse(
            localStorage.getItem("users")
        ) || [];


    const existingUser =
        users.find(
            user =>
                user.email === email
        );


    if (existingUser) {

        message.style.color = "red";

        message.innerText =
            "Email already registered.";

        return;
    }


    const newUser = {

        id:
            Date.now(),

        name:
            name,

        email:
            email,

        password:
            password

    };


    users.push(newUser);


    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    message.style.color =
        "green";


    message.innerText =
        "Account created successfully. Please login.";


    document.getElementById(
        "signupName"
    ).value = "";


    document.getElementById(
        "signupEmail"
    ).value = "";


    document.getElementById(
        "signupPassword"
    ).value = "";


    document.getElementById(
        "signupConfirmPassword"
    ).value = "";


    setTimeout(
        function () {

            showLogin();

        },
        1000
    );

}


/* =====================================================
   LOGIN
===================================================== */

function loginUser() {

    const email =
        document
            .getElementById("loginEmail")
            .value
            .trim();


    const password =
        document
            .getElementById("loginPassword")
            .value;


    const message =
        document.getElementById(
            "loginMessage"
        );


    /*
       ADMIN LOGIN

       Credentials are NOT displayed
       anywhere on the webpage.
    */

    if (
        email === ADMIN_EMAIL &&
        password === ADMIN_PASSWORD
    ) {

        localStorage.setItem(
            "adminLoggedIn",
            "true"
        );


        window.location.href =
            "admin.html";


        return;
    }


    /*
       NORMAL USER LOGIN
    */

    const users =
        JSON.parse(
            localStorage.getItem("users")
        ) || [];


    const user =
        users.find(
            u =>
                u.email === email &&
                u.password === password
        );


    if (!user) {

        message.style.color =
            "red";


        message.innerText =
            "Invalid email or password.";


        return;
    }


    localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
    );


    window.location.href =
        "user.html";

}


/* =====================================================
   USER LOGIN CHECK
===================================================== */

function checkUserLogin() {

    const user =
        localStorage.getItem(
            "loggedInUser"
        );


    if (!user) {

        window.location.href =
            "index.html";

    }

}


/* =====================================================
   ADMIN LOGIN CHECK
===================================================== */

function checkAdminLogin() {

    const admin =
        localStorage.getItem(
            "adminLoggedIn"
        );


    if (admin !== "true") {

        window.location.href =
            "index.html";

    }

}


/* =====================================================
   USER NAVIGATION
===================================================== */

function showUserSection(
    sectionId
) {

    const sections =
        document.querySelectorAll(
            ".user-section"
        );


    sections.forEach(
        section => {

            section.classList.add(
                "hidden"
            );

        }
    );


    const selected =
        document.getElementById(
            sectionId
        );


    if (selected) {

        selected.classList.remove(
            "hidden"
        );

    }


    if (
        sectionId ===
        "hotelsSection"
    ) {

        displayHotels();

    }


    if (
        sectionId ===
        "bookingsSection"
    ) {

        displayUserBookings();

    }

}


/* =====================================================
   ADMIN NAVIGATION
===================================================== */

function showAdminSection(
    sectionId
) {

    const sections =
        document.querySelectorAll(
            ".admin-section"
        );


    sections.forEach(
        section => {

            section.classList.add(
                "hidden"
            );

        }
    );


    const selected =
        document.getElementById(
            sectionId
        );


    if (selected) {

        selected.classList.remove(
            "hidden"
        );

    }


    if (
        sectionId ===
        "adminDashboard"
    ) {

        displayAdminDashboard();

    }


    if (
        sectionId ===
        "adminHotels"
    ) {

        displayAdminHotels();

    }


    if (
        sectionId ===
        "adminBookings"
    ) {

        displayAdminBookings();

    }


    if (
        sectionId ===
        "adminReviews"
    ) {

        displayAdminReviews();

    }

}


/* =====================================================
   DISPLAY HOTELS
===================================================== */

function displayHotels(
    filteredHotels = hotels
) {

    const container =
        document.getElementById(
            "hotelResults"
        );


    if (!container) {

        return;

    }


    if (
        filteredHotels.length === 0
    ) {

        container.innerHTML = `

            <div class="empty-message">

                <h2>
                    No hotels found
                </h2>

                <p>
                    Try changing your search filters.
                </p>

            </div>

        `;

        return;
    }


    container.innerHTML =

        filteredHotels
            .map(
                hotel => `

                <div class="hotel-card">

                    <img
                        class="hotel-image"
                        src="${hotel.image}"
                        alt="${hotel.name}"
                    >

                    <div class="hotel-content">

                        <h2>
                            ${hotel.name}
                        </h2>

                        <p class="hotel-location">
                            📍 ${hotel.location}
                        </p>

                        <p class="rating">
                            ⭐ ${hotel.rating}/5
                        </p>

                        <div class="amenities">

                            ${
                                hotel.amenities
                                    .map(
                                        amenity =>
                                            `
                                            <span class="amenity">
                                                ${amenity}
                                            </span>
                                            `
                                    )
                                    .join("")
                            }

                        </div>


                        <div class="hotel-bottom">

                            <div class="price">

                                ₹${hotel.price}

                                <small>
                                    /night
                                </small>

                            </div>


                            ${
                                hotel.rooms > 0

                                ?

                                `
                                <button
                                    class="book-btn"
                                    onclick="openBookingModal(${hotel.id})"
                                >
                                    Book Now
                                </button>
                                `

                                :

                                `
                                <button
                                    class="book-btn"
                                    disabled
                                >
                                    Sold Out
                                </button>
                                `
                            }

                        </div>

                    </div>

                </div>

                `
            )
            .join("");

}


/* =====================================================
   HOTEL SEARCH
===================================================== */

function searchHotels() {

    const location =
        document.getElementById(
            "locationFilter"
        ).value;


    const price =
        document.getElementById(
            "priceFilter"
        ).value;


    const amenity =
        document.getElementById(
            "amenityFilter"
        ).value;


    const result =
        hotels.filter(
            hotel => {

                const locationMatch =
                    location === "all" ||
                    hotel.location ===
                    location;


                const priceMatch =
                    price === "all" ||
                    hotel.price <=
                    Number(price);


                const amenityMatch =
                    amenity === "all" ||
                    hotel.amenities.includes(
                        amenity
                    );


                return (
                    locationMatch &&
                    priceMatch &&
                    amenityMatch
                );

            }
        );


    displayHotels(result);

}


/* =====================================================
   BOOKING
===================================================== */

let selectedHotelId = null;


function openBookingModal(
    hotelId
) {

    selectedHotelId =
        hotelId;


    const hotel =
        hotels.find(
            h =>
                h.id === hotelId
        );


    if (!hotel) {

        return;

    }


    document
        .getElementById(
            "bookingModal"
        )
        .classList
        .remove("hidden");


    document.getElementById(
        "selectedHotel"
    ).innerHTML = `

        <div class="admin-info-box">

            <h3>
                ${hotel.name}
            </h3>

            <p>
                📍 ${hotel.location}
            </p>

            <p>
                ⭐ ${hotel.rating}/5
            </p>

            <p>
                💰 ₹${hotel.price} per night
            </p>

        </div>

    `;


    document.getElementById(
        "bookingMessage"
    ).innerText = "";

}


function closeBookingModal() {

    document
        .getElementById(
            "bookingModal"
        )
        .classList
        .add("hidden");

}


/* =====================================================
   CONFIRM BOOKING
===================================================== */

function confirmBooking() {

    const user =
        JSON.parse(
            localStorage.getItem(
                "loggedInUser"
            )
        );


    if (!user) {

        alert(
            "Please login first."
        );

        return;

    }


    const checkin =
        document.getElementById(
            "checkinDate"
        ).value;


    const checkout =
        document.getElementById(
            "checkoutDate"
        ).value;


    const guests =
        document.getElementById(
            "guestCount"
        ).value;


    const payment =
        document.getElementById(
            "paymentMethod"
        ).value;


    const message =
        document.getElementById(
            "bookingMessage"
        );


    if (!checkin || !checkout) {

        message.style.color =
            "red";


        message.innerText =
            "Please select check-in and check-out dates.";


        return;
    }


    if (
        new Date(checkout) <=
        new Date(checkin)
    ) {

        message.style.color =
            "red";


        message.innerText =
            "Check-out date must be after check-in date.";


        return;
    }


    const hotel =
        hotels.find(
            h =>
                h.id ===
                selectedHotelId
        );


    if (
        !hotel ||
        hotel.rooms <= 0
    ) {

        message.style.color =
            "red";


        message.innerText =
            "Room is currently unavailable.";


        return;

    }


    const booking = {

        id:
            Date.now(),

        userName:
            user.name,

        userEmail:
            user.email,

        hotelId:
            hotel.id,

        hotelName:
            hotel.name,

        location:
            hotel.location,

        checkin:
            checkin,

        checkout:
            checkout,

        guests:
            guests,

        price:
            hotel.price,

        payment:
            payment,

        status:
            "Confirmed"

    };


    let bookings =
        JSON.parse(
            localStorage.getItem(
                "bookings"
            )
        ) || [];


    bookings.push(
        booking
    );


    localStorage.setItem(
        "bookings",
        JSON.stringify(
            bookings
        )
    );


    hotel.rooms--;


    localStorage.setItem(
        "hotels",
        JSON.stringify(
            hotels
        )
    );


    message.style.color =
        "green";


    message.innerText =
        "Booking confirmed successfully!";


    setTimeout(
        function () {

            closeBookingModal();

            displayHotels();

            displayUserBookings();

            showUserSection(
                "bookingsSection"
            );

        },
        1000
    );

}


/* =====================================================
   USER BOOKINGS
===================================================== */

function displayUserBookings() {

    const container =
        document.getElementById(
            "userBookings"
        );


    if (!container) {

        return;

    }


    const user =
        JSON.parse(
            localStorage.getItem(
                "loggedInUser"
            )
        );


    if (!user) {

        return;

    }


    const bookings =
        JSON.parse(
            localStorage.getItem(
                "bookings"
            )
        ) || [];


    const userBookings =
        bookings.filter(
            booking =>
                booking.userEmail ===
                user.email
        );


    if (
        userBookings.length === 0
    ) {

        container.innerHTML = `

            <div class="empty-message">

                <h2>
                    No bookings yet
                </h2>

                <p>
                    Search for a hotel and make
                    your first reservation.
                </p>

            </div>

        `;

        return;
    }


    container.innerHTML =

        userBookings
            .map(
                booking => `

                <div class="booking-card">

                    <div>

                        <h2>
                            🏨 ${booking.hotelName}
                        </h2>

                        <p>
                            📍 ${booking.location}
                        </p>

                        <p>
                            📅 ${booking.checkin}
                            →
                            ${booking.checkout}
                        </p>

                        <p>
                            👥 ${booking.guests}
                            Guest(s)
                        </p>

                        <p>
                            💳 ${booking.payment}
                        </p>

                        <p>
                            💰 ₹${booking.price}
                            / night
                        </p>

                    </div>


                    <div>

                        <span class="booking-status">
                            ${booking.status}
                        </span>

                    </div>

                </div>

                `
            )
            .join("");

}


/* =====================================================
   ADMIN DASHBOARD
===================================================== */

function displayAdminDashboard() {

    const users =
        JSON.parse(
            localStorage.getItem(
                "users"
            )
        ) || [];


    const bookings =
        JSON.parse(
            localStorage.getItem(
                "bookings"
            )
        ) || [];


    const reviews =
        JSON.parse(
            localStorage.getItem(
                "reviews"
            )
        ) || [];


    const totalHotels =
        document.getElementById(
            "totalHotels"
        );


    const totalBookings =
        document.getElementById(
            "totalBookings"
        );


    const totalUsers =
        document.getElementById(
            "totalUsers"
        );


    const totalReviews =
        document.getElementById(
            "totalReviews"
        );


    if (totalHotels) {

        totalHotels.innerText =
            hotels.length;

    }


    if (totalBookings) {

        totalBookings.innerText =
            bookings.length;

    }


    if (totalUsers) {

        totalUsers.innerText =
            users.length;

    }


    if (totalReviews) {

        totalReviews.innerText =
            reviews.length;

    }

}


/* =====================================================
   ADMIN HOTEL MANAGEMENT
===================================================== */

function displayAdminHotels() {

    const container =
        document.getElementById(
            "adminHotelList"
        );


    if (!container) {

        return;

    }


    container.innerHTML =

        hotels
            .map(
                hotel => `

                <div class="admin-hotel-card">

                    <div>

                        <h3>
                            🏨 ${hotel.name}
                        </h3>

                        <p>
                            📍 ${hotel.location}
                        </p>

                    </div>


                    <div>

                        <strong>
                            ₹${hotel.price}
                        </strong>

                        <p>
                            per night
                        </p>

                    </div>


                    <div>

                        <p
                            class="${
                                hotel.rooms > 0
                                    ? "available"
                                    : "unavailable"
                            }"
                        >

                            ${
                                hotel.rooms > 0
                                    ? hotel.rooms +
                                      " Rooms Available"
                                    : "No Rooms Available"
                            }

                        </p>

                    </div>


                    <div>

                        <button
                            class="toggle-btn"
                            onclick="toggleRoomAvailability(${hotel.id})"
                        >

                            ${
                                hotel.rooms > 0
                                    ? "Mark Unavailable"
                                    : "Make Available"
                            }

                        </button>

                    </div>

                </div>

                `
            )
            .join("");

}


/* =====================================================
   ROOM AVAILABILITY
===================================================== */

function toggleRoomAvailability(
    hotelId
) {

    const hotel =
        hotels.find(
            h =>
                h.id === hotelId
        );


    if (!hotel) {

        return;

    }


    if (
        hotel.rooms > 0
    ) {

        hotel.rooms = 0;

    } else {

        hotel.rooms = 10;

    }


    localStorage.setItem(
        "hotels",
        JSON.stringify(
            hotels
        )
    );


    displayAdminHotels();

}


/* =====================================================
   ADMIN BOOKINGS
===================================================== */

function displayAdminBookings() {

    const container =
        document.getElementById(
            "adminBookingList"
        );


    if (!container) {

        return;

    }


    const bookings =
        JSON.parse(
            localStorage.getItem(
                "bookings"
            )
        ) || [];


    if (
        bookings.length === 0
    ) {

        container.innerHTML = `

            <div class="empty-message">

                <h2>
                    No bookings available
                </h2>

            </div>

        `;

        return;
    }


    container.innerHTML =

        bookings
            .map(
                booking => `

                <div
                    class="admin-booking-card"
                >

                    <h3>
                        🏨 ${booking.hotelName}
                    </h3>

                    <p>
                        👤 Customer:
                        <strong>
                            ${booking.userName}
                        </strong>
                    </p>

                    <p>
                        📧 Email:
                        ${booking.userEmail}
                    </p>

                    <p>
                        📍 Location:
                        ${booking.location}
                    </p>

                    <p>
                        📅 ${booking.checkin}
                        →
                        ${booking.checkout}
                    </p>

                    <p>
                        👥 Guests:
                        ${booking.guests}
                    </p>

                    <p>
                        💰 ₹${booking.price}
                    </p>

                    <p>
                        💳 Payment:
                        ${booking.payment}
                    </p>

                    <p>
                        Status:
                        <strong>
                            ${booking.status}
                        </strong>
                    </p>


                    <div class="admin-actions">

                        <button
                            class="approve-btn"
                            onclick="updateBookingStatus(
                                ${booking.id},
                                'Confirmed'
                            )"
                        >
                            Approve
                        </button>


                        <button
                            class="reject-btn"
                            onclick="updateBookingStatus(
                                ${booking.id},
                                'Cancelled'
                            )"
                        >
                            Cancel
                        </button>

                    </div>

                </div>

                `
            )
            .join("");

}


/* =====================================================
   UPDATE BOOKING
===================================================== */

function updateBookingStatus(
    bookingId,
    newStatus
) {

    let bookings =
        JSON.parse(
            localStorage.getItem(
                "bookings"
            )
        ) || [];


    const booking =
        bookings.find(
            b =>
                b.id === bookingId
        );


    if (!booking) {

        return;

    }


    booking.status =
        newStatus;


    localStorage.setItem(
        "bookings",
        JSON.stringify(
            bookings
        )
    );


    displayAdminBookings();

    displayAdminDashboard();

}


/* =====================================================
   ADMIN REVIEWS
===================================================== */

function displayAdminReviews() {

    const container =
        document.getElementById(
            "adminReviewList"
        );


    if (!container) {

        return;

    }


    const reviews =
        JSON.parse(
            localStorage.getItem(
                "reviews"
            )
        ) || [];


    if (
        reviews.length === 0
    ) {

        container.innerHTML = `

            <div class="empty-message">

                <h2>
                    No customer reviews
                </h2>

                <p>
                    Customer reviews will appear here.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =

        reviews
            .map(
                review => `

                <div class="review-card">

                    <h3>
                        ${review.userName}
                    </h3>

                    <div class="review-stars">

                        ${
                            "⭐".repeat(
                                review.rating
                            )
                        }

                    </div>

                    <p>
                        ${review.comment}
                    </p>

                    <small>
                        ${review.hotelName}
                    </small>

                </div>

                `
            )
            .join("");

}


/* =====================================================
   USER LOGOUT
===================================================== */

function logoutUser() {

    localStorage.removeItem(
        "loggedInUser"
    );


    window.location.href =
        "index.html";

}


/* =====================================================
   ADMIN LOGOUT
===================================================== */

function logoutAdmin() {

    localStorage.removeItem(
        "adminLoggedIn"
    );


    window.location.href =
        "index.html";

}