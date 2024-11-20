import { Dispatch, useEffect } from "react";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";

export default function Page() {
    const { setTitle } = useOutletContext<{
        setTitle: Dispatch<string>;
    }>();

    useEffect(() => {
        setTitle("Dashboard");
    }, [setTitle]);

    return (
        <section className="dashboard">
            <header className="dashboard__header">
                <nav className="dashboard__navigation">
                    <NavLink to={"."}>
                        <span>Summary</span>
                    </NavLink>
                    <NavLink to={"charts"}>
                        <span>Charts</span>
                    </NavLink>
                </nav>
            </header>
            {/* <main className="dashboard__main"></main>
            <footer className="dashboard__footer"></footer> */}

            <Outlet />
        </section>
    );
}
