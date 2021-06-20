import { env } from './common/config';
import { app } from './app';
import { TryDBConnect } from './common/db';

TryDBConnect(() => {
  app.listen(env.PORT, () =>
    console.log(`App is running on http://localhost:${env.PORT}`)
  );
});
