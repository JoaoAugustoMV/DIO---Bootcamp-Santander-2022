import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { FormsModule } from '@angular/forms' 
import { CommonModule } from "@angular/common";

import { StarModule } from "../shared/component/star/star.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";



@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        
    ],
    imports: [
        FormsModule,
        CommonModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
                // path: 'courses' = http://localhost:4200//course
                // component: CourseListComponent = Linka o path com o Componente
              },
              {
                path: 'courses/info/:id', component: CourseInfoComponent
              },
        ])
    ]
})
export class CourseModule{

}