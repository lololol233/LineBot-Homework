import 'dotenv/config'
// 環境變數套件
import linebot from 'linebot'
import axios from 'axios'
import quickReply from './templates/quickReply.js'
import carousel from './templates/carousel.js'
import writejson from './utils/writejson.js'
// import { scheduleJob } from 'node-schedule'
// 自動刷新資料套件

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

const quickReplyUpdate = JSON.parse(JSON.stringify(quickReply))
const item = quickReplyUpdate.quickReply.items

bot.on('message', async (event) => {
  if (event.message.text === '我要查音樂表演') {
    item[0].action.text = '我要查北部的音樂表演'
    item[1].action.text = '我要查中部的音樂表演'
    item[2].action.text = '我要查南部的音樂表演'
    event.reply(quickReplyUpdate)
  } else if (event.message.text === '我要查電影場次') {
    item[0].action.text = '我要查北部的電影場次'
    item[1].action.text = '我要查中部的電影場次'
    item[2].action.text = '我要查南部的電影場次'
    event.reply(quickReplyUpdate)
  } else if (event.message.text === '我要查戲劇表演') {
    item[0].action.text = '我要查北部的戲劇表演'
    item[1].action.text = '我要查中部的戲劇表演'
    item[2].action.text = '我要查南部的戲劇表演'
    event.reply(quickReplyUpdate)
  } else if (event.message.text === '我要查舞蹈演出') {
    item[0].action.text = '我要查北部的舞蹈演出'
    item[1].action.text = '我要查中部的舞蹈演出'
    item[2].action.text = '我要查南部的舞蹈演出'
    event.reply(quickReplyUpdate)
  } else {
    // event.reply('請重試')
  }
})
// 地區查詢＿條件設置
bot.on('message', async (event) => {
  const bubbles = []
  if (event.message.text === '我要查北部的音樂表演') {
    const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=1')
    // const north = /臺北+/gi
    for (let i = 0; i < 20; i++) {
      const loco = data[i].showInfo[0].location
      // console.log(loco)
      if (loco.includes('臺北') || loco.includes('台北') || loco.includes('新北') || loco.includes('桃園') || loco.includes('基隆') || loco.includes('宜蘭')) {
        const carouselFlex = JSON.parse(JSON.stringify(carousel))
        carouselFlex.body.contents[0].text = data[i].title
        carouselFlex.footer.contents[0].action.label = data[i].showInfo[0].time
        carouselFlex.footer.contents[1].action.label = data[i].showInfo[0].locationName
        bubbles.push(carouselFlex)
      }
    }
    const reply = {
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: bubbles
      }
    }
    event.reply(reply)

    if (process.env.WRITEJSON) {
      writejson(reply, 'output')
    }
    console.log(event.reply.contents)
  } else if (event.message.text === '我要查中部的音樂表演') {
    const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=1')
    // const north = /臺北+/gi
    for (let i = 0; i < 30; i++) {
      const loco = data[i].showInfo[0].location
      // console.log(loco)
      if (loco.includes('臺中') || loco.includes('彰化') || loco.includes('嘉義') || loco.includes('苗栗') || loco.includes('雲林') || loco.includes('南投')) {
        const carouselFlex = JSON.parse(JSON.stringify(carousel))
        carouselFlex.body.contents[0].text = data[i].title
        carouselFlex.footer.contents[0].action.label = data[i].showInfo[0].time
        carouselFlex.footer.contents[1].action.label = data[i].showInfo[0].locationName
        bubbles.push(carouselFlex)
      }
    }
    const reply = {
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: bubbles
      }
    }
    event.reply(reply)

    if (process.env.WRITEJSON) {
      writejson(reply, 'output')
    }
    console.log(event.reply.contents)
  } else if (event.message.text === '我要查南部的音樂表演') {
    const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=1')
    for (let i = 0; i < 20; i++) {
      const loco = data[i].showInfo[0].location
      // console.log(loco)
      if (loco.includes('臺南') || loco.includes('高雄') || loco.includes('屏東')) {
        const carouselFlex = JSON.parse(JSON.stringify(carousel))
        carouselFlex.body.contents[0].text = data[i].title
        carouselFlex.footer.contents[0].action.label = data[i].showInfo[0].time
        carouselFlex.footer.contents[1].action.label = data[i].showInfo[0].locationName
        bubbles.push(carouselFlex)
      }
    }
    const reply = {
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: bubbles
      }
    }
    event.reply(reply)

    if (process.env.WRITEJSON) {
      writejson(reply, 'output')
    }
    console.log(event.reply.contents)
  } else if (event.message.text === '我要查北部的舞蹈演出') {
    const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=3')
    // const north = /臺北+/gi
    for (let i = 0; i < 20; i++) {
      const loco = data[i].showInfo[0].location
      // console.log(loco)
      if (loco.includes('臺北') || loco.includes('台北') || loco.includes('新北') || loco.includes('桃園') || loco.includes('基隆') || loco.includes('宜蘭')) {
        const carouselFlex = JSON.parse(JSON.stringify(carousel))
        carouselFlex.body.contents[0].text = data[i].title
        carouselFlex.footer.contents[0].action.label = data[i].showInfo[0].time
        carouselFlex.footer.contents[1].action.label = data[i].showInfo[0].locationName
        bubbles.push(carouselFlex)
      }
    }
    const reply = {
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: bubbles
      }
    }
    event.reply(reply)

    if (process.env.WRITEJSON) {
      writejson(reply, 'output')
    }
    console.log(event.reply.contents)
  } else if (event.message.text === '我要查中部的舞蹈演出') {
    const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=3')
    // const north = /臺北+/gi
    for (let i = 0; i < 20; i++) {
      const loco = data[i].showInfo[0].location
      // console.log(loco)
      if (loco.includes('臺中') || loco.includes('彰化') || loco.includes('嘉義') || loco.includes('苗栗') || loco.includes('雲林') || loco.includes('南投')) {
        const carouselFlex = JSON.parse(JSON.stringify(carousel))
        carouselFlex.body.contents[0].text = data[i].title
        carouselFlex.footer.contents[0].action.label = data[i].showInfo[0].time
        carouselFlex.footer.contents[1].action.label = data[i].showInfo[0].locationName
        bubbles.push(carouselFlex)
      }
    }
    const reply = {
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: bubbles
      }
    }
    event.reply(reply)

    if (process.env.WRITEJSON) {
      writejson(reply, 'output')
    }
    console.log(event.reply.contents)
  } else if (event.message.text === '我要查南部的舞蹈演出') {
    const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=3')
    for (let i = 0; i < 20; i++) {
      const loco = data[i].showInfo[0].location
      // console.log(loco)
      if (loco.includes('臺南') || loco.includes('高雄') || loco.includes('屏東')) {
        const carouselFlex = JSON.parse(JSON.stringify(carousel))
        carouselFlex.body.contents[0].text = data[i].title
        carouselFlex.footer.contents[0].action.label = data[i].showInfo[0].time
        carouselFlex.footer.contents[1].action.label = data[i].showInfo[0].locationName
        bubbles.push(carouselFlex)
      }
    }
    const reply = {
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: bubbles
      }
    }
    event.reply(reply)

    if (process.env.WRITEJSON) {
      writejson(reply, 'output')
    }
    console.log(event.reply.contents)
  } else if (event.message.text === '我要查北部的戲劇表演') {
    const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=2')
    // const north = /臺北+/gi
    for (let i = 0; i < 20; i++) {
      const loco = data[i].showInfo[0].location
      // console.log(loco)
      if (loco.includes('臺北') || loco.includes('台北') || loco.includes('新北') || loco.includes('桃園') || loco.includes('基隆') || loco.includes('宜蘭')) {
        const carouselFlex = JSON.parse(JSON.stringify(carousel))
        carouselFlex.body.contents[0].text = data[i].title
        carouselFlex.footer.contents[0].action.label = data[i].showInfo[0].time
        carouselFlex.footer.contents[1].action.label = data[i].showInfo[0].locationName
        bubbles.push(carouselFlex)
      }
    }
    const reply = {
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: bubbles
      }
    }
    event.reply(reply)

    if (process.env.WRITEJSON) {
      writejson(reply, 'output')
    }
    console.log(event.reply.contents)
  } else if (event.message.text === '我要查中部的戲劇表演') {
    const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=2')
    // const north = /臺北+/gi
    for (let i = 0; i < 20; i++) {
      const loco = data[i].showInfo[0].location
      // console.log(loco)
      if (loco.includes('臺中') || loco.includes('彰化') || loco.includes('嘉義') || loco.includes('苗栗') || loco.includes('雲林') || loco.includes('南投')) {
        const carouselFlex = JSON.parse(JSON.stringify(carousel))
        carouselFlex.body.contents[0].text = data[i].title
        carouselFlex.footer.contents[0].action.label = data[i].showInfo[0].time
        carouselFlex.footer.contents[1].action.label = data[i].showInfo[0].locationName
        bubbles.push(carouselFlex)
      }
    }
    const reply = {
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: bubbles
      }
    }
    event.reply(reply)

    if (process.env.WRITEJSON) {
      writejson(reply, 'output')
    }
    console.log(event.reply.contents)
  } else if (event.message.text === '我要查南部的戲劇表演') {
    const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=2')
    for (let i = 0; i < 20; i++) {
      const loco = data[i].showInfo[0].location
      // console.log(loco)
      if (loco.includes('臺南') || loco.includes('高雄') || loco.includes('屏東')) {
        const carouselFlex = JSON.parse(JSON.stringify(carousel))
        carouselFlex.body.contents[0].text = data[i].title
        carouselFlex.footer.contents[0].action.label = data[i].showInfo[0].time
        carouselFlex.footer.contents[1].action.label = data[i].showInfo[0].locationName
        bubbles.push(carouselFlex)
      }
    }
    const reply = {
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: bubbles
      }
    }
    event.reply(reply)

    if (process.env.WRITEJSON) {
      writejson(reply, 'output')
    }
    console.log(event.reply.contents)
  } else if (event.message.text === '我要查北部的電影場次') {
    const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=8')
    // const north = /臺北+/gi
    for (let i = 0; i < 20; i++) {
      const loco = data[i].showInfo[0].location
      // console.log(loco)
      if (loco.includes('臺北') || loco.includes('台北') || loco.includes('新北') || loco.includes('桃園') || loco.includes('基隆') || loco.includes('宜蘭')) {
        const carouselFlex = JSON.parse(JSON.stringify(carousel))
        carouselFlex.body.contents[0].text = data[i].title
        carouselFlex.footer.contents[0].action.label = data[i].showInfo[0].time
        carouselFlex.footer.contents[1].action.label = data[i].showInfo[0].locationName
        bubbles.push(carouselFlex)
      }
    }
    const reply = {
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: bubbles
      }
    }
    event.reply(reply)

    if (process.env.WRITEJSON) {
      writejson(reply, 'output')
    }
    console.log(event.reply.contents)
  } else if (event.message.text === '我要查中部的電影場次') {
    const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=8')
    // const north = /臺北+/gi
    for (let i = 0; i < 20; i++) {
      const loco = data[i].showInfo[0].location
      // console.log(loco)
      if (loco.includes('臺中') || loco.includes('彰化') || loco.includes('嘉義') || loco.includes('苗栗') || loco.includes('雲林') || loco.includes('南投')) {
        const carouselFlex = JSON.parse(JSON.stringify(carousel))
        carouselFlex.body.contents[0].text = data[i].title
        carouselFlex.footer.contents[0].action.label = data[i].showInfo[0].time
        carouselFlex.footer.contents[1].action.label = data[i].showInfo[0].locationName
        bubbles.push(carouselFlex)
      }
    }
    const reply = {
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: bubbles
      }
    }
    event.reply(reply)

    if (process.env.WRITEJSON) {
      writejson(reply, 'output')
    }
    console.log(event.reply.contents)
  } else if (event.message.text === '我要查南部的電影場次') {
    const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=8')
    for (let i = 0; i < 20; i++) {
      const loco = data[i].showInfo[0].location
      // console.log(loco)
      if (loco.includes('臺南') || loco.includes('高雄') || loco.includes('屏東')) {
        const carouselFlex = JSON.parse(JSON.stringify(carousel))
        carouselFlex.body.contents[0].text = data[i].title
        carouselFlex.footer.contents[0].action.label = data[i].showInfo[0].time
        carouselFlex.footer.contents[1].action.label = data[i].showInfo[0].locationName
        bubbles.push(carouselFlex)
      }
    }
    const reply = {
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: bubbles
      }
    }
    event.reply(reply)

    if (process.env.WRITEJSON) {
      writejson(reply, 'output')
    }
    console.log(event.reply.contents)
  }
})
bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
