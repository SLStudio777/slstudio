import { AudioLines, AudioWaveform, Shuffle } from "lucide-react";

export const enhancements = [
    {id: 1, title: "Blues Rock Guitar", file_before: "01-before.mp3", file_after: "01-after.wav"},
    {id: 2, title: "Vocal Session", file_before: "02-before.mp3", file_after: "02-after.wav"},
    {id: 3, title: "Metal Track", file_before: "03-before.mp3", file_after: "03-after.wav"},
    {id: 4, title: "Folk Acoustic", file_before: "04-before.mp3", file_after: "04-after.wav"},
];

export const youTubeData = [
    {id: 1, video_id: "ero2W1c3RSw", title: "Bass Khan", is_active: 1},
    {id: 2, video_id: "YmNj9z6LUj4", title: "Vodogray", is_active: 0},
    {id: 3, video_id: "Vn_pjBZhtFc", title: "In Five Quarters", is_active: 1},
    {id: 4, video_id: "8ye_t-KASXI", title: "Gloomy Gray Lines", is_active: 0},
    {id: 5, video_id: "AqZD8wtfDfM", title: "Jazzy Lo-Fi Chill Beats", is_active: 1},
];

export const servicesData = [
    {
        id: 1,
        icon: Shuffle,
        title: "Mixing & Mastering",
        description: "Your track — balanced, polished and mastered until it sounds the way you hear it in your head and competes on any platform. Stems, rough mix or an old recording: send what you have.",
        href: "/mixing-mastering"
    },
    {
        id: 2,
        icon: AudioLines,
        title: "Arrangement & Production",
        description: "A riff, a voice memo, a rehearsal take — that's enough to start. I build full arrangements around your idea: guitars, bass, keys, drums, strings. Any genre, from one added instrument to a complete production.",
        href: "/arrangement"
    },
];
