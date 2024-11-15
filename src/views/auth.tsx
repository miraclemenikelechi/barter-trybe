import { Outlet } from "react-router-dom";

export default function Component() {
    return (
        <section className="authentication__wrapper">
            <div className="authentication__left">a view</div>

            <div className="authentication__right">
                <Outlet />
            </div>
        </section>
    );
}
