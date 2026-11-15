const { test, expect } = require('@playwright/test');
const { match } = require('node:assert');
test('@Web Client App login', async ({ page }) => {
// What you are testing: Create a brand new event from the admin panel, then complete a booking for that event, and finally verify the seat count drops by exactly 1.
// Setup
// - BASE_URL = https://eventhub.rahulshettyacademy.com
// - Credentials: < Create your own credentials>
const email = "salutcefaci@gmail.com"
const password = "Kira1212@"
const BASE_URL = "https://eventhub.rahulshettyacademy.com"
const eventTitle = `Test Event ${Date.now()}`;
const futureDataHelper = "2027-12-31T10:00"
// - Write a reusable login(page) helper function — you will call it at the start of the test


    // Step 1 — Login
// - Navigate to /login
await page.goto(`${BASE_URL}/login`);
// - Fill email field (locate by placeholder you@email.com)
await page.getByPlaceholder("you@email.com").fill(email);
// - Fill password field (locate by label Password)
await page.getByLabel("Password").fill(password);
// - Click the login button (locate by id #login-btn)
await page.locator("#login-btn").click();
// - Assert: link with text Browse Events → is visible (confirms login success)
await expect(page.getByText("Browse Events →")).toBeVisible();

    // Step 2 — Create a new event
// - Navigate to /admin/events
await page.goto(`${BASE_URL}/admin/events`);
// - Fill Title field (locate by id #event-title-input)
await page.locator("#event-title-input").fill(eventTitle);
// - Fill Description textarea (locate using #admin-event-form textarea)
await page.locator("#admin-event-form");
// - Fill City field (locate by label City)
await page.getByLabel("city").fill("Ungheni");
// - Fill Venue field (locate by label Venue)
await page.getByLabel("Venue").fill("Debebal 69");
// - Fill Event Date & Time field (locate by label Event Date & Time) — use your futureDateValue() helper
await page.getByLabel('Event Date & Time').fill(futureDataHelper);
// - Fill Price ($) field (locate by label Price ($)) — use any number e.g. 100
await page.getByLabel('Price ($)').fill('100');
// - Fill Total Seats field (locate by label Total Seats) — use 50
await page.getByLabel("Total Seats").fill("50");
// - Click the submit button (locate by id #add-event-btn)
await page.locator("#add-event-btn").click(); 
// - Assert: toast message Event created! is visible
await expect(page.getByText('Event created!')).toBeVisible();

    // Step 3 — Find the event card and capture seats
// - Navigate to /events
await page.goto(`${BASE_URL}/events`);
// - Get all event cards (locate by data-testid="event-card")
await page.getByTestId('event-card');
// - Assert the first card is visible (confirms page loaded)
const eventCards = page.getByTestId('event-card');
await expect(eventCards.first()).toBeVisible();
// - From all cards, filter for the one that contains your event title text
const myCard = eventCards.filter({ hasText: eventTitle});
// - Assert the matched card is visible (timeout 5 seconds)
await expect(myCard).toBeVisible({timeout: 5000});
// - Read the seat count text from that card (locate element containing text seat, parse integer from its inner text) — store this as seatsBeforeBooking
const seatsBeforeBooking = parseInt(await myCard.getByText('seat').first().innerText());
console.log(`Seats before booking: ${seatsBeforeBooking}`);
    // Step 4 — Start booking
// - On the matched event card, click the Book Now button (locate by data-testid="book-now-btn" inside the card)
await myCard.getByTestId("book-now-btn").click();
    // Step 5 — Fill booking form

// - Assert: element with id #ticket-count has text 1 (default quantity)
const ticketCount = page.locator('#ticket-count');
await expect(ticketCount).toHaveText('1');
// - Fill Full Name (locate by label Full Name)
await page.getByLabel('Full Name').fill("Alexandru");
// - Fill Email (locate by id #customer-email)
await page.locator("#customer-email").fill(email);
// - Fill Phone (locate by placeholder +91 98765 43210)
await page.getByPlaceholder("+91 98765 43210").fill('0696906900');
// - Click the confirm button (locate by CSS class .confirm-booking-btn)
await page.locator(".confirm-booking-btn").click();

    // Step 6 — Verify booking confirmation

// - Locate the booking reference element (locate by CSS class .booking-ref, take .first())
const bookingRefEl = await page.locator(".booking-ref").first();
// - Assert it is visible
await expect(bookingRefEl).toBeVisible();
// - Read its inner text, trim it — store as bookingRef
const bookingRef = (await bookingRefEl.innerText()).trim();
    // Step 7 — Verify in My Bookings
// - Click the link View My Bookings | daca are link (href=) folosim getbyrole
await page.getByRole('link', { name: 'View My Bookings' }).click();
// - Get all booking cards (locate by id #booking-card)
const bookingCards = page.locator('#booking-card');
// - Filter booking cards for the one that contains an element with class .booking-ref matching your bookingRef text
const matchingCard = bookingCards.filter({ has: page.locator('.booking-ref', { hasText: bookingRef }) });
// - Assert that matched card is visible 
await expect(matchingCard).toBeVisible();
// - Assert that matched card contains your eventTitle text
await expect(matchingCard).toContainText(eventTitle);
    // Step 8 — Verify seat reduction

// - Navigate back to /events
await page.goto(`${BASE_URL}/events`);
// - Assert the first event card is visible
await expect(eventCards.first()).toBeVisible();
// - Filter cards again using hasText: eventTitle
const updatedCard = eventCards.filter({ hasText: eventTitle});
// - Assert the card is visible
await expect(updatedCard.isVisible());
// - Read the seat count text again (same as Step 3) — store as seatsAfterBooking
const seatsAfterBooking = parseInt(await updatedCard.getByText('seat').first().innerText()); // sa-mi explici te rog inner si parseInt ca nu le inteleg
// - Assert: seatsAfterBooking === seatsBeforeBooking - 1
console.log(`Seats after booking: ${seatsAfterBooking}`);
});