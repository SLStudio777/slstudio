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
        description: "You recorded something. Maybe it's rough, maybe it's almost there — but it doesn't yet sound the way you hear it in your head. I balance every instrument, shape the frequencies, control the dynamics, and master the result so it competes on any platform. Stems, rough mix, or old studio recording — send what you have.",
        href: "/mixing-mastering"
    },
    {
        id: 2,
        icon: AudioLines,
        title: "Arrangement & Production",
        description: "A guitar riff, a voice memo, a rehearsal recording — that's enough to start. I build complete arrangements around your ideas: guitars, bass, keys, drums, strings, any genre. Whether you want to add one instrument or create a full orchestral sound, I work with your vision and bring it to life.",
        href: "/arrangement"
    },
];
