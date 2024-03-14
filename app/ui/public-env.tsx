declare global {
  interface Window {
    ENV: Props;
  }
}

type Props = {
  NODE_ENV?: string;
  FROM_GITHUB?: string;
  VAR_FROM_GITHUB?: string;
};

export function getPublicEnv<T extends keyof Props>(key: T): Props[T] {
  if (typeof window !== "undefined" && !window.ENV) {
    throw new Error(
      `Missing the <PublicEnv /> component at the root of your app.`
    );
  }

  return typeof window === "undefined" ? process.env[key] : window.ENV[key];
}

function PublicEnv(props: Props) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.ENV = ${JSON.stringify(props)}`,
      }}
    />
  );
}

export default PublicEnv;
