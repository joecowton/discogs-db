# Discogs Reducer
### (Work in Progress)

Heroku deployment: https://young-escarpment-46778.herokuapp.com/

### Overview

The idea behind this app was to provide a hassle method for listening to music on the popular record listing site Discogs. While the site is unparalleled in its catalogue of released music, recently the interface has become hugely crowded with adverts and links making using it a frustrating experience, especially if the user just wants to listen.

Discogs Reducer removes the noise from the experience, providing the user with an uncluttered interface and nothing but the music and a hypothetical method of purchasing the music. As an addition I've added a streamlined form to add records to the site.

### Technology used

- Node-Express
- React
- React-Router
- React-Player
- Redux
- Redux-Thunk
- Redux-Form
- Passport
- Axios
- Stripe
- Mongoose
- MongoDB

### How it works

Upon landing on the front page of the site the user is presented with an empty page and header containing a link to login. This link takes the user into the Google OAuth flow where they are authenticated, then kicked back to the main music listing page.

The listing page is populated with records stored in a database, in this example all taken from record label I help run when not writing code. There is a drop-down menu at the top of the page containing a list of artists who have released on the label, when any of these is selected the results are filtered to only contain records involving that artist.

When a record is selected - by clicking on the avatar - a GET request is made to the Discogs API using the records ID as a parameter. The response from this request is then used to populate a record detail page with all available videos and a Stripe button labeled with the records lowest price. As it stands this button does nothing beyond load Stripe's test interface, in future it might be used for greater effect.

The final feature is page allowing users to contribute entries of their own to this list. Using redux form the data is then persisted to a form review page before the user confirms, sending a POST request to the database creating a new entry. This entry is then available in the list view.

#### To run
```
$ git clone https://github.com/joecowton/discogs-db
$ cd discogs-db
$ npm install
$ cd client
$ npm install
$ cd ..
$ npm run dev
```

#### To test
```
$ npm test
```

##### Video walk-through / list page
[![app](images/1.png)](https://youtu.be/PzY-jtUyrPc)

##### Record view page
![app](images/2.png)

##### Form page
![app](images/3.png)

##### Form confirmation page
![app](images/4.png)
