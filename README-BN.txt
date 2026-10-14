ANIMEVERSE CMS STARTER — Bangla guide

WHAT IS INCLUDED
- index.html: your original ANIMEVERSE HTML site, updated to load articles from data/articles.json
- data/articles.json: current sample articles, editable from Pages CMS
- .pages.yml: Pages CMS configuration
- images/: folder for images uploaded through Pages CMS

IMPORTANT
The existing Admin tab inside the HTML is a demo/mock interface. It does not securely save posts. Use Pages CMS (hosted at https://app.pagescms.org/) to edit data/articles.json. Do not enter passwords or secrets into this static site.

STEPS
1. Unzip this folder on your computer.
2. Open https://github.com/ and create a new repository named animeverse. Keep the repository private if you prefer.
3. Upload all contents INSIDE this folder (index.html, .pages.yml, data folder, images folder) to the repository root. Do not upload the outer folder as an extra nested level.
4. In Netlify, open your existing animeversewrold project > Project configuration > Build & deploy > Continuous deployment > Repository > Link repository. Select the GitHub repo. For a plain HTML site, build command can be blank and publish directory is the repository root (often shown as .).
5. Wait for the first deploy and test the website.
6. Open https://app.pagescms.org/ and sign in with GitHub. Install/authorize Pages CMS for the repository.
7. If asked, create/confirm .pages.yml at repository root (this package already includes it). Open the Anime Articles collection and edit/add an article.
8. Keep category values as news, manga, or reviews for the existing filters. Set id to a unique lowercase slug such as my-new-anime-news. Set image to an image URL or upload a file using the CMS media control.
9. Save/commit changes. Netlify should redeploy from GitHub. Refresh the live site after deployment finishes.

IF NETLIFY REPO LINK OPTION IS MISSING
Do not overwrite your production site yet. First create the GitHub repository and upload the files, then in Netlify use Project configuration > Build & deploy > Continuous deployment > Repository > Link repository. Menu wording can vary.

NOTE
This is a static site. The Pages CMS dashboard is hosted at app.pagescms.org, not automatically at your domain /admin. Adding a secure on-domain login requires a separate authentication/backend setup.
