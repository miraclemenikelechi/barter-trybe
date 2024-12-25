import { createFileRoute } from "@tanstack/react-router";

import GeneralSummary from "@/components/dashboard/general";
import LowStockTable from "@/components/dashboard/low-stock";
import ReturnRateChart from "@/components/dashboard/return-rates";
import RevenueReportChart from "@/components/dashboard/revenue-report";
import SalesTrendChart from "@/components/dashboard/sales-trend";
import SatisfactionSummary from "@/components/dashboard/satisfaction";
import TopProductsTable from "@/components/dashboard/top-products";

export const Route = createFileRoute("/(app)/_app/dashboard/_layout/charts")({
    component: function Component() {
        return (
            <main className="dashboard-charts">
                <section className="dashboard-charts__top">
                    <GeneralSummary />
                    <SatisfactionSummary />
                </section>

                <section className="dashboard-charts__center">
                    <div>
                        <SalesTrendChart />
                    </div>
                    <div>
                        <RevenueReportChart />
                    </div>
                </section>

                <section className="dashboard-charts__bottom">
                    <div>
                        <ReturnRateChart />
                    </div>
                    <div>
                        <TopProductsTable />
                    </div>
                    <div>
                        <LowStockTable />
                    </div>
                </section>
            </main>
        );
    },
});
