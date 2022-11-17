## HTML5 Tags

A collection of current HTML5 tags, obsolete or removed tags are not encluded.

Information are from [here](https://developer.mozilla.org/en-US/docs/Web/HTML).

**`<a>` - Anchor Element**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

> A hyperlink to web pages, files, email addresses, locations in the same page, or anything a URL can address.
> 
> **Attributes**
> 
> - `download`
>   
>   Prompts user to save linked URL instead of navigating to it.
>   
>   Filename will be value passed.
>   
>   If no value is passed browser will suggest a filename/extension.
> 
> - `href`
>   
>   URL pointing to, not necessarily HTTP-based.
> 
> - `hreflang`
>   
>   Hints at the human language of linked URL.
>   
>   Allowed values are same as [the global `lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
> 
> - `ping`
>   
>   List of URLs separated by space, brower will send `POST` request with body `PING` to each URL.
>   
>   Typically for tracking.
> 
> - `referrerpolicy`
>   
>   How much of the referrer to send when following the link.
>   
>   See [`Referrer-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) for possible values and their effects.
> 
> - `rel`
>   
>   The relationship between current document and linked URL as space-separated [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
>   
>   Note: search engine may use this attribute to get more information about this link.
> 
> - `target`
>   
>   Where to display the linked URL, as the name for a browsing context (a tab, window, or `<iframe>`)
>   
>   The following keywords have special meanings for where to load the URL:
>   
>   - `_self`: the current browsing context. **(Default)**
>   
>   - `_blank`: usually a new tab, but users can configure browser to open a new window instead.
>   
>   - `_parent`: the parent browsing context of the current one. If no parent, behaves as `_self`.
>   
>   - `_top`: the topmost browsing context (the "highest" context that's an ancestor of the current one). If not acestors, behaves as `_self`.
>   
>   Note: it might not be very obvious what `_parent` and `_top` does, they are usually used with nested `iframe`. If you're not passing in a keyword (ie. target="test"), URL will be displayed in `<iframe name="test"></iframe>`.
> 
> - `type`
>   
>   Hints at the linked URL's format with a [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type). No built-in functionality.

**`<abbr>` - Abbreviation**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)

> Represents an abbreviation or acronym.
> 
> **Attributes**
> 
> - `title`
>   
>   Must contain a full human-readable description of expansion of the abbreviation.

**`<address>` - Address**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address)

> Indicates the enclosed HTML provides contact information for a person/people/organization.
> 
> **Attributes**
> 
> Global attributes only.

**`<area>` - Area**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area)

