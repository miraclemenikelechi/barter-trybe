export default function Component() {
    return (
        <main className="dashboard-charts">
            <section className="dashboard-charts__top">
                <div>
                    <aside>
                        <h3>General Summary</h3>
                        <span>dropdown component</span>
                    </aside>

                    <ul>
                        {[].map(function (value, index) {
                            return <li key={index}>{value}</li>;
                        })}
                    </ul>
                </div>
                <div></div>
            </section>

            <section className="dashboard-charts__center"></section>

            <section className="dashboard-charts__bottom"></section>
        </main>
    );
}
