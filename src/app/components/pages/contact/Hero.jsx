"use client";
import { useState } from "react";
import { Mail, Send, ArrowUpRight, Loader2 } from "lucide-react";

const TelegramIcon = () => (<svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/></svg>);
const InstagramIcon = () => (<svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>);
const FacebookIcon = () => (<svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>);

const contacts = [
    { href:"https://t.me/serhii_lazariev", icon:<TelegramIcon/>, label:"Telegram", sub:"Fastest response", handle:"@serhii_lazariev", highlight:true },
    { href:"https://www.instagram.com/lazarev_serhii_sl", icon:<InstagramIcon/>, label:"Instagram", sub:null, handle:"@lazarev_serhii_sl", highlight:false },
    { href:"https://www.facebook.com/profile.php?id=100044130441850", icon:<FacebookIcon/>, label:"Facebook", sub:null, handle:"Serhii Lazariev", highlight:false },
    { href:"mailto:serhii@slstudio.pro", icon:<Mail className="w-5 h-5"/>, label:"Email", sub:null, handle:"serhii@slstudio.pro", highlight:false },
];

export default function Hero() {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        const form = e.target;
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.elements['name'].value,
                    email: form.elements['email'].value,
                    service: form.elements['service'].value,
                    message: form.elements['message'].value,
                }),
            });
            if (!res.ok) throw new Error('Send failed');
            setSent(true);
        } catch {
            setError('Something went wrong. Please try again or write directly to Telegram.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="max-w-5xl mx-auto relative">
            <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
                <div style={{position:"absolute",top:"-80px",left:"-120px",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",animation:"pulse 6s ease-in-out infinite"}}/>
                <div style={{position:"absolute",bottom:"0",right:"-80px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",animation:"pulse 8s ease-in-out infinite reverse"}}/>
                <style>{`@keyframes pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.15);opacity:0.6}}`}</style>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                {/* LEFT */}
                <div className="flex flex-col gap-3">
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em]">Get In Touch</span>
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-wide">
                        {"Let's "}<span className="text-gold2">Work.</span>
                    </h1>
                    <p className="text-white/50 text-[15px] leading-relaxed max-w-sm">
                        Send me your track. Tell me what you are going for, and I will tell you what I can do with it.
                    </p>

                    <p className="text-white/25 text-xs uppercase tracking-widest mt-4 mb-1">Connect directly</p>

                    {contacts.map((c,i) => (
                        <a key={i} href={c.href}
                            target={c.href.startsWith("mailto") ? undefined : "_blank"}
                            className="group flex items-center gap-3 p-3.5 rounded-xl transition-all duration-200"
                            style={c.highlight
                                ? {border:"1px solid rgba(201,168,76,0.35)",background:"rgba(201,168,76,0.06)"}
                                : {border:"1px solid rgba(255,255,255,0.05)",background:"rgba(255,255,255,0.02)"}}
                            onMouseEnter={e=>{e.currentTarget.style.border="1px solid rgba(201,168,76,0.5)";e.currentTarget.style.background="rgba(201,168,76,0.08)";e.currentTarget.style.transform="translateX(3px)";}}
                            onMouseLeave={e=>{e.currentTarget.style.border=c.highlight?"1px solid rgba(201,168,76,0.35)":"1px solid rgba(255,255,255,0.05)";e.currentTarget.style.background=c.highlight?"rgba(201,168,76,0.06)":"rgba(255,255,255,0.02)";e.currentTarget.style.transform="translateX(0)";}}
                        >
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:"rgba(201,168,76,0.1)",color:"#C9A84C"}}>{c.icon}</div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <p className="text-white font-medium text-sm">{c.label}</p>
                                    {c.sub && <span className="text-xs px-2 py-0.5 rounded-full" style={{background:"rgba(201,168,76,0.15)",color:"#C9A84C"}}>{c.sub}</span>}
                                </div>
                                <p className="text-white/50 text-xs truncate">{c.handle}</p>
                            </div>
                            <ArrowUpRight className="w-4 h-4 flex-shrink-0 opacity-30 group-hover:opacity-70 transition" style={{color:"#C9A84C"}}/>
                        </a>
                    ))}

                    <div className="p-3.5 rounded-xl" style={{border:"1px solid rgba(255,255,255,0.05)",background:"rgba(255,255,255,0.02)"}}>
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{background:"#C9A84C",boxShadow:"0 0 6px rgba(201,168,76,0.6)",animation:"pulse 2s ease-in-out infinite"}}/>
                            <p className="text-white/40 text-xs uppercase tracking-widest">Response time</p>
                        </div>
                        <p className="text-white/60 text-sm">Usually within 24 hours. Telegram is fastest.</p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-4">
                    <img
                        src="/images/logo-animated.svg"
                        alt="SL Studio"
                        style={{width:"82%",display:"block",mixBlendMode:"lighten"}}
                    />

                    {sent ? (
                        <div className="flex flex-col items-center justify-center gap-4 text-center p-8 rounded-2xl" style={{border:"1px solid rgba(201,168,76,0.2)",background:"rgba(201,168,76,0.04)",minHeight:"320px"}}>
                            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{background:"rgba(201,168,76,0.1)",border:"1px solid rgba(201,168,76,0.3)"}}>
                                <Send className="w-7 h-7" style={{color:"#C9A84C"}}/>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                                <p className="text-white/50 text-sm">I will get back to you within 24 hours.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="rounded-2xl p-6 flex flex-col gap-4" style={{border:"1px solid rgba(255,255,255,0.06)",background:"rgba(255,255,255,0.015)"}}>
                            <p className="text-white/25 text-xs uppercase tracking-widest">Send a message</p>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white/40 text-xs uppercase tracking-widest">Name</label>
                                        <input name="name" type="text" placeholder="John Smith" required className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none transition" style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)"}} onFocus={e=>e.target.style.border="1px solid rgba(201,168,76,0.4)"} onBlur={e=>e.target.style.border="1px solid rgba(255,255,255,0.07)"}/>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white/40 text-xs uppercase tracking-widest">Email</label>
                                        <input name="email" type="email" placeholder="john@email.com" required className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none transition" style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)"}} onFocus={e=>e.target.style.border="1px solid rgba(201,168,76,0.4)"} onBlur={e=>e.target.style.border="1px solid rgba(255,255,255,0.07)"}/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-white/40 text-xs uppercase tracking-widest">Service</label>
                                    <select name="service" required style={{colorScheme:"dark",background:"#1b1b1b",border:"1px solid rgba(255,255,255,0.07)"}} className="rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition" onFocus={e=>e.target.style.border="1px solid rgba(201,168,76,0.4)"} onBlur={e=>e.target.style.border="1px solid rgba(255,255,255,0.07)"}>
                                        <option value="">Select a service...</option>
                                        <option>Mixing and Mastering</option>
                                        <option>Arrangement and Production</option>
                                        <option>Sound Enhancement</option>
                                        <option>Not sure yet</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-white/40 text-xs uppercase tracking-widest">About your project</label>
                                    <textarea name="message" rows={5} placeholder="Genre, what you have recorded, what you are going for..." required className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none transition resize-none" style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)"}} onFocus={e=>e.target.style.border="1px solid rgba(201,168,76,0.4)"} onBlur={e=>e.target.style.border="1px solid rgba(255,255,255,0.07)"}/>
                                </div>

                                {error && (
                                    <p className="text-red-400 text-xs">{error}</p>
                                )}

                                <button type="submit" disabled={loading} className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-black transition hover:opacity-90 disabled:opacity-60" style={{background:"linear-gradient(135deg, #C9A84C 0%, #e8c97a 50%, #C9A84C 100%)",backgroundSize:"200% auto"}} onMouseEnter={e=>!loading&&(e.currentTarget.style.backgroundPosition="right center")} onMouseLeave={e=>e.currentTarget.style.backgroundPosition="left center"}>
                                    {loading ? <><Loader2 size={14} className="animate-spin"/> Sending...</> : <><Send size={14}/> Send Message</>}
                                </button>
                            </form>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}
