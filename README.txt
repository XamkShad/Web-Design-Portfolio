ARCADE GAME TECH PORTFOLIO
==========================

This version replaces the earlier VHS/CRT treatment with a more arcade-game look:
- Press Start 2P pixel font for big headers and buttons
- VT323 for arcade UI labels
- chunky game UI borders
- stage-select project cards
- arcade-grid background without scanlines
- your supplied profile picture on the home page
- full clickable project cards
- separate blog-style project detail pages

FILES
-----
index.html
projects.html
contact.html
project-mayhem-drive.html
project-mayhem-tools.html
project-template.html
styles.css
script.js
IMG/profile_picture.png
IMG/mayhem-drive.png

ADDING A NEW PROJECT
--------------------
1. Duplicate project-template.html.
2. Rename it, e.g. project-my-new-game.html.
3. Edit the title, overview, role, project facts and devlog.
4. Add a card to projects.html.
5. Set the card href to the new HTML file.
6. Put screenshots in IMG/ and reference them with:
   <img src="IMG/my-project.png" alt="My project screenshot">

FONT NOTE
---------
The CSS imports Press Start 2P and VT323 from Google Fonts.
If offline, it falls back to Courier New / monospace.

CONTACT LINKS
-------------
The LinkedIn, GitHub and Discord URLs from your supplied page were corrected so
the URLs are in href and rel is used for noopener/noreferrer.
