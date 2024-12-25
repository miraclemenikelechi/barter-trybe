import DashboardTable from "@/components/dashboard-table";
import { APP_CONSTANTS } from "@/lib/constants";
import type { IDashboardChartsPageTable } from "@/types";
import { generateTableData } from "@/utils/dashboard-page.utils";

export default function Component() {
    return (
        <DashboardTable className="flex flex-col">
            <DashboardTable.Header href="" title="Top Products" />
            <DashboardTable.Footer
                columns={
                    APP_CONSTANTS.TABLE_COLUMNS.DASHBOARD as {
                        value: keyof IDashboardChartsPageTable;
                        label: string;
                    }[]
                }
                data={generateTableData(10)}
                sticky="name"
                styles={{
                    footer: "flex-1 overflow-hidden",
                    name: "font-medium !text-[var(--blue--900)] !text-left",
                    price: "!font-semibold",
                }}
            />
        </DashboardTable>
    );
}
