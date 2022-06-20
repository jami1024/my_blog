import{_ as n,d as s}from"./app.db239aa3.js";const a={},p=s(`<h1 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h1><p>\u6570\u7EC4\u662F\u5177\u6709\u76F8\u540C\u6570\u636E\u7C7B\u578B\u7684\u6570\u636E\u9879\u7EC4\u6210\u7684\u4E00\u7EC4\u957F\u5EA6\u56FA\u5B9A\u7684\u5E8F\u5217, \u6570\u7EC4\u7684\u957F\u5EA6\u5FC5\u987B\u662F\u975E\u8D1F\u6574\u6570\u7684\u5E38\u91CF,\u957F\u5EA6\u4E5F\u662F\u7C7B\u578B\u7684\u4E00\u90E8\u5206.</p><h2 id="\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E" aria-hidden="true">#</a> \u58F0\u660E</h2><p>\u6570\u7EC4\u58F0\u660E\u9700\u8981\u6307\u5B9A\u7EC4\u6210\u5143\u7D20\u7684\u7C7B\u578B\u4EE5\u53CA\u5B58\u50A8\u5143\u7D20\u7684\u6570\u91CF(\u957F\u5EA6) \u3002\u5728\u6570\u7EC4\u58F0\u660E\u540E,\u5176\u957F\u5EA6\u4E0D\u53EF\u4FEE\u6539,\u6570\u7EC4\u7684\u6BCF\u4E2A\u5143\u7D20\u4F1A\u6839\u636E\u5BF9\u5E94\u7C7B\u578B\u7684\u96F6\u503C\u5BF9\u8FDB\u884C\u521D\u59CB\u5316</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> array

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestArrayStatement</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u7EC4\u7684\u58F0\u660E&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> names <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;zhangsan1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;zhangsan2&quot;</span><span class="token punctuation">}</span>
	<span class="token keyword">var</span> nums <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;names\u7C7B\u578B%T,\\tnums\u7C7B\u578B%T\\n&quot;</span><span class="token punctuation">,</span> names<span class="token punctuation">,</span> nums<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>names<span class="token punctuation">,</span> nums<span class="token punctuation">)</span>

	<span class="token comment">/*
		=== RUN TestArrayStatement

		\u6570\u7EC4\u7684\u58F0\u660E

		names\u7C7B\u578B[3]string, nums\u7C7B\u578B[5]int

		[zhangsan1 zhangsan2 ] [0 0 0 0 0]

		--- PASS: TestArrayStatement (0.00s)

		PASS ok gonotes/array 0.485s
	*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386" aria-hidden="true">#</a> \u904D\u5386</h2><p>\u53EF\u901A\u8FC7 for-len \u6216 for-range \u65B9\u5F0F\u5BF9\u6570\u7EC4\u4E2D\u5143\u7D20\u8FDB\u884C\u904D\u5386</p><h3 id="for-len-\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#for-len-\u4F8B\u5B50" aria-hidden="true">#</a> for+len \u4F8B\u5B50</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> array


<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>


<span class="token keyword">func</span> <span class="token function">TestArrayForLen</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5229\u7528for len\u65B9\u5F0F\u8FDB\u884C\u5BF9\u6570\u7EC4\u7684\u904D\u5386&quot;</span><span class="token punctuation">)</span>

	<span class="token keyword">var</span> names <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;zhangsan1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;zhangsan2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;zhangsan3&quot;</span><span class="token punctuation">}</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u7D22\u5F15\uFF1A%d, \u5185\u5BB9\uFF1A%s\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> names<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u7D22\u5F15\uFF1A%d, \u5185\u5BB9\uFF1A%q\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> names<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token comment">// %s \u548C %q\u7684\u533A\u522B\uFF1A\u5982\u679C\u662F\u5B57\u7B26\u4E32\uFF0C%q\u4F1A\u628A\u503C\u7528\u53CC\u5F15\u53F7\u6269\u8D77\u6765</span>
	<span class="token punctuation">}</span>

	<span class="token comment">/*

	=== RUN TestArrayForLen

	\u5229\u7528for len\u65B9\u5F0F\u8FDB\u884C\u5BF9\u6570\u7EC4\u7684\u904D\u5386
	\u7D22\u5F15\uFF1A0, \u5185\u5BB9\uFF1Azhangsan1
	\u7D22\u5F15\uFF1A0, \u5185\u5BB9\uFF1A&quot;zhangsan1&quot;
	\u7D22\u5F15\uFF1A1, \u5185\u5BB9\uFF1Azhangsan2
	\u7D22\u5F15\uFF1A1, \u5185\u5BB9\uFF1A&quot;zhangsan2&quot;
	\u7D22\u5F15\uFF1A2, \u5185\u5BB9\uFF1Azhangsan3
	\u7D22\u5F15\uFF1A2, \u5185\u5BB9\uFF1A&quot;zhangsan3&quot;

	--- PASS: TestArrayForLen (0.00s)
	PASS
	ok gonotes/array 0.475s
	*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>`,9);function t(e,o){return p}var l=n(a,[["render",t],["__file","array.html.vue"]]);export{l as default};
