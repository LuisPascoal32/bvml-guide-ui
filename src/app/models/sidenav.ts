export interface SidenavItem {
  icon: string;
  label: string;
  description: string;
  route: string;
}

export const SIDENAV_ITEMS: SidenavItem[] = [
  {
    icon: '📋',
    label: 'Procedimentos de emergência',
    description: 'Guias passo-a-passo',
    route: 'procedimentos-de-emergencia'
  },
  {
    icon: '🔧',
    label: 'Equipamento',
    description: 'Info',
    route: 'materias-perigosas'
  },
  {
    icon: '☢️',
    label: 'Matérias Perigosas',
    description: 'Detalhes de segurança',
    route: 'materias-perigosas'
  },
  {
    icon: '🗒️',
    label: 'PPI',
    description: 'Planos Prévios de Intervenção',
    route: 'ppi'
  }
];
