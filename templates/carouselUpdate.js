import 'dotenv/config'
// 環境變數套件
import axios from 'axios'
import carousel from './templates/carousel.js'

const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=3')
const carouselFlex = JSON.parse(JSON.stringify(carousel))
for (let i = 0; i < 2; i++) {
  carouselFlex.contents[i].body.contents[0].text = data[i].title
  carouselFlex.contents[i].footer.contents[0].action.label = data[i].showInfo[0].time
  carouselFlex.contents[i].footer.contents[1].action.label = data[i].showInfo[0].locationName
  // carouselFlex.contents[i].footer.contents[2].action.uri = data[5].webSales
}
