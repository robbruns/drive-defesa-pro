import { createFileRoute } from "@tanstack/react-router";
import {
  Scale, ShieldCheck, AlertTriangle, Wine, Gauge, FileWarning,
  Building2, Ban, FileText, Users, Clock, Sparkles, Headphones,
  Award, CheckCircle2, ArrowRight, Phone, Mail, MapPin, Instagram,
  Facebook, Linkedin, MessageCircle,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/hero-driving.jpg";
import lawyerImg from "@/assets/roberta-bruns.jpg";
import brandLogo from "@/assets/bruns-logo.webp";
import { WhatsAppFloat, WHATSAPP_URL } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bruns Advogados | Defesa de CNH em Pomerode/SC" },
      { name: "description", content: "Bruns Advogados — defesa administrativa em suspensão e cassação da CNH, Lei Seca, pontos e multas gravíssimas. Advogada Roberta Bruns OAB/SC 62.012." },
      { property: "og:title", content: "Bruns Advogados | Direito de Trânsito" },
      { property: "og:description", content: "Defesa administrativa estratégica em processos de CNH. Atendimento personalizado em Pomerode/SC e online." },
    ],
  }),
  component: LandingPage,
});

const problemas = [
  { icon: Ban, title: "Suspensão da CNH", desc: "Processo administrativo de suspensão do direito de dirigir." },
  { icon: AlertTriangle, title: "Cassação da CNH", desc: "Notificação de cassação após reincidência ou infrações específicas." },
  { icon: Wine, title: "Lei Seca", desc: "Autuação por embriaguez ao volante ou recusa em testes." },
  { icon: ShieldCheck, title: "Recusa do Bafômetro", desc: "Penalidades aplicadas pela recusa do teste do etilômetro." },
  { icon: Gauge, title: "Excesso de Pontos", desc: "Acúmulo de pontos na carteira acima do limite legal." },
  { icon: FileWarning, title: "Multas Gravíssimas", desc: "Autuações de natureza gravíssima com risco à habilitação." },
  { icon: Building2, title: "Processo no DETRAN", desc: "Procedimentos administrativos abertos pelo órgão de trânsito." },
];

const servicos = [
  { icon: Scale, title: "Defesa em Suspensão da CNH", desc: "Atuação técnica em todas as fases do processo administrativo." },
  { icon: ShieldCheck, title: "Defesa em Cassação", desc: "Análise estratégica do caso e elaboração da defesa cabível." },
  { icon: Wine, title: "Defesa Lei Seca", desc: "Acompanhamento em autuações por embriaguez e recusa de teste." },
  { icon: FileText, title: "Recurso de Multas", desc: "Recursos junto à JARI e ao CETRAN em infrações de trânsito." },
  { icon: Users, title: "Acompanhamento Administrativo e Judicial", desc: "Monitoramento integral nas esferas administrativa e judicial até a decisão final." },
  { icon: Headphones, title: "Atendimento Online em Todo o Brasil", desc: "Consulta e envio de documentos 100% digital, com atendimento para todo o território nacional." },
  { icon: MapPin, title: "Atendimento Presencial em Pomerode/SC", desc: "Recepção presencial no escritório para clientes da região." },
];

const diferenciais = [
  { icon: Users, title: "Atendimento personalizado", desc: "Cada caso recebe análise individual e atenção dedicada." },
  { icon: Sparkles, title: "Estratégia individualizada", desc: "Defesa elaborada conforme as particularidades do processo." },
  { icon: CheckCircle2, title: "Transparência", desc: "Comunicação clara sobre prazos, etapas e expectativas." },
  { icon: Clock, title: "Agilidade", desc: "Rapidez na análise inicial e no protocolo das peças." },
  { icon: Headphones, title: "Atendimento digital", desc: "Tecnologia para facilitar contato e envio de documentos." },
  { icon: Award, title: "Foco em Direito de Trânsito", desc: "Atuação concentrada em processos administrativos do setor." },
];

const etapas = [
  { n: "01", title: "Análise do caso", desc: "Estudo detalhado da notificação e do processo." },
  { n: "02", title: "Envio dos documentos", desc: "Orientação sobre a documentação necessária." },
  { n: "03", title: "Estratégia jurídica", desc: "Definição da linha de defesa mais adequada." },
  { n: "04", title: "Protocolo da defesa", desc: "Elaboração e protocolo da peça no órgão competente." },
  { n: "05", title: "Acompanhamento", desc: "Monitoramento até a decisão administrativa final." },
];

