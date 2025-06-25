export interface HazardousMaterial {
  name: string;
  dangerCode: string;
  numberUN: string;
  evacuationRange: number; // meters
};

export const hazardousMaterials: HazardousMaterial[] = [
  {
    name: 'Chlorine',
    dangerCode: '33',
    numberUN: '1017',
    evacuationRange: 1000
  },
  {
    name: 'Isopropanol (Isopropyl alcohol)',
    dangerCode: '33',
    numberUN: '1219',
    evacuationRange: 1500
  },
  {
    name: 'Radioactive Material (Generic)',
    dangerCode: '33',
    numberUN: '2915',
    evacuationRange: 2000
  },
  {
    name: 'Chlorine',
    dangerCode: '33',
    numberUN: '1017',
    evacuationRange: 1350
  },
  {
    name: 'Chlorine',
    dangerCode: '33',
    numberUN: '1017',
    evacuationRange: 1100
  },
  {
    name: 'Chlorine',
    dangerCode: '33',
    numberUN: '1017',
    evacuationRange: 1050
  }
]
