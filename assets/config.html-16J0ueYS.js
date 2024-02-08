import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as a,e as n}from"./app-GxGLPUih.js";const o={},s=n(`<p>The library can work out of the box without much configuration, the only required parameter is the Telegram API token</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">TgWebValid<span class="token punctuation">\\</span>TgWebValid</span><span class="token punctuation">;</span>

<span class="token keyword">include</span> <span class="token string single-quoted-string">&#39;./vendor/autoload.php&#39;</span><span class="token punctuation">;</span>

<span class="token variable">$tgWebValid</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TgWebValid</span><span class="token punctuation">(</span>
  <span class="token argument-name">token</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;TELEGRAM_BOT_TOKEN&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">throw</span><span class="token punctuation">:</span> <span class="token constant boolean">false</span> 
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>💡 This will set up the bot and the <strong>default</strong> configuration</p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2><h3 id="token" tabindex="-1"><a class="header-anchor" href="#token"><span><code>token</code></span></a></h3><ul><li>Type: <code>string</code></li><li>Required: Yes</li></ul><p>The Telegram token of the bot on whose behalf the verification should be carried out.</p><h3 id="throw" tabindex="-1"><a class="header-anchor" href="#throw"><span><code>throw</code></span></a></h3><ul><li>Type: <code>bool</code></li><li>Required: No</li><li>Default: <code>false</code></li></ul><p>If set to <code>true</code>, the library will throw an exception if validation fails.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Be sure to use \`try/catch&#39; if you plan to work with exceptions or in multibot mode 😉</p></div>`,12),i=[s];function r(l,p){return t(),a("div",null,i)}const u=e(o,[["render",r],["__file","config.html.vue"]]),h=JSON.parse('{"path":"/en/docs/get-started/config.html","title":"Config","lang":"en-US","frontmatter":{"title":"Config","icon":"gears","order":2,"description":"The library can work out of the box without much configuration, the only required parameter is the Telegram API token Example 💡 This will set up the bot and the default configu...","head":[["link",{"rel":"alternate","hreflang":"uk-ua","href":"https://tgwebvalid.com/docs/get-started/config.html"}],["meta",{"property":"og:url","content":"https://tgwebvalid.com/en/docs/get-started/config.html"}],["meta",{"property":"og:site_name","content":"The PHP library for validate Telegram users"}],["meta",{"property":"og:title","content":"Config"}],["meta",{"property":"og:description","content":"The library can work out of the box without much configuration, the only required parameter is the Telegram API token Example 💡 This will set up the bot and the default configu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"uk-UA"}],["meta",{"property":"og:updated_time","content":"2024-01-05T07:23:15.000Z"}],["meta",{"property":"article:author","content":"Mr. Anonymous"}],["meta",{"property":"article:modified_time","content":"2024-01-05T07:23:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Config\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-05T07:23:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr. Anonymous\\",\\"url\\":\\"https://github.com/CrazyTapok-bit\\"}]}"]]},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[{"level":3,"title":"token","slug":"token","link":"#token","children":[]},{"level":3,"title":"throw","slug":"throw","link":"#throw","children":[]}]}],"git":{"createdTime":1704439395000,"updatedTime":1704439395000,"contributors":[{"name":"Сергій","email":"61122611+CrazyTapok-bit@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.38,"words":113},"filePathRelative":"en/docs/get-started/config.md","localizedDate":"January 5, 2024","autoDesc":true}');export{u as comp,h as data};
