/* Páginas do site. Cada função retorna o HTML de uma rota. */
var P = {
  inicio: function () {
    return '<div class="hero"><span class="cross">✠</span><h1>' + D.nome + '</h1>' +
      '<p class="sub">' + D.diocese + ' · ' + D.regiao + '</p><p>' + D.frase + '</p>' +
      '<a class="btn" href="#padroeiro">Conheça nosso Padroeiro</a> <a class="btn o" href="#atendimento">Atendimento</a>' +
      '<div class="hero-foto">' + C.foto('fachada') + '</div></div>' +

      '<section class="s"><div class="wrap">' + C.versiculo() + '</div></section>' +

      '<section class="s alt"><div class="wrap g2"><div>' + C.foto('padroeiro') + '</div><div><h2>' + D.padroeiro + '</h2>' +
      '<p>Apóstolo dos gentios, que levou o Evangelho de Cristo a muitos povos e deixou cartas que alimentam a fé da Igreja até hoje.</p>' +
      '<a class="btn" href="#padroeiro">Conheça nosso padroeiro</a></div></div></section>' +

      '<section class="s"><div class="wrap"><h2 class="c">Secretaria, confissões e atendimento</h2>' + C.orn() + C.atendimentoBlocos() + '</div></section>' +

      '<section class="s alt"><div class="wrap"><h2 class="c">Localização</h2>' + C.orn() + C.mapa() +
      '<p class="c">' + D.end + '</p></div></section>';
  },

  padroeiro: function () {
    return C.head(D.padroeiro) + '<section class="s"><div class="wrap g2 top"><div class="narrow">' + C.foto('padroeiro') + '</div><div>' +
      '<p class="tag">Padroeiro da paróquia</p><h2>' + D.padroeiro + '</h2>' +
      '<p>Nascido em Tarso, na Cilícia, com o nome de Saulo, foi a princípio perseguidor dos cristãos. Encontrou o Senhor ressuscitado no caminho de Damasco e converteu-se, tornando-se o grande missionário do Evangelho (At 9).</p>' +
      '<p>Em suas viagens missionárias fundou comunidades em várias cidades do mundo mediterrâneo e escreveu cartas que compõem grande parte do Novo Testamento. É chamado “Apóstolo dos gentios”.</p>' +
      '<p>Foi martirizado em Roma, por volta dos anos 64 a 67, e a Igreja o celebra junto com São Pedro em 29 de junho.</p></div></div>' +
      '<div class="wrap" style="margin-top:36px">' + C.versiculo() + '</div></section>';
  },

  atendimento: function () {
    return C.head('Secretaria, Confissões e Atendimento') + '<section class="s"><div class="wrap">' + C.atendimentoBlocos() +
      '<p class="c" style="margin-top:24px">Telefone: <a href="tel:' + D.telLink + '">' + D.tel + '</a></p></div></section>';
  },

  galeria: function () {
    return C.head('Galeria de Fotografias') + '<section class="s"><div class="wrap"><p class="note">Toque em uma foto para ampliar.</p><div class="gal">' +
      D.imagens.galeria.map(function (k) {
        return '<button class="gi" data-key="' + k + '" aria-label="Ampliar: ' + D.imagens.legendas[k] + '">' + C.foto(k) + '</button>';
      }).join('') + '</div></div></section>';
  },

  contato: function () {
    var wa = C.waLink();
    return C.head('Contato e Localização') + '<section class="s"><div class="wrap g2 top"><div>' +
      '<p><b>Endereço:</b> ' + D.end + '<br><b>Telefone:</b> <a href="tel:' + D.telLink + '">' + D.tel + '</a><br><b>E-mail:</b> <a href="mailto:' + D.email + '">' + D.email + '</a><br><b>Secretaria:</b> segunda a sexta-feira, das 13h às 17h</p>' +
      '<p>' + (wa ? '<a class="btn" href="' + wa + '" target="_blank" rel="noopener">WhatsApp</a> ' : '') + '<a class="btn o dk" href="mailto:' + D.email + '">E-mail</a> <a class="btn o dk" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(D.end) + '" target="_blank" rel="noopener">Abrir no Google Maps</a></p>' +
      '<p>Redes sociais: ' + C.social(D.insta, 'Instagram') + ' · ' + C.social(D.face, 'Facebook') + '</p>' + C.foto('fachada') + '</div>' +
      '<form id="cf" novalidate><label for="n">Nome</label><input id="n" required autocomplete="name"><label for="e">E-mail</label><input id="e" type="email" required autocomplete="email"><label for="m">Mensagem</label><textarea id="m" rows="5" required></textarea><input class="hp" tabindex="-1" autocomplete="off" aria-hidden="true" id="hp"><label class="chk"><input type="checkbox" id="lg"> Concordo com o <a href="#privacidade">aviso de privacidade</a>.</label><div class="err" id="er" role="alert"></div><button class="btn">Enviar mensagem</button></form></div>' +
      '<div class="wrap" style="margin-top:30px">' + C.mapa() + '</div></section>';
  },

  privacidade: function () {
    return C.head('Aviso de Privacidade') + '<section class="s"><div class="wrap"><p>Os dados enviados pelo formulário de contato (nome, e-mail e mensagem) são usados somente para responder à sua solicitação, conforme a Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018). Não são vendidos nem compartilhados com terceiros.</p><p>Para consultar, corrigir ou excluir seus dados, escreva para <a href="mailto:' + D.email + '">' + D.email + '</a>.</p></div></section>';
  }
};
