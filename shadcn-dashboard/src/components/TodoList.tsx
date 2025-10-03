"use client"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "./ui/card";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { useState } from "react";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";

const TodoList = () => {

    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);
    return (
        <div className="">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full">
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Select date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => { setDate(date); setOpen(false); }}
                        className="rounded-lg border"
                    />
                </PopoverContent>
            </Popover>
            <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
                <div className="flex flex-col gap-4">
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item-1">
                            </Checkbox>
                            <label htmlFor="item-1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item-1">
                            </Checkbox>
                            <label htmlFor="item-1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item-1">
                            </Checkbox>
                            <label htmlFor="item-1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item-1">
                            </Checkbox>
                            <label htmlFor="item-1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item-1">
                            </Checkbox>
                            <label htmlFor="item-1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item-1">
                            </Checkbox>
                            <label htmlFor="item-1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item-1">
                            </Checkbox>
                            <label htmlFor="item-1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item-1">
                            </Checkbox>
                            <label htmlFor="item-1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor
                            </label>
                        </div>
                    </Card>
                </div>
            </ScrollArea>
        </div>
    );
};

export default TodoList;