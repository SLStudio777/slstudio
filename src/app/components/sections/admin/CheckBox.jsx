import { Check, X } from "lucide-react";

export default function CheckBox({value}) {
    return (
        <div>
            {value ? (
                <div
                    className="
                        w-8 h-8 rounded-lg
                        bg-white/5
                        text-white/80
                        flex items-center justify-center
                    "
                >
                    <Check size={16} />
                </div>
            ) : (
                <div
                    className="
                        w-8 h-8 rounded-lg
                        bg-white/5
                        text-white/50
                        flex items-center justify-center
                    "
                >
                    <X size={16} />
                </div>
            )}
        </div>
    )
}