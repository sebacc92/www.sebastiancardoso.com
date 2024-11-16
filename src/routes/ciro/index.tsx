/* eslint-disable qwik/no-use-visible-task */

import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { _ } from 'compiled-i18n';
import { Button } from '~/components/ui';

const AUDIO = '/audios/tadaaa.mp3';

export default component$(() => {
    const audioElementSignal = useSignal<HTMLAudioElement | undefined>();
    const audioPlayButtonSignal = useSignal<HTMLButtonElement | undefined>();
    const audioIsPlayingSignal = useSignal(false);
    useVisibleTask$(({ track }) => {
        track(() => audioElementSignal.value);

        const play = () =>
            audioIsPlayingSignal.value
                ? audioElementSignal.value?.pause()
                : audioElementSignal.value?.play();

        audioPlayButtonSignal.value?.removeEventListener('click', play);
        audioPlayButtonSignal.value?.addEventListener('click', play);

        return () =>
            audioPlayButtonSignal.value?.removeEventListener('click', play);
    });
    return (
        <div class="mt-4 flex justify-center items-center">
            <Button
                class="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 text-2xl rounded-md w-full md:w-[300px] h-28"
                ref={audioPlayButtonSignal}
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
                {_`BOTON CONFETTI`}
            </Button>
            <audio
                class=""
                ref={audioElementSignal}
                src={AUDIO}
                onPlay$={() => (audioIsPlayingSignal.value = true)}
                onPause$={() => (audioIsPlayingSignal.value = false)}
                onEnded$={() => (audioIsPlayingSignal.value = false)}
            />
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Sebastian Cardoso | About me',
};
