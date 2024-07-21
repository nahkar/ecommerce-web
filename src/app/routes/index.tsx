import { Dashboard } from '@/pages/Dashboard';
import { NotFound } from '@/pages/NotFound';
import { Stores } from '@/pages/Stores';
import { Users } from '@/pages/Users';
import {
	Navigate,
	RouterProvider as ReactRouterProvider,
	createBrowserRouter,
} from 'react-router-dom';

import { MainLayout } from '@/app/layouts/MainLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Navigate to="/dashboard" replace />,
			},
			{
				path: '/Dashboard',
				element: <Dashboard />,
			},
			{
				path: '/users',
				element: <Users />,
			},
			{
				path: '/stores',
				element: <Stores />,
			},

			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]);

export const RouterProvider = () => {
	return <ReactRouterProvider router={router} />;
};
