import { notFound } from "next/navigation";
import CardList from "@/components/CardList";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { Badge as UIBadge } from "@/components/ui/badge";
import {
    Sheet,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppLineChart from "@/components/AppLineChart";
import { users } from "@/data/users";

interface SingleUserPageProps {
    params: {
        username: string;
    };
}

const getBadgeIcon = (color: string) => {
    switch (color) {
        case "blue":
            return <BadgeCheck size={36} className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2" />;
        case "green":
            return <Shield size={36} className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2" />;
        case "yellow":
            return <Candy size={36} className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2" />;
        case "orange":
            return <Citrus size={36} className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2" />;
        default:
            return <BadgeCheck size={36} className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2" />;
    }
};

const SingleUserPage = ({ params }: SingleUserPageProps) => {
    const user = users.find((u) => u.id === params.username);

    if (!user) {
        notFound();
    }

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
                        <BreadcrumbPage>{user.name}</BreadcrumbPage>
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
                        <div className="flex gap-4 mt-4 flex-wrap">
                            {user.badges.map((badge, index) => (
                                <HoverCard key={index}>
                                    <HoverCardTrigger>{getBadgeIcon(badge.color)}</HoverCardTrigger>
                                    <HoverCardContent>
                                        <h1 className="font-bold mb-2">{badge.name}</h1>
                                        <p className="text-sm text-muted-foreground">{badge.description}</p>
                                    </HoverCardContent>
                                </HoverCard>
                            ))}
                        </div>
                    </div>
                    {/* INFORMATION CONTAINER*/}
                    <div className="bg-primary-foreground rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl sm:text-2xl font-semibold">User Information</h1>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button className="hover:cursor-pointer">Edit User</Button>
                                </SheetTrigger>
                                <EditUser />
                            </Sheet>
                        </div>
                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p className="text-sm text-muted-foreground">Profile Completion</p>
                                <Progress value={user.profileCompletion} />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Username:</span>
                                <span>{user.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Email:</span>
                                <span>{user.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Phone:</span>
                                <span>{user.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Location:</span>
                                <span>{user.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Role:</span>
                                <UIBadge>{user.role}</UIBadge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Joined on <span className="font-bold">{new Date(user.joinedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </p>
                        </div>
                    </div>
                    {/* CARD LIST CONTAINER*/}
                    <div className="bg-primary-foreground rounded-lg p-4">
                        <CardList title="Recent Transactions" />
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className="w-full xl:w-2/3 space-y-6">
                    {/* USERCARD CONTAINER*/}
                    <div className="bg-primary-foreground rounded-lg p-4 space-y-2">
                        <div className="flex items-center gap-2">
                            <Avatar className="size-12 rounded-full">
                                <AvatarImage src={user.avatar} alt={user.name} />
                                <AvatarFallback>{user.initials}</AvatarFallback>
                            </Avatar>
                            <h1 className="text-xl font-semibold">{user.name}</h1>
                        </div>
                        <p className="text-sm text-muted-foreground">{user.bio}</p>
                    </div>
                    {/* CHART CONTAINER*/}
                    <div className="bg-primary-foreground rounded-lg p-4">
                        <h1 className="text-xl font-semibold">User Activity</h1>
                        <AppLineChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleUserPage;