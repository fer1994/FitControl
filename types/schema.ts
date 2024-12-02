export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'TRAINER' | 'CLIENT';
  createdAt: Date;
  updatedAt: Date;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  id: string;
  amount: number;
  date: Date;
  clientId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Turn {
  id: string;
  date: Date;
  clientId: string;
  classId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  clientId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Class {
  id: string;
  name: string;
  description: string;
  instructor: string;
  schedule: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Routine {
  id: string;
  name: string;
  description: string;
  exercises: Exercise[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  weight?: number;
}

