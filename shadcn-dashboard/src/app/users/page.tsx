"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone, Search } from "lucide-react";
import { users } from "@/data/users";

type BadgeVariant = "default" | "secondary" | "outline" | "destructive";

const getRoleBadgeVariant = (role: string): BadgeVariant => {
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
  const [searchQuery, setSearchQuery] = useState("");

  // Filter users based on search query
  const filteredUsers = users.filter((user) => {
    const query = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.role.toLowerCase().includes(query) ||
      user.location.toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8 px-4 py-4 bg-secondary rounded-md flex items-center gap-8">
        <h1 className="font-semibold text-xl">All Users</h1>
        <div className="relative w-2/3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search users by name, email, role, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-primary-foreground"
          />
        </div>
      </div>

      {/* Search Bar */}

      {/* Users Grid */}
      {filteredUsers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {filteredUsers.map((user) => (
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
                    <CardTitle className="text-lg truncate">
                      {user.name}
                    </CardTitle>
                    <Badge
                      variant={getRoleBadgeVariant(user.role)}
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
                <Link href={`/users/${user.id}`} className="w-full">
                  <Button
                    variant="outline"
                    className="w-full hover:cursor-pointer"
                  >
                    View Profile
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <div className="bg-primary-foreground rounded-full p-6 mb-4">
            <Search className="size-12 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No users found</h3>
          <p className="text-muted-foreground text-center max-w-md">
            We couldn&apos;t find any users matching &quot;{searchQuery}&quot;.
            Try searching with a different name, email, role, or location.
          </p>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