> Defines a hot-spot region on an image.
> 
> Must be used within a **`<map>`** element.
> 
> **Attributes**
> 
> - `alt`
>   
>   Text to display when image is unavailable.
> 
> - `coords`
>   
>   Coordinates of the hot-spot region to display.
>   
>   Number and meaning of values depend on the value of **shape** attribute
>   
>   - `rect` or rectangle: the value is `left,top,right,bottom`, 
>   
>   - `circle`: the value is `x,y,r` where `x,y` is a pair specifying the center of the circle and `r` is the value of the radius.
>   
>   - `poly` or polygon: the value is a set of `x,y` pairs for each point in the polygon: `x1, y1,x2,y2,x3,y3,...`
>   
>   In HTML4 values are numbers of pixels or percentages (if % is appended).
>   
>   In HTML5 the values are values of CSS pixels.
> 
> - `download`
>   
>   Prompts user to save linked URL instead of navigating to it.
>   
>   Filename will be value passed.
>   
>   If no value is passed browser will suggest a filename/extension.
> 
> - `href`
>   
>   URL pointing to, not necessarily HTTP-based.
> 
> - `hreflang`
>   
>   Hints at the human language of linked URL.
>   
>   Allowed values are same as [the global `lang` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
> 
> - `ping`
>   
>   List of URLs separated by space, brower will send `POST` request with body `PING` to each URL.
>   
>   Typically for tracking.
> 
> - `referrerpolicy`
>   
>   How much of the referrer to send when following the link.
>   
>   See [`Referrer-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) for possible values and their effects.
> 
> - `rel`
>   
>   The relationship between current document and linked URL as space-separated [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
>   
>   Note: search engine may use this attribute to get more information about this link.
> 
> - `target`
>   
>   Where to display the linked URL, as the name for a browsing context (a tab, window, or `<iframe>`)
>   
>   The following keywords have special meanings for where to load the URL:
>   
>   - `_self`: the current browsing context. **(Default)**
>   
>   - `_blank`: usually a new tab, but users can configure browser to open a new window instead.
>   
>   - `_parent`: the parent browsing context of the current one. If no parent, behaves as `_self`.
>   
>   - `_top`: the topmost browsing context (the "highest" context that's an ancestor of the current one). If not acestors, behaves as `_self`.
>   
>   Note: it might not be very obvious what `_parent` and `_top` does, they are usually used with nested `iframe`. If you're not passing in a keyword (ie. target="test"), URL will be displayed in `<iframe name="test"></iframe>`.
> 
> - `shape`
>   
>   Shape of hot spot.
>   
>   - `rect`: a rectangular region.
>   
>   - `circle`: a circular region.
>   
>   - `poly`: a polygon.

**`<article>` - Article**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)

> Represents a self-contained composition in a document, page, application, or site, which is intended to be idependently distributable or reusable.
> 
> Example: a forum post, a magazine or newspapaer article, or a blog entry.
> 
> A document may have multiple articles, for example, on a blog that shows the text of each article one afer another as the reader scrolls, each post would be contained in an `<article>` element, possibly one or more `<sections>` within.
> 
> **Attributes**
> 
> Global attributes only.
> 
> **Usage**
> 
> - Each `<article>` should be identified, typically by including a heading `<h1>`-`<h6>` element as a child of the `<article>` element.
> 
> - When `<article>` elements are nested, the inner element represents an article related to the outer element. For example, the comments of a post can be `<article>` elements nested in the `<article>` representing the post.
> 
> - Auther information of an `<article>` element can be provided through the `<address>` element.
> 
> - The publication date and time of an `<article>` element can be described using the `datetime` attribute of a `<time>` element.

**`<aside>` - Aside**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)

> Represents a portion of a document whose content is only indirectly related to the document's main content.
> 
> **Attributes**
> 
> Global attributes only.
> 
> **Usage**
> 
> - Do not use the `<aside>` element to tag parenthesized text, this kind of text is considered part of the main flow.

**`<audio>` - Audio**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)

> Used to embed sound content in documents. May contain one or more audio sources, represented using the `src` attribute or `<source>` element, the browser will choose the most suitable one. It can also be the destination for streamed media using a `MediaStream`.
> 
> **Attributes**
> 
> - `autoplay`
>   
>   A Boolean attribute, if true audio will play  automatically as soon as it can do so, without waiting for the netire audio file to finish downloading.
> 
> - `controls`
>   
>   Allows user to control audio playback if present, including volume, seeking, pause/resume playback.
> 
> - `crossorigin`
>   
>   Indicates whether to use CORS to fetch the related audio file. CORS-enabled resources can be reused in the `<canvas>` element without being tainted.
>   
>   - `anonymous`
>     
>     Sends a cross-origin request without a credential. Sends the `Origin:` HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication.
>   
>   - `use-credentials`
>     
>     Sends a cross-origin request with a credential. Sends the `Origin:` HTTP header with a cookie, a certificate, or performing HTTP Basic authentication.
>   
>   If the server does not give credentials to the origin site (by note setting the `Access-Control-Allow-Origin:` HTTP header), the image will be tainted, and its usage restricted.
> 
> - `currentTime`
>   
>   A double-precision floating-point value indicating the current playback position, in seconds, of the audio.
>   
>   If audio is streamed and setting `currentTime` to a data already expired from the media buffer will cause fail.
> 
> - `duration`(Read only)
>   
>   A double-precision floating-point value which indicates the duration (total lenth) of the audio in seconds. If no media is present on the element, or the media is not valid, the returned value is `NaN`.
> 
> - `loop`
>   
>   A Boolean attribute, if specified the audio player will automatically seek back to the start upon reaching the end of the audio.
> 
> - `muted`
>   
>   A Boolean attribute, if specified the audio will be initially silenced.
> 
> - `preload`
>   
>   - `none`: Audio should not be preloaded.
>   
>   - `metadata`: Only audio metadata (e.g. length) is preloaded.
>   
>   - `auto`: Whole audio file is preloaded, even if the user is not expected to use it.
> 
> - `src`
>   
>   URL of the audio embed, may instead use `<source>` element.

**`<b>` - Bring Attention To**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b)

> Used to draw the reader's attention to the element's content.
> 
> **Attributes**
> 
> Global attributes only.
> 
> **Usage**
> 
> - Used to indicate keywords in a summary, product names in a review, or other spans of text whose typical presentation would be boldfaced (but not including any special importance).
> 
> - Do not confuse `<b>` with `<strong>`, `<em>`, or `<mark>` elements. `<strong>` element represents text of certain importance, `<em>` puts some emphasis on the text and the `<mark>` element represents text of certain relevance. `<b>` element doesn't convey such special semantic information, use it only when no others fit.
> 
> - Do not mark titles and headings using the `<b>` elements. Use `<h1>`-`<h6>` tags.
> 
> - It's a good practice to add `class` attribute to `<b>` element in order to convey additional semantic information as needed. This makes it easier to manage multiple use cases of `<b>` if your stylistic needs change.

**`<base>` - Document Base URL**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)

> Specifies the base URL to use for all relative URLs in the document.
> 
> There can be only one `<base>` element in a document.
> 
> The used base URL of a document can be accessed from scripts with `document.baseURI`. If no `<base>` element then it defauts to `document.location.href`.
> 
> **Attributes**
> 
> - `href`
>   
>   The base URL to be used throughout the document for relative URLs. Absolute and relative URLs allowed.
> 
> - `target`
>   
>   A keyword or auther-defined name of the default browsing context to display the result when links or forms cause navigation.
>   
>   The following keywords have special meanings for where to load the URL:
>   
>   - `_self`: the current browsing context. **(Default)**
>   
>   - `_blank`: usually a new tab, but users can configure browser to open a new window instead.
>   
>   - `_parent`: the parent browsing context of the current one. If no parent, behaves as `_self`.
>   
>   - `_top`: the topmost browsing context (the "highest" context that's an ancestor of the current one). If not acestors, behaves as `_self`.
> 
> **Usage**
> 
> - Should be used before other elements with attributes whose values are URLs, such as `<link>`'s `href` atribute.
> 
> - If multiple `<base>` elements are used, only the first `href` and first `target` are obeyed, all others are ignored.

**`<bdi>` - Bidirectional Isolate**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi)

> Tells the browser's bidirectional algorithm to treat the text it conatins in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality.
> 
> **Attributes**
> 
> Global attributes only.

**`<bdo>` - Bidirectional Text Override**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo)

> Overrides the current directionality of text, so that the text within is rendered in a different direction.
> 
> **Attributes**
> 
> - `dir`
>   
>   The direction in which text should be rendered in this element's contents. Possible values are:
>   
>   - `ltr`: left-to-right direction.
>   
>   - `rtl`: right-to-left direction.

**`<blockquote>` - Block Quotation**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote)

> Indicates the enclosed text is an extended quotation. Usually this is rendered visually by indentation. An URL for the source of the quotation may be given using the `cite` attribute, while a text representation of the source can be given using the `<cite>` element.
> 
> **Attributes**
> 
> - `cite`
>   
>   A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.
> 
> **Usage**
> 
> To change the indentation applied to the quoted text, use the CSS `margin-left` and/or `margin-right` properties, or the `margin` shorthand property.
> 
> To include short quotes inline rather than in a separate block, use the `<q>` element.

**`<body>` - Document Body**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)

> Content of an HTML document. There can be only one `<body>` element in a document.
> 
> **Attributes**
> 
> - `onafterprint`
>   
>   Function to call after the user has printed the document
> 
> - `onbeforeprint`
>   
>   Function to call when the user requests printing of the document
> 
> - `onbeforeunload`
>   
>   Function to call when the document is about to unloaded
> 
> - `onblur`
>   
>   Function to call when the document loses focus
> 
> - `onerror`
>   
>   Function to call when the document fails to load properly
> 
> - `onfocus`
>   
>   Function to call when the document receives focus
> 
> - `onhashchange`
>   
>   Function to call when fragment identifier part (starting with the has `#` character) of the document's current address has changed
> 
> - `onload`
>   
>   Function to call when the document has finished loading
> 
> - `onmessage`
>   
>   Function to call when the document has received a message
> 
> - `onoffline`
>   
>   Function to call when network communication has failed
> 
> - `ononline`
>   
>   Function to call when network communication has been restored
> 
> - `onpopstate`
>   
>   Function to call when the user has navigated session history
> 
> - `onredo`
>   
>   Function to call when the user has moved forward in undo transaction history
> 
> - `onresize`
>   
>   Function to call when the document has been resized
> 
> - `onstorage`
>   
>   Function to call when the storage area has chagned
> 
> - `onundo`
>   
>   Function to call when the user has moved backward in undo transaction history
> 
> - `onunload`
>   
>   Function to call when the document is going away

**`<br>` - Line Break**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)

> Produces a line break in text (carriage-return). Useful for writing a poem or address, where the division of lines is significant.
> 
> **Attributes**
> 
> Global attributes only.

**`<button>` - Button**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)

