(() => {
  const $ = (s) => document.querySelector(s);
  const PAGE = 240;
  let all = [], cats = [], cat = "All icons", query = "", limit = PAGE, sel = null;
  const sw = () => $("#sw").value;

  const svg = (ic, attrs = "") =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw()}" stroke-linecap="round" stroke-linejoin="round" ${attrs}>${ic.s}</svg>`;
  const fileSvg = (ic) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw()}" stroke-linecap="round" stroke-linejoin="round">${ic.s}</svg>`;
  const pascal = (n) => n.replace(/(^|-)(\w)/g, (_, __, c) => c.toUpperCase()).replace(/^(\d)/, "Icon$1");
  const jsx = (ic) => {
    const body = ic.s.replace(/([a-z])-([a-z])(?=[a-z-]*=)/g, (m, a, b) => a + b.toUpperCase());
    return `export function ${pascal(ic.n)}Icon(props) {\n  return (\n    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={${sw()}} strokeLinecap="round" strokeLinejoin="round" {...props}>\n      ${body}\n    </svg>\n  );\n}\n`;
  };

  const toast = (t) => { const el = $("#toast"); el.textContent = t; el.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove("show"), 1600); };
  const copy = async (text, label) => { try { await navigator.clipboard.writeText(text); toast(label + " copied"); } catch { toast("Copy blocked by the browser"); } };
  const download = (ic) => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([fileSvg(ic)], { type: "image/svg+xml" }));
    a.download = ic.n + ".svg"; a.click(); URL.revokeObjectURL(a.href);
  };

  const filtered = () => {
    const q = query.trim().toLowerCase().replace(/\s+/g, "-");
    return all.filter((ic) => (cat === "All icons" || ic.c === cat) && (!q || ic.n.includes(q) || ic.c.toLowerCase().includes(query.trim().toLowerCase())));
  };

  function renderCats() {
    const total = { name: "All icons", count: all.length };
    $("#cats").innerHTML = `<span class="h">Categories</span>` + [total, ...cats].map((c) =>
      `<button class="cat${c.name === cat ? " on" : ""}" data-cat="${c.name}"><span>${c.name}</span><span>${c.count}</span></button>`).join("");
  }

  function renderGrid() {
    const list = filtered();
    $("#shown").textContent = `${list.length.toLocaleString()} icon${list.length === 1 ? "" : "s"}${cat !== "All icons" ? " in " + cat : ""}`;
    const grid = $("#grid");
    grid.style.setProperty("--sz", $("#sz").value + "px");
    grid.style.setProperty("--sw", sw());
    grid.innerHTML = list.length
      ? list.slice(0, limit).map((ic) => `<button class="tile${sel && sel.n === ic.n ? " on" : ""}" data-n="${ic.n}" title="${ic.n}">${svg(ic)}<small>${ic.n}</small></button>`).join("")
      : `<div class="empty">No icons match “${query}”. Try a shorter word.</div>`;
    $("#more").hidden = list.length <= limit;
  }

  function detailHtml(ic) {
    return `<div class="preview">${svg(ic)}</div>
      <div><h2>${ic.n}</h2><div class="sub">${ic.c}</div></div>
      <div class="row"><button class="act primary" data-do="svg">Copy SVG</button><button class="act" data-do="dl">Download</button></div>
      <div class="row"><button class="act" data-do="jsx">Copy React</button><button class="act" data-do="name">Copy name</button></div>`;
  }
  function renderDetail() {
    if (!sel) return;
    $("#detail").innerHTML = detailHtml(sel);
    $("#sheet").innerHTML = `<div class="detail" style="position:static;box-shadow:0 -8px 40px rgba(15,26,61,.18)">${detailHtml(sel)}<button class="act" data-do="close">Close</button></div>`;
  }

  function onAction(e) {
    const b = e.target.closest("[data-do]"); if (!b || !sel) return;
    ({ svg: () => copy(fileSvg(sel), "SVG"), dl: () => download(sel), jsx: () => copy(jsx(sel), "React component"),
       name: () => copy(sel.n, "Name"), close: () => $("#sheet").classList.remove("open") })[b.dataset.do]();
  }

  $("#cats").addEventListener("click", (e) => { const b = e.target.closest(".cat"); if (!b) return; cat = b.dataset.cat; limit = PAGE; renderCats(); renderGrid(); });
  $("#grid").addEventListener("click", (e) => {
    const b = e.target.closest(".tile"); if (!b) return;
    sel = all.find((i) => i.n === b.dataset.n);
    document.querySelectorAll(".tile.on").forEach((t) => t.classList.remove("on")); b.classList.add("on");
    renderDetail(); if (innerWidth <= 1100) $("#sheet").classList.add("open");
    history.replaceState(null, "", "#" + sel.n);
  });
  $("#detail").addEventListener("click", onAction);
  $("#sheet").addEventListener("click", onAction);
  $("#more").addEventListener("click", () => { limit += PAGE * 2; renderGrid(); });
  let t; $("#q").addEventListener("input", (e) => { clearTimeout(t); t = setTimeout(() => { query = e.target.value; limit = PAGE; renderGrid(); }, 80); });
  $("#sz").addEventListener("input", renderGrid);
  $("#sw").addEventListener("input", () => { $("#swv").textContent = sw(); renderGrid(); renderDetail(); });
  addEventListener("keydown", (e) => { if (e.key === "/" && document.activeElement !== $("#q")) { e.preventDefault(); $("#q").focus(); } if (e.key === "Escape") $("#sheet").classList.remove("open"); });

  fetch("data/icons.json").then((r) => r.json()).then((data) => {
    all = data;
    const m = new Map(); data.forEach((i) => m.set(i.c, (m.get(i.c) || 0) + 1));
    cats = [...m].map(([name, count]) => ({ name, count }));
    $("#count").textContent = data.length.toLocaleString();
    const hash = decodeURIComponent(location.hash.slice(1));
    sel = data.find((i) => i.n === hash) || data.find((i) => i.n === "hydro") || data[0];
    renderCats(); renderGrid(); renderDetail();
    showcase(data);
  });

  // ----- showcase sections -----
  function showcase(data) {
    const by = new Map(data.map((i) => [i.n, i]));
    const raw = (ic, w = 24) => `<svg viewBox="0 0 24 24" width="${w}" height="${w}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${ic.s}</svg>`;
    const pick = (n, pool = data) => { const a = pool.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a.slice(0, n); };

    document.querySelectorAll("[data-i]").forEach((el) => { const ic = by.get(el.dataset.i); if (ic) el.innerHTML = raw(ic); });

    // drifting icon wall (each row duplicated for a seamless loop)
    const wall = $("#wall");
    if (wall) wall.innerHTML = Array.from({ length: 9 }, () => { const row = pick(26).map((ic) => raw(ic, 28)).join(""); return `<div class="r">${row}${row}</div>`; }).join("");

    // playground
    const colours = ["#0F1A3D", "#1F3FD1", "#E2513B", "#1F8A4C", "#D97706", "#9333EA"];
    let pc = getComputedStyle(document.documentElement).getPropertyValue("--ink").trim();
    $("#swatches").innerHTML = colours.map((c, i) => `<button style="background:${c}" data-c="${c}" class="${i === 0 ? "on" : ""}" aria-label="Colour ${c}"></button>`).join("");
    const nice = ["globe", "compass", "cloud", "droplet", "calendar", "layers", "lifebuoy", "settings-sliders", "analytics", "heart", "bell", "mail", "folder", "lock", "camera", "music", "map-pin", "cyclone", "sun", "home", "search"];
    let set = nice.map((n) => by.get(n)).filter(Boolean);
    const paintPlay = () => {
      const w = $("#psz").value, s = $("#pst").value;
      $("#pstv").textContent = s; $("#pszv").textContent = w + "px";
      $("#pgrid").innerHTML = set.map((ic) => `<div title="${ic.n}" style="color:${pc}"><svg viewBox="0 0 24 24" width="${w}" height="${w}" fill="none" stroke="currentColor" stroke-width="${s}" stroke-linecap="round" stroke-linejoin="round">${ic.s}</svg></div>`).join("");
    };
    $("#swatches").addEventListener("click", (e) => { const b = e.target.closest("button"); if (!b) return; pc = b.dataset.c; document.querySelectorAll("#swatches .on").forEach((x) => x.classList.remove("on")); b.classList.add("on"); paintPlay(); });
    $("#pst").addEventListener("input", paintPlay); $("#psz").addEventListener("input", paintPlay);
    $("#shuffle").addEventListener("click", () => { set = pick(21); paintPlay(); });
    paintPlay();

    // category families
    $("#fams").innerHTML = cats.map((c) => {
      const icons = data.filter((i) => i.c === c.name).slice(0, 6).map((ic) => raw(ic, 22)).join("");
      return `<button class="fam" data-cat="${c.name}"><div class="ic">${icons}</div><b>${c.name}</b><span>${c.count} icons</span></button>`;
    }).join("");
    $("#fams").addEventListener("click", (e) => {
      const b = e.target.closest(".fam"); if (!b) return;
      cat = b.dataset.cat; limit = PAGE; renderCats(); renderGrid();
      $("#icons").scrollIntoView({ behavior: "smooth" });
    });
  }
})();
