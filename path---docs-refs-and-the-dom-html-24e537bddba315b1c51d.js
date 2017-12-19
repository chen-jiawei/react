webpackJsonp([87547260598082],{791:function(n,s){n.exports={data:{markdownRemark:{html:'<p>在典型的 React 数据流中, <a href="/docs/components-and-props.html">属性（props）</a>是父组件与子代交互的唯一方式。要修改子组件，你需要通用新的 props 重新渲染它。但是，某些情况下你需要在典型数据流外强制修改子代。要修改的子代可以是 React 组件实例，也可以是 DOM 元素。对于这两种情况，React 提供了解决办法。</p>\n<h3 id="何时使用-refs"><a href="#%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8-refs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>何时使用 Refs</h3>\n<p>下面是几个适合使用 refs 的情况：</p>\n<ul>\n<li>处理焦点、文本选择或媒体控制。</li>\n<li>触发强制动画。</li>\n<li>集成第三方 DOM 库</li>\n</ul>\n<p>如果可以通过声明式实现，则尽量避免使用 refs。</p>\n<p>例如，不要在 <code>Dialog</code> 组件上直接暴露 <code>open()</code> 和 <code>close()</code> 方法，最好传递 <code>isOpen</code> 属性。</p>\n<h3 id="不要过度使用-refs"><a href="#%E4%B8%8D%E8%A6%81%E8%BF%87%E5%BA%A6%E4%BD%BF%E7%94%A8-refs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>不要过度使用 Refs</h3>\n<p>你可能首先会想到在你的应用程序中使用 refs 来更新组件。如果是这种情况，请花一点时间，更多的关注在组件层中使用 state。在组件层中，通常较高级别的 state 更为清晰。有关示例，请参考<a href="/docs/lifting-state-up.html">状态提升</a>.</p>\n<h3 id="为-dom-元素添加-ref"><a href="#%E4%B8%BA-dom-%E5%85%83%E7%B4%A0%E6%B7%BB%E5%8A%A0-ref" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>为 DOM 元素添加 Ref</h3>\n<p>React 支持给任意组件添加特殊属性。<code>ref</code> 属性接受一个回调函数，它在组件被加载或卸载时会立即执行。</p>\n<p>当给 HTML 元素添加 <code>ref</code> 属性时，<code>ref</code> 回调接收了底层的 DOM 元素作为参数。例如，下面的代码使用 <code>ref</code> 回调来存储 DOM 节点的引用。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">CustomTextInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>focus <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>focus<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token comment">// 直接使用原生 API 使 text 输入框获得焦点</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 使用 `ref` 的回调将 text 输入框的 DOM 节点存储到 React </span>\n    <span class="token comment">// 实例上（比如 this.textInput）</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>input\n          type<span class="token operator">=</span><span class="token string">"text"</span>\n<span class="gatsby-highlight-code-line">          ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>textInput <span class="token operator">=</span> input<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n</span>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>\n          <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Focus the text input<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>focus<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>React 组件在加载时将 DOM 元素传入 <code>ref</code> 的回调函数，在卸载时则会传入 <code>null</code>。<code>ref</code> 回调会在<code>componentDidMount</code> 或 <code>componentDidUpdate</code> 这些生命周期回调之前执行。</p>\n<p>为了在类上设置一个属性使用 <code>ref</code> 回调是访问 DOM 元素的常见模式。首先的方法就如上面的例子中一样设置 <code>ref</code>。甚至还有更简短的写法： <code>ref={input => this.textInput = input}</code>。</p>\n<h3 id="为类组件添加-ref"><a href="#%E4%B8%BA%E7%B1%BB%E7%BB%84%E4%BB%B6%E6%B7%BB%E5%8A%A0-ref" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>为类组件添加 Ref</h3>\n<p>当 <code>ref</code> 属性用于使用 class 声明的自定义组件时，<code>ref</code> 的回调接收的是已经加载的 React 实例。例如，如果我们想修改 <code>CustomTextInput</code> 组件，实现它在加载后立即点击的效果：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">AutoFocusTextInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">.</span><span class="token function">focusTextInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>CustomTextInput\n<span class="gatsby-highlight-code-line">        ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>textInput <span class="token operator">=</span> input<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n</span>    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>需要注意的是，这种方法仅对 <code>class</code> 声明的 <code>CustomTextInput</code> 有效：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="gatsby-highlight-code-line"><span class="token keyword">class</span> <span class="token class-name">CustomTextInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n</span>  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="refs-与函数式组件"><a href="#refs-%E4%B8%8E%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Refs 与函数式组件</h3>\n<p><strong>你不能在函数式组件上使用 <code>ref</code> 属性</strong>，因为它们没有实例：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="gatsby-highlight-code-line"><span class="token keyword">function</span> <span class="token function">MyFunctionalComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span>  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token comment">// 这里 `ref` 无效！</span>\n</span>    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>MyFunctionalComponent\n        ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>textInput <span class="token operator">=</span> input<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>如果你想使用 <code>ref</code>，就像你想使用生命周期方法或者 state 一样，应该将其转换为 <code>class</code> 组件。</p>\n<p>但是，你可以在函数式组件内部使用 <code>ref</code>，只要它指向一个 DOM 元素或者 class 组件：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">CustomTextInput</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token comment">// 这里必须声明 textInput，这样 ref 回调才可以引用它</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token keyword">let</span> textInput <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n</span>\n  <span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    textInput<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token operator">&lt;</span>input\n        type<span class="token operator">=</span><span class="token string">"text"</span>\n<span class="gatsby-highlight-code-line">        ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> textInput <span class="token operator">=</span> input<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n</span>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>\n        <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Focus the text input<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>  \n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="对父组件暴露-dom-节点"><a href="#%E5%AF%B9%E7%88%B6%E7%BB%84%E4%BB%B6%E6%9A%B4%E9%9C%B2-dom-%E8%8A%82%E7%82%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>对父组件暴露 DOM 节点</h3>\n<p>在极少数情况下，你可能希望从父组件访问子节点的 DOM 节点。通常不建议这样做，因为它会破坏组件的封装，但偶尔也可用于触发焦点或测量子 DOM 节点的大小或位置。</p>\n<p>虽然你可以<a href="#adding-a-ref-to-a-class-component">向子组件添加 ref</a>,但这不是一个理想的解决方案，因为你只能获取组件实例而不是 DOM 节点。并且，它还在函数式组件上无效。</p>\n<p>相反，在这种情况下，我们建议在子节点上暴露一个特殊的属性。子节点将会获得一个函数属性，并将其作为 <code>ref</code> 属性附加到 DOM 节点。这允许父代通过中间件将 <code>ref</code> 回调给子代的 DOM 节点。</p>\n<p>适用于类组件和函数式组件。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">CustomTextInput</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>inputRef<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomTextInput</span>\n<span class="gatsby-highlight-code-line">        <span class="token attr-name">inputRef</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>el <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>inputElement <span class="token operator">=</span> el<span class="token punctuation">}</span></span>\n</span>      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>在上面的例子中，<code>Parent</code> 将它的 ref 回调作为一个特殊的 <code>inputRef</code> 传递给 <code>CustomTextInput</code>，然后 <code>CustomTextInput</code> 通过 <code>ref</code> 属性将其传递给 <code>&#x3C;input></code>。最终，<code>Parent</code> 中的 <code>this.inputElement</code> 将被设置为与 <code>CustomTextInput</code> 中的 <code>&#x3C;input></code> 元素相对应的 DOM 节点。</p>\n<p>请注意，上述示例中的 <code>inputRef</code> 属性没有特殊的含义，它只是一般的组件属性。然而，使用 <code>&#x3C;input></code> 本身的 ref 属性很重要，因为它告诉 React 将 ref 附加到它的 DOM 节点。</p>\n<p>即使 <code>CustomTextInput</code> 是一个函数式组件，它也同样有效。与<a href="#refs-and-functional-components">只能为 DOM 元素和 class 组件指定的 ref</a> 不同，诸如 <code>inputRef</code> 这种自定义的组件属性则没有限制。</p>\n<p>这种模式的另一个好处是它能作用很深。假如有个 <code>Parent</code> 组件不需要 DOM 节点 A，但是某个渲染 <code>Parent</code> 的组件（我们称之为 <code>Grandparent</code>）需要通过它访问。这时我们可以让 <code>Grandparent</code> 传递 <code>inputRef</code> 给 <code>Parent</code> 组件，然后让 <code>Parent</code> 组件将其转发给 <code>CustomTextInput</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">CustomTextInput</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>inputRef<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">      My input<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomTextInput</span> <span class="token attr-name">inputRef</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>inputRef<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token keyword">class</span> <span class="token class-name">Grandparent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Parent</span>\n<span class="gatsby-highlight-code-line">        <span class="token attr-name">inputRef</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>el <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>inputElement <span class="token operator">=</span> el<span class="token punctuation">}</span></span>\n</span>      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>上面的例子中，<code>Grandparent</code> 首先指定了 ref 回调函数。它通过一个常规的 <code>inputRef</code> 属性被传递到 <code>Parent</code>，<code>Parent</code> 也同样把它传递给了 <code>CustomTextInput</code>。最后 <code>CustomTextInput</code> 读取了 <code>inputRef</code> 属性并将传递的函数作为 <code>ref</code> 属性附加到 <code>&#x3C;input></code>。最终，<code>Grandparent</code> 中的 <code>this.inputElement</code> 被设置为 <code>CustomTextInput</code> 的 <code>input</code> 对应的 DOM 节点。</p>\n<p>总而言之，我们建议尽可能不暴露 DOM 节点，但这是一个有用的解决方式。请注意，此方法要求您向子组件添加一些代码，如果你无法完全控制子组件，最后的办法是使用 <a href="/docs/react-dom.html#finddomnode"><code>findDOMNode()</code></a>，但是不推荐这样做。</p>\n<h3 id="旧版-api：string-类型的-refs"><a href="#%E6%97%A7%E7%89%88-api%EF%BC%9Astring-%E7%B1%BB%E5%9E%8B%E7%9A%84-refs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>旧版 API：String 类型的 Refs</h3>\n<p>如果你之前使用过 React ，你可能了解过之前的API中的 string 类型的 ref 属性，比如 “textInput” ，你可以通过 this.refs.textInput 访问DOM节点。我们不建议使用它，因为 String 类型的 refs <a href="https://github.com/facebook/pull/8333#issuecomment-271648615">存在问题</a>。它已过时并<strong>可能会在未来的版本是移除</strong>。如果你目前还在使用 this.refs.textInput 这种方式访问 refs ，我们建议用回调函数的方式代替。</p>\n<h3 id="注意"><a href="#%E6%B3%A8%E6%84%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>注意</h3>\n<p>如果 ref 回调以内联函数的方式定义，在更新期间它会被调用两次，第一次参数是 null ，之后参数是 DOM 元素。这是因为在每次渲染中都会创建一个新的函数实例。因此，React 需要清理旧的 ref 并且设置新的。通过将 ref 的回调函数定义成类的绑定函数的方式可以避免上述问题，但是大多数情况下无关紧要。</p>',frontmatter:{title:"Refs & DOM",next:null,prev:null},fields:{path:"docs/refs-and-the-dom.md",slug:"docs/refs-and-the-dom.html"}}},pathContext:{slug:"docs/refs-and-the-dom.html"}}}});
//# sourceMappingURL=path---docs-refs-and-the-dom-html-24e537bddba315b1c51d.js.map