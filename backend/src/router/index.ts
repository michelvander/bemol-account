import { UserController } from '../controllers/UserController'
import { Router } from 'express';
const routes = Router();

routes.post('/user/create', new UserController().create);
routes.get('/user/getall', new UserController().get_all);

export default routes;
