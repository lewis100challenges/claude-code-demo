# 🚀 如何將代碼推送到 GitHub

## 方法一：使用 GitHub 網頁介面（最簡單）

### 步驟：

1. **登入 GitHub**
   - 訪問 https://github.com/lewis100challenges

2. **創建新 Repository**
   - 點擊右上角的 "+" 圖標
   - 選擇 "New repository"
   - Repository 名稱：`claude-code-demo` 或 `user-service-demo`
   - 描述：`Demo project for Claude Code Web features`
   - 選擇 **Public** 或 **Private**（建議 Public 以便演示）
   - ✅ **不要** 勾選 "Add a README file"（我們已經有了）
   - 點擊 "Create repository"

3. **上傳文件**
   - 在新創建的 repo 頁面，點擊 "uploading an existing file"
   - 將所有文件拖拽到上傳區域：
     ```
     service.go
     go.mod
     README.md
     .gitignore
     frontend/index.html
     frontend/signup.ts
     ```
   - 在底部填寫 commit message：`Initial commit - User registration demo`
   - 點擊 "Commit changes"

---

## 方法二：使用 Git 命令行（推薦）

### 前置要求：
- 安裝 Git
- 配置 GitHub 認證（SSH 或 Personal Access Token）

### 步驟：

```bash
# 1. 進入專案目錄
cd /path/to/user-service

# 2. 初始化 Git repository
git init

# 3. 添加所有文件
git add .

# 4. 創建第一次提交
git commit -m "Initial commit - User registration demo for Claude Code Web"

# 5. 在 GitHub 上創建 repository
# 訪問 https://github.com/new
# 創建名為 claude-code-demo 的 repo（不要初始化任何文件）

# 6. 連接到遠程 repository
git remote add origin https://github.com/lewis100challenges/claude-code-demo.git

# 7. 推送代碼
git branch -M main
git push -u origin main
```

### 如果遇到認證問題：

#### 選項 A: 使用 Personal Access Token (推薦)

1. 前往 GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 生成新 token，勾選 `repo` 權限
3. 推送時使用：
   ```bash
   git push https://YOUR_TOKEN@github.com/lewis100challenges/claude-code-demo.git main
   ```

#### 選項 B: 使用 SSH

1. 生成 SSH 密鑰：
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
2. 添加到 GitHub: Settings → SSH and GPG keys → New SSH key
3. 使用 SSH URL：
   ```bash
   git remote set-url origin git@github.com:lewis100challenges/claude-code-demo.git
   git push -u origin main
   ```

---

## 方法三：使用 GitHub Desktop（圖形介面）

1. 下載並安裝 [GitHub Desktop](https://desktop.github.com/)
2. 登入你的 GitHub 帳號
3. 點擊 "File" → "Add local repository"
4. 選擇 `user-service` 文件夾
5. 點擊 "Publish repository"
6. 填寫 repository 名稱和描述
7. 點擊 "Publish repository"

---

## ✅ 驗證推送成功

推送完成後，訪問：
```
https://github.com/lewis100challenges/claude-code-demo
```

你應該能看到：
- ✅ README.md 顯示在頁面底部
- ✅ 所有文件都在 repository 中
- ✅ 文件結構清晰可見

---

## 🎯 推送後的下一步

### 1. 在 Claude Code Web 中連接 Repository

1. 訪問 https://claude.ai/code
2. 點擊 "Connect GitHub"（如果還沒連接）
3. 授權 Claude 訪問你的 repositories
4. 選擇 `lewis100challenges/claude-code-demo`
5. 開始你的演示！

### 2. 測試 Prompt

使用以下 prompt 開始演示：

```
為這個用戶註冊系統添加完整的輸入驗證：
1. 前端：驗證用戶名（3-20字符）、Email格式、密碼長度（至少8字符）
2. 後端：添加相同的驗證邏輯
3. 同時在前端和後端都要驗證密碼強度（必須包含大小寫字母和數字）
```

---

## 🆘 常見問題

### Q: 推送時要求輸入用戶名和密碼？
A: GitHub 已經停止支持密碼認證，請使用 Personal Access Token 或 SSH。

### Q: 顯示 "Permission denied"？
A: 確保你有該 repository 的寫入權限，或者檢查你的 SSH/Token 配置。

### Q: 文件太大無法上傳？
A: 確保沒有包含不必要的大文件（如編譯產物、node_modules 等），`.gitignore` 應該已經排除它們。

### Q: 想要修改 repository 名稱？
A: 在 GitHub repository 頁面，進入 Settings → 在頂部的 Repository name 處修改。

---

## 📚 相關資源

- [GitHub 快速入門指南](https://docs.github.com/en/get-started/quickstart)
- [Git 基礎教學](https://git-scm.com/book/zh-tw/v2)
- [Claude Code 文檔](https://docs.claude.com)

---

**需要幫助？** 如果在推送過程中遇到問題，可以隨時詢問 Claude！
