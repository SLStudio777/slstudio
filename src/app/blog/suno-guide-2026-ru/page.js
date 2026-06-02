import BlogHeader from "@/app/components/blog/BlogHeader";
import InteractiveChecklist from "./InteractiveChecklist";

export const metadata = {
    title: "Suno AI: полный гайд для музыкантов — жанры, теги и промпты 2026 | SL Studio",
    alternates: {
        canonical: "https://www.slstudio.pro/blog/suno-guide-2026-ru"
    },
    description: "Хватит играть в рулетку с AI-музыкой. Полный практический гайд по Suno — промпты, структура, теги, настройки и рабочий процесс, который реально работает.",
    keywords: [
        "suno ai гайд 2026",
        "как использовать suno ai",
        "suno ai промпты на русском",
        "suno ai жанры и теги",
        "suno ai для музыкантов",
    ],
    other: { "article:published_time": "2026-04-10" },
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
    { id: "before-we-start",     label: "Сначала честно" },
    { id: "studio-not-magic",    label: "Suno — это студия, а не автомат с музыкой" },
    { id: "interface",           label: "Интерфейс — три вкладки, которые решают всё" },
    { id: "simple-vs-custom",    label: "Simple Mode vs Custom Mode" },
    { id: "writing-prompts",     label: "Как писать промпт, который Suno понимает" },
    { id: "brackets",            label: "Скобки — одно правило, которое спасает" },
    { id: "song-structure",      label: "Структура трека" },
    { id: "sweet-spot",          label: "Weirdness и Style Influence — найди баланс" },
    { id: "stop-generating",     label: "Хватит давить Generate" },
    { id: "extend-cover-upload", label: "Extend, Cover, Upload" },
    { id: "personas",            label: "Personas — твой звук под замком" },
    { id: "demo-machine",        label: "Suno делает демо. Хорошие демо." },
    { id: "v55-update",          label: "Обновление v5.5 — голос, стиль, вкус" },
    { id: "checklist",           label: "Чеклист перед генерацией" },
];

