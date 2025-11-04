import CardList from "@/components/CardList";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { BadgeCheck } from "lucide-react";

const SingleUserPage = () => {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Songtao</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/* CONTAINER */}
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/* LEFT SIDE */}
                <div className="w-full xl:w-1/3 space-y-6">
                    {/* USER BADGES CONTAINER*/}
                    <div className="bg-primary-foreground rounded-lg p-4">
                        <h1 className="text-xl s font-semibold">User Badges</h1>
                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger><BadgeCheck size={36} className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2" /></HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">This user has been verified by the platform.</p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    {/* INFORMATION CONTAINER*/}
                    <div className="bg-primary-foreground rounded-lg p-4">
                        Info
                    </div>
                    {/* CARD LIST CONTAINER*/}
                    <div className="bg-primary-foreground rounded-lg p-4">
                        <CardList title="Recent Transactions" />
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className="w-full xl:w-2/3 space-y-6">
                    {/* USERCARD CONTAINER*/}
                    <div className="bg-primary-foreground rounded-lg p-4">
                        User Card
                    </div>
                    {/* CHART CONTAINER*/}
                    <div className="bg-primary-foreground rounded-lg p-4">
                        Chart
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleUserPage;