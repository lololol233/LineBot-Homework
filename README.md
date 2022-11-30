# LineBot_HomeWork

## 表演資訊查詢：基礎功能
1. 使用者選擇表演類型(音樂、舞蹈、戲劇、電影)（圖文表單）
2. 使用者選擇縣市（quick reply)
3. 機器人回傳六十天以內的表演資訊（輪播訊息）

### 可新增功能
1. 免費表演查詢
2. 購票導引
3. 確認參加後，於前一天發訊息提醒使用者(Line Notify)
4. 交通導引

### 資料位置
1. 電影：https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=8
2. 音樂：https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=1
3. 戲劇：https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=2
4. 舞蹈：https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=3

### Quick Reply教程
https://ithelp.ithome.com.tw/articles/10229687
https://ithelp.ithome.com.tw/users/20117701/ironman/2634

### 縣市查詢
1. 先把資料中的陣列切成字串
2. data[i].showInfo[0].location 用正則表達式檢查裡面有沒有縣市

