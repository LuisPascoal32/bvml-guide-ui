export interface HazardousMaterial {
  name: string;
  dangerCode: string;
  numberUN: string;
  leakRange: number; // meters
  fireRange: number; // meters
};

export const hazardousMaterials: HazardousMaterial[] = [
  {
    name: 'Chlorine',
    dangerCode: '33',
    numberUN: '1017',
    leakRange: 1000,
    fireRange: 2000
  },
  {
    name: 'Isopropanol (Isopropyl alcohol)',
    dangerCode: '33',
    numberUN: '1219',
    leakRange: 1500,
    fireRange: 3000,
  },
  {
    name: 'Radioactive Material (Generic)',
    dangerCode: '33',
    numberUN: '2915',
    leakRange: 2000,
    fireRange: 4000
  },
  {
    name: 'Chlorine',
    dangerCode: '33',
    numberUN: '1017',
    leakRange: 1350,
    fireRange: 5350
  }
]