> Represents a clickable button.
> 
> **Attributes**
> 
> - `autofocus`
>   
>   A Boolean attribute if true button will have input focus when page loads.
> 
> - `disabled`
>   
>   A Boolean attribute for disabling the button.
> 
> - `form`
>   
>   The id of the form the button is associated with, if not present the button is associated with ancestor `<form>` element.
> 
> - `formation`
>   
>   The URL that processes the information submitted by the button, this will override the `action` attribute of the button's associated form.
> 
> - `formenctype`
>   
>   If the button is a submit button, this attribute specifies the form data encoding used to submit the form to the server.
>   
>   Possble values:
>   
>   - `application/x-www-form-urlencoded`: The default value.
>   
>   - `multipart/form-data`: Use this if form contains a file type input.
>   
>   - `text/plain`: Added to the spec as a debugging aid, shouldn't be used for real form submission.
>   
>   Overrides `enctype` of the button's associated form.
> 
> - `formmethod`
>   
>   If the button is a submit button, this attribute specifies the HTTP method that the browser uses to submit the form.
>   
>   Possible values:
>   
>   - `post`: The data from the form are included in the body of the HTTP request.
>   
>   - `get`: The data from the form are appended to the form's `action` URL with a `?` as a separator.
>   
>   Overrides the `method` attribute of the button's associtated form.
> 
> - `formnovalidate`
>   
>   If the button is a submit button, this attribute specifies the form to not validate when it's submitted.
>   
>   Overrides the `novalidate` of the button's associated form.
> 
> - `formtarget`
>   
>   If the button is a submit button, this attribute specifies where to display the response from submitting the form.
>   
>   - `_self`: the current browsing context. **(Default)**
>   
>   - `_blank`: usually a new tab, but users can configure browser to open a new window instead.
>   
>   - `_parent`: the parent browsing context of the current one. If no parent, behaves as `_self`.
>   
>   - `_top`: the topmost browsing context (the "highest" context that's an ancestor of the current one). If not acestors, behaves as `_self`.
>   
>   Overrides the `target` of the button's associated form.
> 
> - `name`
>   
>   Name of button, submitted as a pair with the button's `value` as part of the form data.
> 
> - `type`
>   
>   Behaviour of the button
>   
>   Possible values:
>   
>   - `submit`: Submits the form data to server. **(Default)**
>   
>   - `reset`: Resets all the controls to their initial values.
>   
>   - `button`: Does nothing when clicked.
> 
> - `value`
>   
>   The inital value of the button, submitted as a pair with the button's `name` as part of the form data.

**`<canvas>` - Graphics Canvas**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)

