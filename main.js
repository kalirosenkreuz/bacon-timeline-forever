const { TwitterApi } = require('twitter-api-v2');

// twitter fucking sucks
// i found this out midway through making it so it uses both the v1 and v2 api
// also im very high
// you'll have to add your own credentials

// v1 api
const userClient = new TwitterApi({
  appKey: '',
  appSecret: '',
  accessToken: '',
  accessSecret: '',
});

// v2 api
const tweetClient = new TwitterApi('')
async function start() {
  var mediaId = ""

  for await (const x of Array(42).keys()) {
    mediaId = await userClient.v1.uploadMedia('./bacon/' + x.toString() + '.png')
    await tweetClient.v2.tweet(x.toString(), {media: { media_ids: [mediaId] }})
  }
}

start()

// much love from yfywxz
