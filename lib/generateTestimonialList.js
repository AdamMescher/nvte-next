import TestimonialCard from "../components/TestimonialCard";

const generateTestimonialList = (testimonials) => testimonials.map(testimonial => <TestimonialCard testimonial={testimonial} />)

export default generateTestimonialList;