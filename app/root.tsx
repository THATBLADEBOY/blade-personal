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
import { Footer } from "./components/Footer";
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
      <body>
        <div className="fixed inset-0 bg-circuit-board" aria-hidden="true" />
        {/* defining the makes content width and layout */}
        <NavigationBar />
        <div className="relative min-h-screen max-w-7xl py-24 mx-auto px-4 sm:px-6 lg:px-8 bg-black">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <Footer />
        </div>
      </body>
    </html>
  );
}
