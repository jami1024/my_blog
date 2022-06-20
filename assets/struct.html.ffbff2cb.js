import{_ as n,d as s}from"./app.db239aa3.js";const a={},p=s(`<p>#golang #\u7ED3\u6784\u4F53</p><h1 id="\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u7ED3\u6784\u4F53</h1><p>\u5728Go\u8BED\u2F94\u4E2D\u4E0D\u5B58\u5728Class\u7C7B\u7684\u6982\u5FF5,\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7\u7ED3\u6784\u4F53struct\u6765\u5B9E\u73B0.\u7ED3\u6784\u4F53\u5C31\u662F\u2F00\u79CD\u76F8\u540C\u7C7B\u578B,\u6216\u8005\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u6784\u6210\u7684\u6570\u636E\u7684\u96C6\u5408.\u2FA5\u2FAF\u7684\u6BCF\u2F00\u4E2A\u53D8\u91CF\u53EB\u505A\u6210\u5458\u53D8\u91CF,\u4E5F\u5C31\u662F\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5,\u6BCF\u2F00\u4E2A\u5B57\u6BB5\u62E5\u6709\u2F83\u2F30\u7684\u6570\u636E\u7C7B\u578B\u548C\u6570\u503C.</p><h2 id="\u7ED3\u6784\u4F53\u7684\u5B9E\u4F8B\u5316" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u7684\u5B9E\u4F8B\u5316" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u7684\u5B9E\u4F8B\u5316</h2><p>\u7ED3\u6784\u4F53\u5B9A\u4E49\u4E4B\u540E\u4E5F\u53EA\u662F\u786E\u5B9A\u4E86\u8FD9\u4E2A\u7ED3\u6784\u957F\u4EC0\u4E48\u6837\u2F26,\u90FD\u6709\u54EA\u4E9B\u5B57\u6BB5,\u5E76\u6CA1\u6709\u771F\u5B9E\u7684\u6570\u636E,\u6240\u4EE5\u9700\u8981\u4F7F\u2F64\u7ED3\u6784\u4F53\u65F6\u5FC5\u987B\u5148\u5B9E\u4F8B\u5316\u7ED3\u6784\u4F53.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> struct_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u5B9A\u4E49\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name    <span class="token builtin">string</span>
    age     <span class="token builtin">int</span>
    sex     <span class="token builtin">string</span>
    address <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestStructStatement</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7ED3\u6784\u4F53\u58F0\u660E&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">//\u5B9E\u4F8B\u5316\u540E\u5E76\u4F7F\u2F64\u7ED3\u6784\u4F53</span>
    p <span class="token operator">:=</span> Person<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//\u4F7F\u2F64\u7B80\u77ED\u58F0\u660E\u2F45\u5F0F\uFF0C\u540E\u2FAF\u52A0\u4E0A{}\u4EE3\u8868\u8FD9\u662F\u7ED3\u6784\u4F53</span>
    p<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>    <span class="token comment">//\u7ED9\u7ED3\u6784\u4F53\u5185\u6210\u5458\u53D8\u91CF\u8D4B\u503C</span>
    p<span class="token punctuation">.</span>address <span class="token operator">=</span> <span class="token string">&quot;\u5317\u4EAC&quot;</span>
    p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span>
    p<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token string">&quot;\u7537&quot;</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>age<span class="token punctuation">,</span> p<span class="token punctuation">.</span>address<span class="token punctuation">,</span> p<span class="token punctuation">.</span>name<span class="token punctuation">,</span> p<span class="token punctuation">.</span>sex<span class="token punctuation">)</span> <span class="token comment">//\u4F7F\u2F64\u70B9.\u6765\u8BBF\u95EE\u7ED3\u6784\u4F53\u5185\u6210\u5458\u7684\u53D8\u91CF\u7684\u503C\u3002</span>

    <span class="token comment">/*
        === RUN   TestStructStatement
        \u7ED3\u6784\u4F53\u58F0\u660E
        18 \u5317\u4EAC \u5F20\u4E09 \u7537
        --- PASS: TestStructStatement (0.00s)
        PASS
        ok      gonotes/struct  0.453s
    */</span>
    <span class="token comment">//\u76F4\u63A5\u7ED9\u6210\u5458\u53D8\u91CF\u8D4B\u503C</span>
    p2 <span class="token operator">:=</span> Person<span class="token punctuation">{</span>age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> address<span class="token punctuation">:</span> <span class="token string">&quot;\u5317\u4EAC&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">&quot;lisi&quot;</span><span class="token punctuation">,</span> sex<span class="token punctuation">:</span> <span class="token string">&quot;\u2F25&quot;</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span>age<span class="token punctuation">,</span> p2<span class="token punctuation">.</span>address<span class="token punctuation">,</span> p2<span class="token punctuation">.</span>name<span class="token punctuation">,</span> p2<span class="token punctuation">.</span>sex<span class="token punctuation">)</span>

    <span class="token comment">/*
        === RUN   TestStructStatement
        \u7ED3\u6784\u4F53\u58F0\u660E
        18 \u5317\u4EAC \u5F20\u4E09 \u7537
        18 \u5317\u4EAC lisi \u2F25
        --- PASS: TestStructStatement (0.00s)
        PASS
        ok      gonotes/struct  0.434s
    */</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p>\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u7ECF\u5E38\u4F1A\u4EE5\u4E0B\u2FAF\u8FD9\u79CD\u4F7F\u2F64\u51FD\u6570\u5C01\u88C5\u5199\u6CD5,\u6765\u5B9E\u4F8B\u5316\u2F00\u4E2A\u7ED3\u6784\u4F53.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> struct_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u5B9A\u4E49\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> Personv2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
    sex  <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestStructStatementV2</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p <span class="token operator">:=</span> <span class="token function">newPerson</span><span class="token punctuation">(</span><span class="token string">&quot;wagner&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7537&quot;</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">,</span> p<span class="token punctuation">.</span>age<span class="token punctuation">,</span> p<span class="token punctuation">.</span>sex<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u4F7F\u2F64\u51FD\u6570\u6765\u5B9E\u4F8B\u5316\u7ED3\u6784\u4F53</span>
<span class="token keyword">func</span> <span class="token function">newPerson</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> age <span class="token builtin">int</span><span class="token punctuation">,</span> sex <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Personv2 <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>Personv2<span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> name<span class="token punctuation">,</span>
        age<span class="token punctuation">:</span>  age<span class="token punctuation">,</span>
        sex<span class="token punctuation">:</span>  sex<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
=== RUN   TestStructStatementV2
wagner 18 \u7537
--- PASS: TestStructStatementV2 (0.00s)
PASS
ok      gonotes/struct  (cached)
*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="\u7ED3\u6784\u4F53\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u521D\u59CB\u5316" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u521D\u59CB\u5316</h2><p>\u7ED3\u6784\u4F53\u5185\u7684\u6BCF\u2F00\u4E2A\u5B57\u6BB5,\u90FD\u6709\u2F83\u2F30\u76F8\u5E94\u7684\u6570\u636E\u7C7B\u578B,\u5982\u679C\u7ED3\u6784\u4F53\u88AB\u5B9E\u4F8B\u5316\u540E,\u5B57\u6BB5\u7684\u9ED8\u8BA4\u503C\u5C31\u662F\u8BE5\u5B57\u6BB5\u7C7B\u578B\u7684\u96F6\u503C,int\u5C31\u662F0,string\u5C31\u662F&quot;&quot; ,\u5982\u679C\u662F\u6307\u9488\u7C7B\u578B,\u9ED8\u8BA4\u5C31\u662Fnil . \u521D\u59CB\u5316\u65F6\u53EF\u4EE5\u5FFD\u7565\u6210\u5458\u5185\u7684\u5B57\u6BB5\u540D,\u4F46\u662F\u5FC5\u987B\u548C\u7ED3\u6784\u4F53\u5185\u5B57\u6BB5\u987A\u5E8F\u2F00\u81F4.</p><h2 id="\u533F\u540D\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u533F\u540D\u7ED3\u6784\u4F53</h2><p>\u533F\u540D\u7ED3\u6784\u4F53\u5C31\u662F\u6CA1\u6709\u7C7B\u578B\u540D\u79F0,\u4E5F\u4E0D\u9700\u8981type\u5173\u952E\u5B57,\u53EF\u4EE5\u76F4\u63A5\u4F7F\u2F64.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> struct_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestStructAnonymouns</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u533F\u540D\u7ED3\u6784\u4F53&quot;</span><span class="token punctuation">)</span>
    p <span class="token operator">:=</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
        name <span class="token builtin">string</span>
    <span class="token punctuation">}</span><span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u7ED3\u6784\u4F53\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u5D4C\u5957" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u5D4C\u5957</h2><p>\u7ED3\u6784\u4F53\u53EF\u4EE5\u5305\u542B\u591A\u4E2A\u5B57\u6BB5,\u6BCF\u2F00\u4E2A\u5B57\u6BB5\u90FD\u9700\u8981\u76F8\u5E94\u7684\u6570\u636E\u7C7B\u578B,\u7ED3\u6784\u4F53\u4E5F\u5C5E\u4E8E\u2F00\u79CD\u6570\u636E\u7C7B\u578B,\u6240\u4EE5\u7ED3\u6784\u4F53\u5185\u90E8\u4E5F\u53EF\u4EE5\u5305\u542B\u53E6\u2F00\u4E2A\u7ED3\u6784\u4F53.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> struct_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u7ED3\u6784\u4F531</span>

<span class="token keyword">type</span> P1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
    addr Addr
<span class="token punctuation">}</span>

<span class="token comment">// \u7ED3\u6784\u4F532</span>
<span class="token keyword">type</span> Addr <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    addr <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E5F\u53EF\u4EE5\u5D4C\u5957\u7ED3\u6784\u4F53\u6307\u9488</span>
<span class="token keyword">type</span> P2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
    addr <span class="token operator">*</span>Addr
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestStructNested</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7ED3\u6784\u4F53\u5D4C\u5957&quot;</span><span class="token punctuation">)</span>
    p <span class="token operator">:=</span> P1<span class="token punctuation">{</span><span class="token punctuation">}</span>
    p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;\u7AE0\u4E09&quot;</span>
    p<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>
    p<span class="token punctuation">.</span>addr <span class="token operator">=</span> Addr<span class="token punctuation">{</span>addr<span class="token punctuation">:</span> <span class="token string">&quot;beijing&quot;</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token comment">//{\u7AE0\u4E09 18 {beijing}}</span>
    <span class="token comment">//\u7ED3\u6784\u4F53\u521D\u59CB\u5316\u53EF\u4EE5\u4F7F\u2F64\u4E0A\u2FAF\u4E24\u79CD\u683C\u5F0F\u5C06\u5B57\u6BB5\u540D\u548C\u5BF9\u5E94\u7684\u503C\u5199\u5728\u62EC\u53F7\u5185\uFF0C\u4F7F\u2F64(\u5B57\u6BB5\u540D:\u503C,)\u7684\u683C\u5F0F\u586B\u5145</span>
    <span class="token comment">//\u7B2C\u2F06\u79CD\u521D\u59CB\u5316\u7684\u2F45\u5F0F\uFF0C\u5B9A\u4E49\u597D\u7ED3\u6784\u4F53\u4E4B\u540E\u4F7F\u2F64\u91CD\u65B0\u8D4B\u503C\u7684\u2F45\u5F0F:\u4F7F\u2F64(\u53D8\u91CF.\u5B57\u6BB5\u540D=\u503C)\u7684\u683C\u5F0F</span>

    <span class="token comment">//\u5D4C\u5957\u7ED3\u6784\u4F53\u6307\u9488</span>
    pr <span class="token operator">:=</span> P2<span class="token punctuation">{</span><span class="token punctuation">}</span>
    pr<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;lisi&quot;</span>
    pr<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">22</span>
    pre <span class="token operator">:=</span> Addr<span class="token punctuation">{</span><span class="token punctuation">}</span>
    pre<span class="token punctuation">.</span>addr <span class="token operator">=</span> <span class="token string">&quot;chaoyang&quot;</span>
    pr<span class="token punctuation">.</span>addr <span class="token operator">=</span> <span class="token operator">&amp;</span>pre
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>pr<span class="token punctuation">)</span> <span class="token comment">//{lisi 22 0xc000096520}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="\u7ED3\u6784\u4F53\u4E0Ejson\u6570\u636E\u7684\u76F8\u4E92\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u4E0Ejson\u6570\u636E\u7684\u76F8\u4E92\u8F6C\u6362" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u4E0EJson\u6570\u636E\u7684\u76F8\u4E92\u8F6C\u6362</h2><p>JSON\u662F\u2F00\u79CD\u7279\u6B8A\u683C\u5F0F\u7684\u5B57\u7B26\u4E32,\u2F64\u6765\u4F20\u8F93\u548C\u5B58\u50A8\u6570\u636E,\u5728\u4F7F\u2F64api\u670D\u52A1\u5F00\u53D1\u63D0\u4F9B\u7ED9\u524D\u7AEF\u7684\u6570\u636E\u65F6,\u66F4\u591A\u4F7F\u2F64json\u6570\u636E\u4EA4\u4E92. Go \u8BED\u2F94\u6807\u51C6\u5E93\u4E2D\u63D0\u4F9B\u4E86json\u89E3\u6790\u7684\u5305,\u4F7F\u2F64\u4E4B\u524D\u5BFC\u2F0A\u5305.<code>import &quot;encoding/json&quot;</code></p><h3 id="\u7ED3\u6784\u4F53\u8F6Cjson\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u8F6Cjson\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u8F6Cjson\u5B57\u7B26\u4E32</h3><blockquote><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\u5C06\u7ED3\u6784\u4F53\u8F6C\u6362\u4E3AJson\u6570\u636E\u65F6\u5019,\u5B9A\u4E49\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\u5FC5\u987B\u2FB8\u5B57\u6BCD\u2F24\u5199.\u5426\u5219\u2F46\u6CD5\u6B63\u5E38\u89E3\u6790.</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> struct_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;encoding/json&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> Person1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Addr <span class="token operator">*</span>Addr1
<span class="token punctuation">}</span>

<span class="token comment">// \u7ED3\u6784\u4F532</span>
<span class="token keyword">type</span> Person2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
    Addr <span class="token operator">*</span>Addr1 <span class="token string">\`json:&quot;addr,omitempty&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5730\u5740\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> Addr1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Addr <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestStructToJson</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7ED3\u6784\u4F53\u8F6Cjson&quot;</span><span class="token punctuation">)</span>
    p <span class="token operator">:=</span> Person1<span class="token punctuation">{</span><span class="token punctuation">}</span>
    p2 <span class="token operator">:=</span> Person2<span class="token punctuation">{</span><span class="token punctuation">}</span>
    p<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span>
    p2<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;\u674E\u56DB&quot;</span>
    a <span class="token operator">:=</span> Addr1<span class="token punctuation">{</span><span class="token punctuation">}</span>
    a<span class="token punctuation">.</span>Addr <span class="token operator">=</span> <span class="token string">&quot;beijing&quot;</span>
    p<span class="token punctuation">.</span>Addr <span class="token operator">=</span> <span class="token operator">&amp;</span>a
    buf<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token comment">//\u8F6C\u6362\u4E3Ajson\u8FD4\u56DE\u4E24\u4E2A\u7ED3\u679C</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;json = &quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">/*
        \u7ED3\u679C json =  {&quot;Name&quot;:&quot;\u5F20\u4E09&quot;,&quot;Addr&quot;:{&quot;Addr&quot;:&quot;beijing&quot;}}
        \u4ECE\u7ED3\u679C\u53EF\u4EE5\u770B\u51FA\u5176\u4E2Djson\u5B57\u7B26\u4E2D\u6BCF\u2F00\u4E2Akey\u7684\u2FB8\u5B57\u6BCD\u4E5F\u662F\u2F24\u5199\uFF0C
        \u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\u6570\u636E\u7684\u5B57\u6BB5\u7684\u7ED3\u679C\u4E3Anull\u3002
        \u5982\u4F55\u5F3A\u5236\u5C06\u4ED6\u53D8\u4E3A\u2F29\u5199\u7684\u3002\u5E76\u4E14\u5C06\u4E0D\u9700\u8981\u663E\u2F70\u7684\u5B57\u6BB5\u9690\u85CF\u6389\u3002\u5C31\u9700\u8981\u5728\u7ED3\u6784\u4F53\u4E0A\u6DFB\u52A0\u6807\u8BB0\u3002
    */</span>

    buf2<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span> <span class="token comment">//\u8F6C\u6362\u4E3Ajson\u8FD4\u56DE\u4E24\u4E2A\u7ED3\u679C</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;json = &quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>buf2<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">/*
        \u7ED3\u679C\uFF1Ajson =  {&quot;name&quot;:&quot;\u674E\u56DB&quot;}
    */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><h3 id="json\u5B57\u7B26\u4E32\u8F6C\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#json\u5B57\u7B26\u4E32\u8F6C\u7ED3\u6784\u4F53" aria-hidden="true">#</a> json\u5B57\u7B26\u4E32\u8F6C\u7ED3\u6784\u4F53</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> struct_test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;encoding/json&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Person3 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span> <span class="token comment">//\u6307\u5B9Ajson\u5B57\u6BB5\u4E3A\u2F29\u5199\u8F93\u51FA</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestJsonToStruct</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;json\u5B57\u7B26\u4E32\u8F6C\u7ED3\u6784\u4F53&quot;</span><span class="token punctuation">)</span>
    jsonstr <span class="token operator">:=</span> <span class="token string">\`{&quot;name&quot;:&quot;\u738B\u4E8C&quot;}\`</span>
    <span class="token keyword">var</span> p Person3
    <span class="token keyword">if</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>jsonstr<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u7ED3\u6784\u4F53:%+v\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span> <span class="token comment">// %+v \u5C06\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\u540D\u79F0\u6253\u5370\u51FA\u6765</span>
    <span class="token comment">// \u7ED3\u6784\u4F53:{Name:\u738B\u4E8C}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,23);function t(e,o){return p}var l=n(a,[["render",t],["__file","struct.html.vue"]]);export{l as default};
