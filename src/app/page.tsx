// components
import { Navbar, Footer } from '@/components';

// sections
import Hero from './hero';
import OutImpressiveStats from './out-impressive-stats';
import CoursesCategories from './courses-categories';
import ExploreCourses from './explore-courses';
import Testimonial from './testimonial';
import Events from './events';
import StudentsFeedback from './students-feedback';
import TrustedCompany from './trusted-companies';
import CourseDetail from './course-detail';
import Link from 'next/link';

export default function Campaign() {
	return (
		<>
			<Link href={'/course'}>Course Page</Link>
			<Link href={'/course/net-core'}>Course Detail Page</Link>
			{/* <Navbar />
      <Hero />
      <OutImpressiveStats />
      <CoursesCategories />
      <ExploreCourses />
      <Testimonial />
      <Events />
      <StudentsFeedback />
      <TrustedCompany />
      <Footer /> */}
		</>
	);
}
