import { useState } from "react";
import { Outlet } from "react-router-dom";

import DashboardNavigation from "@/components/ui/dashboard-navigation";

export default function Component() {
    const [title, setTitle] = useState<string | null>(null);

    return (
        <section className="busniess-owner">
            <div className="busniess-owner__wrapper">
                <nav className="busniess-owner__navigation">
                    <span>
                        <img src="/logo.png" alt="logo" />
                    </span>

                    <DashboardNavigation />
                </nav>

                <header className="busniess-owner__header">
                    <h1>{title}</h1>
                    <h2>Owner</h2>
                </header>

                <footer className="busniess-owner__footer">
                    <Outlet context={{ setTitle }} />
                </footer>
            </div>
        </section>
    );
}
