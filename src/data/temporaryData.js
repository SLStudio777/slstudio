import { AudioLines, AudioWaveform, Shuffle } from "lucide-react";

export const enhancements = [
    {id: 1, title: "Example 1", file_before: "01-before.mp3", file_after: "01-after.wav"},
    {id: 2, title: "Example 2", file_before: "02-before.mp3", file_after: "02-after.wav"},
    {id: 3, title: "Example 3", file_before: "03-before.mp3", file_after: "03-after.wav"},
    {id: 4, title: "Example 4", file_before: "01-before.mp3", file_after: "01-after.wav"},
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
        description: "From raw multi-tracks to a finished, radio-ready sound. Every element placed, balanced, and polished to compete on any platform.",
        href: "#"
    },
    {
        id: 2,
        icon: AudioLines, 
        title: "Arrangement & Production",
        description: "Your ideas deserve a full arrangement. I add instruments, build dynamics, and create the sonic landscape your music needs.",
        href: "#"
    },
    {
        id: 3,
        icon: AudioWaveform, 
        title: "Sound Enhancement",
        description: "Got a demo or rehearsal recording? I extract the best from what you have and build it into something you'll be proud to share.",
        href: "#"
    },
    {
        id: 4,
        icon: Shuffle, 
        title: "Mixing & Mastering",
        description: "From raw multi-tracks to a finished, radio-ready sound. Every element placed, balanced, and polished to compete on any platform.",
        href: "#"
    },
];