> Used with `canvas scripting API` or `WebGL API` to draw graphics and animations.
> 
> **Attributes**
> 
> - `height`
>   
>   Height of the coordinate space in CSS pixels. **(Default: 150px)**
> 
> - `moz-opaque`
>   
>   Allow canvas to use translucency as a factor, if the canvas knows there's no translucency, painting performance can be optimized.
>   
>   Only supported by Mozilla-based browsers.
>   
>   Use the standardized `canvas.getContext('2d', { alpha: false })` instead.
> 
> - `width`
>   
>   Width of the coordinate space in CSS pixels. **(Default: 300px)**
> 
> **Usage**
> 
> You should provide althernate content inside the `<canvas>` block. That content will be rendered both on older browsers that dont'support canvas and in browsers with JavaScript disabled.
> 
> Unlike `<img>` element, `<canvas>` element requires the closing tag `</canvas>`.
> 
> Changing the size of canvas with css may cause image to be distorted.
> 
> Maximum size of a `<canvas>` is very large, but exact size depends on the browser.

**`<caption>` - Table Caption**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption)

> Specifies the caption (or title) of a table, if used should __always__ be the first child of a `<table>` element.
> 
> Styling and position relative to the table may be changed using the CSS `caption-side` and `text-align` properties.
> 
> **Attributes**
> 
> Global attributes only.
> 
> **Usage**
> 
> When the `<table` element that contains a `<caption>` is the only descendant of a `<figure>` element, you should use the `<figcaption>` element instead of `<caption>`

