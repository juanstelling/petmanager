export interface Pet {
  id: number;
  category?: Category;
  name: string;
  photoUrls?: string[];
  tags?: any;
  status: string;
}

export interface Category {
  id: number;
  name?: string;
}


