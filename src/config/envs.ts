import 'dotenv/config'
import { get } from 'env-var'


export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    JWT_SEED: get('JWT_SEED').required().asString(),
    INSERT_NOTIFICATION_URL: get('INSERT_NOTIFICATION_URL').required().asString(),
    ACCESS_KEY_ID:get('ACCESS_KEY_ID').required().asString(),
    SECRET_ACCESS_KEY: get('SECRET_ACCESS_KEY').required().asString(),
    REGION: get('REGION').required().asString(),
}