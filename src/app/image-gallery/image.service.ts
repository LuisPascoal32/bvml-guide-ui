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
    route: 'fires',
    images: [
      { title: 'Class A', path: 'assets/fires/class_A.jpg' },
      { title: 'Class B', path: 'assets/fires/class_B.jpg' },
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
                 { title: 'Multi Gás', path: 'assets/ui/equipment/multiGas.png' }
        ],
      },
    ],
  },
  {
    label: 'Especificos',
    route: 'vehicles',
    expanded: false,
    children: [
      {
        label: 'HAZMAT',
        route: 'heavy',
        images: [{ title: 'h1', path: 'assets/vehicles/heavy/h1.jpg' }],
      },
      { label: '', 
        route: 'light', 
        images: [{ title: 'l1', path: 'assets/vehicles/light/l1.jpg' }]},
    ],
  },
];
