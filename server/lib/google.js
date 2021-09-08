import { google } from 'googleapis';

const { OAuth2 } = google.auth;
export const client = new OAuth2(process.env.GOOGLE_CLIENT_ID);
