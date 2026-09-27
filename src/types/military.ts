/**
 * Modelo de dados de carreira militar da Central do Militar.
 *
 * Este arquivo define apenas ESTRUTURA (tipos TypeScript). Nenhum dado
 * militar real (posto, interstício, requisito, legislação etc.) é
 * definido aqui — ver item 2 do Prompt 02 e item 14 ("O que não fazer").
 *
 * Princípio estrutural obrigatório: a forma dos tipos abaixo nunca deve
 * permitir que a interface reduza uma regra de progressão a
 * "X anos = promoção automática". Tempo mínimo (`Intersticio`),
 * `Requisito`, critérios de promoção, existência de vaga, antiguidade e
 * mérito são sempre representados como conceitos distintos.
 */

import type { Fonte, Verificavel } from './sources'

/** Identificador estável de cada Força Armada. */
export type IdForca = 'exercito' | 'marinha' | 'aeronautica'

/**
 * Uma Força Armada (Exército, Marinha ou Força Aérea).
 *
 * Cada Força é tratada como uma entidade independente, com sua própria
 * estrutura hierárquica e fontes normativas — nunca presumir que uma
 * regra de uma Força se aplica automaticamente às demais (item 4 das
 * instruções do projeto).
 */
export interface Forca extends Verificavel {
  id: IdForca
  nome: string
  sigla: string
  descricao: string
  /** Categoria ou ramo interno, quando aplicável (ex.: Arma, Corpo, Quadro). */
  categoriaRamo?: string
}

/** Categoria militar básica: oficial ou praça. */
export type CategoriaMilitar = 'oficial' | 'praca'

/**
 * Uma carreira dentro de uma Força (ex.: "Carreira de Oficiais de Carreira
 * do Exército", "Carreira de Praças da Marinha").
 *
 * `itens` referencia, em ordem hierárquica, os `id`s de `PostoOuGraduacao`
 * que compõem essa carreira. A ordenação em si é a representação da
 * progressão possível — ver `CareerTimeline`.
 */
export interface Carreira extends Verificavel {
  id: string
  forca: IdForca
  categoria: CategoriaMilitar
  nome: string
  descricao: string
  /** IDs de PostoOuGraduacao, em ordem hierárquica crescente. */
  itens: string[]
}

/**
 * Natureza de um período associado a uma progressão de carreira.
 *
 * Esta distinção existe para que a interface NUNCA apresente um número
 * isolado como garantia de promoção:
 *
 * - `minimo`: tempo mínimo obrigatório previsto em norma para
 *   habilitação à promoção — condição necessária, não suficiente.
 * - `referencia`: valor apenas referencial/estimado, sem caráter
 *   normativo direto localizado até o momento.
 * - `previstoEmNorma`: prazo expressamente fixado em norma, mas cuja
 *   aplicação ainda depende de outras condições (vaga, critério etc.).
 * - `naoLocalizado`: a pesquisa documental não localizou, até o
 *   momento, uma norma que defina esse período.
 * - `naoAplicavel`: não existe interstício aplicável a este caso.
 * - `outro`: caso específico que não se encaixa nas categorias acima;
 *   deve ser detalhado em `descricao`.
 */
export type TipoIntersticio =
  | 'minimo'
  | 'referencia'
  | 'previstoEmNorma'
  | 'naoLocalizado'
  | 'naoAplicavel'
  | 'outro'

/**
 * Representa um interstício (ou a ausência confirmada de um).
 *
 * `valor` e `unidade` só devem ser preenchidos quando um período
 * numérico de fato existir e estiver documentado; `tipo` é sempre
 * obrigatório e é o que determina como a interface deve comunicar o
 * dado ao usuário (por exemplo, `naoLocalizado` deve ser exibido como
 * pendência, nunca omitido silenciosamente).
 */
export interface Intersticio extends Verificavel {
  valor?: number
  unidade?: 'dias' | 'meses' | 'anos'
  tipo: TipoIntersticio
  descricao: string
  /** Em que condições/quadros/situações esse interstício se aplica. */
  aplicabilidade?: string
}

/**
 * Um requisito para acesso, habilitação ou promoção (curso, avaliação,
 * tempo em determinada função, escolaridade etc.). Representado à parte
 * do interstício para nunca confundir "tempo mínimo" com "requisito".
 */
export interface Requisito extends Verificavel {
  id: string
  descricao: string
  /** Se este requisito é obrigatório ou apenas um diferencial/critério de mérito. */
  obrigatorio: boolean
}

/** Um curso relevante para progressão de carreira (ex.: CHQAO). */
export interface Curso extends Verificavel {
  id: string
  nome: string
  sigla?: string
  descricao?: string
}

/**
 * Um critério de promoção não redutível a tempo (interstício) ou a
 * requisito isolado (ex.: "por antiguidade", "por merecimento",
 * "condicionado a vaga no quadro").
 *
 * Segue o mesmo princípio de `Requisito`: cada critério é uma entidade
 * `Verificavel` própria, com suas próprias fontes e status de validação,
 * nunca um texto solto sem proveniência.
 */
export interface Criterio extends Verificavel {
  id: string
  descricao: string
}

/**
 * Um posto (oficiais) ou graduação (praças) dentro da hierarquia de uma
 * Força.
 *
 * `anterior` e `posterior` referenciam os `id`s dos postos/graduações
 * imediatamente adjacentes na mesma carreira, permitindo montar a
 * progressão sem depender de a lista estar sempre ordenada em memória.
 *
 * IMPORTANTE: a presença de `intersticio` e `requisitos` em um posto
 * nunca deve ser interpretada, pela interface, como "cumprido o
 * interstício e os requisitos, a promoção é automática". Existência de
 * vaga, antiguidade, merecimento e demais critérios regulamentares
 * (`criterios`) são sempre condições adicionais e independentes.
 */
export interface PostoOuGraduacao extends Verificavel {
  id: string
  forca: IdForca
  categoria: CategoriaMilitar
  nome: string
  abreviatura: string
  /** Posição na hierarquia dentro da própria carreira (1 = mais baixa). */
  posicaoHierarquica: number
  /** id do PostoOuGraduacao imediatamente anterior, se houver. */
  anterior?: string
  /** id do PostoOuGraduacao imediatamente posterior, se houver. */
  posterior?: string
  requisitos?: Requisito[]
  intersticio?: Intersticio
  /**
   * Critérios de promoção não redutíveis a tempo ou requisito isolado
   * (ex.: "por antiguidade", "por merecimento", "condicionado a vaga no
   * quadro"). Cada item é um `Criterio` verificável, específico, nunca
   * uma simplificação genérica.
   */
  criterios?: Criterio[]
  cursos?: Curso[]
  observacoes?: string
  /** Legislação diretamente relacionada a este posto/graduação. */
  legislacao?: Fonte[]
}
