"use client";

import React from "react";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        (<div
            className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
        </div>)
    );
}

const testimonials = [
    {
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
        image:"/assets/service1img1.webp",
        path:"/"
    },
    {
        name: "William Shakespeare",
        title: "Hamlet",
        image:"/assets/service1img1.webp",
        path:"/"
    },
    {
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
        image:"/assets/service1img1.webp",
        path:"/"
    },
    {
        name: "Jane Austen",
        title: "Pride and Prejudice",
        image:"/assets/service1img1.webp",
        path:"/"
    },
    {
        name: "Herman Melville",
      
        image:"/assets/service1img1.webp",
        path:"/"
    },
];
