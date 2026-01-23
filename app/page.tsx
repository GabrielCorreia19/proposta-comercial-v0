import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Target, Users, TrendingUp, Shield, Award, Briefcase, Phone, MapPin, Mail } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            {/* <div className="h-10 w-10 rounded-full bg-secondary" /> */}
            {/* <span className="font-bold text-lg md:text-xl text-primary">Talent Hunt</span> */}
            <Image src="/logo-decisao-brasil.png" alt="Talent Hunt" width={180} height={100} />
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#servicos" className="text-sm font-medium hover:text-secondary transition-colors">
              Serviços
            </a>
            <a href="#proposta" className="text-sm font-medium hover:text-secondary transition-colors">
              Proposta
            </a>
            <a href="#planos" className="text-sm font-medium hover:text-secondary transition-colors">
              Planos
            </a>
            <a href="#processo" className="text-sm font-medium hover:text-secondary transition-colors">
              Processo
            </a>
            <a href="#orcamento" className="text-sm font-medium hover:text-secondary transition-colors">
              Orçamento
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-secondary transition-colors">
              Contato
            </a>
          </nav>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-sm md:text-base" asChild>
            <a href="https://wa.me/5571999912091" target="_blank" rel="noopener noreferrer">Fale Conosco</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-professional-business-pattern.jpg')] opacity-5" />
        <div className="container relative px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* <Badge className="mb-6 bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Especialistas em Talent Hunting
            </Badge> */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance px-2">
              Conectamos os Melhores Talentos às Melhores Oportunidades
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 text-primary-foreground/90 text-pretty leading-relaxed px-2">
              {/* Foco em pessoas e organização, atuando no desenvolvimento humano na prática dos processos de recrutamento
              especializado. */}
              {/* Metodologia, processo e estratégia para gerar resultados em recrutamento especializado, outplacement e transição de carreira, com foco na recolocação profissional.  */}
              Processos estruturados e estratégias estratégicas de outplacement e transição de carreira, com foco total na recolocação profissional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                <a href="#proposta">Conheça Nossa Proposta</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <a href="#planos">Ver Planos</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section id="servicos" className="py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-primary px-2">Nossos Serviços</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Trabalho realizado com metodologia job hunter
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Headhunter Empresas",
                icon: Target,
                description: "Busca especializada de profissionais para cargos estratégicos",
              },
              { title: "Outplacement", icon: Users, description: "Suporte emocional e orientação de carreira" },
              {
                title: "Recolocação profissional",
                icon: TrendingUp,
                description: "Processo estratégico de reinserção no mercado de trabalho",
              },
              { title: "Transição de carreira", icon: Award, description: "Utilizando experiência  anterior como diferencial" },
              {
                title: "Desenvolvimento de Pessoas PDI",
                icon: Briefcase,
                description: "Plano de Desenvolvimento Individual personalizado",
              },
              { title: "R&S", icon: Users, description: "Recrutamento e Seleção completo" },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proposta */}
      <section id="proposta" className="py-16 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-primary px-2">
              Nossa Proposta
            </h2>
            <Card className="border-secondary/20">
              <CardHeader className="space-y-2 p-5 md:p-6">
                <CardTitle className="text-xl md:text-2xl text-secondary">Assessoria para Recolocação Profissional</CardTitle>
                <CardDescription className="text-sm md:text-base leading-relaxed">
                  Direcionamento na busca por uma nova oportunidade profissional.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 md:space-y-8 p-5 md:p-6">
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-secondary shrink-0" />
                    Metodologia
                  </h3>
                  <ul className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-2 list-disc list-inside">
                    <li>Alinhamento de expectativas</li>
                    <li>Mapeamento de network</li>
                    <li>Auto avaliação</li>
                    <li>Identificação Curricular</li>
                    <li>Negociação</li>
                    <li>Feedback</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-secondary shrink-0" />
                    Estratégia
                  </h3>
                  <ul className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-2 list-disc list-inside">
                    <li>Headhunters / Empresas</li>
                    <li>Networking</li>
                    <li>Processos Seletivos</li>
                    <li>Prospecção com Mercado</li>
                    <li>Monitoramento dos processos</li>
                    <li>Suporte nas propostas</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-primary px-2">Nossos Planos</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Plano Básico */}
            <Card className="relative hover:shadow-lg transition-shadow"> {/* Added relative class for absolute positioning */}
              {/* Pricing for Lite Plan */}
              <div className="absolute top-4 right-4 text-right z-10">
                <span className="block text-sm font-semibold text-primary">2 Salários Mínimos</span>
                <span className="block text-xs text-muted-foreground">+ 50% taxa de sucesso</span>
              </div>
              <CardHeader className="space-y-4 p-5 md:p-6">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-xl md:text-2xl">Lite</CardTitle>
                {/* <CardDescription className="text-sm md:text-base">
                  Ideal para profissionais iniciando
                </CardDescription> */}
              </CardHeader>
              <CardContent className="p-5 md:p-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Entrevista profissional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Reestruturação Curricular</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Estudo de Perfil</span>
                  </li>
                  {/* <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Avaliação arquétipo de competência, habilidade e atitude</span>
                  </li> */}
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Entrevista e processos seletivos (orientação)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Monitoramento dos processos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Plano Ouro */}
            <Card className="relative hover:shadow-lg transition-shadow border-secondary/50 relative">
              {/* Pricing for Plus Plan */}
              <div className="absolute top-4 right-4 text-right z-10">
                <span className="block text-sm font-semibold text-primary">3 Salários Mínimos</span>
                <span className="block text-xs text-muted-foreground">+ 50% taxa de sucesso</span>
              </div>
              {/* <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-secondary text-secondary-foreground">Mais Popular</Badge>
              </div> */}
              <CardHeader className="space-y-4 p-5 md:p-6 pt-8">
                <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl md:text-2xl text-secondary">Plus <span className="text-sm">(+ Lite)</span></CardTitle>
                {/* <CardDescription className="text-sm md:text-base">
                  Solução completa para gestão de talentos
                </CardDescription> */}
              </CardHeader>
              <CardContent className="p-5 md:p-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Negociação com diferentes perfis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Linguagem, corporal, tom de voz e escuta</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Marketing pessoal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Análise e criação do perfil digital</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Cenário do mercado alvo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Plano Diamante */}
            <Card className="relative hover:shadow-lg transition-shadow border-primary/50 md:col-span-2 lg:col-span-1">
              {/* Pricing for Master Plan */}
              <div className="absolute top-4 right-4 text-right z-10">
                <span className="block text-sm font-semibold text-primary">4 Salários Mínimos</span>
                <span className="block text-xs text-muted-foreground">+ 50% taxa de sucesso</span>
              </div>
              <CardHeader className="space-y-4 p-5 md:p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl md:text-2xl text-primary">Master <span className="text-sm">(Lite + Plus)</span></CardTitle>
                {/* <CardDescription className="text-sm md:text-base">
                  Exclusivo para cargos executivos e estratégicos
                </CardDescription> */}
              </CardHeader>
              <CardContent className="p-5 md:p-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Criação ou reestruturação do Linkedin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Criação de landing page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Posicionamento Instagram</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Mentoria 3 meses</span>
                  </li>
                  {/* <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Criação de Pallet de cores</span>
                  </li> */}
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Marca pessoal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Catalogar empresas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Metodologia STAR</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Plano de Ação - Etapas do Processo */}
      <section id="processo" className="py-16 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-primary px-2">PLANO DE AÇÃO</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              ETAPAS DO PROCESSO
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              "Entrevista com candidato (objetivo)",
              "Estudo de perfil (arquétipo/questionário)",
              "Reestruturação curricular/ inglês",
              "Marketing profissional",
              "Marca pessoal",
              "Criação/restruturação linkedin / inglês",
              "Criação de landing page ou linktree",
              "Posicionamento do Instagram",
              "Conexão do mercado (analise, criação e perfil digital)",
              "Negociação com diferentes estilos",
              "Linguagem corporal, tom de voz e escuta",
              "Cenário do mercado alvo",
              "Simulação de entrevista",
              "Catalogar empresas",
              "Orientação para novo desafio",
              "Mentoria durante 03 meses",
              "Monitoramento dos processos",
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-background hover:bg-muted/50 border border-border/50 rounded-xl p-4 transition-all hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-xs font-bold text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-medium leading-relaxed pt-1.5 text-foreground/80 group-hover:text-foreground transition-colors">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orçamento */}
      <section id="orcamento" className="py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-primary px-2">
              Investimento
            </h2>
            <Card className="border-primary/20">
              <CardHeader className="p-5 md:p-6">
                <CardTitle className="text-xl md:text-2xl">Orçamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 md:space-y-8 p-5 md:p-6">
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-3 text-secondary">Custos dos processos</h3>
                  <ul className="space-y-3 text-sm md:text-base text-muted-foreground mb-3 leading-relaxed">
                    <li>
                      <strong className="text-foreground">Lite:</strong> 2 Salários Mínimos + 50% taxa de sucesso
                    </li>
                    <li>
                      <strong className="text-foreground">Plus:</strong> 3 Salários Mínimos + 50% taxa de sucesso
                    </li>
                    <li>
                      <strong className="text-foreground">Master:</strong> 4 Salários Mínimos + 50% taxa de sucesso
                    </li>
                  </ul>
                </div>
                {/* <div>
                  <h3 className="font-semibold text-base md:text-lg mb-3 text-secondary">Custo de logística</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Atuação presencial na região de prospecção, divulgação, Recrutamento e Seleção (repasse de custo,
                    caso haja deslocamento de cidade ou região).
                  </p>
                </div> */}
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-3 text-secondary">Forma de pagamento</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Pix / Cartão de crédito em até <strong className="text-foreground">10x sem juros dos honorários</strong>.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-8">
                    <strong className="text-foreground">O pagamento da taxa de sucesso deverá ser realizado no primeiro salário recebido, uma única vez.</strong>
                  </p>
                </div>
                <div className="bg-primary/5 p-4 md:p-6 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-base md:text-lg mb-3 flex items-start gap-2">
                    <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Informação Confidencial</span>
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Significará em cuidar para que as informações confidenciais fiquem restritas ao conhecimento tão
                    somente das pessoas que estejam diretamente envolvidas nas discussões, análises, reuniões e
                    negócios, devendo cientificá-los da existência deste Termo e da natureza confidencial destas
                    informações.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato / Footer */}
      <section id="contato" className="py-16 md:py-20 lg:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 px-2">Entre em Contato</h2>
            {/* <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed px-4">
              Estamos prontos para ajudar sua empresa a encontrar os melhores talentos
            </p> */}
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
              <CardHeader className="p-5 md:p-6">
                <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                  <MapPin className="h-5 w-5 text-secondary shrink-0" />
                  Salvador - BA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm md:text-base leading-relaxed p-5 md:p-6 pt-0">
                <p>Av. Tancredo Neves, 1283</p>
                <p>Edif. Ômega, Sala 902</p>
                <p>Caminho das Árvores</p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
              <CardHeader className="p-5 md:p-6">
                <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                  <MapPin className="h-5 w-5 text-secondary shrink-0" />
                  Lauro de Freitas - BA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm md:text-base leading-relaxed p-5 md:p-6 pt-0">
                <p>Edif. Villas Empresarial I</p>
                <p>Av. Luiz Tarquínio Pontes, 2580 - Sala 311</p>
                <p>Vilas do Atlântico</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8 md:mt-12 space-y-3 px-4">
            <p className="flex items-center justify-center gap-2 text-base md:text-lg flex-wrap">
              <Phone className="h-5 w-5 text-secondary shrink-0" />
              <span>(71) 99999-2090 | (71) 99991-2091</span>
            </p>
            <p className="flex items-center justify-center gap-2 text-base md:text-lg flex-wrap">
              <Mail className="h-5 w-5 text-secondary shrink-0" />
              <a href="mailto:comercial@decisaobrasil.com.br" className="hover:underline">comercial@decisaobrasil.com.br</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 bg-primary/95 text-primary-foreground/80 text-center text-xs md:text-sm border-t border-primary-foreground/10">
        <div className="container px-4">
          <p>© 2026 Decisão Brasil. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
