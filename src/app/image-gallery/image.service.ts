export interface Image {
  title: string;
  path: string;
}

export interface ImageSubGroup {
  label: string;
  images: Image[];
}

export interface ImageGroup {
  icon?: string;
  label: string;
  route: string;
  expanded?: boolean;
  images?: ImageSubGroup[];
  children?: ImageGroup[];
}

export const IMAGE_GROUPS: ImageGroup[] = [
  {
    icon: 'assets/emt/emt.ico',
    label: 'Pré-Hospitalar',
    route: 'pre-hospitalar',
    images: [],
  },
  {
    icon: 'assets/ui/ui.ico',
    label: 'Urbanos',
    route: 'ui',
    expanded: false,
    children: [
      {
        label: 'Equipamento',
        route: 'equipment',
        images: [
          {
            label: 'Camara termica',
            images: [
              {
                title: 'Câmara Térmica',
                path: 'assets/ui/equipment/camaraTermica.png',
              },
            ],
          },
          {
            label: 'Gáses',
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
        images: [
          {
            title: 'Fuga Gás (Conduta)',
            path: 'assets/gasLeak/fugaGasConduta.png',
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
    children: [
      {
        label: 'Silos Leixões',
        route: 'silosleixoes',
        images: [
          { title: 'AVISO!', path: 'assets/ppi/silos/silosWarning.png' },
          {
            title: 'Emergências Médicas(1)',
            path: 'assets/ppi/silos/silosEmergenciasMedicas1.png',
          },
          {
            title: 'Emergências Médicas(2)',
            path: 'assets/ppi/silos/silosEmergenciasMedicas2.png',
          },
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
          },
          {
            title: 'Incêndio Interior(1)',
            path: 'assets/ppi/silos/silosIncendioInterior1.png',
          },
          {
            title: 'Incêndio Interior(2)',
            path: 'assets/ppi/silos/silosIncendioInterior2.png',
          },
          {
            title: 'Incêndio Fosfina',
            path: 'assets/ppi/silos/silosIncendioFosfina.png',
          },
        ],
      },
      {
        label: 'IKEA',
        route: 'ikea',
        images: [],
      },
      {
        label: 'Mar Shopping',
        route: 'marshopping',
        images: [],
      },
      {
        label: 'Resende',
        route: 'resende',
        images: [],
      },
      {
        label: 'Pergás',
        route: 'pergas',
        images: [],
      },
      {
        label: 'Padre Ângelo',
        route: 'padreangelo',
        images: [],
      },
    ],
  },
  {
    icon: '',
    label: 'Veículos',
    route: 'vehicles',
    expanded: false,
    children: [
      {
        icon: '',
        label: 'Elétricos',
        route: 'eletrics',
        images: [
          {
            title: 'Baterias Lítio',
            path: 'assets/specific/eletricvehicles/eletricVehicles.png',
          },
        ],
      },
      {
        icon: '',
        label: 'Hidrogénio',
        route: 'hidro',
        images: [],
      },
      {
        icon: '',
        label: 'Metro',
        route: 'metro',
        images: [],
      },
    ],
  },
  {
    icon: '',
    label: 'Matérias Perigosas',
    route: 'hazmat',
    expanded: false,
    children: [
      {
        icon: '',
        label: 'Intervenção',
        route: 'intervention',
        images: [
          {
            title: '!!REGRAS!!',
            path: 'assets/specific/hazmat/hazmatRegras.png',
          },
          {
            title: 'Intervenção(1)',
            path: 'assets/specific/hazmat/intervencao1Hazmat.png',
          },
          {
            title: 'Intervenção(2)',
            path: 'assets/specific/hazmat/intervencao2Hazmat.png',
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
