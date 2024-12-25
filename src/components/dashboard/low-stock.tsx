import DashboardTable from "@/components/dashboard-table";
import { APP_CONSTANTS } from "@/lib/constants";
import type { IDashboardChartsPageTable } from "@/types";
import { generateTableData } from "@/utils/dashboard-page.utils";

export default function Component() {
    return (
        <DashboardTable className="flex flex-col">
            <DashboardTable.Header href="" title="Low Stock" />
            <DashboardTable.Footer
                columns={
                    APP_CONSTANTS.TABLE_COLUMNS.DASHBOARD as {
                        value: keyof IDashboardChartsPageTable;
                        label: string;
                    }[]
                }
                data={generateTableData(20)}
                sticky="name"
                styles={{
                    name: "!text-red-600 font-medium !text-left",
                    footer: "flex-1 overflow-hidden",
                    price: "!font-semibold",
                }}
            />
        </DashboardTable>
    );
}
