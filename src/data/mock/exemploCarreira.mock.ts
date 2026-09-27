import type { Carreira, PostoOuGraduacao } from '../../types/military'

/**
 * ============================================================================
 * DADOS FICTÍCIOS DE EXEMPLO — NÃO REPRESENTAM NENHUMA HIERARQUIA REAL.
 * ============================================================================
 *
 * Este arquivo existe apenas para permitir o desenvolvimento e a inspeção
 * visual dos componentes de carreira (CareerCard, RankCard, CareerTimeline
 * etc.) antes que dados militares reais e pesquisados existam.
 *
 * Nomes, siglas, interstícios, requisitos e fontes abaixo são inventados
 * de propósito ("Posto Exemplo A/B/C") para que nunca sejam confundidos
 * com uma graduação ou posto real de qualquer Força.
 *
 * NÃO importar este arquivo em nenhuma página ou rota da aplicação.
 * Use-o apenas em stories/testes/preview de componentes.
 */

const fonteExemplo = {
  titulo: 'Fonte de exemplo (dado fictício)',
  orgao: 'Órgão de exemplo',
  tipoDocumento: 'outro' as const,
  referencia: 'N/A — dado fictício',
  dataVerificacao: '2026-01-01',
}

export const exemploPostoA: PostoOuGraduacao = {
  id: 'exemplo-posto-a',
  forca: 'exercito',
  categoria: 'praca',
  nome: 'Posto Exemplo A',
  abreviatura: 'Ex-A',
  posicaoHierarquica: 1,
  posterior: 'exemplo-posto-b',
  requisitos: [
    {
      id: 'exemplo-requisito-1',
      descricao: 'Requisito fictício de exemplo (curso X concluído).',
      obrigatorio: true,
      fontes: [fonteExemplo],
      statusValidacao: 'pendenteVerificacao',
    },
  ],
  intersticio: {
    tipo: 'minimo',
    valor: 2,
    unidade: 'anos',
    descricao: 'Tempo mínimo fictício de exemplo no posto/graduação anterior.',
    fontes: [fonteExemplo],
    statusValidacao: 'pendenteVerificacao',
  },
  criterios: [
    {
      id: 'exemplo-criterio-1',
      descricao: 'Critério fictício de exemplo: existência de vaga no quadro.',
      fontes: [fonteExemplo],
      statusValidacao: 'pendenteVerificacao',
    },
  ],
  observacoes: 'Dado fictício — apenas para demonstração de componentes.',
  fontes: [fonteExemplo],
  statusValidacao: 'pendenteVerificacao',
}

export const exemploPostoB: PostoOuGraduacao = {
  id: 'exemplo-posto-b',
  forca: 'exercito',
  categoria: 'praca',
  nome: 'Posto Exemplo B',
  abreviatura: 'Ex-B',
  posicaoHierarquica: 2,
  anterior: 'exemplo-posto-a',
  posterior: 'exemplo-posto-c',
  intersticio: {
    tipo: 'naoLocalizado',
    descricao: 'Interstício fictício ainda não localizado em norma, apenas para exemplo.',
    fontes: [],
    statusValidacao: 'pendenteVerificacao',
  },
  fontes: [fonteExemplo],
  statusValidacao: 'parcialmenteVerificado',
}

export const exemploPostoC: PostoOuGraduacao = {
  id: 'exemplo-posto-c',
  forca: 'exercito',
  categoria: 'praca',
  nome: 'Posto Exemplo C',
  abreviatura: 'Ex-C',
  posicaoHierarquica: 3,
  anterior: 'exemplo-posto-b',
  fontes: [fonteExemplo],
  statusValidacao: 'pendenteVerificacao',
}

export const exemploCarreira: Carreira = {
  id: 'exemplo-carreira',
  forca: 'exercito',
  categoria: 'praca',
  nome: 'Carreira de Exemplo',
  descricao: 'Carreira fictícia usada apenas para demonstrar CareerCard e CareerTimeline.',
  itens: [exemploPostoA.id, exemploPostoB.id, exemploPostoC.id],
  fontes: [fonteExemplo],
  statusValidacao: 'pendenteVerificacao',
}

export const exemploPostos: PostoOuGraduacao[] = [exemploPostoA, exemploPostoB, exemploPostoC]
