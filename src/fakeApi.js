/*
 * This file contain the Fake API URL and a fake JSON for testing
 */
const API_KEY = 'DKXB-USE4-M7B1-NS0M';

export const fakeApiUrl = `https://randomapi.com/api/v718n0uw?key=${API_KEY}&results=`;

export const fakeJsonLong = {
  results: [
    {
      "type": 'E-learning',
      "duration": 3600,
      "title": "Random Photo 1",
      "subtitle": "275.00€",
      "image": `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/640/480`
    },
    {
      "type": 'E-learning',
      "duration": 2000,
      "title": "Random Photo 2",
      "subtitle": "75.00€",
      "image": `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/640/480`
    },
    {
      "type": 'E-learning',
      "duration": 1800,
      "title": "Random Photo 3",
      "subtitle": "1235.00€",
      "image": `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/640/480`
    },
    {
      "type": 'E-learning',
      "duration": 4900,
      "title": "Random Photo 4",
      "subtitle": "123.45€",
      "image": `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/640/480`
    },
    {
      "type": 'E-learning',
      "duration": 180,
      "title": "Random Photo 5",
      "subtitle": "999.00€",
      "image": `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/640/480`
    },
    {
      "type": 'E-learning',
      "duration": 3600,
      "title": "Random Photo 6",
      "subtitle": "5.00€",
      "image": `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/640/480`
    },
    {
      "type": 'E-learning',
      "duration": 3600,
      "title": "Random Photo 7",
      "subtitle": "275.00€",
      "image": `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/640/480`
    },
    {
      "type": 'E-learning',
      "duration": 3600,
      "title": "Random Photo 8",
      "subtitle": "1255.00€",
      "image": `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/640/480`
    },
    {
      "type": 'E-learning',
      "duration": 3600,
      "title": "Random Photo 9",
      "subtitle": "64.90€",
      "image": `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/640/480`
    }
  ]
}

export const fakeJsonShort = {
  results: [
    {
      "title": "Random Photo 1",
      "subtitle": "275.00€",
      "image": `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/640/480`
    },
    {
      "title": "Random Photo 2",
      "subtitle": "75.00€",
      "image": `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/640/480`
    },
    {
      "title": "Random Photo 3",
      "subtitle": "1235.00€",
      "image": `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/640/480`
    }
  ]
}