**`<cite>` - Citation**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite)

> Describes a reference to a cited creative work, and must include the title of that work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata.
> 
> **Attributes**
> 
> Global attributes only.

**`<code>` - Inline Code**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code)

> Displays its content styled in a fashion intended to indicate that text is a short fragment of computer code. By default, the content text is displayed using the user agent's default monospace font.
> 
> **Attributes**
> 
> Global attributes only.
> 
> **Usage**
> 
> To represnet multiple lines of code, wrap`<code>` element within a `<pre>` element. The `<code>` element by itself only represnets a single phrase of code or line of code.

**`<col>` - col**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col)

> Defines a column within a table and is used for defining common semantics on all common cells.
> 
> Generally found within a `<colgroup>` element.
> 
> **Attributes**
> 
> - `span`
>   
>   This attribute contains a positive integer indicating the number of consecutive columns the `<col>` element spans. **(Default: 1)**

**`<colgroup>` - colgroup**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup)

> Defines a group of clumns within a table.
> 
> **Attributes**
> 
> - `span`
>   
>   This attribute contains a positive integer indicating the number of consecutive columns the `<colgroup>` element spans. **(Default: 1)**
>   
>   Note: not permitted if more than 1 `<col>` elements within the `<colgroup>`

**`<data>` - data**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data)

> Links a given content with a machine-readable translation. If the content is time- or date-related, the `<time>` element must be used.
> 
> **Attributes**
> 
> - `value`
>   
>   TThe machine-readable translation of the content of the element.

**`<datalist>` - HTML Data List**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)

> A set of `<options` elements that represent the permissible or recommended options available to choose from within other controls.
> 
> **Attributes**
> 
> Global attributes only.

**`<dd>` - Description Details**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd)

> Provides the description, definition, or value for the preceding term (`<dt>`) in a description list (`<dl>`)
> 
> **Attributes**
> 
> Global attributes only.

**`<del>` - Deleted Text**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del)

> Represents a range of text that has been deleted from a document. This can be used when rendering "track chagnes" or source code diff information.
> 
> **Attributes**
> 
> - `cite`
>   
>   A URI for a resource that explains the change. (e.g. meeting minutes)
> 
> - `datetime`
>   
>   Indicates the time and date of the change, must be a valid date string with an optional time.

**`<details>` - Details Disclosure**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)

> Creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label can be provided using the `<summary>` element.
> 
> A disclosure widget is typically presented onscreen using a small trangle which rotates to indicate open/clsoed status, with a label next to the triangle.
> 
> If the first child of the `<details>` element is a `<summary>` element, the contents of the `<sumamry>` element are used as the label for the disclosure widget.
> 
> **Attributes**
> 
> - `open`
>   
>   A Boolean attribute indicates whether or not hte details are visible. **(Default: false)**
> 
> **Events**
> 
> - `toggle`

**`<dfn>` - Definition**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn)

> Indicate the term being defined within the context of a definition phrase or sentence. The `<p>` element, the `<dt>`/`<dd>` pairing, or the `<section>` element which is the nearest ancestor of the `<dfn>` is considered to be the definition of the term.
> 
> **Attributes**
> 
> Global attributes only.
> 
> **Usage**
> 
> The term being defined is identified following these rules:
> 
> 1. If the `<dfn>` element has a `title` attribute, the value of the `title` attribute is considered to be the term being defined. The element must still have text within it, but that text may be an abbreviation (perhaps using `<abbr>`) or another form of the term.
> 
> 2. If the `<dfn>` contains a single child element and does not have any text content of its own, and the child element is an `<abbr>` element with a `title` attribute itself, then the exact value of the `<abbr>` element's `title` is the term being defined.
> 
> 3. Otherwise the text content of the `<dfn>` element is the term being defined.

**`<div>` - Content Division**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)

> Generic container for flow content. It has no effect on the content or layout until styled using CSS.
> 
> As a "pure" container, the `<div>` element does not inherently represent anything. Instead it's used to group content so it can be easily styled using the `class` or `id` attributes, marking a section of a document as being written in a different language (using the `lang` attribute), and so on.
> 
> **Attributes**
> 
> Global attributes only.

**`<dl>` - Description List**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)

