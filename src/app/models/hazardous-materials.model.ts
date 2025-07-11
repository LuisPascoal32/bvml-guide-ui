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
    leak: {
      epi: 'EQUIPA INTERVENÇÃO- Proteção químico T3 + ARICA // EQUIPA DE PROTEÇÃO- EPI + ARICA + LINHA DE ESPUMA BAIXA + LINHA DE DESCONTAMINAÇÃO DE EMERGÊNCIA',
      isolation: 'Criar Corredor Entrada // Criar Corredor Redutor de Contaminação',
      action: 'Aplicar contenção e granulado absorvente. Remover o produto para contentor próprio. Limpar a zona com concentrado de 90% água, 8% de amoníaco e 2% de detergente.',
      decontamination: 'A equipa deve ser borrifada com a solução de limpeza e água. Posteriormente remover e descartar o EPI para contentor de resíduos. O ultimo equipamento a remover será o ARICA e peça facial.',
      range: 50
    },
    fire: {
      epi: 'EQUIPA INTERVENÇÃO- EPI + ARICA // EQUIPA DE PROTEÇÃO- EPI + ARICA + Linha Espuma Baixa + Linha de Descontaminação Emergência',
      isolation: 'Criar Corredor Entrada // Criar Corredor Redutor de Contaminação',
      action: 'Manter distância. Proteger a zona com cortina de proteção. O material reage violentamente com água (liberta gases tóxicos ou corrosivos); garantir a contenção da água.',
      range: 800
    }
  },
  {
    name: 'Hipoclorito de Cálcio',
    guideNr: 140,
    dangerCode: '50',
    numberUN: '2880',
    warningMsg: 'Em caso de Incêndio: Pode aumentar a combustão e libertar fumos tóxicos. Em caso de Derrame: pode reagir quimicamente com outros produtos originando vapores tóxicos. NÃO Utilizar Pó Quimico nem CO2.',
    leak: {
      epi: 'SEM EPI Para Zona Quente // EQUIPA INTERVENÇÃO- EPI + ARICA // EQUIPA DE PROTEÇÃO- EPI + ARICA + LINHA DE DESCONTAMINAÇÃO DE EMERGÊNCIA',
      isolation: 'Criar Corredor Entrada // Criar Corredor Redutor de Contaminação',
      action: 'Solicitar RSB para o T.O',
      decontamination: 'Aplicar quantidade abundante de água',
      range: 100
    },
    fire: {
      epi: 'EQUIPA INTERVENÇÃO- EPI + ARICA // EQUIPA DE PROTEÇÃO- EPI + ARICA + Linha de Descontaminação Emergência',
      isolation: 'Criar Corredor Entrada // Criar Corredor Redutor de Contaminação',
      action: 'Manter distância. Aplicação de monitores de combate e cortina de proteção. Solicitar RSB. Material Reage Violentamente com Água. Garantir Contenção da Água.',
      range: 800
    }
  },
  {
    name: 'Ácido Clorídrico',
    guideNr: 157,
    dangerCode: '',
    numberUN: '1798',
    warningMsg: 'Reage Com Água ou Ar Húmido: Liberta gases tóxicos, corrosivos ou inflamáveis. Em caso de Incêndio: produz gases irritantes, corrosivos e tóxicos. Em case de Derrame: reage com o metal libertando hidrogénio.',
    leak: {
      epi: 'SEM EPI Para Zona Quente // EQUIPA INTERVENÇÃO- EPI + ARICA // EQUIPA DE PROTEÇÃO- EPI + ARICA + LINHA DE DESCONTAMINAÇÃO DE EMERGÊNCIA',
      isolation: 'Criar Corredor Entrada // Criar Corredor Redutor de Contaminação',
      action: 'Solicitar RSB para o T.O // Agulheta de cortina de proteção // Linha de água de proteção // Aplicação de Areia se possível.',
      decontamination: 'Havendo necessidade de descontaminar aplicar quantidades abundantes de água, removendo roupas.',
      range: 100
    },
    fire: {
      epi: 'EQUIPA INTERVENÇÃO- EPI + ARICA // EQUIPA DE PROTEÇÃO- EPI + ARICA + Linha de Descontaminação Emergência',
      isolation: 'Criar Corredor Entrada // Criar Corredor Redutor de Contaminação',
      action: 'Manter distância. Aplicação de monitores de combate e cortina de proteção. Solicitar RSB. Material Reage com Água. Garantir Contenção da Água. CO2 (pequenos incêndios) Água pulverizada à distância.',
      range: 800
    }
  },
  {
    name: 'Ácido Clorídrico',
    guideNr: 157,
    dangerCode: '',
    numberUN: '1789',
    warningMsg: 'Reage Com Água ou Ar Húmido: Liberta gases tóxicos, corrosivos ou inflamáveis. Em caso de Incêndio: produz gases irritantes, corrosivos e tóxicos. Em case de Derrame: reage com o metal libertando hidrogénio.',
    leak: {
      epi: 'SEM EPI Para Zona Quente // EQUIPA INTERVENÇÃO- EPI + ARICA // EQUIPA DE PROTEÇÃO- EPI + ARICA + LINHA DE DESCONTAMINAÇÃO DE EMERGÊNCIA',
      isolation: 'Criar Corredor Entrada // Criar Corredor Redutor de Contaminação',
      action: 'Solicitar RSB para o T.O // Agulheta de cortina de proteção // Linha de água de proteção // Aplicação de Areia se possível.',
      decontamination: 'Havendo necessidade de descontaminar aplicar quantidades abundantes de água, removendo roupas.',
      range: 100
    },
    fire: {
      epi: 'EQUIPA INTERVENÇÃO- EPI + ARICA // EQUIPA DE PROTEÇÃO- EPI + ARICA + Linha de Descontaminação Emergência',
      isolation: 'Criar Corredor Entrada // Criar Corredor Redutor de Contaminação',
      action: 'Manter distância. Aplicação de monitores de combate e cortina de proteção. Solicitar RSB. Material Reage com Água. Garantir Contenção da Água. CO2 (pequenos incêndios) Água pulverizada à distância.',
      range: 800
    }
  },
]

