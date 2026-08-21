"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ProjectCardProps } from "@/types/ProjectCardProps";

export default function ProjectCard({
  title,
  description,
  details,
  link,
  header,
}: ProjectCardProps) {
  const [active, setActive] = useState(false);

  const backButtonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (active) {
      backButtonRef.current?.focus();
    }
  }, [active]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="card-container">
      <div className={`card ${active ? "flipped" : ""}`}>
        {/* Frontside */}
        <div className="frontside flex flex-col items-start  bg-coffee">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p>{header}</p>

            <p>{description}</p>
          </div>
          <div className="flex gap-10">
            <button onClick={() => setActive(true)} className="cursor-pointer">
              Läs mer
            </button>
            <Link href={link}>Se demo</Link>
          </div>
        </div>

        {/* Backside */}
        <div
          className="backside flex flex-col items-start"
          aria-hidden={!active}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">Beskrivning</h3>

            <p className="mb-4">
              {details}
            </p>
          </div>

          <button
            onClick={() => setActive(false)}
            className="cursor-pointer"
            tabIndex={active ? 0 : -1}
            ref={backButtonRef}
          >
            Tillbaka
          </button>
        </div>
      </div>
    </div>
  );
}
