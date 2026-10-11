import React, { useState } from 'react';
import { Globe, Server, Mail, Shield, CheckCircle2, ArrowRight, Search, HardDrive } from 'lucide-react';
import { dispatchEmailEnquiry } from '../utils/emailEnquiry';

interface DomainInquiryToolProps {
  onSuccessInquiry: (details: string) => void;
}

export const DomainInquiryTool: React.FC<DomainInquiryToolProps> = ({ onSuccessInquiry }) => {
  const [domainName, setDomainName] = useState('');
  const [tld, setTld] = useState('.com');
  const [serviceType, setServiceType] = useState('domain-and-hosting');
  const [email, setEmail] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<{ status: 'ready' | 'submitted'; domain: string; msg: string } | null>(null);

  const cleanDomain = domainName.toLowerCase().replace(/[^a-z0-9-]/g, '');

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cleanDomain) return;

    setIsChecking(true);

    setTimeout(() => {
      setIsChecking(false);
      setResult({
        status: 'ready',
        domain: `${cleanDomain}${tld}`,
        msg: `Inquiry prepared for ${cleanDomain}${tld}. Complete corporate provisioning & registrar transfer checks.`
      });
    }, 600);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    const fullDomain = `${cleanDomain}${tld}`;
    const summary = `Domain & Infrastructure Inquiry: ${fullDomain} | Service: ${serviceType} | Email: ${email}`;

    dispatchEmailEnquiry({
      type: 'domain_inquiry',
      subject: `Domain & Infrastructure Inquiry: ${fullDomain}`,
      senderName: email.split('@')[0],
      senderEmail: email,
      serviceOrProduct: `Domain: ${fullDomain} (${serviceType})`,
      notes: `Requested infrastructure service: ${serviceType} for domain ${fullDomain}.`
    });
    
    setResult({
      status: 'submitted',
      domain: fullDomain,
      msg: `Inquiry for ${fullDomain} transmitted to contact@sangelsoftwares.com. Our infrastructure team will conduct live WHOIS/registry checks and verify DNS/hosting options.`
    });

    onSuccessInquiry(summary);
  };

  return (
    <div className="bg-[#0A101D] border border-cyan-900/60 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Globe className="w-4 h-4" />
            <span>Domain, Cloud VPS & Business Email Desk</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
            Reserve Domain & Provision Cloud Infrastructure
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Real registrar lookup assistance (.com, .in, .org), high-speed NVMe hosting, and Google Workspace / M365 migration.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400">.com</span>
          <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400">.in</span>
          <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400">.org</span>
          <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400">VPS</span>
        </div>
      </div>

      {result?.status === 'submitted' ? (
        <div className="p-6 bg-cyan-950/40 border border-cyan-500/50 rounded-xl text-center space-y-3">
          <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-display text-lg font-bold text-white">
            Infrastructure Inquiry Received
          </h4>
          <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
            {result.msg}
          </p>
          <button
            onClick={() => {
              setResult(null);
              setDomainName('');
              setEmail('');
            }}
            className="text-xs text-cyan-400 hover:underline pt-2 cursor-pointer"
          >
            Check another domain or server requirement →
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <form onSubmit={handleLookup} className="flex flex-col sm:flex-row items-center gap-2">
            <div className="relative flex-1 w-full flex items-center bg-slate-900 border border-slate-700 rounded-lg overflow-hidden focus-within:border-cyan-400">
              <span className="pl-3 text-slate-500 text-xs font-mono">https://</span>
              <input
                type="text"
                value={domainName}
                onChange={(e) => setDomainName(e.target.value)}
                placeholder="yourcompanyname"
                className="w-full py-2.5 px-2 text-xs text-white bg-transparent focus:outline-none placeholder-slate-500 font-mono"
              />
              <select
                value={tld}
                onChange={(e) => setTld(e.target.value)}
                className="bg-slate-800 text-cyan-300 px-3 py-2.5 text-xs font-mono border-l border-slate-700 focus:outline-none cursor-pointer"
              >
                <option value=".com">.com</option>
                <option value=".in">.in</option>
                <option value=".co.in">.co.in</option>
                <option value=".org">.org</option>
                <option value=".io">.io</option>
                <option value=".net">.net</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isChecking || !cleanDomain}
              className="w-full sm:w-auto px-6 py-2.5 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm shadow-cyan-500/20 whitespace-nowrap flex items-center justify-center gap-1.5"
            >
              {isChecking ? <span>Querying...</span> : (
                <>
                  <Search className="w-3.5 h-3.5" />
                  <span>Lookup Domain</span>
                </>
              )}
            </button>
          </form>

          {/* Service Bundling Radio Options */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            {[
              { id: 'domain-and-hosting', label: 'Domain + Cloud Hosting', icon: HardDrive },
              { id: 'managed-vps', label: 'Managed VPS Server', icon: Server },
              { id: 'business-email', label: 'Corporate Email (M365/Google)', icon: Mail },
              { id: 'full-stack-infra', label: 'Complete IT Infrastructure', icon: Shield }
            ].map((srv) => {
              const Icon = srv.icon;
              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setServiceType(srv.id)}
                  className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                    serviceType === srv.id
                      ? 'bg-cyan-950/70 border-cyan-500 text-white'
                      : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-cyan-400 mb-1" />
                  <div className="text-[11px] font-medium leading-tight">{srv.label}</div>
                </button>
              );
            })}
          </div>

          {result?.status === 'ready' && (
            <form onSubmit={handleFinalSubmit} className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-2">
              <div className="text-xs text-cyan-300 font-mono shrink-0">
                Inquiring for: <strong className="text-white">{result.domain}</strong>
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter corporate email for registrar verification..."
                className="w-full sm:flex-1 px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                Request Provisioning Details
              </button>
            </form>
          )}
        </div>
      )}

      {/* Feature Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Authentic Registrar Checks</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>NVMe High-Speed Storage</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Free SSL & DNS Security</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>Google Workspace / M365 Setup</span>
        </div>
      </div>
    </div>
  );
};
