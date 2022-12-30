import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';

const ID = process.env.REACT_APP_AWS_CRED;
const REGION = process.env.REACT_APP_REGION;
const BUCKET = process.env.REACT_APP_BUCKET;
const s3 = new S3Client({
	region: REGION,
	credentials: fromCognitoIdentityPool({
		client: new CognitoIdentityClient({ region: REGION }),
		identityPoolId: ID,
	}),
});

const getAllKeys = async (prefix, keys, setKeys) => {
	try {
		const data = await s3.send(
			new ListObjectsCommand({
				Delimiter: '/',
				Prefix: prefix + '/',
				Bucket: BUCKET,
				Region: REGION,
			})
		);
		let array = data.Contents.reduce((accum, image) => {
			return [...accum, image.Key];
		}, []);
		setKeys({ ...keys, [prefix]: array.slice(1) });
		console.log(array);
	} catch (error) {
		console.error(error);
	}
};

export default getAllKeys;
