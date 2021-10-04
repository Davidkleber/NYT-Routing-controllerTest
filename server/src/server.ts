import { createExpressServer, Res } from 'routing-controllers';
import { RouterController } from './controller/controller';

const app = createExpressServer({
    cors: true,
    controllers: [RouterController],
});

app.listen(4000, () => console.log("Server is running NY TIMES"));