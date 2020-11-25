const twoThousandTwentybooks = [
  {
    'title': 'The Effective Engineer',
    'author': 'Edmond Lau',
    'url': 'https://www.amazon.com/Effective-Engineer-Engineering-Disproportionate-Meaningful/dp/0996128107',
    'hasArticle': false,
    'articleUrl': '',
    'read': false
  }
]

const twoThousandNineteenbooks = [
  {
    'title': 'Delivering Happiness',
    'author': 'Tony Hsieh',
    'url': 'http://www.amazon.com/Delivering-Happiness-Profits-Passion-Purpose/dp/160941280X',
    'hasArticle': false,
    'articleUrl': '',
    'read': true
  },
  {
    'title': 'Elon Musk',
    'author': 'Ashlee Vance',
    'url': 'http://www.amazon.com/Elon-Musk-SpaceX-Fantastic-Future/dp/0062301233',
    'hasArticle': false,
    'articleUrl': '',
    'read': true
  },
  {
    'title': 'Zero To One',
    'author': 'Peter Thiel',
    'url': 'http://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296',
    'hasArticle': false,
    'articleUrl': '',
    'read': true
  },
  {
    'title': 'Platform Scale',
    'author': 'Sangeet Paul Choudary',
    'url': 'https://www.amazon.com/Platform-Scale-emerging-business-investment-ebook/dp/B015FAOKJ6',
    'hasArticle': false,
    'articleUrl': '',
    'read': true
  },
  {
    'title': 'Hooked',
    'author': 'Nir Eyal',
    'url': 'https://www.amazon.com/Hooked-How-Build-Habit-Forming-Products/dp/1591847788',
    'hasArticle': false,
    'articleUrl': '',
    'read': true
  },
  {
    'title': 'The 4-Hour Workweek',
    'author': 'Tim Ferris',
    'url': 'https://www.amazon.com/4-Hour-Workweek-Escape-Live-Anywhere/dp/0307465357',
    'hasArticle': false,
    'articleUrl': '',
    'read': true
  },
  {
    'title': 'Programming Challenges',
    'author': 'Steve S. Skiena & Miguel A. Revilla',
    'url': 'https://www.amazon.com/Programming-Challenges-Contest-Training-Computer/dp/0387001638',
    'hasArticle': false,
    'articleUrl': '',
    'read': true
  },
  {
    'title': 'Cracking the Coding Interview',
    'author': 'Gayle Laakmann McDowell',
    'url': 'https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/098478280X',
    'hasArticle': true,
    'articleUrl': 'https://leandrotk.github.io/series/algorithms-problem-solving',
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

const app = Vue.createApp(App);

app.component('book-check', {
  props: {
    read: {
      type: Boolean,
      required: true,
    },
  },
  template: `
    <span class='book-read' v-if="read">
      <i class="fa fa-check"></i>
    </span>
  `,
});

app.component('book', {
  props: {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    }
  },
  template: `
    <b>
      <a
        :href="url"
        target='_blank'
      >
        {{ title }}
      </a>
    </b>
    by {{ author }}
  `,
});

app.component('book-article', {
  props: {
    hasArticle: {
      type: Boolean,
      required: true,
    },
    articleUrl: {
      type: String,
      required: true,
    }
  },
  template: `
    <span class="medium-post" v-if="hasArticle">
      <a :href="articleUrl">
        <i class='fa fa-medium'></i>
      </a>
    </span>
  `,
});

app.mount('#app');
