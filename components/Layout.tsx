import Head from "next/head";
import Navbar from "./Navbar";
import React from "react";
import { ReactNode } from "react";

interface LayoutProps {
    title?: string;
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title = "Memory", children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous"
                ></link>
            </Head>
            <Navbar />
            <main className="container">{children}</main>
        </>
    );
};

export default Layout;
