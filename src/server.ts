import { env } from './common/config';
import { app } from './app';

app.listen(env.PORT, () =>
  console.log(`App is running on http://localhost:${env.PORT}`)
);
