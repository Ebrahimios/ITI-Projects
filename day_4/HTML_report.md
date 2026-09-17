# HTML (HyperText Markup Language)

## Definition
The standard markup language used to create the skeleton and structure of any web page. It tells the browser how to display text, images, and other content.

## Evolution
HTML was invented by Sir Tim Berners-Lee, a British computer scientist, while working at CERN (the European Organization for Nuclear Research). His initial goal was not to build the interactive multimedia web we know today, but rather to create a simple, universally accessible system for scientists to share, format, and link research documents across different computers using hypertext, and He made first web (The World Wide Web project).

**The Birth of HTML (1989 – 1991)**
Tim Berners-Lee wrote the initial proposal for the World Wide Web in 1989. By late 1991, he published the first formal document describing the language, simply called "HTML Tags." This foundational document contained just 18 structural elements (many of which, like `<title>` and `<p>`, are still used today).

**HTML 2.0 (1995)**
The first official standard published by the IETF (Internet Engineering Task Force). It formalized the core features of the language that developers were already using, such as basic forms and image embedding.

**HTML 3.2 & HTML 4.01 (1997 – 1999)**
The World Wide Web Consortium (W3C), founded by Berners-Lee, took over standardization. HTML 4.01 became a globally adopted standard. During this era, the W3C began pushing for the separation of structure and presentation, encouraging developers to use CSS for styling instead of relying on formatting tags like `<font>`.

**XHTML 1.0 (2000)**
A strict, XML-based reformulation of HTML. It required perfectly structured markup—every tag had to be properly closed and nested correctly. While it forced developers to write cleaner code, its rigid error-handling made it difficult to work with.

**HTML5 (2014)**
The standard that powers the modern web. HTML5 shifted the focus from static documents to interactive web applications. It introduced semantic tags (like `<header>` and `<article>`), provided native support for multimedia (`<video>`, `<audio>`), and introduced powerful APIs (like `<canvas>`), effectively eliminating the need for third-party plugins like Adobe Flash.

---

## The Anatomy of an HTML Document

### 1. The Basic Document Structure (Boilerplate)
Every web page requires a foundational skeleton that browsers read to understand the document.

* **`<!DOCTYPE html>`**: Declares that the document uses HTML5.
* **`<html>`**: The root element wrapping all content on the page.
* **`<head>`**: Contains metadata, such as the page title shown in the browser tab.
* **`<body>`**: The container for all visible content displayed to the user.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Report</title>
  </head>
  <body>
    <!-- Visible content goes here -->
  </body>
</html>
```

### 2. Basic HTML Tags (Content Elements)
These tags are used inside the `<body>` to display actual content.

**Headings (`<h1>` to `<h6>`):** Used to define titles and subtitles. `<h1>` is the most important main title, while `<h6>` is the least important.
```html
<h1>This is the Main Page Title</h1>
<h2>This is a Subtitle</h2>
```

**Paragraphs (`<p>`):** Used for standard blocks of text.
```html
<p>This is a paragraph explaining a specific concept in my report.</p>
```

**Hyperlinks (`<a>`):** Short for Anchor, used to link to other pages. The `href` attribute specifies the destination URL.
```html
<a href="https://www.google.com">Click here to visit Google</a>
```

**Images (`<img>`):** A self-closing tag used to embed images. The `src` attribute defines the image path, and the `alt` attribute provides alternative text for screen readers or if the image fails to load.
```html
<img src="my-photo.jpg" alt="A diagram explaining HTML structure">
```

**Lists (`<ul>`, `<ol>`, `<li>`):** Used to group related items.
*   **`<ul>`** (Unordered List): Bulleted items.
*   **`<ol>`** (Ordered List): Numbered items.
*   **`<li>`** (List Item): The individual item inside the list.

```html
<!-- Unordered List -->
<ul>
  <li>First bullet point</li>
  <li>Second bullet point</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>Step one</li>
  <li>Step two</li>
