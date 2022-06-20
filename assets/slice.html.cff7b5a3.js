import{_ as n,d as s}from"./app.db239aa3.js";const a={},p=s(`<h1 id="\u5207\u7247" tabindex="-1"><a class="header-anchor" href="#\u5207\u7247" aria-hidden="true">#</a> \u5207\u7247</h1><p>\u5207\u7247\u662F\u957F\u5EA6\u53EF\u53D8\u7684\u6570\u7EC4(\u5177\u6709\u76F8\u540C\u6570\u636E\u7C7B\u578B\u7684\u6570\u636E\u9879\u7EC4\u6210\u7684\u4E00\u7EC4\u957F\u5EA6\u53EF\u53D8\u7684\u5E8F\u5217) ,\u5207\u7247\u7531\u4E09\u90E8\u5206\u7EC4\u6210:</p><ol><li>\u6307\u9488:\u6307\u5411\u5207\u7247\u7B2C\u4E00\u4E2A\u5143\u7D20\u6307\u5411\u7684\u6570\u7EC4\u5143\u7D20\u7684\u5730\u5740</li><li>\u957F\u5EA6:\u5207\u7247\u5143\u7D20\u7684\u6570\u91CF</li><li>\u5BB9\u91CF:\u5207\u7247\u5F00\u59CB\u5230\u7ED3\u675F\u4F4D\u7F6E\u5143\u7D20\u7684\u6570\u91CF</li></ol><h2 id="\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E" aria-hidden="true">#</a> \u58F0\u660E</h2><p>\u5207\u7247\u58F0\u660E\u9700\u8981\u6307\u5B9A\u7EC4\u6210\u5143\u7D20\u7684\u7C7B\u578B, \u4F46\u4E0D\u9700\u8981\u6307\u5B9A\u5B58\u50A8\u5143\u7D20\u7684\u6570\u91CF (\u957F\u5EA6) \u3002 \u5728\u5207\u7247\u58F0\u660E\u540E, \u4F1A\u88AB\u521D\u59CB\u5316\u4E3A nil,\u8868\u793A\u6682\u4E0D\u5B58\u5728\u7684\u5207\u7247</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> slice

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>


<span class="token keyword">func</span> <span class="token function">TestSliceStatement</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5207\u7247\u7684\u58F0\u660E&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> names <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;names\u7C7B\u578B:%T,names\u7684\u503C\u4E3A:%q\\n&quot;</span><span class="token punctuation">,</span> names<span class="token punctuation">,</span> names<span class="token punctuation">)</span>

	<span class="token keyword">var</span> namesNil <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token comment">// nil\u5207\u7247</span>
	<span class="token keyword">var</span> namesBlank <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//\u7A7A\u5207\u7247</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;namesNil:%t\\nnamesBlank:%t\\n&quot;</span><span class="token punctuation">,</span> namesNil <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> namesBlank <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>


	<span class="token comment">// \u5229\u7528make\u521B\u5EFA\u5207\u7247</span>
	<span class="token comment">// make(type, len, cap)</span>
	nameMake <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;nameMake\u7C7B\u578B:%T\\tnameMake\u7684\u503C\u4E3A:%q\\nnameMake\u7684len:%d\\tnameMake\u7684cap:%d\\n&quot;</span><span class="token punctuation">,</span> nameMake<span class="token punctuation">,</span> nameMake<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>nameMake<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>nameMake<span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">// \u8BBF\u95EE\u548C\u4FEE\u6539</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5207\u7247\u7684\u8BBF\u95EE&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;names\u7B2C\u4E00\u4E2A\u5143\u7D20\u662F:%v\\n&quot;</span><span class="token punctuation">,</span> names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5207\u7247\u7684\u4FEE\u6539&quot;</span><span class="token punctuation">)</span>
	names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;names:%q\\n&quot;</span><span class="token punctuation">,</span> names<span class="token punctuation">)</span>

	<span class="token comment">// \u957F\u5EA6,\u5207\u7247\u4E2D\u5DF2\u7ECF\u5B58\u5728\u7684\u5143\u7D20 len</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;names\u7684\u957F\u5EA6:%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span><span class="token punctuation">)</span>

	name3 <span class="token operator">:=</span> nameMake
	name3 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>name3<span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span> <span class="token comment">// [&quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;aa&quot;]</span>
	nameMake <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>nameMake<span class="token punctuation">,</span> <span class="token string">&quot;aa&quot;</span><span class="token punctuation">)</span> <span class="token comment">// [&quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;aa&quot;]</span>
	<span class="token comment">// \u53D8\u91CF\u8D4B\u503C\u90FD\u662F\u590D\u5236</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;nameMake\u7684\u503C\u4E3A:%q\\nname3\u7684\u503C%q\\n&quot;</span><span class="token punctuation">,</span> nameMake<span class="token punctuation">,</span> name3<span class="token punctuation">)</span>
	<span class="token comment">// 0 &lt;= start &lt;= end &lt;= cap</span>
	<span class="token comment">// len = end - start</span>
	<span class="token comment">// cap = cap - start</span>

	<span class="token comment">// 0 &lt;= start &lt;= end &lt;= cap_end &lt;= cap</span>
	<span class="token comment">// len = end -start</span>
	<span class="token comment">// cap = cap_end = start</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>nameMake<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

	<span class="token comment">/*

	=== RUN TestSliceStatement

	\u5207\u7247\u7684\u58F0\u660E

	names\u7C7B\u578B:[]string,names\u7684\u503C\u4E3A:[&quot;a&quot; &quot;b&quot; &quot;c&quot;]

	namesNil:true

	namesBlank:false

	nameMake\u7C7B\u578B:[]string nameMake\u7684\u503C\u4E3A:[&quot;&quot; &quot;&quot; &quot;&quot;]

	nameMake\u7684len:3 nameMake\u7684cap:10

	\u5207\u7247\u7684\u8BBF\u95EE

	names\u7B2C\u4E00\u4E2A\u5143\u7D20\u662F:a

	\u5207\u7247\u7684\u4FEE\u6539

	names:[&quot;0&quot; &quot;b&quot; &quot;c&quot;]

	names\u7684\u957F\u5EA6:3

	nameMake\u7684\u503C\u4E3A:[&quot;&quot; &quot;&quot; &quot;&quot; &quot;aa&quot;]

	name3\u7684\u503C[&quot;&quot; &quot;&quot; &quot;&quot; &quot;aa&quot;]

	[ ]

	--- PASS: TestSliceStatement (0.00s)

	PASS

	ok gonotes/slice 3.044s

	*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div><h2 id="\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386" aria-hidden="true">#</a> \u904D\u5386</h2><p>\u53EF\u901A\u8FC7 for-len \u6216 for-range \u65B9\u5F0F\u5BF9\u5207\u7247\u4E2D\u5143\u7D20\u8FDB\u884C\u904D\u5386</p><h3 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> slice


<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>



<span class="token comment">// \u5B9A\u4E49\u5207\u7247</span>
<span class="token keyword">var</span> names <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestSliceForLen</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;for len\u65B9\u5F0F\u904D\u5386\u5207\u7247&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;names\u7684\u7D22\u5F15:%d\\t\u503C\u4E3A%s\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> names<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/*
		=== RUN TestSliceForLen
		for len\u65B9\u5F0F\u904D\u5386\u5207\u7247
		names\u7684\u7D22\u5F15:0 \u503C\u4E3Aa
		names\u7684\u7D22\u5F15:1 \u503C\u4E3Ab
		names\u7684\u7D22\u5F15:2 \u503C\u4E3Ac
		--- PASS: TestSliceForLen (0.00s)
		PASS
		ok gonotes/slice 0.115s
	*/</span>
<span class="token punctuation">}</span>



<span class="token keyword">func</span> <span class="token function">TestSliceForRange</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;for range\u65B9\u5F0F\u904D\u5386\u5207\u7247&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> names <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;names\u7684\u7D22\u5F15:%d\\t\u503C\u4E3A%s\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> names<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>


	<span class="token comment">/*

	=== RUN TestSliceForRange
	for range\u65B9\u5F0F\u904D\u5386\u5207\u7247
	names\u7684\u7D22\u5F15:0 \u503C\u4E3Aa
	names\u7684\u7D22\u5F15:1 \u503C\u4E3Ab
	names\u7684\u7D22\u5F15:2 \u503C\u4E3Ac
	--- PASS: TestSliceForRange (0.00s)
	PASS
	ok gonotes/slice 0.111s
	*/</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h2 id="\u4F8B\u5B50-1" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50-1" aria-hidden="true">#</a> \u4F8B\u5B50 1</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> slice

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>


<span class="token keyword">func</span> <span class="token function">TestSliceAppend</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// append\u65B0\u589E</span>
	<span class="token comment">// \u5B9A\u4E49\u5207\u7247,\u6CE8\u610F:=\u8FD9\u79CD\u65B9\u5F0F\u4E0D\u80FD\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF</span>
	names <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;names:%q\\n&quot;</span><span class="token punctuation">,</span> names<span class="token punctuation">)</span>
	names <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>names<span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;names:%q\\n&quot;</span><span class="token punctuation">,</span> names<span class="token punctuation">)</span>


	<span class="token comment">/*
	=== RUN TestSliceAppend
	names:[&quot;a&quot; &quot;b&quot; &quot;c&quot;]
	names:[&quot;a&quot; &quot;b&quot; &quot;c&quot; &quot;d&quot;]
	--- PASS: TestSliceAppend (0.00s)
	PASS
	ok gonotes/slice 0.296s
	*/</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="\u4F8B\u5B50-2" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50-2" aria-hidden="true">#</a> \u4F8B\u5B50 2</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> slice


<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>


<span class="token keyword">func</span> <span class="token function">TestSliceCap</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">//cap \u5207\u7247\u7684\u5BB9\u91CF\uFF0C\u8868\u793A\u5185\u5B58\u4E2D\u53EF\u4EE5\u5B58\u653E\u7684\u5927\u5C0F,\u5F53\u6CA1\u6709\u6307\u5B9Acap\u5927\u5C0F\u65F6\uFF0C\u9ED8\u8BA4\u548C\u957F\u5EA6\u76F8\u540C</span>
	nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;nums\u7684len:%d\\tnums\u7684cap:%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span>
	nums <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
	<span class="token comment">// cap\u6EE1\u65F6\uFF0C\u5F53\u589E\u52A0\u7684\u5143\u7D20\u5C0F\u4E8E1024\uFF0C\u5BB9\u91CF\u5C31\u4F1A\u6210\u500D\u589E\u52A0\uFF0C\u82E5\u5927\u4E8E1024\u5219\u589E\u52A00.25\u500D</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;nums\u7684len:%d\\tnums\u7684cap:%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span>
	nums2 <span class="token operator">:=</span> nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;nums2\u7684len:%d\\tnums2\u7684\u503C:%v\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>nums2<span class="token punctuation">)</span><span class="token punctuation">,</span> nums2<span class="token punctuation">)</span>
	<span class="token comment">// \u4FEE\u6539nums2\u7684\u503Cnums\u4E2D\u4E5F\u4F1A\u53D8</span>
	nums2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;nums2\u7684\u503C:%v\\tnums\u7684\u503C:%v\\n&quot;</span><span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> nums<span class="token punctuation">)</span>

	<span class="token comment">/*
	=== RUN TestSliceCap
	nums\u7684len:6 nums\u7684cap:6
	nums\u7684len:7 nums\u7684cap:12
	nums2\u7684len:2 nums2\u7684\u503C:[2 3]
	nums2\u7684\u503C:[100 3] nums\u7684\u503C:[1 100 3 4 5 6 7]
	--- PASS: TestSliceCap (0.00s)
	PASS
	ok gonotes/slice 0.241s
	*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="\u4F8B\u5B50-3" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50-3" aria-hidden="true">#</a> \u4F8B\u5B50 3</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> slice

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>


<span class="token keyword">func</span> <span class="token function">TestSliceCopy</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5207\u7247\u7684copy&quot;</span><span class="token punctuation">)</span>
	n1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
	n2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">}</span>

	<span class="token comment">//copy(dst, src) src =&gt; dst,\u5982\u679C\u6E90\u6BD4\u76EE\u6807\u591A\uFF0C\u90A3\u4E48\u591A\u51FA\u6765\u7684\u503C\u5E76\u4E0D\u4F1Acopy\u5230\u76EE\u6807\u4E2D</span>
	<span class="token function">copy</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;n1 copy n2 \u540E\u7684\u7ED3\u679C%v\\n&quot;</span><span class="token punctuation">,</span> n1<span class="token punctuation">)</span>

	<span class="token comment">/*
	=== RUN TestSliceCopy
	\u5207\u7247\u7684copy
	n1 copy n2 \u540E\u7684\u7ED3\u679C[10 11 12 13 14 15]
	--- PASS: TestSliceCopy (0.00s)
	PASS
	ok gonotes/slice (cached)
	*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,16);function t(e,c){return p}var l=n(a,[["render",t],["__file","slice.html.vue"]]);export{l as default};
