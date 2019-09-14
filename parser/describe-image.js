const request = require('request');

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = '';

const uriBase =
  'https://eastus.api.cognitive.microsoft.com/vision/v2.0/describe';

const imageUrl = 'https://images.pexels.com/photos/2168832/pexels-photo-2168832.jpeg';

// Request parameters.
const params = {
  'language': 'en'
  // 'detectOrientation': 'true',
};

// const options = {
//   uri: uriBase,
//   qs: params,
//   body: '{"url": ' + '"' + imageUrl + '"}',
//   headers: {
//     // 'Content-Type': 'application/json',
//     'Ocp-Apim-Subscription-Key': subscriptionKey
//   }
// };

const options = {
    url: imageUrl,

    headers: {

        'Ocp-Apim-Subscription-Key': subscriptionKey

    }

}

request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
//   let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');

  console.log(response.body);

});