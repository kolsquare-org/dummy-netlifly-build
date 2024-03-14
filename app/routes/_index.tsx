import type { MetaFunction } from "@remix-run/deno";
import { getPublicEnv } from '~/ui/public-env';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <h3>Show variable received from Github Environemnt</h3>
      <div>
        <span>window.env.NODE_ENV: </span>
        <span>{getPublicEnv("NODE_ENV")}</span>
      </div>
      <div>
        <span>window.env.FROM_GITHUB: </span>
        <span>{getPublicEnv("FROM_GITHUB")}</span>
      </div>
      <div>
        <span>window.env.VAR_FROM_GITHUB: </span>
        <span>{getPublicEnv("VAR_FROM_GITHUB")}</span>
      </div>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
