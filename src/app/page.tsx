import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-accent2 selection:text-white pb-16">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-24 md:gap-40">
        <Hero />
        <RoleCoverage />
        <SelectedWork />
        <Proof />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-brand-bg/90 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight text-white">
          <Link href="/">Lumina</Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-muted">
          <Link href="#roles" className="hover:text-brand-text transition-colors">Roles</Link>
          <Link href="#work" className="hover:text-brand-text transition-colors">Work</Link>
          <Link href="#proof" className="hover:text-brand-text transition-colors">Proof</Link>
          <Link href="#contact" className="hover:text-brand-text transition-colors">Contact</Link>
        </div>
        
        <div className="flex items-center">
          <Link 
            href="#contact" 
            className="px-5 py-2.5 text-sm font-semibold rounded-full bg-white text-brand-bg hover:bg-gray-200 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-20 md:pt-32 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
      <div className="flex-1 space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-white">
          Lumina helps Web3 projects keep communities active, clear, and trusted.
        </h1>
        
        <p className="text-lg md:text-xl text-brand-muted max-w-2xl leading-relaxed">
          Community manager and project contributor focused on early-stage Web3 teams, project updates, member engagement, and contributor support.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link 
            href="#contact" 
            className="px-6 py-3 rounded-full bg-brand-accent2 hover:bg-brand-accent2/90 text-white font-semibold transition-all"
          >
            Contact Lumina
          </Link>
          <Link 
            href="#work" 
            className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold transition-colors"
          >
            View selected work
          </Link>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-brand-muted font-medium">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent1"></span>
            Community Management
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent3"></span>
            Project Contribution
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent2"></span>
            Web3 Communication
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-sm md:w-[400px] shrink-0 relative group">
        <div className="relative bg-brand-card p-3 rounded-3xl border border-white/10 overflow-hidden">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-brand-bg">
            <Image 
              src="/lumina-pfp.jpg" 
              alt="Lumina - Web3 Community Manager"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-brand-bg/90 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center gap-3">
              <div className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="text-xs font-semibold text-white/90">
                Open to Web3 community and contributor roles
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-32 space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Selected Work</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="group bg-brand-card rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
          <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/10">
            <Image 
              src="/hydronet.jpg" 
              alt="HydroNet project screenshot"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="p-8 space-y-6">
            <div className="space-y-2">
              <div className="text-brand-accent3 text-sm font-semibold tracking-wide uppercase">Community Manager</div>
              <h3 className="text-2xl font-bold text-white">HydroNet</h3>
            </div>
            <p className="text-brand-muted leading-relaxed">
              Supported community communication and engagement for HydroNet, a Web3 project with public positioning around water-management infrastructure.
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <span className="text-sm text-brand-muted">Timeline: Available on request</span>
              <a 
                href="https://x.com/HydroNet50354" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm font-semibold text-white hover:text-brand-accent3 transition-colors flex items-center gap-1"
              >
                View X profile →
              </a>
            </div>
          </div>
        </div>

        <div className="group bg-brand-card rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
          <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/10">
            <Image 
              src="/moonrascal.jpg" 
              alt="MoonRascal project screenshot"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="p-8 space-y-6">
            <div className="space-y-2">
              <div className="text-brand-accent1 text-sm font-semibold tracking-wide uppercase">Project Contributor</div>
              <h3 className="text-2xl font-bold text-white">MoonRascal</h3>
            </div>
            <p className="text-brand-muted leading-relaxed">
              Contributed to project-side activity and community-facing support for MoonRascal.
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <span className="text-sm text-brand-muted">Timeline: Available on request</span>
              <a 
                href="https://x.com/MoonRascal67" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm font-semibold text-white hover:text-brand-accent1 transition-colors flex items-center gap-1"
              >
                View X profile →
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-center text-sm text-brand-muted max-w-2xl mx-auto">
        Detailed scope and dates are available on request.
      </p>
    </section>
  );
}

