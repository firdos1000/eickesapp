import { Routes } from '@angular/router';

export const routes: Routes = [
    {

        path:'',
        pathMatch: 'full',
        loadComponent: () =>{
            return import('./home/home').then( (m) => m.Home)
        },

    },

     {

        path:'todos',
        loadComponent: () =>{
            return import('./todos/todos').then( (m) => m.Todos)
        },

    },
    
            
     {

        path:'videotechnik',
        loadComponent: () =>{
            return import('./videotechnik/videotechnik').then( (m) => m.Videotechnik)
        },

    },

     {

        path:'einbruchschutz',
        loadComponent: () =>{
            return import('./einbruchschutz/einbruchschutz').then( (m) => m.Einbruchschutz)
        },

    },

     {

        path:'markerlight',
        loadComponent: () =>{
            return import('./markerlight/markerlight').then( (m) => m.Markerlight)
        },

    },

     {

        path:'smarthome',
        loadComponent: () =>{
            return import('./smarthome/smarthome').then( (m) => m.Smarthome)
        },

    },

     {

        path:'docklight',
        loadComponent: () =>{
            return import('./docklight/docklight').then( (m) => m.Docklight)
        },

    }
    
];
