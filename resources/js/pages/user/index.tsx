import AppLayout from "@/layouts/app-layout";
import { Head, usePage } from "@inertiajs/react";
import { PageProps as InertiaPageProps } from "@inertiajs/core"
import breadcrumbItems from "@/components/breadcrumb-items";
import UserLayout from "@/layouts/user/layout";
import HeadingSmall from "@/components/heading-small";
import UserDataTable from "./components/user-data-table";
import { UserModel } from "./form/userSchema";
import { columns } from "./components/columns";
import { convertToDataTable } from "@/lib/utils";
import { LaravelPaginator } from "@/types";


interface PageProps extends InertiaPageProps {
    paginator: LaravelPaginator<UserModel>
}


export default function UserGridview() {
    const { paginator } = usePage<PageProps>().props;
    const users: UserModel[] = convertToDataTable<UserModel>(paginator);


    return (
        <AppLayout breadcrumbs={breadcrumbItems}>
            <Head title="User" />

            <UserLayout>
                <section className="w-full max-w-7xl mx-auto">
                    <HeadingSmall title="Users" />

                    <UserDataTable<UserModel, unknown> data={users} columns={columns}  />
                </section>
            </UserLayout>
        </AppLayout>
    )
}
