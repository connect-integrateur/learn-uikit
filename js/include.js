/*
  Insère le contenu de chaque composant dans la page.
  Tout élément avec un attribut data-include="chemin/vers/fichier.html"
  reçoit le contenu du <body> de ce fichier.

  Attention : fetch() ne fonctionne pas si la page est ouverte en double-cliquant
  dessus (adresse en file://). Il faut passer par un serveur local
  (extension Live Server de VS Code, ou `npx serve` dans le dossier du projet).
*/
document.querySelectorAll('[data-include]').forEach(async (el) => {
  try {
    const response = await fetch(el.dataset.include);
    if (!response.ok) throw new Error(response.status);
    const html = await response.text();
    const body = new DOMParser().parseFromString(html, 'text/html').body;

    // Les chemins (images, liens) sont écrits par rapport au fichier du composant :
    // on les recalcule pour qu'ils restent justes une fois insérés dans cette page.
    body.querySelectorAll('[src], [href]:not([href^="#"])').forEach((node) => {
      const attr = node.hasAttribute('src') ? 'src' : 'href';
      node.setAttribute(attr, new URL(node.getAttribute(attr), response.url).href);
    });

    el.innerHTML = body.innerHTML;
  } catch (error) {
    el.innerHTML = `<p role="alert">Impossible de charger <code>${el.dataset.include}</code>. La page doit être ouverte via un serveur local (Live Server, npx serve…).</p>`;
  }
});
