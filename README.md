# Bootpolish - Create Dynamic website with HTML and bootstrap (Only!)

Run super-fast SEO friendly dynamic website without the backend. Boot is a website starter kit and framework without the problems of a backend. 

Design your own header and footer or select from beautiful pre-built themes.

Upload to your server, edit boot.json file and you are good to go.

It's also PWA out of the box

# How to use

Simply put your header (excluding header tag) and footer html content in /boot/includes/header.html and /boot/includes/footer.html; copy index.html as starter template for any new page. 

Boot will automtically load those header in `<header>` tag or `<footer>` tag wherever found.

You can also create something like sidebar, newsletter etc in the same manner and boot will load it wherever it will find the boot class with from attribute.

e.g. `<div class="boot" from="/boot/includes/newsletter.html"></div>`

## How is it fast?

Boot will save a copy of the widget and includes in localstorage and load from localstorage first so that page will be active. Once loading has finished, if it is found to be updated, the widget in view will also be updated and update saved for next load.
