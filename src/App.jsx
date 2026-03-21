import React, { useState, Component } from 'react';
import { 
  Mail, Lock, User, ChevronRight, Home, 
  ShieldCheck, HelpCircle, Target, Users, 
  BarChart3, ArrowLeft, CheckCircle2, 
  Zap, Scale, HeartHandshake, Award,
  FileCheck, Key, Shield, ArrowRight, FileText, Briefcase,
  Building, Plus, LogOut, Bell, AlertCircle, UploadCloud, CheckCircle, MapPin, Search,
  Filter, Heart, BedDouble, Bath, Move, ToggleRight, ToggleLeft, Layers, SlidersHorizontal, X, ChevronDown, Check
} from 'lucide-react';

const TURKEY_DATA = {
  "Adana": ["Aladağ","Ceyhan","Çukurova","Feke","İmamoğlu","Karaisalı","Karataş","Kozan","Pozantı","Saimbeyli","Sarıçam","Seyhan","Tufanbeyli","Yumurtalık","Yüreğir"],
  "Ankara": ["Akyurt","Altındağ","Ayaş","Bala","Beypazarı","Çamlıdere","Çankaya","Çubuk","Elmadağ","Etimesgut","Evren","Gölbaşı","Güdül","Haymana","Kahramankazan","Kalecik","Keçiören","Kızılcahamam","Mamak","Nallıhan","Polatlı","Pursaklar","Sincan","Şereflikoçhisar","Yenimahalle"],
  "Antalya": ["Akseki","Aksu","Alanya","Demre","Döşemealtı","Elmalı","Finike","Gazipaşa","Gündoğmuş","İbradı","Kaş","Kemer","Kepez","Konyaaltı","Korkuteli","Kumluca","Manavgat","Muratpaşa","Serik"],
  "Bursa": ["Büyükorhan","Gemlik","Gürsu","Harmancık","İnegöl","İznik","Karacabey","Keles","Kestel","Mudanya","Mustafakemalpaşa","Nilüfer","Orhaneli","Orhangazi","Osmangazi","Yenişehir","Yıldırım"],
  "İstanbul": ["Adalar","Arnavutköy","Ataşehir","Avcılar","Bağcılar","Bahçelievler","Bakırköy","Başakşehir","Bayrampaşa","Beşiktaş","Beykoz","Beylikdüzü","Beyoğlu","Büyükçekmece","Çatalca","Çekmeköy","Esenler","Esenyurt","Eyüpsultan","Fatih","Gaziosmanpaşa","Güngören","Kadıköy","Kağıthane","Kartal","Küçükçekmece","Maltepe","Pendik","Sancaktepe","Sarıyer","Silivri","Sultanbeyli","Sultangazi","Şile","Şişli","Tuzla","Ümraniye","Üsküdar","Zeytinburnu"],
  "İzmir": ["Aliağa","Balçova","Bayındır","Bayraklı","Bergama","Beydağ","Bornova","Buca","Çeşme","Çiğli","Dikili","Foça","Gaziemir","Güzelbahçe","Karabağlar","Karaburun","Karşıyaka","Kemalpaşa","Kınık","Kiraz","Konak","Menderes","Menemen","Narlıdere","Ödemiş","Seferihisar","Selçuk","Tire","Torbalı","Urla"],
  // Other cities map to Merkez to save space
  "Adıyaman": ["Merkez", "Diğer İlçeler"], "Afyonkarahisar": ["Merkez", "Diğer İlçeler"], "Ağrı": ["Merkez", "Diğer İlçeler"], "Aksaray": ["Merkez", "Diğer İlçeler"], "Amasya": ["Merkez", "Diğer İlçeler"], "Ardahan": ["Merkez", "Diğer İlçeler"], "Artvin": ["Merkez", "Diğer İlçeler"], "Aydın": ["Merkez", "Diğer İlçeler"], "Balıkesir": ["Merkez", "Diğer İlçeler"], "Bartın": ["Merkez", "Diğer İlçeler"], "Batman": ["Merkez", "Diğer İlçeler"], "Bayburt": ["Merkez", "Diğer İlçeler"], "Bilecik": ["Merkez", "Diğer İlçeler"], "Bingöl": ["Merkez", "Diğer İlçeler"], "Bitlis": ["Merkez", "Diğer İlçeler"], "Bolu": ["Merkez", "Diğer İlçeler"], "Burdur": ["Merkez", "Diğer İlçeler"], "Çanakkale": ["Merkez", "Diğer İlçeler"], "Çankırı": ["Merkez", "Diğer İlçeler"], "Çorum": ["Merkez", "Diğer İlçeler"], "Denizli": ["Merkez", "Diğer İlçeler"], "Diyarbakır": ["Merkez", "Diğer İlçeler"], "Düzce": ["Merkez", "Diğer İlçeler"], "Edirne": ["Merkez", "Diğer İlçeler"], "Elazığ": ["Merkez", "Diğer İlçeler"], "Erzincan": ["Merkez", "Diğer İlçeler"], "Erzurum": ["Merkez", "Diğer İlçeler"], "Eskişehir": ["Merkez", "Diğer İlçeler"], "Gaziantep": ["Merkez", "Diğer İlçeler"], "Giresun": ["Merkez", "Diğer İlçeler"], "Gümüşhane": ["Merkez", "Diğer İlçeler"], "Hakkari": ["Merkez", "Diğer İlçeler"], "Hatay": ["Merkez", "Diğer İlçeler"], "Iğdır": ["Merkez", "Diğer İlçeler"], "Isparta": ["Merkez", "Diğer İlçeler"], "Kahramanmaraş": ["Merkez", "Diğer İlçeler"], "Karabük": ["Merkez", "Diğer İlçeler"], "Karaman": ["Merkez", "Diğer İlçeler"], "Kars": ["Merkez", "Diğer İlçeler"], "Kastamonu": ["Merkez", "Diğer İlçeler"], "Kayseri": ["Merkez", "Diğer İlçeler"], "Kilis": ["Merkez", "Diğer İlçeler"], "Kırıkkale": ["Merkez", "Diğer İlçeler"], "Kırklareli": ["Merkez", "Diğer İlçeler"], "Kırşehir": ["Merkez", "Diğer İlçeler"], "Kocaeli": ["Merkez", "Diğer İlçeler"], "Konya": ["Merkez", "Diğer İlçeler"], "Kütahya": ["Merkez", "Diğer İlçeler"], "Malatya": ["Merkez", "Diğer İlçeler"], "Manisa": ["Merkez", "Diğer İlçeler"], "Mardin": ["Merkez", "Diğer İlçeler"], "Mersin": ["Merkez", "Diğer İlçeler"], "Muğla": ["Merkez", "Diğer İlçeler"], "Muş": ["Merkez", "Diğer İlçeler"], "Nevşehir": ["Merkez", "Diğer İlçeler"], "Niğde": ["Merkez", "Diğer İlçeler"], "Ordu": ["Merkez", "Diğer İlçeler"], "Osmaniye": ["Merkez", "Diğer İlçeler"], "Rize": ["Merkez", "Diğer İlçeler"], "Sakarya": ["Merkez", "Diğer İlçeler"], "Samsun": ["Merkez", "Diğer İlçeler"], "Şanlıurfa": ["Merkez", "Diğer İlçeler"], "Siirt": ["Merkez", "Diğer İlçeler"], "Sinop": ["Merkez", "Diğer İlçeler"], "Şırnak": ["Merkez", "Diğer İlçeler"], "Sivas": ["Merkez", "Diğer İlçeler"], "Tekirdağ": ["Merkez", "Diğer İlçeler"], "Tokat": ["Merkez", "Diğer İlçeler"], "Trabzon": ["Merkez", "Diğer İlçeler"], "Tunceli": ["Merkez", "Diğer İlçeler"], "Uşak": ["Merkez", "Diğer İlçeler"], "Van": ["Merkez", "Diğer İlçeler"], "Yalova": ["Merkez", "Diğer İlçeler"], "Yozgat": ["Merkez", "Diğer İlçeler"], "Zonguldak": ["Merkez", "Diğer İlçeler"]
};
const TURKEY_PROVINCES = Object.keys(TURKEY_DATA).sort();

