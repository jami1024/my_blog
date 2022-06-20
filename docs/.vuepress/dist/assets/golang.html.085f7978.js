import{_ as n,d as s}from"./app.1f9c46a3.js";const a={},p=s(`<h1 id="\u9082\u9005golang" tabindex="-1"><a class="header-anchor" href="#\u9082\u9005golang" aria-hidden="true">#</a> \u9082\u9005Golang</h1><blockquote><p>\u5165\u95E8\u5230\u653E\u5F03</p></blockquote><h2 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h2><p>\u7528\u4E8E\u5BF9\u4EE3\u7801\u5757\u7684\u903B\u8F91\u5C01\u88C5\uFF0C\u63D0\u4F9B\u4EE3\u7801\u590D\u7528\u7684\u6700\u57FA\u672C\u65B9\u5F0F\u3002</p><h3 id="\u51FD\u6570\u7684\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684\u5B9A\u4E49" aria-hidden="true">#</a> \u51FD\u6570\u7684\u5B9A\u4E49</h3><p>\u51FD\u6570\u5305\u542B\u51FD\u6570\u540D\u3001\u884C\u53C2\u5217\u8868\u3001\u51FD\u6570\u4F53\u548C\u8FD4\u56DE\u503C\u5217\u8868,\u4F7F\u7528 func \u8FDB\u884C\u58F0\u660E,\u51FD\u6570\u65E0\u53C2\u6570\u6216\u8FD4\u56DE\u503C\u65F6\u5219\u5F62\u53C2\u5217\u8868\u548C\u8FD4\u56DE\u503C\u5217\u8868\u7701\u7565</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">FuncName</span><span class="token punctuation">(</span>parameters<span class="token punctuation">)</span> returns <span class="token punctuation">{</span>
    body
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u51FD\u6570\u7684\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684\u53C2\u6570" aria-hidden="true">#</a> \u51FD\u6570\u7684\u53C2\u6570</h3><p>\u5728\u58F0\u660E\u51FD\u6570\u4E2D\u82E5\u5B58\u5728\u591A\u4E2A\u8FDE\u7EED\u884C\u53C2\u7C7B\u578B\u76F8\u540C\u53EF\u53EA\u4FDD\u7559\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u7C7B\u578B\u540D</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">/*
\u5408\u5E76\u76F8\u540C\u7C7B\u578B\u53C2\u6570\u7C7B\u578B\u540D
*/</span>

<span class="token keyword">func</span> <span class="token function">mergeFuncArgsType</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2 <span class="token builtin">int</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2 <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T, %T, %T, %T\\n&quot;</span><span class="token punctuation">,</span> n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">mergeFuncArgsType</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;s1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s2&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

\u7ED3\u679C\uFF1A
<span class="token number">1</span> <span class="token number">2</span> s1 s2
<span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="\u53EF\u53D8\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53EF\u53D8\u53C2\u6570" aria-hidden="true">#</a> \u53EF\u53D8\u53C2\u6570</h4><p>\u67D0\u4E9B\u60C5\u51B5\u4E0B\u51FD\u6570\u9700\u8981\u5904\u7406\u884C\u53C2\u6570\u91CF\u53EF\u53D8\uFF0C\u9700\u8981\u8FD0\u7B97\u7B26 **...**\u58F0\u660E\u53EF\u53D8\u53C2\u6570\u51FD\u6570\u6216\u5728\u8C03\u7528\u65F6\u4F20\u9012\u53EF\u53D8\u53C2\u6570\uFF1B\u5728\u8C03\u7528\u51FD\u6570\u65F6,\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8FD0\u7B97\u7B26\u2026\u5C06\u5207\u7247\u89E3\u5305\u4F20\u9012\u5230\u53EF\u53D8\u53C2\u6570\u51FD\u6570\u4E2D</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/*
\u5B9A\u4E49\u53EF\u53D8\u53C2\u6570,\u53EF\u53D8\u53C2\u6570\u53EA\u80FD\u5B9A\u4E49\u4E00\u4E2A\u4E14\u53EA\u80FD\u5728\u53C2\u6570\u5217\u8868\u672B\u7AEF\u3002 \u5728\u8C03\u7528\u51FD\u6570\u540E, \u53EF\u53D8\u53C2\u6570\u5219\u88AB\u521D\u59CB\u5316\u4E3A\u5BF9\u5E94\u7C7B\u578B\u7684\u5207\u7247
*/</span>
<span class="token keyword">func</span> <span class="token function">printArgs</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2 <span class="token builtin">int</span><span class="token punctuation">,</span> args <span class="token operator">...</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T,%T,%T\\n&quot;</span><span class="token punctuation">,</span> n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u8C03\u7528\u53EF\u53D8\u53C2\u6570\u51FD\u6570</span>
	<span class="token function">printArgs</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">//\u901A\u8FC7\u5207\u7247\u89E3\u5305\u5E76\u8C03\u7528\u53EF\u53D8\u53C2\u6570\u51FD\u6570</span>
	<span class="token function">printArgs</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">}</span><span class="token operator">...</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

\u7ED3\u679C\uFF1A
<span class="token builtin">int</span><span class="token punctuation">,</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token punctuation">[</span>a b c<span class="token punctuation">]</span>
<span class="token builtin">int</span><span class="token punctuation">,</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="\u51FD\u6570\u7684\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u51FD\u6570\u7684\u8FD4\u56DE\u503C</h3><p>\u5728\u51FD\u6570\u63D0\u4E2D\u53EF\u4EE5\u4F7F\u7528return\u5173\u952E\u5B57\u4E3A\u51FD\u6570\u8FD4\u56DE\u7ED3\u679C</p><h4 id="\u591A\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u591A\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u591A\u8FD4\u56DE\u503C</h4><p>Go \u8BED\u8A00\u652F\u6301\u51FD\u6570\u6709\u591A\u4E2A\u8FD4\u56DE\u503C\uFF0C\u5728\u58F0\u660E\u51FD\u6570\u65F6\u4F7F\u7528\u62EC\u53F7\u5305\u542B\u6240\u6709\u8FD4\u56DE\u503C\u7C7B\u578B\uFF0C\u5E76\u4F7F\u7528return\u8FD4\u56DE\u5BF9\u5E94\u6570\u91CF\u7684\u9017\u53F7\u5206\u5272\u6570\u636E</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">/*
\u5B9A\u4E49\u591A\u4E2A\u8FD4\u56DE\u503C
*/</span>
<span class="token keyword">func</span> <span class="token function">calc</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2 <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u8FD4\u56DE\u56DB\u4E2A\u8FD4\u56DE\u503C</span>
	<span class="token keyword">return</span> n1 <span class="token operator">+</span> n2<span class="token punctuation">,</span> n1 <span class="token operator">-</span> n2<span class="token punctuation">,</span> n1 <span class="token operator">*</span> n2<span class="token punctuation">,</span> n1 <span class="token operator">/</span> n2
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

\u7ED3\u679C\uFF1A
<span class="token number">8</span> <span class="token number">2</span> <span class="token number">15</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h4 id="\u547D\u540D\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u547D\u540D\u8FD4\u56DE\u503C</h4><p>\u5728\u51FD\u6570\u8FD4\u56DE\u503C\u5217\u8868\u4E2D\u53EF\u6307\u5B9A\u53D8\u91CF\u540D, \u53D8\u91CF\u5728\u8C03\u7528\u65F6\u4F1A\u6839\u636E\u7C7B\u578B\u4F7F\u7528\u96F6\u503C\u8FDB\u884C\u521D\u59CB\u5316, \u5728\u51FD\u6570\u4F53\u4E2D\u53EF\u8FDB\u884C\u8D4B\u503C,\u540C\u65F6\u5728\u8C03\u7528return\u65F6\u4E0D\u9700\u8981\u6DFB\u52A0\u8FD4\u56DE\u503C,go\u8BED\u8A00\u81EA\u52A8\u5C06\u53D8\u91CF\u7684\u6700\u7EC8\u7ED3\u679C\u8FDB\u884C\u8FD4\u56DE \u5728\u4F7F\u7528\u547D\u540D\u8FD4\u56DE\u503C\u65F6, \u5F53\u58F0\u660E\u51FD\u6570\u4E2D\u5B58\u5728\u82E5\u591A\u4E2A\u8FDE\u7EED\u8FD4\u56DE\u503C\u7C7B\u578B\u76F8\u540C\u53EF\u53EA\u4FDD\u7559\u6700\u540E\u4E00\u4E2A\u8FD4\u56DE\u503C\u7C7B\u578B\u540D</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">//\u5B9A\u4E49\u8FD4\u56DE\u591A\u4E2A\u547D\u540D\u8FD4\u56DE\u503C</span>

<span class="token keyword">func</span> <span class="token function">calcNew</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2 <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>sum<span class="token punctuation">,</span> diff<span class="token punctuation">,</span> product<span class="token punctuation">,</span> quotient <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sum<span class="token punctuation">,</span> diff<span class="token punctuation">,</span> product<span class="token punctuation">,</span> quotient <span class="token operator">=</span> n1<span class="token operator">+</span>n2<span class="token punctuation">,</span> n1<span class="token operator">-</span>n2<span class="token punctuation">,</span> n1<span class="token operator">*</span>n2<span class="token punctuation">,</span> n1<span class="token operator">/</span>n2
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">calcNew</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

\u7ED3\u679C\uFF1A
<span class="token number">9</span> <span class="token number">3</span> <span class="token number">18</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u533F\u540D\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u51FD\u6570" aria-hidden="true">#</a> \u533F\u540D\u51FD\u6570</h3><p>\u4E0D\u9700\u8981\u5B9A\u4E49\u540D\u5B57\u7684\u51FD\u6570\u53EB\u533F\u540D\u51FD\u6570\uFF0C\u5E38\u7528\u505A\u5E2E\u52A9\u51FD\u6570\u5728\u5C40\u90E8\u4EE3\u7801\u4E2D\u4F7F\u7528\u6216\u8005\u4F5C\u4E3A\u5176\u4ED6\u51FD\u6570\u7684\u53C2\u6570</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u5B9A\u4E49\u533F\u540D\u51FD\u6570\u5E76\u8D4B\u503C\u7ED9hi</span>
	hi <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;hi, %s\\n&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token function">hi</span><span class="token punctuation">(</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">)</span>
	<span class="token function">hi</span><span class="token punctuation">(</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">//\u5B9A\u4E49\u533F\u540D\u51FD\u6570\u5E76\u8C03\u7528</span>
	<span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD9\u662F\u4E2A\u533F\u540D\u51FD\u6570&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

\u7ED3\u679C\uFF1A
hi<span class="token punctuation">,</span> zhangsan
hi<span class="token punctuation">,</span> lisi
\u8FD9\u662F\u4E2A\u533F\u540D\u51FD\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h3><p>\u662F\u6307\u5728\u51FD\u6570\u4E2D\u5B9A\u4E49\u7684\u533F\u540D\u51FD\u6570\u5F15\u7528\u5916\u90E8\u51FD\u6570\u7684\u53D8\u91CF\uFF0C\u53EA\u8981\u533F\u540D\u51FD\u6570\u7EE7\u7EED\u4F7F\u7528\u5219\u5916\u90E8\u51FD\u6570\u8D4B\u503C\u7684\u53D8\u91CF\u4E0D\u88AB\u81EA\u52A8\u9500\u6BC1</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">//\u5B9A\u4E49\u95ED\u5305\u51FD\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u533F\u540D\u51FD\u6570\u7528\u4E8E\u8BA1\u7B97\u4E0Ebase\u5143\u7D20\u7684\u548C</span>
<span class="token keyword">func</span> <span class="token function">addBase</span><span class="token punctuation">(</span>base <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>num <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> base <span class="token operator">+</span> num
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u4F7F\u7528\u95ED\u5305\u51FD\u6570</span>
	base2 <span class="token operator">:=</span> <span class="token function">addBase</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
	base10 <span class="token operator">:=</span> <span class="token function">addBase</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">base2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">base2</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">base10</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">base10</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

\u7ED3\u679C\uFF1A
<span class="token number">3</span> <span class="token number">5</span> <span class="token number">11</span> <span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="\u503C\u7C7B\u578B-\u5F15\u7528\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u503C\u7C7B\u578B-\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a> \u503C\u7C7B\u578B&amp;\u5F15\u7528\u7C7B\u578B</h3><p>\u503C\u7C7B\u578B\u548C\u5F15\u7528\u7C7B\u578B\u7684\u5DEE\u5F02\u5728\u4E8E\u8D4B\u503C\u540C\u7C7B\u578B\u65B0\u53D8\u91CF\u540E\uFF0C\u5BF9\u65B0\u7684\u53D8\u91CF\u8FDB\u884C\u4FEE\u6539\u662F\u5426\u80FD\u591F\u5F71\u54CD\u539F\u6765\u7684\u53D8\u91CF\uFF0C\u82E5\u4E0D\u80FD\u5F71\u54CD\u5C31\u662F\u503C\u7C7B\u578B\uFF0C\u82E5\u5F71\u54CD\u5219\u4E3A\u5F15\u7528\u7C7B\u578B\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> height<span class="token punctuation">,</span> isBoy <span class="token operator">:=</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">1.85</span><span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">//\u5B9A\u4E49\u5B57\u7B26\u4E32\u3001\u6570\u503C\u3001\u5E03\u5C14\u7C7B\u578B</span>
	pointer <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>                                    <span class="token comment">//\u5B9A\u4E49\u6307\u9488\u7C7B\u578B</span>
	scores <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>                         <span class="token comment">//\u5B9A\u4E49\u6570\u7EC4</span>
	names <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>                          <span class="token comment">//\u5B9A\u4E49\u5207\u7247\u7C7B\u578B</span>
	user <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>                              <span class="token comment">//\u5B9A\u4E49\u6620\u5C04\u7C7B\u578B</span>
	name2<span class="token punctuation">,</span> age2<span class="token punctuation">,</span> height2<span class="token punctuation">,</span> isBoy2<span class="token punctuation">,</span> pointer2<span class="token punctuation">,</span> scores2<span class="token punctuation">,</span> names2<span class="token punctuation">,</span> user2 <span class="token operator">:=</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> height<span class="token punctuation">,</span> isBoy<span class="token punctuation">,</span> pointer<span class="token punctuation">,</span> scores<span class="token punctuation">,</span> names<span class="token punctuation">,</span> user
	name2 <span class="token operator">=</span> <span class="token string">&quot;hhh&quot;</span>
	age2 <span class="token operator">=</span> <span class="token number">1000</span>
	height2 <span class="token operator">=</span> <span class="token number">2.00</span>
	isBoy2 <span class="token operator">=</span> <span class="token boolean">false</span>
	pointer2 <span class="token operator">=</span> <span class="token operator">&amp;</span>age
	names2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;ss&quot;</span>
	scores2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
	user2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> height<span class="token punctuation">,</span> isBoy<span class="token punctuation">,</span> pointer<span class="token punctuation">,</span> scores<span class="token punctuation">,</span> names<span class="token punctuation">,</span> user<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>name2<span class="token punctuation">,</span> age2<span class="token punctuation">,</span> height2<span class="token punctuation">,</span> isBoy2<span class="token punctuation">,</span> pointer2<span class="token punctuation">,</span> scores2<span class="token punctuation">,</span> names2<span class="token punctuation">,</span> user2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

\u7ED3\u679C\uFF1A
zhangsan <span class="token number">18</span> <span class="token number">1.85</span> <span class="token boolean">true</span> <span class="token number">0xc0000b4010</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>ss<span class="token punctuation">]</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">100</span><span class="token punctuation">]</span>
hhh <span class="token number">1000</span> <span class="token number">2</span> <span class="token boolean">false</span> <span class="token number">0xc0000b4008</span> <span class="token punctuation">[</span><span class="token number">100</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>ss<span class="token punctuation">]</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">100</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u6839\u636E\u4E0A\u9762\u4F8B\u5B50\u53EF\u4EE5\u5F97\u51FA\uFF1A</p><ul><li><p>\u503C\u7C7B\u578B\uFF1A</p><p>\u6570\u7EC4\u3001\u5E03\u5C14\u3001\u5B57\u7B26\u4E32\u3001\u6307\u9488\u3001\u6570\u5B57\u3001\u7ED3\u6784\u4F53\u7B49\uFF1B</p></li><li><p>\u5F15\u7528\u7C7B\u578B\uFF1A</p><p>\u5207\u7247\u3001\u6620\u5C04\u3001\u63A5\u53E3\u7B49</p></li></ul><p>\u9488\u5BF9\u503C\u7C7B\u578B\u53EF\u4EE5\u501F\u52A9\u6307\u9488\u4FEE\u6539\u539F\u503C\uFF0C\u9488\u5BF9\u503C\u7C7B\u578B\u548C\u5F15\u7528\u7C7B\u578B\u5728\u8D4B\u503C\u540E\u65B0\u65E7\u53D8\u91CF\u7684\u5730\u5740\u5E76\u4E0D\u76F8\u540C\uFF0C\u53EA\u662F\u5F15\u7528\u7C7B\u578B\u5728\u5E95\u5C42\u5171\u4EAB\u6570\u636E\u7ED3\u6784\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	e1<span class="token punctuation">,</span> e2 <span class="token operator">:=</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">}</span>
	<span class="token comment">//\u503C\u4F20\u9012</span>
	<span class="token comment">//\u5728\u51FD\u6570\u5185\u4FEE\u6539\u503C\u7C7B\u578B</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;e1: %p %v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>e1<span class="token punctuation">,</span> e1<span class="token punctuation">)</span>
	<span class="token keyword">func</span><span class="token punctuation">(</span>e <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;e: %p %v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>e<span class="token punctuation">,</span> e<span class="token punctuation">)</span>
		e <span class="token operator">=</span> <span class="token number">456</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span>e1<span class="token punctuation">)</span>

	<span class="token comment">//\u5F15\u7528\u7C7B\u578B</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;e2: %p %v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>e2<span class="token punctuation">,</span> e2<span class="token punctuation">)</span>
	<span class="token keyword">func</span><span class="token punctuation">(</span>e <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;e: %p %v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>e<span class="token punctuation">,</span> e<span class="token punctuation">)</span>
		e<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;aaaa&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span>e2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u7ED3\u675Fe1: %v, e2: %v\\n&quot;</span><span class="token punctuation">,</span> e1<span class="token punctuation">,</span> e2<span class="token punctuation">)</span>

	<span class="token comment">//\u503C\u7C7B\u578B</span>
	<span class="token comment">//\u5728\u51FD\u6570\u5185\u4FEE\u6539\u503C\u7C7B\u578B</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;e1:%p %v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>e1<span class="token punctuation">,</span> e1<span class="token punctuation">)</span>
	<span class="token keyword">func</span><span class="token punctuation">(</span>e <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;e:%p %v\\n&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">,</span> <span class="token operator">*</span>e<span class="token punctuation">)</span>
		<span class="token operator">*</span>e <span class="token operator">=</span> <span class="token number">100</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>e1<span class="token punctuation">)</span>
	<span class="token comment">// \u5728\u51FD\u6570\u5185\u4FEE\u6539\u5F15\u7528\u7C7B\u578B</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;e2:%p %v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>e2<span class="token punctuation">,</span> e2<span class="token punctuation">)</span>
	<span class="token keyword">func</span><span class="token punctuation">(</span>e <span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;e:%p %v\\n&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">,</span> <span class="token operator">*</span>e<span class="token punctuation">)</span>
		<span class="token punctuation">(</span><span class="token operator">*</span>e<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;abcssss&quot;</span> <span class="token comment">// \u5148\u7528\u62EC\u53F7</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>e2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u7ED3\u675F----e1: %v, e2: %v\\n&quot;</span><span class="token punctuation">,</span> e1<span class="token punctuation">,</span> e2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


\u7ED3\u679C\uFF1A
e1<span class="token punctuation">:</span> <span class="token number">0xc0000140a8</span> <span class="token number">123</span>
e<span class="token punctuation">:</span> <span class="token number">0xc0000140d0</span> <span class="token number">123</span>
e2<span class="token punctuation">:</span> <span class="token number">0xc00000c060</span> <span class="token punctuation">[</span>abc<span class="token punctuation">]</span>
e<span class="token punctuation">:</span> <span class="token number">0xc00000c0a0</span> <span class="token punctuation">[</span>abc<span class="token punctuation">]</span>
\u7ED3\u675Fe1<span class="token punctuation">:</span> <span class="token number">123</span><span class="token punctuation">,</span> e2<span class="token punctuation">:</span> <span class="token punctuation">[</span>aaaa<span class="token punctuation">]</span>
e1<span class="token punctuation">:</span><span class="token number">0xc0000140a8</span> <span class="token number">123</span>
e<span class="token punctuation">:</span><span class="token number">0xc0000140a8</span> <span class="token number">123</span>
e2<span class="token punctuation">:</span><span class="token number">0xc00000c060</span> <span class="token punctuation">[</span>aaaa<span class="token punctuation">]</span>
e<span class="token punctuation">:</span><span class="token number">0xc00000c060</span> <span class="token punctuation">[</span>aaaa<span class="token punctuation">]</span>
\u7ED3\u675F<span class="token operator">--</span><span class="token operator">--</span>e1<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> e2<span class="token punctuation">:</span> <span class="token punctuation">[</span>abcssss<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h2 id="\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u7ED3\u6784\u4F53</h2><p>Go\u8BED\u2F94\u4E2D\u6570\u7EC4\u53EF\u4EE5\u5B58\u50A8\u540C\u2F00\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u4F46\u5728\u7ED3\u6784\u4F53\u4E2D\u6211\u4EEC\u53EF\u4EE5\u4E3A\u4E0D\u540C\u9879 \u5B9A\u4E49\u4E0D\u540C\u7684\u6570\u636E\u7C7B\u578B. \u7ED3\u6784\u4F53\u662F\u7531\u2F00\u7CFB\u5217\u5177\u6709\u76F8\u540C\u7C7B\u578B\u6216\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u6784\u6210\u7684\u6570\u636E\u96C6\u5408.</p><h3 id="\u7ED3\u6784\u4F53\u7684\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u7684\u5B9A\u4E49" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u7684\u5B9A\u4E49</h3><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>type \u7C7B\u578B\u540D struct{
	\u6210\u5458\u5C5E\u60271 \u7C7B\u578B1
	\u6210\u5458\u5C5E\u60272 \u7C7B\u578B2
	\u6210\u5458\u5C5E\u60273 \u6210\u5458\u5C5E\u60274 \u7C7B\u578B3 
}
\u7C7B\u578B\u540D:\u6807\u8BC6\u7ED3\u6784\u4F53\u7684\u540D\u79F0\uFF0C\u5728\u540C\u2F00\u4E2A\u5305\u5185\u4E0D\u80FD\u91CD\u590D.
\u7ED3\u6784\u4F53\u4E2D\u5C5E\u6027\uFF0C\u4E5F\u53EB\u5B57\u6BB5\u5FC5\u987B\u552F\u2F00.
\u540C\u7C7B\u578B\u7684\u6210\u5458\u5C5E\u6027\u53EF\u4EE5\u5199\u5728\u2F00\u2F8F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4F8B\u5982:</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>//\u5B9A\u4E49\u7ED3\u6784\u4F53
type Person struct {
	name string
	age int
	sex string
	address string
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u7ED3\u6784\u4F53\u7684\u5B9E\u4F8B\u5316" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u7684\u5B9E\u4F8B\u5316" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u7684\u5B9E\u4F8B\u5316</h3><p>\u7ED3\u6784\u4F53\u7684\u5B9A\u4E49\u53EA\u662F\u2F00\u79CD\u5185\u5B58\u5E03\u5C40\u7684\u63CF\u8FF0,\u53EA\u6709\u5F53\u7ED3\u6784\u4F53\u5B9E\u4F8B\u5316\u65F6,\u624D\u4F1A\u771F\u6B63\u5206\u914D\u5185\u5B58\u3002\u56E0\u6B64\u5FC5\u987B\u5728\u5B9A\u4E49\u7ED3\u6784\u4F53\u5E76\u5B9E\u4F8B\u5316\u540E\u624D\u80FD\u4F7F\u2F64\u7ED3\u6784\u4F53;\u5B9E\u4F8B\u5316\u5C31\u662F\u6839\u636E\u7ED3\u6784\u4F53\u5B9A\u4E49\u7684\u683C\u5F0F\u521B\u5EFA\u2F00\u4EFD\u4E0E\u683C\u5F0F\u2F00\u81F4\u7684\u5185\u5B58\u533A\u57DF\u3002\u7ED3\u6784\u4F53\u5B9E\u4F8B\u4E4B\u95F4\u7684\u5185\u5B58\u662F\u5B8C\u5168\u72EC\u2F74\u7684\u3002</p><ul><li>var\u58F0\u660E\u2F45\u5F0F\u5B9E\u4F8B\u5316\u7ED3\u6784\u4F53\uFF0C\u521D\u59CB\u5316\u2F45\u5F0F\u4E3A\uFF1A\u5BF9\u8C61.\u5C5E\u6027=\u503C</li></ul><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>var p1 Person
p1.name = &quot;\u5F20\u4E09&quot;
p1.age = 30
p1.sex = &quot;\u7537&quot;
p1.address = &quot;\u5317\u4EAC&quot;
fmt.Printf(&quot;\u59D3\u540D\uFF1A%s, \u5E74\u9F84: %d,\u6027\u522B: %s, \u5730\u5740:%s\\n&quot;, p1.name, p1.age, p1.sex, p1.address)

\u7ED3\u679C\uFF1A
\u59D3\u540D\uFF1A\u5F20\u4E09, \u5E74\u9F84: 30,\u6027\u522B: \u7537, \u5730\u5740:\u5317\u4EAC
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u53D8\u91CF\u7B80\u77ED\u58F0\u660E\u683C\u5F0F\u5B9E\u4F8B\u5316\u7ED3\u6784\u4F53\uFF0C\u521D\u59CB\u5316\u2F45\u5F0F\u4E3A\uFF1A\u5BF9\u8C61.\u5C5E\u6027=\u503C</li></ul><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>p2 := Person{}
p2.name = &quot;\u674E\u56DB&quot;
p2.age = 33
p2.sex = &quot;\u7537&quot;
p2.address = &quot;\u5317\u4EAC&quot;
fmt.Printf(&quot;\u59D3\u540D\uFF1A%s, \u5E74\u9F84: %d,\u6027\u522B: %s, \u5730\u5740:%s\\n&quot;, p2.name, p2.age, p2.sex, p2.address)

\u7ED3\u679C:
\u59D3\u540D\uFF1A\u674E\u56DB, \u5E74\u9F84: 33,\u6027\u522B: \u7537, \u5730\u5740:\u5317\u4EAC
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u53D8\u91CF\u7B80\u77ED\u58F0\u660E\u683C\u5F0F\u5B9E\u4F8B\u5316\u7ED3\u6784\u4F53,\u58F0\u660E\u65F6\u521D\u59CB\u5316\u3002\u521D\u59CB\u5316\u2F45\u5F0F\u4E3A\uFF1A\u5C5E\u6027:\u5C5E\u6027:\u503C\u53EF\u4EE5\u540C\u2F8F,\u4E5F\u53EF\u4EE5\u6362\u2F8F.</li></ul><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>p3 := Person{
	name: &quot;\u738B\u4E8C&quot;,
	age: 31,
	sex: &quot;\u7537&quot;,
	address: &quot;\u901A\u5DDE&quot;, //\u4E00\u5B9A\u522B\u5FD8\u8BB0\u8FD9\u4E2A\u9017\u53F7
}
fmt.Printf(&quot;\u59D3\u540D\uFF1A%s, \u5E74\u9F84: %d,\u6027\u522B: %s, \u5730\u5740:%s\\n&quot;, p3.name, p3.age, p3.sex, p3.address)


\u7ED3\u679C:
\u59D3\u540D\uFF1A\u738B\u4E8C, \u5E74\u9F84: 31,\u6027\u522B: \u7537, \u5730\u5740:\u901A\u5DDE
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>\u6307\u9488\u7C7B\u578B\u7ED3\u6784\u4F53</li></ul><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>/*\u4F7F\u2F64\u5185\u7F6E\u51FD\u6570new()\u5BF9\u7ED3\u6784\u4F53\u8FDB\u2F8F\u5B9E\u4F8B\u5316,
\u7ED3\u6784\u4F53\u5B9E\u4F8B\u5316\u540E\u5F62\u6210\u6307\u9488\u7C7B\u578B\u7684\u7ED3\u6784\u4F53new\u5185\u7F6E\u51FD\u6570\u4F1A\u5206\u914D\u5185\u5B58.
\u7B2C\u2F00\u4E2A\u53C2\u6570\u662F\u7C7B\u578B,\u2F7D\u4E0D\u662F\u503C,\u8FD4\u56DE\u7684\u503C\u662F\u6307\u5411\u8BE5\u7C7B\u578B\u65B0\u5206\u914D\u7684\u96F6\u503C\u7684\u6307\u9488,\u8BE5\u51FD\u6570\u2F64\u4E8E\u521B\u5EFA\u67D0\u4E2A\u7C7B\u578B\u7684\u6307\u9488\u3002 */
p4 := new(Person)
(*p4).name = &quot;\u9EBB\u5B50&quot;
(*p4).age = 31
p4.sex = 0 //\u8BED\u6CD5\u7B80\u5199\u5F62\u5F0F,\u8BED\u6CD5\u7CD6,\u6570\u7EC4\u4E5F\u652F\u6301\uFF0C\u4F46\u662F\u5207\u7247\u4E0D\u652F\u6301\u8FD9\u79CD\u3002
p4.address = &quot;\u671D\u9633&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u7ED3\u6784\u4F53\u662F\u503C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u662F\u503C\u7C7B\u578B" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u662F\u503C\u7C7B\u578B</h3><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>package main

import &quot;fmt&quot;

type Person struct {
	name string
	age  int8
	sex  byte
}

//\u4F20\u5BF9\u8C61\u4FEE\u6539\u540D\u79F0
func changeName(p Person) {
	p.name = &quot;lisi&quot;
	fmt.Printf(&quot;\u51FD\u6570\u5185p\u4FEE\u6539\u540E=%T , %v , %p \\n&quot;, p, p, &amp;p)
}
func main() {
	//\u521D\u59CB\u5316Person
	p1 := Person{
		name: &quot;zhangsan&quot;,
		age:  18,
		sex:  1,
	}
	fmt.Printf(&quot;h1\uFF1A%T , %v , %p \\n&quot;, p1, p1, &amp;p1)

	fmt.Println(&quot;----------------------&quot;)

	//\u5C06\u7ED3\u6784\u4F53\u5BF9\u8C61\u8FDB\u2F8F\u62F7\u2EC9
	p2 := p1
	p2.name = &quot;wanger&quot;
	p2.age = 20
	fmt.Printf(&quot;p1\u4FEE\u6539\u540E=%T , %v , %p \\n&quot;, p2, p2, &amp;p2)
	fmt.Printf(&quot;p1\uFF1A%T , %v , %p \\n&quot;, p2, p2, &amp;p2)
	fmt.Println(&quot;----------------------&quot;)
	//\u5C06\u7ED3\u6784\u4F53\u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012
	changeName(p1)
	fmt.Printf(&quot;p1\uFF1A%T , %v , %p \\n&quot;, p1, p1, &amp;p1)
	fmt.Println(&quot;----------------------&quot;)
}

\u7ED3\u679C\uFF1A
p1\uFF1Amain.Person , {zhangsan 18 1} , 0xc0000a6018 
----------------------
p1\u4FEE\u6539\u540E=main.Person , {wanger 20 1} , 0xc0000a6060 
p1\uFF1Amain.Person , {wanger 20 1} , 0xc0000a6060 
----------------------
\u51FD\u6570\u5185p\u4FEE\u6539\u540E=main.Person , {lisi 18 1} , 0xc0000a60d8 
p1\uFF1Amain.Person , {zhangsan 18 1} , 0xc0000a6018 
----------------------
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h3 id="\u7ED3\u6784\u4F53\u7684\u6DF1\u62F7\u2EC9\u548C\u6D45\u62F7\u2EC9" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u7684\u6DF1\u62F7\u2EC9\u548C\u6D45\u62F7\u2EC9" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u7684\u6DF1\u62F7\u2EC9\u548C\u6D45\u62F7\u2EC9</h3><ul><li>\u503C\u7C7B\u578B\u662F\u6DF1\u62F7\u2EC9</li><li>\u5F15\u2F64\u7C7B\u578B\u662F\u6D45\u62F7\u2EC9</li></ul><div class="language-goland ext-goland line-numbers-mode"><pre class="language-goland"><code>package main

import &quot;fmt&quot;

type Dog struct {
	name  string
	color string
	age   int8
}

func main() {
	//1\u3001\u5B9E\u73B0\u7ED3\u6784\u4F53\u7684\u6DF1\u62F7\u8D1D
	d1 := Dog{&quot;\u65FA\u8D22&quot;, &quot;\u9ED1\u8272&quot;, 2} //Dog
	fmt.Printf(&quot;d1:%T,%v,%p\\n&quot;, d1, d1, &amp;d1)
	d2 := d1 //\u6DF1\u62F7\u8D1D
	fmt.Printf(&quot;d2:%T,%v,%p\\n&quot;, d2, d2, &amp;d2)
	/*
		\u8F93\u51FA\uFF1A
		d1:main.Dog,{\u65FA\u8D22 \u9ED1\u8272 2},0xc000070180
		d2:main.Dog,{\u65FA\u8D22 \u9ED1\u8272 2},0xc000070210
	*/
	//\u4FEE\u6539d2\u7684\u5C5E\u6027\uFF0Cd1\u662F\u5426\u6539\u53D8\uFF1F
	d2.name = &quot;\u5C0F\u72D7&quot;
	fmt.Printf(&quot;D2\u4FEE\u6539\u540E=%v\\n&quot;, d2)
	fmt.Printf(&quot;D1=%v\\n&quot;, d1)
	/*
		\u8F93\u51FA\uFF1A
		D2\u4FEE\u6539\u540E={\u5C0F\u72D7 \u9ED1\u8272 2}
		D1={\u65FA\u8D22 \u9ED1\u8272 2}\uFF0C\u56E0\u6B64\u5F97\u51FAd1\u4E0D\u4F1A\u56E0\u4E3Ad2\u7684\u6539\u53D8\u800C\u6539\u53D8
	*/

	//\u901A\u8FC7&amp;\u5B9E\u73B0\u7ED3\u6784\u4F53\u7684\u6D45\u62F7\u8D1D
	d3 := &amp;d1
	fmt.Printf(&quot;d3:%T,%v,%p\\n&quot;, d3, d3, &amp;d3)
	/*
		\u8F93\u51FA\uFF1A
		d3:*main.Dog,&amp;{\u65FA\u8D22 \u9ED1\u8272 2},0xc00010e020
	*/
	//\u4FEE\u6539d3\u7684\u5C5E\u6027\uFF0Cd1\u662F\u5426\u6539\u53D8?
	d3.age = 4
	fmt.Printf(&quot;D3\u4FEE\u6539\u540E=%v\\n&quot;, d3)
	fmt.Printf(&quot;D1=%v\\n&quot;, d1)
	/*
	\u8F93\u51FA\uFF1A
	D3\u4FEE\u6539\u540E=&amp;{\u65FA\u8D22 \u9ED1\u8272 4}
	D1={\u65FA\u8D22 \u9ED1\u8272 4}
	\u56E0\u6B64\u53EF\u4EE5\u5F97\u51FA\u6D45\u62F7\u8D1D\u4F1A\u6539\u53D8\u7684
	*/

}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><h3 id="\u533F\u540D\u7ED3\u6784\u4F53\u548C\u533F\u540D\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u7ED3\u6784\u4F53\u548C\u533F\u540D\u5B57\u6BB5" aria-hidden="true">#</a> \u533F\u540D\u7ED3\u6784\u4F53\u548C\u533F\u540D\u5B57\u6BB5</h3><h4 id="\u533F\u540D\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u533F\u540D\u7ED3\u6784\u4F53</h4><ul><li>\u6CA1\u6709\u540D\u5B57\u7684\u7ED3\u6784\u4F53,\u65E0\u9700\u901A\u8FC7type\u5173\u952E\u5B57\u5B9A\u4E49\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528</li><li>\u5728\u521B\u5EFA\u533F\u540D\u7ED3\u6784\u4F53\u65F6\u540C\u65F6\u4E5F\u521B\u5EFA\u4E86\u5BF9\u8C61</li><li>\u533F\u540D\u7ED3\u6784\u4F53\u7531\u7ED3\u6784\u4F53\u7684\u5B9A\u4E49\u548C\u521D\u59CB\u5316\u4E24\u90E8\u5206\u7EC4\u6210</li><li>\u8BED\u6CD5\u683C\u5F0F: \u53D8\u91CF\u540D =: struct {//\u5B9A\u4E49\u6210\u5458\u5C5E\u6027}{//\u521D\u59CB\u5316\u6210\u5458\u5C5E\u6027}</li></ul><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>package main

import &quot;fmt&quot;

func main() {
	addr := struct {
		province, city string
	}{&quot;\u5317\u4EAC\u5E02&quot;, &quot;\u901A\u5DDE\u533A&quot;}
	fmt.Println(addr)
	/*
		\u8F93\u51FA\uFF1A
		{\u5317\u4EAC\u5E02 \u901A\u5DDE\u533A}
	*/
}


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="\u7ED3\u6784\u4F53\u533F\u540D\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u533F\u540D\u5B57\u6BB5" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u533F\u540D\u5B57\u6BB5</h4><ul><li>\u7ED3\u6784\u4F53\u4E2D\u7684\u5B57\u6BB5\u6CA1\u6709\u540D\u5B57,\u53EA\u5305\u542B\u4E00\u4E2A\u6CA1\u6709\u5B57\u6BB5\u540D\u7684\u7C7B\u578B,\u8FD9\u4E9B\u5B57\u6BB5\u4E3A\u533F\u540D\u5B57\u6BB5</li><li>\u5982\u679C\u5B57\u6BB5\u6CA1\u6709\u540D\u5B57,\u90A3\u4E48\u9ED8\u8BA4\u4F7F\u7528\u7C7B\u578B\u4F5C\u4E3A\u5B57\u6BB5\u540D</li><li>\u540C\u4E00\u4E2A\u7C7B\u578B\u53EA\u80FD\u5199\u4E00\u4E2A</li><li>\u7ED3\u6784\u4F53\u5D4C\u5957\u4E2D\u91C7\u7528\u533F\u540D\u7ED3\u6784\u4F53\u5B57\u6BB5\u53EF\u4EE5\u6A21\u62DF\u7EE7\u627F\u5173\u7CFB</li></ul><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>package main

import &quot;fmt&quot;

type User struct {
	string
	byte
	int8
	float64
}

func main() {
	//\u5B9E\u4F8B\u5316\u7ED3\u6784\u4F53
	user := User{&quot;\u5F20\u4E09&quot;, &#39;m&#39;, 28, 180.0}
	//\u4F9D\u6B21\u83B7\u53D6\u59D3\u540D\u3001\u6027\u522B\u3001\u5E74\u9F84\u3001\u8EAB\u9AD8
	fmt.Printf(&quot;\u59D3\u540D\uFF1A%s , \u6027\u522B\uFF1A%c , \u8EAB\u2FBC\uFF1A%.2f \uFF0C \u5E74\u9F84\uFF1A%d \\n&quot;, user.string, user.byte, user.float64, user.int8)

	/*
		\u8F93\u51FA\uFF1A
		\u59D3\u540D\uFF1A\u5F20\u4E09 , \u6027\u522B\uFF1Am , \u8EAB\u2FBC\uFF1A180.00 \uFF0C \u5E74\u9F84\uFF1A28
	*/
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h4 id="\u7ED3\u6784\u4F53\u7684\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u7684\u5D4C\u5957" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u7684\u5D4C\u5957</h4><ul><li>\u5C06\u4E00\u4E2A\u7ED3\u6784\u4F53\u4F5C\u4E3A\u53E6\u4E00\u4E2A\u7ED3\u6784\u4F53\u7684\u5C5E\u6027(\u5B57\u6BB5),\u8FD9\u79CD\u7ED3\u6784\u5C31\u662F\u7ED3\u6784\u4F53\u5D4C\u5957</li><li>\u7ED3\u6784\u4F53\u5D4C\u5957\u53EF\u4EE5\u4F5C\u4E3A\u9762\u5411\u5BF9\u8C61\u4E2D\u7684\u4E24\u79CD\u5173\u7CFB <ul><li>\u805A\u5408\u5173\u7CFB:\u4E00\u4E2A\u7C7B\u4F5C\u4E3A\u53E6\u5916\u4E00\u4E2A\u7C7B\u7684\u5C5E\u6027</li><li>\u7EE7\u627F\u5173\u7CFB:\u4E00\u4E2A\u7C7B\u4F5C\u4E3A\u53E6\u5916\u4E00\u4E2A\u7C7B\u7684\u5B50\u7C7B</li></ul></li></ul><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>package main

import &quot;fmt&quot;

type Address struct {
	province, city string
}

type Person struct {
	name    string
	age     int
	address Address
}

func main() {

	//\u805A\u5408\u5173\u7CFB
	p := Person{}
	p.name = &quot;\u5F20\u4E09&quot;
	p.age = 18
	addr := Address{}
	addr.province = &quot;\u5317\u4EAC\u5E02&quot;
	addr.city = &quot;\u901A\u5DDE\u533A&quot;
	p.address = addr
	fmt.Println(p)
	fmt.Println(&quot;\u59D3\u540D:&quot;, p.name)
	fmt.Println(&quot;\u5E74\u9F84:&quot;, p.age)
	fmt.Println(&quot;\u7701:&quot;, p.address.province)
	fmt.Println(&quot;\u5E02:&quot;, p.address.city)
	fmt.Println(&quot;---------------------&quot;)
	/*
		\u8F93\u51FA\uFF1A
		{\u5F20\u4E09 18 {\u5317\u4EAC\u5E02 \u901A\u5DDE\u533A}}
		\u59D3\u540D: \u5F20\u4E09
		\u5E74\u9F84: 18
		\u7701: \u5317\u4EAC\u5E02
		\u5E02: \u901A\u5DDE\u533A
		---------------------
	*/

	//\u4FEE\u6539Person\u5BF9\u8C61\u7684\u6570\u636E\uFF0C\u662F\u5426\u5F71\u54CDAddress\u5BF9\u8C61\uFF1F
	p.address.city = &quot;\u660C\u5E73\u533A&quot;
	fmt.Println(&quot;\u59D3\u540D:&quot;, p.name)
	fmt.Println(&quot;\u5E74\u9F84:&quot;, p.age)
	fmt.Println(&quot;\u7701:&quot;, p.address.province)
	fmt.Println(&quot;\u5E02:&quot;, p.address.city)
	fmt.Println(&quot;---------------------&quot;)
	fmt.Println(&quot;\u5E02:&quot;, addr.city) //\u6CA1\u6709\u5F71\u54CD
	/*
		\u8F93\u51FA\uFF1A
			\u59D3\u540D: \u5F20\u4E09
			\u5E74\u9F84: 18
			\u7701: \u5317\u4EAC\u5E02
			\u5E02: \u660C\u5E73\u533A
			---------------------
			\u5E02: \u901A\u5DDE\u533A
			\u56E0\u6B64\u53EF\u4EE5\u770B\u51FA\u4E0D\u53D7\u5F71\u54CD
	*/

	//\u4FEE\u6539Address\u5BF9\u8C61\u7684\u6570\u636E\uFF0C\u662F\u5426\u5F71\u54CDPerson\u5BF9\u8C61\uFF1F
	addr.city = &quot;\u2F24\u5174\u533A&quot;
	fmt.Println(&quot;\u59D3\u540D:&quot;, p.name)
	fmt.Println(&quot;\u5E74\u9F84:&quot;, p.age)
	fmt.Println(&quot;\u7701:&quot;, p.address.province)
	fmt.Println(&quot;\u5E02:&quot;, p.address.city)
	fmt.Println(&quot;---------------------&quot;)
	/*
		\u8F93\u51FA\uFF1A
			\u59D3\u540D: \u5F20\u4E09
			\u5E74\u9F84: 18
			\u7701: \u5317\u4EAC\u5E02
			\u5E02: \u660C\u5E73\u533A
			---------------------
			\u56E0\u6B64\u53EF\u4EE5\u770B\u51FA\u4E0D\u53D7\u5F71\u54CD
	*/
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br></div></div><h4 id="\u7ED3\u6784\u4F53\u7684\u7EE7\u627F\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u7684\u7EE7\u627F\u5173\u7CFB" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u7684\u7EE7\u627F\u5173\u7CFB</h4><ul><li>\u7EE7\u627F\u662F\u4F20\u7EDF\u9762\u5411\u5BF9\u8C61\u7684\u4E09\u5927\u7279\u5F81\u4E4B\u4E00\uFF0C\u7528\u4E8E\u63CF\u8FF0\u4E24\u4E2A\u7C7B\u4E4B\u95F4\u7684\u5173\u7CFB</li><li>\u5B50\u7C7B\u53EF\u4EE5\u6709\u81EA\u5DF1\u7684\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u91CD\u5199\u7236\u7C7B\u5DF2\u6709\u7684\u65B9\u6CD5</li><li>\u5B50\u7C7B\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u7236\u7C7B\u6240\u6709\u7684\u5C5E\u6027</li><li><code>\u63D0\u5347\u5B57\u6BB5</code><ul><li>\u5728\u7ED3\u6784\u4F53\u4E2D\u5C5E\u4E8E\u533F\u540D\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\u53EB\u63D0\u5347\u5B57\u6BB5</li></ul></li><li>\u7EE7\u627F\u7684\u610F\u4E49 <ul><li>\u907F\u514D\u91CD\u590D\u4EE3\u7801</li><li>\u6269\u5C55\u7C7B\u7684\u529F\u80FD</li></ul></li><li>\u91C7\u2F64\u533F\u540D\u5B57\u6BB5\u7684\u5F62\u5F0F\u5C31\u662F\u6A21\u62DF\u7EE7\u627F\u5173\u7CFB\u3002\u2F7D\u6A21\u62DF\u805A\u5408\u5173\u7CFB\u65F6\u2F00\u5B9A\u8981\u91C7\u2F64\u6709\u540D\u5B57\u7684\u7ED3\u6784\u4F53\u4F5C\u4E3A\u5B57\u6BB5.</li></ul><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>package main

import &quot;fmt&quot;

type Person struct {
	Name string
	Age  int
	Sex  string
}

type Student struct {
	Person     //\u91C7\u7528\u533F\u540D\u7ED3\u6784\u4F53\u5B57\u6BB5\u6A21\u62DF\u7EE7\u627F\u5173\u7CFB
	SchoolName string
}

func main() {
	//1\u3001\u521D\u59CB\u5316Person
	p1 := Person{&quot;\u5F20\u4E09&quot;, 18, &quot;\u7537&quot;}
	fmt.Println(p1)
	fmt.Printf(&quot;p1: %T , %+v \\n&quot;, p1, p1)
	fmt.Println(&quot;----------------------&quot;)

	//2\u3001\u521D\u59CB\u5316Student
	//\u5199\u6CD51\uFF1A
	s1 := Student{p1, &quot;\u5317\u4EAC\u822A\u7A7A\u5927\u5B66&quot;}
	s1.Name = &quot;S1&quot;
	fmt.Println(s1, p1)
	fmt.Printf(&quot;s1: %T , %+v \\n&quot;, s1, s1)
	fmt.Println(&quot;----------------------&quot;)
	//\u5199\u6CD52\uFF1A
	s2 := Student{Person{&quot;\u674E\u56DB&quot;, 19, &quot;\u7537&quot;}, &quot;\u5317\u4EAC\u5916\u56FD\u8BED\u5927\u5B66&quot;}
	fmt.Println(s2)
	fmt.Printf(&quot;s2: %T , %+v \\n&quot;, s2, s2)
	fmt.Println(&quot;----------------------&quot;)
	/*
		\u8F93\u51FA\uFF1A
		{\u5F20\u4E09 18 \u7537}
		p1: main.Person , {Name:\u5F20\u4E09 Age:18 Sex:\u7537}
		----------------------
		{{S1 18 \u7537} \u5317\u4EAC\u822A\u7A7A\u5927\u5B66} {\u5F20\u4E09 18 \u7537}
		s1: main.Student , {Person:{Name:S1 Age:18 Sex:\u7537} SchoolName:\u5317\u4EAC\u822A\u7A7A\u5927\u5B66}
		----------------------
		{{\u674E\u56DB 19 \u7537} \u5317\u4EAC\u5916\u56FD\u8BED\u5927\u5B66}
		s2: main.Student , {Person:{Name:\u674E\u56DB Age:19 Sex:\u7537} SchoolName:\u5317\u4EAC\u5916\u56FD\u8BED\u5927\u5B66}
		----------------------
	*/
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h3 id="\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5</h3><ul><li>Go\u8BED\u8A00\u540C\u65F6\u6709\u51FD\u6570\u548C\u65B9\u6CD5,\u65B9\u6CD5\u7684\u672C\u8D28\u4E5F\u662F\u51FD\u6570.</li><li>\u51FD\u6570\u662F\u4E00\u6BB5\u5177\u6709\u72EC\u7ACB\u529F\u80FD\u7684\u4EE3\u7801,\u53EF\u4EE5\u88AB\u53CD\u590D\u8C03\u7528,\u65B9\u6CD5\u662F\u4E00\u4E2A\u7C7B\u7684\u884C\u4E3A\u529F\u80FD,\u53EA\u6709\u8BE5\u7C7B\u7684\u5BF9\u8C61\u624D\u80FD\u8C03\u7528\u3002</li><li>\u65B9\u6CD5\u6709\u63A5\u53D7\u8005\uFF0C\u800C\u51FD\u6570\u6CA1\u6709\u63A5\u53D7\u8005 <ul><li>Go\u8BED\u8A00\u7684\u65B9\u6CD5\u662F\u4E00\u79CD\u4F5C\u7528\u4E8E\u7279\u5B9A\u7C7B\u578B\u53D8\u91CF\u7684\u51FD\u6570\uFF0C\u8FD9\u79CD\u7279\u5B9A\u7C7B\u578B\u53D8\u91CF\u53EB\u505AReceiver(\u63A5\u53D7\u8005)</li><li>\u63A5\u53D7\u8005\u7684\u6982\u5FF5\u7C7B\u4F3C\u4E8E\u4F20\u7EDF\u9762\u5411\u5BF9\u8C61\u8BED\u8A00\u4E2D\u7684this\u6216self\u5173\u952E\u5B57</li><li>\u4E00\u4E2A\u65B9\u6CD5\u5C31\u662F\u4E00\u4E2A\u5305\u542B\u4E86\u63A5\u53D7\u8005\u7684\u51FD\u6570</li><li>\u63A5\u53D7\u8005\u7684\u7C7B\u578B\u53EF\u4EE5\u662F\u4EFB\u4F55\u7C7B\u578B</li></ul></li><li>\u65B9\u6CD5\u7684\u8BED\u6CD5:</li></ul><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func (\u63A5\u53D7\u8005\u53D8\u91CF \u63A5\u53D7\u8005\u7C7B\u578B) \u2F45\u6CD5\u540D(\u53C2\u6570\u5217\u8868) (\u8FD4\u56DE\u503C\u5217\u8868) {
	//\u2F45\u6CD5
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>package main

import &quot;fmt&quot;

type User struct {
	name string
}

//\u5B9A\u4E49\u65B9\u6CD5
func (u User) info() {
	fmt.Printf(&quot;\u5458\u2F2F\u59D3\u540D\uFF1A%s  \\n&quot;, u.name)
}
func main() {

	//\u5B9E\u4F8B\u5316\u7ED3\u6784\u4F53

	user1 := User{
		name: &quot;\u5F20\u4E09&quot;,
	}
	//\u8C03\u7528\u65B9\u6CD5
	user1.info()

	/*
		\u8F93\u51FA\uFF1A
			\u5458\u2F2F\u59D3\u540D\uFF1A\u5F20\u4E09
	*/
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h4 id="\u65B9\u6CD5\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u7EE7\u627F" aria-hidden="true">#</a> \u65B9\u6CD5\u7EE7\u627F</h4><p>method\u662F\u53EF\u4EE5\u7EE7\u627F\u7684\uFF0C\u5982\u679C\u533F\u540D\u5B57\u6BB5\u5B9E\u73B0\u4E86\u2F00\u4E2Amethod\uFF0C\u90A3\u4E48\u5305\u542B\u8FD9\u4E2A\u533F\u540D\u5B57\u6BB5\u7684struct\u4E5F\u80FD\u8C03\u2F64\u8BE5\u533F\u540D\u7ED3\u6784\u4F53\u4E2D\u7684method.</p><h2 id="\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3" aria-hidden="true">#</a> \u63A5\u53E3</h2><h3 id="\u4EC0\u4E48\u662F\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u63A5\u53E3" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u63A5\u53E3?</h3><ul><li>\u9762\u5411\u5BF9\u8C61\u8BED\u8A00\u4E2D\uFF0C\u63A5\u53E3\u7528\u4E8E\u5B9A\u4E49\u5BF9\u8C61\u7684\u884C\u4E3A\u3002\u63A5\u53E3\u53EA\u6307\u5B9A\u5BF9\u8C61\u5E94\u8BE5\u505A\u4EC0\u4E48\uFF0C\u5B9E\u73B0\u8FD9\u79CD\u884C\u4E3A\u7684\u65B9\u6CD5\u662F\u7531\u5BF9\u8C61\u6765\u51B3\u5B9A</li><li>\u63A5\u2F1D\u53EA\u6307\u5B9A\u4E86\u7C7B\u578B\u5E94\u8BE5\u5177\u6709\u7684\u2F45\u6CD5\uFF0C\u7C7B\u578B\u51B3\u5B9A\u4E86\u5982\u4F55\u5B9E\u73B0\u8FD9\u4E9B\u2F45\u6CD5\u3002</li><li>\u5F53\u67D0\u4E2A\u7C7B\u578B\u4E3A\u63A5\u2F1D\u4E2D\u7684\u6240\u6709\u2F45\u6CD5\u63D0\u4F9B\u4E86\u5177\u4F53\u7684\u5B9E\u73B0\u7EC6\u8282\u65F6\uFF0C\u8FD9\u4E2A\u7C7B\u578B\u5C31\u88AB\u79F0\u4E3A\u5B9E\u73B0\u4E86\u8BE5\u63A5\u2F1D</li><li>\u5982\u679C\u67D0\u4E2A\u5BF9\u8C61\u5B9E\u73B0\u4E86\u63A5\u2F1D\u5B9A\u4E49\u7684\u6240\u6709\u2F45\u6CD5\uFF0C\u5219\u6B64\u5BF9\u8C61\u5C31\u5B9E\u73B0\u4E86\u8BE5\u63A5\u2F1D</li></ul><h3 id="\u63A5\u53E3\u7684\u5B9A\u4E49\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u7684\u5B9A\u4E49\u8BED\u6CD5" aria-hidden="true">#</a> \u63A5\u53E3\u7684\u5B9A\u4E49\u8BED\u6CD5</h3><p>type \u63A5\u53E3\u540D\u5B57 interface { \u65B9\u6CD51 \u65B9\u6CD52 }</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>package main

import &quot;fmt&quot;

//1.\u5B9A\u4E49\u63A5\u53E3
type USB interface {
	start() //USB\u8BBE\u5907\u5F00\u59CB\u5DE5\u4F5C
	end()   //USB\u8BBE\u5907\u7ED3\u675F\u5DE5\u4F5C
}

//2.\u5B9E\u73B0\u7C7B
type Mouse struct {
	name string
}

type FlashDisk struct {
	name string
}

//3.\u5B9E\u73B0\u65B9\u6CD5
func (m Mouse) start() {
	fmt.Println(m.name, &quot;\u9F20\u6807\uFF0C\u51C6\u5907\u5C31\u7EEA\uFF0C\u53EF\u4EE5\u5F00\u59CB\u5DE5\u4F5C\u4E86\uFF0C\u70B9\u70B9\u70B9\u3002\u3002\u3002&quot;)
}
func (m Mouse) end() {
	fmt.Println(m.name, &quot;\u7ED3\u675F\u5DE5\u4F5C\uFF0C\u53EF\u4EE5\u5B89\u5168\u63A8\u51FA\u3002\u3002\u3002\u3002&quot;)
}
func (f FlashDisk) start() {
	fmt.Println(f.name, &quot;\u5F00\u59CB\u5DE5\u4F5C\uFF0C\u5B58\u50A8\u6570\u636E...&quot;)
}
func (f FlashDisk) end() {
	fmt.Println(f.name, &quot;\u7ED3\u675F\u5DE5\u4F5C\u3002\u53EF\u4EE5\u5F39\u51FA&quot;)
}

func main() {
	/*
		\u63A5\u53E3\uFF1Ainterface
			\u5728go\u4E2D\uFF0C\u63A5\u53E3\u662F\u4E00\u7EC4\u65B9\u6CD5\u7B7E\u540D
			\u5F53\u67D0\u4E2A\u7C7B\u578B\u4E3A\u8FD9\u4E2A\u63A5\u53E3\u4E2D\u7684\u6240\u6709\u65B9\u6CD5\u63D0\u4F9B\u4E86\u65B9\u6CD5\u7684\u5B9E\u73B0\uFF0C\u5B83\u88AB\u79F0\u4E3A\u5B9E\u73B0\u63A5\u53E3
	*/
	//\u521B\u5EFAMouse\u7C7B\u578B
	m1 := Mouse{
		name: &quot;\u7F57\u6280&quot;,
	}
	fmt.Println(m1.name)
	m1.start()
	/*
		\u8F93\u51FA\uFF1A
		\u7F57\u6280
		\u7F57\u6280 \u9F20\u6807\uFF0C\u51C6\u5907\u5C31\u7EEA\uFF0C\u53EF\u4EE5\u5F00\u59CB\u5DE5\u4F5C\u4E86\uFF0C\u70B9\u70B9\u70B9\u3002\u3002\u3002
	*/
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div>`,80);function e(t,l){return p}var u=n(a,[["render",e],["__file","golang.html.vue"]]);export{u as default};
