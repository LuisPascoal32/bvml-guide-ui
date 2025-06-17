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
    label: 'Fires',
    route: 'fires',
    images: [
      { title: 'Class A', path: 'assets/fires/class_A.jpg' },
      { title: 'Class B', path: 'assets/fires/class_B.jpg' },
    ],
  },
  {
    label: 'Equipment',
    route: 'equipment',
    images: [
      { title: 'Extinguisher', path: 'assets/equipment/extinguisher.jpg' },
      { title: 'Hose', path: 'assets/equipment/hose.jpg' },
    ],
  },
  {
    label: 'Vehicles',
    route: 'vehicles',
    expanded: false,
    children: [
      {
        label: 'Heavy',
        route: 'heavy',
        images: [{ title: 'h1', path: 'assets/vehicles/heavy/h1.jpg' }],
      },
      { label: 'Light', route: 'light', images: [{ title: 'l1', path: 'assets/vehicles/light/l1.jpg' }]},
    ],
  },
];
