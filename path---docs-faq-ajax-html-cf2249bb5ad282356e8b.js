webpackJsonp([0xa9b59da89152],{758:function(n,a){n.exports={data:{markdownRemark:{html:'<h3 id="怎样发送-ajax-请求"><a href="#%E6%80%8E%E6%A0%B7%E5%8F%91%E9%80%81-ajax-%E8%AF%B7%E6%B1%82" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>怎样发送 AJAX 请求?</h3>\n<p>你可以在 React 中使用任何你喜欢的 AJAX 库，例如很受欢迎的 <a href="https://github.com/axios/axios">Axios</a>，<a href="https://api.jquery.com/jQuery.ajax/">jQuery AJAX</a> 和浏览器内置的 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">window.fetch</a>。</p>\n<h3 id="我应该在组件的哪个生命周期发送-ajax-请求"><a href="#%E6%88%91%E5%BA%94%E8%AF%A5%E5%9C%A8%E7%BB%84%E4%BB%B6%E7%9A%84%E5%93%AA%E4%B8%AA%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%8F%91%E9%80%81-ajax-%E8%AF%B7%E6%B1%82" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>我应该在组件的哪个生命周期发送 AJAX 请求?</h3>\n<p>你应该在 <a href="/docs/react-component.html#mounting"><code>componentDidMount</code></a> 生命周期方法内发送 AJAX 请求数据。这样你才能够在请求的数据到达时使用 <code>setState</code> 更新你的组件。</p>\n<h3 id="示例-使用-ajax-请求的结果设置组件内状态"><a href="#%E7%A4%BA%E4%BE%8B-%E4%BD%BF%E7%94%A8-ajax-%E8%AF%B7%E6%B1%82%E7%9A%84%E7%BB%93%E6%9E%9C%E8%AE%BE%E7%BD%AE%E7%BB%84%E4%BB%B6%E5%86%85%E7%8A%B6%E6%80%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>示例: 使用 AJAX 请求的结果设置组件内状态</h3>\n<p>下方的组件展示了如何在 <code>componentDidMount</code> 方法内使用 AJAX 请求并将结果填入组件内的状态。</p>\n<p>示例的 API 返回的 JSON 对象结构如下：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>{\n  items: [\n    { id: 1, name: \'Apples\', price: \'$2\' },\n    { id: 2, name: \'Peaches\', price: \'$5\' }\n  ]\n}</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      error<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n      isLoaded<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      items<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://api.example.com/items"</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>\n        <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            isLoaded<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            items<span class="token punctuation">:</span> result<span class="token punctuation">.</span>items\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token comment">// Note: it\'s important to handle errors here</span>\n        <span class="token comment">// instead of a catch() block so that we don\'t swallow</span>\n        <span class="token comment">// exceptions from actual bugs in components.</span>\n        <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            isLoaded<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            error\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> error<span class="token punctuation">,</span> isLoaded<span class="token punctuation">,</span> items <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Error<span class="token punctuation">:</span> <span class="token punctuation">{</span>error<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isLoaded<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Loading<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n              <span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span> <span class="token punctuation">{</span>item<span class="token punctuation">.</span>price<span class="token punctuation">}</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="取消-ajax-请求"><a href="#%E5%8F%96%E6%B6%88-ajax-%E8%AF%B7%E6%B1%82" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>取消 AJAX 请求</h3>\n<p>需要注意的是，如果组件在 AJAX 请求完成之前被卸载了，那么你会在浏览器的控制面板上看到一条警告：<code>cannot read property \'setState\' of undefined</code>。如果这对你来说是个问题的话，你可以追踪未完成的 AJAX 请求并在 <code>componentWillUnmount</code> 生命周期方法内将它们取消。</p>',frontmatter:{title:"AJAX and APIs",next:null,prev:null},fields:{path:"docs/faq-ajax.md",slug:"docs/faq-ajax.html"}}},pathContext:{slug:"docs/faq-ajax.html"}}}});
//# sourceMappingURL=path---docs-faq-ajax-html-cf2249bb5ad282356e8b.js.map