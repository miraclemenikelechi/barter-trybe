import { createFileRoute, Outlet } from "@tanstack/react-router";

import { Auth_Decoration } from "@/assets/icons";

export const Route = createFileRoute("/(authentication)/_authentication")({
    component: function Layout() {
        return (
            <section className="authentication__wrapper">
                <div className="authentication__left">
                    <span>
                        <img src="/logo.png" alt="logo" />
                    </span>

                    <figure>
                        <i>
                            <Auth_Decoration />
                        </i>
                    </figure>
                </div>

                <div className="authentication__right">
                    <Outlet />
                </div>
            </section>
        );
    },
});
