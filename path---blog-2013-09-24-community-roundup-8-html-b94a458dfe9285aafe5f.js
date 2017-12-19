webpackJsonp([0xc5f5499ff2ac],{624:function(e,t){e.exports={data:{markdownRemark:{html:'<p>A lot has happened in the month since our last update. Here are some of the more interesting things we’ve found. But first, we have a couple updates before we share links.</p>\n<p>First, we are organizing a <a href="http://reactjshack-a-thon.splashthat.com/">React Hackathon</a> in Facebook’s Seattle office on Saturday September 28. If you want to hack on React, meet some of the team or win some prizes, feel free to join us!</p>\n<p>We’ve also reached a point where there are too many questions for us to handle directly. We’re encouraging people to ask questions on <a href="http://stackoverflow.com/questions/tagged/reactjs">StackOverflow</a> using the tag <a href="http://stackoverflow.com/questions/tagged/reactjs">[reactjs]</a>. Many members of the team and community have subscribed to the tag, so feel free to ask questions there. We think these will be more discoverable than Google Groups archives or IRC logs.</p>\n<h2 id="javascript-jabber"><a href="#javascript-jabber" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JavaScript Jabber</h2>\n<p><a href="http://www.petehunt.net/">Pete Hunt</a> and <a href="https://github.com/jordwalke">Jordan Walke</a> were interviewed on <a href="http://javascriptjabber.com/073-jsj-react-with-pete-hunt-and-jordan-walke/">JavaScript Jabber</a> for an hour.  They go over many aspects of React such as 60 FPS, Data binding, Performance, Diffing Algorithm, DOM Manipulation, Node.js support, server-side rendering, JSX, requestAnimationFrame and the community. This is a gold mine of information about React.</p>\n<blockquote>\n<p><strong>PETE:</strong>  So React was designed all around that. Conceptually, how you build a React app is that every time your data changes, it’s like hitting the refresh button in a server-rendered app. What we do is we conceptually throw out all of the markup and event handlers that you’ve registered and we reset the whole page and then we redraw the entire page. If you’re writing a server-rendered app, handling updates is really easy because you hit the refresh button and you’re pretty much guaranteed to get what you expect.</p>\n<p><strong>MERRICK:</strong>  That’s true. You don’t get into these odd states.</p>\n<p><strong>PETE:</strong>  Exactly, exactly. In order to implement that, we communicate it as a fake DOM. What we’ll do is rather than throw out the actual browser html and event handlers, we have an internal representation of what the page looks like and then we generate a brand new representation of what we want the page to look like. Then we perform this really, really fast diffing algorithm between those two page representations, DOM representations. Then React will compute the minimum set of DOM mutations it needs to make to bring the page up to date.</p>\n<p>Then to finally get to answer your question, that set of DOM mutations then goes into a queue and we can plug in arbitrary flushing strategies for that. For example, when we originally launched React in open source, every setState would immediately trigger a flush to the DOM. That wasn’t part of the contract of setState, but that was just our strategy and it worked pretty well. Then this totally awesome open source contributor Sophie Alpert at Khan Academy built a new batching strategy which would basically queue up every single DOM update and state change that happened within an event tick and would execute them in bulk at the end of the event tick.</p>\n<p><a href="http://javascriptjabber.com/073-jsj-react-with-pete-hunt-and-jordan-walke/">Read the full conversation …</a></p>\n</blockquote>\n<h2 id="jsxtransformer-trick"><a href="#jsxtransformer-trick" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSXTransformer Trick</h2>\n<p>While this is not going to work for all the attributes since they are camelCased in React, this is a pretty cool trick.</p>\n<div style="margin-left: 74px;"><blockquote class="twitter-tweet"><p>Turn any DOM element into a React.js function: JSXTransformer.transform(&quot;/** <a href="https://twitter.com/jsx">@jsx</a> React.DOM */&quot; + element.innerHTML).code</p>&mdash; Ross Allen (@ssorallen) <a href="https://twitter.com/ssorallen/statuses/377105575441489920">September 9, 2013</a></blockquote></div>\n<h2 id="remarkable-react"><a href="#remarkable-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Remarkable React</h2>\n<p><a href="http://www.phpied.com/">Stoyan Stefanov</a> gave a talk at <a href="http://braziljs.com.br/">BrazilJS</a> about React and wrote an article with the content of the presentation. He goes through the difficulties of writing <em>active apps</em> using the DOM API and shows how React handles it.</p>\n<blockquote>\n<p>So how does exactly React deal with it internally? Two crazy ideas - virtual DOM and synthetic events.</p>\n<p>You define you components in React. It builds a virtual DOM in JavaScript land which is way more efficient. Then it updates the DOM. (And “virtual DOM” is a very big name for what is simply a JavaScript object with nested key-value pairs)</p>\n<p>Data changes. React computes a diff (in JavaScript land, which is, of course, much more efficient) and updates the single table cell that needs to change. React replicates the state of the virtual DOM into the actual DOM only when and where it’s necessary. And does it all at once, in most cases in a single tick of the <code>requestAnimationFrame()</code>.</p>\n<p>What about event handlers? They are synthetic. React uses event delegation to listen way at the top of the React tree. So removing a node in the virtual DOM has no effect on the event handling.</p>\n<p>The events are automatically cross-browser (they are React events). They are also much closer to W3C than any browser. That means that for example <code>e.target</code> works, no need to look for the event object or checking whether it’s <code>e.target</code> or <code>e.srcElement</code> (IE). Bubbling and capturing phases also work cross browser. React also takes the liberty of making some small fixes, e.g. the event <code>&#x3C;input onChange></code> fires when you type, not when blur away from the input. And of course, event delegation is used as the most efficient way to handle events. You know that “thou shall use event delegation” is also commonly given advice for making web apps snappy.</p>\n<p>The good thing about the virtual DOM is that it’s all in JavaScript land. You build all your UI in JavaScript. Which means it can be rendered on the server side, so you initial view is fast (and any SEO concerns are addressed). Also, if there are especially heavy operations they can be threaded into WebWorkers, which otherwise have no DOM access.</p>\n<p><a href="http://www.phpied.com/remarkable-react/">Read More …</a></p>\n</blockquote>\n<h2 id="markdown-in-react"><a href="#markdown-in-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Markdown in React</h2>\n<p><a href="http://sophiebits.com/">Sophie Alpert</a> converted <a href="https://github.com/chjj/marked">marked</a>, a Markdown JavaScript implementation, in React: <a href="https://github.com/sophiebits/marked-react">marked-react</a>. Even without using JSX, the HTML generation is now a lot cleaner. It is also safer as forgetting a call to <code>escape</code> will not introduce an XSS vulnerability.</p>\n<figure><a href="https://github.com/sophiebits/marked-react/commit/cb70c9df6542c7c34ede9efe16f9b6580692a457">\n  <a class="gatsby-resp-image-link" href="/static/markdown_refactor-783ad0cd251ae63e77cdac409f51ec1a-7fb92.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 233px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 129.1845493562232%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAIAAAA44esqAAAACXBIWXMAAA7DAAAOwwHHb6hkAAADZklEQVQ4y21UiXKiQBDl//9nq/bKhnhwidwDwzCgBjUxWXXXiCfgPiS6uNmqcaoH+/Xrft0zwimO95SekqSI2JMmjxX5VdOXln2gwcpxXjT9SVEfpe5UU7dBAOfmEq5Wyfku8FeO++a6B8pyFmaEZMTPXA+wgvMiioqIw+0GXDHjkCQ5i5am+dPo89ZD+O07/f6QSu1YFKP7HxNJGYhi3Gr/7FtXfAUur+RxXNR/DAYlYoEqgT06JQOErvcji0reYD6EYc18ZGxlO8eQrlyvigLvOi6QVWhefqz5mkbFHPEDpWvP3RBv4wdbQlauk/l+s9QbcJN5rptvjjPVFJQ6kuSZKkHqoSTvIPWZ/wPz5VBUggenQbINw4VhrBx75brHMCwAGw7PZSeQ4wa8uzQQCr0RDxkC9qr3nlR12O2sCdmHIbJDw/Yh3QX0Ru2csXfmKMo8D2wv/f6Lpk1lfWEaMxiqurTNiSLPeupYUVFdXYJQYy5gvvF8jMrStpem9duBZn7mEUTcV8x+Rry17xdN5uOFGWkDjFj7kKHyc3nJu3Hpc1M2ocZcJ7RSPuJ7GtZjV96OUPP4PzALy4ihwxufgKT80Nt/W5U30t4SP49YFlSFledwV23rL/+m3RQMnSgYgzyV02hYtRc7akaINK3r+r9gAK89DxOGO/Rq9BaGPWx1Ukked6W5aSTiw0SWU1mem2adjlAmcc4j7JWBPhOCwX7W9bnZn5vWs9bDw7C0rCwgr7r+23XfCNnSoPYXTvycdnXLkqKaNookM5/8sq1tQHNcyTStFvLHPhqdBuc5hT+PhfGG05kz2SfpJnIfNXOg0KllD1Uzkfux6o51f2b1WNt/NsnE8J+sdMvHu7heArSieEFOCSsjZ22beIfWHj1Sb+P2F6aTec7G6837ZO/354a+NFnJAamXgA7YC7tKGvg9kwfdFheVaY+sbZHe3Yd30qMsDboiE62lDedmowX8+PVTGUfoMhLJOWx2YJfjeS84CG7AQNrLd2Y4yeNOi9+145Y5t+xfxmfjk/5iqGmrM2x/876AHIN+y3x+0bAzdDxn/pbQA62erDzCPcaTi0HHd7rzcQzO9l9ma2FXBR9Da6G7a/LARGWiqKnSiVv3VBSDe+mxK406X62v2lRpjyS8Es6KYFb/AL49YGVWXBWrAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="markdown refactor" title="" src="/static/markdown_refactor-783ad0cd251ae63e77cdac409f51ec1a-7fb92.png" srcset="/static/markdown_refactor-783ad0cd251ae63e77cdac409f51ec1a-1e38c.png 210w,\n/static/markdown_refactor-783ad0cd251ae63e77cdac409f51ec1a-7fb92.png 233w" sizes="(max-width: 233px) 100vw, 233px">\n    </span>\n  </span>\n  \n  </a>\n    </a></figure>\n<h2 id="unite-from-bugbusters"><a href="#unite-from-bugbusters" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Unite from BugBusters</h2>\n<p><a href="https://twitter.com/renajohn">Renault John Lecoultre</a> wrote <a href="https://www.bugbuster.com/">Unite</a>, an interactive tool for analyzing code dynamically using React. It integrates with CodeMirror.</p>\n<figure><a href="https://unite.bugbuster.com/">\n  <a class="gatsby-resp-image-link" href="/static/unite-15b2439e1b8523156ef985b3855a83ba-38f05.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 39.6%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAvUlEQVQY052RvQ6CMBSF+74OPonxHZz1EXAw+LOROKiR8H8LpdACvSAaorET0UGDfvmWk3Q4PZdgjUoIGYPIYp4CT5Lbtb4/uiESpVSOYSaCFCGWNisdXvtVR4dIFtZ4bo229kwOAABczwvCiFIKEJHlcWqcJofIKH+HVFVZFAVQiojNO5xzxljzGSLbiF/s/yQU944yz3LlN5uw3b3qqvWX6KCp1650bd1Qj6GXf22lfyWk6KN+lud5H/WBn6dFuX8qcZWvAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="unite" title="" src="/static/unite-15b2439e1b8523156ef985b3855a83ba-38f05.png" srcset="/static/unite-15b2439e1b8523156ef985b3855a83ba-23e95.png 210w,\n/static/unite-15b2439e1b8523156ef985b3855a83ba-a78cd.png 420w,\n/static/unite-15b2439e1b8523156ef985b3855a83ba-38f05.png 500w" sizes="(max-width: 500px) 100vw, 500px">\n    </span>\n  </span>\n  \n  </a>\n    </a></figure>\n<h2 id="reactjs-irc-logs"><a href="#reactjs-irc-logs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>#reactjs IRC Logs</h2>\n<p><a href="http://blog.vjeux.com/">Vjeux</a> re-implemented the display part of the IRC logger in React. Just 130 lines are needed for a performant infinite scroll with timestamps and color-coded author names.</p>\n<p><a href="http://jsfiddle.net/vjeux/QL9tz">View the source on JSFiddle…</a></p>',excerpt:"A lot has happened in the month since our last update. Here are some of the more interesting things we’ve found. But first, we have a couple updates before we share links. First, we are organizing a  React Hackathon  in Facebook’s Seattle office on Saturday September 28. If you want to hack on React, meet some of the team or win some prizes, feel free to join us! We’ve also reached a point where there are too many questions for us to handle directly. We’re encouraging people to ask questions on…",frontmatter:{title:"Community Round-up #8",next:null,prev:null,author:[{frontmatter:{name:"Vjeux",url:"https://twitter.com/vjeux"}}]},fields:{date:"September 24, 2013",path:"blog/2013-09-24-community-roundup-8.md",slug:"/blog/2013/09/24/community-roundup-8.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}}]}},pathContext:{slug:"/blog/2013/09/24/community-roundup-8.html"}}}});
//# sourceMappingURL=path---blog-2013-09-24-community-roundup-8-html-b94a458dfe9285aafe5f.js.map