import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Target, Users, TrendingUp, Shield, Award, Briefcase, Phone, MapPin } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-secondary" />
            <span className="font-bold text-lg md:text-xl text-primary">Talent Hunt</span>
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
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-sm md:text-base">
            Fale Conosco
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-professional-business-pattern.jpg')] opacity-5" />
        <div className="container relative px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Especialistas em Talent Hunting
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance px-2">
              Conectamos os Melhores Talentos às Melhores Oportunidades
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 text-primary-foreground/90 text-pretty leading-relaxed px-2">
              Foco em pessoas e organização, atuando no desenvolvimento humano na prática dos processos de recrutamento
              especializado.
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
              Oferecemos soluções completas em gestão de talentos e desenvolvimento humano
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Headhunter Empresas",
                icon: Target,
                description: "Busca especializada de profissionais para cargos estratégicos",
              },
              { title: "Outplacement", icon: Users, description: "Recolocação profissional com suporte completo" },
              {
                title: "Treinamento e Desenvolvimento",
                icon: TrendingUp,
                description: "Capacitação e aprimoramento de equipes",
              },
              { title: "Metodologia STAR", icon: Award, description: "Avaliação comportamental estruturada" },
              {
                title: "Consultoria de Processos PDI",
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
                <CardTitle className="text-xl md:text-2xl text-secondary">Talent Hunting</CardTitle>
                <CardDescription className="text-sm md:text-base leading-relaxed">
                  Processo especializado de Headhunter de forma ativa e personalizada na busca de encontrar e atrair
                  profissional para ocupar cargo especializado.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 md:space-y-8 p-5 md:p-6">
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-secondary shrink-0" />
                    Propósito
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Foco em pessoas e organização, atuando no desenvolvimento humano na prática dos processos.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    Objetivo Principal
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Vendedor Interno (1), Vendedor Externo (1) com competências e habilidades específicos.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-secondary shrink-0" />
                    Processo Alternativo
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Garantir de forma estratégica o melhor alinhamento entre profissional e necessidade da empresa.
                  </p>
                </div>
                <div className="bg-secondary/10 p-4 md:p-6 rounded-lg">
                  <h3 className="font-semibold text-base md:text-lg mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-secondary shrink-0" />
                    Garantia
                  </h3>
                  <p className="text-sm md:text-base text-foreground leading-relaxed">
                    <strong>90 dias</strong> na substituição do candidato sem custo adicional.
                  </p>
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
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Escolha o plano ideal para as necessidades da sua empresa
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Plano Básico */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-4 p-5 md:p-6">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-xl md:text-2xl">Básico</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Ideal para empresas iniciando processos seletivos
                </CardDescription>
              </CardHeader>
              <CardContent className="p-5 md:p-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Mapeamento básico de mercado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Triagem de currículos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Até 3 entrevistas estruturadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Relatório de candidatos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Garantia de 30 dias</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Plano Ouro */}
            <Card className="hover:shadow-lg transition-shadow border-secondary/50 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-secondary text-secondary-foreground">Mais Popular</Badge>
              </div>
              <CardHeader className="space-y-4 p-5 md:p-6 pt-8">
                <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl md:text-2xl text-secondary">Ouro</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Solução completa para gestão de talentos
                </CardDescription>
              </CardHeader>
              <CardContent className="p-5 md:p-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Mapeamento avançado de mercado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Prospecção ativa de talentos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Entrevistas ilimitadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Avaliação comportamental STAR</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Acompanhamento de onboarding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Garantia de 60 dias</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Plano Diamante */}
            <Card className="hover:shadow-lg transition-shadow border-primary/50 md:col-span-2 lg:col-span-1">
              <CardHeader className="space-y-4 p-5 md:p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl md:text-2xl text-primary">Diamante</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Exclusivo para cargos executivos e estratégicos
                </CardDescription>
              </CardHeader>
              <CardContent className="p-5 md:p-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Headhunting especializado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Mapeamento internacional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Consultoria estratégica PDI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Avaliação psicológica completa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Negociação assistida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Acompanhamento estendido 6 meses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">Garantia de 90 dias</span>
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-primary px-2">Plano de Ação</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Etapas do nosso processo de recrutamento especializado
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              {
                number: "01",
                title: "Mapeamento de mercado",
                description:
                  "Pesquisar, buscar e identificar profissionais mais qualificados para uma vaga específica.",
              },
              {
                number: "02",
                title: "Prospecção ativa",
                description: "Aborda talentos de forma estratégica.",
              },
              {
                number: "03",
                title: "Entrevistas e triagem",
                description: "Avalia as competências técnicas e comportamentais dos candidatos.",
              },
              {
                number: "04",
                title: "Negociação",
                description:
                  "Atua como intermediador entre empresa e candidato para alinhar expectativas salariais e benefícios.",
              },
              {
                number: "05",
                title: "Acompanhamento",
                description: "Atua no processo de onboarding, garantindo integração do novo colaborador.",
              },
              {
                number: "06",
                title: "Diagnóstico",
                description: "Interpretação do cargo junto ao gestor ou líder direto.",
              },
            ].map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="space-y-2 p-5 md:p-6">
                  <div className="text-4xl md:text-5xl font-bold text-secondary/20">{step.number}</div>
                  <CardTitle className="text-lg md:text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-5 md:p-6 pt-0">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
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
                  <p className="text-sm md:text-base text-muted-foreground mb-3 leading-relaxed">
                    Cobramos o valor de <strong className="text-foreground">70% da remuneração</strong> baseado em R$
                    4.000,00 por processo e assessoria profissional.
                  </p>
                  <p className="text-lg md:text-xl font-bold text-primary">Custo total: R$ 5.600,00</p>
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-3 text-secondary">Custo de logística</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Atuação presencial na região de prospecção, divulgação, Recrutamento e Seleção (repasse de custo,
                    caso haja deslocamento de cidade ou região).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-3 text-secondary">Forma de pagamento</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">50% inicial</strong> e{" "}
                    <strong className="text-foreground">50%</strong> quando o profissional iniciar o trabalho.
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
            <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed px-4">
              Estamos prontos para ajudar sua empresa a encontrar os melhores talentos
            </p>
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
              <span>(71) 3340.1826 | (71) 99991-2091</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 bg-primary/95 text-primary-foreground/80 text-center text-xs md:text-sm border-t border-primary-foreground/10">
        <div className="container px-4">
          <p>© 2026 Talent Hunt. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
