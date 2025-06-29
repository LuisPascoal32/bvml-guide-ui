export interface Image {
  title: string;
  path: string;
}

export interface SubSubject {
  label: string;
  images: Image[];
}

export interface Subject {
  icon?: string;
  label: string;
  route: string;
  expanded?: boolean;
  subSubjects?: SubSubject[];
  subjects?: Subject[];
}

export const IMAGE_GROUPS: Subject[] = [
    {
    icon: '',
    label: 'Inicio',
    route: '',
    subSubjects: [],
  },
  {
    icon: 'assets/emt/emt.ico',
    label: 'Pré-Hospitalar',
    route: 'pre-hospitalar',
    subSubjects: [],
  },
  {
    icon: 'assets/ui/ui.ico',
    label: 'Urbanos',
    route: 'ui',
    expanded: false,
    subjects: [
      {
        label: 'Equipamento',
        route: 'equipment',
        subSubjects: [
          {
            label: 'Camara Térmica',
            images: [
              {
                title: 'Câmara Térmica',
                path: 'assets/ui/equipment/camaraTermica.png',
              },
            ],
          },
          {
            label: 'Multi Gás',
            images: [
              {
                title: 'Multi Gás',
                path: 'assets/ui/equipment/multiGas.png'
              },
              {
                title: 'Multi Gás Alarme',
                path: 'assets/ui/equipment/multiGasAlarme.png',
              },
              {
                title: 'Multi Gás Valores Ref.',
                path: 'assets/ui/equipment/multiGasReferencia.png',
              },
            ],
          },
        ],
      },
      {
        label: 'Fugas Gás',
        route: 'gasLeak',
        expanded: false,
        subSubjects: [
          {
            label: 'Fuga Gás',
            images: [
              {
                title: 'Fuga Gás (Conduta)',
                path: 'assets/gasLeak/fugaGasConduta.png',
              }
            ]
          },
        ],
      },
    ],
  },
  {
    icon: '',
    label: 'PPI',
    route: 'ppi',
    expanded: false,
    subjects: [
      {
        label: 'Silos Leixões',
        route: 'silosleixoes',
        subSubjects: [
          {
            label: 'Warning',
            images: [
              {
                title: 'AVISO!',
                path: 'assets/ppi/silos/silosWarning.png'
              }
            ]
          },
          {
            label: 'Emergências Médicas',
            images: [
              {
                title: 'Emergências Médicas(1)',
                path: 'assets/ppi/silos/silosEmergenciasMedicas1.png',
              },
              {
                title: 'Emergências Médicas(2)',
                path: 'assets/ppi/silos/silosEmergenciasMedicas2.png',
              },
            ]
          },
          {
            label: 'Espaços Confinados',
            images: [
              {
                title: 'Espaços Confinados(1)',
                path: 'assets/ppi/silos/silosEspacosConfinados1.png',
              },
              {
                title: 'Espaços Confinados(2)',
                path: 'assets/ppi/silos/silosEspacosConfinados2.png',
              },
              {
                title: 'Espaços Confinados(3)',
                path: 'assets/ppi/silos/silosEspacosConfinados3.png',
              }
            ]
          },
          {
            label: 'Incêndio Interior',
            images: [
              {
                title: 'Incêndio Interior(1)',
                path: 'assets/ppi/silos/silosIncendioInterior1.png',
              },
              {
                title: 'Incêndio Interior(2)',
                path: 'assets/ppi/silos/silosIncendioInterior2.png',
              }
            ]
          },
          {
            label: 'Incêndio Fosfina',
            images: [
              {
                title: 'Incêndio Fosfina',
                path: 'assets/ppi/silos/silosIncendioFosfina.png',
              }
            ]
          },
        ],
      },
      {
        label: 'IKEA',
        route: 'ikea',
        subSubjects: [],
      },
      {
        label: 'Mar Shopping',
        route: 'marshopping',
        subSubjects: [],
      },
      {
        label: 'Resende',
        route: 'resende',
        subSubjects: [],
      },
      {
        label: 'Pergás',
        route: 'pergas',
        subSubjects: [],
      },
      {
        label: 'Padre Ângelo',
        route: 'padreangelo',
        subSubjects: [],
      },
    ],
  },
  {
    icon: '',
    label: 'Veículos',
    route: 'vehicles',
    expanded: false,
    subjects: [
      {
        icon: '',
        label: 'Elétricos',
        route: 'eletrics',
        subSubjects: [
          {
            label: 'Baterias',
            images: [
              {
                title: 'Baterias Lítio',
                path: 'assets/specific/eletricvehicles/eletricVehicles.png',
              }
            ]
          },

        ],
      },
      
      {
        icon: '',
        label: 'Hidrogénio',
        route: 'hidro',
        subSubjects: [],
      },
      
      {
        icon: '',
        label: 'Metro',
        route: 'metro',
        subSubjects: [],
      },
    ],
  },
  {
    icon: '',
    label: 'Matérias Perigosas',
    route: 'hazmat',
    expanded: false,
    subjects: [
      {
        icon: '',
        label: 'Intervenção',
        route: 'intervention',
        subSubjects: [
          {
            label: 'Warning',
            images: [
              {
                title: '!!REGRAS!!',
                path: 'assets/specific/hazmat/hazmatRegras.png',
              }
            ]
          },
          {
            label: 'Intervenção',
            images: [
              {
                title: 'Intervenção(1)',
                path: 'assets/specific/hazmat/intervencao1Hazmat.png',
              },
              {
                title: 'Intervenção(2)',
                path: 'assets/specific/hazmat/intervencao2Hazmat.png',
              },
            ]
          },

        ],
      },
      {
        icon: 'assets/hazmat/hazmat.ico',
        label: 'Nr ONU',
        route: 'onu',
      },
    ],
  },
];
