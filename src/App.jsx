import React, { useState } from 'react';
import { 
  Mail, Lock, User, ChevronRight, Home, 
  ShieldCheck, HelpCircle, Target, Users, 
  BarChart3, ArrowLeft, CheckCircle2, 
  Zap, Scale, HeartHandshake, Award,
  FileCheck, Key, Shield, ArrowRight, FileText
} from 'lucide-react';

const App = () => {
  const [view, setView] = useState('home'); // 'home', 'about', 'how-it-works', 'security'
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('tenant');

  const COLORS = {
    navy: '#003049',
    orange: '#E76F2E'
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
          Kiralama Dünyasında <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
            Güvenin Yeni Adı.
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
          Emlak piyasasının en büyük sorunu olan "güvensizliği" teknolojiyle bitiriyoruz. Kefilim, kiracı ve ev sahibini şeffaf, doğrulanmış ve adil bir platformda buluşturur.
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
        <p className="text-xl text-slate-500 font-medium">Karmaşık kiralama süreçlerini herkes için çok basit 3 adıma indirdik.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Kiracı Akışı */}
        <div className="bg-white/80 backdrop-blur-xl p-12 rounded-[3.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex items-center gap-5 mb-12 relative z-10">
            <div className="p-4 bg-orange-50 rounded-2xl">
              <User size={36} className="text-orange-500" />
            </div>
            <h3 className="text-4xl font-black tracking-tight" style={{ color: COLORS.navy }}>Kiracılar İçin</h3>
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
            <h3 className="text-4xl font-black tracking-tight text-white">Ev Sahipleri İçin</h3>
          </div>
          
          <div className="space-y-10 relative z-10">
            {[
              { title: "İlanını ve Kriterlerini Belirle", desc: "Evini sisteme kaydet, detayları gir ve aradığın minimum Kefilim skorunu belirleyerek doğru kitleyi hedefle." },
              { title: "Doğrulanmış Başvuruları İncele", desc: "Adayların beyanlarına değil; Findeks, SGK ve İcra doğrulamasından geçmiş resmi Kefilim raporlarına ve geçmiş puanlarına bak." },
              { title: "İç Huzuruyla Anahtarı Teslim Et", desc: "Finansal kapasitesi doğrulanmış, referansları tam olan en uygun kiracıyla dijital olarak eşleş ve süreci güvenle başlat." }
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
                Türkiye'nin ilk veriye dayalı kiralama ekosistemi. Belge manipülasyonuna son veriyoruz.
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
                  <h4 className="font-black text-2xl mb-2" style={{ color: COLORS.navy }}>Çift Yönlü</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Sadece kiracı değil, ev sahibi de güvence altındadır.</p>
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
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <button className="w-full py-5 border-2 border-slate-100 rounded-[1.5rem] flex items-center justify-center gap-4 font-black text-slate-600 hover:bg-slate-50 hover:border-slate-200 transition-all active:scale-95 shadow-sm bg-white group">
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
                    <div className="grid grid-cols-2 gap-5 pb-5 animate-in slide-in-from-top-4 duration-500">
                        <button 
                          type="button" 
                          onClick={() => setRole('tenant')} 
                          className={`p-6 md:p-8 rounded-[2rem] border-2 flex flex-col items-center gap-4 transition-all duration-300 ${role === 'tenant' ? 'border-orange-500 bg-orange-50/80 shadow-[0_8px_20px_rgba(231,111,46,0.15)] scale-100' : 'border-slate-100 bg-slate-50/50 text-slate-400 hover:bg-slate-50 hover:scale-[1.02]'}`}
                        >
                          <div className={`p-3 rounded-2xl ${role === 'tenant' ? 'bg-orange-500 text-white shadow-md' : 'bg-white text-slate-300 shadow-sm'}`}>
                            <User size={28} />
                          </div>
                          <span className={`text-sm font-black uppercase tracking-wider ${role === 'tenant' ? 'text-orange-700' : ''}`}>KİRACIYIM</span>
                        </button>
                        <button 
                          type="button" 
                          onClick={() => setRole('landlord')} 
                          className={`p-6 md:p-8 rounded-[2rem] border-2 flex flex-col items-center gap-4 transition-all duration-300 ${role === 'landlord' ? 'border-[#003049] bg-[#003049]/5 shadow-[0_8px_20px_rgba(0,48,73,0.15)] scale-100' : 'border-slate-100 bg-slate-50/50 text-slate-400 hover:bg-slate-50 hover:scale-[1.02]'}`}
                        >
                          <div className={`p-3 rounded-2xl ${role === 'landlord' ? 'bg-[#003049] text-white shadow-md' : 'bg-white text-slate-300 shadow-sm'}`}>
                            <Home size={28} />
                          </div>
                          <span className={`text-sm font-black uppercase tracking-wider ${role === 'landlord' ? 'text-[#003049]' : ''}`}>EV SAHİBİYİM</span>
                        </button>
                    </div>
                  )}
                  
                  {!isLogin && (
                    <div className="relative group animate-in slide-in-from-top-2 duration-300">
                      <FileText className="absolute left-6 top-[1.35rem] text-slate-400 group-focus-within:text-orange-500 transition-colors" size={22} />
                      <input type="text" placeholder="T.C. Kimlik Numarası" maxLength="11" className="w-full pl-16 pr-6 py-5 bg-slate-50/80 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-[1.5rem] transition-all outline-none text-base font-semibold text-slate-700 shadow-sm placeholder:text-slate-400" />
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
                    <input type="email" placeholder="E-posta Adresi" className="w-full pl-16 pr-6 py-5 bg-slate-50/80 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-[1.5rem] transition-all outline-none text-base font-semibold text-slate-700 shadow-sm placeholder:text-slate-400" />
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-6 top-[1.35rem] text-slate-400 group-focus-within:text-orange-500 transition-colors" size={22} />
                    <input type="password" placeholder="Şifreniz" className="w-full pl-16 pr-6 py-5 bg-slate-50/80 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-[1.5rem] transition-all outline-none text-base font-semibold text-slate-700 shadow-sm placeholder:text-slate-400" />
                  </div>
                </div>

                {isLogin && (
                  <div className="text-right px-2 pb-2">
                    <a href="#" className="text-sm font-bold text-slate-400 hover:text-orange-600 transition-colors">Şifremi Unuttum</a>
                  </div>
                )}

                <button 
                  className="w-full py-6 rounded-[1.5rem] text-white font-black text-xl shadow-[0_20px_40px_-10px_rgba(231,111,46,0.6)] hover:shadow-[0_25px_50px_-12px_rgba(231,111,46,0.7)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group relative overflow-hidden" 
                  style={{ backgroundColor: COLORS.orange }}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative z-10">{isLogin ? 'Giriş Yap' : 'Hemen Başla'}</span>
                  <ChevronRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
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

export default App;
