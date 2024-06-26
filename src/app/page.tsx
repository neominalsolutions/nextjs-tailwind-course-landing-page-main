// components

// sections
import CourseCard from '@/components/course/course-card';
import Faq from '@/components/home/faq';
import Slider from '@/components/home/slider';
import { Step } from '@/components/home/step';
import CoursesCategories from '../components/course/courses-categories';
import Events from '../components/events/events';
import StudentsFeedback from '../components/home/students-feedback';
import TrustedCompany from '../components/home/trusted-companies';
import OutImpressiveStats from '../components/out-impressive-stats';
import TeamMembers from '@/components/team-members';
import WhyChooseUs from '@/components/home/why-choose-us';

// https://merakiui.com/components/application-ui/sidebar

export default function HomePage({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div>
				<Slider />
			</div>

			<div className="max-w-screen-3xl bg-indfigo-50 border-t border-indigo-100">
				<WhyChooseUs />
			</div>

			{/* <div className="max-w-screen-3xl border-t border-indigo-100">
				<OutImpressiveStats />
			</div> */}

			<div className="max-w-screen-3xl bg-white border-t border-indigo-100">
				<CoursesCategories />
			</div>

			<div className="max-w-screen-3xl bg-white border-t border-indigo-100">
				<CourseCard />
			</div>

			{/* <Cta01 /> */}
			<div className="max-w-screen-3xl bg-white border-t border-indigo-100">
				<TeamMembers />
			</div>

			{/* <div className="max-w-screen-3xl bg-indigo-50 border-t border-indigo-100">
				<Step />
			</div> */}

			<div className="max-w-screen-3xl bg-white border border-indigo-100">
				<Events />
			</div>

			{/* <div className="max-w-screen-3xl bg-gray-50 border border-indigo-100">
				<StudentsFeedback />
			</div> */}

			{/* <div className="max-w-screen-3xl bg-white border-indigo-100">
				<TrustedCompany />
			</div> */}
		</>
	);
}
