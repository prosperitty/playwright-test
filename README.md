# Playwright Testing

Playwright testing is an <b>end-to-end testing</b> library used for modern web apps. This is different from using unit testing libraries, such as Jest, to test web apps. This project is a basic implemenation of playwright to end-to-end test the google landing page along with coding along with the starter documentation. 

## Testing The Google Homepage

In this project, I attempted to end-to-end test the google homepage to familiarize myself with playwright. I found that this library is incredibly easy to understand and is similar to using a unit testing library such as jest.

I started by testing the search bar on the homepage. To test the search bar, I decided to first test if the search bar is visible and test if the search bar has an empty value. Then, I tested the search bar by filling the input, using playwright, with the text, 'google'. I then tested to make sure the search bar <b>does not</b> have an empty value. Once this tests pass, I moved on and used playwright to implement an 'Enter" keypress event, which would execute the query and return search results from google. I finalized this test by testing if the search results page had a visible search bar exclusive to this page. 

Thorughout these tests I used UI mode to debug and generated test reports.

## Installing 

Installing playwright through the [documentation](https://playwright.dev/docs/intro) is incredbily well written and easy to understand. 

One of the most useful tools from playwright is <b>UI mode</b>, which provides a better developer experience. 

## UI Mode

We can run UI mode by running 

``` 
npx playwright test --ui
```

In UI mode, we can turn on watch mode, which is a toggleable button with an <b>eye icon</b>. This will watch for changes and will re-run the test once the change is detected. There are other buttons that help us run tests, show output, reload, or filter tests on the left sidebar.

When a test runs, the actions tab shows a list of locators that were used, which can be clicked to show a DOM snapshot. We can expand the DOM snapshot to view a replicate version of the page in a browser as a snapshot. 

We can use the locator button, which is a tab above the DOM snapshot, to choose an element on the DOM snapshot and returns an element as a locator under the <b>locator tab</b>.


## Recording Tests

Another incredibly useful feature from playwright is the ability to record tests in a separate window. We can run this feature using 

```
npx playwright codegen [url]
```

This opens two separate windows, a browser window and an inspector window. We can use the browser window to view a webpage and click the record button to start recording user interactions. Each interaction will generate code in the inspector window, which can be copied into an editor. The code that is generated is not sufficient enough to call it a test, therefore we must add assertions with playwright to test the user interaction. This is useful to quickly record a user interaction to then quickly get started with implementing assertions.
