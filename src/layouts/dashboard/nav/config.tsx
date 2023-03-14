import {SvgColor} from "../../../components/svg-color/SvgColor";
import {NavItemProps} from "../../../components/nav-section/types";

const icon = (name: string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{width: 1, height: 1}}/>;

const navConfig: NavItemProps[] = [
    {
        title: 'dashboard',
        path: '/dashboard/app',
        icon: icon('ic_analytics'),
    },
    {
        title: 'user',
        path: '/dashboard/user',
        icon: icon('ic_user'),
    },
    {
        title: 'product',
        path: '/dashboard/products',
        icon: icon('ic_cart'),
    },
    {
        title: 'blog',
        path: '/dashboard/blog',
        icon: icon('ic_blog'),
    },
    {
        title: 'mail',
        path: '/dashboard/mail',
        icon: icon('ic_mail'),
    },
    {
        title: 'login',
        path: '/login',
        icon: icon('ic_lock'),
    },
    {
        title: 'Not found',
        path: '/404',
        icon: icon('ic_disabled'),
    },
];

export default navConfig;
