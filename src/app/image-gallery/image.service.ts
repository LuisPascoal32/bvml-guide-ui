export interface Image {
  title: string;
  path: string;
}

export interface ImageGroup {
  icon?: string;
  label: string;
  route: string;
  expanded?: boolean;
  images?: Image[];
  children?: ImageGroup[];
}

export const IMAGE_GROUPS: ImageGroup[] = [
  {
    icon: 'assets/emt/emt.ico',
    label: 'Pré-Hospitalar',
    route: 'pre-hospitalar',
    images: [
    ],
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
          { title: 'Câmara Térmica', path: 'assets/ui/equipment/camaraTermica.png' },
          { title: 'Multi Gás', path: 'assets/ui/equipment/multiGas.png' },
          { title: 'Multi Gás Alarme', path: 'assets/ui/equipment/multiGasAlarme.png' },
          { title: 'Multi Gás Valores Ref.', path: 'assets/ui/equipment/multiGasReferencia.png' }
        ],
      },
      {
        label: 'Fugas Gás',
        route: 'gasLeak',
        expanded: false,
        images: [{ title: 'Fuga Gás (Conduta)', path: 'assets/gasLeak/fugaGasConduta.png' }],
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
        ],
      },
      {
        label: 'IKEA',
        route: 'ikea',
        images: [
        ],
      },
      {
        label: 'Mar Shopping',
        route: 'marshopping',
        images: [
        ],
      },
      {
        label: 'Resende',
        route: 'resende',
        images: [
        ],
      },
      {
        label: 'Pergás',
        route: 'pergas',
        images: [
        ],
      },
      {
        label: 'Padre Ângelo',
        route: 'padreangelo',
        images: [
        ],
      }
    ],
  },
  {
    icon: '',
    label: 'Específicos',
    route: 'specific',
    expanded: false,
    children: [
      {
        icon: '',
        label: 'Veículos Elétricos',
        route: 'veiculoseletricos',
        images: [
          { title: 'Baterias Lítio', path: 'assets/specific/eletricvehicles/eletricVehicles.png' },
        ],
      },
      {
        icon: '',
        label: 'HAZMAT',
        route: 'heavy',
        images: [
          { title: '!!REGRAS!!', path: 'assets/specific/hazmat/hazmatRegras.png' },
          { title: 'Intervenção(1)', path: 'assets/specific/hazmat/intervencao1Hazmat.png' },
          { title: 'Intervenção(2)', path: 'assets/specific/hazmat/intervencao2Hazmat.png' }],
      },
      {
        icon: 'assets/hazmat/hazmat.ico',
        label: 'Matérias Perigosas',
        route: 'materias-perigosas'
      }
    ]
  }
];