function RoleCoverage() {
  const roles = [
    {
      num: "01",
      title: "Community Manager",
      description: "Keeps members informed, supports announcements, and helps the community stay active.",
      accentClass: "bg-white/10 group-hover:bg-brand-accent1"
    },
    {
      num: "02",
      title: "Community Moderator",
      description: "Helps maintain order, answer basic questions, and keep conversations useful.",
      accentClass: "bg-white/10 group-hover:bg-brand-accent2"
    },
    {
      num: "03",
      title: "Content Writer",
      description: "Writes simple project updates, community posts, and public-facing communication.",
      accentClass: "bg-white/10 group-hover:bg-brand-accent3"
    },
    {
      num: "04",
      title: "Project Contributor",
      description: "Supports day-to-day project tasks, coordination, and community-facing activity.",
      accentClass: "bg-white/10 group-hover:bg-brand-accent1"
    },
    {
      num: "05",
      title: "Growth Strategy",
      description: "Helps with visibility ideas, community momentum, and basic growth direction.",
      accentClass: "bg-white/10 group-hover:bg-brand-accent2"
    }
  ];

  return (
    <section id="roles" className="scroll-mt-32 space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Role Coverage</h2>
        <p className="text-lg text-brand-muted max-w-2xl">
          The areas Lumina supports across early Web3 communities and project teams.
        </p>
      </div>

      <div className="flex flex-col border-t border-white/10">
        {roles.map((role, idx) => (
          <div 
            key={idx} 
            className="group relative flex flex-col md:flex-row md:items-start justify-between py-8 border-b border-white/10 px-6 hover:bg-white/[0.02] transition-all duration-200"
          >
            {/* Subtle left accent line for each row that highlights on hover */}
            <div className={`absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300 ${role.accentClass}`} />
            
            <div className="flex items-center gap-4 md:w-1/3 mb-4 md:mb-0 shrink-0">
              <span className="font-mono text-xs text-brand-muted/70">{role.num}</span>
              <h3 className="text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                {role.title}
              </h3>
            </div>
            <div className="flex-1 md:pl-12">
              <p className="text-brand-muted text-sm md:text-base leading-relaxed max-w-2xl">
                {role.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Proof() {
  const links = [
    { name: "HydroNet X Profile", url: "https://x.com/HydroNet50354", type: "Public project reference" },
    { name: "MoonRascal X Profile", url: "https://x.com/MoonRascal67", type: "Public project reference" },
    { name: "Featured write-up / media proof", url: "https://x.com/i/status/2022068196678021485", type: "Public post reference" },
    { name: "LinkedIn Profile", url: "https://www.linkedin.com/in/bamise-francis-b9b5973b5?utm_source=share_via&utm_content=profile&utm_medium=member_android", type: "Professional profile" }
  ];

  return (
    <section id="proof" className="scroll-mt-32 space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Public Proof</h2>
      </div>
      
      <div className="flex flex-col gap-3">
        {links.map((link, idx) => (
          <a 
            key={idx}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-brand-card rounded-2xl border border-white/5 hover:border-white/20 transition-all"
          >
            <div className="space-y-1">
              <h3 className="font-semibold text-white text-lg group-hover:text-brand-accent3 transition-colors">
                {link.name}
              </h3>
              <p className="text-sm text-brand-muted">{link.type}</p>
            </div>
            <div className="mt-4 sm:mt-0 opacity-50 group-hover:opacity-100 transition-opacity">
              <span className="hidden sm:inline text-white">Visit link →</span>
              <span className="sm:hidden text-white font-medium">→ Visit link</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const contacts = [
    { platform: "X", handle: "@Lumi25q", link: "https://x.com/Lumi25q" },
    { platform: "Telegram", handle: "Lumi25q", link: "https://t.me/Lumi25q" },
    { platform: "Discord", handle: "Lumi25q" },
    { platform: "LinkedIn", handle: "Bamise Francis", link: "https://www.linkedin.com/in/bamise-francis-b9b5973b5?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  ];

  return (
    <section id="contact" className="scroll-mt-32 pt-12 border-t border-white/10">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Need a Web3 community contributor?
          </h2>
          <p className="text-lg text-brand-muted max-w-md leading-relaxed">
            Reach out to Lumina for community management, contributor support, and Web3 project communication.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map((contact, idx) => {
            if (contact.link) {
              return (
                <a
                  key={idx}
                  href={contact.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-6 bg-brand-card rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all flex flex-col justify-between"
                >
                  <div className="text-brand-muted text-sm font-medium mb-2">{contact.platform}</div>
                  <div className="text-white font-semibold text-lg">{contact.handle}</div>
                </a>
              );
            }
            return (
              <div
                key={idx}
                className="p-6 bg-brand-card rounded-2xl border border-white/5 flex flex-col justify-between"
              >
                <div className="text-brand-muted text-sm font-medium mb-2">{contact.platform}</div>
                <div className="text-white font-semibold text-lg">{contact.handle}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-24 py-8 border-t border-white/5 text-center px-6 flex flex-col items-center">
      <p className="text-white font-semibold tracking-wide">
        Lumina / Lumi25q
      </p>
      <p className="text-brand-muted text-sm mt-1 mb-6">
        Web3 Community Manager and Project Contributor
      </p>
      <p className="text-xs text-brand-muted/50">
        Built by <a href="https://ulegend.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ulegend</a>
      </p>
    </footer>
  );
}
