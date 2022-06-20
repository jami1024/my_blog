import{_ as n,d as s}from"./app.db239aa3.js";const a={},p=s(`<p>#golang #\u51FD\u6570</p><h1 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h1><p>\u51FD\u6570\u4EE3\u8868\u4E86\u4EE3\u7801\u6267\u2F8F\u7684\u903B\u8F91\uFF0CGo\u8BED\u2F94\u4E2D\u51FD\u6570\u7684\u5173\u952E\u5B57\u662Ffunc\u52A0\u4E0A\u51FD\u6570\u540D\uFF0C\u53C2\u6570\u5217\u8868\uFF0C\u8FD4\u56DE\u503C\u548C\u51FD\u6570\u4F53\uFF0C\u6784\u6210\u2F00\u4E2A\u51FD\u6570\u3002\u6211\u4EEC\u5728 \u5F00\u53D1\u2F00\u4E2A\u7A0B\u5E8F\u4E2D\u2F00\u5B9A\u4F1A\u5305\u542B\u5F88\u591A\u4E2A\u51FD\u6570</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//\u8FD9\u662F\u2F00\u4E2A\u7279\u6B8A\u7684\u51FD\u6570 \u7531\u7CFB\u7EDF\u2F83\u52A8\u8C03\u2F64 }</span>

<span class="token keyword">func</span> <span class="token function">funcname</span><span class="token punctuation">(</span>parametername1 type1<span class="token punctuation">,</span>parametername2 type2<span class="token punctuation">)</span><span class="token punctuation">(</span>output1 type1<span class="token punctuation">,</span>output2 type2<span class="token punctuation">)</span><span class="token punctuation">{</span> 
	<span class="token comment">//\u5904\u7406\u903B\u8F91 //\u8FD4\u56DE go\u8BED\u2F94\u2F40\u6301\u591A\u8FD4\u56DE\u503C\uFF0C\u2F00\u4E2A\u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u591A\u4E2A\u7ED3\u679C </span>
	<span class="token keyword">return</span> value1<span class="token punctuation">,</span>value2 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u51FD\u6570\u7684\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684\u58F0\u660E" aria-hidden="true">#</a> \u51FD\u6570\u7684\u58F0\u660E</h2><p>\u6211\u4EEC\u2F83\u5B9A\u4E49\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u9700\u8981\u6CE8\u610F\u6309\u7167\u89C4\u5219\u5B9A\u4E49\u5FC5\u987B\u6EE1\u2F9C\u4EE5\u4E0B\u683C\u5F0F\uFF1A\u51FD\u6570\u7684\u540D\u5B57\u53EF\u4EE5\u7531\u5B57\u6BCD\u548C\u6570\u5B57\u7EC4\u6210\uFF0C\u4F46\u662F\u4E0D\u80FD\u662F\u6570\u5B57\u5F00\u5934\uFF0C\u51FD\u6570\u7684\u2FB8\u5B57\u6BCD\u533A\u5206\u2F24\u2F29\u5199\uFF0C\u5982\u679C\u662F\u2F24\u5199\u7684\u8868\u2F70\u516C\u5171\u7684\u51FD\u6570,\u5176\u4ED6\u5305\u5185\u53EF\u4EE5\u8C03\u2F64\u5230;\u5982\u679C\u662F\u2F29\u5199\u7684,\u8868\u2F70\u79C1\u6709\u7684\u51FD\u6570,\u4EC5\u80FD\u591F\u5728\u672C\u5305\u4E2D\u8C03\u2F64.</p><h2 id="\u51FD\u6570\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u51FD\u6570\u7684\u4F7F\u7528</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> fuc_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestFuncOperate</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    num <span class="token operator">:=</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u51FD\u6570\u7684\u8C03\u2F64</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;100\u4EE5\u5185\u4E4B\u548C\u4E3A%d\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5B9A\u4E49\u51FD\u6570 \u6C421-100\u7684\u548C</span>
<span class="token keyword">func</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    sum <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> i
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u51FD\u6570\u5FC5\u987B\u5148\u5B9A\u4E49\u624D\u80FD\u4F7F\u2F64,\u800C\u4E14\u51FD\u6570\u540D\u8FD8\u4E0D\u80FD\u91CD\u590D,main\u51FD\u6570\u662F\u7A0B\u5E8F\u4E2D\u7279\u6B8A\u7684\u51FD\u6570\uFF0C\u5176\u4ED6\u2F83\u2F30\u5B9A\u4E49\u7684\u51FD\u6570\u4E0D\u80FD\u53EB\u8FD9\u4E2A\u540D\u5B57</p><h2 id="\u51FD\u6570\u7684\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684\u53C2\u6570" aria-hidden="true">#</a> \u51FD\u6570\u7684\u53C2\u6570</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> fuc_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestFuncParams</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u51FD\u6570\u7684\u8C03\u2F64</span>
    sum <span class="token operator">:=</span> <span class="token function">getSum2</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>      <span class="token comment">//\u8FD9\u2FA530 \u4F5C\u4E3A\u5B9E\u53C2\u4F20\u9012\u7ED9\u2F45\u6CD5</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> sum<span class="token punctuation">)</span> <span class="token comment">//465</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5B9A\u4E49\u51FD\u6570 num\u4E3A\u5F62\u53C2\u2F64\u4E8E\u63A5\u6536\u8C03\u2F64\u2F45\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570</span>
<span class="token keyword">func</span> <span class="token function">getSum2</span><span class="token punctuation">(</span>num <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    sum <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> i
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012" aria-hidden="true">#</a> \u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012</h3><p>Go\u8BED\u2F94\u4E2D\u51FD\u6570\u4E5F\u662F\u2F00\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u8DDF\u5176\u4ED6\u6570\u636E\u7C7B\u578B\u2F00\u6837\u5F53\u51FD\u6570\u7684\u53C2\u6570\u3002\u8C03\u2F64\u53D8\u91CF\u65F6\u5019\u4E5F\u5C31\u76F8\u5F53\u4E8E\u8C03\u2F64\u51FD\u6570\u4E86\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> fuc_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestFuncParams</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u51FD\u6570\u7684\u8C03\u2F64</span>
    sum <span class="token operator">:=</span> <span class="token function">getSum2</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>      <span class="token comment">//\u8FD9\u2FA530 \u4F5C\u4E3A\u5B9E\u53C2\u4F20\u9012\u7ED9\u2F45\u6CD5</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> sum<span class="token punctuation">)</span> <span class="token comment">//465</span>

    <span class="token comment">//\u58F0\u660E\u2F00\u4E2A\u53D8\u91CFf</span>
    <span class="token keyword">var</span> f <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">//\u5C06\u2F83\u5B9A\u4E49\u51FD\u6570myfunc \u8D4B\u7ED9\u53D8\u91CFf</span>
    f <span class="token operator">=</span> myfunc
    <span class="token comment">//\u8C03\u2F64\u53D8\u91CFf \u76F8\u5F53\u4E8E\u8C03\u2F64\u51FD\u6570myfunc()</span>
    <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token comment">//\u5B9A\u4E49\u51FD\u6570 num\u4E3A\u5F62\u53C2\u2F64\u4E8E\u63A5\u6536\u8C03\u2F64\u2F45\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570</span>
<span class="token keyword">func</span> <span class="token function">getSum2</span><span class="token punctuation">(</span>num <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    sum <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> i
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>

<span class="token comment">//\u2F83\u5B9A\u4E49\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token function">myfunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;myfunc...&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="\u51FD\u6570\u7684\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u51FD\u6570\u7684\u8FD4\u56DE\u503C</h2><p>\u51FD\u6570\u53EF\u4EE5\u5B9A\u4E49\u591A\u4E2A\u8FD4\u56DE\u503C\uFF0C\u5E76\u4E14\u8FD4\u56DE\u503C\u7C7B\u578B\uFF0C\u8FD4\u56DE\u503C\u6570\u91CF\u90FD\u5FC5\u987B\u662F\u2F00\u2F00\u5BF9\u5E94\u7684\uFF0C _ \u7A7A\u2F69\u6807\u8BC6\u7B26\uFF0C\u820D\u5F03\u8FD4\u56DE\u7684\u6570\u636E\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> fuc_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestFucnReturn</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u51FD\u6570\u7684\u8FD4\u56DE\u503C&quot;</span><span class="token punctuation">)</span>
    num<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token function">getnum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> ok<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8FD4\u56DE\u503C\u7C7B\u578B\u6570\u5B57\u548C\u5B57\u7B26\u4E32</span>
<span class="token keyword">func</span> <span class="token function">getnum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token string">&quot;ok&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u53D8\u91CF\u7684\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u7684\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u53D8\u91CF\u7684\u4F5C\u7528\u57DF</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> fuc_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestFuncScope</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D8\u91CF\u5728\u51FD\u6570\u4E2D\u7684\u4F5C\u7528\u57DF&quot;</span><span class="token punctuation">)</span>
    x <span class="token operator">:=</span> <span class="token number">2</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;x\u7684\u503C:%d\\n&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
    <span class="token keyword">if</span> i <span class="token operator">:=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">30</span> <span class="token punctuation">{</span>
        x <span class="token operator">:=</span> <span class="token number">20</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment">//if\u8BED\u53E5\u5185\u90E8\u5B9A\u4E49\u7684x,\u5F53\u6CA1if\u5185\u6CA1\u6709\u5B9A\u4E49\u65F6\u5C31\u4F1A\u5F80\u4E0A\u627E</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// fmt.Println(&quot;index&quot;, i) //if\u5185\u90E8\u5B9A\u4E49\u7684i if\u4E4B\u5916\u5C31\u4E0D\u80FD\u8BBF\u95EE\u4E86</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u51FD\u6570\u5916\u90E8\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF</span>
<span class="token comment">//\u5168\u5C40\u53D8\u91CF\u4E0D\u2F40\u6301\u7B80\u77ED\u5B9A\u4E49\u2F45\u6CD5 n:=0</span>
<span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">3</span> <span class="token comment">//\u5168\u5C40\u53D8\u91CF\u53EF\u4EE5\u968F\u610F\u88AB\u4FEE\u6539 \u5982\u679C\u4E0D\u60F3\u88AB\u4FEE\u6539\u53EF\u4EE5\u5B9A\u4E49\u4E3A\u5E38\u91CF</span>
<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// fmt.Print(x)   //undefined: x \u672A\u5B9A\u4E49 x\u662Fmain\u51FD\u6570\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF \u6240\u4EE5\u4E0D\u80FD\u8BBF\u95EE</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token comment">//n\u662F\u5168\u5C40\u53D8\u91CF \u4EFB\u4F55\u5730\u2F45\u90FD\u53EF\u4EE5\u8BBF\u95EE</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="\u533F\u540D\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u51FD\u6570" aria-hidden="true">#</a> \u533F\u540D\u51FD\u6570</h2><p>\u533F\u540D\u4E5F\u5C31\u662F\u6CA1\u6709\u540D\u5B57\u7684\u51FD\u6570,\u5B9A\u4E49\u2F00\u4E2A\u533F\u540D\u51FD\u6570\u76F4\u63A5\u52A0\u4E0A()\u5C31\u76F8\u5F53\u4E8E\u76F4\u63A5\u8C03\u2F64\u4E86,\u901A\u5E38\u53EA\u80FD\u8C03\u2F64\u2F00\u6B21\uFF0C\u53EF\u4EE5\u5C06\u533F\u540D\u51FD\u6570\u8D4B\u503C\u7ED9\u2F00\u4E2A\u53D8\u91CF,\u8FD9\u4E2A\u53D8\u91CF\u5C31\u4EE3\u8868\u4E86 \u8FD9\u4E2A\u51FD\u6570,\u5219\u53EF\u4EE5\u8C03\u2F64\u591A\u6B21.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> fuc_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestAnonymousFunc</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9A\u4E49\u533F\u540D\u51FD\u6570</span>
    <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u533F\u540D\u51FD\u6570&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">func</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> 
        <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">//\u62EC\u53F7\u5185\u4E3A\u533F\u540D\u51FD\u6570\u7684\u5B9E\u53C2</span>

    res <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span> 
        <span class="token keyword">return</span> a <span class="token operator">+</span> b 
        <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> 
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">//\u6253\u5370\u533F\u540D\u51FD\u6570\u8FD4\u56DE\u503C</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u533F\u540D\u51FD\u6570\u53EF\u4EE5\u4F5C\u4E3A\u53E6\u2F00\u4E2A\u51FD\u6570\u7684\u53C2\u6570,\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u53E6\u2F00\u4E2A\u51FD\u6570\u7684\u8FD4\u56DE\u503C.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> fuc_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestAnonymousFunc</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9A\u4E49\u533F\u540D\u51FD\u6570</span>
    <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u533F\u540D\u51FD\u6570&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">func</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">//\u62EC\u53F7\u5185\u4E3A\u533F\u540D\u51FD\u6570\u7684\u5B9E\u53C2</span>

    res <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">//\u6253\u5370\u533F\u540D\u51FD\u6570\u8FD4\u56DE\u503C</span>

    res2 <span class="token operator">:=</span> <span class="token function">oper</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> add<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;res2\u7684\u503C:%v\\n&quot;</span><span class="token punctuation">,</span> res2<span class="token punctuation">)</span>

    <span class="token comment">//\u533F\u540D\u51FD\u6570\u4F5C\u4E3A\u56DE\u8C03\u51FD\u6570\u76F4\u63A5\u5199\u2F0A\u53C2\u6570\u4E2D</span>
    res3 <span class="token operator">:=</span> <span class="token function">oper</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;res3\u7684\u503C:%v\\n&quot;</span><span class="token punctuation">,</span> res3<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9A\u4E49\u7528\u4E8E\u76F8\u52A0\u7684\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token comment">//oper\u5C31\u53EB\u505A\u2FBC\u9636\u51FD\u6570</span>
<span class="token comment">//fun \u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u5219fun\u5728\u8FD9\u2FA5\u53EB\u505A\u56DE\u8C03\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token function">oper</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">,</span> fun <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token comment">// fmt.Println(a, b, fun) //20 12 0x49a810A \u7B2C\u4E09\u4E2A\u6253\u5370\u7684\u662F\u4F20\u2F0A\u7684\u51FD\u6570\u4F53\u5185\u5B58\u5730\u5740</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C\u4E00\u4E2A\u53C2\u6570%v\\t\u7B2C\u4E8C\u4E2A\u53C2\u6570%v\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    res <span class="token operator">:=</span> <span class="token function">fun</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">//fun \u5728\u8FD9\u2FA5\u4F5C\u4E3A\u56DE\u8C03\u51FD\u6570 \u7A0B\u5E8F\u6267\u2F8F\u5230\u6B64\u4E4B\u540E\u624D\u5B8C\u6210\u8C03\u2F64</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>\u6839\u636Ego\u8BED\u2F94\u7684\u6570\u636E\u7C7B\u578B\u7684\u7279\u70B9,\u51FD\u6570\u4E5F\u662F\u2F00\u79CD\u7C7B\u578B,\u6240\u4EE5\u53EF\u4EE5\u5C06\u2F00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53E6\u2F00\u4E2A\u51FD\u6570\u7684\u53C2\u6570\u4F20\u9012func1()\u548Cfunc2()\u662F\u4E24\u4E2A\u51FD\u6570,\u5C06func1\u51FD\u6570\u4F5C\u4E3Afunc2\u8FD9\u4E2A\u51FD\u6570\u7684\u53C2\u6570,func2\u51FD\u6570\u5C31\u53EB\u505A\u2FBC\u9636\u51FD\u6570,\u56E0\u4E3A\u4ED6\u63A5\u6536\u4E86\u2F00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570.\u6240\u4EE5func1\u53EB\u505A\u56DE\u8C03\u51FD\u6570,\u5B83\u4F5C\u4E3A\u53E6\u2F00\u4E2A\u51FD\u6570\u7684\u53C2\u6570.</p><h2 id="defer\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#defer\u8BED\u53E5" aria-hidden="true">#</a> defer\u8BED\u53E5</h2><p>defer\u8868\u2F70\u5EF6\u65F6\u63A8\u8FDF\u7684\u610F\u601D,\u5728go\u8BED\u2F94\u4E2D\u2F64\u6765\u5EF6\u65F6\u2F00\u4E2A\u51FD\u6570\u6216\u8005\u2F45\u6CD5\u7684\u6267\u2F8F.\u5982\u679C\u2F00\u4E2A\u51FD\u6570\u6216\u8005\u2F45\u6CD5\u6DFB\u52A0\u4E86defer\u5173\u952E\u5B57,\u8868\u2F70\u5219\u6682\u65F6\u4E0D\u6267\u2F8F,\u7B49\u5230\u4E3B\u51FD\u6570\u7684\u6240\u6709\u2F45\u6CD5\u90FD\u6267\u2F8F\u5B8C\u540E\u624D\u5F00\u59CB\u6267\u2F8F.\u5F53\u591A\u4E2A\u51FD\u6570\u88ABdefer\u7684\u65F6\u5019\u4ED6\u4EEC\u88AB\u6DFB\u52A0\u5230\u2F00\u4E2A\u5806\u6808\u4E2D,\u5E76\u4E14\u6839\u636E\u5148\u8FDB\u540E\u51FA\u7684\u539F\u5219\u6267\u2F8F. \u5373 Last In First Out\uFF08LIFO\uFF09</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> fuc_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestFuncDefer</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token function">deferTest</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//\u7B2C\u2F00\u4E2A\u88ABdefer\u7684\uFF0C\u51FD\u6570\u540E\u6267\u2F8F</span>
    <span class="token keyword">defer</span> <span class="token function">deferTest</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">//\u7B2C\u2F06\u4E2A\u88ABdefer\u7684\uFF0C\u51FD\u6570\u5148\u6267\u2F8F</span>
    <span class="token function">deferTest</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>       <span class="token comment">//\u6CA1\u6709defer\u7684\u51FD\u6570\uFF0C\u7B2C\u2F00\u6B21\u6267\u2F8F</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">deferTest</span><span class="token punctuation">(</span>s <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>defer\u51FD\u6570\u8C03\u2F64\u65F6\u5019,\u53C2\u6570\u5DF2\u7ECF\u4F20\u9012\u4E86.\u53EA\u4E0D\u8FC7\u4EE3\u7801\u6682\u65F6\u4E0D\u6267\u2F8F\u2F7D\u5DF2,\u7B49\u5F85\u4E3B\u51FD\u6570\u6267\u2F8F\u7ED3\u675F\u540E,\u624D\u4F1A\u53BB\u6267\u2F8F.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> fuc_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestFuncDefer</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token function">deferTest</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//\u7B2C\u2F00\u4E2A\u88ABdefer\u7684\uFF0C\u51FD\u6570\u540E\u6267\u2F8F</span>
    <span class="token keyword">defer</span> <span class="token function">deferTest</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">//\u7B2C\u2F06\u4E2A\u88ABdefer\u7684\uFF0C\u51FD\u6570\u5148\u6267\u2F8F</span>
    <span class="token function">deferTest</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>       <span class="token comment">//\u6CA1\u6709defer\u7684\u51FD\u6570\uFF0C\u7B2C\u2F00\u6B21\u6267\u2F8F</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestFuncDefer2</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token number">10</span>
    <span class="token keyword">defer</span> <span class="token function">deferTest</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">//\u6B64\u65F6a\u5DF2\u7ECF\u4F5C\u4E3A10 \u4F20\u9012\u51FA\u53BB\u4E86 \u53EA\u662F\u6CA1\u6709\u6267\u2F8F</span>
    a<span class="token operator">++</span>                <span class="token comment">//a++ \u4E0D\u4F1A\u5F71\u54CDdefer\u51FD\u6570\u5EF6\u8FDF\u6267\u2F8F\u7ED3\u679C</span>
    <span class="token function">deferTest</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">deferTest</span><span class="token punctuation">(</span>s <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h2><p>go\u8BED\u2F94\u2F40\u6301\u5C06\u2F00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012,\u4E5F\u2F40\u6301\u5C06\u2F00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C.\u2F00\u4E2A\u5916\u5C42\u51FD\u6570\u5F53\u4E2D\u6709\u5185\u5C42\u51FD\u6570,\u8FD9\u4E2A\u5185\u5C42\u51FD\u6570\u4F1A\u64CD\u4F5C\u5916\u5C42\u51FD\u6570\u7684\u5C40\u90E8\u53D8\u91CF.\u5E76\u4E14\uFF0C\u5916\u5C42\u51FD\u6570\u628A\u5185\u5C42\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C,\u5219\u8FD9\u2FA5\u5185\u5C42\u51FD\u6570\u548C\u5916\u5C42\u51FD\u6570\u7684\u5C40\u90E8\u53D8\u91CF\uFF0C\u7EDF\u79F0\u4E3A\u95ED\u5305\u7ED3\u6784 . \u8FD9\u4E2A\u5916\u5C42\u51FD\u6570\u7684\u5C40\u90E8\u53D8\u91CF\u7684\u2F63\u547D\u5468\u671F\u4F1A\u968F\u7740\u53D1\u2F63\u6539\u53D8,\u539F\u672C\u5F53\u2F00\u4E2A\u51FD\u6570\u6267\u2F8F\u7ED3\u675F\u540E.\u51FD\u6570\u5185\u90E8\u7684\u5C40\u90E8\u53D8\u91CF\u4E5F\u4F1A\u968F\u4E4B\u9500\u6BC1.\u4F46\u662F\u95ED\u5305\u7ED3\u6784\u5185\u7684\u5C40\u90E8\u53D8\u91CF\u4E0D\u4F1A\u968F\u7740\u5916\u5C42\u51FD\u6570\u7684\u7ED3\u675F\u2F7D\u9500\u6BC1.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> fuc_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestFuncClosure</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u95ED\u5305&quot;</span><span class="token punctuation">)</span>
    res <span class="token operator">:=</span> <span class="token function">closure</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    r1 <span class="token operator">:=</span> <span class="token function">res</span><span class="token punctuation">(</span><span class="token punctuation">)</span>               <span class="token comment">//\u6267\u2F8Fclosure\u51FD\u6570\u8FD4\u56DE\u7684\u533F\u540D\u51FD\u6570</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;r1:%v\\n&quot;</span><span class="token punctuation">,</span> r1<span class="token punctuation">)</span> <span class="token comment">//1</span>
    r2 <span class="token operator">:=</span> <span class="token function">res</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">//\u666E\u901A\u7684\u51FD\u6570\u5E94\u8BE5\u8FD4\u56DE1\uFF0C\u2F7D\u8FD9\u2FA5\u5B58\u5728\u95ED\u5305\u7ED3\u6784\u6240\u4EE5\u8FD4\u56DE2 \u3002</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;r2:%v\\n&quot;</span><span class="token punctuation">,</span> r2<span class="token punctuation">)</span> <span class="token comment">//2</span>
    <span class="token comment">//\u2F00\u4E2A\u5916\u5C42\u51FD\u6570\u5F53\u4E2D\u6709\u5185\u5C42\u51FD\u6570\uFF0C\u8FD9\u4E2A\u5185\u5C42\u51FD\u6570\u4F1A\u64CD\u4F5C\u5916\u5C42\u51FD\u6570\u7684\u5C40\u90E8\u53D8\u91CF,</span>
    <span class="token comment">//\u5E76\u4E14\u5916\u5C42\u51FD\u6570\u628A\u5185\u5C42\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C,\u5219\u8FD9\u2FA5\u5185\u5C42\u51FD\u6570\u548C\u5916\u5C42\u51FD\u6570\u7684\u5C40\u90E8\u53D8\u91CF,\u7EDF\u79F0\u4E3A\u95ED\u5305\u7ED3\u6784</span>
    <span class="token comment">//\u6240\u4EE5\u4E0A\u2FAF\u6253\u5370\u7684r2 \u662F\u7D2F\u8BA1\u52302 \u3002</span>

    res2 <span class="token operator">:=</span> <span class="token function">closure</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u518D\u6B21\u8C03\u2F64\u5219\u4EA7\u2F63\u65B0\u7684\u95ED\u5305\u7ED3\u6784 \u5C40\u90E8\u53D8\u91CF\u5219\u65B0\u5B9A\u4E49\u7684</span>
    r3 <span class="token operator">:=</span> <span class="token function">res2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;r3:%v\\n&quot;</span><span class="token punctuation">,</span> r3<span class="token punctuation">)</span> <span class="token comment">//1</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5B9A\u4E49\u2F00\u4E2A\u95ED\u5305\u7ED3\u6784\u7684\u51FD\u6570 \u8FD4\u56DE\u2F00\u4E2A\u533F\u540D\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token function">closure</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5916\u5C42\u51FD\u6570</span>
    <span class="token comment">//\u5B9A\u4E49\u5C40\u90E8\u53D8\u91CFa</span>
    a <span class="token operator">:=</span> <span class="token number">0</span> <span class="token comment">//\u5916\u5C42\u51FD\u6570\u7684\u5C40\u90E8\u53D8\u91CF //\u5B9A\u4E49\u5185\u5C42\u533F\u540D\u51FD\u6570 \u5E76\u76F4\u63A5\u8FD4\u56DE</span>
    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u5185\u5C42\u51FD\u6570</span>
        a<span class="token operator">++</span> <span class="token comment">//\u5728\u533F\u540D\u51FD\u6570\u4E2D\u5C06\u53D8\u91CF\u2F83\u589E\u3002\u5185\u5C42\u51FD\u6570\u2F64\u5230\u4E86\u5916\u5C42\u51FD\u6570\u7684\u5C40\u90E8\u53D8\u91CF\uFF0C\u6B64\u53D8\u91CF\u4E0D\u4F1A\u968F\u7740\u5916\u5C42\u51FD\u6570\u7684\u7ED3\u675F\u9500\u6BC1</span>
        <span class="token keyword">return</span> a
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="panic-\u548C-recover" tabindex="-1"><a class="header-anchor" href="#panic-\u548C-recover" aria-hidden="true">#</a> panic() \u548C recover()</h2><p>panic\u5B95\u673A,recover\u6062\u590D,panic \u8868\u2F70\u6050\u614C.\u5F53\u7A0B\u5E8F\u9047\u5230\u2F00\u4E2A\u5F02\u5E38\u65F6\u5019\u53EF\u4EE5\u5F3A\u5236\u6267\u2F8F\u8BA9\u7A0B\u5E8F\u7EC8\u2F4C\u64CD\u4F5C,\u540C\u65F6\u9700\u8981\u5F15\u2F0Adefer\u51FD\u6570\u7C7B\u5EF6\u65F6\u64CD\u4F5C\u540E\u2FAF\u7684\u51FD\u6570,\u5728defer\u51FD\u6570\u4E2D\u901A\u8FC7recover\u6765\u6062\u590D\u6B63\u5E38\u4EE3\u7801\u7684\u6267\u2F8F,\u56E0\u4E3Adefer\u662F\u6839\u636E\u5148\u2F0A\u540E\u51FA\u539F\u5219,\u6240\u4EE5\u5148\u88ABdefer\u7684\u51FD\u6570\u4F1A\u653E\u5728\u6700\u540E\u6267\u2F8F,recover\u9700\u8981\u653E\u5728\u7B2C\u2F00\u4E2A\u88AB\u6267\u2F8F.\u5F53\u9047\u5230panic\u65F6\u5019\u6062\u590D\u6B63\u5E38\u7684\u4EE3\u7801\u903B\u8F91,\u540C\u65F6\u4E5F\u53EF\u5C06\u9519\u8BEF\u4FE1\u606F\u901A\u8FC7 recover\u83B7\u53D6panic\u4F20\u9012\u7684\u9519\u8BEF\u4FE1\u606F</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> fuc_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestPanic</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;panic\u548Crecover&quot;</span><span class="token punctuation">)</span>
    <span class="token function">func_panic</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">func_panic</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ms <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment">//\u8FD9\u2FA5\u6267\u2F8F\u6062\u590D\u64CD\u4F5C</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ms<span class="token punctuation">,</span> <span class="token string">&quot;\u6062\u590D\u6267\u2F8F\u4E86..&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u6062\u590D\u7A0B\u5E8F\u6267\u2F8F,\u4E14\u5FC5\u987B\u5728defer\u51FD\u6570\u4E2D\u6267\u2F8F</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C1\u4E2A\u88ABdefer\u6267\u2F8F&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C2\u4E2A\u88ABdefer\u6267\u2F8F&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">4</span> <span class="token punctuation">{</span>
            <span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E2D\u65AD\u64CD\u4F5C&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u8BA9\u7A0B\u5E8F\u8FDB\u2F0A\u6050\u614C \u7EC8\u7AEF\u7A0B\u5E8F\u64CD\u4F5C</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B2C3\u4E2A\u88ABdefer\u6267\u2F8F&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u6050\u614C\u4E4B\u540E\u7684\u4EE3\u7801\u662F\u4E0D\u4F1A\u88AB\u6267\u2F8F\u7684</span>

    <span class="token comment">/*
        === RUN   TestPanic
        panic\u548Crecover
        \u7B2C2\u4E2A\u88ABdefer\u6267\u2F8F
        \u7B2C1\u4E2A\u88ABdefer\u6267\u2F8F
        \u4E2D\u65AD\u64CD\u4F5C \u6062\u590D\u6267\u2F8F\u4E86..
        --- PASS: TestPanic (0.00s)
        PASS
        ok      gonotes/func    0.463s

    */</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div>`,36);function t(e,c){return p}var l=n(a,[["render",t],["__file","func.html.vue"]]);export{l as default};
