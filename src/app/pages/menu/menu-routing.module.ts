import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MenuPage} from './menu.page';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/menu/main',
        pathMatch: 'full'
    },
    {
        path: '',
        component: MenuPage,
        children: [
            {
                path: 'main',
                loadChildren: () => import('../main/main.module').then(m => m.MainPageModule)
            },
            {
                path: 'category/:catTitle',
                loadChildren: () => import('../category/category.module').then( m => m.CategoryPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MenuPageRoutingModule {
}
