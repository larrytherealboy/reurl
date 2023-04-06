# 短網址產生器
<img width="861" alt="image" src="https://user-images.githubusercontent.com/84850988/230392408-8dfb2418-b4b5-4f3d-b274-b20c240247ad.png">
<img width="819" alt="image" src="https://user-images.githubusercontent.com/84850988/230392650-da57c2f3-4ee5-4d5e-8f45-d6e9c51cf504.png">
<img width="838" alt="image" src="https://user-images.githubusercontent.com/84850988/230392519-b87cae94-0306-4457-8f6a-c95f71d9e149.png">

## 功能介紹
* 首頁畫面上有一個表單，使用者可以在表單輸入原始網址
* 在伺服器啟動期間，使用者可以在瀏覽器的網址列，輸入你提供的短網址
* 短網址輸出格式為 5 碼英數組合
* 若使用者輸入相同網址時，產生一樣的縮址
* 若使用者沒有輸入內容，就按下了送出鈕，需要防止表單送出並提示使用者

## 正在進行的優化項目
* 使用者可以按 Copy 來複製縮短後的網址

## 開始使用
1. 安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 透過終端機進入資料夾，輸入：
npm install -y
4. 設定環境變數連線 MongoDB
MONGODB_URI=mongodb+srv://<Your MongoDB Account>:<Your MongoDB Password>@cluster0.xxxx.xxxx.net/<Your MongoDB Table><?retryWrites=true&w=majority
5. 輸入以下程式碼以啟動專案：
npm run start
6. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址
Express is running on http://localhost:3000
7. 欲停止伺服器請輸入：
ctrl + c

## 開發工具
* Node.js 14.16.0
* Express 4.16.4
* Express-Handlebars 3.0.0
* Bootstrap 5.1.1
* MongoDB
* mongoose 5.9.7