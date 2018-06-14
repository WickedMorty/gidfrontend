export interface IHouse {
  id: number;
  name: string;
  floor: number;
  deadline: string;
  decoration: string;
  material: string;
  payment: string[];
  bank: string[];
}

export interface IResidential {
  id: number;
  name: string;
  coordinates: string;
  address: string;
  district: string;
  developer: string;
  subway: string;
  subwayMin: number;
  bus: string;
  busMin: number;
  parking: number;
  comfort: string;
  externals: string[];
  internals: string[];
  ecologicals: string[];
  securities: string[];
  accomplishments: string[];
  image: string;
  imageBig: string;
  previewText: string;
  detailText: string;
  form1: string;
  form2: string;
  houses: IHouse[];
  deadlin: string;
  floor: number;
}