> Represents a description list. The element encloses a list of groups of terms (specified using the `<dt>` element) and descriptions (provided by `<dd>` elements).
> 
> Common uses for this element are to implement a glossary or to display metadata.
> 
> **Attributes**
> 
> Global attributes only.
> 
> **Usage**
> 
> It's a bad practice to use `<dl>` for the purpose of creating indentation on the page. For proper indentation use CSS `margin`.

**`<dt>` - Description Term**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt)

> Specifies a term in a description or definition list, must be used inside a `<dl>` element. Usually followed by a `<dd>` element, multiple `<dt>` elements in a row indicate several terms that are all defined by the same immediate next `<dd>` element.
> 
> **Attributes**
> 
> Global attributes only.

**`<em>` - Emphasis**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)

> Marks text that has stress emphasis.
> 
> Can be nested, each level of nesting indicating a greater degree of emphasis.
> 
> **Attributes**
> 
> Global attributes only.
> 
> **Usage**
> 
> Used for words that have a stressed emphasis compared to surrounding text, which is often limited to a word or words of a sentence and affects the meaning of the sentence itself.
> 
> Shouldn't be used to only display text in italic.
> 
> `<em>` is used to represent stress emphasis of its content, `<i>` is used to represent text that is set off from the normal prose, such a foreign word, fictional character thoughts, or definition of a word instead of representing its semantic meaning.

**`<embed>` - Embed External Content**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed)

> Embeds external content at the specified point in the document.
> 
> This content is provided by an external application or other source of interactive content such as a browser plug-in.
> 
> **Attributes**
> 
> - `height`
>   
>   Height of the resource in CSS pixels. Must be an absolute value not percentage.
> 
> - `src`
>   
>   The URL of the resource being embedded.
> 
> - `type`
>   
>   The MIME type to use to select the plug-in to instantiate.
> 
> - `width`
>   
>   Width of the resource in CSS pixels. Must be an aboslute value not percentage.
> 
> **Usage**
> 
> You can use the `object-position` property to adjust the positioning of the embedded object within the element's frame, and the `object-fit` property to control how the object's size is adjusted to fit within the frame.

**`<fieldset>` - Field Set**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)

> Used to group several controls as well as labels within a web form.
> 
> A nested `<legend>` element is used to provide a caption for the `<fieldset>`.
> 
> **Attributes**
> 
> - `disabled`
>   
>   Disable all form controls that are descendants of the fieldset, they will not be editable and won't be submitted along with the `<form>`.
> 
> - `form`
>   
>   The id of the form this `<fieldset>` element is associated with.
> 
> - `name`
>   
>   The name associated with the group.

**`<figcaption>` - Figure Caption**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption)

> Represents a caption or legend describing the rest of the contents of its parent `<figure>` element.
> 
> **Attributes**
> 
> Global attributes only.

**`<figure>` - Figure with Optional Caption**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)

> Represents self-contained content, potentially with an optional caption specified using `<figcaption>` element.
> 
> The figure and its caption and its contents are referenced as a single unit.
> 
> **Attributes**
> 
> Global attributes only.
> 
> **Usage**
> 
> Usually a `<figure>` is an image, illustration, diagram, code snippet, etc., that is referenced in the main flow of a document, but that can be moved to another part of the document or to an appendix without affecting the main flow.
> 
> Being a sectioning root, the outline of the content of the `<figure>` element is excluded from the main outline of the document.
> 
> A caption can be associated with the `<figure>` element by inserting a `<figcaption>` inside it (as the first or last child). The first `<figcaption>` element found in the figure is presented as the figure's caption.

**`<footer>` - footer**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)

> Represents a fotoer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents.
> 
> **Attributes**
> 
> Global attributes only.
> 
> **Usage**
> 
> Enclose information about te author in an `<address>` element that can be included into the `<footer>` element.
> 
> The `<footer>` element is not sectioning content and therefore doesn't introduce a new section in the outline.

**`<form>` - form**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

