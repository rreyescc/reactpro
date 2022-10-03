import { lazy, LazyExoticComponent } from 'react'
import { Dashboard } from '../app/pages'

type JsxElement = () => JSX.Element;


interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JsxElement> | JsxElement;
    name: string;
}

const lazyLayout = lazy(() => import(/* webpackChunkName: "LazyHomeLayout" */ '../app/layout/LazyHomeLayout'))
// const lazyHome = lazy( () => import(/* webpackChunkName: "LazyHome" */ '../app/pages/Home') );
// const lazyService = lazy( () => import(/* webpackChunkName: "LazyService" */ '../app/pages/Service') );
// const lazyContact = lazy( () => import(/* webpackChunkName: "LazyContact" */ '../app/pages/Contact') );


export const routes: Route [] = [
    {
        to: '/dashboard',
        path: 'dashboard',
        //Component: Contact2,
        Component: Dashboard,
        name: 'Dashboard'
    },
    {
        to: '/home',
        path: '/home/*',
        //Component: Home2,
        //Component: lazyHome,
        Component: lazyLayout,
        name: 'Home'
    },
    
    // {
    //     to: '/service',
    //     path: 'service',
    //     //Component: Service2,
    //     Component: lazyService,
    //     name: 'Service'
    // },

]