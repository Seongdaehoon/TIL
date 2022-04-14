# Markdown Tutorial _ 14. Apr, 2022

## Lesson 1. Italics and Bold
1. Writing in Markdown is _not_ that hard! (Italics)
2. I **will** complete these lessons! (Bold)
3. "_Of course_," she whispered. Then, she shouted: "All I need is **a little moxie!**"
4. If you're thinking to yourself, **_This is unbelievable_**, you'd probably be right.


## Lesson 2. Headers
```
# Header one
## Header two
### Header three
#### Header four
##### Header five
###### Header six
```

## Lesson 3. Links

### 1. _inline link_ 
: to create an inline link, you wrap the link thext in brackets ( `[ ]` ), and then you wrap the link in parenthesis ( `( )` ). 
- [Visit Github](www.github.com)
- [You're **really, really** going to want to see this.](www.dailykitten.com)
- #### The Latest News from [the BBC](www.bbc.com/news)
### 2. _reference link_ 
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


## Lesson 4. Images

Images also have two styles, just like links, and both of them render the exact same way. The difference between links and images is that images are prefaced with an exclamation point(`!`)
1. _inline image link_
: enter an exlamation point(`!`), wrap the alt text in brackets ( `[ ]` ), and then wrap the link in parenthesis (`( )`). Alt text is a phrease or sentence that describes the image for the visually impaired.

```
[Code]
![A pretty tiger](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg)
```

![A pretty tiger](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg)

2. _reference image link_: Similar patterns with link

```
![Black cat][Black]
![Orange cat][Orange]

[Black]: https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg
[Orange]: http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22221-cat-icon.png

```

![Black cat][Black]
![Orange cat][Orange]

[Black]: https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg
[Orange]: http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22221-cat-icon.png

## Lesson 5. Blockquotes
If you need to call special attention to a quote from another source, or design a pull quote for a magazine article, then Markdown's _blockquote_ syntax will be useful. A blockquote is a sentence or paragrapth that's been specially formatted to draw attention to the reader.
To create a blockquote, all you have to do is preface a line with the "greater than" caret (`>`).
> "In a few moments he was barefoot, his stockings folded in his pockets and his
  canvas shoes dangling by their knotted laces over his shoulders and, picking a
  pointed salt-eaten stick out of the jetsam among the rocks, he clambered down
  the slope of the breakwater."