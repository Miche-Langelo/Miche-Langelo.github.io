# Logic Design Lab website

This is a minimal Jekyll site for GitHub Pages.

## Files normally edited

### Homepage

Edit:

```text
index.md
```

Only the text below the initial `---` block needs to be changed.

### Add a normal page

Create a file such as:

```text
projects.md
```

with:

```markdown
---
title: Projects
permalink: /projects/
---

# Projects

Page content in Markdown.
```

Add the link manually in `_layouts/default.html` only if it should appear in the main navigation.

### Add a technical note

Create a file in `_posts` named:

```text
YYYY-MM-DD-title.md
```

Example:

```markdown
---
title: Notes on RF grounding
---

Text written in Markdown.
```

It will appear automatically on the Notes page.

## Files rarely edited

```text
_layouts/default.html
_layouts/post.html
assets/css/style.css
_config.yml
```

These files control layout and style. The main content stays in Markdown.
