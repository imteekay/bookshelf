const twoThousandTwentybooks = [
  {
    'title': 'The Effective Engineer',
    'author': 'Edmond Lau',
    'url': 'https://www.amazon.com/Effective-Engineer-Engineering-Disproportionate-Meaningful/dp/0996128107',
    'hasMediumPost': false,
    'mediumPostUrl': '',
    'read': false
  }
]

const twoThousandNineteenbooks = [
  {
    'title': 'Delivering Happiness',
    'author': 'Tony Hsieh',
    'url': 'http://www.amazon.com/Delivering-Happiness-Profits-Passion-Purpose/dp/160941280X',
    'hasMediumPost': false,
    'mediumPostUrl': '',
    'read': true
  },
  {
    'title': 'Elon Musk',
    'author': 'Ashlee Vance',
    'url': 'http://www.amazon.com/Elon-Musk-SpaceX-Fantastic-Future/dp/0062301233',
    'hasMediumPost': false,
    'mediumPostUrl': '',
    'read': true
  },
  {
    'title': 'Zero To One',
    'author': 'Peter Thiel',
    'url': 'http://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296',
    'hasMediumPost': false,
    'mediumPostUrl': '',
    'read': true
  },
  {
    'title': 'Platform Scale',
    'author': 'Sangeet Paul Choudary',
    'url': 'https://www.amazon.com/Platform-Scale-emerging-business-investment-ebook/dp/B015FAOKJ6',
    'hasMediumPost': false,
    'mediumPostUrl': '',
    'read': true
  },
  {
    'title': 'Hooked',
    'author': 'Nir Eyal',
    'url': 'https://www.amazon.com/Hooked-How-Build-Habit-Forming-Products/dp/1591847788',
    'hasMediumPost': false,
    'mediumPostUrl': '',
    'read': true
  },
  {
    'title': 'The 4-Hour Workweek',
    'author': 'Tim Ferris',
    'url': 'https://www.amazon.com/4-Hour-Workweek-Escape-Live-Anywhere/dp/0307465357',
    'hasMediumPost': false,
    'mediumPostUrl': '',
    'read': true
  },
  {
    'title': 'Programming Challenges',
    'author': 'Steve S. Skiena & Miguel A. Revilla',
    'url': 'https://www.amazon.com/Programming-Challenges-Contest-Training-Computer/dp/0387001638',
    'hasMediumPost': false,
    'mediumPostUrl': '',
    'read': true
  },
  {
    'title': 'Cracking the Coding Interview',
    'author': 'Gayle Laakmann McDowell',
    'url': 'https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/098478280X',
    'hasMediumPost': false,
    'mediumPostUrl': '',
    'read': true
  }
];

const booksPerYear = {
  2019: twoThousandNineteenbooks,
  2020: twoThousandTwentybooks,
};

const App = {
  data() {
    return {
      booksPerYear
    }
  },
};

Vue
  .createApp(App)
  .mount('#app');
