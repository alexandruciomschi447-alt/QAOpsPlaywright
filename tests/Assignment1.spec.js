const { test, expect } = require('@playwright/test');
const { time } = require('node:console');
const { title } = require('node:process');
 
 const userName = 'salutcefaci@gmail.com'
 const password = 'Kira1212@'
 


test.only('@Web Client App login', async ({ page }) => {
    test.slow();
    const eventTitle = `Test Event ${Date.now()}`;
    const BASE_URL      = 'https://eventhub.rahulshettyacademy.com'
    //step 1

    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.getByPlaceholder('you@email.com').fill(userName);
    await page.getByLabel('password').fill('Kira1212@');
    await page.locator('#login-btn').click();
    await expect(page.getByText('Browse Events →')).toBeVisible();
    
    //step 2
    await page.goto('https://eventhub.rahulshettyacademy.com/admin/events');
        //- Fill Title field (locate by id #event-title-input)
    await page.locator('#event-title-input').fill(eventTitle);

    //- Fill Description textarea (locate using #admin-event-form textarea)
    await page.locator("#admin-event-form textarea").fill('Example123');
    //- Fill City field (locate by label City)
    await page.getByLabel("city").fill('Somewhere');
    //- Fill Venue field (locate by label Venue)
    await page.getByLabel("venue").fill('World');
    //- Fill Event Date & Time field (locate by label Event Date & Time) — use your futureDateValue() helper
     await page.getByLabel('Event Date & Time').fill('2027-12-31T10:00');
    //- Fill Price ($) field (locate by label Price ($)) — use any number e.g. 100
    await page.getByLabel('Price ($)').fill('100');
    //- Fill Total Seats field (locate by label Total Seats) — use 50
    await page.getByLabel('Total seats').fill('50');
    //- Click the submit button (locate by id #add-event-btn)
    await page.locator('#add-event-btn').click();
    //- Assert: toast message Event created! is visible
    await expect(page.getByText('Event created!')).toBeVisible();

    //Step 3 — Find the event card and capture seats

    //- Navigate to /events
    await page.goto('https://eventhub.rahulshettyacademy.com/events');
    //- Get all event cards (locate by data-testid="event-card")
    await page.locator("event-card");
    //- Assert the first card is visible (confirms page loaded)
    const eventCards = page.getByTestId('event-card');
    await expect(eventCards.first()).toBeVisible();
    //- From all cards, filter for the one that contains your event title text
    const targetCard = eventCards.first({ hasText: eventTitle}).first();
    //- Assert the matched card is visible (timeout 5 seconds)
    await expect(targetCard).toBeVisible({  timeout: 5000 });
    //- Read the seat count text from that card (locate element containing text seat, parse integer from its inner text) — store this as seatsBeforeBooking
    const seatsBeforeBooking = parseInt(await targetCard.getByText('seat').first().innerText());
    console.log(`Seats before booking: ${seatsBeforeBooking}`);
    //- On the matched event card, click the Book Now button (locate by data-testid="book-now-btn" inside the card)
    await targetCard.getByTestId('book-now-btn').click();
    
    //- Assert: element with id #ticket-count has text 1 (default quantity)
    const ticketCount = page.locator('#ticket-count');
    await expect(ticketCount).toHaveText('1');
    //- Fill Full Name (locate by label Full Name)
    await page.getByLabel('Full Name').fill('Emilut Cupar');
    //- Fill Email (locate by id #customer-email)
    await page.locator('#customer-email').fill('salutcefaci@gmail.com');
    //- Fill Phone (locate by placeholder +91 98765 43210)
    await page.getByPlaceholder('+91 98765 43210').fill('0568395837');
    //- Click the confirm button (locate by CSS class .confirm-booking-btn)
    await page.locator('.confirm-booking-btn').click();
    //- Locate the booking reference element (locate by CSS class .booking-ref, take .first())
    const bookingRefEl = await page.locator('.booking-ref').first();
    //- Assert it is visible
    await expect(bookingRefEl).toBeVisible();
    //- Read its inner text, trim it — store as bookingRef
    const bookingRef = (await bookingRefEl.innerText()).trim();
    expect(bookingRef.charAt(0)).toBe(eventTitle.trim().charAt(0).toUpperCase());
    
    console.log(`Booking confirmed. Ref: ${bookingRef}`);

    //- Assert: URL is BASE_URL/bookings
    await page.getByRole('link', { name: 'View My Bookings' }).click();
    await expect(page).toHaveURL(`${BASE_URL}/bookings`);
    //- Get all booking cards (locate by id #booking-card)


    //- Assert the first booking card is visible

//- Filter booking cards for the one that contains an element with class .booking-ref matching your bookingRef text

//- Assert that matched card is visible

//- Assert that matched card contains your eventTitle text
});