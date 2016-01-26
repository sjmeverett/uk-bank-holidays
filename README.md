# UK bank holidays

This package will help you determine when UK bank holidays are, using the Government's feed.

## Installation

    $ npm install --save uk-bank-holidays

## Usage

```js
import HolidayFeed from 'uk-bank-holidays';

//...

let feed = new HolidayFeed();
await feed.load();

let divisions = feed.divisions();
// [ 'england-and-wales', 'scotland', 'northern-ireland' ]

let scotland = feed.divisions('scotland');
scotland.holidays(); // all holidays in the feed
scotland.holidays(startDate); // holidays on or after start date
scotland.holidays(startDate, endDate); // holidays between the dates (inclusive)
```

The `holidays` method returns an array of objects that look like this:

```js
{ title: 'Christmas Day',
    date: '2017-12-25',
    notes: '',
    bunting: true }
```

I have no idea what the `bunting` field is for...

## License etc

This is MIT licensed: feel free to do what you like with it.  Comments, suggestions, issues and pull requests welcome.
