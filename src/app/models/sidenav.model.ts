export interface NavItem {
  icon?:string;
  label: string;
  route: string;
  expanded?: boolean;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { 
    icon: 'home',
    label: 'Inicio',
    route: ''
  },
  {
    icon: 'emergency',
    label: 'Pré-Hospitalar',
    route: 'pre-hospitalar',
  },
  { 
    icon: 'apartment',
    label: 'Urbanos',
    route: 'ui',
    expanded: false,
    children: [
      { label: 'Equipamento', route: 'equipment' },
      { label: 'Fugas Gás', route: 'gas-leak' },
    ],
  },
  { 
    icon: 'note_stack',
    label: 'PPI',
    route: 'ppi',
    expanded: false,
    children: [
      { label: 'Silos Leixões', route: 'silos-leixoes' },
      { label: 'IKEA', route: 'ikea' },
      { label: 'Mar Shopping', route: 'marshopping' },
      { label: 'Resende', route: 'resende' },
      { label: 'Pergás', route: 'pergas' },
      { label: 'Padre Ângelo', route: 'padre-angelo' },
    ],
  },
  {
    icon: 'electric_car',
    label: 'Veículos',
    route: 'vehicles',
    expanded: false,
    children: [
      { label: 'Elétricos', route: 'eletric' },
      { label: 'Hidrogénio', route: 'hidro' },
      { label: 'Metro', route: 'metro' },
    ],
  },
  { 
    icon: 'warning',
    label: 'Matérias Perigosas',
    route: 'hazmat',
    expanded: false,
    children: [
      { label: 'Intervenção', route: 'intervention' },
      { label: 'Nr ONU', route: 'onu' },
    ],
  },
];
