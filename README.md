# Shade Jekyll Theme

A simple jekyll theme suited for a personal website + blog, currently used for my personal website

## Features
- Sidebar for Desktop
- Collapsible menu with persistent top-bar for mobiles
- Uses excerpts instead of displaying full post content
- uses `highlight.js` with `atom-one-dark` syntax highlight theme compared to `rouge` or `pygments` 
for highlighting code blocks
- code snippets using backticks have black text on grey background
- Read More button added to home page posts,supports pagination, 5 post excrepts per page
- Uses Barlow font family for text, and monospace for code snippets
- Archives section, displays all blog posts by year, with only date and title, no excrepts
- Projects section ( WIP )
- Contacts/Socials now have text for the URL's or Profile names of said social networks/contacts along with icons.
- ✨ NEW ✨ Tags and Category support added for Blog Posts, with a list of all Tags on the Tags page and Categories listed

## Usage
- Install jekyll
```
    sudo apt install ruby-full
    gem install jekyll
    gem install jekyll-paginate
```
- git clone and cd into this repo
```
    git clone https://github.com/shawn-dsilva/shade-jekyll-theme
    cd shade-jekyll-theme
```

- Run `tagfile-gen.py`, this will generate the tagfile pages listing posts for each tag.
- Run Jekyll server
```
    jekyll serve
```
- This site should be on localhost:4000 or 127.0.0.1:4000 by default

- If hosting as a github pages site, delete `.git` folder and rename this folder to `your-username.github.io`, here your github username is to be put in place of `your-username`, then push to your github repo of the same name

- While developing set `baseurl` to `/` ,but change to `your-username.github.io` for deploying on GH Pages

- If hosting on a VPS, set `baseurl` in _config.yml to `/`, run `jekyll build` and copy the content of the resulting `_site` folder to `/var/www/html`
```
    sudo cp -r shade-jekyll-theme/_site/* /var/www/html/
```
- Make changes in your nginx or apache config files to point them to your generated files in /var/www/html or whatever directory you store them in
- Restart your web server 
```
   sudo systemctl restart nginx
```


## Customization

- You can change your site name, short intro, and social/contact info in `_config.yml`
- All CSS files reside in `public/css` directory, has one `base.css` file for the basic css of the website, and `sidebar.css` relating to only the sidebar/navbar
- Main HTML files for header and navbar are in `_includes` directory
- Layout HTML files are templates for blog post and other pages,these are in `_layouts` directory
- The `index.html` file in the route directory is how your homepage will look, the `truncate` value can be adjusted to reduce the characters in the excrept of a post
- Blog Posts go in the `_posts` directory posts have to be made in Markdown `.md` format with a file name like this `YYYY-MM-DD-Title-of-your-post-here.md`
- About,Projects and Archive HTML files are in the root directory of this repo
- Tags should be specified as a YAML array `Tags : [some, tags, for this, blog]` in your blog posts, tags are read as comma seperated values by `tagfile-gen.py`
- Categories should be specified as `categories: [A Category,]` in your blog posts

## How it looks

**Desktop homepage** 

<img src="https://i.imgur.com/GS37d0e.png">

**Desktop Blog Post**

<img src="https://imgur.com/GM34O07.png">

**Desktop Tags Page**

<img src="https://imgur.com/oIwGNC9.png">

**Blog Post in Mobile View**

<img src="https://imgur.com/6v5ap3W.png">

**Mobile view with Menu Open**

<img src="https://imgur.com/TJTORb6.png">

**Mobile Tags Page**

<img src="https://imgur.com/mDiKkjA.png">


## Credits

Based on Hyde theme by @mdo( Mark d'Otto )
