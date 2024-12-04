import { component$ } from '@builder.io/qwik';
import { Badge, Button } from '~/components/ui';
import { _ } from 'compiled-i18n';
import { Image } from '@unpic/qwik';

export const Hero = component$(() => {
    return (
        <div>
            <div class="max-w-7xl mx-auto flex flex-col items-center space-y-6 px-4">
                <div class="w-[250px] h-[250px] mx-auto my-4">
                    <Image
                        src="/yo_sin_fondo.png"
                        layout="constrained"
                        width={225}
                        height={225}
                        class="rounded-lg object-cover"
                        alt={_`Foto de perfil de Sebastian Cardoso`}
                    />
                </div>
                <div class="space-y-6 text-center">
                    <h1 class="text-7xl sm:text-4xl md:text-7xl font-bold text-gray-900 dark:text-white">
                        {_`¡Hola!`}<div class="inline-block origin-[70%_70%] animate-wave">👋</div>{_`Soy Sebastian Cardoso`}
                    </h1>
                    <p class="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
                        {_`Desarrollo software para construir aplicaciones web enfocadas en rendimiento y experiencia de usuario.`}
                    </p>
                    <div class="w-12 h-1 bg-green-400 mx-auto" />
                    <div class="space-y-4 text-gray-600 dark:text-gray-400">
                        <p class="text-lg">
                            {_`Soy un Desarrollador JavaScript Full-stack de 🇺🇾 Uruguay viviendo en 🇦🇷 Argentina.`}
                        </p>
                        <div class="space-x-2">
                            <Badge look="secondary">
                                {_`+5 años de experiencia`}
                            </Badge>
                            <span>{_`escribiendo software con`} <Badge class="ml-1 bg-yellow-300 hover:bg-yellow-400">JavaScript</Badge></span>
                        </div>
                        <div class="space-x-2">
                            {_`Actualmente escribiendo software con:`}
                            <Badge class="ml-1 bg-violet-400 hover:bg-violet-500">
                                <a href="https://qwik.dev/" target="_blank">Qwik</a>
                            </Badge>
                            <Badge class="ml-1 bg-green-400 hover:bg-green-500">
                                <a href="https://fastapi.tiangolo.com/" target="_blank">FastAPI</a>
                            </Badge>
                        </div>
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
                        {_`Hora de celebrar`}
                    </Button>
                </div>
            </div>
        </div>
    );
});
