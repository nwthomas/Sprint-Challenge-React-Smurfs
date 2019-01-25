- Explain the differences between `client-side routing` and `server-side routing`.

With server-side routing, every request from the user refreshes the page. THis is because all of the data is being refreshed on every change. In addition, it can take a while for the page to be rendered. However, server-side routing can be nice because only the data the user needs will be pulled from the server. Also, SEO is quite kind to this form of routing.

In contrast, client-side routing allows for individual parts of the page to refresh solely based on what information changed. Because less data is being changed, the pages generally load faster and animations will be faster. However, SEO is difficult with it; there is also a lot more code involved, and data can be downloaded initially by the user that isn't being displayed in the app.

- What does HTTP stand for?

Hyper-Test Transfer Protocol - It's the underlying protocol used by the World Wide Web.

- What does CRUD stand for?

CRUD, or "Create, Read, Update, Delete," is an application that is capable of creating data, reading it from a server, updating that data, and also deleting it. They are also the four basic functions of `persistent storage`.

- Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create - The `.push()` function sends new information in `Axios` to be stored on the server.

Read - The `.get()` function pulls existing information from the server in `Axios` to display on the page.

Update - The `.put()` function ends new information in `Axios` to update existing information on the server.

Delete - The `.delete()` function removes items from the server in `Axios`.