> Represents a document section that contains interactive controls for submitting information to a web server.
> 
> It's possible to use `:valid` and `:invalid` CSS pseudo-classes to style a `<form>` element based on whether or not the individual elements within the form are valid.
> 
> **Attributes**
> 
> - `accept-charset`
>   
>   A space- or comma-delimited list of character encodings that the server accepts. The browser uses them in the order in which they are listed. The default value, the reserved string `"UNKNOWN"` indicates the same encoding as that of the document containing the form element.
> 
> - `action`
>   
>   The URI of a program that processes the form information.
>   
>   Can be overridden by a `formaction` attribute on a `<button>`, `<input type="submit">` or `<input type="image">` element.
> 
> - `autocomplete`
>   
>   Indicates whether input elements can be default have their values automatically completed by the browser. This setting can be overridden by an `autocompleted` attribute on an element beloing to the form.
>   
>   - `off`
>   
>   - `on`
>   
>   For most modern browsers setting  the autocomplete attribute will not prevent a browser's password manager from asking the user if they want to store login fields, if the user permits the storage the browser will autofill the login the next time the user visits the page.
> 
> - `enctype`
>   
>   When the value of the `method` attribute is `post`, enctype is the MIME type of content that is used to submit the form to the server.
>   
>   Possible values
>   
>   - `application/x-www-form-urlencoded`: Default
>   
>   - `multipart/form-data`: Value used if an `<input>` element has type "file"
>   
>   - `text/plain`: (HTML5)
>   
>   Can be overriden by a `formenctype` attribute on a `<button>`, `<input type="submit">` or `<input type="image">` element.
> 
> - `method`
>   
>   The HTTP method that the browser uses to submit the form.
>   
>   Possible values
>   
>   - `post`: HTTP POST method, form data are included in the body of the form and sent to the server.
>   
>   - `get`: HTTP GET method, from data are appended to the `action` attribute URI with a '?' as separator, and the resulting URI is sent to the server.
>   
>   Can be overridden by a `formmethod` attribute on a `<button>`, `<input type="submit">` or `<input type="image">` element.
> 
> - `name`
>   
>   The name of the form.
> 
> - `novalidate`
>   
>   A Boolean attribute indicates that the form is not to be validated when submitted.
>   
>   Can be overridden by a `formmethod` attribute on a `<button>`, `<input type="submit">` or `<input type="image">` element.
> 
> - `target`
>   
>   Where to display the response after receiving after submitting the form.
>   
>   The following keywords have special meanings for where to load the URL:
>   
>   - `_self`: the current browsing context. **(Default)**
>   
>   - `_blank`: usually a new tab, but users can configure browser to open a new window instead.
>   
>   - `_parent`: the parent browsing context of the current one. If no parent, behaves as `_self`.
>   
>   - `_top`: the topmost browsing context (the "highest" context that's an ancestor of the current one). If not acestors, behaves as `_self`.

**`<h1>-<h6>` - HTML Section Heading**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)

> Represents six levels of section headings. `<h1>` is the highest and `<h6>` is the lowest.
> 
> **Attributes**
> 
> Global attributes only.
> 
> **Usage**
> 
> Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.
> 
> Avoid using heading tags to resize text, use CSS `font-size` instead.
> 
> Avoid skipping heading levels, start from `<h1>`, then `<h2>` and so on.
> 
> Should not use more than 1 `<h1>` per page.

**`<head>` - Document Metadata (Header)**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)

> Contains machine-readable information (metadata) about the document, like its title, scripts, and stylesheets.
> 
> **Attributes**
> 
> Global attributes only.
> 
> **Notes**
> 
> HTML5-compliant browsers automatically creates a `<head>` element if its tags are omitted in the markup.

**`<header>` - header**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)

> Represents introductory content, typically a group of introductory or navigational aids, such as heading elements, logo, search form, author name, and other elements.
> 
> **Attributes**
> 
> Global attributes only.

**`<hr>` - Thematic Break (Horizontal Rule)**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)

> Represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.
> 
> **Attributes**
> 
> Global attributes only.

**`<html>` - HTML Document / Root**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)

