import BlogHeader from "@/app/components/blog/BlogHeader";
import ReadingProgress from "@/app/components/blog/ReadingProgress";


export const metadata = {
    title: "Suno Studio: полный гайд 2026 — таймлайн, Extend, формула G.M.I.V.",
    alternates: {
        canonical: "https://www.slstudio.pro/blog/suno-studio-guide-2026"
    },
    description: "Большинство пользователей Suno просто жмут Generate и надеются на удачу. Этот гайд — про то, как взять контроль: таймлайн, точки Extend, формула G.M.I.V., экспорт стемов.",
    keywords: [
        "suno studio гайд 2026",
        "suno studio как пользоваться",
        "suno extend timestamp",
        "suno gmiv формула промтов",
        "suno стемы экспорт",
    ],
    other: { "article:published_time": "2026-07-02" },
};

function BackToTop() {
    return (
        <div className="flex justify-end pt-2">
            <a href="#top" className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition hover:opacity-80"
                style={{ background: "rgba(201,168,76,0.08)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.15)" }}>
                ↑ Наверх
            </a>
        </div>
    );
}

function ProTip({ children }) {
    return (
        <div className="rounded-xl p-5 flex gap-3 items-start"
            style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)" }}>
            <span className="text-base flex-shrink-0 font-bold" style={{ color: "#C9A84C" }}>★</span>
            <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#C9A84C" }}>Pro Tip</p>
                <p className="text-white/70 text-sm leading-relaxed">{children}</p>
            </div>
        </div>
    );
}

const TOC = [
    { id: "what-is-studio",   label: "Что такое Suno Studio — и чем она НЕ является" },
    { id: "timeline",         label: "Таймлайн — главный инструмент" },
    { id: "extend",           label: "Extend — кнопка, которая делает из идеи песню" },
    { id: "extend-tags",      label: "Английские теги для Extend" },
    { id: "gmiv",             label: "Формула G.M.I.V. — промты как у профи" },
    { id: "cover-replace",    label: "Cover и Replace — точечный ремонт" },
    { id: "mixer",            label: "Микшер — черновик, не финал" },
    { id: "export",           label: "Экспорт — финал с жёсткими правилами" },
];

