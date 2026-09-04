/* BIO 262 · Boss portrait renderer + villain reveal card.
   Self-contained: inject with <script src="data/bosses.js"></script><script src="data/bossfx.js"></script>
   Exposes  BIO262FX.portrait(boss, px)  ->  SVG string
            BIO262FX.reveal(boss, onDone) ->  full-screen reveal card
            BIO262FX.forModule(n)         ->  boss object            */
(function(){
  "use strict";
  var B = (window.BIO262_BOSSES||[]).concat(window.BIO262_EXAM_BOSSES||[]);
  function esc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}

  function forModule(n){ for(var i=0;i<B.length;i++){ if(B[i].m===n && !B[i].alt) return B[i]; } return null; }
  function byId(id){ for(var i=0;i<B.length;i++){ if(B[i].id===id) return B[i]; } return null; }

  /* 16x16 grid -> SVG with hard bottom-right pixel shadows, per the house style */
  function portrait(b, px){
    px = px || 9;
    var g = b.grid, p = b.pal, n = g.length, s = "";
    for(var y=0; y<n; y++){
      var row = g[y];
      for(var x=0; x<row.length; x++){
        var c = row[x];
        if(c===" " || c==="." ) continue;
        var k = parseInt(c,10);
        if(isNaN(k) || !p[k]) continue;
        // shadow first
        s += '<rect x="'+((x*px)+1)+'" y="'+((y*px)+1)+'" width="'+px+'" height="'+px+'" fill="'+p[0]+'" opacity=".55"/>';
        s += '<rect x="'+(x*px)+'" y="'+(y*px)+'" width="'+px+'" height="'+px+'" fill="'+p[k]+'"/>';
      }
    }
    var w = (g[0]?g[0].length:16)*px+2;
    return '<svg viewBox="0 0 '+w+' '+w+'" width="'+w+'" height="'+w+'" shape-rendering="crispEdges" '+
           'xmlns="http://www.w3.org/2000/svg" style="image-rendering:pixelated">'+
           '<defs><radialGradient id="bg_'+b.id+'"><stop offset="0%" stop-color="'+p[2]+'" stop-opacity=".38"/>'+
           '<stop offset="100%" stop-color="'+p[0]+'" stop-opacity="0"/></radialGradient></defs>'+
           '<rect width="'+w+'" height="'+w+'" fill="url(#bg_'+b.id+')"/>'+ s +'</svg>';
  }

  /* one-time stylesheet */
  function css(){
    if(document.getElementById("bio262fx-css")) return;
    var st = document.createElement("style");
    st.id = "bio262fx-css";
    st.textContent = [
      '.bfx-wrap{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;',
      'background:rgba(4,6,9,.93);padding:18px;animation:bfxIn .35s ease both;font-family:VT323,monospace;}',
      '@keyframes bfxIn{from{opacity:0}to{opacity:1}}',
      '@keyframes bfxOut{to{opacity:0}}',
      '.bfx-card{max-width:560px;width:100%;max-height:94vh;overflow-y:auto;border-radius:14px;padding:22px 20px;',
      'border:3px solid var(--bfxA);background:linear-gradient(180deg,#0d1218,#131b23);',
      'box-shadow:0 0 60px var(--bfxGlow),0 0 0 1px rgba(255,255,255,.05) inset;text-align:center;',
      'animation:bfxPop .45s cubic-bezier(.2,.9,.3,1.2) both;}',
      '@keyframes bfxPop{from{transform:scale(.8) translateY(20px);opacity:0}to{transform:none;opacity:1}}',
      '.bfx-warn{font-family:"Press Start 2P",monospace;font-size:9px;letter-spacing:.35em;color:var(--bfxA);opacity:.9;}',
      '.bfx-art{margin:12px auto 6px;filter:drop-shadow(0 0 22px var(--bfxGlow));animation:bfxFloat 2.6s ease-in-out infinite;}',
      '@keyframes bfxFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}',
      '.bfx-name{font-family:"Cinzel Decorative",serif;font-weight:900;font-size:clamp(24px,6vw,38px);',
      'color:var(--bfxA);text-shadow:0 0 24px var(--bfxGlow);line-height:1.1;margin:6px 0 2px;}',
      '.bfx-epi{font-family:"Press Start 2P",monospace;font-size:8px;letter-spacing:.25em;color:#9a9384;margin-bottom:12px;}',
      '.bfx-mod{display:inline-block;font-family:"Press Start 2P",monospace;font-size:7px;letter-spacing:.15em;',
      'background:var(--bfxA);color:#080c10;border-radius:20px;padding:5px 10px;margin-bottom:10px;}',
      '.bfx-lore{font-size:20px;line-height:1.45;color:#d8d2c4;font-style:italic;margin:0 0 14px;}',
      '.bfx-taunt{font-size:21px;color:var(--bfxA);margin:0 0 16px;}',
      '.bfx-moves{text-align:left;background:rgba(255,255,255,.04);border-radius:10px;padding:12px 14px;margin-bottom:12px;}',
      '.bfx-moves h4{font-family:"Press Start 2P",monospace;font-size:8px;letter-spacing:.2em;color:#9a9384;margin:0 0 9px;}',
      '.bfx-mv{margin-bottom:8px;font-size:19px;color:#c9c3b5;}',
      '.bfx-mv b{color:var(--bfxA);display:block;font-size:19px;}',
      '.bfx-weak{background:rgba(126,216,90,.1);border:1px solid rgba(126,216,90,.4);border-radius:10px;',
      'padding:10px 12px;font-size:19px;color:#bdf0a5;text-align:left;margin-bottom:16px;}',
      '.bfx-weak b{color:#7ed85a;}',
      '.bfx-go{width:100%;font-family:"Press Start 2P",monospace;font-size:11px;padding:15px;border:none;',
      'border-radius:10px;background:var(--bfxA);color:#080c10;cursor:pointer;}',
      '.bfx-go:hover{filter:brightness(1.15);}',
      '.bfx-skip{display:block;margin:10px auto 0;background:none;border:none;color:#6f6a5e;font-size:17px;cursor:pointer;font-family:VT323,monospace;}'
    ].join("");
    document.head.appendChild(st);
  }

  function reveal(b, onDone){
    if(!b){ if(onDone) onDone(); return; }
    css();
    var wrap = document.createElement("div");
    wrap.className = "bfx-wrap";
    wrap.style.setProperty("--bfxA", b.pal[3]);
    wrap.style.setProperty("--bfxGlow", b.pal[2]);
    var mv = b.moves.map(function(m){
      return '<div class="bfx-mv"><b>'+esc(m[0])+'</b>'+esc(m[1])+'</div>';
    }).join("");
    wrap.innerHTML =
      '<div class="bfx-card">'
      + '<div class="bfx-warn">⚠ HOSTILE PHYSIOLOGY DETECTED ⚠</div>'
      + '<div class="bfx-art">'+portrait(b, 10)+'</div>'
      + '<div class="bfx-mod">'+(b.m? 'MODULE '+b.m : (b.x===6?'FINAL EXAM':'EXAM '+b.x))+'</div>'
      + '<div class="bfx-name">'+esc(b.name)+'</div>'
      + '<div class="bfx-epi">'+esc(b.epithet).toUpperCase()+'</div>'
      + '<p class="bfx-lore">"'+esc(b.lore)+'"</p>'
      + '<p class="bfx-taunt">'+esc(b.taunt)+'</p>'
      + '<div class="bfx-moves"><h4>MOVESET</h4>'+mv+'</div>'
      + '<div class="bfx-weak"><b>WEAKNESS:</b> '+esc(b.weak)+'</div>'
      + '<button class="bfx-go">▶ FACE IT</button>'
      + '<button class="bfx-skip">skip introductions</button>'
      + '</div>';
    document.body.appendChild(wrap);

    function close(){
      wrap.style.animation = "bfxOut .28s ease forwards";
      setTimeout(function(){ wrap.remove(); if(onDone) onDone(); }, 290);
    }
    wrap.querySelector(".bfx-go").addEventListener("click", close);
    wrap.querySelector(".bfx-skip").addEventListener("click", function(){
      try{ localStorage.setItem("bio262_skip_reveal","1"); }catch(e){}
      close();
    });
    wrap.addEventListener("click", function(e){ if(e.target===wrap) close(); });
  }

  function shouldReveal(){
    try{ return localStorage.getItem("bio262_skip_reveal") !== "1"; }catch(e){ return true; }
  }

  window.BIO262FX = {
    portrait: portrait, reveal: reveal, forModule: forModule, byId: byId,
    shouldReveal: shouldReveal, all: B
  };
})();
