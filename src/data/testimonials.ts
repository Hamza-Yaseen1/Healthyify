export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Marketing Manager",
    rating: 5,
    comment:
      "Healthyify has completely changed my eating habits. The meals are delicious, fresh, and perfectly portioned. I’ve never felt better!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Omar Khan",
    role: "Fitness Coach",
    rating: 5,
    comment:
      "As a trainer, I need high-protein meals that taste great. The Performance Plan is perfect for my clients and myself. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Fatima Ali",
    role: "Working Mom",
    rating: 5,
    comment:
      "Between work and kids, cooking healthy meals was  impossible. Now I just heat and eat. My family loves the food too! Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];