import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

interface ProjectDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { id } = await params;
  const project = projects.find((item) => String(item.id) === id);

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-80"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-8 md:px-10 md:py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <article className="overflow-hidden rounded-[2.25rem] border border-foreground/10 bg-background/80 shadow-2xl backdrop-blur-sm">
          <div className="relative aspect-video w-full bg-neutral-950 md:aspect-[2/1]">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <h1 className="absolute bottom-6 left-6 right-6 text-3xl font-extrabold tracking-tight text-white md:bottom-10 md:left-10 md:right-10 md:text-5xl">
              {project.title}
            </h1>
          </div>

          <div className="p-6 md:p-10">
            <p className="max-w-4xl text-base leading-8 text-muted-foreground md:text-lg">
              {project.subtitle}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              View live demo
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
