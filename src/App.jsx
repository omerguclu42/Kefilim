import React, { useState } from 'react';
import { 
  Mail, Lock, User, ChevronRight, Home, 
  ShieldCheck, HelpCircle, Target, Users, 
  BarChart3, ArrowLeft, CheckCircle2, 
  Zap, Scale, HeartHandshake, Award,
  FileCheck, Key, Shield, ArrowRight, FileText, Briefcase,
  Building, Plus, LogOut, Bell, AlertCircle, UploadCloud, CheckCircle, MapPin
} from 'lucide-react';

const mockDB = [
  { id: 1, email: 'omerguclu42@gmail.com', password: '123456', role: 'tenant', name: 'Ömer Güçlü', title: 'Kiracı Adayı', isProfileComplete: false, score: null },
  { id: 2, email: 'omerguclu43@gmail.com', password: '123456', role: 'landlord', name: 'Ömer Güçlü', title: 'Ev Sahibi', isProfileComplete: true, score: 920 },
  { id: 3, email: 'omerguclu44@gmail.com', password: '123456', role: 'agent', name: 'Güçlü Emlak', title: 'Gayrimenkul Danışmanı', isProfileComplete: true, score: 950 }
];

const COLORS = {
  navy: '#003049',
  orange: '#E76F2E'
};

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [dashboardView, setDashboardView] = useState('home');

  if (currentUser) {
    return <DashboardLayout currentUser={currentUser} setCurrentUser={setCurrentUser} activeView={dashboardView} setActiveView={setDashboardView} />;
  }

  return <LandingPage onLogin={(user) => { setCurrentUser(user); setDashboardView('home'); }} />;
}

