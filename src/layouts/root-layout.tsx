'use client';

import { usePathname } from 'next/navigation';
import AdminLayout from './admin-layout';
import AuthLayout from './auth-layout';
import SiteLayout from './site-layout';

export function MainLayout({ children }: { children: any }) {
	const pathname = usePathname();

	const layout = () => {
		if (pathname.startsWith('/auth')) {
			return <AuthLayout>{children}</AuthLayout>;
		} else if (pathname.startsWith('/admin')) {
			return <AdminLayout>{children}</AdminLayout>;
		} else {
			return <SiteLayout>{children}</SiteLayout>;
		}
	};

	return <>{layout()}</>;
}

export default MainLayout;
