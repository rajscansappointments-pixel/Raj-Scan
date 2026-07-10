export interface ServiceType {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon?: string;
  benefits?: string[];
  preparation?: string;
}

export interface PackageType {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPrice?: number;
  testsIncluded: string[];
}

export interface DoctorType {
  id: string;
  name: string;
  specialty: string;
  qualifications: string;
  imageUrl?: string;
}
