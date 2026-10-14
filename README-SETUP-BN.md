# ANIMEVERSE CMS Config Fix (বাংলা)

এই প্যাকে Decap CMS-এর কনফিগারেশন দেওয়া আছে, যেখানে GitHub repository সেট করা হয়েছে:
`rajroy0777rj-blip/Anime-verse`

Netlify dashboard project slug থেকে সম্ভাব্য primary URL হিসেবে `https://animeversewrold.netlify.app` বসানো হয়েছে। Netlify → Site configuration / Domain management-এ Primary domain যদি অন্য হয়, `admin/config.yml`-এর `site_url` ও `display_url`-এ সেই প্রকৃত URL বসাও।

## কীভাবে ব্যবহার করবে
1. GitHub repository `Anime-verse`-এর root-এ `admin` নামে folder তৈরি করো।
2. এই প্যাকের `admin/config.yml` ও `admin/index.html` আপলোড করো।
3. Commit changes করো।
4. Netlify deploy শেষ হলে `https://animeversewrold.netlify.app/admin/` খোলো (ডোমেইন যাচাই করে নিও)।
5. GitHub backend-এর authentication/OAuth আলাদাভাবে সেটআপ না করা থাকলে login কাজ করবে না। GitHub token বা OAuth secret কখনো `config.yml`-এ রাখবে না।

## গুরুত্বপূর্ণ সামঞ্জস্য সতর্কতা
তোমার বর্তমান repository-তে `.pages.yml` আছে, যা Pages CMS-কে `data/articles.json` দিয়ে configure করে। এই Decap config-এর post collection `content/posts/` এবং photo collection `content/photos/` ব্যবহার করে। তাই এই config upload করলেই বর্তমান `data/articles.json`-এর পোস্টগুলো Decap-এ স্বয়ংক্রিয়ভাবে দেখা যাবে না। এটি পূর্ণ migration নয়। Upload করার আগে existing homepage/content structure ব্যাকআপ রাখো এবং CMS-কে `content/posts/`-এর সঙ্গে মিলিয়ে নিতে হবে, অথবা Pages CMS-এর `.pages.yml`-কেই চালু রাখতে হবে।
