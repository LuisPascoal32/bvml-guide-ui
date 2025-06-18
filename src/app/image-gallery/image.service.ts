export interface Image {
  title: string;
  path: string;
}

export interface ImageGroup {
  label: string;
  route: string;
  expanded?: boolean;
  images?: Image[];
  children?: ImageGroup[];
}

export const IMAGE_GROUPS: ImageGroup[] = [
  {
    label: 'Pré-Hospitalar',
    route: 'preHospitalar',
    images: [
    ],
  },
  {
    label: 'Urbanos/Industriais',
    route: 'ui',
    expanded: false,
    children: [
      {
        label: 'Equipamento',
        route: 'equipment',
        images: [{ title: 'Câmara Térmica', path: 'assets/ui/equipment/camaraTermica.png' },
                 { title: 'Multi Gás', path: 'assets/ui/equipment/multiGas.png' },
                 { title: 'Multi Gás Alarme', path: 'assets/ui/equipment/multiGasAlarme.png' },
                 { title: 'Multi Gás Valores Ref.', path: 'assets/ui/equipment/multiGasReferencia.png' }
        ],
      },
      {
        label: 'Fuga Gás',
        route: 'gasLeak',
        images: [{ title: 'Fuga Gás (Conduta)', path: 'assets/ui/gasLeak/fugaGasConduta.png' }],
      },
    ],
  },
  {
    label: 'Específicos',
    route: 'specific',
    expanded: false,
    children: [
      {
        label: 'HAZMAT',
        route: 'heavy',
        images: [
          { title: '!!REGRAS!!', path: 'assets/specific/hazmat/hazmatRegras.png' },
          { title: 'Intervenção(1)', path: 'assets/specific/hazmat/intervencao1Hazmat.png' },
          { title: 'Intervenção(2)', path: 'assets/specific/hazmat/intervencao2Hazmat.png' }],
      },
    ],
  },
];