const ROOM_FILTERS = ['Stüdyo (1+0)', '1+1', '1.5+1', '2+0', '2+1', '2.5+1', '2+2', '3+0', '3+1', '3.5+1', '3+2', '3+3', '4+0', '4+1', '4.5+1', '4.5+2', '4+2', '4+3', '4+4', '5+1', '5.5+1', '5+2', '5+3', '5+4', '6+1', '6+2', '6.5+1', '6+3', '6+4', '7+1', '7+2', '7+3', '8+1', '8+2', '8+3', '8+4', '9+1', '9+2', '9+3', '9+4', '9+5', '9+6', '10+1', '10+2'];
const FLOOR_FILTERS = ['Giriş Altı Kot', 'Bodrum Kat', 'Zemin Kat', 'Bahçe Katı', 'Giriş Katı', 'Yüksek Giriş', 'Müstakil', 'Villa Tipi', 'Çatı Katı', 'Ara Kat', 'En Üst Kat'];
const HEATING_FILTERS = ['Yok', 'Soba', 'Doğalgaz Sobası', 'Kat Kaloriferi', 'Merkezi', 'Merkezi (Pay Ölçer)', 'Kombi (Doğalgaz)', 'Kombi (Elektrik)', 'Yerden Isıtma', 'Klima', 'Fancoil Ünitesi', 'Güneş Enerjisi', 'Elektrikli Radyatör', 'Jeotermal', 'Şömine', 'VRV', 'Isı Pompası'];
const DEED_FILTERS = ['Kat Mülkiyetli', 'Kat İrtifaklı', 'Hisseli Tapu', 'Müstakil Tapulu', 'Arsa Tapulu', 'Kooperatif Hisseli Tapu', 'İntifa Hakkı Tesisli', 'Yurt Dışı Tapulu', 'Tapu Kaydı Yok'];
const WHO_FILTERS = ['Sahibinden', 'Emlak Ofisinden', 'İnşaat Firmasından', 'Bankadan'];
const USAGE_FILTERS = ['Boş', 'Kiracılı', 'Mülk Sahibi'];

const customAlert = (msg) => window.dispatchEvent(new CustomEvent('kefilim-alert', { detail: msg }));
window.alert = customAlert;

const CustomAlertRenderer = () => {
  const [msg, setMsg] = useState('');
  React.useEffect(() => {
    const handler = (e) => setMsg(e.detail);
    window.addEventListener('kefilim-alert', handler);
    return () => window.removeEventListener('kefilim-alert', handler);
  }, []);
  if (!msg) return null;
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#003049]/40 backdrop-blur-md" onClick={() => setMsg('')}></div>
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-sm w-full relative z-10 shadow-[0_20px_50px_rgba(0,48,73,0.3)] flex flex-col items-center text-center animate-in zoom-in duration-300">
        <button onClick={() => setMsg('')} className="absolute top-4 right-4 text-slate-400 hover:text-[#E76F2E] transition-colors"><X size={24} /></button>
        <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-5 border border-orange-100 shadow-inner">
           <ShieldCheck size={32} />
        </div>
        <h3 className="text-xl font-black text-[#003049] mb-3">Kefilim Güven Sistemi</h3>
        <p className="text-slate-500 font-bold mb-8 leading-relaxed max-w-[260px]">{msg}</p>
        <button onClick={() => setMsg('')} className="w-full bg-[#003049] hover:bg-[#E76F2E] text-white py-4 rounded-xl font-black text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-[#003049]/20">
          Tamam
        </button>
      </div>
    </div>
  );
};

