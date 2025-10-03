import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "./ui/card";

const TodoList = () => {
    return (
        <div className="">
            Calendar
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