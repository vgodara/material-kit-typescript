import {Navigate, useRoutes} from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import {
    BlogPage,
    DashboardAppPage,
    LoginPage,
    Page404,
    ProductDetailPage,
    ProductsListingPage,
    UserPage,
} from './pages';
import MailLayout from "./layouts/dashboard/mail/MailLayout";
import MailPage from "./pages/MailPage";
import CheckoutPage from "./pages/CheckoutPage";

// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout/>,
            children: [
                {element: <Navigate to="/dashboard/app"/>, index: true},
                {path: 'app', element: <DashboardAppPage/>},
                {path: 'user', element: <UserPage/>},
                {path: 'products', element: <ProductsListingPage/>},
                {path: 'product/:id', element: <ProductDetailPage/>},
                {path: 'blog', element: <BlogPage/>},
                {path: 'checkout' ,element: <CheckoutPage/>},
                {
                    path: 'mail',
                    element: <MailPage/>,
                    children: [
                        {element: <Navigate to="allMail"/>, index: true},
                        {path: 'allMail', element: <MailLayout/>},
                        {path: 'inbox', element: <MailLayout type={'inbox'}/>},
                        {path: 'sent', element: <MailLayout type={'sent'}/>},
                        {path: 'drafts', element: <MailLayout type={'drafts'}/>},
                        {path: 'trash', element: <MailLayout type={'trash'}/>},
                        {path: 'spam', element: <MailLayout type={'spam'}/>},
                        {path: 'important', element: <MailLayout type={'important'}/>},
                        {path: 'starred', element: <MailLayout type={'starred'}/>},
                        {path: 'social', element: <MailLayout type={'social'}/>},
                        {path: 'promotions', element: <MailLayout type={'promotions'}/>},
                        {path: 'forums', element: <MailLayout type={'forums'}/>},
                    ]
                }
            ],
        },
        {
            path: 'login',
            element: <LoginPage/>,
        },
        {
            element: <SimpleLayout/>,
            children: [
                {element: <Navigate to="/dashboard/app"/>, index: true},
                {path: '404', element: <Page404/>},

            ],
        },

    ]);
}
