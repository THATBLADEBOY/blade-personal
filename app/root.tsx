import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import { NavigationBar } from "./components/NavigationBar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen container mx-auto">
        <div className="fixed inset-0 bg-circuit-board" aria-hidden="true" />
        <NavigationBar />
        <div className="flex-grow flex flex-col w-full justify-center items-center relative mx-auto bg-black">
          <Outlet />
        </div>
        {/* <Footer /> */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
