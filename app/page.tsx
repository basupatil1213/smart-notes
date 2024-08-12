import Image from "next/image";
import Link from "next/link";
import SignIn from "./customComponents/SignIn";

export default function Home() {
    return (
        <div className="flex-1">
            {/* First view */}
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Take Notes Smarter with Notepad AI
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Effortlessly capture your thoughts, ideas, and insights with our powerful note-taking app. Leverage
                    AI-powered features to organize, analyze, and get answers from your notes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Try It Now
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <Image
                src="/images/logo.png"
                width={600}
                height={800}
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unlock Your Productivity with Notepad AI
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how our smart note-taking app can transform the way you capture, organize, and leverage your
                  ideas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Effortless Note-Taking</h3>
                  <p className="text-muted-foreground">
                    Quickly jot down your thoughts, ideas, and insights with our intuitive note-taking interface.
                    Organize your notes with tags, folders, and search.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">AI-Powered Insights</h3>
                  <p className="text-muted-foreground">
                    Leverage the power of AI to analyze your notes and provide personalized insights, recommendations,
                    and answers to your questions.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Seamless Collaboration</h3>
                  <p className="text-muted-foreground">
                    Easily share your notes with colleagues, clients, or friends, and collaborate in real-time to bring
                    your ideas to life.
                  </p>
                </div>
              </div>
              <Image
                src="/images/logo.png"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

            {/* Second view */}
        </div>
    );
}
