import 'dotenv/config'
import linebot from 'linebot'
import fetchCourse from './commands/fetchCourse.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (event.message.type !== 'text') return

  if (event.message.text === '共通課程') {
    fetchCourse(event)
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
