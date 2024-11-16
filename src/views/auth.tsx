import { Outlet } from "react-router-dom";

import { Auth_Decoration } from "@/assets/icons";

export default function Component() {
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
}