const LandingPage = ({ onLogin }) => {
  const [view, setView] = useState('home'); 
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('tenant');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      const user = mockDB.find(u => u.email === email && u.password === password);
      if (user) onLogin(user);
      else setError('Hatalı e-posta veya şifre! Lütfen test hesaplarını kullanın.');
    } else {
      onLogin({ id: Date.now(), email, password, role, name: 'Yeni Kullanıcı', title: role === 'tenant' ? 'Aday' : 'Ev Sahibi', isProfileComplete: false, score: null });
    }
  };

  const Logo = () => (
    <div className="flex items-center group cursor-pointer" onClick={() => { setView('home'); setIsLogin(true); }}>
      <span className="text-4xl md:text-[2.75rem] font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#003049] to-[#00507a] z-10 pt-1">
        KEFİLİM
      </span>
    </div>
  );

  // --- HAKKIMIZDA SAYFASI ---
  const AboutPage = () => (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20 max-w-7xl mx-auto px-6 pt-16">
      <div className="text-center max-w-4xl mx-auto space-y-8 mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
        <h2 className="text-6xl md:text-7xl font-black tracking-tighter leading-tight" style={{ color: COLORS.navy }}>
          Gayrimenkul Dünyasında <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
            Güvenin Yeni Adı.
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
          Emlak piyasasının en büyük sorunu olan "güvensizliği" teknolojiyle bitiriyoruz. Kefilim; kiralama ve ev satışı süreçlerinde tüm tarafları şeffaf, doğrulanmış ve adil bir platformda buluşturur.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {[
          { icon: <Zap className="text-orange-500" size={36} />, title: "Hız ve Şeffaflık", desc: "Haftalar süren evrak trafiğini ve manuel kontrolleri dijitalleştiriyoruz. Saniyeler içinde doğrulama sağlayarak vakit kaybını sıfıra indiriyoruz." },
          { icon: <Scale className="text-blue-500" size={36} />, title: "Çift Yönlü Adalet", desc: "Sadece kiracıyı değil, ev sahibini de puanlayarak herkesin hakkını koruyan, eşit ve güvenilir bir ekosistem inşa ediyoruz." },
          { icon: <Award className="text-emerald-500" size={36} />, title: "Resmi Doğrulama", desc: "Sadece e-Devlet barkodlu belgeleri temel alıyoruz. Yapay zeka destekli altyapımızla manipülasyonu ve sahteciliği tamamen bitiriyoruz." }
        ].map((card, i) => (
          <div key={i} className="group bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 border border-white/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-50 group-hover:scale-110 transition-transform duration-500">
              {card.icon}
            </div>
            <h4 className="text-2xl font-black mb-4 tracking-tight" style={{ color: COLORS.navy }}>{card.title}</h4>
            <p className="text-slate-500 font-medium leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // --- NASIL ÇALIŞIR SAYFASI ---
  const HowItWorksPage = () => (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20 max-w-7xl mx-auto px-6 pt-16">
      <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter" style={{ color: COLORS.navy }}>
          Süreç Nasıl <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">İşliyor?</span>
        </h2>
        <p className="text-xl text-slate-500 font-medium">Karmaşık kiralama ve satış süreçlerini herkes için çok basit 3 adıma indirdik.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Kiracı Akışı */}
        <div className="bg-white/80 backdrop-blur-xl p-12 rounded-[3.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex items-center gap-5 mb-12 relative z-10">
            <div className="p-4 bg-orange-50 rounded-2xl">
              <User size={36} className="text-orange-500" />
            </div>
            <h3 className="text-4xl font-black tracking-tight" style={{ color: COLORS.navy }}>Kiracı ve Alıcılar İçin</h3>
          </div>
          
          <div className="space-y-10 relative z-10">
            {[
              { title: "Profilini Oluştur", desc: "Temel bilgilerinle dakikalar içinde ücretsiz üye ol ve hesabını onayla." },
              { title: "Barkodlu Belgelerini Yükle", desc: "e-Devlet'ten aldığın SGK ve Adli Sicil gibi barkodlu PDF'leri sisteme yükle. Yapay zeka destekli sistemimiz saniyeler içinde doğrulasın." },
              { title: "Kefilim Skorunu Paylaş", desc: "Oluşan dijital 'Kiracı Pasaportunu' dilediğin ev sahibiyle tek tıkla paylaş, güven ver ve rakiplerinin önüne geç." }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 group/step">
                <div className="w-14 h-14 shrink-0 bg-orange-100 rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner text-orange-600 group-hover/step:scale-110 group-hover/step:bg-orange-500 group-hover/step:text-white transition-all duration-300">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3 tracking-snug group-hover/step:text-orange-500 transition-colors" style={{ color: COLORS.navy }}>{step.title}</h4>
                  <p className="text-slate-500 text-base font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ev Sahibi Akışı */}
        <div className="bg-gradient-to-br from-[#003049] to-[#001f30] p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,48,73,0.3)] transition-all duration-500">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="flex items-center gap-5 mb-12 relative z-10">
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
              <Home size={36} className="text-orange-400" />
            </div>
            <h3 className="text-4xl font-black tracking-tight text-white">Ev Sahibi ve Emlakçılar İçin</h3>
          </div>
          
          <div className="space-y-10 relative z-10">
            {[
              { title: "İlanını ve Kriterlerini Belirle", desc: "Kiralık veya satılık evini sisteme kaydet, detayları gir ve aradığın minimum Kefilim skorunu belirleyerek doğru kitleyi hedefle." },
              { title: "Doğrulanmış Başvuruları İncele", desc: "Adayların beyanlarına değil; Findeks, SGK ve İcra doğrulamasından geçmiş resmi raporlara ve geçmiş puanlarına bak." },
              { title: "İç Huzuruyla Süreci Tamamla", desc: "Finansal/güven kapasitesi doğrulanmış en uygun kiracı veya alıcıyla eşleş, kiralama veya satış sürecini güvenle el sıkışarak bitir." }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 group/step">
                <div className="w-14 h-14 shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center font-black text-2xl text-orange-400 border border-white/5 group-hover/step:scale-110 group-hover/step:bg-orange-500 group-hover/step:text-white group-hover/step:border-orange-400 transition-all duration-300">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3 tracking-snug text-slate-100 group-hover/step:text-orange-300 transition-colors">{step.title}</h4>
                  <p className="text-slate-400 text-base font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // --- GÜVENLİK SAYFASI ---
  const SecurityPage = () => (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20 max-w-7xl mx-auto px-6 pt-16">
      <div className="text-center max-w-4xl mx-auto space-y-8 mb-24 relative">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-100 to-orange-50 rounded-[2rem] flex items-center justify-center mb-8 shadow-inner border border-white">
          <ShieldCheck size={48} className="text-orange-500" />
        </div>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight" style={{ color: COLORS.navy }}>
          Verileriniz <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Bankacılık Standardında</span> Korunur.
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
          Sistemimiz "Sıfır Bilgi" prensibiyle çalışır. Şifrelerinizi bilmeyiz, sadece sizin izninizle resmi belgelerdeki barkodları doğrularız.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {[
          { icon: <Shield size={40} className="text-blue-500" />, title: "KVKK Uyumluluğu", desc: "Tüm altyapımız Kişisel Verilerin Korunması Kanunu'na %100 uyumludur. Verileriniz şifrelenir, kimseyle paylaşılmaz ve asla üçüncü şahıslara satılmaz." },
          { icon: <Key size={40} className="text-orange-500" />, title: "Şifrenizi İstemeyiz", desc: "e-Devlet veya banka şifrelerinizi asla sistemimize girmezsiniz. Siz sadece kendi indirdiğiniz barkodlu PDF belgesini yüklersiniz, gerisini yapay zeka halleder." },
          { icon: <FileCheck size={40} className="text-emerald-500" />, title: "Barkod Doğrulama", desc: "Yüklediğiniz belgeler özel optik okuyucularla taranır ve e-Devlet servislerinden anlık olarak 'Gerçektir' onayı alınır. Manipülasyon riski sıfırdır." }
        ].map((item, i) => (
          <div key={i} className="bg-white/80 backdrop-blur-xl p-12 rounded-[3rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] text-center flex flex-col items-center hover:-translate-y-2 transition-all duration-500">
            <div className="mb-8 p-5 bg-slate-50 rounded-3xl shadow-sm border border-slate-100">
              {item.icon}
            </div>
            <h4 className="text-2xl font-black mb-4 tracking-tight" style={{ color: COLORS.navy }}>{item.title}</h4>
            <p className="text-slate-500 text-base font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-20 bg-gradient-to-r from-slate-900 via-[#001f30] to-slate-900 text-white p-12 md:p-16 rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 max-w-2xl">
            <h4 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-white">Güvenlik Raporumuzu İnceleyin</h4>
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">Altyapımız bağımsız siber güvenlik firmaları tarafından düzenli olarak sızma (pentest) testlerine tabi tutulmaktadır.</p>
        </div>
        <button className="group relative px-10 py-5 bg-white text-[#003049] rounded-3xl font-black text-lg hover:bg-orange-50 transition-all duration-300 shrink-0 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] flex items-center gap-3">
            Sertifikaları Gör
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] bg-gradient-to-br from-slate-50 via-white to-orange-50/20 font-sans text-slate-900 overflow-x-hidden selection:bg-orange-500 selection:text-white relative z-0">
      
      {/* Arka Plan Görsel Maskesi */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 w-full h-full opacity-[0.06] bg-no-repeat bg-cover bg-left" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            maskImage: "linear-gradient(to right, black 0%, transparent 60%)",
            WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 60%)"
          }} 
        />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      {/* Üst Menü */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center relative z-50">
        <Logo />
        <div className="hidden md:flex items-center gap-8 text-base font-bold text-slate-500 bg-white/70 backdrop-blur-xl px-8 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50">
          {[
            { id: 'home', label: 'Ana Sayfa' },
            { id: 'about', label: 'Hakkımızda' },
            { id: 'how-it-works', label: 'Nasıl Çalışır?' },
            { id: 'security', label: 'Güvenlik' }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => {
                setView(tab.id);
                if (tab.id === 'home') setIsLogin(true);
              }}
              className={`relative px-2 py-1 transition-colors duration-300 ${view === tab.id ? 'text-orange-600' : 'hover:text-[#003049]'}`}
            >
              {tab.label}
              {view === tab.id && (
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-in fade-in zoom-in duration-300"></span>
              )}
            </button>
          ))}
        </div>
        <div className="hidden md:block">
          <button 
            onClick={() => { setView('home'); setIsLogin(true); }}
            className={`px-10 py-4 rounded-full border-2 font-black transition-all duration-300 ${view === 'home' ? 'bg-[#003049] text-white border-[#003049] hover:bg-[#001f30] hover:shadow-[0_10px_30px_rgba(0,48,73,0.3)]' : 'border-[#003049] text-[#003049] hover:bg-[#003049] hover:text-white'}`}
          >
            Giriş Yap
          </button>
        </div>
      </nav>

      {/* Sayfa Yönlendirmeleri */}
      <div className="relative min-h-[calc(100vh-200px)]">
        {view === 'about' && <AboutPage />}
        {view === 'how-it-works' && <HowItWorksPage />}
        {view === 'security' && <SecurityPage />}
        {view === 'home' && (
          /* ANA SAYFA İÇERİĞİ */
          <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            
            <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-700 relative z-10">
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-400/20 rounded-full blur-[100px] -z-10"></div>
              
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md text-orange-700 rounded-full text-sm font-black border border-white shadow-[0_8px_30px_rgb(231,111,46,0.15)] hover:scale-105 transition-transform cursor-pointer">
                <ShieldCheck size={20} className="text-orange-500" />
                <span>E-Devlet Onaylı Güven Sistemi</span>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse ml-2"></span>
              </div>
              
              <h1 className="text-7xl md:text-[5.5rem] font-black leading-[1.05] tracking-tighter" style={{ color: COLORS.navy }}>
                Güvenilir <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003049] to-[#006ba1]">Kiracı,</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Adil Ev Sahibi.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 max-w-lg leading-relaxed font-medium">
                Türkiye'nin ilk veriye dayalı gayrimenkul ekosistemi. Hem kiralarken hem de evinizi satarken, uçtan uca şeffaf ve güvenilir kişilerle muhatap olduğunuz bir deneyim sunuyoruz.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <div className="flex-1 p-8 bg-white/70 backdrop-blur-xl rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform group">
                  <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-black text-2xl mb-2" style={{ color: COLORS.navy }}>%100 Doğru</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Resmi e-Devlet barkod doğrulaması ile tam garanti.</p>
                </div>
                <div className="flex-1 p-8 bg-white/70 backdrop-blur-xl rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform group">
                  <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <HeartHandshake size={24} />
                  </div>
                  <h4 className="font-black text-2xl mb-2" style={{ color: COLORS.navy }}>Tüm Taraflara Güvence</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Sistemimizde her bir taraf (kiracı, ev sahibi, alıcı, satıcı ve emlakçı) aynı şeffaflıkla güvence altındadır.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xl p-10 md:p-14 rounded-[3.5rem] shadow-[0_32px_80px_-16px_rgba(0,0,0,0.1)] border border-white relative animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent rounded-[3.5rem] pointer-events-none"></div>
              
              <div className="flex bg-slate-100/80 p-2 rounded-[1.5rem] mb-12 relative z-10 backdrop-blur-sm">
                <button 
                  onClick={() => setIsLogin(true)} 
                  className={`flex-1 py-4 rounded-[1.25rem] text-sm md:text-base font-black transition-all duration-300 ${isLogin ? 'bg-white shadow-[0_8px_20px_rgb(0,0,0,0.06)] text-[#003049] scale-100' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Giriş Yap
                </button>
                <button 
                  onClick={() => setIsLogin(false)} 
                  className={`flex-1 py-4 rounded-[1.25rem] text-sm md:text-base font-black transition-all duration-300 ${!isLogin ? 'bg-white shadow-[0_8px_20px_rgb(0,0,0,0.06)] text-[#003049]' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Kayıt Ol
                </button>
              </div>
              
              <form className="space-y-6 relative z-10" onSubmit={handleLoginSubmit}>
                
                {error && (
                  <div className="bg-red-50 text-red-500 p-4 rounded-2xl mb-6 text-sm font-bold flex items-center gap-3 border border-red-100">
                    <AlertCircle size={20}/> {error}
                  </div>
                )}
                
                <button type="button" className="w-full py-5 border-2 border-slate-100 rounded-[1.5rem] flex items-center justify-center gap-4 font-black text-slate-600 hover:bg-slate-50 hover:border-slate-200 transition-all active:scale-95 shadow-sm bg-white group">
                  <div className="bg-slate-50 p-2 rounded-full group-hover:bg-white transition-colors">
                    <img src="https://www.google.com/favicon.ico" className="w-5 h-5 drop-shadow-sm" alt="Google" />
                  </div>
                  Google ile {isLogin ? 'Giriş Yap' : 'Devam Et'}
                </button>
                
                <div className="relative flex items-center py-4">
                    <div className="flex-grow border-t border-slate-100/80"></div>
                    <span className="flex-shrink mx-6 text-slate-300 text-[10px] font-black uppercase tracking-[0.4em] bg-white px-2">veya e-posta</span>
                    <div className="flex-grow border-t border-slate-100/80"></div>
                </div>
                
                <div className="space-y-5">
                  {!isLogin && (
                    <div className="grid grid-cols-3 gap-3 pb-5 animate-in slide-in-from-top-4 duration-500">
                        <button 
                          type="button" 
                          onClick={() => setRole('tenant')} 
                          className={`p-4 md:p-6 rounded-3xl border-2 flex flex-col items-center gap-3 transition-all duration-300 ${role === 'tenant' ? 'border-orange-500 bg-orange-50/80 shadow-[0_8px_20px_rgba(231,111,46,0.15)] scale-100' : 'border-slate-100 bg-slate-50/50 text-slate-400 hover:bg-slate-50 hover:scale-[1.02]'}`}
                        >
                          <div className={`p-2.5 rounded-xl ${role === 'tenant' ? 'bg-orange-500 text-white shadow-md' : 'bg-white text-slate-300 shadow-sm'}`}>
                            <User size={24} />
                          </div>
                          <span className={`text-[10px] md:text-xs font-black uppercase tracking-wider ${role === 'tenant' ? 'text-orange-700' : ''}`}>KİRACI/<br/>ALICI</span>
                        </button>
                        <button 
                          type="button" 
                          onClick={() => setRole('landlord')} 
                          className={`p-4 md:p-6 rounded-3xl border-2 flex flex-col items-center gap-3 transition-all duration-300 ${role === 'landlord' ? 'border-[#003049] bg-[#003049]/5 shadow-[0_8px_20px_rgba(0,48,73,0.15)] scale-100' : 'border-slate-100 bg-slate-50/50 text-slate-400 hover:bg-slate-50 hover:scale-[1.02]'}`}
                        >
                          <div className={`p-2.5 rounded-xl ${role === 'landlord' ? 'bg-[#003049] text-white shadow-md' : 'bg-white text-slate-300 shadow-sm'}`}>
                            <Home size={24} />
                          </div>
                          <span className={`text-[10px] md:text-xs font-black uppercase tracking-wider text-center leading-tight ${role === 'landlord' ? 'text-[#003049]' : ''}`}>EV SAHİBİ/<br/>SATICI</span>
                        </button>
                        <button 
                          type="button" 
                          onClick={() => setRole('agent')} 
                          className={`p-4 md:p-6 rounded-3xl border-2 flex flex-col items-center gap-3 transition-all duration-300 ${role === 'agent' ? 'border-blue-500 bg-blue-50/80 shadow-[0_8px_20px_rgba(59,130,246,0.15)] scale-100' : 'border-slate-100 bg-slate-50/50 text-slate-400 hover:bg-slate-50 hover:scale-[1.02]'}`}
                        >
                          <div className={`p-2.5 rounded-xl ${role === 'agent' ? 'bg-blue-500 text-white shadow-md' : 'bg-white text-slate-300 shadow-sm'}`}>
                            <Briefcase size={24} />
                          </div>
                          <span className={`text-[10px] md:text-xs font-black uppercase tracking-wider text-center leading-tight ${role === 'agent' ? 'text-blue-700' : ''}`}>EMLAKÇI/<br/>DANIŞMAN</span>
                        </button>
                    </div>
                  )}
                  
                  {!isLogin && (
                    <div className="relative group animate-in slide-in-from-top-2 duration-300">
                      <FileText className="absolute left-6 top-[1.35rem] text-slate-400 group-focus-within:text-orange-500 transition-colors" size={22} />
                      <input type="text" placeholder={role === 'agent' ? "T.C. Kimlik / Vergi Numarası" : "T.C. Kimlik Numarası"} maxLength="11" className="w-full pl-16 pr-6 py-5 bg-slate-50/80 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-[1.5rem] transition-all outline-none text-base font-semibold text-slate-700 shadow-sm placeholder:text-slate-400" />
                    </div>
                  )}
                  
                  {!isLogin && (
                    <div className="relative group animate-in slide-in-from-top-2 duration-300">
                      <User className="absolute left-6 top-[1.35rem] text-slate-400 group-focus-within:text-orange-500 transition-colors" size={22} />
                      <input type="text" placeholder="Ad Soyad" className="w-full pl-16 pr-6 py-5 bg-slate-50/80 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-[1.5rem] transition-all outline-none text-base font-semibold text-slate-700 shadow-sm placeholder:text-slate-400" />
                    </div>
                  )}
                  <div className="relative group">
                    <Mail className="absolute left-6 top-[1.35rem] text-slate-400 group-focus-within:text-orange-500 transition-colors" size={22} />
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="E-posta Adresi" className="w-full pl-16 pr-6 py-5 bg-slate-50/80 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-[1.5rem] transition-all outline-none text-base font-semibold text-slate-700 shadow-sm placeholder:text-slate-400" />
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-6 top-[1.35rem] text-slate-400 group-focus-within:text-orange-500 transition-colors" size={22} />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Şifreniz" className="w-full pl-16 pr-6 py-5 bg-slate-50/80 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-[1.5rem] transition-all outline-none text-base font-semibold text-slate-700 shadow-sm placeholder:text-slate-400" />
                  </div>
                </div>

                {isLogin && (
                  <div className="text-right px-2 pb-2">
                    <a href="#" className="text-sm font-bold text-slate-400 hover:text-orange-600 transition-colors">Şifremi Unuttum</a>
                  </div>
                )}

                <button 
                  type="submit"
                  className="w-full py-6 rounded-[1.5rem] text-white font-black text-xl shadow-[0_20px_40px_-10px_rgba(231,111,46,0.6)] hover:shadow-[0_25px_50px_-12px_rgba(231,111,46,0.7)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group relative overflow-hidden" 
                  style={{ backgroundColor: COLORS.orange }}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative z-10">{isLogin ? 'Giriş Yap' : 'Hemen Başla'}</span>
                  <ChevronRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>

                {isLogin && (
                  <div className="mt-6 pt-6 border-t border-slate-100/80 text-center animate-in slide-in-from-bottom-2">
                    <p className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">Test İçin Hızlı Doldur</p>
                    <div className="grid grid-cols-3 gap-2">
                      <button type="button" onClick={() => {setEmail('omerguclu42@gmail.com'); setPassword('123456');}} className="text-[10px] bg-slate-100 hover:bg-[#003049] hover:text-white py-2.5 rounded-xl text-[#003049] font-bold transition-colors shadow-sm">Kiracı</button>
                      <button type="button" onClick={() => {setEmail('omerguclu43@gmail.com'); setPassword('123456');}} className="text-[10px] bg-slate-100 hover:bg-[#003049] hover:text-white py-2.5 rounded-xl text-[#003049] font-bold transition-colors shadow-sm">Ev Sahibi</button>
                      <button type="button" onClick={() => {setEmail('omerguclu44@gmail.com'); setPassword('123456');}} className="text-[10px] bg-slate-100 hover:bg-[#003049] hover:text-white py-2.5 rounded-xl text-[#003049] font-bold transition-colors shadow-sm">Emlakçı</button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </main>
        )}
      </div>

      {/* Alt Bilgi */}
      <footer className="max-w-7xl mx-auto px-6 py-8 mt-10 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-8 bg-transparent">
        <Logo />
        <div className="flex gap-10 text-xs font-black text-slate-400 uppercase tracking-widest bg-white/50 backdrop-blur-md px-8 py-4 rounded-full border border-white">
            <a href="#" className="hover:text-orange-600 transition-colors">Gizlilik</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Sözleşmeler</a>
            <a href="#" className="hover:text-orange-600 transition-colors">İletişim</a>
        </div>
        <p className="text-slate-400 text-xs font-black tracking-[0.2em] uppercase">© 2026 KEFİLİM</p>
      </footer>
    </div>
  );
};

// ==========================================
// ALT BİLEŞENLER (DASHBOARD)
// ==========================================

const DashboardLayout = ({ currentUser, setCurrentUser, activeView, setActiveView }) => {
  const handleLogout = () => setCurrentUser(null);
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans flex overflow-hidden selection:bg-orange-500 selection:text-white">
      {/* SOL MENÜ (SIDEBAR) */}
      <aside className="w-72 bg-white border-r border-slate-100 hidden md:flex flex-col shadow-2xl shadow-slate-200/20 z-20">
        <div className="p-8 pb-6 flex items-center gap-3 cursor-pointer" onClick={() => setActiveView('home')}>
          <ShieldCheck className="w-10 h-10 text-[#E76F2E]" />
          <div>
            <h1 className="text-3xl font-black tracking-tight text-[#003049] leading-none">KEFİLİM</h1>
            <p className="text-[#E76F2E] text-[10px] font-bold tracking-widest uppercase mt-1">Güven Sistemi</p>
          </div>
        </div>

        <nav className="flex-1 px-4 mt-4 space-y-2">
          <MenuButton icon={<Home />} label="Kontrol Paneli" isActive={activeView === 'home'} onClick={() => setActiveView('home')} />
          {currentUser.role === 'tenant' && (
            <>
              <MenuButton icon={<User />} label="Profilimi Tamamla" isActive={activeView === 'profile'} onClick={() => setActiveView('profile')} badge={!currentUser.isProfileComplete ? "Eksik" : null} />
              <MenuButton icon={<Search />} label="İlan Ara" isActive={activeView === 'search'} onClick={() => currentUser.isProfileComplete ? setActiveView('search') : alert("Lütfen önce profilinizi tamamlayın!")} disabled={!currentUser.isProfileComplete} />
              <MenuButton icon={<FileText />} label="Başvurularım" isActive={false} onClick={() => {}} disabled={!currentUser.isProfileComplete} />
            </>
          )}
          {(currentUser.role === 'landlord' || currentUser.role === 'agent') && (
            <>
              <MenuButton icon={<Building />} label="Aktif İlanlarım" isActive={activeView === 'search'} onClick={() => setActiveView('search')} />
              <MenuButton icon={<Plus />} label="Yeni İlan Ekle" isActive={activeView === 'add-listing'} onClick={() => setActiveView('add-listing')} />
              <MenuButton icon={<Users />} label="Gelen Başvurular" isActive={false} onClick={() => {}} />
            </>
          )}
        </nav>

        <div className="p-4 mb-4 border-t border-slate-100">
          <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-3 border border-slate-100">
            <div className="w-10 h-10 bg-[#003049] rounded-xl flex items-center justify-center font-bold text-white shadow-md shrink-0">
              {currentUser.name.charAt(0)}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold truncate text-[#003049]">{currentUser.name}</p>
              <p className="text-xs text-gray-500 truncate font-medium">{currentUser.title}</p>
            </div>
            <button onClick={handleLogout} className="text-gray-400 hover:text-red-500 transition-colors p-2 bg-white rounded-lg border border-slate-200 shadow-sm hover:bg-red-50">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* ANA İÇERİK ALANI */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative z-0">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-[#003049]/5 to-transparent -z-10 pointer-events-none"></div>
        <header className="h-24 px-8 md:px-12 flex items-center justify-between z-10 sticky top-0 bg-[#F8FAFC]/80 backdrop-blur-md border-b border-slate-200/50">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#003049]">
              {activeView === 'home' && 'Kontrol Paneli'}
              {activeView === 'profile' && 'Dijital Kiracı Pasaportu'}
              {activeView === 'add-listing' && 'İlan Yönetimi'}
              {activeView === 'search' && 'Keşfet'}
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-400 hover:text-[#003049] transition-colors"><Bell size={24} />{!currentUser.isProfileComplete && <span className="absolute top-1 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>}</button>
            <div className={`hidden md:flex items-center gap-3 pl-6 border-l border-slate-200 transition-opacity ${!currentUser.isProfileComplete ? 'opacity-50 grayscale' : ''}`}>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Kefilim Skoru</span>
                <div className="flex items-baseline gap-1">
                  <span className={`font-extrabold text-xl leading-none ${currentUser.isProfileComplete ? 'text-[#003049]' : 'text-gray-400'}`}>
                    {currentUser.isProfileComplete ? currentUser.score : 'Belirsiz'}
                  </span>
                  {currentUser.isProfileComplete && <span className="text-emerald-500 font-bold text-sm">A+</span>}
                </div>
              </div>
              <ShieldCheck className={`w-8 h-8 ${currentUser.isProfileComplete ? 'text-[#E76F2E]' : 'text-gray-300'}`} />
            </div>
          </div>
        </header>

        <div className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full">
          {activeView === 'home' && <Dashboard user={currentUser} changeView={setActiveView} />}
          {activeView === 'profile' && <ProfileCompletion user={currentUser} updateUser={setCurrentUser} changeView={setActiveView} />}
          {activeView === 'add-listing' && <AddListing changeView={setActiveView} />}
          {activeView === 'search' && (
            <div className="text-center py-20 flex flex-col items-center">
              <MapPin className="w-16 h-16 text-slate-300 mb-4" />
              <h2 className="text-2xl font-bold text-[#003049]">İlan Modülü</h2>
              <p className="text-gray-500 font-medium">Bu ekran (Harita, ilan kartları ve filtreler) bir sonraki aşamada tasarlanacak.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const Dashboard = ({ user, changeView }) => {
  if (user.role === 'tenant' && !user.isProfileComplete) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#003049] mb-8">Merhaba, {user.name.split(' ')[0]}.</h1>
        <div className="bg-gradient-to-r from-[#003049] to-[#0a4666] rounded-[3rem] p-8 md:p-14 shadow-2xl text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          <ShieldCheck className="absolute -right-20 -bottom-20 w-80 h-80 text-white opacity-5" />
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm mb-6 shadow-lg shadow-red-500/30"><Lock size={16} /> Profil Eksik, Sistem Kilitli</div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Adım Atmadan Önce<br/><span className="text-[#E76F2E]">Güvenini</span> Kanıtla!</h2>
            <p className="text-blue-100/90 text-lg mb-8 font-medium leading-relaxed">Kefilim ekosisteminde ev arayabilmek için öncelikle e-Devlet evraklarını yükleyerek <strong>Dijital Pasaportunu</strong> oluşturman gerekiyor.</p>
            <button onClick={() => changeView('profile')} className="bg-white text-[#003049] hover:bg-[#E76F2E] hover:text-white px-8 py-5 rounded-2xl font-black text-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 w-full md:w-auto justify-center"><User size={24} /> Profilini Tamamla ve Kilidi Aç</button>
          </div>
        </div>
        <h3 className="text-xl font-bold text-[#003049] pl-2 mt-12 mb-6 opacity-50">Kefilim Vitrini</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-10 rounded-[3rem] flex items-center justify-center border border-white/50">
            <div className="bg-white px-8 py-4 rounded-2xl shadow-xl font-bold text-[#003049] flex items-center gap-3 border border-slate-100"><Lock className="w-6 h-6 text-[#E76F2E]" /> İşlem yapabilmek için profili tamamlayın</div>
          </div>
          <ActionCard title="Ev Kirala" desc="Doğrulanmış ilanlar arasında güvenle ara." icon={Key} disabled />
          <ActionCard title="Ev Satın Al" desc="Uzman ekspertizli satılık konutlar." icon={Home} disabled />
        </div>
      </div>
    );
  }
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#003049] tracking-tight">Hoş Geldin, {user.name.split(' ')[0]}.</h1>
        <p className="mt-2 text-lg text-gray-500 font-medium">{user.role === 'tenant' ? 'Pasaportun onaylandı. Yeni yuvana bir adım daha yakınsın.' : 'İlanlarınızı ve başvurularınızı güvenle yönetin.'}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {user.role === 'tenant' ? (
          <><ActionCard title="Ev Kirala" desc="Doğrulanmış ev sahiplerinden şeffaf bir şekilde kiralık daire bul." icon={Key} color="orange" onClick={() => changeView('search')} /><ActionCard title="Ev Satın Al" desc="Sürpriz masrafsız, onaylı satılık konutlara göz at." icon={Home} color="navy" onClick={() => changeView('search')} /></>
        ) : (
          <>
            <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
               <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-5"><div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center"><Building className="w-7 h-7 text-[#003049]"/></div><div><p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Aktif İlanlar</p><p className="text-3xl font-black text-[#003049]">2</p></div></div>
               <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-5 border-l-4 border-l-[#E76F2E]"><div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center"><Users className="w-7 h-7 text-[#E76F2E]"/></div><div><p className="text-xs font-bold text-[#E76F2E] uppercase tracking-wider">Yeni Başvuru</p><p className="text-3xl font-black text-[#003049]">14</p></div></div>
            </div>
            <div onClick={() => changeView('add-listing')} className="group bg-transparent rounded-[2.5rem] p-8 border-2 border-dashed border-gray-300 hover:border-[#003049] hover:bg-white transition-all duration-300 flex flex-col items-center justify-center cursor-pointer text-center min-h-[250px]">
              <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center mb-4 group-hover:bg-[#003049] group-hover:scale-110 transition-all duration-300"><Plus className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" /></div>
              <h3 className="text-xl font-bold text-gray-500 group-hover:text-[#003049] mb-2">Yeni İlan Ekle</h3>
              <p className="text-gray-400 text-sm font-medium px-4">Mülkünüzü sisteme yükleyin, hedef skoru belirleyin.</p>
            </div>
            <ActionCard title="Mevcut İlanlarım" desc="Aktif ilanlarınızı ve gelen başvuruları yönetin." icon={Building} color="navy" onClick={() => changeView('search')} />
          </>
        )}
      </div>
    </div>
  );
};

const ProfileCompletion = ({ user, updateUser, changeView }) => {
  const [loading, setLoading] = useState(false);
  const handleSimulateVerification = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      updateUser({ ...user, isProfileComplete: true, score: 850 });
      changeView('home');
      alert("Tebrikler! Belgeleriniz onaylandı. Kefilim Skorunuz: 850 (A+)");
    }, 3000);
  };
  return (
    <div className="max-w-4xl mx-auto animate-in zoom-in-95 duration-500 pb-20">
      <div className="text-center mb-10"><h2 className="text-3xl md:text-4xl font-black text-[#003049] mb-4">Dijital Pasaportunu Oluştur</h2><p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">Şifrelerinizi asla istemeyiz. Sadece <strong>barkodlu e-Devlet belgelerinizi</strong> yükleyin.</p></div>
      <div className="bg-white rounded-[3rem] p-8 md:p-14 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center text-center"><div className="relative w-32 h-32 mb-8"><div className="absolute inset-0 border-8 border-slate-100 rounded-full"></div><div className="absolute inset-0 border-8 border-[#E76F2E] rounded-full border-t-transparent animate-spin"></div><ShieldCheck className="absolute inset-0 m-auto w-12 h-12 text-[#003049]" /></div><h3 className="text-3xl font-black text-[#003049] mb-3">Yapay Zeka Doğruluyor</h3><p className="text-gray-500 font-medium text-lg max-w-md">Karekodlar anlık teyit ediliyor...</p></div>
        ) : (
          <div className="space-y-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-2 border-dashed border-slate-300 rounded-[2rem] p-10 text-center hover:border-[#E76F2E] hover:bg-orange-50/30 transition-all cursor-pointer group"><div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#E76F2E] transition-colors"><UploadCloud className="w-10 h-10 text-slate-400 group-hover:text-white" /></div><h4 className="font-extrabold text-[#003049] text-xl mb-2">SGK Hizmet Dökümü</h4><p className="text-sm text-gray-500 font-medium">Barkodlu PDF formatında yükleyin.</p></div>
              <div className="border-2 border-dashed border-slate-300 rounded-[2rem] p-10 text-center hover:border-[#003049] hover:bg-slate-50 transition-all cursor-pointer group"><div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#003049] transition-colors"><FileText className="w-10 h-10 text-slate-400 group-hover:text-white" /></div><h4 className="font-extrabold text-[#003049] text-xl mb-2">Adli Sicil Kaydı</h4><p className="text-sm text-gray-500 font-medium">Barkodlu PDF formatında yükleyin.</p></div>
            </div>
            <button onClick={handleSimulateVerification} className="w-full bg-[#003049] hover:bg-[#E76F2E] text-white py-6 rounded-3xl font-black text-xl transition-all duration-300 shadow-xl shadow-[#003049]/20 transform hover:-translate-y-1 flex justify-center items-center gap-3">Belgeleri Yükledim, Pasaportumu Doğrula <ChevronRight size={24} /></button>
          </div>
        )}
      </div>
    </div>
  );
};

const AddListing = ({ changeView }) => (
  <div className="max-w-4xl mx-auto pb-20 animate-in slide-in-from-bottom-4 duration-500">
    <div className="mb-10"><h2 className="text-3xl md:text-4xl font-black text-[#003049] mb-2">Yeni İlan Ekle</h2><p className="text-gray-500 font-medium text-lg">Mülkünüzü sisteme kaydedin ve hedef kitlenizi "Güven Skoruna" göre belirleyin.</p></div>
    <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/40 border border-slate-100 p-8 md:p-14 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div><label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 pl-2">İşlem Türü</label><select className="w-full bg-slate-50 border border-slate-200 px-6 py-5 rounded-3xl outline-none focus:border-[#003049] text-[#003049] font-bold text-lg"><option>Kiralık Konut</option><option>Satılık Konut</option></select></div>
        <div><label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 pl-2">Fiyat (TL)</label><input type="number" className="w-full bg-slate-50 border border-slate-200 px-6 py-5 rounded-3xl outline-none focus:border-[#003049] text-[#003049] font-bold text-lg" placeholder="Örn: 25.000" /></div>
      </div>
      <div className="bg-orange-50/60 border border-orange-100 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden">
        <ShieldCheck className="absolute -right-10 -bottom-10 w-48 h-48 text-[#E76F2E] opacity-5 pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm"><ShieldCheck className="w-8 h-8 text-[#E76F2E]" /></div>
          <div className="flex-1 w-full"><h3 className="text-xl font-black text-[#003049] mb-2">Minimum Kefilim Skoru Beklentisi</h3><p className="text-sm text-gray-600 font-medium mb-8">İlanınıza başvuracak adaylarda aradığınız minimum güven puanını belirleyin.</p>
            <div className="flex items-center gap-6"><input type="range" min="0" max="1000" defaultValue="700" className="w-full h-3 bg-white rounded-xl appearance-none cursor-pointer shadow-inner accent-[#E76F2E]" /><div className="bg-[#003049] text-white font-black px-6 py-3 rounded-2xl shrink-0 text-lg shadow-md">Min. 700</div></div>
            <div className="flex justify-between text-xs font-bold text-gray-400 mt-4 px-1"><span>0 (Herkese Açık)</span><span className="text-[#E76F2E]">Güvenilir (700+)</span><span>1000 (A+)</span></div>
          </div>
        </div>
      </div>
      <button onClick={() => { alert("İlanınız başarıyla yayına alındı!"); changeView('home'); }} className="w-full bg-[#003049] hover:bg-[#E76F2E] text-white py-6 rounded-3xl font-black text-xl transition-all duration-300 shadow-xl flex justify-center items-center gap-3 transform hover:-translate-y-1">İlanı Yayınla <CheckCircle size={24} /></button>
    </div>
  </div>
);

const MenuButton = ({ icon, label, isActive, onClick, disabled, badge }) => (
  <button onClick={!disabled ? onClick : undefined} className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 ${disabled ? 'opacity-40 cursor-not-allowed text-gray-400' : isActive ? 'bg-[#003049] text-white shadow-lg shadow-[#003049]/20' : 'text-gray-500 hover:bg-slate-50 hover:text-[#003049] font-bold'} ${!isActive && !disabled && 'font-bold'}`}>
    <div className="flex items-center gap-4"><div className={`w-6 h-6 ${isActive ? 'text-white' : ''}`}>{icon}</div><span>{label}</span></div>
    {badge && <span className="bg-red-500 text-white text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">{badge}</span>}
  </button>
);

const ActionCard = ({ title, desc, icon: Icon, color, onClick, disabled }) => {
  const isOrange = color === 'orange';
  return (
    <div onClick={!disabled ? onClick : undefined} className={`group bg-white rounded-[2.5rem] p-8 border border-slate-100 flex flex-col justify-center relative overflow-hidden min-h-[250px] ${disabled ? 'opacity-50 grayscale' : 'shadow-xl shadow-slate-200/40 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 cursor-pointer'}`}>
      {!disabled && <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-125 ${isOrange ? 'bg-orange-50' : 'bg-blue-50'}`}></div>}
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${disabled ? 'bg-slate-100 text-slate-400' : (isOrange ? 'bg-orange-50 text-[#E76F2E] group-hover:bg-[#E76F2E] group-hover:text-white' : 'bg-blue-50 text-[#003049] group-hover:bg-[#003049] group-hover:text-white')}`}><Icon className="w-7 h-7" /></div>
      <h3 className="text-2xl font-black text-[#003049] mb-3">{title}</h3>
      <p className="text-gray-500 font-medium leading-relaxed">{desc}</p>
      {!disabled && <div className={`mt-auto flex items-center font-bold transition-all duration-300 group-hover:gap-3 ${isOrange ? 'text-[#E76F2E]' : 'text-[#003049]'}`}>Hemen İncele <ChevronRight className="w-5 h-5 ml-2" /></div>}
    </div>
  );
};

