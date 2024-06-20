import { RouteManager } from "../module/route_manager";

export class AppRoutes {
    
    static home = 'me';
    static projects = 'projects';
    static software_languages = 'languages';
    static about_me = 'about_me';

    static get homeToRoute() {
        return '/' + this.home;
    }

    static get projectsToRoute() {
        return '/' + this.projects;
    }

    static get languagesToRoute() {
        return '/' + this.software_languages;
    }

    static get aboutToRoute() {
        return '/' + this.about_me;
    }
}

export const RouteDetails= {
    home : {
        id : 'home',
        content : 'Anasayfa',
        onClick : () => {RouteManager.forwardUrl(AppRoutes.home)}
    },
    projects : {
        id : 'projects',
        content : 'Projeler',
        onClick : () => {RouteManager.forwardUrl(AppRoutes.projects)}
    },
    software_languages : {
        id : 'software_languages',
        content : 'Bilinen Diller',
        onClick : () => {RouteManager.forwardUrl(AppRoutes.software_languages)}
    },
    about_me : {
        id : 'about_me',
        content : 'Hakkımda',
        onClick : () => {RouteManager.forwardUrl(AppRoutes.about_me)}
    }
}