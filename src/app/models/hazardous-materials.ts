export interface HazardousMaterial {
  name: string;
  guideNr: number;
  dangerCode: string;
  numberUN: string;
  warningMsg: string;
  leak: Procedure;
  fire: Procedure;
};

export interface Procedure {
  epi?: string;
  isolation?: string;
  action?: string;
  decontamination?: string;
  range?: number;
};


export const hazardousMaterials: HazardousMaterial[] = [
  {
    name: 'Diisocianato de Tolueno',
    guideNr: 156,
    dangerCode: '60',
    numberUN: '2078',
    warningMsg: 'Não Utilizar Água. Risco de incêndio ou explosão.',
    leak:  {
        epi : 'EQUIPA INTERVENÇÃO- Proteção químico T3 + ARICA // EQUIPA DE PROTEÇÃO- EPI + ARICA + LINHA DE ESPUMA BAIXA + LINHA DE DESCONTAMINAÇÃO DE EMERGÊNCIA',
        isolation :'Criar Corredor Entrada // Criar Corredor Redutor de Contaminação',
        action: 'Aplicar contenção e granulado absorvente. Remover o produto para contentor próprio. Limpar a zona com concentrado de 90% água, 8% de amoníaco e 2% de detergente.',
        decontamination: 'A equipa deve ser borrifada com a solução de limpeza e água. Posteriormente remover e descartar o EPI para contentor de resíduos. O ultimo equipamento a remover será o ARICA e peça facial.',
        range: 50
     },
    fire:  {
        epi : 'EQUIPA INTERVENÇÃO- EPI + ARICA // EQUIPA DE PROTEÇÃO- EPI + ARICA + Linha Espuma Baixa + Linha de Descontaminação Emergência',
        isolation :'Criar Corredor Entrada // Criar Corredor Redutor de Contaminação',
        action: 'Manter distância. Proteger a zona com cortina de proteção. O material reage violentamente com água (liberta gases tóxicos ou corrosivos); garantir a contenção da água.',
        range: 800
     }
  }
]

