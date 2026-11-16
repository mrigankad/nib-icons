import urllib.request, json, re, os, sys
URL="http://127.0.0.1:29979/mcp"; FID="01M7H7EYRA57PE886JZT52RP5Y"
H={"Content-Type":"application/json","Accept":"application/json, text/event-stream"}
def post(body,sid=None):
    h=dict(H)
    if sid: h["Mcp-Session-Id"]=sid
    r=urllib.request.urlopen(urllib.request.Request(URL,json.dumps(body).encode(),h),timeout=120)
    t=r.read().decode(); s=r.headers.get("Mcp-Session-Id")
    m=re.search(r"data: (.*)",t); return (json.loads(m.group(1)) if m else None), s
_,sid=post({"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-03-26","capabilities":{},"clientInfo":{"name":"x","version":"1"}}})
post({"jsonrpc":"2.0","method":"notifications/initialized"},sid)
boards="8H-0 Arrows|FV-0 Chevrons & Carets|JL-0 Interface Basics|QW-0 Navigation & Layout|YU-0 Actions & Editing|16D-0 Text & Typography|1CM-0 Files & Folders|1K5-0 Communication|1RR-0 People & Users|20I-0 Emotion & Faces|26P-0 Media & Playback|2F0-0 Camera & Images|2KT-0 Design & Creative|2TP-0 Development & Code|32G-0 Devices & Hardware|3BG-0 Connectivity & Network|3IL-0 Security & Privacy|3PX-0 Alerts & Status|3V7-0 Time & Calendar|40V-0 Commerce & Shopping|480-0 Finance & Money|4FT-0 Business & Office|4OT-0 Charts & Data|4UY-0 Weather|50L-0 Nature & Environment|57T-0 Animals|5G5-0 Food & Drink|5QH-0 Travel & Places|5YS-0 Transport & Vehicles|66B-0 Health & Medical|6ED-0 Sports & Fitness|6LN-0 Education & Learning|6SO-0 Home & Living|6ZA-0 Tools & Construction|75V-0 Industry & Energy|7DE-0 AI & Technology|7LH-0 Social|7SZ-0 Gaming & Fun|7YJ-0 Culture & Festivals|85O-0 Fashion & Beauty|8C9-0 Shapes & Symbols|8IK-0 Accessibility & Settings".split("|")
ATTR={"strokeWidth":"stroke-width","strokeLinecap":"stroke-linecap","strokeLinejoin":"stroke-linejoin","fillRule":"fill-rule","clipRule":"clip-rule","strokeMiterlimit":"stroke-miterlimit","strokeDasharray":"stroke-dasharray","strokeOpacity":"stroke-opacity","fillOpacity":"fill-opacity","strokeDashoffset":"stroke-dashoffset","clipPath":"clip-path"}
out="C:/Users/mriga_ijtdono/Documents/Nib Icons/"
icons=[];cats=[];seen={};dups=[];fails=[]
for i,b in enumerate(boards,1):
    nid,cat=b.split(" ",1)
    try:
        res,_=post({"jsonrpc":"2.0","id":i+10,"method":"tools/call","params":{"name":"get_jsx","arguments":{"fileId":FID,"nodeId":nid,"includeNodeIds":False}}},sid)
        txt="".join(c.get("text","") for c in res["result"]["content"])
        # cells: svg followed by label
        cells=re.findall(r"<svg[^>]*>(.*?)</svg>\s*<div[^>]*>\s*([^<]+?)\s*</div>",txt,re.S)
        n=0
        for inner,label in cells:
            slug=label.strip().replace("\u2011","-").replace("\u2010","-")
            inner=re.sub(r"\s*\n\s*","",inner.strip())
            inner=re.sub(r"\s*/>"," />",inner) if False else inner
            for k,v in ATTR.items(): inner=inner.replace(k+"=",v+"=")
            inner=inner.replace("#0F1A3D","currentColor").replace("#0f1a3d","currentColor")
            if slug in seen:
                seen[slug]+=1; dups.append(slug); slug=f"{slug}-{seen[slug]}"; seen[slug]=1
            else: seen[slug]=1
            svg=f'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">{inner}</svg>'
            open(out+"icons/"+slug+".svg","w",encoding="utf-8").write(svg)
            icons.append({"name":slug,"category":cat,"svg":inner}); n+=1
        m=re.search(r"(\d+) icons",txt)
        cats.append({"name":cat,"count":n}); 
        if m and int(m.group(1))!=n: fails.append(f"{cat}: header {m.group(1)} parsed {n}")
        print(cat,n,flush=True)
    except Exception as e:
        fails.append(f"{cat}: {e}"); print("FAIL",cat,e,flush=True)
json.dump(icons,open(out+"icons.json","w",encoding="utf-8"),ensure_ascii=False)
json.dump(cats,open(out+"categories.json","w",encoding="utf-8"),ensure_ascii=False,indent=1)
print(len(icons),"dups",dups,"fails",fails)
