// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://a85c8dd805acbdbf0186523e80884e9e@o4507465855664128.ingest.us.sentry.io/4507465859268608",
  integrations: [
    
  ],
});
