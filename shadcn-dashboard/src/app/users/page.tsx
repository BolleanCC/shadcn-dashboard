import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

// Fake user data for demo purposes
const users = [
    {
        id: "user1",
        name: "Sarah Johnson",
        email: "sarah.johnson@example.com",
        phone: "+1 234 567 8901",
        location: "New York, NY",
        role: "Admin",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        initials: "SJ"
    },
    {
        id: "user2",
        name: "Michael Chen",
        email: "michael.chen@example.com",
        phone: "+1 234 567 8902",
        location: "San Francisco, CA",
        role: "Developer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
        initials: "MC"
    },
    {
        id: "user3",
        name: "Emily Rodriguez",
        email: "emily.rodriguez@example.com",
        phone: "+1 234 567 8903",
        location: "Austin, TX",
        role: "Designer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
        initials: "ER"
    },
    {
        id: "user4",
        name: "David Thompson",
        email: "david.thompson@example.com",
        phone: "+1 234 567 8904",
        location: "Seattle, WA",
        role: "Manager",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
        initials: "DT"
    },
    {
        id: "user5",
        name: "Lisa Anderson",
        email: "lisa.anderson@example.com",
        phone: "+1 234 567 8905",
        location: "Boston, MA",
        role: "Developer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
        initials: "LA"
    },
    {
        id: "user6",
        name: "James Wilson",
        email: "james.wilson@example.com",
        phone: "+1 234 567 8906",
        location: "Chicago, IL",
        role: "Admin",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
        initials: "JW"
    },
    {
        id: "user7",
        name: "Maria Garcia",
        email: "maria.garcia@example.com",
        phone: "+1 234 567 8907",
        location: "Miami, FL",
        role: "Designer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
        initials: "MG"
    },
    {
        id: "user8",
        name: "Robert Brown",
        email: "robert.brown@example.com",
        phone: "+1 234 567 8908",
        location: "Denver, CO",
        role: "Developer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
        initials: "RB"
    },
    {
        id: "user9",
        name: "Jennifer Lee",
        email: "jennifer.lee@example.com",
        phone: "+1 234 567 8909",
        location: "Portland, OR",
        role: "Manager",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer",
        initials: "JL"
    },
    {
        id: "user10",
        name: "Christopher Martinez",
        email: "chris.martinez@example.com",
        phone: "+1 234 567 8910",
        location: "Phoenix, AZ",
        role: "Developer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Christopher",
        initials: "CM"
    },
    {
        id: "user11",
        name: "Amanda Taylor",
        email: "amanda.taylor@example.com",
        phone: "+1 234 567 8911",
        location: "Nashville, TN",
        role: "Designer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda",
        initials: "AT"
    },
    {
        id: "user12",
        name: "Daniel Kim",
        email: "daniel.kim@example.com",
        phone: "+1 234 567 8912",
        location: "San Diego, CA",
        role: "Admin",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel",
        initials: "DK"
    }
];

const getRoleBadgeVariant = (role: string) => {
    switch (role) {
        case "Admin":
            return "default";
        case "Manager":
            return "secondary";
        case "Developer":
            return "outline";
        case "Designer":
            return "outline";
        default:
            return "outline";
    }
};

const UsersPage = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
                <h1 className="font-semibold text-xl">All Users</h1>
                <p className="text-sm text-muted-foreground mt-1">
                    Browse and manage user profiles. Click on any user to view their details.
                </p>
            </div>

            {/* Users Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                {users.map((user) => (
                    <Card
                        key={user.id}
                        className="bg-primary-foreground border-0 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
                    >
                        <CardHeader className="pb-3">
                            <div className="flex items-start gap-4">
                                <Avatar className="size-14">
                                    <AvatarImage src={user.avatar} alt={user.name} />
                                    <AvatarFallback className="text-sm font-semibold">
                                        {user.initials}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                    <CardTitle className="text-lg truncate">{user.name}</CardTitle>
                                    <Badge
                                        variant={getRoleBadgeVariant(user.role) as any}
                                        className="mt-1"
                                    >
                                        {user.role}
                                    </Badge>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail className="size-4 shrink-0" />
                                <span className="truncate">{user.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Phone className="size-4 shrink-0" />
                                <span>{user.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="size-4 shrink-0" />
                                <span>{user.location}</span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Link href="/users/user1" className="w-full">
                                <Button variant="outline" className="w-full">
                                    View Profile
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default UsersPage;