webpackJsonp([9061458382302],{657:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Today we’re releasing React v0.11.2 to add a few small features.</p>\n<p>We’re adding support for two more DOM elements, <code>&#x3C;dialog></code> and <code>&#x3C;picture></code>, as well as the associated attributes needed to use these elements: <code>open</code>, <code>media</code>, and <code>sizes</code>. While not all browsers support these natively, some of our cutting edge users want to make use of them, so we’re making them available to everybody.</p>\n<p>We’re also doing some work to prepare for v0.12 and improve compatibility between the versions. To do this we are replacing <code>React.createDescriptor</code> with <code>React.createElement</code>. <code>createDescriptor</code> will continue to work with a warning and will be gone in v0.12. Chances are that this won’t affect anybody.</p>\n<p>And lastly, on the heels of announcing Flow at <a href="http://atscaleconference.com/">@Scale</a> yesterday, we’re adding the ability to strip TypeScript-like type annotations as part of the <code>jsx</code> transform. To use, simply use the <code>--strip-types</code> flag on the command line, or set <code>stripTypes</code> in the <code>options</code> object when calling the API. We’ll be talking about Flow more in the coming months. But for now, it’s helpful to know that it is a flow-sensitive JavaScript type checker we will be open sourcing soon.</p>\n<p>The release is available for download from the CDN:</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://fb.me/react-0.11.2.js">https://fb.me/react-0.11.2.js</a><br>\nMinified build for production: <a href="https://fb.me/react-0.11.2.min.js">https://fb.me/react-0.11.2.min.js</a>  </li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://fb.me/react-with-addons-0.11.2.js">https://fb.me/react-with-addons-0.11.2.js</a><br>\nMinified build for production: <a href="https://fb.me/react-with-addons-0.11.2.min.js">https://fb.me/react-with-addons-0.11.2.min.js</a>  </li>\n<li><strong>In-Browser JSX transformer</strong><br>\n<a href="https://fb.me/JSXTransformer-0.11.2.js">https://fb.me/JSXTransformer-0.11.2.js</a></li>\n</ul>\n<p>We’ve also published version <code>0.11.2</code> of the <code>react</code> and <code>react-tools</code> packages on npm and the <code>react</code> package on bower.</p>\n<p>Please try these builds out and <a href="https://github.com/facebook/react/issues/new">file an issue on GitHub</a> if you see anything awry.</p>\n<h3 id="react-core"><a href="#react-core" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Core</h3>\n<h4 id="new-features"><a href="#new-features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Features</h4>\n<ul>\n<li>Added support for <code>&#x3C;dialog></code> element and associated <code>open</code> attribute</li>\n<li>Added support for <code>&#x3C;picture></code> element and associated <code>media</code> and <code>sizes</code> attributes</li>\n<li>\n<p>Added <code>React.createElement</code> API in preparation for React v0.12</p>\n<ul>\n<li><code>React.createDescriptor</code> has been deprecated as a result</li>\n</ul>\n</li>\n</ul>\n<h3 id="jsx"><a href="#jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX</h3>\n<ul>\n<li><code>&#x3C;picture></code> is now parsed into <code>React.DOM.picture</code></li>\n</ul>\n<h3 id="react-tools"><a href="#react-tools" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Tools</h3>\n<ul>\n<li>Update <code>esprima</code> and <code>jstransform</code> for correctness fixes</li>\n<li>\n<p>The <code>jsx</code> executable now exposes a <code>--strip-types</code> flag which can be used to remove TypeScript-like type annotations</p>\n<ul>\n<li>This option is also exposed to <code>require(\'react-tools\').transform</code> as <code>stripTypes</code></li>\n</ul>\n</li>\n</ul>',excerpt:"Today we’re releasing React v0.11.2 to add a few small features. We’re adding support for two more DOM elements,  <dialog>  and  <picture> , as well as the associated attributes needed to use these elements:  open ,  media , and  sizes . While not all browsers support these natively, some of our cutting edge users want to make use of them, so we’re making them available to everybody. We’re also doing some work to prepare for v0.12 and improve compatibility between the versions. To do this we are…",frontmatter:{title:"React v0.11.2",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"September 16, 2014",path:"blog/2014-09-16-react-v0.11.2.md",slug:"/blog/2014/09/16/react-v0.11.2.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}}]}},pathContext:{slug:"/blog/2014/09/16/react-v0.11.2.html"}}}});
//# sourceMappingURL=path---blog-2014-09-16-react-v-0-11-2-html-34b98d2aee73faa9e2f2.js.map