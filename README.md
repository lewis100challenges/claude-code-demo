# User Registration Demo - Claude Code Web 演示專案

這是一個簡單的用戶註冊系統，專門用於演示 **Claude Code Web** 的功能。

## 📋 專案結構

```
user-service/
├── service.go              # Go 後端 API
├── go.mod                  # Go 模組配置
├── frontend/
│   ├── index.html         # 註冊表單頁面
│   ├── signup.ts          # TypeScript 前端邏輯
│   └── signup.js          # 編譯後的 JavaScript (待生成)
└── README.md              # 本文件
```

## 🎯 專案特點

這個專案**刻意保留了一些待完成的功能**，讓你可以使用 Claude Code Web 來完成它們：

### 待完成功能 (Perfect for Claude Code Demo!)

1. **輸入驗證** ⚠️
   - 前端：用戶名、Email、密碼格式驗證
   - 後端：請求數據驗證

2. **密碼強度檢查** 🔐
   - 最少 8 個字符
   - 包含大小寫字母
   - 包含數字和特殊字符

3. **錯誤處理優化** 🛠️
   - 更友好的錯誤提示
   - 前端表單驗證提示

4. **（進階）添加快取功能** 🚀
   - Redis 或內存快取
   - 用戶查詢優化

## 🚀 快速開始

### 1. 啟動後端服務

```bash
cd user-service
go mod init user-service
go run service.go
```

服務將運行在 `http://localhost:8080`

### 2. 打開前端頁面

直接在瀏覽器中打開 `frontend/index.html`

或者使用簡單的 HTTP 伺服器：

```bash
cd frontend
python3 -m http.server 3000
```

然後訪問 `http://localhost:3000`

## 🎬 使用 Claude Code Web 演示

### 演示場景 1: 添加輸入驗證

**Prompt 範例:**
```
為這個用戶註冊系統添加完整的輸入驗證功能：
1. 前端驗證：用戶名（3-20字符）、Email格式、密碼（至少8字符）
2. 後端驗證：確保所有字段都存在且格式正確
3. 同時檢查前端和後端的密碼強度（包含大小寫、數字）
```

### 演示場景 2: 優化密碼安全性

**Prompt 範例:**
```
請優化密碼處理的安全性：
1. 添加密碼強度驗證器（大小寫、數字、特殊字符、最少8字符）
2. 在前端顯示密碼強度指示器
3. 後端使用 bcrypt 加密存儲密碼
```

### 演示場景 3: 添加快取系統 (進階)

**Prompt 範例:**
```
為這個應用添加快取功能，提升性能：
- 快取級別：API 回應快取
- 目標：減少重複查詢
- 技術：內存快取（in-memory cache）
- 快取用戶列表 API 的響應，TTL 設為 5 分鐘
```

## 📝 API 端點

### POST /api/signup
註冊新用戶

**請求範例:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "MyPassword123"
}
```

**響應範例:**
```json
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com"
}
```

### GET /api/users
獲取所有用戶（演示用）

## 🎯 推薦的演示流程

1. **展示當前代碼** - 指出缺少驗證功能
2. **使用 Claude Code Web** - 在 claude.ai/code 上連接此 repo
3. **提交改進 Prompt** - 讓 Claude 添加驗證功能
4. **查看實時進度** - 觀察 Claude 如何分析和修改代碼
5. **測試改進結果** - 使用 "Open in CLI" 功能在本地測試
6. **（可選）提交 PR** - 演示如何將改進推送回 GitHub

## 💡 提示

- 這個專案故意簡化，沒有使用數據庫（用內存數組代替）
- 所有的 TODO 註釋都是給 Claude Code 的提示
- 你可以同時在多個分支上讓 Claude 處理不同的功能

## 📚 相關資源

- [Claude Code 文檔](https://docs.claude.com)
- [Claude Code Web 訪問](https://claude.ai/code)

---

**建議演示時間:** 5-10 分鐘  
**難度等級:** 初級到中級  
**最適合展示:** 輸入驗證、代碼重構、功能添加
