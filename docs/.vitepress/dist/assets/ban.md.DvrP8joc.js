import{_ as e,c as l,o as t,a3 as o}from"./chunks/framework.BYhES31N.js";const u=JSON.parse('{"title":"封禁、解封与举报","description":"","frontmatter":{},"headers":[],"relativePath":"ban.md","filePath":"ban.md","lastUpdated":null}'),i={name:"ban.md"},a=o('<h1 id="封禁、解封与举报" tabindex="-1">封禁、解封与举报 <a class="header-anchor" href="#封禁、解封与举报" aria-label="Permalink to &quot;封禁、解封与举报&quot;">​</a></h1><p><strong>PaperCard使用自己开发的封禁与举报系统。</strong></p><ol><li>在封禁到期之前，可由相关玩家决定封禁与解封，所谓“由相关玩家决定处罚方式（封禁时长）”。</li><li>确认举报后，被举报玩家会被立刻踢出游戏并24小时限制登录，直到管理员处理举报。</li><li>若举报成功，举报者可获得一定奖励，被举报者会被封禁一定时长。</li><li>若举报失败，举报者若被判定为恶意举报，将被封禁一定时长，被举报者会获得一定赔偿。</li><li>在举报之前，请确保有充足的证据（截图，录屏等）。</li><li>如果要举报恶意破坏与盗窃，直接举报即可，随时可查的COI记录就是证据。</li><li>如果你不知道怎么查是谁干的，可以向管理员或其它玩家寻求帮助。</li><li>管理员在封禁矿透和其它作弊行为时，应当将相关玩家设置为自己，即使是其它玩家举报的，举报信息可写在封禁理由中。 指令总览</li></ol><h3 id="封禁相关-玩家" tabindex="-1">封禁相关（玩家） <a class="header-anchor" href="#封禁相关-玩家" aria-label="Permalink to &quot;封禁相关（玩家）&quot;">​</a></h3><ul><li><code>/ban help</code>   查看帮助（本篇文档）</li><li><code>/ban list</code>   查看与自己有关的封禁记录</li><li><code>/ban list-about &lt;玩家名&gt;</code>   查看与指定玩家有关的封禁记录</li><li><code>/ban list-all</code>   查看所有封禁记录</li><li><code>/ban view &lt;封禁ID&gt;</code>   查看指定封禁ID的封禁记录</li><li><code>/ban ban &lt;封禁ID&gt;</code>   执行封禁（不推荐使用，因为可以实现点击封禁了）</li><li><code>/ban unban &lt;封禁ID&gt;</code>   执行解封（不推荐使用，因为可以实现点击封禁了）</li></ul><h3 id="封禁相关-管理员" tabindex="-1">封禁相关（管理员） <a class="header-anchor" href="#封禁相关-管理员" aria-label="Permalink to &quot;封禁相关（管理员）&quot;">​</a></h3><ul><li><code>/ban soft-ban &lt;被封禁玩家&gt; &lt;相关玩家&gt; &lt;封禁理由&gt; &lt;封禁时长&gt;</code>   执行软封禁，添加一条封禁记录</li><li><code>/ban delete &lt;封禁ID&gt;</code>   删除指定ID的封禁记录</li></ul><h3 id="举报相关-玩家" tabindex="-1">举报相关（玩家） <a class="header-anchor" href="#举报相关-玩家" aria-label="Permalink to &quot;举报相关（玩家）&quot;">​</a></h3><ul><li><code>/report help</code>   查看帮助（本篇文档）</li><li><code>/report player</code>   &lt;玩家名&gt; &lt;举报理由&gt; 举报玩家</li><li><code>/report confirm</code>   确认举报（不推荐使用，因为可以一键确认）</li><li><code>/report cancel</code>   取消举报（不推荐使用，因为可以一键确认）</li><li><code>/report list</code>   查看未处理的举报记录，可点击翻页，点击处理举报（管理员）</li><li><code>/report list-accepted</code>   查看成功的举报，可点击翻页</li><li><code>/report list-rejected</code>   查看失败的举报，可点击翻页 举报相关（管理员）</li><li><code>/report accept &lt;举报ID&gt; &lt;备注&gt;</code>   标记为举报成功，不推荐使用，因为report list中可以一键处理</li><li><code>/report reject &lt;举报ID&gt; &lt;备注&gt;</code>   标记为举报失败，不推荐使用，因为report list中可以一键处理</li><li><code>/report delete &lt;举报ID&gt;</code>   删除指定ID的举报记录</li></ul>',9),c=[a];function r(d,n,s,p,h,_){return t(),l("div",null,c)}const g=e(i,[["render",r]]);export{u as __pageData,g as default};