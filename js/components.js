/* Componentes reutilizáveis (HTML em string). Sem dados fixos aqui. */
var C = {
  ph: function (t) { return '<span class="ph">' + t + '</span>'; },
  orn: function () { return '<div class="orn" aria-hidden="true">✠</div>'; },
  head: function (t) { return '<div class="pagehead"><h1>' + t + '</h1></div>'; },
  icon: {
    clock: '<svg class="ic" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    cross: '<span class="ic" aria-hidden="true">✠</span>'
  },

  /* Caminho local da imagem (centralizado em D.imagens) */
  src: function (key) { return D.imagens.pasta + D.imagens.arquivos[key]; },

  /* Foto com proporção original (sem cortes). Se o arquivo não existir,
     o evento "error" (tratado em app.js) troca por um espaço reservado. */
  /* Moldura com proporção definida em D.imagens.proporcoes. O espaço reservado
     fica por baixo; quando o JPEG existe e carrega, ele cobre o espaço reservado
     (app.js marca a moldura com .ok). Se não existir, nenhum ícone de imagem
     quebrada aparece e o layout não muda. */
  foto: function (key, cls) {
    var leg = D.imagens.legendas[key] || '';
    var r = D.imagens.proporcoes[key] || '4/3';
    var pos = (D.imagens.foco && D.imagens.foco[key]) || 'center';
    return '<figure class="fig ' + (cls || '') + '" data-key="' + key + '" style="--r:' + r + ';--pos:' + pos + '">' +
      '<div class="box">' + C.placeholder(key) +
      '<img src="' + C.src(key) + '" alt="' + leg + '" loading="lazy" decoding="async"></div>' +
      '<figcaption>' + leg + '</figcaption></figure>';
  },
  placeholder: function (key) {
    var leg = D.imagens.legendas[key] || '';
    return '<div class="phbox" role="img" aria-label="' + leg + ' (fotografia a ser adicionada)">' +
      '<span class="ph-cross" aria-hidden="true">✠</span><b>' + leg + '</b>' +
      '<small>' + D.imagens.pasta + D.imagens.arquivos[key] + '</small></div>';
  },
  semFoto: function (t) {
    return '<div class="photo" role="img" aria-label="' + t + '"><span class="ph-cross" aria-hidden="true">✠</span><small>' + t + '</small></div>';
  },

  horarioLinha: function (nome, hora) {
    return '<li><span class="hr">' + C.icon.clock + hora + '</span><span>' + nome + '</span></li>';
  },
  missasGrade: function () {
    return '<div class="g3">' + D.missas.map(function (d) {
      return '<div class="card dia"><h3>' + d.dia + '</h3><ul class="hl">' +
        d.itens.map(function (i) { return C.horarioLinha(i[0], i[1]); }).join('') + '</ul></div>';
    }).join('') + '</div>';
  },
  atendimentoBlocos: function () {
    var lista = function (a) { return '<ul class="hl">' + a.map(function (x) { return C.horarioLinha(x[0], x[1]); }).join('') + '</ul>'; };
    return '<div class="g2 top">' +
      '<div class="card pastoral"><span class="tag">Atendimento pastoral</span><h3>Confissões e atendimento com o padre</h3>' + lista(D.atendimento.confissao) + '</div>' +
      '<div class="card secretaria"><span class="tag">Atendimento administrativo</span><h3>Secretaria paroquial</h3>' + lista(D.atendimento.secretaria) + '</div></div>';
  },
  versiculo: function () {
    return '<blockquote class="verse"><p>“' + D.versiculo.texto + '”</p><cite>' + D.versiculo.ref + '</cite></blockquote>';
  },
  mapa: function () {
    var u = D.mapa || ('https://www.google.com/maps?q=' + encodeURIComponent(D.end) + '&output=embed');
    return '<iframe class="map" title="Mapa de localização da paróquia" src="' + u + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  },
  waLink: function () { return D.wa ? 'https://wa.me/' + D.wa : ''; },
  social: function (url, nome) {
    return url ? '<a href="' + url + '" target="_blank" rel="noopener">' + nome + '</a>' : '<span class="muted">' + C.ph('[LINK DO ' + nome.toUpperCase() + ']') + '</span>';
  }
};