function TableOfContents() {
    return (
        <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <p className="text-white font-semibold text-sm mb-4">Содержание</p>
            <ol className="flex flex-col gap-2">
                {TOC.map((item, i) => (
                    <li key={item.id} className="flex items-baseline gap-2.5">
                        <span className="text-xs flex-shrink-0 w-5 text-right" style={{ color: "rgba(201,168,76,0.5)" }}>{String(i + 1).padStart(2, "0")}.</span>
                        <a href={`#${item.id}`} className="text-sm text-white/50 hover:text-white transition leading-snug">{item.label}</a>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default function SunoStudioGuidePage() {
    return (
        <div id="top" className="mt-16 mb-20">
            <ReadingProgress />
            <div className="max-w-3xl mx-auto">

                <BlogHeader
                    topic="Уроки"
                    date="2 июля 2026"
                    title="Suno AI Часть 2: Suno Studio — полный гайд для музыкантов"
                    description="Первая часть была про то, как не играть в лотерею с генерацией. Эта — про то, что делать после. Suno Studio — это рабочий этап между кнопкой Generate и открытым DAW. Разбираем его полностью."
                />

                <div className="flex flex-col gap-14 text-white/70 text-[15px] leading-relaxed">

                    {/* Intro */}
                    <div className="rounded-2xl p-6 flex gap-4 items-start" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}>
                        <span className="text-2xl flex-shrink-0">🎚️</span>
                        <div>
                            <p className="text-white font-semibold mb-2">Для кого этот гайд</p>
                            <p className="text-white/60 text-sm leading-relaxed">Для тех, кто уже сделал пару песен в Suno и почувствовал: «вроде круто, но почему я не управляю результатом?». Для музыкантов, которым нужен предсказуемый итог, а не «ну вдруг повезёт». И для всех, кто хоть раз в сердцах закрывал вкладку, потому что нейросеть в десятый раз спела не то. <strong className="text-white">Это лечится.</strong></p>
                        </div>
                    </div>

                    {/* Link to Part 1 */}
                    <div className="rounded-xl p-4 flex gap-3 items-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                        <span className="text-lg flex-shrink-0">📖</span>
                        <p className="text-white/60 text-sm">Не читал первую часть? <a href="/blog/suno-guide-2026-ru" style={{ color: "#C9A84C", textDecoration: "underline" }}>Suno AI: полный гайд — жанры, теги и промпты 2026</a> — начни с неё.</p>
                    </div>

                    <TableOfContents />

                    {/* Три ступени */}
                    <div className="rounded-2xl p-8 flex flex-col gap-3 text-center"
                        style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)", border: "1px solid rgba(201,168,76,0.3)" }}>
                        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(201,168,76,0.6)" }}>Три ступени кухни</p>
                        <div className="flex items-center justify-center gap-3 flex-wrap mt-2">
                            {[
                                { step: "Generate", desc: "набросок идеи" },
                                { step: "Studio", desc: "структура и развитие" },
                                { step: "DAW", desc: "финальное сведение" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="text-white font-semibold text-sm">{item.step}</span>
                                        <span className="text-white/40 text-xs">{item.desc}</span>
                                    </div>
                                    {i < 2 && <span style={{ color: "rgba(201,168,76,0.4)" }}>→</span>}
                                </div>
                            ))}
                        </div>
                        <p className="text-white/50 text-sm mt-2 max-w-md mx-auto">Suno Studio — это осознанный средний этап. Не замена DAW, не продолжение Generate. Своя роль в цепочке.</p>
                    </div>

                    {/* Глава 1 */}
                    <div id="what-is-studio" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>01</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Что такое Suno Studio — и чем она НЕ является</h2>
                        </div>
                        <p>Давайте сразу расставим точки над «ё», чтобы потом не было разочарований. Suno Studio — это не продолжение кнопки Generate и не её замена. Это отдельный рабочий этап, который живёт ровно между «нажал — получил» и «открыл в профессиональном редакторе».</p>

                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-studio-ru-1.png" alt="Studio решает задачу организации и развития идеи" className="w-full object-cover" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { icon: "✏️", step: "Generate", desc: "Создаёт материал. Набросок карандашом на салфетке. Идея, которую нужно развить." },
                                { icon: "🎬", step: "Studio", desc: "Организация и развитие идеи. Режиссёрский стол — видишь структуру, принимаешь решения." },
                                { icon: "🎛️", step: "DAW", desc: "Финал: сведение, мастеринг, чистовая обработка. Финальная книга с редактором." },
                            ].map((item, i) => (
                                <div key={i} className="rounded-xl p-5 flex flex-col gap-2" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                    <span className="text-2xl">{item.icon}</span>
                                    <p className="text-white font-semibold text-sm">{item.step}</p>
                                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p>Studio намеренно не копирует DAW. Здесь нет глубокого редактирования аудио, нет сложного микширования с цепочками эффектов, нет привычного арсенала звукорежиссёра. <strong className="text-white">Это не баг — это фича.</strong> Задача Studio другая: организация и развитие идеи.</p>
                        <p>Без Studio генерация остаётся набором удачных и неудачных попыток. С ней появляется главное: можно останавливаться на удачных моментах, осмысленно продолжать трек и не начинать всё заново каждый раз. Для музыкантов и продюсеров это в первую очередь <strong className="text-white">экономия времени</strong> — в DAW переносишь не сырой случайный результат, а уже выстроенную структуру.</p>
                        <BackToTop />
                    </div>

                    {/* Глава 2 */}
                    <div id="timeline" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>02</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Таймлайн — главный инструмент</h2>
                        </div>
                        <p>В центре Suno Studio находится таймлайн. Не кнопки, не меню — именно он. Это полоса времени, на которой разворачивается вся твоя музыка.</p>

                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-studio-ru-2.png" alt="Таймлайн — главный инструмент контроля в Suno Studio" className="w-full object-cover" />
                        </div>

                        <p>Что ты на нём видишь: форму трека целиком, дорожки и клипы, переходы между частями. <strong className="text-white">Самое важное открытие</strong> — ты перестаёшь воспринимать трек как один сплошной файл. Ты начинаешь видеть набор частей, которые можно анализировать и развивать по отдельности.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="rounded-xl p-5 flex flex-col gap-2" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                                <p className="text-white font-semibold text-sm">🔭 Крупный план</p>
                                <p className="text-white/50 text-sm leading-relaxed">Видишь форму трека целиком, оцениваешь общую логику развития. Работает ли идея вообще?</p>
                            </div>
                            <div className="rounded-xl p-5 flex flex-col gap-2" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <p className="text-white font-semibold text-sm">🔬 Детальный план</p>
                                <p className="text-white/50 text-sm leading-relaxed">Смотришь на переходы, паузы, детали склейки. Где поставить точку входа для Extend?</p>
                            </div>
                        </div>

                        <div className="rounded-xl p-4 flex gap-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                            <span className="text-lg">💡</span>
                            <p className="text-white/60 text-sm leading-relaxed">Используй оба режима. Без крупного плана не понять, работает ли идея в целом. Без детального — не найти правильную точку для продолжения. <strong className="text-white">Как только начинаешь мыслить таймлайном — всё становится предсказуемым.</strong></p>
                        </div>
                        <BackToTop />
                    </div>

                    {/* Глава 3 */}
                    <div id="extend" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>03</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Extend — кнопка, которая делает из идеи песню</h2>
                        </div>
                        <p>Если Create даёт тебе идею, то Extend превращает её в полноценную песню. Это самый мощный инструмент Studio — и самый часто используемый неправильно.</p>

                        <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <p className="text-white font-semibold text-sm">Что слышит нейросеть когда жмёшь Extend</p>
                            <p className="text-white/60 text-sm italic leading-relaxed">«Послушай последние секунды этого фрагмента, пойми контекст и придумай, что должно звучать дальше. Сохрани тональность и BPM.»</p>
                            <p className="text-white/40 text-xs">Звучит просто — но весь дьявол в деталях.</p>
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-studio-ru-3.png" alt="Extend работает с контекстом — главное правило это точка входа" className="w-full object-cover" />
                        </div>

                        <h3 className="text-lg font-semibold text-white">Главное правило: точка входа (Timestamp)</h3>
                        <p>Самая частая ошибка новичков — нажимать Extend где попало. Результат: трек разваливается, меняется голос, сбивается ритм, песня уходит «не туда».</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(255,80,80,0.05)", border: "1px solid rgba(255,80,80,0.15)" }}>
                                <p className="text-white font-semibold text-sm">🚫 Что нельзя делать</p>
                                <ul className="flex flex-col gap-2 text-white/50 text-sm">
                                    <li>→ Ставить точку на середине слова вокалиста — нейросеть выдаст галлюцинации</li>
                                    <li>→ Выбирать случайное место без анализа формы</li>
                                    <li>→ Жать Extend без нового текста в поле Lyrics</li>
                                </ul>
                            </div>
                            <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(100,200,100,0.05)", border: "1px solid rgba(100,200,100,0.15)" }}>
                                <p className="text-white font-semibold text-sm">✅ Как делать правильно</p>
                                <ul className="flex flex-col gap-2 text-white/50 text-sm">
                                    <li>→ Найди конец такта</li>
                                    <li>→ Найди момент, где затухает эхо</li>
                                    <li>→ Найди паузу после припева</li>
                                </ul>
                            </div>
                        </div>

                        <ProTip>Смотри на волну на таймлайне и ищи визуальные спады громкости — это идеальные места для склейки. Там, где тихо — там и режем. Это правило работает в Suno Studio, в DAW и в монтаже вообще.</ProTip>

                        <h3 className="text-lg font-semibold text-white mt-2">Логика конструктора: Part 1 → Part 2</h3>
                        <p>В Studio ты видишь цепочку: Part 1 → Extend → Part 2. Запомни важное правило:</p>

                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-studio-ru-4.png" alt="Studio — это конструктор: не нравится Part 2 — удали и сгенерируй заново" className="w-full object-cover" />
                        </div>

                        <div className="rounded-xl p-5" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)" }}>
                            <p className="text-white font-semibold mb-2">Правило конструктора</p>
                            <p className="text-white/70 text-sm leading-relaxed">Если Part 2 не нравится — не лечи её новыми Extend. Просто удали и сгенерируй заново от конца первой части. Если деталь кривая, мы не шлифуем её бесконечно — мы берём новую.</p>
                        </div>

                        <div className="flex flex-col gap-3 mt-2">
                            <p className="text-white font-medium text-sm">Чек-лист перед нажатием Extend:</p>
                            {[
                                "Выбрана правильная точка — нет обрыва голоса?",
                                "Старый текст в Lyrics удалён и написан новый (или хотя бы тег [Instrumental])?",
                                "Поле Style заполнено уточнениями на английском?",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}>
                                        <span className="text-xs" style={{ color: "#C9A84C" }}>✓</span>
                                    </div>
                                    <p className="text-white/60 text-sm">{item}</p>
                                </div>
                            ))}
                        </div>
                        <BackToTop />
                    </div>

                    {/* Глава 4 */}
                    <div id="extend-tags" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>04</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Английские теги для Extend: управляем развитием</h2>
                        </div>
                        <p>Когда делаешь Extend, поле Style — это не декорация. Именно здесь ты решаешь, куда пойдёт трек. Вот тут начинается настоящая работа.</p>

                        <h3 className="text-lg font-semibold text-white">Управление динамикой</h3>
                        <p>Не пиши «сделай громче» — пиши конкретные термины которые Suno понимает:</p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                                <thead>
                                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                                        <th className="text-left py-3 pr-6 text-white/40 text-xs uppercase tracking-widest font-medium">Тег</th>
                                        <th className="text-left py-3 text-white/40 text-xs uppercase tracking-widest font-medium">Что делает</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { tag: "Build up", desc: "Нарастание напряжения перед дропом" },
                                        { tag: "Explosive Drop", desc: "Мощный взрывной выход (электроника, рок)" },
                                        { tag: "Stripped back", desc: "Убираем лишнее, оставляем минимум (для ямы)" },
                                        { tag: "Full band kicks in", desc: "Вступает вся группа после тихого начала" },
                                    ].map((row, i) => (
                                        <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                                            <td className="py-3 pr-6 font-mono text-sm" style={{ color: "#C9A84C" }}>{row.tag}</td>
                                            <td className="py-3 text-white/60">{row.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-lg font-semibold text-white">Соло и проигрыш</h3>
                        <p>Работаем в связке двух полей — одного мало:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="rounded-xl p-4 flex flex-col gap-2" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                                <p className="text-white font-semibold text-xs uppercase tracking-widest">Поле Lyrics</p>
                                <p className="text-white/60 text-sm">Мета-тег в квадратных скобках: <span className="font-mono" style={{ color: "#C9A84C" }}>[Guitar Solo]</span>, <span className="font-mono" style={{ color: "#C9A84C" }}>[Synthesizer Solo]</span></p>
                            </div>
                            <div className="rounded-xl p-4 flex flex-col gap-2" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                                <p className="text-white font-semibold text-xs uppercase tracking-widest">Поле Style</p>
                                <p className="text-white/60 text-sm">Поддержка описанием: <span className="font-mono text-xs" style={{ color: "#C9A84C" }}>Virtuoso Electric Guitar</span> или <span className="font-mono text-xs" style={{ color: "#C9A84C" }}>High-Pitched Synth Melody</span></p>
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold text-white">Как завершить трек красиво</h3>
                        <p>Suno обожает обрывать песни на полуслове — это известная болячка. Чтобы сделать нормальный конец: выставляй Extend на последние секунды и пиши в поле Style один из тегов:</p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                                <thead>
                                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                                        <th className="text-left py-3 pr-6 text-white/40 text-xs uppercase tracking-widest font-medium">Тег</th>
                                        <th className="text-left py-3 text-white/40 text-xs uppercase tracking-widest font-medium">Эффект</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { tag: "Outro", desc: "Концовка" },
                                        { tag: "Fade out", desc: "Плавное затухание" },
                                        { tag: "Grand Finale", desc: "Эпичная громкая концовка" },
                                        { tag: "End on a single note", desc: "Финальный аккорд" },
                                    ].map((row, i) => (
                                        <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                                            <td className="py-3 pr-6 font-mono text-sm" style={{ color: "#C9A84C" }}>{row.tag}</td>
                                            <td className="py-3 text-white/60">{row.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <BackToTop />
                    </div>

                    {/* Глава 5 */}
                    <div id="gmiv" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>05</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Формула G.M.I.V. — пишем промты как профессионалы</h2>
                        </div>
                        <p>Перед формулой усвоим главный принцип: <strong className="text-white">Suno не интерпретирует твои желания — она работает с тегами.</strong> Пишешь промпт как красивое описание для книги — получаешь случайность. Пишешь как техническое задание — результат становится управляемым.</p>

                        <div className="rounded-xl p-4 flex gap-3 items-start" style={{ background: "rgba(255,100,80,0.05)", border: "1px solid rgba(255,100,80,0.15)" }}>
                            <span className="text-lg flex-shrink-0">🚨</span>
                            <p className="text-white/60 text-sm leading-relaxed"><strong className="text-white">Железное правило:</strong> пиши промты на английском. Даже если песня на русском, поле Style of Music должно быть заполнено по-английски — Suno обучалась именно на таких данных. «Грустная скрипка» — Suno поймёт, но с погрешностью. <span className="font-mono text-xs" style={{ color: "#C9A84C" }}>Melancholic Violin Solo</span> — поймёт идеально точно. Разница как между «принеси что-нибудь поесть» и «принеси капучино на миндальном молоке».</p>
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-studio-ru-5.png" alt="Suno работает с тегами: sad violin — рандом, melancholic violin solo — попадание" className="w-full object-cover" />
                        </div>

                        <div className="rounded-2xl p-6 flex flex-col gap-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                            <p className="text-white font-semibold">Формула G.M.I.V. — четыре компонента</p>

                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <p className="text-xl font-bold" style={{ color: "#C9A84C" }}>G — Genre</p>
                                    <p className="text-white/60 text-sm leading-relaxed">Не пиши просто Rock или Pop. Используй поджанры — они сужают поиск и дают точный результат:</p>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                                            <thead><tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                                                <th className="text-left py-2 pr-4 text-white/30 text-xs">Вместо…</th>
                                                <th className="text-left py-2 text-white/30 text-xs">Пиши…</th>
                                            </tr></thead>
                                            <tbody>
                                                {[
                                                    ["Electronic", "Future Bass / Liquid Drum & Bass"],
                                                    ["Rock", "Math Rock / Pop Punk / Post-Hardcore"],
                                                    ["Hip-Hop", "Boom Bap / Trap / Lo-Fi Hip Hop"],
                                                ].map((row, i) => (
                                                    <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                                                        <td className="py-2 pr-4 text-white/40 text-sm">{row[0]}</td>
                                                        <td className="py-2 font-mono text-xs" style={{ color: "#C9A84C" }}>{row[1]}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="rounded-2xl overflow-hidden border border-white/5">
                                    <img src="/images/suno-studio-ru-6.png" alt="Поджанры — тем точнее жанр, тем стабильнее результат" className="w-full object-cover" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="text-xl font-bold" style={{ color: "#C9A84C" }}>M — Mood</p>
                                    <p className="text-white/60 text-sm leading-relaxed">Новички описывают свои чувства вместо технических дескрипторов. Нейросети не нужно знать что ты чувствуешь — ей нужна атмосфера в музыкальных терминах:</p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                        {[
                                            ["«душевно»", "Ethereal"],
                                            ["«злобно»", "Aggressive"],
                                            ["«радостно»", "Euphoric"],
                                            ["«мрачно»", "Dark"],
                                        ].map((pair, i) => (
                                            <div key={i} className="rounded-lg p-3 flex flex-col gap-1 text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                                <p className="text-white/30 text-xs">{pair[0]}</p>
                                                <p className="text-sm font-mono font-medium" style={{ color: "#C9A84C" }}>{pair[1]}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="text-xl font-bold" style={{ color: "#C9A84C" }}>I — Instruments</p>
                                    <p className="text-white/60 text-sm leading-relaxed">Укажи конкретно, что должно звучать. Это даёт треку «мясо»:</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {[
                                            "Distorted 808 Bass",
                                            "Plucky Synth",
                                            "Acoustic Guitar Fingerstyle",
                                            "Heavy Drums",
                                        ].map((item, i) => (
                                            <div key={i} className="rounded-lg px-3 py-2 font-mono text-sm" style={{ background: "rgba(201,168,76,0.06)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.15)" }}>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="text-xl font-bold" style={{ color: "#C9A84C" }}>V — Vocals</p>
                                    <p className="text-white/60 text-sm leading-relaxed">Если не указать — Suno подберёт случайно. Возьми контроль:</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {[
                                            "Female Whisper",
                                            "Male Gritty Vocals",
                                            "Choir Stacks",
                                            "Autotune Vocals",
                                        ].map((item, i) => (
                                            <div key={i} className="rounded-lg px-3 py-2 font-mono text-sm" style={{ background: "rgba(201,168,76,0.06)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.15)" }}>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(255,80,80,0.05)", border: "1px solid rgba(255,80,80,0.15)" }}>
                                <p className="text-white font-semibold text-sm">✕ Плохой промпт</p>
                                <p className="text-white/50 text-sm italic">«Красивая песня про любовь, пианино, грустно»</p>
                                <p className="text-white/30 text-xs">Это пожелание. Suno угадывает.</p>
                            </div>
                            <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(100,200,100,0.05)", border: "1px solid rgba(100,200,100,0.15)" }}>
                                <p className="text-white font-semibold text-sm">✓ Хороший промпт</p>
                                <p className="text-white/50 text-sm font-mono text-xs leading-relaxed">RnB, Soul, Sentimental Mood, Grand Piano, Minimal Drums, Female Emotional Vocals, Slow Tempo, 80 BPM</p>
                                <p className="text-white/30 text-xs">Это техническое задание. Suno выполняет.</p>
                            </div>
                        </div>

                        <ProTip>Suno лучше реагирует на запятые, чем на длинные предложения. Плохо: «Make a song that sounds like it is raining outside». Хорошо: <span className="font-mono text-xs" style={{ color: "#C9A84C" }}>Rainy atmosphere, Lo-Fi</span>. Коротко, чётко, по делу.</ProTip>
                        <BackToTop />
                    </div>

                    {/* Глава 6 */}
                    <div id="cover-replace" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>06</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Cover и Replace — точечный ремонт без боли</h2>
                        </div>
                        <p>Классный трек, но в середине вокалист проглотил слово или барабаны сбились с ритма. Раньше выход был один — генерировать всё заново. В Studio это чинится точечно. Два инструмента под две разные задачи.</p>

                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-studio-ru-7.png" alt="Cover и Replace — два разных инструмента под две разные задачи" className="w-full object-cover" />
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                                <span className="text-xl flex-shrink-0">🎨</span>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-2">Cover — Вариация</p>
                                    <p className="text-white/50 text-sm leading-relaxed">Используй, когда <strong className="text-white">мелодия нравится, но не нравится звук</strong>. Например: мелодия припева отличная, но сыграна на пианино, а ты хочешь гитару. Выделяем участок, жмём Cover, меняем инструмент в промпте. Suno постарается «натянуть» новый звук на старые ноты.</p>
                                </div>
                            </div>

                            <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderLeft: "3px solid #C9A84C" }}>
                                <span className="text-xl flex-shrink-0">🔧</span>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-2">Replace — Замена контекстом</p>
                                    <p className="text-white/50 text-sm leading-relaxed">Самый мощный инструмент Studio, про который новички часто забывают. Используй, когда <strong className="text-white">не нравится сама музыкальная фраза или есть ошибка</strong>.</p>
                                    <p className="text-white/50 text-sm leading-relaxed mt-2">Как это работает: Suno не слушает то, что внутри выделенного квадрата. Она слушает то, что <strong className="text-white">до</strong>, и то, что <strong className="text-white">после</strong>. И генерирует мост, который идеально склеивает эти две части. Это почти волшебство.</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-studio-ru-8.png" alt="Исправляем только ошибку — не весь трек" className="w-full object-cover" />
                        </div>

                        <h3 className="text-lg font-semibold text-white">Как исправлять галлюцинации</h3>
                        <p>Галлюцинации — это когда Suno спела лишнюю строчку, исковеркала слово или вставила что-то неожиданное. <strong className="text-white">Не выбрасывай трек.</strong> Действуй так:</p>

                        <div className="flex flex-col gap-3">
                            {[
                                { step: "01", title: "Выдели точно тот кусок где ошибка", desc: "Захвати чуть-чуть чистого звука по краям — для контекста." },
                                { step: "02", title: "Нажми Replace Section", desc: "Не просто Replace — именно Replace Section." },
                                { step: "03", title: "В поле Lyrics исправь текст", desc: "Исправь именно ту строчку где ошибка." },
                                { step: "04", title: "Нажми Create", desc: "Нейросеть перепоёт только этот кусок, сохранив мотив и ритм остальной песни." },
                            ].map((item, i) => (
                                <div key={i} className="rounded-xl p-4 flex gap-4 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                    <span className="text-2xl font-bold flex-shrink-0" style={{ color: "rgba(201,168,76,0.25)" }}>{item.step}</span>
                                    <div>
                                        <p className="text-white font-medium text-sm">{item.title}</p>
                                        <p className="text-white/50 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-studio-ru-9.png" alt="Solo Hack — убираем голос и вставляем соло в три шага" className="w-full object-cover" />
                        </div>

                        <h3 className="text-lg font-semibold text-white">Solo Hack: убираем вокал и вставляем инструментал</h3>
                        <p>Профессиональный трюк. Частая ситуация: хочешь соло гитары после припева, а Suno упрямо продолжает петь куплеты. Что делать:</p>

                        <div className="flex flex-col gap-3">
                            {[
                                "Выдели вокальный кусок который хочешь убрать",
                                "Нажми Replace",
                                "В поле Lyrics: [Instrumental Solo] или [Guitar Lick]",
                                "В поле Style уточни: Virtuoso Electric Guitar Solo",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>{i + 1}</div>
                                    <p className="text-white/60 text-sm">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-xl p-4 flex gap-3" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                            <span className="text-lg">🎸</span>
                            <p className="text-white/60 text-sm leading-relaxed"><strong className="text-white">Главное:</strong> в Studio мы перестаём быть генераторами и становимся редакторами. Мы не надеемся на рандом — мы исправляем его ошибки.</p>
                        </div>
                        <BackToTop />
                    </div>

                    {/* Глава 7 */}
                    <div id="mixer" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>07</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Микшер в Studio — черновик, не финал</h2>
                        </div>
                        <p>Многие видят в Studio ручки громкости и думают: «О, сейчас я сведу трек прямо здесь». Сразу снимаем розовые очки: встроенный микшер — это инструмент для проверки идеи, а не финального качества. Но кое-что полезное тут всё-таки сделать можно.</p>

                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-studio-ru-10.png" alt="Центр — для голоса и баса. Ширина появляется когда центр свободен" className="w-full object-cover" />
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                                <span className="text-xl flex-shrink-0">🔊</span>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-2">Золотое правило громкости</p>
                                    <p className="text-white/50 text-sm leading-relaxed">Кажется, что инструментал играет слишком тихо? <strong className="text-white">Не спеши его прибавлять.</strong> Сделай наоборот — убавь громкость вокала. В сведении всегда лучше убавить громкое, чем пытаться перекричать его остальными инструментами. Это правило работает везде — в Studio, в DAW, в жизни.</p>
                                </div>
                            </div>

                            <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                                <span className="text-xl flex-shrink-0">↔️</span>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-2">Панорама: освободи центр</p>
                                    <p className="text-white/50 text-sm leading-relaxed">Центр панорамы — <strong className="text-white">священное место для голоса и баса</strong>. Их не трогаем. А всё остальное — гитары, синты, бэк-вокал — смело разводим по сторонам. Один инструмент влево, другой вправо. Это даёт треку ширину и освобождает место для голоса, чтобы он не тонул в миксе.</p>
                                </div>
                            </div>
                        </div>

                        <ProTip>Микшер в Studio — для ориентации, не для финала. Если что-то звучит неправильно здесь — это сигнал к пересмотру структуры, а не повод тратить час на настройку фейдеров. Финальное звучание рождается в <a href="/mixing-mastering" style={{ color: "#C9A84C", textDecoration: "underline" }}>профессиональном сведении</a>.</ProTip>
                        <BackToTop />
                    </div>

                    {/* Глава 8 */}
                    <div id="export" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>08</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Экспорт — финал с жёсткими правилами</h2>
                        </div>
                        <p>Дошли до финала. Здесь несколько правил, нарушение которых стоит тебе качества — иногда очень дорого.</p>

                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-studio-ru-11.png" alt="Full Song — это уже испечённый пирог. Чистые исходники — чистый результат" className="w-full object-cover" />
                        </div>

                        <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(255,80,80,0.06)", border: "1px solid rgba(255,80,80,0.2)" }}>
                            <p className="text-white font-semibold text-sm">⚠️ Почему нельзя отдавать только Full Song</p>
                            <p className="text-white/60 text-sm leading-relaxed">Представь, что Full Song — это уже испечённый пирог. Звукорежиссёр может попытаться «расклеить» его специальным софтом. Но это лишняя работа, и качество неизбежно падает. Зачем получать грязный результат с артефактами, если можно сразу дать человеку чистые исходники?</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {[
                                {
                                    icon: "📦",
                                    title: "Экспортируй Multitrack (Stems)",
                                    desc: "В меню Export всегда выбирай Multitrack (Stems). Suno выдаст архив, где все инструменты лежат отдельно: Vocals, Drums, Bass, Instruments. Звукорежиссёру отдаём две вещи: Full Song (чтобы услышал идею) и Multitrack Stems (чтобы работать раздельно). Только имея раздельные дорожки профессионал почистит грязь и соберёт из твоего конструктора настоящий трек.",
                                },
                                {
                                    icon: "🎵",
                                    title: "Только WAV — забудь про MP3",
                                    desc: "MP3 — сжатый формат для черновиков и стриминга. В меню Audio выбирай только WAV. Suno и так добавляет цифровой шум в генерацию, а MP3 его только усилит. Нам нужен максимально чистый исходник для дальнейшей работы.",
                                },
                                {
                                    icon: "🥁",
                                    title: "Запомни BPM — перед закрытием браузера",
                                    desc: "Посмотри на BPM в нижней части экрана и запомни эту цифру. Когда откроешь свою DAW, первым делом выстави тот же темп — и только потом загружай файлы. Так ритмическая сетка совпадёт идеально, и Stems лягут точно на место.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="rounded-xl p-5 flex gap-4 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                                    <div>
                                        <p className="text-white font-semibold text-sm mb-2">{item.title}</p>
                                        <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <BackToTop />
                    </div>

                    {/* Итоговая таблица */}
                    <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}>
                        <h3 className="text-white font-semibold text-lg">Итого — шпаргалка</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                                <thead>
                                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                                        <th className="text-left py-3 pr-6 text-white/40 text-xs uppercase tracking-widest font-medium">Задача</th>
                                        <th className="text-left py-3 text-white/40 text-xs uppercase tracking-widest font-medium">Инструмент</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Выстроить структуру трека", "Таймлайн"],
                                        ["Продолжить трек осмысленно", "Extend + правильный Timestamp"],
                                        ["Написать работающий промпт", "Формула G.M.I.V."],
                                        ["Поменять звук, сохранив мелодию", "Cover"],
                                        ["Исправить ошибку точечно", "Replace"],
                                        ["Убрать вокал и вставить соло", "Solo Hack"],
                                        ["Подготовить файлы для DAW", "Stems + WAV + BPM"],
                                    ].map((row, i) => (
                                        <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                                            <td className="py-3 pr-6 text-white/70 text-sm">{row[0]}</td>
                                            <td className="py-3 font-medium text-sm" style={{ color: "#C9A84C" }}>{row[1]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed mt-2 italic">Suno Studio не делает музыку за тебя. Она даёт <strong className="text-white">среду, в которой решаешь ты</strong>. Чем лучше понимаешь, что здесь можно контролировать — тем предсказуемее результат.</p>
                    </div>

                    {/* Финальная мысль */}
                    <div className="flex flex-col gap-1">
                        <div className="w-full h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
                        <div className="rounded-2xl p-8 flex flex-col gap-4 mt-4" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}>
                            <h3 className="text-xl font-semibold text-white">Ты больше не просто пользователь</h3>
                            <p className="text-white/60 text-sm leading-relaxed">Теперь у тебя на диске лежит не файл, а разобранный по косточкам проект. Ты больше не тот, кто жмёт «Создать» и молится на удачу — ты продюсер с готовыми исходниками для серьёзного сведения.</p>
                            <p className="text-white/60 text-sm leading-relaxed">Таймлайн, Extend с правильным Timestamp, формула G.M.I.V., Cover и Replace, стемы в WAV — это не набор функций. Это рабочий процесс, в котором каждый шаг делается осознанно.</p>
                            <p className="text-white font-semibold mt-2 text-lg">Иди делай.</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="rounded-2xl p-8 text-center flex flex-col items-center gap-4"
                        style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}>
                        <h3 className="text-xl font-semibold text-white">Стемы готовы — что дальше?</h3>
                        <p className="text-white/50 text-sm max-w-md">Присылай архив со стемами или Full Song. Доведём до релизного состояния. Первая консультация бесплатно.</p>
                        <a href="/contact" className="inline-flex items-center gap-2 text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition text-sm"
                            style={{ backgroundColor: "#C9A84C" }}>
                            Написать →
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
