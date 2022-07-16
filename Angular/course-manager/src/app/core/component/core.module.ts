import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./error404/error404.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
    declarations: [NavBarComponent,  Error404Component],
    exports: [
        NavBarComponent,
       
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: Error404Component
                // path: '**' = quando não for encontrada a rota(URL)
              },
        ]) // end Rotas.forChild
    ] // end imports
}) // end NgModule

export class CoreModule{
    
}