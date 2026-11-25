/* ============================================================
   CONFIGURAÇÃO CENTRAL — dados institucionais e imagens.

   FOTOGRAFIAS: para trocar qualquer foto, coloque o novo arquivo
   JPEG em assets/images/ com EXATAMENTE o mesmo nome. Não é
   preciso alterar nenhum código. Se o arquivo não existir, o site
   mostra um espaço reservado elegante, sem quebrar o layout.
   ============================================================ */
var D = {
  nome: "Paróquia São Paulo Apóstolo",
  padroeiro: "São Paulo Apóstolo",
  diocese: "Arquidiocese de Campinas",
  regiao: "Sumaré – SP",
  paroco: "Padre Carlos Alberto Rodrigues Jorge",
  end: "Av. Ivo Trevisan, 430 – Jardim das Palmeiras, Sumaré – SP, CEP 13172-260",
  bairro: "Jardim das Palmeiras",
  cidade: "Sumaré – SP",
  tel: "(19) 3873-5757",
  telLink: "+551938735757",
  email: "saopaulosum@arquidiocesecampinas.com",
  wa: "",      /* WhatsApp com DDI, ex.: 5519999999999 (opcional) */
  insta: "",   /* [LINK DO INSTAGRAM] — cole o link oficial */
  face: "",    /* [LINK DO FACEBOOK] — cole o link oficial */
  frase: "Uma comunidade reunida na fé, na oração e na Santa Igreja.",
  versiculo: { texto: "Combati o bom combate, terminei a corrida, guardei a fé.", ref: "2 Timóteo 4,7" },
  mapa: "",    /* opcional: URL de incorporação (embed) do Google Maps; vazio = mapa gerado pelo endereço */
  aviso: "",   /* aviso de alteração excepcional de horário; vazio = não aparece */

  /* ---------- IMAGENS (único lugar com caminhos) ---------- */
  imagens: {
    pasta: "assets/images/",
    arquivos: {
      padroeiro: "padroeiro-sao-paulo.jpg",
      fachada: "fachada-matriz.jpg",
      interior: "interior-matriz.jpg",
      altar: "altar-matriz.jpg",
      missa: "missa-matriz.jpg",
      saoFrancisco: "comunidade-sao-francisco.jpg",
      saoJose: "comunidade-sao-jose.jpg",
      nossaSenhora: "comunidade-nossa-senhora.jpg",
      pastoral: "paroquia-pastoral.jpg",
      paroco: "padre-paroco.jpg"
    },
    legendas: {
      padroeiro: "São Paulo Apóstolo",
      fachada: "Fachada da Igreja Matriz",
      interior: "Interior da Igreja Matriz",
      altar: "Altar principal",
      missa: "Celebração da Santa Missa",
      saoFrancisco: "Comunidade São Francisco de Assis",
      saoJose: "Comunidade São José Operário",
      nossaSenhora: "Comunidade Nossa Senhora das Graças",
      pastoral: "Atividades pastorais e comunitárias",
      paroco: "Padre Carlos Alberto Rodrigues Jorge"
    },
    /* proporção de cada moldura (largura/altura); a foto é enquadrada sem distorcer */
    proporcoes: {
      padroeiro: "3/4", fachada: "16/10", interior: "4/3", altar: "4/3", missa: "16/10",
      saoFrancisco: "4/3", saoJose: "4/3", nossaSenhora: "4/3", pastoral: "16/10", paroco: "3/4"
    },
    /* ponto de foco do enquadramento (object-position) */
    foco: { padroeiro: "center top", paroco: "center top", fachada: "center 40%" },
    galeria: ["fachada", "interior", "altar", "missa", "saoFrancisco", "saoJose", "nossaSenhora", "pastoral"]
  },

  /* ---------- HORÁRIOS ---------- */
  missas: [
    { dia: "Sexta-feira", itens: [["Comunidade São Francisco de Assis", "19h30"]] },
    { dia: "Sábado", itens: [["Comunidade São José Operário", "17h30"], ["Matriz São Paulo Apóstolo", "19h"]] },
    { dia: "Domingo", itens: [["Comunidade Nossa Senhora das Graças", "7h30"], ["Matriz São Paulo Apóstolo", "9h"], ["Matriz São Paulo Apóstolo", "18h"]] }
  ],
  comunidades: [
    { nome: "Matriz São Paulo Apóstolo", img: "fachada", missa: "Sábado, 19h · Domingo, 9h e 18h" },
    { nome: "Comunidade São Francisco de Assis", img: "saoFrancisco", missa: "Sexta-feira, 19h30" },
    { nome: "Comunidade São José Operário", img: "saoJose", missa: "Sábado, 17h30" },
    { nome: "Comunidade Nossa Senhora das Graças", img: "nossaSenhora", missa: "Domingo, 7h30" }
  ],
  atendimento: {
    confissao: [["Quinta-feira", "13h30 às 17h"], ["Sábado", "8h30 às 11h30"]],
    secretaria: [["Segunda a sexta-feira", "13h às 17h"]]
  },

  /* ---------- CONTEÚDOS A PREENCHER (mantenha entre colchetes até ter o texto real) ---------- */
  historia: "[HISTÓRIA DA PARÓQUIA]",
  missao: "[MISSÃO EVANGELIZADORA, VALORES E PRINCÍPIOS]",
  fundacao: "[DATA DE FUNDAÇÃO]",
  biografiaParoco: "[BREVE BIOGRAFIA DO PÁROCO]",
  inicioMinisterio: "[DATA DE INÍCIO DO MINISTÉRIO NA PARÓQUIA]",
  palavra: "[MENSAGEM DO PÁROCO OU FRASE DE UM SANTO]",

  sacramentos: [
    ["Batismo", "Porta da vida cristã, o Batismo nos une a Cristo e à Igreja.", ["Documentos necessários", "Requisitos para pais e padrinhos", "Como se inscrever e agendar"]],
    ["Eucaristia", "Fonte e ápice da vida cristã: o Corpo e o Sangue do Senhor.", ["Primeira Comunhão", "Catequese e preparação"]],
    ["Crisma", "O Espírito Santo confirma e fortalece os batizados.", ["Preparação", "Inscrições"]],
    ["Penitência e Reconciliação", "O perdão de Deus pelo ministério da Igreja.", ["Orientações aos fiéis"]],
    ["Matrimônio", "A aliança entre homem e mulher, sinal do amor de Cristo pela Igreja.", ["Orientações para noivos", "Documentação necessária", "Prazos e preparação matrimonial"]],
    ["Ordem", "O chamado ao serviço de Cristo e da Igreja.", ["Vocação sacerdotal e vida religiosa"]],
    ["Unção dos Enfermos", "Consolo e força de Cristo na doença e na velhice.", ["Como solicitar atendimento", "Contato para visitas aos enfermos"]]
  ],
  /* Mantenha apenas os grupos que existem na paróquia: adicione, edite ou apague linhas. */
  pastorais: ["Pastoral do Batismo", "Pastoral Familiar", "Pastoral da Catequese", "Pastoral da Liturgia", "Pastoral da Música", "Pastoral da Comunicação", "Pastoral do Dízimo", "Ministros Extraordinários da Sagrada Comunhão", "Coroinhas e acólitos", "Grupo de Jovens", "Apostolado da Oração"]
};
