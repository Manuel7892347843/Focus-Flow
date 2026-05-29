# 🚀 Deploy Focus Flow Website

Your Focus Flow app is now ready to be deployed as a shareable website! Choose your preferred deployment method below.

---

## **Option 1: Vercel (⭐ Recommended - Fastest)**

Vercel automatically builds and deploys from your GitHub repo with a unique shareable link.

### Steps:
1. **Ensure your GitHub repo is up to date:**
   ```bash
   git add .
   git commit -m "Add web deployment configuration"
   git push
   ```

2. **Go to [vercel.com](https://vercel.com) and sign up with GitHub**

3. **Click "Add New Project" → Select your Focus-Flow repository**

4. **Vercel will auto-detect your project:**
   - Build Command: `npm run build:web`
   - Output Directory: `.expo/static/web`
   - ✅ These are already configured in `vercel.json`

5. **Click "Deploy"** → Done! 🎉
   - Get your unique link instantly (e.g., `https://focus-flow-abc123.vercel.app`)
   - Share this link with anyone!

**Auto-redeploy:** Every time you push to GitHub, it automatically rebuilds and deploys.

---

## **Option 2: GitHub Pages (Free, Simple)**

### Steps:
1. **Update package.json homepage (add this line):**
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/Focus-Flow",
   ```

2. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts to package.json:**
   ```json
   "scripts": {
     ...
     "predeploy": "npm run build:web",
     "deploy": "gh-pages -d .expo/static/web"
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Select `gh-pages` branch as source
   - Your site will be live at: `https://YOUR_USERNAME.github.io/Focus-Flow`

---

## **Option 3: Netlify (Drag & Drop)**

### Steps:
1. **Build locally first:**
   ```bash
   npm run build:web
   ```

2. **Go to [netlify.com](https://netlify.com)**

3. **Drag & drop the `.expo/static/web` folder into Netlify**

4. **Get your instant shareable link!**
   - You can also connect your GitHub repo for auto-deploy

---

## **Local Testing Before Deploy**

### Test the web build locally:
```bash
npm run web
```
This starts a development server. Open http://localhost:8081 in your browser.

### Build for production:
```bash
npm run build:web
```
Output will be in `.expo/static/web/` folder.

---

## **💡 Quick Recommendation**

**Use Vercel** - it's the fastest and most reliable:
- ✅ Free tier is generous
- ✅ Auto-deploys on every push
- ✅ Instant worldwide CDN
- ✅ Custom domains supported
- ✅ One-click setup

Just commit, push to GitHub, and deploy with Vercel. Done in 5 minutes! 🎯

---

## **Troubleshooting**

### Build fails with "expo not found"
```bash
npm install
```

### Port 8081 already in use (for local testing)
```bash
PORT=3000 npm run web
```

### Need to rebuild dependencies
```bash
rm -rf node_modules package-lock.json
npm install
npm run build:web
```

---

Happy deploying! 🎯✨
