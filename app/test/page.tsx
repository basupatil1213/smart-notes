"use client";

import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const TestLoader = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
    return (
        <div className="h-[100vh] flex justify-center items-center">
            {isLoading ? (
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-96 w-[80vw] rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div>
            ) : (
                <div>TestLoader</div>
            )}
        </div>
    );
};

export default TestLoader;
