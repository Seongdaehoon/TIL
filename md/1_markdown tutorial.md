

Italics and Bold
---
1. Writing in Markdown is _not_ that hard! (Italics)
2. I **will** complete these lessons! (Bold)
3. "_Of course_," she whispered. Then, she shouted: "All I need is **a little moxie!**"
4. If you're thinking to yourself, **_This is unbelievable_**, you'd probably be right.

---
Headers
---

# Header one
## Header two
### Header three
#### Header four
##### Header five
###### Header six
---
Links
---
1. _inline link_ 
: to create an inline link, you wrap the link thext in brackets ( `[ ]` ), and then you wrap the link in parenthesis ( `( )` ). 
- [Visit Github](www.github.com)
- [You're **really, really** going to want to see this.](www.dailykitten.com)
- #### The Latest News from [the BBC](www.bbc.com/news)
2. _reference link_ 
: As the name implies, the link is actually a reference to another place in the document. Here is an example of what we mean:

```
Here's [a link to something else][another place].
Here's [yet another link][another-link].
And now back to [the first link][another place].

[another place]: www.github.com
[another-link]: www.google.com
```
The "references" above are the second set of brakets : `[another place]` and `[another-link]`.
At the bottom of a Markdown document, these brackets are defined as proper links to outside websites. An advantage of the reference link sytle is that multiple links to the same place only need to be updated once.

- Do you want to [see something fun][a fun place]?

- Well, do I have [the website for you][another fun place]!

[a fun place]: www.zombo.com
[another fun place]: www.stumbleupon.com
---