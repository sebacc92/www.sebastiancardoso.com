import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { _ } from 'compiled-i18n';
import ImgYo from '~/media/yo.jpg?jsx'; 
import { Badge, Button } from '~/components/ui';

export const Hero = component$(() => {
    return (
        <div>
            <div class="max-w-6xl mx-auto grid md:grid-cols-10 gap-4 items-center">
                <div class="md:col-span-4 relative aspect-square w-full max-w-sm mx-auto">
                    <ImgYo
                        alt={_`Profile photo`}
                        class="rounded-lg object-cover"
                    />
                </div>
                <div class="md:col-span-6 space-y-6">
                    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        {_`Hi!`}<div class="inline-block origin-[70%_70%] animate-wave">👋</div>{_`I\'m Sebastian Cardoso`}
                    </h1>
                    <p class="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
                        {_`I develop software for build web apps focused on performance and user experience.`}
                    </p>
                    <div class="w-12 h-1 bg-green-400" />
                    <div class="space-y-4 text-gray-600 dark:text-gray-400">
                        <p class="text-lg">
                            {_`I\'m a Full-stack JavaScript Developer from 🇺🇾 Uruguay living in 🇦🇷 Argentina.`}
                        </p>
                        <div class="space-x-2">
                            <Badge look="secondary">
                                {_`+5 years of experience`}
                            </Badge>
                            <span>writing software with <Badge class="ml-1 bg-yellow-300">Javascript</Badge></span>
                        </div>
                        <div class="space-x-2">
                            Currently writing software with:
                            <Badge class="ml-1 bg-violet-400">
                                Qwik
                            </Badge>
                            <Badge class="ml-1 bg-green-400">
                                FastAPI
                            </Badge>
                        </div>
                    </div>
                    <div class="flex gap-4 text-zinc-400">
                        <Link href="#" class="hover:text-white transition-colors">
                            {/* <Twitter class="w-6 h-6" /> */}
                            <span class="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" class="hover:text-white transition-colors">
                            {/* <Twitch class="w-6 h-6" /> */}
                            <span class="sr-only">Twitch</span>
                        </Link>
                        <Link href="#" class="hover:text-white transition-colors">
                            {/* <Youtube class="w-6 h-6" /> */}
                            <span class="sr-only">YouTube</span>
                        </Link>
                        <Link href="#" class="hover:text-white transition-colors">
                            {/* <Instagram class="w-6 h-6" /> */}
                            <span class="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" class="hover:text-white transition-colors">
                            {/* <Linkedin class="w-6 h-6" /> */}
                            <span class="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="#" class="hover:text-white transition-colors">
                            {/* <Facebook class="w-6 h-6" /> */}
                            <span class="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" class="hover:text-white transition-colors">
                            {/* <Github class="w-6 h-6" /> */}
                            <span class="sr-only">GitHub</span>
                        </Link>
                        <Link href="#" class="hover:text-white transition-colors">
                            {/* <Mail class="w-6 h-6" /> */}
                            <span class="sr-only">Email</span>
                        </Link>
                    </div>
                    <Button
                        class="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 text-lg rounded-md w-full md:w-auto"
                        onClick$={async () => {
                            const defaults = {
                                spread: 360,
                                ticks: 70,
                                gravity: 0,
                                decay: 0.95,
                                startVelocity: 30,
                                colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
                                origin: {
                                    x: 0.5,
                                    y: 0.35,
                                },
                            };

                            function loadConfetti() {
                                return new Promise<(opts: any) => void>((resolve, reject) => {
                                    if ((globalThis as any).confetti) {
                                        return resolve((globalThis as any).confetti as any);
                                    }
                                    const script = document.createElement("script");
                                    script.src =
                                        "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
                                    script.onload = () =>
                                        resolve((globalThis as any).confetti as any);
                                    script.onerror = reject;
                                    document.head.appendChild(script);
                                    script.remove();
                                });
                            }

                            const confetti = await loadConfetti();

                            function shoot() {
                                confetti({
                                    ...defaults,
                                    particleCount: 80,
                                    scalar: 1.2,
                                });

                                confetti({
                                    ...defaults,
                                    particleCount: 60,
                                    scalar: 0.75,
                                });
                            }

                            setTimeout(shoot, 0);
                            setTimeout(shoot, 100);
                            setTimeout(shoot, 200);
                            setTimeout(shoot, 300);
                            setTimeout(shoot, 400);
                            setTimeout(shoot, 500);
                        }}
                    >
                        {_`Time to celebrate`}
                    </Button>
                </div>
            </div>
        </div>
    );
});