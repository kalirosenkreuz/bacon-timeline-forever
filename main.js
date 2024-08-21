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
const tweetText = ['End of @LittleCaesars Bacon Timeline. Time to enjoy the real thing at a location nearest you.','Inch forty-one of 3 ½ feet of bacon.','Inch forty-one of 3 ½ feet of bacon.','Inch thirty-nine of Little Caesars Bacon Timeline.','Inch thirty-eight.','Inch thirty-seven of 3 ½ feet.','Still the same strip of bacon we use on our pizza. Almost there.','Still the same strip of bacon we use on our pizza. Almost there.','Inch thirty-four of 3 ½ feet.','Official Little C’s thirty-third inch.','Inch thirty-two of 3 ½ feet.','Inch thirty-one of 3 ½ feet of bacon.','Inch thirty-one of 3 ½ feet of bacon.','Inch thirty-one of 3 ½ feet of bacon.','Inch twenty-eight of 3 ½ feet.','Inch twenty-seven on your timeline courtesy of Little Caesars.','Inch twenty-six.','Inch twenty-five of 3 ½ feet.','Inch twenty-five of 3 ½ feet.','Inch twenty-three.','This is inch twenty-two.','The @LittleCaesars Bacon Timeline halfway point.','Inch twenty of 3 ½ feet.','Here’s inch nineteen...','Inch eighteen.','We wrap our pizza in a pretty long strip of bacon huh?','You guessed it, inch sixteen.','Inch fifteen...','Inch fourteen ofa Little Caesars strip of bacon.','Inch thirteen of 3 ½ feet.','Only 2 ½ feet of Little Caesars bacon to go.','Inch eleven.','Inch ten.','Inch nine of Little Caesars Bacon Timeline.','Inch eight...','Inch seven of 3 ½ feet.','Keep scrolling. We wrap our pizza in a lot of bacon.','Inch five of 3 ½ feet of bacon.','Fourth inch of a @LittleCaesars 3 ½ foot strip of bacon.','Inch three of 3 ½ feet.','Inch two of 3 ½ feet of bacon.','Just wrapped my timeline in 3 ½ feet of bacon.']

async function start() {
  var mediaId = ""

  for await (const x of Array(42).keys()) {
    mediaId = await userClient.v1.uploadMedia('./bacon/' + x.toString() + '.png')
    await userClient.v2.tweet(tweetText[x], {media: { media_ids: [mediaId] }})
  }
}

start()

// much love from yfywxz
