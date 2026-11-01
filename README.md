# Isa's Kitchen

A Filipino recipe journal and weekly meal planner: write recipes, plan the week from them, flip through them as a recipe book, add cooking photos, and save recipes, the meal plan and the grocery list as PDFs.

## How it saves

- **Google Drive (recommended):** tap **Connect Google Drive** in the app. Recipes and plans are saved to `Isa's Kitchen/isas-kitchen-data.json` in your Drive, and photos go into `Isa's Kitchen/Photos`. Sign in on your phone and computer to use the same recipes on both.
- **This device only:** until you connect Drive, everything is kept in the browser you're using.
- **Backups:** at the bottom of the Recipes tab, use **Save a backup file** and **Import a backup** to move recipes between devices or versions.

The app can only see files it created in your Drive, nothing else.

## One-time Google setup

The app needs a free Google sign-in key ("OAuth client ID").

1. Go to <https://console.cloud.google.com/> and create a project called **Isa's Kitchen**.
2. Open **APIs & Services → Library**, search for **Google Drive API**, and click **Enable**.
3. Open **Google Auth Platform** (or **OAuth consent screen**):
   - App name: Isa's Kitchen. Support and developer email: your Gmail.
   - Audience: **External**.
   - Under **Audience → Test users**, add your Gmail (and anyone else who will use it).
4. Open **Clients** (or **Credentials → Create credentials → OAuth client ID**):
   - Application type: **Web application**
   - Authorized JavaScript origins: `https://isacad1.github.io`
   - Click **Create** and copy the **Client ID** (it ends in `.apps.googleusercontent.com`).
5. In `config.js`, paste the Client ID between the quotes after `googleClientId:`.

While the app stays in "Testing" mode only the test users you added can sign in, which is right for a personal app.

## Publishing on GitHub Pages

Repository **Settings → Pages → Build and deployment**: Source **Deploy from a branch**, branch **main**, folder **/ (root)**. The app appears at `https://isacad1.github.io/isas-kitchen/` a minute later.

## What each file does

| File | What it's for |
| --- | --- |
| `index.html` | The app itself |
| `config.js` | Settings: your Google sign-in key |
| `manifest.webmanifest` | Lets phones and computers install Isa's Kitchen as an app, with its own name and icon |
| `icon.svg`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | The app icon in the sizes browsers, Android and iPhone ask for |
| `sw.js` | Offline helper: keeps a copy of the app so it opens without internet |
| `README.md` | This guide |

## Installing it

- **iPhone:** open the site in Safari → Share → Add to Home Screen.
- **Android:** open it in Chrome → ⋮ → Install app.
- **Mac:** Safari → File → Add to Dock, or Chrome → ⋮ → Cast, save, and share → Install page as app.
- **Windows:** Chrome or Edge → Install this site as an app, then pin it to the taskbar.
