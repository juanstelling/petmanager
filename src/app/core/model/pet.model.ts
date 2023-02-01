export interface Pet {
  id: number;
  category?: Category;
  name: string;
  photoUrls?: string[];
  tag?: any;
  status: string;
}

export interface Category {
  id: number;
  name?: string;
}


