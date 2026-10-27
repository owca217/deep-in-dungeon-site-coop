(function () {
  'use strict';
  const data = globalThis.DUNGEON_DATA;
  const formatDate=value=>new Intl.DateTimeFormat('pl-PL',{day:'numeric',month:'long',year:'numeric'}).format(new Date(`${value}T12:00:00`));
  document.querySelectorAll('[data-current-version]').forEach(node=>{node.textContent=data.meta.version;});
  document.querySelectorAll('[data-release-count]').forEach(node=>{node.textContent=data.releases.length;});
  document.querySelectorAll('[data-current-date]').forEach(node=>{node.textContent=formatDate(data.meta.updated);});
  const {filterEntries} = globalThis.DungeonCatalogue;
  const $ = id => document.getElementById(id);
  if(data.download){
    const download=data.download;
    const button=$('apk-download');
    button.href=download.url;
    button.textContent=`Pobierz APK ${download.version} na Androida`;
    document.querySelectorAll('[data-download-version]').forEach(node=>{node.textContent=download.version;});
    $('apk-size').textContent=`${new Intl.NumberFormat('pl-PL',{maximumFractionDigits:1}).format(download.sizeBytes/1000000)} MB`;
    $('apk-requirements').textContent=`Android ${download.androidMinimum}+ · ${download.architecture==='arm64-v8a'?'ARM64':download.architecture}`;
    $('apk-file-name').textContent=download.fileName;
  }
  const labels = {weapon:'Broń',armor:'Ochrona',artifact:'Artefakt',consumable:'Przedmiot użytkowy',enemy:'Przeciwnik',boss:'Boss piętra'};
  const symbols = {weapon:'⚔',armor:'⛨',artifact:'✦',consumable:'♧',enemy:'♙',boss:'♛'};
  const slots = {weapon:'Broń',head:'Głowa',torso:'Tułów',gloves:'Dłonie',legs:'Nogi',boots:'Stopy',offhand:'Druga ręka',artifact:'Artefakt'};
  const dialog = $('entry-dialog');
  let opener = null;
  function element(tag, className, text) {
    const node=document.createElement(tag);
    if(className) node.className=className;
    if(text!==undefined) node.textContent=text;
    return node;
  }
  function art(entry, index) {
    const box=element('div','entry-art');
    const fallback=element('span','art-fallback',symbols[entry.category]||'◇');
    fallback.setAttribute('aria-hidden','true');
    box.append(fallback);
    if(entry.image) {
      const img=element('img',entry.image.includes('/pixel/')?'pixel-art':'');
      img.alt=''; img.loading='lazy'; img.decoding='async';
      fallback.hidden=true;
      img.addEventListener('error',()=>{img.hidden=true;fallback.hidden=false;},{once:true});
      img.src=entry.image; box.append(img);
    }
    if(index!==undefined) {
      box.append(element('span','card-index',String(index+1).padStart(2,'0')),
        element('span','card-kind',entry.status==='concept'?'Propozycja':'W grze'));
    }
    return box;
  }
  function cardStat(entry) {
    if(entry.status==='concept') return 'Jeszcze poza grą';
    if(entry.cards?.length) return `${entry.cards.reduce((sum,c)=>sum+c.copies,0)} kart w talii`;
    if(entry.category==='armor') return `+${entry.armorClass} KP`;
    if(entry.category==='consumable') return 'Przedmiot zużywalny';
    return entry.category==='boss'?'Otwiera zejście':'Rośnie siła spotkań';
  }
  function card(entry,index,isEnemy) {
    const node=element('article',`catalogue-card${entry.status==='concept'?' concept-card':''}`);
    node.append(art(entry,index));
    const body=element('div','card-body');
    body.append(element('p',`card-overline${entry.status==='concept'?' concept-label':''}`,labels[entry.category]),
      element('h3','',entry.name),element('p','card-description',entry.description));
    const bottom=element('div','card-bottom');
    const button=element('button','detail-button','Szczegóły');
    button.type='button'; button.setAttribute('aria-label',`Szczegóły: ${entry.name}`);
    button.append(element('span','','↗'));
    button.addEventListener('click',()=>showDetails(entry,isEnemy,button));
    bottom.append(element('span','card-stat',cardStat(entry)),button);
    body.append(bottom); node.append(body); return node;
  }
  function statistic(label,value,context) {
    const pair=element('div','stat-block');
    pair.append(element('dt','',label),element('dd','',String(value)));
    if(context)pair.append(element('small','',context));
    return pair;
  }
  function sectionTitle(parent,text) { parent.append(element('h3','dialog-section-title',text)); }
  function showDetails(entry,isEnemy,trigger) {
    opener=trigger;
    const host=$('dialog-content'); host.replaceChildren();
    const heading=element('div','dialog-heading');
    heading.append(art(entry));
    const intro=element('div','dialog-intro');
    const title=element('h2','',entry.name); title.id='dialog-title';
    intro.append(element('span',`dialog-status${entry.status==='concept'?' concept-label':''}`,entry.status==='concept'?'Propozycja — jeszcze poza grą':`W grze · ${labels[entry.category]}`),title,element('p','',entry.description));
    heading.append(intro); host.append(heading);
    const main=element('div','dialog-main');
    const stats=element('dl','stats-grid');
    if(isEnemy) for(const stat of entry.stats) stats.append(statistic(stat.label,stat.value,stat.context));
    else {
      if(entry.price!==null)stats.append(statistic('Cena bazowa',`${entry.price} złota`));
      if(entry.armorClass!==null)stats.append(statistic('Klasa pancerza',entry.armorClass));
      if(entry.slot)stats.append(statistic('Miejsce',slots[entry.slot]||entry.slot));
    }
    if(stats.childElementCount)main.append(stats);
    if(entry.status==='concept')main.append(element('p','dialog-note',isEnemy?'Koncepcja sprzed przebudowy walki. Liczby, blok i proponowane akcje nie opisują obecnego balansu ani obecnej klasy pancerza.':'Koncepcja wyglądu lub działania. Cena, statystyki i karty pozostają nieustalone; przedmiot nie jest dostępny w grze.'));
    if(entry.effect)main.append(element('p','dialog-note',entry.effect));
    if(isEnemy) {
      sectionTitle(main,'Działania');
      const abilities=element('div','abilities');
      for(const action of entry.actions){const ability=element('article','ability');ability.append(element('h4','',action.name),element('p','',action.effect));abilities.append(ability);}
      main.append(abilities);
      sectionTitle(main,'Występowanie');main.append(element('p','detail-copy',entry.occurrence));
      sectionTitle(main,'Nagrody');main.append(element('p','detail-copy',entry.loot));
    } else if(entry.cards.length) {
      const total=entry.cards.reduce((sum,c)=>sum+c.copies,0);
      sectionTitle(main,`Karty z przedmiotu · ${total}`);
      const abilities=element('div','abilities');
      for(const c of entry.cards){
        const ability=element('article','ability');
        const top=element('div','ability-top');
        top.append(element('h4','',c.name),element('span','ability-cost',`${c.cost} EN`));
        ability.append(top,element('p','',c.effectText+(c.copies>1?`\nLiczba kopii: ${c.copies}`:'')));abilities.append(ability);
      }
      main.append(abilities,element('p','detail-copy','EN oznacza koszt energii. Karty trafiają do wspólnej talii z pozostałym wyposażeniem; gracz dobiera do sześciu kart na początku tury.'));
      if(entry.cards.some(c=>c.effectText.startsWith('WSPARCIE')))main.append(element('p','dialog-note','Bariera i siła nie sumują się z wcześniejszym efektem: pozostaje większa z obecnej i proponowanej wartości. Leczenie uzupełnia HP najwyżej do maksimum.'));
    } else if(entry.category==='armor'&&entry.status==='implemented') {
      sectionTitle(main,'Ochrona pasywna');main.append(element('p','detail-copy','KP sumuje się z pozostałym wyposażeniem. Utrudnia trafienie i jest prezentowana wspólnie jako obrona postaci. Ten przedmiot nie dodaje osobnych kart do ręki.'));
    }
    host.append(main);dialog.showModal();dialog.scrollTop=0;
  }
  $('close-dialog').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>{if(opener?.isConnected)opener.focus({preventScroll:true});});

  function renderCatalogue(kind) {
    const isEnemy=kind==='enemy';
    const results=$(`${kind}-results`);
    const query=$(`${kind}-query`).value;
    const category=isEnemy?'all':$('item-category').value;
    const status=$(`${kind}-status`).value;
    const entries=filterEntries(isEnemy?data.enemies:data.items,{query,category,status});
    const fragment=document.createDocumentFragment();
    entries.forEach((entry,index)=>fragment.append(card(entry,index,isEnemy)));
    if(!entries.length){
      const empty=element('div','empty-state');
      const button=element('button','reset-button',`Wyczyść filtry ${isEnemy?'przeciwników':'przedmiotów'}`);button.type='button';
      button.addEventListener('click',()=>{ $(`${kind}-filters`).reset();renderCatalogue(kind);$(`${kind}-query`).focus(); });
      empty.append(element('h3','','Tu jeszcze nic nie znaleziono.'),element('p','','Zmień nazwę lub kategorię, albo wróć do pełnej listy.'),button);fragment.append(empty);
    }
    results.replaceChildren(fragment);
    $(`${kind}-count`).textContent=`${String(entries.length).padStart(2,'0')} ${isEnemy?'wpisów bestiariusza':'przedmiotów'} · ${status==='implemented'?'w grze':status==='concept'?'propozycje':'w grze i propozycje'}`;
  }
  for(const kind of ['item','enemy']){
    $(`${kind}-filters`).addEventListener('submit',e=>e.preventDefault());
    $(`${kind}-query`).addEventListener('input',()=>renderCatalogue(kind));
    $(`${kind}-status`).addEventListener('change',()=>renderCatalogue(kind));
    renderCatalogue(kind);
  }
  $('item-category').addEventListener('change',()=>renderCatalogue('item'));

  const releases=document.createDocumentFragment();
  for(const release of data.releases){
    const row=element('details','release');row.dataset.version=release.version;row.open=release.version===data.meta.version;
    const summary=element('summary');
    const heading=element('div');heading.append(element('div','release-title',release.title));
    const meta=element('div','release-meta');
    if(release.date){const date=element('time','',formatDate(release.date));date.dateTime=release.date;meta.append(date);}
    if(row.open)meta.append(element('span','latest-label','Wersja bazowa'));
    heading.append(meta);summary.append(element('span','release-version',release.version),heading);row.append(summary);
    const content=element('div','release-content');
    for(const group of release.groups){content.append(element('h4','',group.label));const list=element('ul');for(const change of group.changes)list.append(element('li','',change));content.append(list);}
    if(release.note)content.append(element('p','release-note',release.note));row.append(content);releases.append(row);
  }
  $('releases').append(releases);
})();
