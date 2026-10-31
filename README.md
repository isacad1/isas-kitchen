# Isa's Kitchen

A Filipino recipe journal and weekly meal planner: write recipes, plan the week from them, flip through them as a recipe book, add cooking photos, and save recipes, the meal plan and the palengke list as PDFs.

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
5. In `index.html`, find `const GOOGLE_CLIENT_ID="";` and paste the Client ID between the quotes.

While the app stays in "Testing" mode only the test users you added can sign in, which is right for a personal app.

## Publishing on GitHub Pages

Repository **Settings → Pages → Build and deployment**: Source **Deploy from a branch**, branch **main**, folder **/ (root)**. The app appears at `https://isacad1.github.io/isas-kitchen/` a minute later.
