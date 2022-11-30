export default {
  type: 'text',
  text: '要查詢哪個縣市的表演呢？',
  quickReply: {
    items: [
      {
        type: 'action',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/2446/2446068.png',
        action: {
          type: 'message',
          label: '北部',
          text: '我要查詢北部的表演'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Button_Icon_Yellow.svg/1200px-Button_Icon_Yellow.svg.png',
        action: {
          type: 'message',
          label: '中部',
          text: '我要查詢中部的表演'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://image.shutterstock.com/image-vector/south-icon-flat-style-isolated-260nw-424030153.jpg',
        action: {
          type: 'message',
          label: '南部',
          text: '我要查詢南部的表演'
        }
      },
      {
        type: 'action',
        action: {
          type: 'location',
          label: '選擇地點'
        }
      }
    ]
  }
}
