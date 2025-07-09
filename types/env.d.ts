import { Browser } from '@playwright/test';
export {};
declare global{
    namespace NodeJS{
        interface ProcessEnv{
            Browser:"chrome" | "fiirefox" | "webkit",
            ENV:"staging" | "prod" | "test",
            BASEURL:string,
            HEAD:"true" | "false"
        }
    }
}