function TableOfContents() {
    return (
        <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <p className="text-white font-semibold text-sm mb-4">Содержание</p>
            <ol className="flex flex-col gap-2">
                {TOC.map((item, i) => (
                    <li key={item.id} className="flex items-baseline gap-2.5">
                        <span className="text-xs flex-shrink-0 w-5 text-right" style={{ color: "rgba(201,168,76,0.5)" }}>{i + 1}.</span>
                        <a href={`#${item.id}`} className="text-sm text-white/50 hover:text-white transition leading-snug">{item.label}</a>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default function SunoGuidePageRu() {
    return (
        <div id="top" className="mt-16 mb-20">
            <div className="max-w-3xl mx-auto">
                <BlogHeader
                    topic="Уроки"
                    date="1 мая 2026"
                    title="Suno AI: полный гайд для музыкантов — жанры, теги и промпты 2026"
                    description="Если твой рабочий процесс сейчас — открыть Suno, написать что попало, нажать Generate и надеяться на чудо — у меня плохие новости. Ты не работаешь с инструментом. Ты играешь в лотерею."
                />
                <div className="flex flex-col gap-14 text-white/70 text-[15px] leading-relaxed">

                    <div className="rounded-2xl p-6 flex gap-4 items-start" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}>
                        <span className="text-2xl flex-shrink-0">🎯</span>
                        <div>
                            <p className="text-white font-semibold mb-2">Почему этот гайд существует</p>
                            <p className="text-white/60 text-sm leading-relaxed">Оригинальный гайд вышел на английском — и сразу несколько музыкантов написали с одним вопросом: «А на русском будет?». Будет. Вот он. Полная версия — про интерфейс, логику, настройки и рабочий процесс. После этого Suno перестанет быть рулеткой и станет нормальным инструментом.</p>
                        </div>
                    </div>

                    <TableOfContents />

                    <div className="rounded-2xl p-8 flex flex-col gap-3 text-center"
                        style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)", border: "1px solid rgba(201,168,76,0.3)" }}>
                        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(201,168,76,0.6)" }}>Главная мысль</p>
                        <p className="text-2xl md:text-3xl font-semibold text-white leading-snug">Suno — не генератор хитов.<br />Suno — инструмент для развития идей.</p>
                        <p className="text-white/50 text-sm max-w-md mx-auto mt-1">Всё остальное в этом гайде вытекает отсюда. Чем быстрее это осядет — тем быстрее пойдут результаты.</p>
                    </div>

                    <div id="before-we-start" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>⚡</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Сначала честно</h2>
                        </div>
                        <p>Есть один разговор, который стоит провести до того, как мы перейдём к настройкам и промптам.</p>
                        <p>Если твой рабочий процесс сейчас выглядит так: открыл → написал что-то → нажал Generate → надеюсь на лучшее — ты не работаешь с инструментом. Ты играешь в игровой автомат, который иногда выдаёт что-то приличное. Ровно достаточно, чтобы ты возвращался. Ровно недостаточно, чтобы ты реально рос.</p>
                        <p><strong className="text-white">Suno не делает музыку вместо тебя.</strong> Он работает с тем, что ты ему даёшь — с идеями, со вкусом, с направлением. Нет входящего материала — на выходе будет технически впечатляющий звуковой суп, который звучит как музыка, но не является ей. Как кофемашина, которая сделает эспрессо из чего угодно — но если засыпать туда сахарный песок, результат будет соответствующим.</p>
                        <p>Этот гайд о том, как перестать гадать и начать управлять. Разберём интерфейс, логику, настройки и рабочий процесс — пошагово, с примерами и без воды.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-ru-1.png" alt="Работа с Suno — это навык" className="w-full object-cover" />
                        </div>
                        <BackToTop />
                    </div>

                    <div id="studio-not-magic" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>1</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Suno — это студия, а не автомат с музыкой</h2>
                        </div>
                        <p>То, что никто не говорит при первом знакомстве с Suno: он выглядит сложно, но устроен как любое рабочее пространство. Тот же принцип, что у DAW в первый день — куча треков, кнопок, индикаторов, которые пугают. Потом понимаешь логику — и всё встаёт на место.</p>
                        <p><strong className="text-white">Ты управляешь. Инструмент слушается.</strong> Просто это не сразу очевидно, потому что интерфейс новый, а результаты скачут — до тех пор, пока не понимаешь, по каким правилам работает система.</p>
                        <p>Типичная ошибка в первые дни: пропустить весь этап знакомства, сразу написать промпт на три абзаца, выкрутить все настройки на максимум и ждать готового релиза. Примерно так же работает идея сесть за рояль первый раз в жизни и сразу попробовать сыграть Рахманинова. Получишь шум. Красивый, многослойный, технически сложный — но шум.</p>
                        <p>Suno становится мощным ровно тогда, когда начинаешь понимать, как он думает, на что реагирует и где его реальные границы. После этого он перестаёт удивлять в плохом смысле и начинает удивлять в хорошем.</p>
                        <div className="rounded-xl p-4 flex gap-3 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                            <span className="text-lg flex-shrink-0">💡</span>
                            <p className="text-white/60 text-sm">Сначала разберись как работает. Потом иди вглубь. Попытка пропустить этот шаг не экономит время — она просто переносит путаницу на более сложный уровень.</p>
                        </div>
                        <BackToTop />
                    </div>

                    <div id="interface" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>2</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Интерфейс — три вкладки, которые решают всё</h2>
                        </div>
                        <p>В Suno есть три основные области. Разберись с ними один раз — и больше никогда не будешь теряться. Плюс перестанешь случайно терять треки, которые тебе понравились.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-ru-2.png" alt="Create и Library в Suno" className="w-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                                <span className="text-xl flex-shrink-0">🎙️</span>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-2">Create — здесь всё начинается</p>
                                    <p className="text-white/50 text-sm leading-relaxed">Место для идей, экспериментов и первых набросков. Думай об этом как о кабинке для записи — не нужно приходить с готовым результатом. Нужно просто знать, куда идёшь.</p>
                                </div>
                            </div>
                            <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                                <span className="text-xl flex-shrink-0">📚</span>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-2">Library — твой личный архив</p>
                                    <p className="text-white/50 text-sm leading-relaxed">Здесь хранится всё, что ты когда-либо сгенерировал. Можно лайкать, дизлайкать, собирать плейлисты. Важный момент: <strong className="text-white">это не публичные лайки</strong>. Никто кроме тебя их не видит. Это система фильтрации.</p>
                                    <div className="mt-3 flex flex-col gap-1.5 p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                                        <p className="text-white/50 text-xs">👍 Лайк — трек остаётся на виду, легко найти</p>
                                        <p className="text-white/50 text-xs">👎 Дизлайк — трек прячется, но не удаляется</p>
                                    </div>
                                    <p className="text-white/50 text-sm mt-3 leading-relaxed">Пользуйся этим без жалости. Library набивается быстро. Кто не фильтрует сразу — потом часами ищет тот единственный трек, который был хорошим. Как папка Downloads, которую ты игнорировал год — а там уже 847 файлов и непонятно что удалять.</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-ru-3.png" alt="Workspace в Suno" className="w-full object-cover" />
                        </div>
                        <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                            <span className="text-xl flex-shrink-0">📁</span>
                            <div>
                                <p className="text-white font-semibold text-sm mb-2">Workspace — папки для проектов</p>
                                <p className="text-white/50 text-sm leading-relaxed">Если делаешь один жанр без серьёзных параллельных проектов — можно не трогать. Но стоит появиться нескольким проектам одновременно — альбом, клиентская работа, YouTube-канал — и без Workspace начинается каша. Думай об этом не как об аккуратности ради аккуратности, а как о свободной голове для музыки. Музыкант, который не может найти свою лучшую идею — всё равно что музыкант, у которого её не было.</p>
                            </div>
                        </div>
                        <BackToTop />
                    </div>

                    <div id="simple-vs-custom" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>3</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Simple Mode vs Custom Mode — классическая ловушка</h2>
                        </div>
                        <p>Открываешь Suno — и сразу видишь два режима. И почти все сразу тянутся к <strong className="text-white">Custom Mode</strong>. Больше опций, больше контроля, выглядит профессиональнее. Сразу виден серьёзный подход.</p>
                        <p>Это ловушка.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-ru-4.png" alt="Simple vs Custom Mode в Suno" className="w-full object-cover" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(100,200,100,0.05)", border: "1px solid rgba(100,200,100,0.15)" }}>
                                <p className="text-white font-semibold text-sm">✅ Simple Mode — начинай здесь</p>
                                <p className="text-white/50 text-sm leading-relaxed">Один запрос, без лишнего. Идеален для момента, когда ты ещё не знаешь точно, чего хочешь. Проверить жанровую идею, поймать настроение, понять — есть ли в этом вообще что-то интересное, прежде чем тратить время на детали.</p>
                                <p className="text-sm mt-1" style={{ color: "#C9A84C" }}>Как музыкант, который наигрывает тему на гитаре, прежде чем садиться за аранжировку. Финальный дубль не пишут первым.</p>
                            </div>
                            <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(255,100,100,0.05)", border: "1px solid rgba(255,100,100,0.15)" }}>
                                <p className="text-white font-semibold text-sm">⚙️ Custom Mode — только после</p>
                                <p className="text-white/50 text-sm leading-relaxed">Для случаев, когда направление уже ясное — жанр, настроение, характер вокала, примерная структура. Проблема: большинство пропускает этап исследования и лезет в Custom Mode, не понимая ещё, чего хочет. Итог — очень конкретные, очень дорогие ошибки.</p>
                                <p className="text-white/30 text-sm mt-1">Больше настроек — больше способов ошибиться точно.</p>
                            </div>
                        </div>
                        <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <p className="text-white/80 text-sm italic leading-relaxed">«Custom Mode не делает результат лучше автоматически. Он просто делает ошибки дороже и конкретнее.»</p>
                        </div>
                        <p>Simple Mode — не упрощённая версия для начинающих. Это инструмент исследования. Большинство хороших треков начинается именно там. Пропустить этот шаг — не сэкономить время, а перенести путаницу на более сложный уровень.</p>
                        <ProTip>На каждый новый проект — первые 5–10 генераций в Simple Mode. Почувствовал, что одна из них попала в точку? Вот тогда открывай Custom Mode. Не раньше.</ProTip>
                        <BackToTop />
                    </div>

                    <div id="writing-prompts" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>4</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Как писать промпт, который Suno понимает</h2>
                        </div>
                        <p>Промпт — это не описание. Это инструкция.</p>
                        <p>Suno не читает между строк. Не угадывает, что ты имел в виду. Работает с тем, что написано — без домыслов, без контекста. Если в промпте есть противоречие — он начнёт импровизировать. А импровизация Suno — это не всегда подарок.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-ru-5.png" alt="Структура промпта в Suno" className="w-full object-cover" />
                        </div>
                        <p>Самая частая ошибка — <strong className="text-white">промпт-салат</strong>: жанр, настроение, ещё один жанр, эпоха, три инструмента, пара эмоций — всё в кучу, без порядка приоритетов. Suno не знает, что здесь главное, и начинает гадать. Когда AI гадает — получаешь что-то технически впечатляющее, звучащее как ничья музыка. Технически правильно. Эмоционально пусто.</p>
                        <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}>
                            <p className="text-white font-semibold text-sm">✅ Рабочая формула</p>
                            <div className="rounded-lg p-3 font-mono text-sm text-center" style={{ background: "rgba(0,0,0,0.3)", color: "#C9A84C" }}>
                                ЖАНР И НАСТРОЕНИЕ → ВОКАЛ → КЛЮЧЕВЫЕ ИНСТРУМЕНТЫ → ЗВУК И АТМОСФЕРА
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed">Сначала территория — потом характер — потом детали. Порядок важен: Suno читает промпт сверху вниз и приоритизирует соответственно. Написал «мягкий джаз» в начале, а «тяжёлые барабаны» в конце — система получает конфликт и решает его по своему усмотрению.</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="text-white/40 text-xs uppercase tracking-widest">Примеры, которые реально работают</p>
                            {[
                                { label: "Блюз-рок", prompt: "Blues rock, raw and emotional, male vocal gritty and soulful,\nelectric guitar, hammond organ, live drums" },
                                { label: "Фанк", prompt: "Funk, groovy and tight, male vocal rhythmic and punchy,\nslap bass, rhythm guitar, brass section" },
                                { label: "Джаз-рок фьюжн", prompt: "Jazz rock fusion, smooth and sophisticated, instrumental,\nelectric piano, fretless bass, brushed drums, saxophone" },
                            ].map((ex, i) => (
                                <div key={i} className="rounded-xl overflow-hidden">
                                    <div className="px-4 py-2 text-xs font-medium" style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}>{ex.label}</div>
                                    <div className="p-4 font-mono text-sm text-white/70" style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.06)", borderTop: "none" }}>
                                        {ex.prompt.replace(/\n/g, "\n")}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p>Заметь, чего нет в этих промптах: пять прилагательных на каждое слово, история жанра, и список всех инструментов, которые ты когда-либо слышал. Чисто и конкретно. Чем проще исходный материал — тем легче с ним работать потом.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-ru-6.png" alt="Suno приоритизирует структуру" className="w-full object-cover" />
                        </div>
                        <div className="rounded-xl p-4 flex gap-3 items-start" style={{ background: "rgba(255,100,100,0.05)", border: "1px solid rgba(255,100,100,0.15)" }}>
                            <span className="text-lg flex-shrink-0">🚨</span>
                            <div>
                                <p className="text-white font-semibold text-sm mb-1">Всегда описывай вокал</p>
                                <p className="text-white/60 text-sm leading-relaxed">Хотя бы одну строку. Пол, подача, эмоциональный характер. Оставишь пустым — и можешь получить сопрано-вокалистку поверх своего дум-метала. Технически впечатляюще. Контекстуально — катастрофа. И да, это случалось с каждым хотя бы раз.</p>
                            </div>
                        </div>
                        <BackToTop />
                    </div>

                    <div id="brackets" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>5</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Скобки — одно правило, которое спасает</h2>
                        </div>
                        <p>Это одно правило сохранит тебе массу нервов. Запиши, запомни, вытатуируй на запястье — на твоё усмотрение.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-ru-7.png" alt="Скобки — инструкции для Suno" className="w-full object-cover" />
                        </div>
                        <div className="rounded-xl p-5" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)" }}>
                            <p className="text-white font-semibold mb-2 text-center">Единственное правило, которое всё меняет</p>
                            <p className="text-center text-white/80 text-sm leading-relaxed">Всё в <strong className="text-white">[квадратных скобках]</strong> = команда для Suno.<br />Всё без скобок = текст, который будет исполнен вслух.<br /><br />Вот и всё правило.</p>
                        </div>
                        <p>Если напишешь без скобок слова "энергичное гитарное соло" — Suno с удовольствием споёт их вслух на твоём треке. Вокалист будет петь "энергичное гитарное солооо" поверх твоего брейкдауна. Не баг. Именно это ты и попросил.</p>
                        <p>Структурные теги — в скобках:</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {["[Intro]", "[Verse]", "[Pre-Chorus]", "[Chorus]", "[Bridge]", "[Guitar Solo]", "[Instrumental]", "[Outro]"].map((tag, i) => (
                                <div key={i} className="rounded-lg px-3 py-2.5 text-center font-mono text-sm" style={{ background: "rgba(201,168,76,0.08)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.2)" }}>
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <p className="text-white/50 text-sm">Внутри скобок можно писать и продюсерские пометки — [тихо, нарастающее напряжение], [full band entry], [emotional, slow down]. Suno воспринимает их как инструкции, а не как текст. Разница между структурированным треком и хаосом часто именно здесь.</p>
                        <ProTip>Мета-теги держи короткими — до 3 слов. "Emotional blues guitar" работает лучше, чем "soul-crushing emotional authentic blues guitar played with raw passion". Suno понял тебя с первых трёх слов. Остальное — шум.</ProTip>
                        <BackToTop />
                    </div>

                    <div id="song-structure" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>6</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Структура трека — почему это важно и как это выглядит</h2>
                        </div>
                        <p>Не дашь Suno структуру — он придумает сам. Иногда выходит интересно. Чаще — непредсказуемо, особенно если нужна конкретная длина или потом планируется работа в DAW.</p>
                        <p>Базовая логика: каждая песня строится из <strong className="text-white">повторяющихся и контрастных секций</strong>. Куплеты рассказывают историю, припевы несут эмоцию, бриджи меняют угол, инструментальные секции управляют энергией. Когда это понимаешь — перестаёшь воспринимать трек как набор случайных кусков и начинаешь проектировать эмоциональный путь слушателя. Разница между демо и релизом часто именно здесь.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-ru-9.png" alt="Музыкальная структура" className="w-full object-cover" />
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-ru-8.png" alt="Шаблоны структуры треков" className="w-full object-cover" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <p className="text-white font-semibold text-sm">🎵 Классическая поп-структура</p>
                                <p className="text-white/50 text-sm leading-relaxed">Intro → Verse → Chorus → Verse → Chorus → Bridge → Final Chorus → Outro. Тысячи хитов написаны по этой схеме — не потому что так положено, а потому что она работает. Каждая секция делает что-то конкретное с вниманием и эмоцией слушателя.</p>
                            </div>
                            <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <p className="text-white font-semibold text-sm">📱 Стриминговая структура</p>
                                <p className="text-white/50 text-sm leading-relaxed">Короче, быстрее, хук в первые 30 секунд. Большинство решает остаться или уйти в первые 15 секунд. Это означает, что твоё интро фактически и является хуком. Думай об этом соответственно.</p>
                            </div>
                        </div>
                        <div className="rounded-xl p-4 flex gap-3 items-start" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                            <span className="text-lg flex-shrink-0">💡</span>
                            <div>
                                <p className="text-white font-semibold text-sm mb-1">Совет, который стоит запомнить</p>
                                <p className="text-white/60 text-sm leading-relaxed">Начинай с инструментального интро — даже короткого. Это создаёт ощущение пространства перед вокалом, делает трек профессиональнее и даёт тебе чистый материал для работы в DAW.</p>
                            </div>
                        </div>
                        <BackToTop />
                    </div>

                    <div id="sweet-spot" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>7</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Weirdness и Style Influence — найди баланс</h2>
                        </div>
                        <p>Две настройки, которые большинство либо полностью игнорирует, либо сразу выкручивает в максимум. Оба варианта — ошибки, и оба стоят кредитов.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-ru-10.png" alt="Weirdness и Style Influence в Suno" className="w-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <p className="text-white font-semibold text-sm">🎲 Weirdness — насколько Suno отклоняется от инструкций</p>
                                <div className="flex items-center gap-3 my-1">
                                    <span className="text-white/40 text-xs w-24 text-right">предсказуемо</span>
                                    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                                        <div className="h-full rounded-full" style={{ width: "55%", background: "linear-gradient(to right, rgba(100,200,100,0.6), rgba(201,168,76,0.9), rgba(255,80,80,0.6))" }}></div>
                                    </div>
                                    <span className="text-white/40 text-xs w-24">хаотично</span>
                                </div>
                                <p className="text-white/50 text-sm"><strong className="text-white">Низко</strong> — чисто, предсказуемо. Хорошо, когда направление ясное.</p>
                                <p className="text-white/50 text-sm"><strong className="text-white">Середина</strong> — рабочая зона. Интересные детали без разрушения структуры.</p>
                                <p className="text-white/50 text-sm"><strong className="text-white">Максимум</strong> — горящие кредиты и непредсказуемый результат.</p>
                            </div>
                            <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <p className="text-white font-semibold text-sm">🎨 Style Influence — насколько строго Suno держится стиля</p>
                                <div className="flex items-center gap-3 my-1">
                                    <span className="text-white/40 text-xs w-24 text-right">уходит в сторону</span>
                                    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                                        <div className="h-full w-full rounded-full" style={{ background: "linear-gradient(to right, rgba(255,80,80,0.5), rgba(201,168,76,0.9) 50%, rgba(255,80,80,0.5))" }}></div>
                                    </div>
                                    <span className="text-white/40 text-xs w-24">как робот</span>
                                </div>
                                <p className="text-white/50 text-sm"><strong className="text-white">Слишком низко</strong> — стиль дрейфует к середине трека.</p>
                                <p className="text-white/50 text-sm"><strong className="text-white">Слишком высоко</strong> — жёстко и механично. Как послушный робот, который играет по нотам, но не понимает музыки.</p>
                                <p className="text-white/50 text-sm"><strong className="text-white">Середина</strong> — пространство для интерпретации с якорем на нужном стиле.</p>
                            </div>
                        </div>
                        <div className="rounded-xl p-4 flex gap-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <span className="text-lg">🔑</span>
                            <p className="text-white/60 text-sm"><strong className="text-white">Чем больше хаоса на этапе генерации — тем сложнее работать с результатом потом.</strong> Генерируй чисто, добавляй характер в DAW.</p>
                        </div>
                        <ProTip>Высокий Weirdness создаёт не больше творчества — он создаёт больше работы на этапе редактирования. Эксперименты лучше оставить на потом, когда уже есть крепкая основа. Suno — для направления. DAW — для характера.</ProTip>
                        <BackToTop />
                    </div>

                    <div id="stop-generating" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>8</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Хватит давить Generate</h2>
                        </div>
                        <p>Есть одна привычка, которая убивает прогресс быстрее всего остального:</p>
                        <div className="rounded-xl p-5" style={{ background: "rgba(255,80,80,0.05)", border: "1px solid rgba(255,80,80,0.15)" }}>
                            <p className="text-white font-semibold text-sm mb-2">🚫 Петля, которая никуда не ведёт</p>
                            <p className="text-white/60 text-sm font-mono leading-relaxed">Generate → не нравится → закрыл → снова Generate → не нравится → ещё час → Suno плохой → закрыл → завтра открыл снова</p>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-ru-11.png" alt="Не начинай с нуля каждый раз" className="w-full object-cover" />
                        </div>
                        <p>Каждый раз, когда выбрасываешь результат и начинаешь с чистого листа — выбрасываешь вместе с ним и идею, которая его породила. А идея иногда была хорошей. Просто исполнение не зашло.</p>
                        <p>Важный сдвиг в голове при работе с генеративным AI: ты не ищешь идеальный результат. Ты <em>развиваешь материал</em>. Первая генерация — черновик. Вторая — доработка. Третья может оказаться той самой.</p>
                        <p>Музыкант, который переписывает одну песню двадцать раз, делает что-то стоящее. Музыкант, который за выходные пишет двадцать разных песен — делает двадцать демо. <strong className="text-white">Развивай то, что нашёл</strong> — не ищи что-то новое каждые пять минут.</p>
                        <BackToTop />
                    </div>

                    <div id="extend-cover-upload" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>9</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Extend, Cover, Upload — три инструмента, которые реально решают</h2>
                        </div>
                        <p>Именно они отделяют тех, кто случайно нажимает Generate в надежде на удачу, от тех, кто доводит треки до конца.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-ru-12.png" alt="Extend, Cover и Upload в Suno" className="w-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                                <span className="text-xl flex-shrink-0">▶️</span>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-2">Extend — продолжи то, что работает</p>
                                    <p className="text-white/50 text-sm leading-relaxed">Extend продолжает трек, сохраняя его характер. Не новая генерация — именно продолжение. Звук остаётся тем же, атмосфера не ломается, ты получаешь более длинный и цельный материал. Каждый раз, когда хочется нажать Generate заново только потому что трек слишком короткий — используй Extend.</p>
                                </div>
                            </div>
                            <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                                <span className="text-xl flex-shrink-0">🔄</span>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-2">Cover — A/B-тест одной идеи</p>
                                    <p className="text-white/50 text-sm leading-relaxed">Cover делает альтернативную версию той же идеи — другая подача, другое ощущение, та же ДНК. Скорее та же роль, сыгранная другим актёром. Используй, когда структура нравится, но что-то в исполнении не попало.</p>
                                </div>
                            </div>
                            <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderLeft: "3px solid #C9A84C" }}>
                                <span className="text-xl flex-shrink-0">⬆️</span>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-2">Upload Audio — здесь Suno становится настоящим коллаборатором</p>
                                    <p className="text-white/50 text-sm leading-relaxed">Загружаешь свою мелодию, рифф, напетую идею или ритмический паттерн — и Suno его развивает. В этом режиме AI перестаёт быть генератором и становится соавтором. Лучшие результаты всегда выходят именно так: оригинальная идея от человека, производственные возможности — от AI.</p>
                                    <div className="mt-3 rounded-lg p-3 text-sm" style={{ background: "rgba(201,168,76,0.08)", color: "#C9A84C" }}>
                                        → Это максимально близко к настоящему совместному написанию с AI. Используй это.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BackToTop />
                    </div>

                    <div id="personas" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>10</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Personas — твой звук под замком</h2>
                        </div>
                        <p>Нашёл звук, который работает — определённый характер, конкретное ощущение — его можно сохранить как <strong className="text-white">Persona</strong>.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-ru-13.png" alt="Personas в Suno" className="w-full object-cover" />
                        </div>
                        <p>Persona — не копия трека. Это точка отсчёта. Сохранённый звуковой характер, к которому можно возвращаться от сессии к сессии, без необходимости заново его нащупывать каждый раз.</p>
                        <p>Представь: ты работаешь над альбомом. Нужно, чтобы каждый трек звучал как часть одного мира — тот же вокальный характер, та же звуковая палитра, та же энергия. Без Personas каждая сессия начинается с нуля. С Personas — закрепляешь звук и строишь от него. Разница между «похоже на альбом» и «это случайная подборка треков».</p>
                        <div className="rounded-xl p-4 flex gap-3" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                            <span className="text-lg">🎯</span>
                            <p className="text-white/60 text-sm leading-relaxed">Personas особенно полезны для <strong className="text-white">альбомных проектов, YouTube-каналов и клиентских работ</strong> — везде, где нужно узнаваемое, цельное звучание в нескольких треках.</p>
                        </div>
                        <BackToTop />
                    </div>

                    <div id="demo-machine" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>11</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Suno делает демо. Хорошие демо.</h2>
                        </div>
                        <p>Скажем прямо, без прикрас.</p>
                        <p>Как бы хорошо трек ни звучал в плеере Suno — это демо. Хорошее демо, иногда отличное — но демо. То, что люди слышат, скачивают и запоминают, рождается в пост-продакшне.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-ru-14.png" alt="Suno = демо, не релиз" className="w-full object-cover" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="rounded-xl p-5 flex flex-col gap-2" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                                <p className="text-white font-semibold text-sm">🎵 Suno даёт тебе</p>
                                <ul className="flex flex-col gap-2 text-white/50 text-sm">
                                    <li>→ Идею и направление</li>
                                    <li>→ Структуру и аранжировку</li>
                                    <li>→ Характер и стиль вокала</li>
                                    <li>→ Эмоциональную дугу трека</li>
                                </ul>
                            </div>
                            <div className="rounded-xl p-5 flex flex-col gap-2" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <p className="text-white font-semibold text-sm">🎚️ DAW даёт тебе</p>
                                <ul className="flex flex-col gap-2 text-white/50 text-sm">
                                    <li>→ Баланс и разделение в миксе</li>
                                    <li>→ Пространство и глубину</li>
                                    <li>→ Обработку и ясность вокала</li>
                                    <li>→ Конкурентный финальный мастер</li>
                                </ul>
                            </div>
                        </div>
                        <p>Слушателю всё равно, как сделан трек. Ему важно, как он звучит. Трек из Suno с нормальным <a href="/mixing-mastering" style={{ color: "#C9A84C", textDecoration: "underline" }}>сведением и мастерингом</a> звучит лучше, чем живая запись, которую никто нормально не свёл. Инструменты не имеют значения. Результат — имеет.</p>
                        <p>Suno — отличная отправная точка. Не финиш. Следующий шаг — стемы, баланс, вокальная обработка, детали <a href="/arrangement" style={{ color: "#C9A84C", textDecoration: "underline" }}>аранжировки</a> — всё то, что переводит демо в то, что реально бьёт.</p>
                        <BackToTop />
                    </div>
{/* v5.5 Update */}
                    <div id="v55-update" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>🆕</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Обновление v5.5 — голос, стиль и вкус</h2>
                        </div>

                        <div className="rounded-xl p-4 flex gap-3 items-start" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}>
                            <span className="text-lg flex-shrink-0">📅</span>
                            <p className="text-white/60 text-sm leading-relaxed">Suno v5.5 вышел 26 марта 2026. Это не улучшение движка — это смена философии. Предыдущие версии соревновались за качество звука. v5.5 соревнуется за идентичность. Три новые функции: <strong className="text-white">Voices, Custom Models, My Taste</strong>.</p>
                        </div>

                        {/* Voices */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-semibold text-white">🎤 Voices — твой голос в треке</h3>
                            <p>Это была самая ожидаемая функция за всю историю Suno. Теперь можно загрузить запись своего голоса — и Suno будет генерировать треки именно с ним. Не со случайным вокалистом, а именно с тобой.</p>
                            <p>Для певцов это означает: можно набросать демо новой песни без микрофона и студии — просто напеть в Suno и услышать себя в полноценном треке. Для непевцов — впервые услышать свой голос в реальной музыке, что само по себе довольно неожиданный опыт.</p>

                            <div className="rounded-2xl overflow-hidden border border-white/5">
                                <img src="/images/suno-ru-16.png" alt="Voices в Suno v5.5 — клонирование голоса" className="w-full object-cover" />
                            </div>

                            <p><strong className="text-white">Как активировать:</strong></p>
                            <div className="flex flex-col gap-3">
                                {[
                                    { step: "01", title: "Запись голоса", desc: "Загружаешь аудио со своим голосом — поёшь или говоришь. Формат: WAV или MP3. Достаточно 30–60 секунд чистого материала." },
                                    { step: "02", title: "Верификация", desc: "Suno даёт случайную фразу — ты читаешь её вслух и записываешь. Система сравнивает с загруженным аудио и убеждается, что это действительно твой голос." },
                                    { step: "03", title: "Голос в панели", desc: "После верификации голос появляется в твоём аккаунте. При генерации треков выбираешь его вместо случайного вокалиста." },
                                ].map((item, i) => (
                                    <div key={i} className="rounded-xl p-4 flex gap-4 items-start" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                        <span className="text-2xl font-bold flex-shrink-0" style={{ color: "rgba(201,168,76,0.25)" }}>{item.step}</span>
                                        <div>
                                            <p className="text-white font-medium text-sm">{item.title}</p>
                                            <p className="text-white/50 text-sm mt-1 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                                <p className="text-white font-semibold text-sm">🎙️ Почему качество записи критично</p>
                                <p className="text-white/60 text-sm leading-relaxed">Suno обучает голосовую модель на том материале, который ты ей даёшь. Если в записи есть шум кондиционера, эхо от стен, фоновая музыка или соседи за стеной — всё это войдёт в модель. Результат: при генерации трека голос будет звучать нечётко, с артефактами и искажениями. Никакой алгоритм не сможет «убрать» шум, который уже зашит в модель.</p>
                                <p className="text-white/60 text-sm leading-relaxed mt-1">Оптимальные условия: тихая комната, студийный микрофон или хотя бы качественные наушники с микрофоном, минимальное расстояние от губ до источника записи. Запись ранним утром или поздно ночью когда улица тихая — не шутка, это реально работает.</p>
                                <p className="text-white/60 text-sm leading-relaxed mt-1">Одна хорошая запись голоса сделанная один раз — это инвестиция. Плохая запись не исправляется никакими настройками после.</p>
                            </div>

                            <div className="rounded-xl p-4 flex gap-3 items-start" style={{ background: "rgba(255,100,80,0.06)", border: "1px solid rgba(255,100,80,0.2)" }}>
                                <span className="text-lg flex-shrink-0">⚠️</span>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-1">Важно перед активацией</p>
                                    <p className="text-white/60 text-sm leading-relaxed">При включении Voices нужно поставить галочку согласия на использование твоих голосовых данных для обучения модели Suno — не только твоей личной версии, но и общей модели платформы. Без этого функция не включается. Это не опционально. Решай осознанно.</p>
                                </div>
                            </div>

                            <div className="rounded-xl p-4 flex gap-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <span className="text-lg">🔒</span>
                                <p className="text-white/60 text-sm leading-relaxed">Голос по умолчанию приватный — только ты можешь его использовать для генерации. Функция совместного доступа к голосу анонсирована, но пока недоступна. Только для аккаунтов <strong className="text-white">Pro и Premier</strong>.</p>
                            </div>
                        </div>

                        {/* Custom Models */}
                        <div className="flex flex-col gap-4 pt-2">
                            <h3 className="text-lg font-semibold text-white">🎛️ Custom Models — Suno обученный на твоей музыке</h3>
                            <p>Загружаешь свои треки сделанные вне Suno — и модель обучается на твоём стиле. После этого генерирует музыку, которая звучит как ты, а не как усреднённый AI.</p>
                            <p>Логика та же, что у пресетов и шаблонов в DAW — только вместо настроек плагинов ты загружаешь свои треки как обучающий материал. Модель улавливает твои жанровые предпочтения, характерные инструментальные решения, динамику и звуковую эстетику.</p>

                            <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #C9A84C" }}>
                                <p className="text-white font-semibold text-sm">Что важно понимать</p>
                                <p className="text-white/60 text-sm leading-relaxed">Custom Models хорошо улавливают поверхностные характеристики — тембр, жанровые маркеры, инструментальную текстуру. С более глубокими compositional tendencies — аранжировочными решениями, паузами, динамическими контрастами — модель справляется хуже. Чем самобытнее твой стиль, тем интереснее результат. Если твоя музыка звучит как большинство — особого смысла в Custom Model нет.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="rounded-xl p-4 flex flex-col gap-2" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                                    <p className="text-white font-semibold text-xs uppercase tracking-widest">Доступно</p>
                                    <p className="text-white/60 text-sm">До 3 кастомных моделей на аккаунт. Только Pro и Premier.</p>
                                </div>
                                <div className="rounded-xl p-4 flex flex-col gap-2" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                    <p className="text-white font-semibold text-xs uppercase tracking-widest">Лучший сценарий</p>
                                    <p className="text-white/60 text-sm">YouTube-канал, альбом, клиентский проект — где нужен единый, узнаваемый звук.</p>
                                </div>
                            </div>
                        </div>

                        {/* My Taste */}
                        <div className="flex flex-col gap-4 pt-2">
                            <h3 className="text-lg font-semibold text-white">✨ My Taste — Suno который тебя запоминает</h3>
                            <p>Бесплатно для всех пользователей. Suno отслеживает что ты генерируешь, какие жанры и настроения выбираешь, что лайкаешь и что пропускаешь — и постепенно накапливает профиль твоих предпочтений.</p>
                            <p>Когда нажимаешь на волшебную палочку при генерации — My Taste применяет накопленный контекст. Результаты начинают смещаться в сторону того, что тебе обычно нравится, без явных инструкций в промпте.</p>

                            <div className="rounded-xl p-4 flex gap-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <span className="text-lg">💡</span>
                                <p className="text-white/60 text-sm leading-relaxed">Работает тем лучше, чем больше ты используешь Suno — и чем последовательнее в своих оценках. Лайкаешь блюз-рок и дизлайкаешь поп — My Taste это замечает. Лайкаешь всё подряд — система не понимает что ты хочешь и помогает меньше. Фильтруй Library честно.</p>
                            </div>
                        </div>

                        <ProTip>v5.5 — это аддитивное обновление. Всё что работало в v5 работает и сейчас. Voices, Custom Models и My Taste — дополнительные слои поверх того же движка. Начни с My Taste прямо сейчас, это бесплатно. Voices и Custom Models — когда будет готова качественная запись голоса и накоплен собственный музыкальный каталог.</ProTip>
                        <BackToTop />
                    </div>
                    <div id="checklist" className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>✓</span>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">Чеклист перед генерацией</h2>
                        </div>
                        <p>Перед тем как жать Generate — пройдись по этому. Каждый раз. Тридцать секунд, которые спасают от получаса генерации в никуда. Кликабельный — можешь ставить галочки прямо здесь.</p>
                        <div className="rounded-2xl overflow-hidden border border-white/5">
                            <img src="/images/suno-ru-15.png" alt="Чеклист перед генерацией" className="w-full object-cover" />
                        </div>
                        <InteractiveChecklist />
                        <BackToTop />
                    </div>

                    <div className="flex flex-col gap-1">
                        <div className="w-full h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
                        <div className="rounded-2xl p-8 flex flex-col gap-4 mt-4" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}>
                            <h3 className="text-xl font-semibold text-white">Напоследок</h3>
                            <p className="text-white/60 text-sm leading-relaxed">Работа с Suno — это навык. Не секретный промпт, не волшебная настройка — навык. Который растёт через практику, честное слушание и готовность разобраться в инструменте, а не бороться с ним.</p>
                            <p className="text-white/60 text-sm leading-relaxed">Те, кто получают от Suno максимум — не те, кто нашёл магическую формулу. Это те, кто понял логику, выстроил рабочий процесс и продолжал возвращаться. Кто относится к нему как к соавтору, а не к торговому автомату с музыкой.</p>
                            <p className="text-white/60 text-sm leading-relaxed">Suno ускоряет. Он не заменяет. Работа всё равно твоя — и это хорошо. Потому что именно в ней и живёт музыка.</p>
                            <p className="text-white font-semibold mt-2 text-lg">Иди делай.</p>
                        </div>
                    </div>

                    <div className="rounded-2xl p-8 text-center flex flex-col items-center gap-4"
                        style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}>
                        <h3 className="text-xl font-semibold text-white">Демо из Suno готово — что дальше?</h3>
                        <p className="text-white/50 text-sm max-w-md">Присылай трек — стемы, черновой микс или прямой экспорт из Suno. Доведём до релизного состояния. Первая консультация бесплатно.</p>
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
