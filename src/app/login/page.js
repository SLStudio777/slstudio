"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Settings } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("admin@slstudio.com");
    // const [password, setPassword] = useState("Blackmore_1979");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleLogin(e) {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!data.success) {
                setError(data.message);
                setLoading(false);
                return;
            }

            router.push("/admin");
        } catch (err) {
            setError("Error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex items-center justify-center text-white mt-20">
            <form
                onSubmit={handleLogin}
                className="w-full max-w-sm p-8 rounded-lg border border-white/10 
                bg-white/5 backdrop-blur-sm flex flex-col gap-4"
            >
                <div className="flex justify-center items-center gap-2">
                    <Settings size={20} />
                    <h1 className="text-xl font-semibold">
                        Settings
                    </h1>
                </div>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 rounded-md bg-white/5 border border-white/10 outline-none focus:border-white/30"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 rounded-md bg-white/5 border border-white/10 outline-none focus:border-white/30"
                />

                {error && (
                    <p className="text-red-400 text-sm">
                        {error}
                    </p>
                )}

                <button
                    disabled={loading}
                    className="p-2.5 rounded-md bg-white/10 hover:bg-white/20 transition disabled:opacity-50"
                >
                    {loading ? "Logging..." : "Login"}
                </button>
            </form>
        </div>
    )
}