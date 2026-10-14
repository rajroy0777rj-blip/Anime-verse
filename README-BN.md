# ANIMEVERSE CMS Starter (বাংলা নির্দেশিকা)

এই starter kit-এ মূল ANIMEVERSE HTML ডিজাইনকে Eleventy build-এর সঙ্গে রাখা হয়েছে এবং Decap CMS-এর `/admin/` dashboard যোগ করা হয়েছে। CMS কনটেন্ট GitHub repository-তে Markdown/JSON এবং আপলোড করা ছবি হিসেবে সংরক্ষণ করে; Netlify প্রতিটি commit-এর পর সাইট build/deploy করে।

## ফোল্ডার
- `index.njk` — হোমপেজ (বর্তমান ডিজাইন, Latest Anime News অংশ CMS পোস্ট থেকে আসে)
- `admin/index.html` — CMS dashboard loader
- `admin/config.yml` — Posts, Photo Gallery, Theme Customize ফিল্ড
- `content/posts/` — নিবন্ধের ফাইল
- `content/photos/` — gallery entry ফাইল
- `data/site.json` — সাইটের নাম, বর্ণনা ও accent color
- `assets/uploads/` — CMS দিয়ে আপলোড করা মিডিয়া
- `netlify.toml` — build command ও publish folder

## ১) GitHub repository
1. GitHub-এ একটি repository তৈরি করো (যেমন `animeverse-cms`)।
2. এই ZIP-এর সব ফাইল repository-র root-এ upload করো।
3. `admin/config.yml`-এ `YOUR_GITHUB_USERNAME/YOUR_REPOSITORY` বদলে `তোমার-ইউজারনেম/তোমার-repo` দাও।
4. একই ফাইলে `https://YOUR-NETLIFY-SITE.netlify.app`-এর জায়গায় তোমার প্রকৃত Netlify URL বসাও।
5. Commit করো।

## ২) Netlify deploy
1. Netlify-তে login → Add new project/site → Import an existing project.
2. GitHub repository connect করো।
3. Build command: `npm run build`; Publish directory: `_site`। `netlify.toml` থাকলে এটি স্বয়ংক্রিয়ভাবে পড়বে।
4. Deploy শেষ হলে সাইটের URL নোট করো।

## ৩) নিরাপদ CMS authentication — গুরুত্বপূর্ণ
Decap CMS-এর `github` backend ব্যবহার করা হয়েছে, যাতে GitHub account দিয়ে login হয়। CMS ব্যবহারকারীর ঐ repository-তে write access থাকতে হবে। Decap CMS-এর official guide অনুযায়ী GitHub OAuth authentication provider setup করতে হবে; Netlify dashboard-এর OAuth provider নির্দেশনা অনুসরণ করো। GitHub OAuth app-এর Client Secret কখনো HTML/config.yml-এ লিখবে না; শুধু provider settings-এর secret field-এ রাখবে।

Netlify Git Gateway বর্তমানে deprecated; নতুন project-এ এটিকে প্রাথমিক পদ্ধতি হিসেবে ব্যবহার না করাই ভালো। তাই এই starter-এ `git-gateway` backend ব্যবহার করা হয়নি।

## ৪) CMS খোলা
Deploy ও authentication configuration ঠিক হলে `https://তোমার-সাইট.netlify.app/admin/` খুলো।
- Anime Articles: post তৈরি/এডিট/ডিলিট, ছবি, category, tags, SEO fields, external URL
- Photo Gallery: gallery metadata
- Theme Customize: site title, tagline, colors, social links

## গুরুত্বপূর্ণ সীমাবদ্ধতা
- `draft` branch workflow CMS-এ draft/review flow দেয়; publish হলে GitHub main branch-এ কনটেন্ট merge হয় এবং Netlify redeploy করে।
- এই starter-এর homepage-এর Latest Anime News অংশ CMS post থেকে আসে। Article detail page, SEO title/description per article, category pages এবং gallery CMS entries-কে সম্পূর্ণ public pages হিসেবে দেখাতে আরও template work প্রয়োজন; CMS-এ ফিল্ড থাকা মানেই এগুলো public site-এ স্বয়ংক্রিয়ভাবে render হবে না।
- GitHub repository হলো স্থায়ী content storage; ছবি Git repository-তে জমা হয়। অনেক বড় ছবি/অনেক মিডিয়া হলে repository size limit মাথায় রেখো।
- Free plans/limits ও authentication availability সময়ের সঙ্গে বদলাতে পারে; dashboard-এর বর্তমান শর্ত যাচাই করো।
