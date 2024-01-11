
import { MyProfile, QueryGetMyProfileArgs } from "appsync";
import { AppSyncResolverHandler } from "aws-lambda/trigger/appsync-resolver";



export const handler: AppSyncResolverHandler<QueryGetMyProfileArgs, MyProfile> = async (_event, _context) => {

    // let secretManager = new SecretsManager({ region: 'eu-west-1"' });
    // const data = await secretManager.getSecretValue({ SecretId: 'DbSecret-gtkXtvrNyTKC' });
    // console.log(`data is: ${JSON.stringify(data)}`);
    //new Client();
    // const data = require('data-api-client')({)

    // const result = await data.query("select * from Persons");
    // console.log(result.records[0]);


    // const newProfile = {...result.records[0],  __typename: 'MyProfile'};
    // console.log(JSON.stringify(newProfile));


    const myProfile: MyProfile = {
        __typename: 'MyProfile',
        id: '1',
        name: 'albertoMock',
        screenName: 'test',
        surname: 'test'
    }

    return myProfile
}