</ol>
```

**Semantic Formatting (`<strong>` and `<em>`):**
*   **`<strong>`**: Renders text as bold and indicates strong importance for search engines.
*   **`<em>`**: Renders text in italics and indicates emphasis.

```html
<p>Warning: This step is <strong>crucial</strong> and requires <em>careful</em> attention.</p>
```

### 3. Semantic HTML5 Tags (Meaningful Structure)
In the past, developers used generic `<div>` tags for everything. Semantic tags provide clear meaning about the content they enclose, which improves Search Engine Optimization (SEO) and makes the web accessible for users relying on screen readers.

*   **`<header>`**: Represents the introductory content or a set of navigational links, usually containing the logo or main title.
*   **`<nav>`**: Short for Navigation, it contains the primary links used to navigate the website.
*   **`<main>`**: Contains the dominant, unique content of the page. There should only be one `<main>` tag per page.
*   **`<section>`**: Used to group related content into standalone thematic sections, usually paired with its own heading.
*   **`<article>`**: Represents a self-contained composition that could be distributed independently, like a blog post, news story, or forum post.
*   **`<aside>`**: Contains content indirectly related to the main content, such as a sidebar, related links, or advertisements.
*   **`<footer>`**: Represents the footer of the document or section, typically containing copyright data, contact information, or secondary links.

```html
<header>
  <h1>Welcome to My Blog</h1>
</header>
<nav>
  <a href="/home">Home</a> | <a href="/about">About</a>
</nav>
<main>
  <section>
    <h2>Sports News</h2>
    <p>Latest updates on today's matches...</p>
  </section>
  <article>
    <h2>How to Learn HTML</h2>
    <p>In this guide, we will cover the basics...</p>
  </article>
</main>
<aside>
  <h3>Related Articles</h3>
  <ul>
    <li>Understanding the Web</li>
  </ul>
</aside>
<footer>
  <p>&copy; 2026 All Rights Reserved.</p>
</footer>
```

### 4. Multimedia Tags (HTML5 Additions)
These tags allow developers to embed rich media directly into the web page without needing external plugins.

**Audio (`<audio>`):** Used to embed sound content. The `controls` attribute adds audio controls like play, pause, and volume.
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

**Video (`<video>`):** Used to embed video content. The `controls` attribute adds video playback controls. You can also specify `width` and `height`.
```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

### 5. Tables (`<table>`)
Tables are used to arrange data into rows and columns (a grid format).
*   **`<table>`**: Wraps the entire table.
*   **`<tr>`** (Table Row): Defines a horizontal row of cells.
*   **`<th>`** (Table Header): Defines a header cell, typically bold and centered by default.
*   **`<td>`** (Table Data): Defines a standard data cell.

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Ahmed</td>
    <td>25</td>
    <td>Cairo</td>
  </tr>
  <tr>
    <td>Sara</td>
    <td>22</td>
    <td>Alexandria</td>
  </tr>
</table>
```

### 6. Forms and Inputs (`<form>`)
Forms are essential for collecting user input, such as login details, surveys, or search queries.
*   **`<form>`**: The container for all input elements. The `action` attribute specifies where the data is sent.
*   **`<label>`**: Defines a label for a specific input field, improving accessibility.
*   **`<input>`**: The primary element for data entry. Its `type` attribute can change its behavior (e.g., `text`, `password`, `email`, `radio`, `checkbox`).
*   **`<button>`**: A clickable button, usually used to submit the form.

```html
<form action="/submit-data">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" placeholder="Enter your name">
  
  <br><br> <!-- Line breaks for spacing -->
  
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
  
  <br><br>
  
  <button type="submit">Login</button>
</form>
```

### 7. Other Important Structural Elements
*   **`<br>`** (Line Break): A self-closing tag that inserts a single line break.
*   **`<hr>`** (Horizontal Rule): A self-closing tag that creates a thematic break (a horizontal line) between paragraphs or sections.
*   **`<div>`**: A block-level container used to group elements together, mostly for styling with CSS. Unlike semantic tags, it has no inherent meaning.
*   **`<span>`**: An inline container used to style or group a small chunk of text or elements without breaking the line.

```html
<div>
  <h2>Section Title</h2>
  <p>This is a sentence.<br>This starts on a new line.</p>
  <hr>
  <p>The word <span style="color: red;">red</span> is styled using a span.</p>
</div>
```