> The root (top-level element) of an HTML document, also referred to as the root element.
> 
> **Attributes**
> 
> - `xmlns`
>   
>   Specifies the XML Namespace of the document. **(Default: `"http://www.w3.org/1999/xhtml")**
>   
>   Required in documents parsed with XML parsers, optional in text/html documents.

**`<i>` - i**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i)

> Represents a range of text that is set off from the normal text for some reason. For example technical terms, foreign language phrases, or fictional character thoughts.
> 
> **Attributes**
> 
> Global attributes only.

**`<ifram>` - Inline Frame**, [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)

> A nested browsing context, embedding another HTML page into the current one.
> 
> Each embedded browsing context has its own session history and document. The browsing context that embeds the others is called the **parent browsing context**. The **topmost** browsing context is usually the browser window, represented by the `Window` object.
> 
> **Attributes**
> 
> - `allow`
>   
>   Specifies a feature policy for the `<iframe>`
> 
> - `allowfullscreen`
>   
>   Set `true` if the `<iframe>` can activate fullscreen mode by calling the `requestFullscreen()` method.
> 
> - `allowpaymentrequest`
>   
>   Set `true` if a cross-origin `<iframe>` should be allowed to invoke the **Payment Request API**.
> 
> - `height`
>   
>   Height of the frame in CSS pixels. **(Default: 150px)**
> 
> - `name`
>   
>   A targetable name for the embedded browsing context. This can be used in the `target` attribute of the `<a>`, `<form>`, or `<base>` elements, the `formtarget` attribute of the `<input>` or `<button>` elements, or the `windowName` parameter in the `window.open()` method.
> 
> - `referrerpolicy`
>   
>   Indicates which referrer to send when fetching the frame's resource
>   
>   - `no-referrer`: The `Referer header will not be send.
>   
>   - `no-referrer-when-downgrade` (default): The `Referer` header will not be sent to origins without TLS (HTTPS).
>   
>   - `origin`: The send referrer will be limited to the origin of the referring page: its scheme, host, and port.
>   
>   - `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
>   
>   - `same-origin`: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information.
>   
>   - `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS->HTTPS), but don't send it to a less secure destination (HTTPS->HTTP).
>   
>   - `strict-origin-when-cross-origin`: Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS->HTTPS), and send no header to a less secure destination (HTTPS->HTTP).
>   
>   - `unsafe-url`: The referrer will include the origin and the path (but no the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins.
> 
> - `sandbox`
>   
>   Applies extra restrictions to the content in the frame. The value of the attribute can either be empty to apply all restrictions, or space-separated tokens to lift particular restrictions
>   
>   - `allow-downloads-without-user-activation` : Allows for downloads to occur without a gesture from the user.
>   
>   - `allow-forms`: Allows the resource to submit forms. If this keyword is not used, form submission is blocked.
>   
>   - `allow-modals`: Lets the resource open modal windows.
>   
>   - `allow-orientation-lock`: Lets the resource lock the screen orientation.
>   
>   - `allow-pointer-lock`: Lets the resource use the Pointer Lock API.
>   
>   - `allow-popups`: Allows popups (such as `window.open()`, `target="_blank"`, or `showModalDialog()`). If this keyword is not used, the popup will silently fail to open.
>   
>   - `allow-popups-to-escape-sandbox`: Lets the sandboxed document open new windows without those windows inheriting the sandboxing. For example, this can safely sandbox an advertisement without forcing the same restrictions upon the page the ad links to.
>   
>   - `allow-presentation`: Lets the resource start a presentation session.
>   
>   - `allow-same-origin`: If this token is not used, the resource is treated as being from a special origin that always fails the same-origin policy.
>   
>   - `allow-scripts`: Lets the resource run scripts (but not create popup windows).
>   
>   - `allow-storage-access-by-user-activation` : Lets the resource request access to the parent's storage capabilities with the Storage Access API.
>   
>   - `allow-top-navigation`: Lets the resource navigate the top-level browsing context (the one named `_top`).
>   
>   - `allow-top-navigation-by-user-activation`: Lets the resource navigate the top-level browsing context, but only if initiated by a user gesture.
> 
> - `src`
>   
>   The URL of the page to embed. Use a value of `about:blank` to embed and empty page that conforms to the same-origin policy.
> 
> - `srcdoc`
>   
>   Inline HTML to embed, overriding the `src` attribute. If a browser does not support the `srcdoc` attribute, it will fall back to the URL in the `src` attribute.
> 
> - `width`
>   
>   Width of the frame in CSS pixels. **(Default: 300px)**
> 
> **Scripting**
> 
> Inline frames, like `<frame>` elements, are included in the `window.frames` pseudo-array.
> 
> With the DOM `HTMLIFrameElement` object, scripts can access the `window` object of the framed resource via the `contentWindow` property. The `contentDocument` property refers to the `document` inside the `<iframe>`, same as `contentWindow.document`.
> 
> From the inside of a frame, a script can get a reference to its parent window with `window.parent`.
> 
> Script access to a frame's content is subject to the same-origin policy. Scripts cannot access most properties in other `window` objects if the script was loaded from a different origin, including scripts inside a frame accessing the frame's parent. Cross-origin communication can be achieved using `Window.postMessage()`




