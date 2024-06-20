import AboutMeScreen from "../../views/about_me/screen/about_me_screen";
import HomeScreen from "../../views/home/screen/home_screen";
import LanguageScreen from "../../views/languages/screen/language_screen";
import ProjectScreen from "../../views/projects/screen/projects_screen";
import { AppRoutes } from "../routes/routes";

export class RouteManager{
    static routeUrl(){
        switch (window.location.pathname) {
            case AppRoutes.homeToRoute:
                return <HomeScreen/>;
        
            case AppRoutes.projectsToRoute:
                return <ProjectScreen/>;

            case AppRoutes.languagesToRoute:
                return <LanguageScreen/>;

            case AppRoutes.aboutToRoute:
                return <AboutMeScreen/>;
            default:
                return <HomeScreen/>;
        }
    }

    /**
     * 
     * @param {AppRoutes} url
     */
    static forwardUrl(url){
        window.location.pathname =  `/${url}`;
    }
}
