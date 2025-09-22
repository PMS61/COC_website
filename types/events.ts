export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location: string;
  maxParticipants?: number;
  registrationStatus: 'open' | 'closed' | 'upcoming';
  category: 'workshop' | 'hackathon' | 'seminar' | 'competition' | 'other';
  organizer: string;
  imageUrl?: string;
  tags: string[];
  requirements?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Participant {
  id: string;
  eventId: string;
  name: string;
  email: string;
  phone?: string;
  college: string;
  year: string;
  branch: string;
  skills?: string[];
  experience?: string;
  motivation?: string;
  registeredAt: string;
  status: 'registered' | 'confirmed' | 'attended' | 'cancelled';
  teamName?: string;
  teamMembers?: string[];
}

export interface EventFormData {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  maxParticipants: number;
  category: Event['category'];
  tags: string[];
  requirements: string[];
  imageUrl?: string;
}

export interface ParticipantStats {
  total: number;
  confirmed: number;
  attended: number;
  cancelled: number;
}

export interface EventWithStats extends Event {
  participantCount: number;
  stats: ParticipantStats;
}