export const articles: Article[] = [
  {
    _id: '1',
    title: 'React on my mind',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
  },
  {
    _id: '2',
    title: 'Wish you React',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
  },
  {
    _id: '3',
    title: 'You gave React a bad name',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
  },
  {
    _id: '4',
    title: 'Is it React you looking for?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
  },
];

export const twitters: Twitter[] = [
  {
    _id: '1',
    title: 'Hello Roman',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    twitterImg: 'https://pbs.twimg.com/profile_images/1104491562854158336/A-NTwQhW_400x400.png',
    twitterAccount: 'https://twitter.com/hello_roman',
  },
  {
    _id: '2',
    title: 'Redux guy',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    twitterImg: 'https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg',
    twitterAccount: 'https://twitter.com/dan_abramov',
  },
  {
    _id: '3',
    title: 'React router stuff',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    twitterImg: 'https://pbs.twimg.com/profile_images/1095819845382299649/zG-2_UHS_400x400.jpg',
    twitterAccount: 'https://twitter.com/hello_roman',
  },
  {
    _id: '4',
    title: 'Super animacje!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    twitterImg: 'https://pbs.twimg.com/profile_images/1281071936605323266/wc1KRZLK_400x400.jpg',
    twitterAccount: 'https://twitter.com/hello_roman',
  },
];

export const notes: Note[] = [
  {
    _id: '1',
    title: 'Wake me up when Vue ends',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
  },
  {
    _id: '2',
    title: 'Como es An Gular?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
  },
  {
    _id: '3',
    title: 'Du bist Reactish',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
  },
  {
    _id: '4',
    title: 'Reactuj się kto moze!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
  },
];

export type Twitter = {
  _id: string;
  title: string;
  content: string;
  twitterImg: string;
  twitterAccount: string;
};

export type Article = {
  _id: string;
  title: string;
  content: string;
  articleUrl: string;
};

export type Note = {
  _id: string;
  title: string;
  content: string;
};
