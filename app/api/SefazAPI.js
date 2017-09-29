import APP_TOKEN from './../common/AppToken';

const API_ENDPOINT = "http://api.sefaz.al.gov.br";
const AUTH_TOKEN_PREFIX = "Bearer ";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

// ACESSO

export const autenticar = (caceal, authorizationId) =>
  fetch(`${API_ENDPOINT}/api/public/autenticar`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      login: caceal,
      idAutorizacao: authorizationId,
      tokenApp: APP_TOKEN
    })
  }).then(response => response.ok ? response.json() : response.json().then(e => {throw e;}));

export const solicitarAutorizacao = (caceal, deviceName) =>
  fetch(`${API_ENDPOINT}/sfz-habilitacao-aplicativo-api/api/public/autorizacao-aplicativo/solicitar`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      login: caceal,
      nomeDispositivo: deviceName,
      tokenApp: APP_TOKEN
    })
  }).then(response => response.ok ? response.json() : response.json().then(e => {throw e;}));

// CADASTRO

export const obterContribuinte = (requestToken, caceal) =>
  fetch(`${API_ENDPOINT}/sfz_cadastro_api/api/public/contribuinte/obterContribuinte/${caceal}`, {
    headers: {
      Authorization: AUTH_TOKEN_PREFIX + requestToken,
      ...headers
    }
  }).then(response => response.ok ? response.json() : response.json().then(e => {throw e;}));

export const obterRestricoes = (requestToken, caceal) =>
  fetch(`${API_ENDPOINT}/sfz_cadastro_api/api/public/contribuinte/obterRestricoes/${caceal}`, {
    headers: {
      Authorization: AUTH_TOKEN_PREFIX + requestToken,
      ...headers
    },
  }).then(response => response.ok ? response.json() : response.json().then(e => {throw e;}));

export const consultarCnd = (requestToken, numeroDocumento, tipoDocumento = 'CACE') =>
  fetch(`${API_ENDPOINT}/sfz_certidao_api/api/public/consultaCertidao/consultarCnd`, {
    method: 'POST',
    headers: {
      Autorization: AUTH_TOKEN_PREFIX + requestToken,
      ...headers
    },
    body: JSON.stringify({
      numeroDocumento,
      tipoDocumento
    })
  }).then(response => response.ok ? response.json() : response.json().then(e => {throw e;}));

export const consultarPendencias = (requestToken, numeroDocumento, tipoDocumento) =>
  fetch(`${API_ENDPOINT}/sfz_certidao_api/api/public/consultaCertidao/consultarPendencias`, {
    method: 'POST',
    headers: {
      Autorization: AUTH_TOKEN_PREFIX + requestToken,
      ...headers
    },
    body: JSON.stringify({
      numeroDocumento,
      tipoDocumento
    })
  }).then(response => response.ok ? response.json().pendenciaDados : response.json().then(e => {throw e;}));

// FRONTEIRAS

export const consultarTermosDeApreensao = (requestToken, numeroCaceal, periodoInicio, periodoTermino) =>
  fetch(`${API_ENDPOINT}/sfz_fronteiras_api/api/public/termoApreensao/consultar`, {
    method: 'POST',
    headers: {
      Authorization: AUTH_TOKEN_PREFIX + requestToken,
      ...headers
    },
    body: JSON.stringify({
      numeroCaceal,
      periodoInicio,
      periodoTermino
    })
  }).then(response => response.ok ? response.json() : response.json().then(e => {throw e;}));

export const consultarValoresAntecipados = (requestToken, numeroCaceal, competencia) =>
  fetch(`${API_ENDPOINT}/sfz_fronteiras_api/api/public/antecipacao/consultarValoresAntecipados`, {
    method: 'POST',
    headers: {
      Authorization: AUTH_TOKEN_PREFIX + requestToken,
      ...headers
    },
    body: JSON.stringify({
      numeroCaceal,
      competencia
    })
  }).then(response => response.ok ? response.json() : response.json().then(e => {throw e;}));

export const consultarAntecipado = (requestToken, numeroCaceal, sequencialAntecipacao) =>
  fetch(`${API_ENDPOINT}/sfz_fronteiras_api/api/public/dar/consultarAntecipado`, {
    method: 'POST',
    headers: {
      Authorization: AUTH_TOKEN_PREFIX + requestToken,
      ...headers
    },
    body: JSON.stringify({
      numeroCaceal,
      sequencialAntecipacao
    })
  }).then(response => response.ok ? response.json() : response.json().then(e => {throw e;}));

// GLPI

export const abrirChamado = (requestToken, descricao, idCategoria, titulo) =>
  fetch(`${API_ENDPOINT}/sfz_glpi_api/api/public/chamado/abrir`, {
    method: 'POST',
    headers: {
      Authorization: AUTH_TOKEN_PREFIX + requestToken,
      ...headers
    },
    body: JSON.stringify({
      descricao,
      idCategoria,
      titulo
    })
  }).then(response => response.ok ? response.json() : response.json().then(e => {throw e;}));

export const listarChamados = (requestToken) =>
  fetch(`${API_ENDPOINT}/sfz_glpi_api/api/public/chamado`, {
    headers: {
      Authorization: AUTH_TOKEN_PREFIX + requestToken,
      ...headers
    }
  }).then(response => response.ok ? response.json() : response.json().then(e => {throw e;}));

export const obterCategorias = (requestToken) =>
  fetch(`${API_ENDPOINT}/sfz_glpi_api/api/public/obterCategorias`, {
    headers: {
      Autorization: AUTH_TOKEN_PREFIX + requestToken,
      ...headers
    }
  }).then(response => response.ok ? response.json() : response.json().then(e => {throw e;}));

export const consultarChamadoPorId = (requestToken, idChamado) =>
  fetch(`${API_ENDPOINT}/sfz_glpi_api/api/public/chamado/${idChamado}`, {
    headers: {
      Authorization: AUTH_TOKEN_PREFIX + requestToken,
      ...headers
    }
  }).then(response => response.ok ? response.json() : response.json().then(e => {throw e;}));

// PROCESSOS

export const consultarPorNumeroProcesso = (requestToken, numeroProcesso) =>
  fetch(`${API_ENDPOINT}/sfz_processo_api/api/public/processosAtivos/consultarPorNumeroProcesso`, {
    method: 'POST',
    headers: {
      Authorization: AUTH_TOKEN_PREFIX + requestToken,
      ...headers
    },
    body: JSON.stringify({
      numeroProcesso
    })
  }).then(response => response.ok ? response.json() : response.json().then(e => {throw e;}));

// Fiscalização

export const consultarOs = (requestToken, caceal, numeroOs) =>
  fetch(`${API_ENDPOINT}/sfz_fiscalizacao_api/api/public/os/consultarOs`, {
    method: 'POST',
    headers: {
      Authorization: AUTH_TOKEN_PREFIX + requestToken,
        ...headers
    },
    body: JSON.stringify({
      cnpjCaceal: caceal,
      numeroOs
    })
  }).then(response => response.ok ? response.json() : response.json().then(e => {throw e;}));