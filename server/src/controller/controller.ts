import 'reflect-metadata'
import { Get, JsonController, QueryParam } from 'routing-controllers';
import { NoticiesControlller } from '../controller/noticiesController';

const NewNoticiesController = new NoticiesControlller();

@JsonController ()
    export class RouterController {
        @Get('/')
        getNotices(@QueryParam('section') section: string){
           return NewNoticiesController.newsNoticies(section);

    }
}