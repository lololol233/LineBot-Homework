export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://i.pinimg.com/originals/66/f4/90/66f490f94e3bc95179c4bec6716ecb8e.jpg',
    size: 'full',
    aspectRatio: '20:13',
    aspectMode: 'cover',
    action: {
      type: 'uri',
      uri: 'https://event.moc.gov.tw/sp.asp?xdurl=HySearchG22016/SearchResult.asp&ctNode=676&mp=1'
    },
    backgroundColor: '#6DD5FA'
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'Menu',
        weight: 'bold',
        size: 'xl',
        margin: 'md',
        flex: 5,
        wrap: true
      },
      {
        type: 'text',
        text: 'view more detail',
        margin: 'md'
      },
      {
        type: 'spacer'
      }
    ],
    action: {
      type: 'uri',
      label: 'View detail',
      uri: 'http://linecorp.com/',
      altUri: {
        desktop: 'http://example.com/page/123'
      }
    }
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    spacing: 'sm',
    contents: [
      {
        type: 'button',
        action: {
          type: 'postback',
          label: 'Buy',
          data: 'action=buy&itemid=123'
        },
        height: 'sm'
      },
      {
        type: 'button',
        action: {
          type: 'message',
          label: 'it 邦幫忙鐵人賽',
          text: 'it 邦幫忙鐵人賽'
        },
        height: 'sm'
      },
      {
        type: 'button',
        action: {
          type: 'uri',
          label: 'View detail',
          uri: 'https://ithelp.ithome.com.tw/2020ironman'
        },
        height: 'sm'
      }
    ],
    flex: 0
  },
  styles: {
    footer: {
      separator: true
    }
  }
}
