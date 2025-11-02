# 🚀 快速開始指南 - Claude Code Web 演示專案

## 📦 你得到了什麼？

一個完整的演示專案，包含：
- ✅ Go 語言後端 API（用戶註冊服務）
- ✅ TypeScript/HTML 前端（註冊表單）
- ✅ 刻意保留的待完成功能（用於演示）
- ✅ 完整的演示指南和 Prompts
- ✅ GitHub 推送教學

## ⚡ 三步開始

### 第 1 步：下載並解壓縮

下載 `claude-code-demo.tar.gz`，然後：

```bash
# 解壓縮
tar -xzf claude-code-demo.tar.gz -C claude-code-demo
cd claude-code-demo

# 查看文件
ls -la
```

你會看到：
```
├── service.go           # Go 後端
├── go.mod              # Go 配置
├── frontend/
│   ├── index.html      # 註冊頁面
│   └── signup.ts       # 前端邏輯
├── README.md           # 專案說明
├── DEMO_GUIDE.md       # 📖 完整演示指南
├── GITHUB_PUSH_GUIDE.md # GitHub 推送教學
└── .gitignore
```

### 第 2 步：推送到 GitHub

**選項 A - 網頁介面（最簡單）：**
1. 訪問 https://github.com/lewis100challenges
2. 點擊 "New repository"
3. 命名為 `claude-code-demo`
4. 創建後，點擊 "uploading an existing file"
5. 拖拽所有文件上傳

**選項 B - 命令行：**
```bash
git init
git add .
git commit -m "Initial commit - Claude Code Web demo"
git remote add origin https://github.com/lewis100challenges/claude-code-demo.git
git push -u origin main
```

詳細步驟請看 `GITHUB_PUSH_GUIDE.md`

### 第 3 步：開始演示

1. **訪問** https://claude.ai/code
2. **連接** GitHub 帳號（如果還沒連接）
3. **選擇** `lewis100challenges/claude-code-demo` repository
4. **使用下面的 Prompt 開始！**

---

## 🎯 推薦的演示 Prompts

### Prompt 1: 添加輸入驗證（必選）✨

```
為這個用戶註冊系統添加完整的輸入驗證功能：

1. 前端驗證（signup.ts）：
   - 用戶名：3-20 個字符，只能包含字母、數字和下劃線
   - Email：必須是有效的 email 格式
   - 密碼：至少 8 個字符

2. 後端驗證（service.go）：
   - 添加相同的驗證邏輯
   - 確保所有必填字段都存在
   - 返回清晰的錯誤訊息

3. 同時在前端和後端都添加密碼強度驗證：
   - 必須包含至少一個大寫字母
   - 必須包含至少一個小寫字母
   - 必須包含至少一個數字
```

### Prompt 2: 添加密碼強度指示器（推薦）

```
很好！現在請添加一個視覺化的密碼強度指示器：

1. 在 HTML 中添加一個進度條元素
2. 在 TypeScript 中實現密碼強度計算邏輯
3. 根據密碼強度顯示不同顏色：
   - 弱：紅色
   - 中等：黃色
   - 強：綠色
4. 添加相應的 CSS 樣式，讓指示器美觀好用
```

### Prompt 3: 添加錯誤提示優化（可選）

```
優化錯誤處理和用戶體驗：

1. 在前端添加即時表單驗證，當用戶輸入時即時顯示錯誤
2. 為每個輸入欄位添加錯誤提示文字
3. 錯誤時給輸入框添加紅色邊框
4. 成功時顯示綠色勾選標記
5. 使用友好的中文錯誤訊息
```

### Prompt 4: 添加快取（進階演示）

```
我想為這個應用添加快取功能來提升性能。
```

Claude 會詢問細節，然後你回答：
```
- 快取層級：API 回應快取
- 目標：減少重複查詢，提升回應速度
- 技術：內存快取（in-memory cache）
- 目標區域：用戶列表查詢（GET /api/users）
- TTL：5 分鐘
```

---

## 🎬 演示流程（5 分鐘版本）

1. **開場** (30秒)
   - 介紹專案和 Claude Code Web
   - 展示 GitHub repository

2. **連接 Repository** (30秒)
   - 在 claude.ai/code 選擇 repo
   - 展示雲端環境建立

3. **執行主要任務** (2分鐘)
   - 輸入 Prompt 1（輸入驗證）
   - 觀察 Claude 實時工作
   - 查看修改摘要

4. **展示 "Open in CLI"** (1分鐘)
   - 點擊按鈕獲取命令
   - 在終端執行命令
   - 展示本地同步結果

5. **額外演示** (1分鐘)
   - 繼續對話（Prompt 2）
   - 展示多輪互動能力

---

## 📚 詳細文檔

- **`README.md`** - 專案概述和 API 說明
- **`DEMO_GUIDE.md`** - 📖 **完整的 10 分鐘演示指南**（含話術）
- **`GITHUB_PUSH_GUIDE.md`** - GitHub 推送詳細步驟

---

## 🎯 演示重點

演示時務必強調：

1. **☁️ 雲端執行** - 不需要本地開發環境
2. **👁️ 實時進度** - 可以看到每一步操作
3. **🧠 智能理解** - 理解整個代碼庫上下文
4. **🔄 無縫同步** - "Open in CLI" 一鍵同步到本地
5. **💬 互動式** - 可以多輪對話逐步完善

---

## 💡 專業提示

### 演示成功的秘訣：
- ✅ 提前測試所有 Prompts
- ✅ 保持演示簡潔（5-10 分鐘最佳）
- ✅ 準備好回答常見問題
- ✅ 強調與其他工具的區別
- ✅ 展示實際工作流程場景

### 常見問答：
**Q: 和 GitHub Copilot 有什麼不同？**  
A: Copilot 是代碼補全，Claude Code 是完整的代理開發者，能自主完成複雜任務。

**Q: 支援哪些語言？**  
A: 所有主流語言：Python, JS/TS, Go, Java, Rust 等等。

**Q: 需要付費嗎？**  
A: 目前對 Claude Pro 和 Team 用戶開放，訪問 claude.ai/code 了解詳情。

---

## 🆘 需要幫助？

如果遇到問題：

1. **推送失敗** → 查看 `GITHUB_PUSH_GUIDE.md` 的故障排除部分
2. **Claude 連接問題** → 確認 GitHub 授權已完成
3. **演示不確定** → 查看 `DEMO_GUIDE.md` 獲取詳細指導

---

## 🌟 準備好了嗎？

跟著這個清單檢查：

- [ ] 文件已下載並解壓縮
- [ ] 代碼已推送到 GitHub
- [ ] GitHub 帳號已連接到 Claude
- [ ] 已訪問 claude.ai/code 並選擇 repository
- [ ] 已準備好 Prompts
- [ ] 已閱讀 `DEMO_GUIDE.md`（推薦）

**一切就緒？開始你的精彩演示吧！🚀**

---

**記住：** 這不只是一個技術演示，更是展示 AI 如何改變編碼工作流程的機會！

祝你演示成功！有問題隨時找 Claude 幫忙 😊