const faqs = [
  { q: "Posso recorrer da suspensão da CNH?", a: "Sim. O ordenamento prevê a possibilidade de defesa prévia e recursos administrativos junto à JARI e ao CETRAN, dependendo da fase do processo. Cada caso deve ser analisado individualmente." },
  { q: "Cassação tem defesa?", a: "Sim. Existem medidas administrativas e, em algumas situações, medidas judiciais cabíveis. A viabilidade depende dos elementos do processo e dos prazos." },
  { q: "Posso dirigir durante o recurso?", a: "Em regra, enquanto não houver decisão definitiva e a aplicação efetiva da penalidade, o direito de dirigir é preservado. A análise deve ser feita caso a caso." },
  { q: "Quantos recursos existem?", a: "De forma geral: Defesa Prévia, recurso à JARI e recurso ao CETRAN. Cada instância possui prazo e requisitos próprios." },
  { q: "O atendimento é online?", a: "Sim. Realizamos atendimento integralmente digital, com envio de documentos e reuniões por videochamada, em todo o território nacional." },
  { q: "Quanto tempo demora o processo?", a: "O prazo varia conforme o órgão e a complexidade do caso. Informamos uma estimativa após a análise inicial da documentação." },
  { q: "Preciso comparecer presencialmente?", a: "Na maioria dos casos, não. A defesa administrativa pode ser conduzida de forma online, com procuração e documentos digitais." },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <WhatsAppFloat />

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={brandLogo} alt="Bruns Advogados" width={40} height={40} className="h-10 w-10 rounded-md object-cover" />
            <div className="leading-tight">
              <div className="font-display font-semibold text-primary tracking-wide">BRUNS</div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Advogados</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#problemas" className="hover:text-primary transition">Problemas</a>
            <a href="#servicos" className="hover:text-primary transition">Serviços</a>
            <a href="#sobre" className="hover:text-primary transition">Sobre</a>
            <a href="#faq" className="hover:text-primary transition">FAQ</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full gradient-whatsapp px-5 py-2.5 text-sm font-semibold text-white shadow-whatsapp hover:scale-105 transition"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 gradient-primary text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(135deg, oklch(0.16 0.05 258 / 0.85), oklch(0.16 0.05 258 / 0.6)), url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="container relative mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold mb-6">
              <Sparkles className="h-3 w-3" /> Defesa Administrativa Especializada
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6">
              Recebeu notificação de <span className="text-gold">suspensão ou cassação</span> da CNH? Ainda pode haver solução.
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Defesa administrativa estratégica em processos de trânsito, com atendimento personalizado e acompanhamento completo do início ao fim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full gradient-gold px-8 py-4 font-semibold text-primary-deep shadow-gold hover:scale-105 transition"
              >
                <MessageCircle className="h-5 w-5" /> Falar com especialista no WhatsApp
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 font-medium text-white hover:bg-white/10 transition"
              >
                Conhecer atendimento <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Atendimento online</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Sigilo profissional</div>
            </div>
          </div>

          {/* Card da advogada */}
          <div className="relative animate-fade-in-up lg:justify-self-end">
            <div className="relative max-w-sm mx-auto rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 shadow-elegant">
              <div className="absolute -top-3 -right-3 rounded-full gradient-gold px-3 py-1 text-[10px] font-bold tracking-widest text-white">
                OAB/SC 62.012
              </div>
              <div className="aspect-[4/5] rounded-xl overflow-hidden mb-5 border border-white/10">
                <img
                  src={lawyerImg}
                  alt="Dra. Roberta Bruns, advogada especialista em Direito de Trânsito"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="text-xs uppercase tracking-[0.2em] text-gold">Advogada Responsável</div>
                <div className="font-display text-xl mt-1">Dra. Roberta Bruns</div>
                <div className="text-xs text-white/60 mt-1">OAB/SC 62.012 — Direito de Trânsito</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section id="problemas" className="py-24 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-gold-deep mb-3">Identifique seu caso</div>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary">Você recebeu alguma dessas notificações?</h2>
            <p className="text-muted-foreground mt-4">Cada situação possui prazo, procedimento e estratégia de defesa específicos. Conheça os principais casos atendidos.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {problemas.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="hover-lift rounded-xl bg-card border border-border p-6">
                <div className="h-11 w-11 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLICAÇÃO */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold-deep mb-3">Entenda o processo</div>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
              O que significa suspensão e cassação da CNH
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">suspensão</strong> é a penalidade que retira temporariamente o direito de dirigir, geralmente por acúmulo de pontos ou infração específica.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">cassação</strong> é mais grave: ocorre, entre outras hipóteses, quando o condutor dirige durante o período de suspensão ou reincide em infrações específicas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Em ambos os casos, é possível apresentar <strong className="text-foreground">defesa administrativa</strong>, observando-se os prazos legais.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { t: "Defesa Prévia", d: "Primeira oportunidade de manifestação após a notificação do processo administrativo." },
              { t: "Recurso à JARI", d: "Junta Administrativa de Recursos de Infrações — primeira instância recursal." },
              { t: "Recurso ao CETRAN", d: "Conselho Estadual de Trânsito — instância recursal superior." },
            ].map((it, i) => (
              <div key={it.t} className="flex gap-4 rounded-xl border border-border bg-card p-5 hover-lift">
                <div className="h-10 w-10 shrink-0 rounded-full gradient-gold flex items-center justify-center font-bold text-primary-deep">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{it.t}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{it.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-gold-deep mb-3">Como posso te ajudar</div>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary">Atuação focada em processos de trânsito</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group hover-lift rounded-2xl bg-card border border-border p-7">
                <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-gold transition-colors">
                  <Icon className="h-6 w-6 text-primary group-hover:text-gold" />
                </div>
                <h3 className="font-display text-xl text-primary mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 gradient-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Diferenciais</div>
            <h2 className="text-3xl md:text-4xl font-semibold">Por que escolher nosso atendimento</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-7 hover:border-gold/40 transition">
                <Icon className="h-7 w-7 text-gold mb-4" />
                <h3 className="font-display text-lg mb-2">{title}</h3>
                <p className="text-sm text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-4 gradient-gold rounded-2xl opacity-20 blur-2xl" />
              <img
                src={lawyerImg}
                alt="Foto profissional da advogada"
                width={1024}
                height={1280}
                loading="lazy"
                className="relative rounded-2xl shadow-elegant object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.25em] text-gold-deep mb-3">Sobre a advogada</div>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-2">Dra. Roberta Bruns</h2>
            <div className="text-sm text-muted-foreground mb-6">OAB/SC 62.012</div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Advogada com mais de 10 anos de experiência jurídica, com atuação em Direito de Trânsito, Direito Civil, Direito Empresarial e Direito Trabalhista. Dedica-se à defesa administrativa em processos de suspensão e cassação da CNH, Lei Seca, recursos de multas e acompanhamento junto aos órgãos de trânsito.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              O atendimento é pautado pela análise técnica de cada caso, transparência na comunicação com o cliente e respeito integral ao Código de Ética da OAB.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-md">
              {[
                { l: "Experiência", v: "+10 anos" },
                { l: "Sede", v: "Pomerode/SC" },
                { l: "Atendimento", v: "Online" },
              ].map((s) => (
                <div key={s.l} className="rounded-lg border border-border p-4 text-center">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                  <div className="font-display text-lg text-primary mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ETAPAS */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-gold-deep mb-3">Como funciona</div>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary">Etapas do atendimento</h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="grid lg:grid-cols-5 gap-8">
              {etapas.map((e) => (
                <div key={e.n} className="relative text-center">
                  <div className="mx-auto h-24 w-24 rounded-full gradient-primary flex items-center justify-center font-display text-2xl text-gold shadow-elegant mb-5">
                    {e.n}
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{e.title}</h3>
                  <p className="text-sm text-muted-foreground">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.25em] text-gold-deep mb-3">Dúvidas frequentes</div>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary">Perguntas comuns</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border bg-card px-5">
                <AccordionTrigger className="text-left font-medium text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 gradient-primary text-white relative overflow-hidden">
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="container mx-auto px-6 text-center relative max-w-3xl">
          <Sparkles className="h-8 w-8 text-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-6">
            Quanto antes o caso for analisado, <span className="text-gold">maiores podem ser as possibilidades</span> de defesa.
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10">
            Envie sua notificação para uma análise inicial. Atendimento humano, sigiloso e 100% online.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full gradient-gold px-10 py-5 font-semibold text-primary-deep shadow-gold hover:scale-105 transition"
          >
            <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary-deep text-white/80">
        <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={brandLogo} alt="Bruns Advogados" width={40} height={40} className="h-10 w-10 rounded-md object-cover" />
              <div className="font-display font-semibold text-white tracking-wide">BRUNS ADVOGADOS</div>
            </div>
            <p className="text-sm text-white/60">
              Escritório de advocacia com atuação em Direito de Trânsito, Civil, Empresarial e Trabalhista.
            </p>
            <div className="text-xs text-white/50 mt-4">Dra. Roberta Bruns — OAB/SC 62.012</div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" /><span>(47) 99649-1330</span></li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" /><span>contato@brunsadvogados.com.br</span></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" /><span>R. Hermann Weege, 1681 — Centro, Pomerode/SC, 89107-000</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#problemas" className="hover:text-gold transition">Identifique seu caso</a></li>
              <li><a href="#servicos" className="hover:text-gold transition">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-gold transition">Sobre</a></li>
              <li><a href="#faq" className="hover:text-gold transition">Dúvidas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Redes</h4>
            <div className="flex gap-3 mb-6">
              <a href="#" aria-label="Instagram" className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-primary-deep transition"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-primary-deep transition"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-primary-deep transition"><Linkedin className="h-4 w-4" /></a>
            </div>
            <ul className="space-y-2 text-xs text-white/50">
              <li><a href="#" className="hover:text-gold">Política de privacidade</a></li>
              <li><a href="#" className="hover:text-gold">Aviso LGPD</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container mx-auto px-6 py-6 text-xs text-white/50 flex flex-col md:flex-row items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} Bruns Advogados. Todos os direitos reservados.</div>
            <div>Conteúdo meramente informativo, em conformidade com o Código de Ética da OAB.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
