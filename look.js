// Look switcher: Bold (default), Refined and Civic.
//
// Load this in the <head> of every page (before the page content) so the chosen look
// is applied before anything is drawn. It:
//   - picks the look from the link (?look=refined), otherwise the viewer's last choice
//   - adds the "Change the look" slider to the footer
//   - keeps ?look= in the address bar and on links to other pages, so shared links
//     open in the same look
//   - fires a `lookchange` event on the document when the look changes

(function () {
  const LOOKS = [
    { id: 'bold',    name: 'Bold' },
    { id: 'refined', name: 'Refined' },
    { id: 'civic',   name: 'Civic' },
  ];
  const IDS = LOOKS.map(l => l.id);
  const KEY = 'tracker-look';

  const save = id => { try { localStorage.setItem(KEY, id); } catch {} };
  const load = () => { try { return localStorage.getItem(KEY); } catch { return null; } };

  const fromLink = new URLSearchParams(location.search).get('look');
  let look = IDS.includes(fromLink) ? fromLink : IDS.includes(load()) ? load() : 'bold';
  document.documentElement.dataset.look = look;
  if (IDS.includes(fromLink)) save(look);

  // Add (or remove, for the default look) ?look= on a URL
  function withLook(href) {
    const url = new URL(href, location.href);
    if (look === 'bold') url.searchParams.delete('look');
    else url.searchParams.set('look', look);
    return url.href;
  }
  const syncAddress = () => {
    try { history.replaceState(history.state, '', withLook(location.href)); } catch {}
  };

  function setLook(id) {
    if (!IDS.includes(id) || id === look) return;
    const apply = () => {
      look = id;
      document.documentElement.dataset.look = id;
      save(id);
      syncAddress();
      updateSwitches();
      document.dispatchEvent(new CustomEvent('lookchange', { detail: { look: id } }));
    };
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (document.startViewTransition && !reduce) document.startViewTransition(apply);
    else apply();
  }

  // ---- Footer slider --------------------------------------------------------
  function buildSwitch() {
    const footer = document.querySelector('footer');
    if (!footer) return;
    const wrap = document.createElement('div');
    wrap.className = 'look-switch';
    wrap.innerHTML = `
      <span class="ls-label" id="ls-label">Change the look</span>
      <input type="range" min="0" max="${LOOKS.length - 1}" step="1" aria-labelledby="ls-label">
      <div class="ls-stops">${LOOKS.map((l, i) => `<button type="button" data-i="${i}">${l.name}</button>`).join('')}</div>`;
    (footer.querySelector('.row') || footer).appendChild(wrap);

    const range = wrap.querySelector('input');
    range.addEventListener('input', () => setLook(IDS[+range.value]));
    wrap.querySelectorAll('.ls-stops button').forEach(b =>
      b.addEventListener('click', () => setLook(IDS[+b.dataset.i])));
    updateSwitches();
  }

  function updateSwitches() {
    const i = IDS.indexOf(look);
    document.querySelectorAll('.look-switch').forEach(w => {
      const range = w.querySelector('input');
      range.value = i;
      range.setAttribute('aria-valuetext', LOOKS[i].name);
      w.querySelectorAll('.ls-stops button').forEach((b, j) => {
        b.classList.toggle('on', j === i);
        b.setAttribute('aria-pressed', j === i);
      });
    });
  }

  // ---- Keep the look on links to other pages of the site --------------------
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    const url = new URL(a.getAttribute('href'), location.href);
    if (url.origin !== location.origin) return;                          // other sites
    if (url.pathname === location.pathname && url.hash) return;          // same-page jumps
    a.href = withLook(url.href);
  }, true);

  window.TrackerLook = { get: () => look, set: setLook, withLook };

  const init = () => { buildSwitch(); syncAddress(); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