const mockListings = [
  { id: 10452, title: 'Deniz Manzaralı Lüks Rezidans', location: 'İstanbul', district: 'Kadıköy', price: 45000, priceStr: '₺45 Bin', type: 'Kiralık', beds: '3+1', baths: 2, m2: 145, m2net: 120, floor: 'Ara Kat', heating: 'Kombi (Doğalgaz)', coords: { x: '30%', y: '25%' }, imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', minScore: 800, ebeveynBanyo: true, asansor: true, otopark: true, esyali: true },
  { id: 10453, title: 'Bahçeli Havuzlu Müstakil Villa', location: 'İzmir', district: 'Urla', price: 12000000, priceStr: '₺12 M', type: 'Satılık', beds: '4+1', baths: 3, m2: 220, m2net: 190, floor: 'Müstakil', heating: 'Yerden Isıtma', coords: { x: '75%', y: '35%' }, imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', minScore: 0, ebeveynBanyo: true, otopark: true, esyali: false },
  { id: 10454, title: 'Metroya Yakın Eşyalı', location: 'İstanbul', district: 'Şişli', price: 28000, priceStr: '₺28 Bin', type: 'Kiralık', beds: '1+1', baths: 1, m2: 95, m2net: 75, floor: 'Yüksek Giriş', heating: 'Merkezi (Pay Ölçer)', coords: { x: '60%', y: '45%' }, imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', minScore: 700, esyali: true, asansor: true },
  { id: 10455, title: 'Sokak Manzaralı Yenilenmiş Daire', location: 'Ankara', district: 'Çankaya', price: 22000, priceStr: '₺22 Bin', type: 'Kiralık', beds: '2+1', baths: 1, m2: 120, m2net: 100, floor: 'Ara Kat', heating: 'Kombi (Doğalgaz)', coords: { x: '45%', y: '75%' }, imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1de2c1fbf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', minScore: 850, balkon: true },
  { id: 10456, title: 'Akıllı Ev Sistemli Sıfır Daire', location: 'İstanbul', district: 'Ataşehir', price: 8500000, priceStr: '₺8.5 M', type: 'Satılık', beds: '3+1', baths: 2, m2: 160, m2net: 140, floor: 'Çatı Katı', heating: 'Merkezi', coords: { x: '40%', y: '65%' }, imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09be1587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', minScore: 0, asansor: true, otopark: true },
  { id: 10457, title: 'Geniş Teraslı Dubleks', location: 'Bursa', district: 'Nilüfer', price: 38000, priceStr: '₺38 Bin', type: 'Kiralık', beds: '5+1', baths: 2, m2: 240, m2net: 200, floor: 'En Üst Kat', heating: 'Kombi (Doğalgaz)', coords: { x: '25%', y: '45%' }, imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', minScore: 750, siteIcirisi: true },
  { id: 10458, title: 'Site İçi Güvenlikli Daire', location: 'Antalya', district: 'Muratpaşa', price: 4200000, priceStr: '₺4.2 M', type: 'Satılık', beds: '2+1', baths: 1, m2: 110, m2net: 95, floor: 'Zemin Kat', heating: 'Klima', coords: { x: '55%', y: '85%' }, imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', minScore: 0, siteIcirisi: true, asansor: true, otopark: true },
];

const mockDB = [
  { id: 1, email: 'omerguclu42@gmail.com', password: '123456', role: 'tenant', name: 'Ömer Güçlü', title: 'Kiracı/Alıcı Adayı', isProfileComplete: false, score: null },
  { id: 2, email: 'omerguclu43@gmail.com', password: '123456', role: 'landlord', name: 'Ömer Güçlü', title: 'Ev Sahibi/Satıcı', isProfileComplete: true, score: 920 },
  { id: 3, email: 'omerguclu44@gmail.com', password: '123456', role: 'agent', name: 'Güçlü Emlak', title: 'Gayrimenkul Danışmanı', isProfileComplete: true, score: 950 }
];

const COLORS = {
  navy: '#003049',
  orange: '#E76F2E'
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("UI Hatası:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', background: '#fff0f0', color: '#8b0000', fontFamily: 'sans-serif' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Sistem Hatası (Beyaz Ekran Tespit Edildi)</h2>
          <p style={{ marginTop: '10px' }}>Lütfen bu hata kodunu bana kopyalayıp gönder:</p>
          <pre style={{ background: '#333', color: '#fff', padding: '20px', borderRadius: '8px', overflowX: 'auto', marginTop: '20px' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [dashboardView, setDashboardView] = useState('home');

  return (
    <>
      <ErrorBoundary>
        {currentUser ? (
          <DashboardLayout currentUser={currentUser} setCurrentUser={setCurrentUser} activeView={dashboardView} setActiveView={setDashboardView} />
        ) : (
          <LandingPage onLogin={(user) => { setCurrentUser(user); setDashboardView('home'); }} />
        )}
      </ErrorBoundary>
      <CustomAlertRenderer />
    </>
  );
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
      onLogin({ id: Date.now(), email, password, role, name: 'Yeni Kullanıcı', title: role === 'tenant' ? 'Kiracı/Alıcı' : 'Ev Sahibi/Satıcı', isProfileComplete: false, score: null });
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
              <MenuButton icon={<Search />} label="İlan Ara" isActive={activeView === 'search'} onClick={() => setActiveView('search')} />
              <MenuButton icon={<FileText />} label="Başvurularım" isActive={false} onClick={() => {}} />
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
          {activeView === 'search' && <SearchListings currentUser={currentUser} />}
        </div>
      </main>
    </div>
  );
};

const Dashboard = ({ user, changeView }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#003049] tracking-tight">Hoş Geldin, {user.name.split(' ')[0]}.</h1>
        <p className="mt-2 text-lg text-gray-500 font-medium">
          {user.role === 'tenant' 
            ? (user.isProfileComplete ? 'Pasaportun onaylandı. Yeni yuvana bir adım daha yakınsın.' : 'Profiliniz eksik. Profilinizi tamamlamadan işlem yapamazsınız.') 
            : 'İlanlarınızı ve başvurularınızı güvenle yönetin.'}
        </p>
      </div>

      {user.role === 'tenant' && !user.isProfileComplete && (
        <div className="bg-orange-50 border border-orange-200 rounded-[2rem] p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
            <Lock className="w-8 h-8 text-[#E76F2E]" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-[#003049] mb-1">Pasaportunuz Henüz Oluşturulmadı</h4>
            <p className="text-gray-500 text-sm font-medium">Sistemde arama yapabilirsiniz ancak işlem yapabilmeniz için doğrulanmış profil şarttır.</p>
          </div>
          <button onClick={() => changeView('profile')} className="ml-0 md:ml-auto w-full md:w-auto bg-[#E76F2E] hover:bg-[#003049] text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-md text-nowrap mt-4 md:mt-0">
            Profili Tamamla
          </button>
        </div>
      )}
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
      customAlert("Tebrikler! Belgeleriniz onaylandı. Kefilim Skorunuz: 850 (A+)");
    }, 3000);
  };
  return (
    <div className="max-w-4xl mx-auto animate-in zoom-in-95 duration-500 pb-20">
      <div className="text-center mb-10"><h2 className="text-3xl md:text-4xl font-black text-[#003049] mb-4">Dijital Pasaportunu Oluştur</h2><p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">Şifrelerinizi asla istemeyiz. Sadece <strong>barkodlu e-Devlet belgelerinizi</strong> yükleyin.</p></div>
      <div className="bg-white rounded-[3rem] p-8 md:p-14 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center text-center"><div className="relative w-32 h-32 mb-8"><div className="absolute inset-0 border-8 border-slate-100 rounded-full"></div><div className="absolute inset-0 border-8 border-[#E76F2E] rounded-full border-t-transparent animate-spin"></div><ShieldCheck className="absolute inset-0 m-auto w-12 h-12 text-[#003049]" /></div><h3 className="text-3xl font-black text-[#003049] mb-3">Yapay Zeka Doğruluyor</h3><p className="text-gray-500 font-medium text-lg max-w-md">Karekodlar anlık teyit ediliyor...</p></div>
        ) : (
          <div className="space-y-8">
            <div className="flex flex-col gap-4">
              {[
                { title: "SGK Hizmet Dökümü", desc: "e-Devlet'ten alınmış barkodlu SGK hizmet dökümü belgesi." },
                { title: "Adli Sicil Kaydı", desc: "e-Devlet üzerinden alınmış resmi sicil kaydı." },
                { title: "UYAP İcra Dosyası Sorgulama", desc: "Hakkınızda açılmış icra veya dava dosyası olup olmadığına dair belge." },
                { title: "Kredi Findeks Risk Raporu", desc: "Geçmiş ödeme performansınızı ve güncel kredi notunuzu (puanınızı) gösteren rapor." },
                { title: "Tarihçeli Yerleşim Yeri Belgesi", desc: "e-Devlet adres geçmişinizi ve kaç kez taşındığınızı gösterir taşıma belgesi." }
              ].map((doc, idx) => (
                <div key={idx} className="border-2 border-dashed border-slate-200 bg-slate-50/50 rounded-[1.5rem] p-5 md:p-6 flex flex-col md:flex-row items-center gap-5 md:gap-6 hover:border-[#E76F2E] hover:bg-orange-50/30 transition-all cursor-pointer group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100 group-hover:bg-[#E76F2E] transition-colors">
                    <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="font-extrabold text-[#003049] text-lg mb-1">{doc.title}</h4>
                    <p className="text-sm text-gray-500 font-medium">{doc.desc}</p>
                  </div>
                  <div className="w-full md:w-auto px-6 py-4 md:py-3 bg-white text-[#003049] font-bold rounded-xl border border-slate-200 shadow-sm group-hover:bg-[#E76F2E] group-hover:text-white group-hover:border-[#E76F2E] transition-colors text-center shrink-0">
                    PDF Yükle
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handleSimulateVerification} className="w-full bg-[#003049] hover:bg-[#E76F2E] text-white py-6 rounded-3xl font-black text-xl transition-all duration-300 shadow-xl shadow-[#003049]/20 transform hover:-translate-y-1 flex justify-center items-center gap-3">Tüm Belgeleri Yükledim, Pasaportumu Doğrula <ChevronRight size={24} /></button>
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
      <button onClick={() => { customAlert("İlanınız başarıyla yayına alındı!"); changeView('home'); }} className="w-full bg-[#003049] hover:bg-[#E76F2E] text-white py-6 rounded-3xl font-black text-xl transition-all duration-300 shadow-xl flex justify-center items-center gap-3 transform hover:-translate-y-1">İlanı Yayınla <CheckCircle size={24} /></button>
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

const ToggleSwitch = ({ label, checked, onChange }) => (
  <label className="flex items-center justify-between cursor-pointer group py-2.5">
    <span className="font-bold text-slate-600 group-hover:text-[#003049] transition-colors">{label}</span>
    <div className={`w-12 h-6 rounded-full flex items-center transition-colors px-1 shadow-inner ${checked ? 'bg-[#003049]' : 'bg-slate-200 group-hover:bg-slate-300'}`} onClick={(e) => { e.preventDefault(); onChange(); }}>
      <div className={`w-4 h-4 bg-white rounded-full transition-transform shadow-sm ${checked ? 'translate-x-6' : 'translate-x-0'}`}></div>
    </div>
  </label>
);

const DropdownChecklist = ({ label, options, selected, toggleOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)} className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 flex items-center justify-between cursor-pointer hover:border-orange-500 transition-colors group">
        <span className="font-bold text-[#003049] group-hover:text-orange-600">{selected.length > 0 ? `${selected.length} Seçim` : label}</span>
        <ChevronDown size={18} className={`text-slate-400 group-hover:text-orange-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.08)] rounded-2xl p-2 z-50 max-h-64 overflow-y-auto">
          {options.map(opt => (
            <label key={opt.label} onClick={(e) => { e.preventDefault(); toggleOption(opt.label); }} className="flex items-center justify-between p-3 hover:bg-slate-50 cursor-pointer rounded-xl group transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-[0.4rem] border-2 flex items-center justify-center transition-colors ${selected.includes(opt.label) ? 'bg-[#003049] border-[#003049]' : 'border-slate-300 group-hover:border-[#003049]'}`}>
                  {selected.includes(opt.label) && <Check size={14} className="text-white" />}
                </div>
                <span className={`font-bold transition-colors ${selected.includes(opt.label) ? 'text-[#003049]' : 'text-slate-600 group-hover:text-[#003049]'}`}>{opt.label}</span>
              </div>
              <span className="text-[10px] font-black tracking-widest text-slate-400 bg-slate-100 px-2 py-1 rounded-full">{opt.count}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const SearchListings = ({ currentUser }) => {
  const [showOnlyMyScore, setShowOnlyMyScore] = useState(false);
  const [activeTab, setActiveTab] = useState('Kiralık');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [hoveredListingId, setHoveredListingId] = useState(null);

  // Gelişmiş Filtre State'leri
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [m2Min, setM2Min] = useState('');
  const [m2Max, setM2Max] = useState('');
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [selectedFloors, setSelectedFloors] = useState([]);
  const [selectedHeating, setSelectedHeating] = useState([]);
  const [selectedWho, setSelectedWho] = useState([]);
  const [selectedUsage, setSelectedUsage] = useState([]);
  const [selectedDeeds, setSelectedDeeds] = useState([]);
  
  // Özellik Toggle State'leri
  const [features, setFeatures] = useState({ ebeveynBanyo: false, asansor: false, otopark: false, esyali: false, balkon: false, siteIcirisi: false });

  // Format Input Helper
  const handleNumChange = (setter) => (e) => {
    const pureNum = e.target.value.replace(/\D/g, '');
    if (!pureNum) return setter('');
    setter(parseInt(pureNum, 10).toLocaleString('tr-TR'));
  };

  const toggleArr = (setter) => (lbl) => setter(p => p.includes(lbl) ? p.filter(x => x !== lbl) : [...p, lbl]);
  const toggleFeat = (key) => setFeatures(p => ({ ...p, [key]: !p[key] }));

  // Dynamic Options Count Generator
  const generateOptionsWithCount = (sourceArray, fieldKey) => sourceArray.map(lbl => ({
    label: lbl, 
    count: mockListings.filter(x => x[fieldKey] === lbl).length.toLocaleString('tr-TR')
  }));

  const dynamicRooms = generateOptionsWithCount(ROOM_FILTERS, 'beds');
  const dynamicFloors = generateOptionsWithCount(FLOOR_FILTERS, 'floor');
  const dynamicHeating = generateOptionsWithCount(HEATING_FILTERS, 'heating');

  const filteredListings = mockListings.filter(item => {
    // 1. Kiralık/Satılık Sekmesi (Eğer tümünü göster de olsaydı burası esnekti, şimdilik kesin eşleşme)
    if (item.type !== activeTab) return false;
    
    // 2. Skoruna Uygunluk (Vurguladığımız Filtre)
    if (showOnlyMyScore && currentUser?.isProfileComplete) {
       if (currentUser.score < item.minScore) return false;
    }

    // 3. Arama Kutusu (İlan No Veya İl/İlçe/Mahalle)
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase().replace('#', '');
      const locationMatch = item.location.toLowerCase().includes(q);
      const titleMatch = item.title.toLowerCase().includes(q);
      const idMatch = item.id.toString() === q;
      if (!locationMatch && !titleMatch && !idMatch) return false;
    }
    return true;
  });

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full pb-20 relative">
      
      {/* --- SAĞDAN AÇILAN GELİŞMİŞ FİLTRE ÇEKMECESİ (DRAWER) --- */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 ${isFilterOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-[#003049]/40 backdrop-blur-sm transition-opacity duration-500 cursor-pointer ${isFilterOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsFilterOpen(false)}></div>
        <div className={`absolute top-0 right-0 h-full w-full md:w-[450px] bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-in-out transform ${isFilterOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-white z-10">
             <h3 className="text-xl font-black text-[#003049]">Detaylı Filtreler</h3>
             <button onClick={() => setIsFilterOpen(false)} className="w-10 h-10 bg-slate-50 hover:bg-red-50 rounded-full flex items-center justify-center text-slate-500 hover:text-red-500 transition-colors">
               <X size={20} />
             </button>
           </div>
           
           <div className="flex-1 overflow-y-auto p-6 space-y-8 pb-32">
              <div>
                <label className="block text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">İl / İlçe</label>
                <div className="flex gap-3 relative z-50">
                  <div className="flex-1 relative">
                    <select value={selectedProvince} onChange={(e) => setSelectedProvince(e.target.value)} className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 font-bold text-[#003049] focus:outline-none focus:border-orange-500 cursor-pointer">
                      <option value="">İl Seçin</option>
                      {TURKEY_PROVINCES.map(prov => <option key={prov} value={prov}>{prov}</option>)}
                    </select>
                    <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                  <div className="flex-1 relative">
                    <select value={selectedDistrict} disabled={!selectedProvince} onChange={(e) => setSelectedDistrict(e.target.value)} className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 font-medium text-slate-500 disabled:opacity-50 focus:outline-none focus:border-orange-500 cursor-pointer">
                      <option value="">Tüm İlçeler</option>
                      {selectedProvince && TURKEY_DATA[selectedProvince]?.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                    <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none opacity-50" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">Fiyat (₺)</label>
                  <div className="flex flex-col gap-2">
                    <input type="text" value={minPrice} onChange={handleNumChange(setMinPrice)} placeholder="Min Fiyat" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 font-bold text-[#003049] outline-none focus:border-[#E76F2E] transition-colors" />
                    <input type="text" value={maxPrice} onChange={handleNumChange(setMaxPrice)} placeholder="Max Fiyat" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 font-bold text-[#003049] outline-none focus:border-[#E76F2E] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">Metrekare (Brüt m²)</label>
                  <div className="flex flex-col gap-2">
                    <input type="text" value={m2Min} onChange={handleNumChange(setM2Min)} placeholder="Min m²" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 font-bold text-[#003049] outline-none focus:border-[#E76F2E] transition-colors" />
                    <input type="text" value={m2Max} onChange={handleNumChange(setM2Max)} placeholder="Max m²" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 font-bold text-[#003049] outline-none focus:border-[#E76F2E] transition-colors" />
                  </div>
                </div>
              </div>

              <div className="z-40 relative">
                <label className="block text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">Oda Sayısı</label>
                <DropdownChecklist label="Oda Seçin" options={dynamicRooms} selected={selectedRooms} toggleOption={toggleArr(setSelectedRooms)} />
              </div>

              <div className="z-30 relative">
                <label className="block text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">Bulunduğu Kat</label>
                <DropdownChecklist label="Kat Seçin" options={dynamicFloors} selected={selectedFloors} toggleOption={toggleArr(setSelectedFloors)} />
              </div>

              <div className="z-20 relative">
                <label className="block text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">Isıtma</label>
                <DropdownChecklist label="Isıtma Tipi" options={dynamicHeating} selected={selectedHeating} toggleOption={toggleArr(setSelectedHeating)} />
              </div>

              <div className="z-10 relative">
                <label className="block text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">Tapu Durumu</label>
                <DropdownChecklist label="Tapu Seçimi" options={generateOptionsWithCount(DEED_FILTERS, 'deed')} selected={selectedDeeds} toggleOption={toggleArr(setSelectedDeeds)} />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">İlan Tarihi</label>
                <div className="flex flex-wrap gap-2">
                  {['Son 24 saat', 'Son 3 gün', 'Son 7 gün', 'Son 15 gün', 'Son 1 ay'].map(lbl => (
                    <button key={lbl} className="bg-white text-slate-500 border border-slate-200 px-4 py-2 rounded-full font-bold text-xs hover:border-[#003049] hover:text-[#003049] transition-colors">
                      {lbl}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">Kullanım Durumu & Kimden</label>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <DropdownChecklist label="Kullanım Durumu" options={generateOptionsWithCount(USAGE_FILTERS, 'usage')} selected={selectedUsage} toggleOption={toggleArr(setSelectedUsage)} />
                  <DropdownChecklist label="Kimden" options={generateOptionsWithCount(WHO_FILTERS, 'fromWho')} selected={selectedWho} toggleOption={toggleArr(setSelectedWho)} />
                </div>
                
                <label className="block text-xs font-bold text-gray-400 tracking-widest uppercase mb-3 mt-6">Ekstra Özellikler</label>
                <div className="space-y-1">
                  <ToggleSwitch label="Ebeveyn Banyolu" checked={features.ebeveynBanyo} onChange={() => toggleFeat('ebeveynBanyo')} />
                  <ToggleSwitch label="Asansörlü" checked={features.asansor} onChange={() => toggleFeat('asansor')} />
                  <ToggleSwitch label="Otoparklı" checked={features.otopark} onChange={() => toggleFeat('otopark')} />
                  <ToggleSwitch label="Eşyalı" checked={features.esyali} onChange={() => toggleFeat('esyali')} />
                  <ToggleSwitch label="Balkonlu" checked={features.balkon} onChange={() => toggleFeat('balkon')} />
                  <ToggleSwitch label="Site İçerisinde" checked={features.siteIcirisi} onChange={() => toggleFeat('siteIcirisi')} />
                  <ToggleSwitch label="Krediye Uygun" checked={features.krediyeUygun} onChange={() => toggleFeat('krediyeUygun')} />
                  <ToggleSwitch label="Takaslı" checked={features.takasli} onChange={() => toggleFeat('takasli')} />
                  <ToggleSwitch label="Amerikan Mutfak" checked={features.amerikanMutfak} onChange={() => toggleFeat('amerikanMutfak')} />
                </div>
              </div>
           </div>

           <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-6 flex items-center gap-4 z-[60] shadow-[0_-10px_20px_rgb(0,0,0,0.03)]">
              <button 
                onClick={() => { 
                  setMinPrice(''); setMaxPrice(''); setM2Min(''); setM2Max(''); 
                  setSelectedRooms([]); setSelectedFloors([]); setSelectedHeating([]); setSelectedProvince(''); setSelectedDistrict('');
                  setSelectedWho([]); setSelectedUsage([]); setSelectedDeeds([]);
                  setFeatures({ ebeveynBanyo: false, asansor: false, otopark: false, esyali: false, balkon: false, siteIcirisi: false, krediyeUygun: false, takasli: false, amerikanMutfak: false });
                }} 
                className="px-6 py-4 rounded-xl font-bold text-slate-500 hover:bg-slate-50 hover:text-[#003049] transition-colors"
              >
                Temizle
              </button>
              <button onClick={() => setIsFilterOpen(false)} className="flex-1 bg-[#E76F2E] hover:bg-[#003049] text-white px-2 py-4 rounded-xl font-black transition-all transform hover:-translate-y-1 shadow-[0_10px_25px_rgba(231,111,46,0.3)] hover:shadow-xl hover:shadow-[#003049]/30 flex items-center justify-center">
                ({filteredListings.length}) Sonucu Göster
              </button>
           </div>
        </div>
      </div>
      {/* --- ÇEKMECE SONU --- */}


      {/* 1. ÜST ARAMA VE FİLTRE HAPLARI BARI */}
      <div className="bg-white rounded-full p-2 md:p-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col md:flex-row items-center gap-3 md:gap-4 mb-10 relative z-20">
        
        {/* Arama Inputu */}
        <div className="flex-1 w-full bg-slate-50/80 hover:bg-white rounded-full flex items-center px-6 py-4 border-2 border-transparent hover:border-orange-100 focus-within:bg-white focus-within:border-orange-200 focus-within:shadow-[0_4px_15px_rgba(231,111,46,0.1)] transition-all">
          <Search className="text-orange-500 mr-3 shrink-0" size={20} />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="İl, ilçe, mahalle veya İlan No (#10452) arayın..." 
            className="bg-transparent w-full outline-none text-[#003049] font-bold placeholder:text-slate-400 placeholder:font-medium text-sm md:text-base leading-none pt-1" 
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-4 md:pb-0 scrollbar-hide shrink-0">
          
          <div className="flex bg-slate-100 p-1.5 rounded-full shrink-0">
            <button onClick={() => setActiveTab('Kiralık')} className={`px-6 py-2.5 rounded-full font-black text-sm transition-all shadow-sm ${activeTab === 'Kiralık' ? 'bg-white text-orange-600' : 'text-slate-500 hover:text-[#003049]'}`}>Kiralık</button>
            <button onClick={() => setActiveTab('Satılık')} className={`px-6 py-2.5 rounded-full font-black text-sm transition-all shadow-sm ${activeTab === 'Satılık' ? 'bg-white text-[#003049]' : 'text-slate-500 hover:text-[#003049]'}`}>Satılık</button>
          </div>

          <div className="w-px h-8 bg-slate-200 shrink-0 hidden md:block"></div>

          {/* Kefilim'in Kalbi: Skor Filtresi */}
          <div className="flex items-center gap-3 px-5 py-2 shrink-0 cursor-pointer group" onClick={() => {
              if(!currentUser?.isProfileComplete) {
                customAlert("Önce profilinizi tamamlayıp Kefilim skorunuzu almanız gerekmektedir.");
                return;
              }
              setShowOnlyMyScore(!showOnlyMyScore);
            }}>
            <span className={`font-black text-sm transition-colors ${showOnlyMyScore ? 'text-[#003049]' : 'text-slate-400 group-hover:text-slate-600'}`}>Skoruma Uygunlar</span>
            {showOnlyMyScore ? (
               <ToggleRight className="text-[#E76F2E] w-10 h-10 group-hover:scale-110 transition-transform shadow-sm bg-white rounded-full" />
            ) : (
               <ToggleLeft className="text-slate-300 w-10 h-10 group-hover:scale-110 transition-transform bg-white rounded-full" />
            )}
          </div>

          <div className="w-px h-8 bg-slate-200 shrink-0 hidden md:block"></div>

          {/* Yeni Buton: Çekmeceyi Açan Detaylı Filtre */}
          <button onClick={() => setIsFilterOpen(true)} className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-100 hover:border-[#003049] hover:bg-slate-50 rounded-full text-[#003049] font-black text-sm shrink-0 transition-colors shadow-sm">
            <SlidersHorizontal size={18} /> Filtreler
          </button>
        </div>
      </div>

      {/* 2. SPLIT SCREEN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative">
        
        {/* SOL: İLAN KARTLARI (KAYDIRILABİLİR) */}
        <div className="w-full lg:w-[55%] flex flex-col gap-8">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-2xl font-black text-[#003049] tracking-tight">{activeTab} İlanlar <span className="text-slate-400 text-lg ml-2 font-bold bg-slate-100 px-3 py-1 rounded-full">{filteredListings.length}</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredListings.map(item => (
              <div 
                key={item.id} 
                onMouseEnter={() => setHoveredListingId(item.id)}
                onMouseLeave={() => setHoveredListingId(null)}
                className={`bg-white rounded-[2rem] overflow-hidden border transition-all duration-500 group flex flex-col cursor-pointer ${hoveredListingId === item.id ? 'border-orange-300 shadow-[0_25px_50px_rgba(231,111,46,0.15)] -translate-y-2' : 'border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,48,73,0.12)] hover:-translate-y-1'}`}
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                  
                  {/* Satılık/Kiralık Etiketi */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full font-black text-xs shadow-lg" style={{ color: item.type === 'Kiralık' ? '#E76F2E' : '#003049' }}>
                    {item.type}
                  </div>
                  
                  {/* İLAN NO Etiketi */}
                  <div className="absolute top-4 right-16 bg-[#003049]/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full font-bold text-[10px] tracking-widest shadow-lg opacity-80 group-hover:opacity-100 transition-opacity">
                    #{item.id}
                  </div>

                  {/* Favori Butonu */}
                  <button className="absolute top-3 right-3 w-10 h-10 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:shadow-md transition-all">
                    <Heart size={20} className="fill-current opacity-20 hover:opacity-100 transition-opacity" />
                  </button>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-1 relative">
                  <h3 className="text-[#003049] font-black text-2xl lg:text-3xl tracking-tight mb-2">₺{item.price.toLocaleString('tr-TR')}</h3>
                  <h4 className="font-bold text-slate-700 text-lg leading-snug mb-1 truncate">{item.title}</h4>
                  <p className="text-slate-400 font-medium text-sm flex items-center gap-1.5 mb-6"><MapPin size={14} className="shrink-0"/> <span className="truncate">{item.location}</span></p>
                  
                  <div className="flex items-center justify-between text-slate-500 font-bold text-xs bg-slate-50 p-4 rounded-2xl mb-6 border border-slate-100/80 shadow-inner group-hover:bg-blue-50/50 transition-colors">
                    <div className="flex items-center gap-2"><BedDouble size={18} className="text-[#003049]/50" /> {item.beds} Yatak</div>
                    <div className="flex items-center gap-2"><Bath size={18} className="text-[#003049]/50" /> {item.baths} Banyo</div>
                    <div className="flex items-center gap-2"><Move size={18} className="text-[#003049]/50" /> {item.m2} m²</div>
                  </div>
                  
                  {/* Yeni Şık Skor Rozeti */}
                  <div className={`mt-auto border rounded-2xl p-4 flex items-center gap-4 transition-colors ${item.minScore > 0 ? 'bg-orange-50/50 border-orange-100/50 group-hover:bg-orange-50' : 'bg-slate-50/50 border-slate-100'}`}>
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl shrink-0 shadow-sm ${item.minScore > 0 ? 'bg-white text-orange-500' : 'bg-white text-slate-300'}`}>
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Ev Sahibi Beklentisi</p>
                      <p className={`text-base font-black leading-none ${item.minScore > 0 ? 'text-[#003049]' : 'text-slate-500'}`}>
                        {item.minScore > 0 ? `İstenen Min. Skor: ${item.minScore}` : 'Skor Şartı Yok'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredListings.length === 0 && (
             <div className="text-center py-24 bg-white rounded-[3rem] border border-slate-100 shadow-sm mt-4 relative overflow-hidden">
               <div className="absolute inset-0 bg-slate-50/50 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(#003049 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
               <Layers className="w-16 h-16 text-slate-200 mx-auto mb-4 relative z-10" />
               <h3 className="text-2xl font-black text-[#003049] mb-2 relative z-10">İlan Bulunamadı</h3>
               <p className="text-slate-500 font-medium max-w-sm mx-auto relative z-10">"{searchQuery}" aramasına veya filtrelere uyan sonuç bulunmuyor.</p>
               <button onClick={() => { setSearchQuery(''); setShowOnlyMyScore(false); }} className="mt-6 px-6 py-3 bg-[#003049] text-white rounded-full font-bold relative z-10 hover:bg-orange-600 transition-colors">Aramayı Temizle</button>
             </div>
          )}
        </div>

        {/* SAĞ: CANLI İNTERAKTİF HARİTA EKRANI (STYLED PLACEHOLDER) */}
        <div className="hidden lg:block w-[45%] sticky top-[7.5rem] h-[calc(100vh-9.5rem)] min-h-[500px] bg-[#EEF2F5] rounded-[3rem] border-8 border-white shadow-[0_20px_50px_rgb(0,0,0,0.06)] overflow-hidden relative">
          
          {/* Gerçekçi Harita Dokusu */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(to right, #003049 1px, transparent 1px), linear-gradient(to bottom, #003049 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(45deg, #003049 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
             <MapPin className="w-96 h-96 text-[#003049]" />
          </div>

          <div className="absolute top-6 left-6 flex items-center gap-3 z-10">
             <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-white font-black text-[#003049] text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
               <Layers size={16} className="text-orange-500" /> Uydu Görünümü
             </div>
          </div>

          {/* İNTERAKTİF PİNLER */}
          {filteredListings.map((pin) => {
            const isHovered = hoveredListingId === pin.id;
            return (
              <div 
                key={pin.id} 
                className={`absolute group cursor-pointer transition-all duration-300 ease-out ${isHovered ? 'z-50 scale-125 -translate-y-2' : 'z-10 hover:z-40 hover:scale-110'}`} 
                style={{ top: pin.coords.y, left: pin.coords.x }}
                onMouseEnter={() => setHoveredListingId(pin.id)}
                onMouseLeave={() => setHoveredListingId(null)}
              >
                <div className={`px-5 py-2.5 font-black text-sm rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-colors duration-300 relative z-10 ${isHovered ? 'bg-[#E76F2E] text-white shadow-[0_12px_30px_rgba(231,111,46,0.4)]' : (pin.type === 'Satılık' ? 'bg-[#003049] text-white border border-[#003049]' : 'bg-white text-[#003049] border border-slate-200')}`}>
                  {pin.priceStr}
                </div>
                <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 rounded-sm z-0 transition-colors duration-300 ${isHovered ? 'bg-[#E76F2E]' : (pin.type === 'Satılık' ? 'bg-[#003049]' : 'bg-white border-b border-r border-slate-200')}`}></div>
              </div>
            );
          })}

          {/* Kullanıcı Konumu Radar Animasyon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
             <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center animate-ping"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-[3px] border-white shadow-lg"></div>
          </div>

          {!filteredListings.length && (
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-20 flex items-center justify-center">
              <span className="bg-white px-6 py-3 rounded-full font-bold text-slate-400 shadow-sm border border-slate-100">Haritada gösterilecek ilan bulunamadı</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

