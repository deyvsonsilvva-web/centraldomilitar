/**
 * Estruturas padronizadas para representar a proveniência e o grau de
 * confiabilidade de qualquer informação factual (carreira, posto,
 * interstício, requisito, legislação etc.) apresentada na Central do
 * Militar.
 *
 * Nenhum dado factual deve ser exibido como definitivo sem que sua
 * `Fonte` e seu `StatusValidacao` estejam preenchidos — ver item 8 das
 * instruções do projeto ("Fontes e confiabilidade").
 */

/** Tipo de documento normativo ou institucional que origina uma informação. */
export type TipoDocumentoFonte =
  | 'lei'
  | 'decreto'
  | 'portaria'
  | 'instrucaoNormativa'
  | 'regulamento'
  | 'nota'
  | 'pagina'
  | 'outro'

/**
 * Referência a uma fonte oficial (ou, excepcionalmente, institucional
 * confiável) de uma informação.
 *
 * Datas seguem o formato ISO 8601 (`AAAA-MM-DD`). `dataPublicacao` pode
 * ficar ausente quando a data de publicação do documento não é conhecida;
 * `dataVerificacao` é obrigatória — registra quando a informação foi
 * conferida por último em relação à fonte.
 */
export interface Fonte {
  titulo: string
  orgao: string
  tipoDocumento: TipoDocumentoFonte
  /** Número/identificação do documento (ex.: "Lei nº 6.880/1980"). */
  referencia?: string
  url?: string
  /** Artigo, parágrafo, inciso ou seção específica quando aplicável. */
  artigoOuSecao?: string
  /** Data de publicação do documento, quando conhecida (AAAA-MM-DD). */
  dataPublicacao?: string
  /** Data em que esta informação foi conferida contra a fonte (AAAA-MM-DD). */
  dataVerificacao: string
}

/**
 * Grau de confiabilidade de uma informação factual.
 *
 * - `verificado`: conferido diretamente contra fonte oficial vigente.
 * - `parcialmenteVerificado`: parte da informação confirmada; parte
 *   ainda depende de confirmação (ex.: regra geral confirmada, mas
 *   exceções específicas não pesquisadas).
 * - `pendenteVerificacao`: ainda não pesquisado/confirmado contra fonte
 *   oficial. Não deve ser apresentado como fato consolidado na interface.
 * - `desatualizado`: já foi verificado no passado, mas há indício de
 *   alteração normativa posterior ainda não incorporada.
 */
export type StatusValidacao =
  | 'verificado'
  | 'parcialmenteVerificado'
  | 'pendenteVerificacao'
  | 'desatualizado'

/**
 * Contrato comum para qualquer entidade de conteúdo que carregue
 * informação factual: toda entidade "verificável" precisa declarar suas
 * fontes e seu status de validação, mesmo que a lista de fontes esteja
 * vazia e o status seja `pendenteVerificacao` enquanto a pesquisa
 * documental não for feita.
 */
export interface Verificavel {
  fontes: Fonte[]
  statusValidacao: StatusValidacao
}
