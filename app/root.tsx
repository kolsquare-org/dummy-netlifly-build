import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "@remix-run/react";
import PublicEnv from './ui/public-env';

export async function loader() {
  return json({
    ENV: {
      NODE_ENV: process.env.NODE_ENV,
      FROM_GITHUB: process.env.FROM_GITHUB,
      VAR_FROM_GITHUB: process.env.VAR_FROM_GITHUB,
    },
  });
}

export default function App() {
  const { ENV } = useLoaderData<typeof loader>();
  console.log('ENV :>>', ENV);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        {/* Put ENV on window - This is how we hand off the values from the server to the client. Make sure to put this before <Scripts/> */}
        <PublicEnv {...ENV} />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
