import { RenderErrorPage } from "vite-plugin-ssr";

const names = ["test", "new"];
let com = null;

const prerender = () => {
  const urls = names.map((name) => `/${name}`);
  return urls;
};

const onBeforeRender = async (pageContext) => {
  // const { name } = pageContext.routeParams;
  const name = pageContext.urlPathname.slice(1);
  com = await import("../post/new.md");
  console.log(com, name, pageContext.urlPathname);
  if (!names.includes(name)) {
    const errorInfo = `Unknown name: ${name}.`;
    throw RenderErrorPage({ pageContext: { pageProps: { errorInfo } } });
  }
  const pageProps = { name,
    test:com.html,
  };
  return {
    pageContext: {
      pageProps,
    },
  };
};

export { prerender, onBeforeRender };
export { com };
