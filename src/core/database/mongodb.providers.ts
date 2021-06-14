import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(process.env.MONODB_CONN_STR, { useUnifiedTopology: true, useNewUrlParser: true }),
    },
];