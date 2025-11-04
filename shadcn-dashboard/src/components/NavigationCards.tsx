"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const NavigationCards = () => {
  const [userId, setUserId] = useState("");
  const router = useRouter();

  const handleUserNavigation = () => {
    if (userId.trim()) {
      router.push(`/users/${userId.trim()}`);
    } else {
      router.push("/users");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleUserNavigation();
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Payments Card */}
      <Card className="bg-primary-foreground border-0 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="text-xl">Payments</CardTitle>
          <CardDescription>View and manage all payment transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Separator className="mb-4" />
          <p className="text-sm text-muted-foreground mb-4">
            Access the complete list of payment records, filter by status, and view transaction details.
          </p>
          <Link href="/payments">
            <Button className="w-full">
              Go to Payments
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Users Card */}
      <Card className="bg-primary-foreground border-0 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="text-xl">Users</CardTitle>
          <CardDescription>Navigate to user management or view specific user</CardDescription>
        </CardHeader>
        <CardContent>
          <Separator className="mb-4" />
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="userId" className="text-sm">
                User ID (optional)
              </Label>
              <Input
                id="userId"
                placeholder="e.g., user1"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-background"
              />
              <p className="text-xs text-muted-foreground">
                Leave empty to view all users, or enter a user ID to view specific user details.
              </p>
            </div>
            <Button onClick={handleUserNavigation} className="w-full">
              {userId.trim() ? `Go to User: ${userId}` : "Go to Users"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NavigationCards;
