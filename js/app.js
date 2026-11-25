/* Roteador, menu, rodapé e comportamentos. Depende de config.js, components.js e pages.js */
var $ = function (s) { return document.querySelector(s); };
var MENU = [["inicio", "Início"], ["padroeiro", "Padroeiro"], ["atendimento", "Atendimento"], ["galeria", "Galeria"], ["contato", "Contato"]];

/* Foto carregou → cobre o espaço reservado. Foto ausente → remove a <img>
   (sem ícone de imagem quebrada) e mantém o espaço reservado. */
document.addEventListener("load", function (e) {
  var im = e.target;
  if (im && im.tagName === "IMG" && im.closest("figure.fig")) im.closest("figure.fig").classList.add("ok");
}, true);
document.addEventListener("error", function (e) {
  var im = e.target;
  if (im && im.tagName === "IMG" && im.closest("figure.fig")) im.remove();
}, true);
function checarFotos() {
  [].forEach.call(document.querySelectorAll("figure.fig img"), function (im) {
    if (im.complete) { if (im.naturalWidth) im.closest("figure.fig").classList.add("ok"); else im.remove(); }
  });
}

function ligarPagina() {
  var cf = $("#cf");
  if (cf) cf.onsubmit = function (e) {
    e.preventDefault(); var er = $("#er");
    if ($("#hp").value) return;
    if (!$("#n").value.trim() || !/^\S+@\S+\.\S+$/.test($("#e").value) || $("#m").value.trim().length < 10) { er.textContent = "Preencha nome, um e-mail válido e uma mensagem com pelo menos 10 caracteres."; return; }
    if (!$("#lg").checked) { er.textContent = "Aceite o aviso de privacidade para enviar."; return; }
    er.textContent = "";
    var corpo = encodeURIComponent($("#m").value + "\n\n" + $("#n").value + " <" + $("#e").value + ">");
    location.href = "mailto:" + D.email + "?subject=" + encodeURIComponent("Contato pelo site") + "&body=" + corpo;
  };
  [].forEach.call(document.querySelectorAll(".gi"), function (b) {
    b.onclick = function () {
      var k = b.dataset.key, lb = $("#lb");
      $("#lbc").innerHTML = C.foto(k, "big"); checarFotos();
      $("#lbt").textContent = D.imagens.legendas[k];
      lb.showModal();
    };
  });
}

function rota() {
  var h = (location.hash || "#inicio").slice(1);
  if (!P[h] || h.charAt(0) === "_") h = "inicio";
  $("#app").innerHTML = '<div class="pg">' + P[h]() + "</div>";
  window.scrollTo(0, 0);
  $("#nv").innerHTML = MENU.map(function (m) { return '<a href="#' + m[0] + '"' + (m[0] === h ? ' class="on" aria-current="page"' : "") + ">" + m[1] + "</a>"; }).join("") ;
  $("#nv").classList.remove("open"); $("#mb").setAttribute("aria-expanded", "false");
  var item = MENU.filter(function (m) { return m[0] === h; })[0];
  document.title = (item && h !== "inicio" ? item[1] + " — " : "") + D.nome;
  ligarPagina();
  checarFotos();
}

function montarBase() {
  $("#hnome").textContent = D.nome;
  $("#hdioc").textContent = D.diocese + " · " + D.regiao;
  var meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = D.nome + " — " + D.diocese + ", " + D.regiao + ". Horários das Missas, comunidades, secretaria, confissões e contato.";
  $("#ft").innerHTML =
    "<div><h3>" + D.nome + "</h3><p>" + D.diocese + "<br>" + D.end + '<br><a href="tel:' + D.telLink + '">' + D.tel + '</a><a href="mailto:' + D.email + '">' + D.email + "</a></p></div>" +
    "<div><h3>Atendimento</h3><p><b>Secretaria:</b> Segunda a sexta-feira, 13h às 17h<br><b>Confissões:</b> Quinta-feira, 13h30 às 17h; Sábado, 8h30 às 11h30</p><a href=\"#atendimento\">Mais informações</a></div>" +
    "<div><h3>Links</h3>" + MENU.map(function (m) { return '<a href="#' + m[0] + '">' + m[1] + "</a>"; }).join("") +
    "<h3 style='margin-top:12px'>Redes sociais</h3>" + C.social(D.insta, "Instagram") + C.social(D.face, "Facebook") + "</div>";
  $("#cnome").textContent = D.nome;
  $("#yr").textContent = new Date().getFullYear();
}

$("#mb").onclick = function () { var o = $("#nv").classList.toggle("open"); this.setAttribute("aria-expanded", o); };
window.addEventListener("hashchange", rota);
montarBase(); rota();
