import { useState } from "react";
import { ColumnDef, flexRender, getCoreRowModel, Row, useReactTable } from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { router } from "@inertiajs/react";
import User from "../data/User";
import { UserModel } from "../form/userSchema";
import TopActionBar from "@/components/custom/top-action-bar";


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}


export default function UserDataTable<TData, TValue>({
    columns,
    data
}: DataTableProps<TData, TValue>) {
    const [rowSelection, setRowSelection] = useState({});


    const table = useReactTable({
        data,
        columns,
        enableRowSelection: true,
        enableMultiRowSelection: true,
        enableColumnFilters: true,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        state: {
            rowSelection
        }
    });


    const onSelectRow = (row: Row<TData>) => {
        const user = new User(row.original as UserModel);

        router.visit(`/user/${user.id}`);
    };


    return (
        <main className="w-full">
            <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                    <TopActionBar
                        showCreate
                        createTo="/user/create"
                        showDelete
                    />
                </div>
            </div>

            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder ? null :
                                            flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                      className={`cursor-pointer ${
                                            row.getIsSelected() ? "bg-purple-600 text-white" : ""
                                        }`}
                                    key = {row.id}
                                    onDoubleClick = {() => onSelectRow(row)}
                                    data-state = {row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    <h3>No results</h3>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </main>
    );
}
