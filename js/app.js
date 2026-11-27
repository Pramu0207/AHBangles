// AHBangles - Complete Full-Stack React Storefront & Admin Portal
const { useState, useEffect, useMemo, useRef } = React;

// --- SVG ICONS HELPER ---
const Icon = ({ name, className = "w-5 h-5", strokeWidth = 1.8 }) => {
  const icons = {
    ShoppingBag: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    Heart: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    Search: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    User: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    Phone: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    MapPin: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    Mail: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    Star: (
      <svg className={className} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    Truck: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    ShieldCheck: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    RotateCcw: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    Sparkles: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    Clock: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    CheckCircle2: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    XCircle: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    ChevronRight: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    ),
    ChevronDown: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    ),
    Filter: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
    Trash2: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    Plus: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
    Minus: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
      </svg>
    ),
    Package: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    CreditCard: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    TrendingUp: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    Lock: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    Gift: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V4a2 2 0 112 2h-2zm0 0V4a2 2 0 10-2 2h2zm-8 4h16m-16 0a2 2 0 00-2 2v7a2 2 0 002 2h16a2 2 0 002-2v-7a2 2 0 00-2-2m-16 0h16" />
      </svg>
    ),
    Menu: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    X: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    WhatsApp: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 2C6.516 2 2.016 6.5 2.016 12.016c0 1.906.531 3.734 1.547 5.313L2.016 22l4.828-1.516c1.516.922 3.281 1.438 5.187 1.438 5.516 0 10.016-4.5 10.016-10.016S17.547 2 12.031 2zm5.797 14.39c-.25.703-1.453 1.359-2.031 1.438-.547.078-1.25.109-3.844-.953-2.609-1.078-4.266-3.75-4.391-3.922-.125-.172-1.047-1.391-1.047-2.656s.656-1.891.891-2.141c.234-.25.516-.313.688-.313.172 0 .344.016.484.016.156 0 .375-.063.578.438.219.516.734 1.797.813 1.938.078.141.125.313.031.5-.094.188-.141.297-.281.453-.141.156-.297.344-.422.469-.141.141-.281.297-.125.563.156.266.688 1.125 1.484 1.828 1.031.906 1.891 1.188 2.156 1.328.266.141.422.125.578-.063.156-.188.672-.781.844-1.047.172-.266.344-.219.578-.141.234.078 1.484.703 1.734.828.25.125.422.188.484.297.063.109.063.641-.188 1.344z"/>
      </svg>
    )
  };

  return icons[name] || <span className="inline-block w-4 h-4 bg-gray-300 rounded-full" />;
};

// --- BRAND LOGO COMPONENT ---
const BrandLogo = ({ onClick, light = false }) => {
  return (
    <div onClick={onClick} className="cursor-pointer flex items-center space-x-3 select-none group">
      {/* Intricate royal bangles icon */}
      <div className="relative w-11 h-11 flex items-center justify-center">
        {/* Outer Bangle */}
        <div className="absolute inset-0 rounded-full border-2 border-gold-500 shadow-md group-hover:rotate-45 transition-transform duration-700"></div>
        {/* Intersecting Second Bangle */}
        <div className="absolute inset-1 rounded-full border-2 border-maroon-700 opacity-90 group-hover:-rotate-45 transition-transform duration-700"></div>
        {/* Sparkle Stones on Bangle */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-rose-500 shadow-sm border border-white"></div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold-400 shadow-sm border border-white"></div>
        {/* Center Monogram */}
        <span className={`text-base font-serif font-black tracking-tight ${light ? 'text-white' : 'text-maroon-800'}`}>
          AH
        </span>
      </div>

      <div>
        <div className="flex items-baseline space-x-1">
          <span className={`text-2xl font-serif font-extrabold tracking-tight ${light ? 'text-white' : 'text-maroon-800'}`}>
            AH<span className="text-gold-600">Bangles</span>
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-rose-100 text-maroon-800 font-sans">
            Jewellery
          </span>
        </div>
        <p className={`text-[10px] tracking-widest uppercase font-medium ${light ? 'text-rose-200' : 'text-rosegold-600'}`}>
          Every Bangle Tells a Story
        </p>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
function AHBanglesApp() {
  // Navigation & Page State
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // App Data
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // Shopping State
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('ahbangles_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('ahbangles_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sizeFilter, setSizeFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Auth State
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('ahbangles_user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register' | 'admin'
  const [authForm, setAuthForm] = useState({ email: '', password: '', name: '', mobile: '' });

  // Checkout State
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [checkoutData, setCheckoutData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    landmark: '',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560097',
    paymentMethod: 'razorpay' // 'razorpay' | 'cod'
  });
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [razorpaySimModalOpen, setRazorpaySimModalOpen] = useState(false);
  const [pendingOrderDetails, setPendingOrderDetails] = useState(null);
  const [lastOrder, setLastOrder] = useState(null);

  // Tracking
  const [trackQuery, setTrackQuery] = useState('');
  const [trackedOrder, setTrackedOrder] = useState(null);
  const [trackError, setTrackError] = useState('');

  // Toast Notification
  const [toast, setToast] = useState(null);
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  // WhatsApp Business Constants
  const WHATSAPP_NUMBER = "918618836558";
  const BUSINESS_PHONE = "+91 8618836558";
  const OWNER_NAME = "Sindhu Arun";
  const BUSINESS_ADDRESS = "Sindhu W/o Arun, Doddabommasandra, Near BEL, Vidyaranyapura Road, Bengaluru, Karnataka, India";

  // Persist Cart & Wishlist
  useEffect(() => {
    localStorage.setItem('ahbangles_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('ahbangles_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Initial Fetch Data
  const fetchData = async () => {
    try {
      setLoading(true);
      const [prodRes, catRes, revRes] = await Promise.all([
        fetch('/api/products').then(r => r.json()),
        fetch('/api/admin/categories').then(r => r.json()),
        fetch('/api/reviews').then(r => r.json())
      ]);

      if (prodRes.success) setProducts(prodRes.products);
      if (catRes.success) setCategories(catRes.categories);
      if (revRes.success) setReviews(revRes.reviews);
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch admin stats and orders if user is admin
  useEffect(() => {
    if (user && user.role === 'admin') {
      fetch('/api/admin/stats')
        .then(r => r.json())
        .then(d => { if (d.success) setStats(d.stats); })
        .catch(console.error);

      fetch('/api/orders')
        .then(r => r.json())
        .then(d => { if (d.success) setOrders(d.orders); })
        .catch(console.error);
    }
  }, [user, currentPage]);

  // Handle URL hash navigation
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        if (hash.startsWith('product-')) {
          const id = hash.replace('product-', '');
          const p = products.find(x => x.id === id);
          if (p) {
            setSelectedProduct(p);
            setCurrentPage('product-details');
          }
        } else if (hash === 'admin') {
          setCurrentPage('admin');
        } else if (['shop', 'categories', 'cart', 'checkout', 'orders', 'track', 'about', 'contact', 'wishlist'].includes(hash)) {
          setCurrentPage(hash);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [products]);

  // Scroll to top on page transition
  const navigateTo = (page, product = null) => {
    setCurrentPage(page);
    if (product) setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // --- CART OPERATIONS ---
  const addToCart = (product, size = "2.6", color = null, qty = 1) => {
    const chosenColor = color || (product.colors && product.colors[0]) || "Standard Gold";
    const chosenSize = size || (product.sizes && product.sizes[0]) || "2.6";

    setCart(prev => {
      const existingIndex = prev.findIndex(item => 
        item.id === product.id && item.size === chosenSize && item.color === chosenColor
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += qty;
        return next;
      } else {
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.image,
            category: product.category,
            size: chosenSize,
            color: chosenColor,
            quantity: qty
          }
        ];
      }
    });

    showToast(`Added "${product.name}" to cart! 🛍️`);
  };

  const updateCartQty = (index, delta) => {
    setCart(prev => {
      const next = [...prev];
      const newQty = next[index].quantity + delta;
      if (newQty <= 0) {
        next.splice(index, 1);
        showToast('Item removed from cart');
      } else {
        next[index].quantity = newQty;
      }
      return next;
    });
  };

  const removeFromCart = (index) => {
    setCart(prev => {
      const next = [...prev];
      next.splice(index, 1);
      return next;
    });
    showToast('Item removed from cart');
  };

  // Wishlist toggle
  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from Wishlist');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Added to Wishlist ❤️');
        return [...prev, productId];
      }
    });
  };

  // Global Owner Delete Bangle Handler
  const handleDeleteProductGlobal = async (id, name = '') => {
    const label = name ? `"${name}" (${id})` : `bangle ${id}`;
    if (!window.confirm(`Are you sure you want to permanently delete ${label} from AHBangles store?`)) return;
    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        showToast(`🗑️ ${name || id} deleted permanently from store!`);
        fetchData();
      } else {
        showToast(data.error || 'Failed to delete product', 'error');
      }
    } catch (e) {
      showToast('Failed to delete product', 'error');
    }
  };

  // Cart Calculations
  const cartSubtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [cart]);

  const deliveryFee = useMemo(() => {
    if (cartSubtotal === 0) return 0;
    return cartSubtotal >= 499 ? 0 : 49;
  }, [cartSubtotal]);

  const grandTotal = useMemo(() => {
    return Math.max(0, cartSubtotal - discountAmount + deliveryFee);
  }, [cartSubtotal, discountAmount, deliveryFee]);

  // Apply Coupon
  const applyCouponCode = async (codeToApply) => {
    const code = (codeToApply || couponCode).trim();
    if (!code) {
      showToast('Please enter a coupon code', 'error');
      return;
    }

    try {
      const res = await fetch('/api/coupons/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, cartTotal: cartSubtotal })
      });
      const data = await res.json();
      if (data.success) {
        setAppliedCoupon(data.coupon);
        setDiscountAmount(data.discountAmount);
        showToast(`🎉 ${data.message}`);
      } else {
        showToast(data.message || 'Invalid coupon', 'error');
      }
    } catch (e) {
      showToast('Failed to apply coupon', 'error');
    }
  };

  // Filtered Products for Shop All
  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Category
    if (activeCategory !== 'all') {
      const catLower = activeCategory.toLowerCase();
      list = list.filter(p => 
        (p.categoryId && p.categoryId.toLowerCase() === catLower) ||
        (p.category && p.category.toLowerCase().includes(catLower))
      );
    }

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q))
      );
    }

    // Price
    if (priceFilter === 'under-300') {
      list = list.filter(p => p.price < 300);
    } else if (priceFilter === '300-599') {
      list = list.filter(p => p.price >= 300 && p.price <= 599);
    } else if (priceFilter === '600-999') {
      list = list.filter(p => p.price >= 600 && p.price <= 999);
    } else if (priceFilter === 'above-1000') {
      list = list.filter(p => p.price > 1000);
    }

    // Size
    if (sizeFilter !== 'all') {
      list = list.filter(p => p.sizes && p.sizes.includes(sizeFilter));
    }

    // Sorting
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === 'newest') {
      list.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
    }

    return list;
  }, [products, activeCategory, searchQuery, priceFilter, sizeFilter, sortBy]);

  // --- WHATSAPP ORDER HELPER ---
  const openWhatsAppOrder = (product, size = "2.6", color = "Standard", customNote = "") => {
    let msg = `Hello Sindhu Arun (AHBangles) 👋\n\nI want to place an order for:\n💎 *${product.name}*\n🆔 *Product ID:* ${product.id}\n💰 *Price:* ₹${product.price}\n📏 *Size:* ${size}\n🎨 *Color:* ${color}`;
    if (customNote && customNote.trim()) {
      msg += `\n✨ *Customization Request:* ${customNote.trim()}`;
    }
    msg += `\n\nPlease share delivery confirmation and bank/UPI details. Thank you!`;
    const text = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const openGeneralWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Sindhu Arun (AHBangles) 👋\n\nI'm visiting your website and have an enquiry regarding your handcrafted bangles and custom bridal jewellery.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  // --- PAYMENT & CHECKOUT FLOW ---
  const handleInitiateOrder = async () => {
    if (!checkoutData.name || !checkoutData.mobile || !checkoutData.address || !checkoutData.pincode) {
      showToast('Please fill all mandatory shipping address fields', 'error');
      return;
    }
    if (checkoutData.mobile.replace(/\D/g, '').length < 10) {
      showToast('Please enter a valid 10-digit Indian mobile number', 'error');
      return;
    }

    const orderPayload = {
      customer: {
        name: checkoutData.name,
        mobile: checkoutData.mobile,
        email: checkoutData.email || `${checkoutData.mobile}@customer.ahbangles.com`,
        address: `${checkoutData.address}, Landmark: ${checkoutData.landmark || 'N/A'}`,
        city: checkoutData.city,
        state: checkoutData.state,
        pincode: checkoutData.pincode
      },
      items: cart,
      subtotal: cartSubtotal,
      discount: discountAmount,
      deliveryFee,
      total: grandTotal,
      couponCode: appliedCoupon ? appliedCoupon.code : null,
      paymentMethod: checkoutData.paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : 'Razorpay (Online Payment)'
    };

    // If Cash on Delivery
    if (checkoutData.paymentMethod === 'cod') {
      try {
        setIsProcessingPayment(true);
        const res = await fetch('/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderPayload)
        });
        const data = await res.json();
        if (data.success) {
          setCart([]);
          setLastOrder(data.order);
          navigateTo('payment-success');
          // Fire confetti!
          if (window.confetti) {
            window.confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
          }
        } else {
          showToast(data.error || 'Failed to place order', 'error');
        }
      } catch (e) {
        showToast('Order placement failed', 'error');
      } finally {
        setIsProcessingPayment(false);
      }
      return;
    }

    // If Online Payment via Razorpay
    try {
      setIsProcessingPayment(true);
      const res = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: grandTotal,
          receipt: `rcpt_${Date.now()}`
        })
      });
      const data = await res.json();

      if (data.orderId) {
        // Open interactive Razorpay checkout modal
        setPendingOrderDetails({
          ...orderPayload,
          razorpayOrderId: data.orderId,
          amountPaise: data.amount
        });
        setRazorpaySimModalOpen(true);
      } else {
        showToast('Payment initialization failed', 'error');
      }
    } catch (e) {
      showToast('Payment gateway connection error', 'error');
    } finally {
      setIsProcessingPayment(false);
    }
  };

  // Complete Razorpay Payment
  const completeRazorpayPayment = async (paymentId = null) => {
    const pId = paymentId || `pay_${Math.random().toString(36).substring(2, 12)}`;
    try {
      setIsProcessingPayment(true);
      const res = await fetch('/api/payment/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          razorpay_order_id: pendingOrderDetails.razorpayOrderId,
          razorpay_payment_id: pId,
          razorpay_signature: 'test_signature_verified',
          orderDetails: pendingOrderDetails
        })
      });
      const data = await res.json();
      if (data.success) {
        setRazorpaySimModalOpen(false);
        setCart([]);
        setLastOrder(data.order);
        navigateTo('payment-success');
        if (window.confetti) {
          window.confetti({ particleCount: 150, spread: 90, origin: { y: 0.5 } });
        }
      } else {
        showToast(data.error || 'Payment verification failed', 'error');
      }
    } catch (e) {
      showToast('Payment processing error', 'error');
    } finally {
      setIsProcessingPayment(false);
    }
  };

  // Track Order
  const handleTrackSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!trackQuery.trim()) {
      showToast('Enter Order ID or Mobile Number', 'error');
      return;
    }
    setTrackError('');
    setTrackedOrder(null);
    try {
      const res = await fetch(`/api/orders/track/${encodeURIComponent(trackQuery.trim())}`);
      const data = await res.json();
      if (data.success) {
        setTrackedOrder(data.order);
      } else {
        setTrackError(data.error || 'No order found with these details.');
      }
    } catch (e) {
      setTrackError('Failed to fetch tracking details. Please try again.');
    }
  };

  // Login / Register handler
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    const endpoint = authMode === 'register' ? '/api/auth/register' : '/api/auth/login';
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...authForm,
          role: authMode === 'admin' ? 'admin' : 'customer'
        })
      });
      const data = await res.json();
      if (data.success) {
        setUser(data.user);
        localStorage.setItem('ahbangles_user', JSON.stringify(data.user));
        localStorage.setItem('ahbangles_token', data.token);
        setAuthModalOpen(false);
        showToast(`Welcome back, ${data.user.name}! ✨`);
        if (data.user.role === 'admin') {
          navigateTo('admin');
        }
      } else {
        showToast(data.error || 'Authentication failed', 'error');
      }
    } catch (e) {
      showToast('Server connection error', 'error');
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('ahbangles_user');
    localStorage.removeItem('ahbangles_token');
    showToast('Logged out successfully');
    navigateTo('home');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fff9fa] text-gray-800 font-sans selection:bg-rose-200">
      
      {/* --- 1. PROMOTIONAL TOP BAR --- */}
      <div className="bg-gradient-royal text-white text-xs py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center space-y-1 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase border border-gold-400/30">
              Festive Mela
            </span>
            <span className="font-medium tracking-wide">
              Flat 10% OFF with code <strong className="text-gold-300 font-bold tracking-wider">AHB10</strong> | Free Delivery Above ₹499
            </span>
          </div>
          <div className="flex items-center space-x-4 text-[11px] font-medium">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`} 
              target="_blank" 
              className="hover:text-gold-300 transition-colors flex items-center space-x-1"
            >
              <Icon name="WhatsApp" className="w-3.5 h-3.5 text-green-400" />
              <span>WhatsApp: +91 8618836558</span>
            </a>
            <span className="hidden lg:inline text-rose-300">•</span>
            <span className="hidden lg:inline text-rose-100">Bengaluru, Karnataka</span>
            <span className="hidden lg:inline text-rose-300">•</span>
            <button 
              onClick={() => { setAuthMode('admin'); setAuthModalOpen(true); }}
              className="text-gold-300 hover:underline flex items-center space-x-1"
            >
              <Icon name="Lock" className="w-3 h-3" />
              <span>Owner Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* --- 2. MAIN NAVIGATION HEADER --- */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-maroon-800 hover:bg-rose-50"
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
              </button>
            </div>

            {/* Logo */}
            <BrandLogo onClick={() => navigateTo('home')} />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6">
              {[
                { label: 'Home', page: 'home' },
                { label: 'Shop All', page: 'shop' },
                { label: 'Categories', page: 'categories' },
                { label: 'New Arrivals', page: 'shop', filter: 'newest' },
                { label: 'Best Sellers', page: 'shop', filter: 'bestseller' },
                { label: 'About Us', page: 'about' },
                { label: 'Contact Us', page: 'contact' }
              ].map(item => (
                <button
                  key={item.label}
                  onClick={() => {
                    if (item.filter === 'newest') {
                      setSortBy('newest');
                      setActiveCategory('all');
                      navigateTo('shop');
                    } else if (item.filter === 'bestseller') {
                      setActiveCategory('all');
                      navigateTo('shop');
                    } else {
                      navigateTo(item.page);
                    }
                  }}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    currentPage === item.page && !item.filter
                      ? 'text-maroon-800 font-bold border-b-2 border-gold-500 pb-1'
                      : 'text-gray-700 hover:text-maroon-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Search Bar & Action Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              
              {/* Search Bar (Desktop) */}
              <div className="relative hidden md:block w-48 lg:w-64">
                <input
                  type="text"
                  placeholder="Search bangles..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (currentPage !== 'shop') setCurrentPage('shop');
                  }}
                  className="w-full bg-rose-50/70 border border-rose-200 text-xs rounded-full pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-700 transition"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Icon name="Search" className="w-3.5 h-3.5" />
                </div>
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => navigateTo('wishlist')}
                className="relative p-2.5 rounded-full text-gray-700 hover:text-maroon-700 hover:bg-rose-50 transition"
                title="Wishlist"
              >
                <Icon name="Heart" className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart Button */}
              <button
                onClick={() => navigateTo('cart')}
                className="relative p-2.5 rounded-full text-gray-700 hover:text-maroon-700 hover:bg-rose-50 transition"
                title="Shopping Cart"
              >
                <Icon name="ShoppingBag" className="w-5 h-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-maroon-700 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </button>

              {/* User Account / Login */}
              {user ? (
                <div className="relative group">
                  <button className="flex items-center space-x-1.5 p-2 rounded-lg text-gray-700 hover:bg-rose-50">
                    <div className="w-7 h-7 rounded-full bg-maroon-100 text-maroon-800 font-bold text-xs flex items-center justify-center border border-maroon-300">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-xs font-semibold hidden sm:inline max-w-[80px] truncate">{user.name}</span>
                    <Icon name="ChevronDown" className="w-3.5 h-3.5 text-gray-400" />
                  </button>
                  <div className="absolute right-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-rose-100 py-2 hidden group-hover:block z-50">
                    <div className="px-4 py-2 border-b border-rose-50">
                      <p className="text-xs font-bold text-gray-900 truncate">{user.name}</p>
                      <p className="text-[10px] text-gray-500 truncate">{user.email}</p>
                    </div>
                    {user.role === 'admin' && (
                      <button
                        onClick={() => navigateTo('admin')}
                        className="w-full text-left px-4 py-2 text-xs text-maroon-700 hover:bg-rose-50 font-semibold flex items-center space-x-2"
                      >
                        <Icon name="Lock" className="w-3.5 h-3.5" />
                        <span>Owner Dashboard</span>
                      </button>
                    )}
                    <button
                      onClick={() => navigateTo('orders')}
                      className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-rose-50 flex items-center space-x-2"
                    >
                      <Icon name="Package" className="w-3.5 h-3.5" />
                      <span>My Orders</span>
                    </button>
                    <button
                      onClick={() => navigateTo('track')}
                      className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-rose-50 flex items-center space-x-2"
                    >
                      <Icon name="Truck" className="w-3.5 h-3.5" />
                      <span>Track Order</span>
                    </button>
                    <div className="border-t border-rose-50 my-1"></div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 flex items-center space-x-2"
                    >
                      <Icon name="LogOut" className="w-3.5 h-3.5" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => { setAuthMode('login'); setAuthModalOpen(true); }}
                  className="text-xs font-semibold px-3.5 py-2 rounded-full border border-maroon-700 text-maroon-700 hover:bg-maroon-700 hover:text-white transition shadow-sm"
                >
                  Login / Register
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="px-4 pb-3 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search bangles (e.g. Kundan, Bridal, Glass)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (currentPage !== 'shop') setCurrentPage('shop');
              }}
              className="w-full bg-rose-50/70 border border-rose-200 text-xs rounded-full pl-9 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Icon name="Search" className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-rose-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
            {[
              { label: 'Home', page: 'home' },
              { label: 'Shop All Bangles', page: 'shop' },
              { label: '12 Bangle Categories', page: 'categories' },
              { label: 'My Orders & Invoices', page: 'orders' },
              { label: 'Track Order', page: 'track' },
              { label: 'About Sindhu Arun & AHBangles', page: 'about' },
              { label: 'Contact Us', page: 'contact' }
            ].map(item => (
              <button
                key={item.label}
                onClick={() => navigateTo(item.page)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                  currentPage === item.page ? 'bg-maroon-50 text-maroon-800' : 'text-gray-700 hover:bg-rose-50'
                }`}
              >
                <span>{item.label}</span>
                <Icon name="ChevronRight" className="w-4 h-4 text-gray-400" />
              </button>
            ))}
            <div className="pt-2 border-t border-rose-100 flex items-center justify-between">
              <button
                onClick={() => { setAuthMode('admin'); setAuthModalOpen(true); setMobileMenuOpen(false); }}
                className="text-xs text-gold-600 font-bold flex items-center space-x-1"
              >
                <Icon name="Lock" className="w-3.5 h-3.5" />
                <span>Owner Portal</span>
              </button>
              <button
                onClick={() => setSizeGuideOpen(true)}
                className="text-xs text-maroon-700 font-semibold underline"
              >
                Bangle Size Guide
              </button>
            </div>
          </div>
        )}
      </header>

      {/* --- NOTIFICATION TOAST --- */}
      {toast && (
        <div className={`fixed top-24 right-4 z-50 px-5 py-3 rounded-xl shadow-2xl text-sm font-semibold text-white flex items-center space-x-2 transition-all transform animate-bounce ${
          toast.type === 'error' ? 'bg-rose-600' : 'bg-maroon-800 border border-gold-400'
        }`}>
          <span>{toast.message}</span>
        </div>
      )}

      {/* --- MAIN PAGE CONTENT --- */}
      <main className="flex-1">

        {/* ========================================================= */}
        {/* PAGE 1: HOME PAGE                                         */}
        {/* ========================================================= */}
        {currentPage === 'home' && (
          <div>
            {/* HERO PROMOTIONAL BANNER */}
            <section className="relative overflow-hidden bg-gradient-to-br from-cream-50 via-[#fdf0f3] to-[#fae1e5] border-b border-rose-100">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-10 left-10 w-80 h-80 bg-rose-400/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Hero Left Content */}
                  <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur border border-gold-400/40 rounded-full px-4 py-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                      <span className="text-xs font-bold text-maroon-800 tracking-wider uppercase font-sans">
                        Bengaluru's Premier Bangles House
                      </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-gray-900 leading-tight">
                      Royal Bangles <br />
                      <span className="text-gradient-royal">Crafted for Every</span> <br />
                      <span className="italic font-normal text-gold-600 font-serif">Indian Story.</span>
                    </h1>

                    <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed">
                      Discover handcrafted velvet kundan sets, grand bridal choodas, genuine Firozabad glass, and 24K micro-plated daily bangles by <strong className="text-maroon-800">Sindhu Arun</strong>.
                    </p>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 max-w-md mx-auto lg:mx-0 text-center">
                      <div className="bg-white/70 backdrop-blur rounded-xl p-2.5 border border-rose-100 shadow-sm">
                        <span className="block text-xl font-bold text-maroon-800">12+</span>
                        <span className="text-[10px] text-gray-500 font-medium">Bangle Styles</span>
                      </div>
                      <div className="bg-white/70 backdrop-blur rounded-xl p-2.5 border border-rose-100 shadow-sm">
                        <span className="block text-xl font-bold text-gold-600">4.9★</span>
                        <span className="text-[10px] text-gray-500 font-medium">1,200+ Reviews</span>
                      </div>
                      <div className="bg-white/70 backdrop-blur rounded-xl p-2.5 border border-rose-100 shadow-sm">
                        <span className="block text-xl font-bold text-maroon-800">100%</span>
                        <span className="text-[10px] text-gray-500 font-medium">Safe Packing</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                      <button
                        onClick={() => navigateTo('shop')}
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-royal text-white font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition transform flex items-center justify-center space-x-2"
                      >
                        <span>Explore All Bangles</span>
                        <Icon name="ChevronRight" className="w-4 h-4 text-gold-300" />
                      </button>

                      <button
                        onClick={openGeneralWhatsApp}
                        className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#1ebe5b] transition flex items-center justify-center space-x-2"
                      >
                        <Icon name="WhatsApp" className="w-5 h-5" />
                        <span>Chat & Order on WhatsApp</span>
                      </button>
                    </div>

                    {/* Free shipping & Guarantee callout */}
                    <div className="flex items-center justify-center lg:justify-start space-x-6 text-xs text-gray-500 pt-1 font-medium">
                      <span className="flex items-center space-x-1">
                        <Icon name="Truck" className="w-4 h-4 text-maroon-700" />
                        <span>Free Shipping Over ₹499</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="ShieldCheck" className="w-4 h-4 text-gold-600" />
                        <span>COD & Razorpay Secure</span>
                      </span>
                    </div>
                  </div>

                  {/* Hero Right Visual Showcase */}
                  <div className="lg:col-span-5 relative">
                    <div className="relative mx-auto max-w-md">
                      
                      {/* Decorative Gold Circular Frame */}
                      <div className="absolute inset-0 rounded-full border-4 border-dashed border-gold-400/40 animate-spin" style={{ animationDuration: '30s' }}></div>
                      
                      {/* Featured Dual Card Display */}
                      <div className="relative z-10 grid grid-cols-2 gap-4 p-4">
                        
                        {/* Card 1: User uploaded Ruby Kundan Black Velvet Set */}
                        <div 
                          onClick={() => {
                            const p = products.find(x => x.id === 'AHB-101');
                            if (p) navigateTo('product-details', p);
                          }}
                          className="cursor-pointer group bg-white rounded-2xl p-3 shadow-xl border border-rose-100 card-hover"
                        >
                          <div className="relative aspect-square rounded-xl overflow-hidden bg-rose-50 mb-2.5">
                            <img 
                              src="/assets/ruby_black_set.jpg" 
                              alt="Ruby Kundan Velvet Set"
                              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1611591475879-da0066ec79b0?auto=format&fit=crop&w=800&q=80"; }}
                            />
                            <span className="absolute top-2 left-2 bg-maroon-800 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow">
                              Single Set ₹399
                            </span>
                          </div>
                          <h4 className="text-xs font-bold text-gray-900 truncate">Ruby Kundan Velvet</h4>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-sm font-extrabold text-maroon-800">₹399</span>
                            <span className="text-[10px] text-gray-400 line-through">₹799</span>
                          </div>
                        </div>

                        {/* Card 2: User uploaded Royal Blue Bridal Set */}
                        <div 
                          onClick={() => {
                            const p = products.find(x => x.id === 'AHB-102');
                            if (p) navigateTo('product-details', p);
                          }}
                          className="cursor-pointer group bg-white rounded-2xl p-3 shadow-xl border border-rose-100 card-hover mt-6"
                        >
                          <div className="relative aspect-square rounded-xl overflow-hidden bg-rose-50 mb-2.5">
                            <img 
                              src="/assets/royal_blue_bridal_set.jpg" 
                              alt="Royal Blue Bridal Chooda Set"
                              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"; }}
                            />
                            <span className="absolute top-2 left-2 bg-gold-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow">
                              Bridal ₹850
                            </span>
                          </div>
                          <h4 className="text-xs font-bold text-gray-900 truncate">Royal Blue Bridal Set</h4>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-sm font-extrabold text-maroon-800">₹850</span>
                            <span className="text-[10px] text-gray-400 line-through">₹1,699</span>
                          </div>
                        </div>
                      </div>

                      {/* Floating Trust Pill */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur px-5 py-2.5 rounded-full shadow-xl border border-gold-400/50 flex items-center space-x-2 text-xs font-bold text-maroon-800 whitespace-nowrap">
                        <Icon name="Sparkles" className="w-4 h-4 text-gold-500 animate-spin" />
                        <span>Direct Artisan Craft • Sindhu Arun</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CATEGORIES SCROLLER / GRID */}
            <section className="py-12 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-rosegold-600 uppercase font-sans">
                      Our Exclusive Speciality
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-black text-gray-900 mt-1">
                      Kundan & Thread Bangles
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">
                      Curated master designs & personalized creations by Sindhu Arun
                    </p>
                  </div>
                  <button
                    onClick={() => navigateTo('categories')}
                    className="text-xs font-bold text-maroon-700 hover:text-gold-600 flex items-center space-x-1 mt-2 sm:mt-0"
                  >
                    <span>View Both Collections</span>
                    <Icon name="ChevronRight" className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categories.map((cat) => (
                    <div
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        navigateTo('shop');
                      }}
                      className="cursor-pointer group relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-50 via-white to-pink-50 p-6 sm:p-8 border border-rose-200 hover:shadow-xl hover:border-gold-400 transition-all card-hover flex flex-col justify-between"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <span className="inline-block bg-maroon-800 text-gold-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                            {cat.id === 'kundan' ? 'Royal Jadau & Velvet' : 'Handcrafted Silk Thread'}
                          </span>
                          <h3 className="text-2xl font-serif font-black text-gray-900 group-hover:text-maroon-800 transition">
                            {cat.name}
                          </h3>
                          <p className="text-xs text-gray-600 max-w-sm leading-relaxed">
                            {cat.description}
                          </p>
                          <div className="pt-3 flex items-center space-x-2 text-xs font-bold text-maroon-800">
                            <span className="text-gold-600">Explore Collection</span>
                            <Icon name="ChevronRight" className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                          </div>
                        </div>

                        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-gold-400/60 shadow-lg shrink-0 group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={cat.image || (cat.id === 'kundan' ? '/assets/ruby_black_set.jpg' : '/assets/silk_thumb.jpg')}
                            alt={cat.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* DEAL OF THE DAY & FESTIVE OFFER BANNER */}
            <section className="py-8 bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-950 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center md:text-left">
                    <span className="inline-block bg-gold-500 text-maroon-950 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                      Limited Time Festive Offer
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">
                      Get 10% Extra Discount On Your Order!
                    </h3>
                    <p className="text-sm text-rose-200">
                      Use coupon code <strong className="text-gold-300 underline tracking-wider">AHB10</strong> during checkout or on WhatsApp order.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <div className="bg-white/10 backdrop-blur px-5 py-3 rounded-2xl border border-white/10 text-center">
                      <span className="block text-xs uppercase tracking-widest text-gold-300">Code</span>
                      <span className="text-xl font-mono font-black text-white tracking-widest">AHB10</span>
                    </div>
                    <button
                      onClick={() => {
                        applyCouponCode('AHB10');
                        navigateTo('shop');
                      }}
                      className="px-6 py-3.5 rounded-2xl bg-gold-500 hover:bg-gold-400 text-maroon-950 font-bold text-xs uppercase tracking-wider shadow-lg transition"
                    >
                      Shop With Discount
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* TRENDING BANGLES (Featuring User's uploaded sets prominently) */}
            <section className="py-14 bg-[#fffafb]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingUp" className="w-5 h-5 text-rose-600" />
                      <span className="text-xs font-bold tracking-widest text-rosegold-600 uppercase font-sans">
                        Customer Favorites
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-black text-gray-900 mt-1">
                      Trending Bangle Collections
                    </h2>
                  </div>
                  <button
                    onClick={() => navigateTo('shop')}
                    className="text-xs font-bold text-maroon-700 hover:text-gold-600 flex items-center space-x-1"
                  >
                    <span>See All</span>
                    <Icon name="ChevronRight" className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {products.slice(0, 8).map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isAdmin={user && user.role === 'admin'}
                      onDelete={() => handleDeleteProductGlobal(product.id, product.name)}
                      isInWishlist={wishlist.includes(product.id)}
                      onToggleWishlist={() => toggleWishlist(product.id)}
                      onAddToCart={(size, color) => addToCart(product, size, color)}
                      onWhatsAppOrder={(size, color) => openWhatsAppOrder(product, size, color)}
                      onClick={() => navigateTo('product-details', product)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* WHY CHOOSE AHBANGLES SECTION */}
            <section className="py-14 bg-white border-y border-rose-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-xs font-bold tracking-widest text-rosegold-600 uppercase font-sans">
                    The AHBangles Promise
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-black text-gray-900 mt-1">
                    Why Women Across India Choose AHBangles
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                    Every piece is curated with motherly care and royal heritage by Sindhu Arun in Doddabommasandra, Bengaluru.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: 'Sparkles',
                      title: 'Authentic Craftsmanship',
                      desc: 'From royal Kundan & velvet to authentic Firozabad crystal glass and 24K electroplated gold.'
                    },
                    {
                      icon: 'RotateCcw',
                      title: '7-Day Easy Returns',
                      desc: 'Size issue or damaged in transit? Instant replacement or hassle-free refund guaranteed.'
                    },
                    {
                      icon: 'Truck',
                      title: 'Express All-India Delivery',
                      desc: 'Speedy dispatch via Blue Dart & Delhivery with real-time SMS & WhatsApp tracking updates.'
                    },
                    {
                      icon: 'WhatsApp',
                      title: 'Personal WhatsApp Support',
                      desc: 'Direct consultation with Sindhu Arun for bridal matching, bangle sizes, and custom sets.'
                    }
                  ].map((feature, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-rose-50/40 border border-rose-100 hover:bg-rose-50 transition">
                      <div className="w-12 h-12 rounded-xl bg-maroon-800 text-gold-400 flex items-center justify-center mb-4 shadow">
                        <Icon name={feature.icon} className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-bold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CUSTOMER REVIEWS & TESTIMONIALS */}
            <section className="py-14 bg-gradient-to-b from-white to-[#fff5f7]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <div className="flex items-center justify-center space-x-1 text-gold-500 mb-2">
                    {[1, 2, 3, 4, 5].map(i => <Icon key={i} name="Star" className="w-5 h-5 fill-current" />)}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-black text-gray-900">
                    Loved By Thousands of Happy Brides & Women
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    Real reviews from verified buyers across Bengaluru, Karnataka, and India.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {reviews.map((rev) => (
                    <div key={rev.id} className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-1 text-gold-500 mb-3">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Icon key={i} name="Star" className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <p className="text-xs text-gray-700 italic leading-relaxed mb-4">
                          "{rev.comment}"
                        </p>
                      </div>
                      <div className="pt-3 border-t border-rose-50 flex items-center justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-gray-900">{rev.author}</h4>
                          <span className="text-[10px] text-gray-400">{rev.city}</span>
                        </div>
                        <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full flex items-center space-x-1">
                          <Icon name="CheckCircle2" className="w-3 h-3 text-green-600" />
                          <span>Verified</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ========================================================= */}
        {/* PAGE 2: SHOP ALL (CATALOG, FILTERS, SEARCH)               */}
        {/* ========================================================= */}
        {currentPage === 'shop' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb & Header */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                <button onClick={() => navigateTo('home')} className="hover:text-maroon-700">Home</button>
                <span>/</span>
                <span className="font-bold text-gray-800">Shop All Bangles</span>
                {activeCategory !== 'all' && (
                  <>
                    <span>/</span>
                    <span className="text-maroon-800 font-bold capitalize">{activeCategory}</span>
                  </>
                )}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-serif font-black text-gray-900">
                    Handcrafted Bangles Collection
                  </h1>
                  <p className="text-xs text-gray-500 mt-1">
                    Showing {filteredProducts.length} unique bangle designs in Indian rupees (₹)
                  </p>
                </div>

                {/* Sort By Dropdown */}
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">Sort By:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white border border-rose-200 text-xs rounded-xl px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                  >
                    <option value="featured">Featured Collection</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Customer Rating</option>
                    <option value="newest">New Arrivals</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Filter Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm space-y-6">
                  
                  {/* Category Filter */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-maroon-800 mb-3 flex items-center justify-between">
                      <span>Bangle Category</span>
                      {activeCategory !== 'all' && (
                        <button 
                          onClick={() => setActiveCategory('all')}
                          className="text-[10px] text-rose-500 lowercase font-medium hover:underline"
                        >
                          reset
                        </button>
                      )}
                    </h4>
                    <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                      <button
                        onClick={() => setActiveCategory('all')}
                        className={`w-full text-left text-xs py-1.5 px-2.5 rounded-lg font-medium transition ${
                          activeCategory === 'all'
                            ? 'bg-maroon-800 text-white font-bold'
                            : 'text-gray-600 hover:bg-rose-50'
                        }`}
                      >
                        All Categories ({products.length})
                      </button>
                      {categories.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setActiveCategory(c.id)}
                          className={`w-full text-left text-xs py-1.5 px-2.5 rounded-lg font-medium transition flex items-center justify-between ${
                            activeCategory === c.id
                              ? 'bg-maroon-800 text-white font-bold'
                              : 'text-gray-600 hover:bg-rose-50'
                          }`}
                        >
                          <span className="truncate">{c.name}</span>
                          <span className="text-[10px] opacity-70">
                            {products.filter(p => p.categoryId === c.id || (p.category && p.category.toLowerCase().includes(c.id))).length}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div className="border-t border-rose-100 pt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-maroon-800 mb-3">
                      Price Range
                    </h4>
                    <div className="space-y-2">
                      {[
                        { label: 'All Prices', val: 'all' },
                        { label: 'Under ₹299 (Budget / Daily)', val: 'under-300' },
                        { label: '₹300 – ₹599 (Velvet & Designer)', val: '300-599' },
                        { label: '₹600 – ₹999 (Kundan & Bridal)', val: '600-999' },
                        { label: 'Above ₹1,000 (Grand Sets)', val: 'above-1000' }
                      ].map(opt => (
                        <label key={opt.val} className="flex items-center space-x-2 text-xs text-gray-700 cursor-pointer">
                          <input
                            type="radio"
                            name="priceFilter"
                            checked={priceFilter === opt.val}
                            onChange={() => setPriceFilter(opt.val)}
                            className="text-maroon-700 focus:ring-maroon-700"
                          />
                          <span>{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Size Filter */}
                  <div className="border-t border-rose-100 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-maroon-800">
                        Bangle Size
                      </h4>
                      <button
                        onClick={() => setSizeGuideOpen(true)}
                        className="text-[10px] font-bold text-gold-600 hover:underline"
                      >
                        Size Guide
                      </button>
                    </div>
                    <div className="grid grid-cols-5 gap-1.5">
                      {['all', '2.2', '2.4', '2.6', '2.8', '2.10'].map(sz => (
                        <button
                          key={sz}
                          onClick={() => setSizeFilter(sz)}
                          className={`text-xs py-1.5 rounded-lg border font-bold transition text-center ${
                            sizeFilter === sz
                              ? 'bg-maroon-800 text-white border-maroon-800'
                              : 'bg-white text-gray-700 border-rose-200 hover:border-maroon-700'
                          }`}
                        >
                          {sz === 'all' ? 'All' : sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Help Banner */}
                  <div className="bg-rose-50 rounded-xl p-3 border border-rose-200/60 text-center">
                    <p className="text-[11px] font-bold text-maroon-800">Need help finding your size?</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Sindhu Arun will assist you on WhatsApp</p>
                    <button
                      onClick={openGeneralWhatsApp}
                      className="mt-2 w-full py-1.5 rounded-lg bg-[#25D366] text-white text-[11px] font-bold flex items-center justify-center space-x-1"
                    >
                      <Icon name="WhatsApp" className="w-3.5 h-3.5" />
                      <span>Ask Sindhu</span>
                    </button>
                  </div>

                </div>
              </div>

              {/* Product Grid */}
              <div className="lg:col-span-3">
                {filteredProducts.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center border border-rose-100">
                    <div className="w-16 h-16 rounded-full bg-rose-50 text-maroon-700 mx-auto flex items-center justify-center mb-3">
                      <Icon name="Search" className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">No bangles matched your filters</h3>
                    <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
                      Try clearing search or filters to explore the rest of AHBangles royal collection.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setActiveCategory('all');
                        setPriceFilter('all');
                        setSizeFilter('all');
                      }}
                      className="mt-4 px-6 py-2.5 bg-maroon-800 text-white text-xs font-bold rounded-full shadow hover:bg-maroon-700"
                    >
                      Clear All Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        isAdmin={user && user.role === 'admin'}
                        onDelete={() => handleDeleteProductGlobal(product.id, product.name)}
                        isInWishlist={wishlist.includes(product.id)}
                        onToggleWishlist={() => toggleWishlist(product.id)}
                        onAddToCart={(size, color) => addToCart(product, size, color)}
                        onWhatsAppOrder={(size, color) => openWhatsAppOrder(product, size, color)}
                        onClick={() => navigateTo('product-details', product)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PAGE 3: PRODUCT DETAILS VIEW                              */}
        {/* ========================================================= */}
        {currentPage === 'product-details' && selectedProduct && (
          <ProductDetailsView
            product={selectedProduct}
            onAddToCart={addToCart}
            onBuyNow={(prod, size, color, qty) => {
              addToCart(prod, size, color, qty);
              navigateTo('checkout');
            }}
            isInWishlist={wishlist.includes(selectedProduct.id)}
            onToggleWishlist={() => toggleWishlist(selectedProduct.id)}
            onWhatsAppOrder={(size, color, customNote) => openWhatsAppOrder(selectedProduct, size, color, customNote)}
            onOpenSizeGuide={() => setSizeGuideOpen(true)}
            relatedProducts={products.filter(p => p.id !== selectedProduct.id && p.categoryId === selectedProduct.categoryId).slice(0, 4)}
            onSelectRelated={(p) => navigateTo('product-details', p)}
            onBack={() => navigateTo('shop')}
          />
        )}

        {/* ========================================================= */}
        {/* PAGE 4: CATEGORIES PAGE                                   */}
        {/* ========================================================= */}
        {currentPage === 'categories' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold tracking-widest text-rosegold-600 uppercase font-sans">
                Curated Royal Jewellery
              </span>
              <h1 className="text-3xl sm:text-4xl font-serif font-black text-gray-900 mt-1">
                Kundan & Thread Bangle Collections
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                AHBangles specializes exclusively in handcrafted Kundan Bangles and customized Silk Thread Bangles designed by Sindhu Arun in Bengaluru.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {categories.map((cat, idx) => (
                <div
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    navigateTo('shop');
                  }}
                  className="group cursor-pointer bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-md hover:shadow-2xl transition-all card-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-video sm:aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-rose-100 shadow-inner">
                      <img
                        src={cat.image || (cat.id === 'kundan' ? '/assets/ruby_black_set.jpg' : '/assets/silk_thumb.jpg')}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-maroon-800 text-gold-300 text-xs font-bold px-3 py-1 rounded-full shadow">
                        Collection 0{idx + 1}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-maroon-800 transition">
                        {cat.name}
                      </h3>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-50 text-maroon-800 border border-rose-200">
                        {products.filter(p => p.categoryId === cat.id || (p.category && p.category.toLowerCase().includes(cat.id))).length} Designs
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-rose-50 flex items-center justify-between text-xs font-bold text-maroon-700 group-hover:text-gold-600">
                    <span>Shop All {cat.name}</span>
                    <Icon name="ChevronRight" className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PAGE 5: WISHLIST                                          */}
        {/* ========================================================= */}
        {currentPage === 'wishlist' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-serif font-black text-gray-900 mb-2">My Saved Bangles ❤️</h1>
            <p className="text-xs text-gray-500 mb-8">Items in your wishlist are saved on this browser.</p>

            {wishlist.length === 0 ? (
              <div className="bg-white rounded-3xl p-16 text-center border border-rose-100 max-w-md mx-auto">
                <div className="w-20 h-20 rounded-full bg-rose-50 text-rose-500 mx-auto flex items-center justify-center mb-4">
                  <Icon name="Heart" className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Your wishlist is empty</h3>
                <p className="text-xs text-gray-500 mt-1 mb-6">
                  Save your favorite bangles to view or order them anytime!
                </p>
                <button
                  onClick={() => navigateTo('shop')}
                  className="px-8 py-3 bg-gradient-royal text-white text-xs font-bold rounded-full shadow-lg hover:shadow-xl"
                >
                  Explore Bangles
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.filter(p => wishlist.includes(p.id)).map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isAdmin={user && user.role === 'admin'}
                    onDelete={() => handleDeleteProductGlobal(product.id, product.name)}
                    isInWishlist={true}
                    onToggleWishlist={() => toggleWishlist(product.id)}
                    onAddToCart={(size, color) => addToCart(product, size, color)}
                    onWhatsAppOrder={(size, color) => openWhatsAppOrder(product, size, color)}
                    onClick={() => navigateTo('product-details', product)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* PAGE 6: SHOPPING CART                                     */}
        {/* ========================================================= */}
        {currentPage === 'cart' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-serif font-black text-gray-900 mb-6">
              Shopping Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
            </h1>

            {cart.length === 0 ? (
              <div className="bg-white rounded-3xl p-16 text-center border border-rose-100 max-w-md mx-auto shadow-sm">
                <div className="w-20 h-20 rounded-full bg-rose-50 text-maroon-700 mx-auto flex items-center justify-center mb-4">
                  <Icon name="ShoppingBag" className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Your shopping bag is empty</h3>
                <p className="text-xs text-gray-500 mt-1 mb-6">
                  Add handcrafted bangles to your bag to proceed with secure checkout or WhatsApp order.
                </p>
                <button
                  onClick={() => navigateTo('shop')}
                  className="px-8 py-3.5 bg-gradient-royal text-white text-xs font-bold rounded-full shadow-lg"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Cart Items List */}
                <div className="lg:col-span-8 space-y-4">
                  
                  {/* Free shipping banner */}
                  <div className="bg-rose-50 border border-rose-200/80 p-4 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-maroon-800">
                      <Icon name="Truck" className="w-5 h-5 text-gold-600" />
                      {cartSubtotal >= 499 ? (
                        <span>🎉 You unlocked <strong>FREE Delivery</strong> across India!</span>
                      ) : (
                        <span>Add ₹{499 - cartSubtotal} more to qualify for <strong>FREE Delivery!</strong></span>
                      )}
                    </div>
                    <span className="text-[10px] uppercase font-bold text-gray-500">Fast Dispatch</span>
                  </div>

                  <div className="bg-white rounded-3xl border border-rose-100 shadow-sm divide-y divide-rose-50 overflow-hidden">
                    {cart.map((item, idx) => (
                      <div key={`${item.id}-${item.size}-${item.color}`} className="p-4 sm:p-6 flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl border border-rose-100"
                          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1611591475879-da0066ec79b0?auto=format&fit=crop&w=400&q=80"; }}
                        />

                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-gray-900 truncate">{item.name}</h4>
                          <p className="text-xs text-gray-500 mt-0.5">
                            Size: <strong className="text-gray-800">{item.size}</strong> • Color: <strong className="text-gray-800">{item.color}</strong>
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-sm font-extrabold text-maroon-800">₹{item.price}</span>
                            {item.originalPrice && (
                              <span className="text-xs text-gray-400 line-through">₹{item.originalPrice}</span>
                            )}
                          </div>
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center space-x-2 bg-rose-50/70 border border-rose-200 rounded-lg p-1">
                          <button
                            onClick={() => updateCartQty(idx, -1)}
                            className="p-1 text-gray-600 hover:text-maroon-800"
                          >
                            <Icon name="Minus" className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-bold text-gray-800 w-5 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateCartQty(idx, 1)}
                            className="p-1 text-gray-600 hover:text-maroon-800"
                          >
                            <Icon name="Plus" className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Item Total & Remove */}
                        <div className="text-right">
                          <span className="block text-sm font-extrabold text-gray-900">
                            ₹{item.price * item.quantity}
                          </span>
                          <button
                            onClick={() => removeFromCart(idx)}
                            className="text-xs text-rose-500 hover:text-rose-700 mt-1 inline-flex items-center space-x-1"
                          >
                            <Icon name="Trash2" className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <button
                      onClick={() => navigateTo('shop')}
                      className="text-xs font-bold text-maroon-700 hover:underline flex items-center space-x-1"
                    >
                      <span>← Continue Shopping</span>
                    </button>
                    <button
                      onClick={() => setCart([])}
                      className="text-xs text-gray-400 hover:text-rose-600 underline"
                    >
                      Clear Bag
                    </button>
                  </div>
                </div>

                {/* Order Summary & Coupon */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-sm space-y-5">
                    <h3 className="text-base font-bold text-gray-900 border-b border-rose-50 pb-3">
                      Order Summary
                    </h3>

                    {/* Coupon Input */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Have a Coupon Code?
                      </label>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          placeholder="Try AHB10 or FIRST100"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                          className="flex-1 uppercase font-mono text-xs border border-rose-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                        />
                        <button
                          onClick={() => applyCouponCode()}
                          className="px-4 py-2.5 bg-maroon-800 text-white text-xs font-bold rounded-xl hover:bg-maroon-700 transition"
                        >
                          Apply
                        </button>
                      </div>

                      {/* Quick Coupon Suggestions */}
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {['AHB10', 'FIRST100', 'BRIDAL20'].map(code => (
                          <button
                            key={code}
                            onClick={() => {
                              setCouponCode(code);
                              applyCouponCode(code);
                            }}
                            className="text-[10px] font-mono font-bold bg-rose-50 text-maroon-800 px-2 py-0.5 rounded border border-rose-200 hover:bg-rose-100"
                          >
                            🏷️ {code}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-2.5 text-xs text-gray-600 pt-3 border-t border-rose-50">
                      <div className="flex justify-between">
                        <span>Cart Subtotal</span>
                        <span className="font-semibold text-gray-900">₹{cartSubtotal}</span>
                      </div>

                      {discountAmount > 0 && (
                        <div className="flex justify-between text-green-700 font-semibold">
                          <span>Coupon Discount ({appliedCoupon ? appliedCoupon.code : 'Applied'})</span>
                          <span>- ₹{discountAmount}</span>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <span>Estimated Delivery</span>
                        <span className="font-semibold text-gray-900">
                          {deliveryFee === 0 ? <strong className="text-green-700">FREE</strong> : `₹${deliveryFee}`}
                        </span>
                      </div>

                      <div className="border-t border-rose-100 pt-3 flex justify-between text-sm font-black text-gray-900">
                        <span>Total Payable Amount</span>
                        <span className="text-lg text-maroon-800">₹{grandTotal}</span>
                      </div>
                    </div>

                    {/* Proceed Button */}
                    <button
                      onClick={() => navigateTo('checkout')}
                      className="w-full py-4 rounded-full bg-gradient-royal text-white font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-[1.02] transition flex items-center justify-center space-x-2"
                    >
                      <Icon name="Lock" className="w-4 h-4 text-gold-300" />
                      <span>Proceed to Checkout</span>
                    </button>

                    <p className="text-[10px] text-center text-gray-400">
                      🔒 256-bit SSL Encrypted • Razorpay & COD Supported
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* PAGE 7: CHECKOUT                                          */}
        {/* ========================================================= */}
        {currentPage === 'checkout' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-serif font-black text-gray-900 mb-6">
              Secure Checkout & Delivery
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Checkout Form */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Step 1: Customer Details */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-rose-100 shadow-sm space-y-4">
                  <h3 className="text-base font-bold text-gray-900 flex items-center space-x-2 border-b border-rose-50 pb-3">
                    <span className="w-6 h-6 rounded-full bg-maroon-800 text-white text-xs flex items-center justify-center font-bold">1</span>
                    <span>Customer & Delivery Contact</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Sindhu Arun"
                        value={checkoutData.name}
                        onChange={(e) => setCheckoutData({ ...checkoutData, name: e.target.value })}
                        className="w-full text-xs border border-rose-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">10-Digit Mobile Number *</label>
                      <input
                        type="tel"
                        placeholder="e.g. 8618836558"
                        value={checkoutData.mobile}
                        onChange={(e) => setCheckoutData({ ...checkoutData, mobile: e.target.value })}
                        className="w-full text-xs border border-rose-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                        required
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-gray-700 mb-1">Email Address (Optional for invoice)</label>
                      <input
                        type="email"
                        placeholder="e.g. customer@example.com"
                        value={checkoutData.email}
                        onChange={(e) => setCheckoutData({ ...checkoutData, email: e.target.value })}
                        className="w-full text-xs border border-rose-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2: Shipping Address */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-rose-100 shadow-sm space-y-4">
                  <h3 className="text-base font-bold text-gray-900 flex items-center space-x-2 border-b border-rose-50 pb-3">
                    <span className="w-6 h-6 rounded-full bg-maroon-800 text-white text-xs flex items-center justify-center font-bold">2</span>
                    <span>Delivery Address</span>
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">House / Flat No, Street, Colony *</label>
                      <textarea
                        rows="2"
                        placeholder="e.g. Doddabommasandra, Near BEL, Vidyaranyapura Road"
                        value={checkoutData.address}
                        onChange={(e) => setCheckoutData({ ...checkoutData, address: e.target.value })}
                        className="w-full text-xs border border-rose-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">City *</label>
                        <input
                          type="text"
                          value={checkoutData.city}
                          onChange={(e) => setCheckoutData({ ...checkoutData, city: e.target.value })}
                          className="w-full text-xs border border-rose-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">State *</label>
                        <select
                          value={checkoutData.state}
                          onChange={(e) => setCheckoutData({ ...checkoutData, state: e.target.value })}
                          className="w-full text-xs border border-rose-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                        >
                          {['Karnataka', 'Maharashtra', 'Tamil Nadu', 'Telangana', 'Andhra Pradesh', 'Kerala', 'Delhi', 'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'West Bengal'].map(st => (
                            <option key={st} value={st}>{st}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">PIN Code *</label>
                        <input
                          type="text"
                          placeholder="e.g. 560097"
                          value={checkoutData.pincode}
                          onChange={(e) => setCheckoutData({ ...checkoutData, pincode: e.target.value })}
                          className="w-full text-xs border border-rose-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: Payment Method Selection */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-rose-100 shadow-sm space-y-4">
                  <h3 className="text-base font-bold text-gray-900 flex items-center space-x-2 border-b border-rose-50 pb-3">
                    <span className="w-6 h-6 rounded-full bg-maroon-800 text-white text-xs flex items-center justify-center font-bold">3</span>
                    <span>Select Payment Option</span>
                  </h3>

                  <div className="space-y-3">
                    
                    {/* Razorpay Online */}
                    <label className={`block p-4 rounded-2xl border-2 cursor-pointer transition ${
                      checkoutData.paymentMethod === 'razorpay'
                        ? 'border-maroon-800 bg-rose-50/50'
                        : 'border-rose-100 hover:border-rose-200'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="paymentMethod"
                            checked={checkoutData.paymentMethod === 'razorpay'}
                            onChange={() => setCheckoutData({ ...checkoutData, paymentMethod: 'razorpay' })}
                            className="text-maroon-700 focus:ring-maroon-700"
                          />
                          <div>
                            <span className="text-xs font-bold text-gray-900 block">
                              Razorpay Indian Payment Gateway (Recommended)
                            </span>
                            <span className="text-[10px] text-gray-500 block mt-0.5">
                              UPI (GPay, PhonePe, Paytm), Debit/Credit Cards, Net Banking
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1.5 text-xs font-bold text-maroon-800">
                          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-[10px]">UPI / Cards</span>
                        </div>
                      </div>
                    </label>

                    {/* Cash on Delivery */}
                    <label className={`block p-4 rounded-2xl border-2 cursor-pointer transition ${
                      checkoutData.paymentMethod === 'cod'
                        ? 'border-maroon-800 bg-rose-50/50'
                        : 'border-rose-100 hover:border-rose-200'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="paymentMethod"
                            checked={checkoutData.paymentMethod === 'cod'}
                            onChange={() => setCheckoutData({ ...checkoutData, paymentMethod: 'cod' })}
                            className="text-maroon-700 focus:ring-maroon-700"
                          />
                          <div>
                            <span className="text-xs font-bold text-gray-900 block">
                              Cash on Delivery (COD)
                            </span>
                            <span className="text-[10px] text-gray-500 block mt-0.5">
                              Pay in cash or UPI when your bangles parcel arrives at your doorstep
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-green-800 bg-green-100 px-2 py-0.5 rounded">
                          Available
                        </span>
                      </div>
                    </label>

                  </div>
                </div>

              </div>

              {/* Order Review Sticky Sidebar */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-sm sticky top-28 space-y-4">
                  <h3 className="text-sm font-bold text-gray-900 border-b border-rose-50 pb-3">
                    Order Items ({cart.length})
                  </h3>

                  <div className="max-h-60 overflow-y-auto space-y-3 pr-1 divide-y divide-rose-50">
                    {cart.map(item => (
                      <div key={`${item.id}-${item.size}`} className="pt-2 flex items-center space-x-3">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-12 h-12 rounded-lg object-cover border border-rose-100" 
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="text-xs font-bold text-gray-800 truncate">{item.name}</h5>
                          <span className="text-[10px] text-gray-500">Size: {item.size} • Qty: {item.quantity}</span>
                        </div>
                        <span className="text-xs font-bold text-gray-900">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-rose-100 space-y-2 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold text-gray-900">₹{cartSubtotal}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-green-700 font-semibold">
                        <span>Discount ({appliedCoupon ? appliedCoupon.code : 'Applied'})</span>
                        <span>- ₹{discountAmount}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span className="font-semibold text-gray-900">
                        {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-base font-black text-maroon-800 pt-2 border-t border-rose-100">
                      <span>Total to Pay</span>
                      <span>₹{grandTotal}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleInitiateOrder}
                    disabled={isProcessingPayment}
                    className="w-full py-4 rounded-full bg-gradient-royal text-white font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-[1.01] transition flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <Icon name="Lock" className="w-4 h-4 text-gold-300" />
                    <span>
                      {isProcessingPayment 
                        ? 'Processing...' 
                        : checkoutData.paymentMethod === 'cod' 
                          ? `Confirm COD Order (₹${grandTotal})` 
                          : `Pay ₹${grandTotal} with Razorpay`}
                    </span>
                  </button>

                  <div className="bg-rose-50/60 p-3 rounded-xl border border-rose-100 text-[10px] text-gray-500 space-y-1">
                    <p>✓ 100% Genuine Handcrafted Jewellery</p>
                    <p>✓ 7-Day Replacement Guarantee</p>
                    <p>✓ WhatsApp Updates to {checkoutData.mobile || 'your mobile'}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PAGE 8: PAYMENT SUCCESS & ORDER CONFIRMATION              */}
        {/* ========================================================= */}
        {currentPage === 'payment-success' && lastOrder && (
          <div className="max-w-3xl mx-auto px-4 py-12">
            <div className="bg-white rounded-3xl border border-rose-100 shadow-xl p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center mb-6 shadow-md border-4 border-white">
                <Icon name="CheckCircle2" className="w-10 h-10" />
              </div>

              <span className="text-xs uppercase font-bold tracking-widest text-rosegold-600">
                Order Confirmed
              </span>
              <h1 className="text-3xl font-serif font-black text-gray-900 mt-1 mb-2">
                Thank You, {lastOrder.customer.name}! ✨
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto">
                Your royal bangles order has been successfully placed with AHBangles. Sindhu Arun has received your order in Bengaluru.
              </p>

              {/* Order ID & Details Pill */}
              <div className="my-6 p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80 inline-block text-left text-xs space-y-1">
                <p><strong className="text-gray-900">Order ID:</strong> <span className="font-mono text-maroon-800 font-bold">{lastOrder.orderId}</span></p>
                <p><strong className="text-gray-900">Payment Status:</strong> <span className="text-green-700 font-bold">{lastOrder.paymentStatus}</span> ({lastOrder.paymentMethod})</p>
                <p><strong className="text-gray-900">Total Paid:</strong> <span className="font-bold">₹{lastOrder.total}</span></p>
                <p><strong className="text-gray-900">Delivery Address:</strong> {lastOrder.customer.address}, {lastOrder.customer.city} - {lastOrder.customer.pincode}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setTrackQuery(lastOrder.orderId);
                    handleTrackSubmit();
                    navigateTo('track');
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-maroon-800 text-white text-xs font-bold hover:bg-maroon-700 shadow flex items-center justify-center space-x-2"
                >
                  <Icon name="Truck" className="w-4 h-4 text-gold-400" />
                  <span>Track My Order</span>
                </button>

                <button
                  onClick={() => {
                    const text = encodeURIComponent(
                      `Hello Sindhu Arun! 👋\nI just placed order *${lastOrder.orderId}* for ₹${lastOrder.total} on AHBangles. Kindly confirm my shipment!`
                    );
                    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#1ebe5b] shadow flex items-center justify-center space-x-2"
                >
                  <Icon name="WhatsApp" className="w-4 h-4" />
                  <span>Send WhatsApp Confirmation</span>
                </button>

                <button
                  onClick={() => navigateTo('shop')}
                  className="w-full sm:w-auto px-6 py-3 rounded-full border border-rose-200 text-gray-700 text-xs font-bold hover:bg-rose-50"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PAGE 9: MY ORDERS                                         */}
        {/* ========================================================= */}
        {currentPage === 'orders' && (
          <div className="max-w-5xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-serif font-black text-gray-900 mb-2">My Orders</h1>
            <p className="text-xs text-gray-500 mb-6">Track past purchases and download invoices.</p>

            <div className="bg-white rounded-3xl border border-rose-100 shadow-sm p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-rose-50">
                <span className="text-xs font-bold text-gray-600">
                  Search past orders by entering your 10-digit mobile number:
                </span>
                <div className="flex space-x-2 w-full sm:w-auto">
                  <input
                    type="tel"
                    placeholder="Mobile number..."
                    value={trackQuery}
                    onChange={(e) => setTrackQuery(e.target.value)}
                    className="text-xs border border-rose-200 rounded-xl px-3 py-2 focus:outline-none"
                  />
                  <button
                    onClick={handleTrackSubmit}
                    className="px-4 py-2 bg-maroon-800 text-white text-xs font-bold rounded-xl"
                  >
                    Find
                  </button>
                </div>
              </div>

              {/* Tracked or Recent orders */}
              {trackedOrder ? (
                <div className="pt-6">
                  <OrderCard order={trackedOrder} onTrack={() => navigateTo('track')} />
                </div>
              ) : (
                <div className="py-8 text-center text-gray-500 text-xs">
                  Enter your mobile number or Order ID above to see order details, or view our sample order below:
                  <div className="mt-4">
                    <button
                      onClick={() => {
                        setTrackQuery('AHB-ORD-849201');
                        handleTrackSubmit();
                      }}
                      className="px-4 py-2 bg-rose-50 text-maroon-800 font-mono text-xs font-bold rounded-lg border border-rose-200"
                    >
                      View Order #AHB-ORD-849201
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PAGE 10: ORDER TRACKING                                   */}
        {/* ========================================================= */}
        {currentPage === 'track' && (
          <div className="max-w-4xl mx-auto px-4 py-10">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold tracking-widest text-rosegold-600 uppercase font-sans">
                Real-Time Delivery Status
              </span>
              <h1 className="text-3xl font-serif font-black text-gray-900 mt-1">
                Track Your Bangles Order
              </h1>
              <p className="text-xs text-gray-500 mt-1">
                Enter your AHBangles Order ID (e.g. AHB-ORD-849201) or 10-digit mobile number.
              </p>
            </div>

            {/* Tracking Search Input */}
            <form onSubmit={handleTrackSubmit} className="max-w-md mx-auto mb-10 flex space-x-2">
              <input
                type="text"
                placeholder="Enter Order ID or Mobile..."
                value={trackQuery}
                onChange={(e) => setTrackQuery(e.target.value)}
                className="flex-1 text-xs border border-rose-200 rounded-full px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 shadow-sm"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-gradient-royal text-white text-xs font-bold rounded-full shadow hover:shadow-lg transition"
              >
                Track Order
              </button>
            </form>

            {trackError && (
              <div className="bg-rose-50 border border-rose-200 text-rose-700 p-4 rounded-2xl text-xs text-center mb-8 max-w-md mx-auto">
                {trackError}
              </div>
            )}

            {/* Visual Stepper */}
            {trackedOrder && (
              <div className="bg-white rounded-3xl border border-rose-100 shadow-xl p-6 sm:p-10 space-y-8">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-rose-50 gap-2">
                  <div>
                    <span className="text-xs text-gray-400">Order ID</span>
                    <h3 className="text-xl font-mono font-bold text-maroon-800">{trackedOrder.orderId}</h3>
                    <p className="text-xs text-gray-500">Placed on {new Date(trackedOrder.createdAt).toLocaleDateString('en-IN')}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="inline-block bg-rose-100 text-maroon-800 text-xs font-bold px-3 py-1 rounded-full">
                      Status: {trackedOrder.orderStatus}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">Courier: {trackedOrder.courierPartner || 'Delhivery Express'}</p>
                  </div>
                </div>

                {/* 7-Step Progress Stepper */}
                <TrackingStepper currentStatus={trackedOrder.orderStatus} />

                {/* Order Summary & Customer Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-rose-50 text-xs">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Delivery Address</h4>
                    <p className="text-gray-700 font-semibold">{trackedOrder.customer.name}</p>
                    <p className="text-gray-600">{trackedOrder.customer.address}</p>
                    <p className="text-gray-600">{trackedOrder.customer.city}, {trackedOrder.customer.state} - {trackedOrder.customer.pincode}</p>
                    <p className="text-gray-600 mt-1">Phone: {trackedOrder.customer.mobile}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Ordered Bangles</h4>
                    <div className="space-y-2">
                      {trackedOrder.items.map((it, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-rose-50/50 p-2 rounded-lg">
                          <span className="font-medium text-gray-800">{it.name} (Size: {it.size}) × {it.quantity}</span>
                          <span className="font-bold text-maroon-800">₹{it.price * it.quantity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between font-bold text-sm text-gray-900 pt-2">
                      <span>Total Amount:</span>
                      <span className="text-maroon-800">₹{trackedOrder.total} ({trackedOrder.paymentStatus})</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Support Callout */}
                <div className="pt-2 text-center">
                  <button
                    onClick={() => {
                      const text = encodeURIComponent(
                        `Hi Sindhu! Need assistance with tracking my AHBangles order #${trackedOrder.orderId}.`
                      );
                      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
                    }}
                    className="inline-flex items-center space-x-2 text-xs font-bold text-[#25D366] hover:underline"
                  >
                    <Icon name="WhatsApp" className="w-4 h-4" />
                    <span>Have a question about this shipment? Chat with Sindhu</span>
                  </button>
                </div>

              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* PAGE 11: ABOUT US                                         */}
        {/* ========================================================= */}
        {currentPage === 'about' && (
          <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-widest text-rosegold-600 uppercase font-sans">
                Our Heritage & Passion
              </span>
              <h1 className="text-4xl font-serif font-black text-gray-900 mt-1">
                The Story Behind AHBangles
              </h1>
              <p className="text-base text-gray-600 mt-3 font-serif italic">
                "Every Bangle Tells a Beautiful Story."
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-rose-100 shadow-sm space-y-8 text-gray-700 leading-relaxed text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-maroon-800 mb-3">
                    Founded with Love by Sindhu Arun
                  </h3>
                  <p className="mb-3">
                    Welcome to <strong className="text-gray-900">AHBangles</strong>, born in the cultural heart of Bengaluru, Karnataka. What started as a personal passion for authentic Indian jewellery has blossomed into a beloved sanctuary for women searching for bangles that mirror the grace of their heritage.
                  </p>
                  <p>
                    Nestled in Doddabommasandra near BEL, Vidyaranyapura Road, AHBangles curates every single set by hand. Whether it's our signature velvet kundan party sets, grand bridal choodas, or cheerful glass bangles, each piece is chosen for lasting beauty and comfort.
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden bg-rose-50 border border-gold-300 p-2 shadow-lg">
                  <img
                    src="/assets/ruby_black_set.jpg"
                    alt="Handcrafted Bangles by Sindhu Arun"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  <div className="p-3 text-center">
                    <span className="text-xs font-bold text-maroon-800">Sindhu Arun's Signature Velvet Kundan Set</span>
                    <span className="block text-[10px] text-gray-500">Handcrafted in Bengaluru</span>
                  </div>
                </div>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-rose-50">
                <div className="p-4 rounded-2xl bg-rose-50/50">
                  <h4 className="font-bold text-maroon-800 text-base mb-1">Authentic Materials</h4>
                  <p className="text-xs text-gray-600">
                    Lead-free, hypoallergenic brass frames, real Firozabad glass, and lustrous micro-gold electroplating.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/50">
                  <h4 className="font-bold text-maroon-800 text-base mb-1">Fair Artisan Pricing</h4>
                  <p className="text-xs text-gray-600">
                    Starting from ₹99 to ₹850, we eliminate middlemen so luxury jewellery remains accessible to all.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/50">
                  <h4 className="font-bold text-maroon-800 text-base mb-1">Personalized Touch</h4>
                  <p className="text-xs text-gray-600">
                    Direct WhatsApp consultation for custom bridal sizes, color coordination with sarees, and gifting.
                  </p>
                </div>
              </div>

              {/* Owner Quote */}
              <div className="p-6 rounded-2xl bg-gradient-royal text-white text-center">
                <p className="text-base font-serif italic max-w-xl mx-auto">
                  "In Indian culture, the chime of a woman's bangles carries the warmth of home and celebration. At AHBangles, our mission is to ensure every woman feels that joy on her wrist."
                </p>
                <span className="block text-xs uppercase font-bold text-gold-300 tracking-wider mt-3">
                  — Sindhu Arun, Founder & Designer
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PAGE 12: CONTACT US                                       */}
        {/* ========================================================= */}
        {currentPage === 'contact' && (
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-widest text-rosegold-600 uppercase font-sans">
                We'd Love To Hear From You
              </span>
              <h1 className="text-4xl font-serif font-black text-gray-900 mt-1">
                Contact AHBangles & Sindhu Arun
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Have questions regarding bangle sizes, bulk orders, or bridal customization? Reach out directly!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Contact Cards */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Business Info Card */}
                <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-sm space-y-5">
                  <h3 className="text-lg font-serif font-bold text-gray-900 border-b border-rose-50 pb-2">
                    Store & Studio Details
                  </h3>

                  <div className="space-y-4 text-xs">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-rose-50 text-maroon-700 flex items-center justify-center shrink-0">
                        <Icon name="User" className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 block">Proprietor & Designer</span>
                        <span className="text-gray-600">Sindhu Arun</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-green-50 text-green-700 flex items-center justify-center shrink-0">
                        <Icon name="WhatsApp" className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 block">WhatsApp & Phone</span>
                        <a href={`tel:${BUSINESS_PHONE}`} className="text-maroon-800 font-bold hover:underline">
                          {BUSINESS_PHONE}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-rose-50 text-maroon-700 flex items-center justify-center shrink-0">
                        <Icon name="MapPin" className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 block">Official Business Address</span>
                        <p className="text-gray-600 leading-relaxed">
                          Sindhu W/o Arun,<br />
                          Doddabommasandra, Near BEL,<br />
                          Vidyaranyapura Road, Bengaluru,<br />
                          Karnataka, India – 560097
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-rose-50 text-maroon-700 flex items-center justify-center shrink-0">
                        <Icon name="Clock" className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 block">Customer Service Hours</span>
                        <span className="text-gray-600">Monday to Saturday: 9:30 AM – 8:30 PM IST</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={openGeneralWhatsApp}
                    className="w-full py-3.5 rounded-full bg-[#25D366] text-white text-xs font-bold shadow hover:bg-[#1ebe5b] transition flex items-center justify-center space-x-2"
                  >
                    <Icon name="WhatsApp" className="w-4 h-4" />
                    <span>Open WhatsApp Live Chat</span>
                  </button>
                </div>

                {/* Google Maps Embed / Location Preview */}
                <div className="bg-white rounded-3xl border border-rose-100 p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3 text-xs font-bold text-gray-800">
                    <span>Bengaluru Location Map</span>
                    <a 
                      href="https://maps.google.com/?q=Doddabommasandra+Vidyaranyapura+Bengaluru" 
                      target="_blank" 
                      className="text-maroon-700 hover:underline flex items-center space-x-1"
                    >
                      <span>Open in Maps</span>
                      <Icon name="ChevronRight" className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-rose-100 border border-rose-200">
                    <iframe
                      title="AHBangles Location"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://maps.google.com/maps?q=Doddabommasandra,+Bengaluru,+Karnataka,+India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full filter saturate-150"
                    ></iframe>
                  </div>
                </div>

              </div>

              {/* Right Contact Form */}
              <div className="lg:col-span-7">
                <div className="bg-white p-8 rounded-3xl border border-rose-100 shadow-sm space-y-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900">Send an Enquiry Message</h3>
                    <p className="text-xs text-gray-500 mt-1">Sindhu Arun will reply to your mobile or email within a few hours.</p>
                  </div>

                  <form onSubmit={(e) => {
                    e.preventDefault();
                    showToast('Thank you! Your message has been sent to Sindhu Arun ✨');
                    e.target.reset();
                  }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ananya Rao"
                          className="w-full text-xs border border-rose-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Number (WhatsApp) *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9845012345"
                          className="w-full text-xs border border-rose-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Enquiry Subject</label>
                      <select className="w-full text-xs border border-rose-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-maroon-700/20">
                        <option>Bangle Size Assistance</option>
                        <option>Bridal Chooda Custom Matching</option>
                        <option>Bulk Order for Wedding / Gifting</option>
                        <option>Order Delivery Inquiry</option>
                        <option>Other Feedback</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Your Message *</label>
                      <textarea
                        rows="4"
                        required
                        placeholder="Write your questions or saree color matching requirements..."
                        className="w-full text-xs border border-rose-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-maroon-700/20"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-full bg-gradient-royal text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition"
                    >
                      Send Message to Sindhu
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PAGE 13: ADMIN DASHBOARD (OWNER PORTAL)                   */}
        {/* ========================================================= */}
        {currentPage === 'admin' && (
          <AdminDashboard
            user={user}
            onSetUser={setUser}
            stats={stats}
            orders={orders}
            products={products}
            categories={categories}
            onRefresh={fetchData}
            onOpenLogin={() => { 
              setAuthMode('admin'); 
              setAuthForm({ email: 'kpramod0207@gmail.com', password: 'pramuharshu@123' });
              setAuthModalOpen(true); 
            }}
            showToast={showToast}
          />
        )}

        {/* ========================================================= */}
        {/* LEGAL PAGES: PRIVACY, TERMS, RETURNS, SHIPPING             */}
        {/* ========================================================= */}
        {['privacy', 'terms', 'return-refund', 'shipping'].includes(currentPage) && (
          <LegalPolicyPages page={currentPage} onBack={() => navigateTo('home')} />
        )}

      </main>

      {/* --- 3. FLOATING WHATSAPP BUTTON & CHAT TEASER --- */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2 select-none">
        
        {/* Welcoming chat bubble teaser */}
        <div 
          onClick={openGeneralWhatsApp}
          className="cursor-pointer bg-white px-4 py-2 rounded-2xl shadow-xl border border-emerald-200 text-xs font-bold text-gray-800 flex items-center space-x-2 animate-float hover:scale-105 transition"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Order or Chat with Sindhu Arun</span>
        </div>

        {/* Pulsating Emerald Button */}
        <button
          onClick={openGeneralWhatsApp}
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-transform flex items-center justify-center relative group"
          title="Direct WhatsApp Chat with Sindhu Arun"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
          <Icon name="WhatsApp" className="w-8 h-8 relative z-10" />
        </button>
      </div>

      {/* --- 4. BANGLE SIZE GUIDE MODAL --- */}
      {sizeGuideOpen && (
        <BangleSizeGuideModal onClose={() => setSizeGuideOpen(false)} />
      )}

      {/* --- 5. AUTHENTICATION / LOGIN MODAL --- */}
      {authModalOpen && (
        <AuthModal
          mode={authMode}
          setMode={setAuthMode}
          form={authForm}
          setForm={setAuthForm}
          onSubmit={handleAuthSubmit}
          onClose={() => setAuthModalOpen(false)}
        />
      )}

      {/* --- 6. RAZORPAY PAYMENT SIMULATION MODAL --- */}
      {razorpaySimModalOpen && pendingOrderDetails && (
        <RazorpaySimulationModal
          orderDetails={pendingOrderDetails}
          onSuccess={completeRazorpayPayment}
          onClose={() => setRazorpaySimModalOpen(false)}
        />
      )}

      {/* --- 7. LUXURY FOOTER --- */}
      <footer className="bg-gradient-to-b from-maroon-900 to-[#1e0308] text-white pt-14 pb-8 border-t-2 border-gold-500/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-rose-900/60">
            
            {/* Col 1 & 2: Branding & Address */}
            <div className="lg:col-span-2 space-y-4">
              <BrandLogo onClick={() => navigateTo('home')} light={true} />
              
              <p className="text-xs text-rose-200/80 leading-relaxed max-w-sm font-serif">
                AHBangles is Bengaluru's premier house of royal bangles, traditional wedding choodas, and contemporary women's jewellery. Founded by Sindhu Arun to bring timeless elegance to every wrist.
              </p>

              <div className="text-xs text-rose-100 space-y-1.5 pt-1">
                <p><strong className="text-gold-400">Owner:</strong> {OWNER_NAME}</p>
                <p><strong className="text-gold-400">WhatsApp / Call:</strong> {BUSINESS_PHONE}</p>
                <p className="text-[11px] text-rose-200/90 leading-tight">
                  <strong className="text-gold-400">Address:</strong> {BUSINESS_ADDRESS}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#1ebe5b] transition shadow"
                >
                  <Icon name="WhatsApp" className="w-4 h-4" />
                  <span>Direct WhatsApp Order</span>
                </a>
              </div>
            </div>

            {/* Col 3: Quick Shop */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4 font-sans">
                Explore Bangles
              </h4>
              <ul className="space-y-2 text-xs text-rose-100/90 font-medium">
                {categories.slice(0, 6).map(c => (
                  <li key={c.id}>
                    <button
                      onClick={() => { setActiveCategory(c.id); navigateTo('shop'); }}
                      className="hover:text-gold-300 transition"
                    >
                      {c.name}
                    </button>
                  </li>
                ))}
                <li>
                  <button onClick={() => navigateTo('shop')} className="text-gold-400 hover:underline">
                    View All Bangles →
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Customer Help */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4 font-sans">
                Customer Care
              </h4>
              <ul className="space-y-2 text-xs text-rose-100/90 font-medium">
                <li><button onClick={() => navigateTo('orders')} className="hover:text-gold-300">My Orders</button></li>
                <li><button onClick={() => navigateTo('track')} className="hover:text-gold-300">Track Order</button></li>
                <li><button onClick={() => setSizeGuideOpen(true)} className="hover:text-gold-300">Bangle Size Guide</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-gold-300">Contact Us</button></li>
                <li><button onClick={() => navigateTo('about')} className="hover:text-gold-300">About Sindhu Arun</button></li>
                <li>
                  <button 
                    onClick={() => { setAuthMode('admin'); setAuthModalOpen(true); }}
                    className="text-gold-400 font-bold hover:underline"
                  >
                    Owner / Admin Login
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 5: Policies & Payment */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4 font-sans">
                Policies & Trust
              </h4>
              <ul className="space-y-2 text-xs text-rose-100/90 font-medium">
                <li><button onClick={() => navigateTo('shipping')} className="hover:text-gold-300">Shipping Policy</button></li>
                <li><button onClick={() => navigateTo('return-refund')} className="hover:text-gold-300">Return & Refund Policy</button></li>
                <li><button onClick={() => navigateTo('privacy')} className="hover:text-gold-300">Privacy Policy</button></li>
                <li><button onClick={() => navigateTo('terms')} className="hover:text-gold-300">Terms & Conditions</button></li>
              </ul>

              <div className="pt-4">
                <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1.5">
                  Secure Payments Powered By
                </span>
                <div className="flex flex-wrap gap-1 text-[10px] font-bold text-maroon-900">
                  <span className="bg-white px-2 py-0.5 rounded shadow-sm">Razorpay</span>
                  <span className="bg-white px-2 py-0.5 rounded shadow-sm">UPI</span>
                  <span className="bg-white px-2 py-0.5 rounded shadow-sm">GPay</span>
                  <span className="bg-white px-2 py-0.5 rounded shadow-sm">PhonePe</span>
                  <span className="bg-white px-2 py-0.5 rounded shadow-sm">COD</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-rose-300/70 space-y-2 sm:space-y-0">
            <p>© {new Date().getFullYear()} AHBangles. All Rights Reserved. Handcrafted in Bengaluru, Karnataka.</p>
            <p>Designed with ❤️ for Indian Heritage Jewellery</p>
          </div>

        </div>
      </footer>

    </div>
  );
}

// --- SUB-COMPONENT: PRODUCT CARD ---
function ProductCard({ product, isInWishlist, onToggleWishlist, onAddToCart, onWhatsAppOrder, onClick, isAdmin = false, onDelete = null }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : "2.6");

  return (
    <div className="group bg-white rounded-2xl border border-rose-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden card-hover relative">
      
      {/* Top Image & Badges */}
      <div className="relative aspect-square bg-rose-50/70 overflow-hidden cursor-pointer" onClick={onClick}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1611591475879-da0066ec79b0?auto=format&fit=crop&w=600&q=80"; }}
        />

        {/* Owner Quick Delete Button (Visible when logged in as Owner) */}
        {isAdmin && onDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="absolute top-2.5 left-2.5 z-20 bg-red-600 hover:bg-red-700 text-white font-bold text-[10px] px-2.5 py-1 rounded-full shadow-lg flex items-center space-x-1 border border-white transition"
            title="Owner Quick Delete: Remove this bangle from store"
          >
            <Icon name="Trash2" className="w-3 h-3 text-white" />
            <span>Delete</span>
          </button>
        )}

        {/* Tag Pill (e.g. "Single Set ₹399" or "Bridal") */}
        {product.tag && (
          <span className={`absolute ${isAdmin && onDelete ? 'bottom-2.5 left-2.5' : 'top-2.5 left-2.5'} bg-maroon-800 text-gold-300 font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md border border-gold-400/30`}>
            {product.tag}
          </span>
        )}

        {/* Discount Badge */}
        {product.discount > 0 && !product.tag && (
          <span className={`absolute ${isAdmin && onDelete ? 'bottom-2.5 left-2.5' : 'top-2.5 left-2.5'} bg-rose-600 text-white font-bold text-[9px] uppercase px-2 py-0.5 rounded-full shadow`}>
            {product.discount}% OFF
          </span>
        )}

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => { e.stopPropagation(); onToggleWishlist(); }}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur shadow flex items-center justify-center text-gray-500 hover:text-rose-600 transition"
          title="Save to Wishlist"
        >
          <Icon name="Heart" className={`w-4 h-4 ${isInWishlist ? 'text-rose-600 fill-current' : ''}`} />
        </button>

        {/* WhatsApp Quick Order Hover Overlay on desktop */}
        <button
          onClick={(e) => { e.stopPropagation(); onWhatsAppOrder(selectedSize); }}
          className="absolute bottom-2 right-2 bg-[#25D366] text-white p-2 rounded-full shadow-lg hover:scale-110 transition sm:opacity-0 group-hover:opacity-100"
          title="Direct WhatsApp Order"
        >
          <Icon name="WhatsApp" className="w-4 h-4" />
        </button>
      </div>

      {/* Card Info */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between">
        <div className="cursor-pointer" onClick={onClick}>
          <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1">
            <span className="uppercase font-semibold tracking-wider truncate max-w-[120px]">{product.category}</span>
            <span className="font-mono text-gray-500 font-bold">{product.id}</span>
          </div>

          <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-maroon-800 line-clamp-1 transition">
            {product.name}
          </h3>

          {/* Pricing */}
          <div className="flex items-baseline space-x-2 mt-1.5">
            <span className="text-sm sm:text-base font-extrabold text-maroon-800">
              ₹{product.price}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>
            )}
            {product.discount > 0 && (
              <span className="text-[10px] font-bold text-green-700">
                ({product.discount}% OFF)
              </span>
            )}
          </div>
        </div>

        {/* Quick Size Select & Add to Cart */}
        <div className="mt-3 pt-2.5 border-t border-rose-50 flex items-center space-x-2">
          {product.sizes && product.sizes.length > 0 && (
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="bg-rose-50 text-[10px] font-bold text-gray-700 rounded-lg px-2 py-1.5 border border-rose-200 focus:outline-none"
            >
              {product.sizes.map(sz => (
                <option key={sz} value={sz}>{sz}</option>
              ))}
            </select>
          )}

          <button
            onClick={() => onAddToCart(selectedSize)}
            className="flex-1 py-1.5 rounded-lg bg-maroon-800 hover:bg-maroon-700 text-white text-xs font-bold shadow-sm transition flex items-center justify-center space-x-1"
          >
            <Icon name="ShoppingBag" className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>

      </div>

    </div>
  );
}

// --- SUB-COMPONENT: PRODUCT DETAILS VIEW ---
function ProductDetailsView({
  product,
  onAddToCart,
  onBuyNow,
  isInWishlist,
  onToggleWishlist,
  onWhatsAppOrder,
  onOpenSizeGuide,
  relatedProducts,
  onSelectRelated,
  onBack
}) {
  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : "2.6");
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : "Standard");
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [pincode, setPincode] = useState('');
  const [pincodeMsg, setPincodeMsg] = useState('');
  const [customNote, setCustomNote] = useState('');

  const checkPincode = () => {
    if (pincode.trim().length === 6 && !isNaN(pincode)) {
      setPincodeMsg('✓ Delivery in 2–4 Business Days to PIN ' + pincode + ' (Express Speed Post / Blue Dart)');
    } else {
      setPincodeMsg('Please enter a valid 6-digit Indian PIN code');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Back Button & Breadcrumbs */}
      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
        <button onClick={onBack} className="hover:text-maroon-800 font-bold flex items-center space-x-1">
          <span>← Back to Shop</span>
        </button>
        <span>/</span>
        <span className="capitalize">{product.category}</span>
        <span>/</span>
        <span className="font-bold text-gray-800 truncate max-w-xs">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: Product Images Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-rose-50 border border-rose-200/80 shadow-md">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1611591475879-da0066ec79b0?auto=format&fit=crop&w=800&q=80"; }}
            />
            {product.tag && (
              <span className="absolute top-4 left-4 bg-maroon-800 text-gold-300 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-lg border border-gold-400">
                {product.tag}
              </span>
            )}
            <button
              onClick={onToggleWishlist}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-md flex items-center justify-center text-gray-500 hover:text-rose-600 transition"
            >
              <Icon name="Heart" className={`w-5 h-5 ${isInWishlist ? 'text-rose-600 fill-current' : ''}`} />
            </button>
          </div>

          {/* Thumbnails */}
          {product.additionalImages && product.additionalImages.length > 0 && (
            <div className="flex space-x-3 overflow-x-auto pb-2">
              <button
                onClick={() => setActiveImage(product.image)}
                className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition shrink-0 ${
                  activeImage === product.image ? 'border-maroon-800 shadow' : 'border-rose-200 opacity-70'
                }`}
              >
                <img src={product.image} alt="Thumbnail main" className="w-full h-full object-cover" />
              </button>
              {product.additionalImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition shrink-0 ${
                    activeImage === img ? 'border-maroon-800 shadow' : 'border-rose-200 opacity-70'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Info & Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold mb-2">
              <span className="bg-rose-100 text-maroon-800 px-2.5 py-0.5 rounded-full">{product.category}</span>
              <span className="text-gray-400">•</span>
              <span className="font-mono text-gray-500">Product ID: {product.id}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif font-black text-gray-900 leading-snug">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex text-gold-500">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-gray-700">{product.rating || 4.9}</span>
              <span className="text-xs text-gray-400">({product.reviewsCount || 48} verified ratings)</span>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80 flex items-center space-x-4">
            <div>
              <span className="text-xs text-gray-500 block">Special Festive Price</span>
              <span className="text-3xl font-serif font-black text-maroon-800">₹{product.price}</span>
            </div>
            {product.originalPrice && (
              <div className="border-l border-rose-200 pl-4">
                <span className="text-xs text-gray-400 block line-through">MRP ₹{product.originalPrice}</span>
                <span className="text-xs font-bold text-green-700 block">Save {product.discount}% (Incl. of all taxes)</span>
              </div>
            )}
          </div>

          {/* Size Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                Select Bangle Size (Indian Sizing)
              </span>
              <button
                onClick={onOpenSizeGuide}
                className="text-xs font-bold text-gold-600 hover:underline flex items-center space-x-1"
              >
                <span>📏 Bangle Size Guide</span>
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes && product.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition ${
                    selectedSize === sz
                      ? 'bg-maroon-800 text-white border-maroon-800 shadow'
                      : 'bg-white text-gray-800 border-rose-200 hover:border-maroon-700'
                  }`}
                >
                  Size {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <span className="text-xs font-bold text-gray-900 uppercase tracking-wider block mb-2">
                Available Colors: <strong className="text-maroon-800">{selectedColor}</strong>
              </span>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(col => (
                  <button
                    key={col}
                    onClick={() => setSelectedColor(col)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition ${
                      selectedColor === col
                        ? 'bg-rose-100 text-maroon-800 border-maroon-800 font-bold'
                        : 'bg-white text-gray-600 border-rose-200 hover:bg-rose-50'
                    }`}
                  >
                    {col}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & Stock */}
          <div className="flex items-center space-x-4">
            <div>
              <span className="text-xs font-bold text-gray-700 block mb-1">Quantity</span>
              <div className="flex items-center space-x-2 bg-rose-50 border border-rose-200 rounded-xl p-1">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-7 h-7 flex items-center justify-center text-gray-700 hover:text-maroon-800"
                >
                  <Icon name="Minus" className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-bold text-gray-900 w-6 text-center">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-7 h-7 flex items-center justify-center text-gray-700 hover:text-maroon-800"
                >
                  <Icon name="Plus" className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="pt-5">
              <span className="text-xs font-bold text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
                ● In Stock ({product.stock || 12} sets available)
              </span>
            </div>
          </div>

          {/* Customization Request Box */}
          <div className="bg-rose-50/70 p-3.5 rounded-2xl border border-rose-200/90 space-y-1.5">
            <div className="flex items-center space-x-1.5 text-xs font-bold text-maroon-800">
              <Icon name="Sparkles" className="w-4 h-4 text-gold-600" />
              <span>Personalization / Custom Sizing Request (Optional)</span>
            </div>
            <p className="text-[11px] text-gray-500">
              Want custom names/initials, matching silk thread shade for your saree, or hanging latkan?
            </p>
            <input
              type="text"
              placeholder="e.g. Inscribe 'Sindhu & Arun', or match Royal Blue silk saree"
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              className="w-full text-xs border border-rose-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:border-maroon-700"
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => onAddToCart(product, selectedSize, selectedColor, qty, customNote)}
                className="py-3.5 rounded-full bg-white border-2 border-maroon-800 text-maroon-800 font-bold text-xs uppercase tracking-wider hover:bg-rose-50 transition flex items-center justify-center space-x-2"
              >
                <Icon name="ShoppingBag" className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={() => onBuyNow(product, selectedSize, selectedColor, qty, customNote)}
                className="py-3.5 rounded-full bg-gradient-royal text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.01] transition flex items-center justify-center space-x-2"
              >
                <Icon name="CreditCard" className="w-4 h-4 text-gold-300" />
                <span>Buy Now</span>
              </button>
            </div>

            {/* Direct WhatsApp Order on Product Page */}
            <button
              onClick={() => onWhatsAppOrder(selectedSize, selectedColor, customNote)}
              className="w-full py-3.5 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#1ebe5b] transition flex items-center justify-center space-x-2"
            >
              <Icon name="WhatsApp" className="w-5 h-5" />
              <span>Order on WhatsApp (with Custom Details)</span>
            </button>
          </div>

          {/* PIN code delivery check */}
          <div className="pt-2">
            <label className="block text-xs font-bold text-gray-700 mb-1">Check Delivery to your PIN code</label>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Enter 6-digit PIN..."
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                maxLength="6"
                className="text-xs border border-rose-200 rounded-xl px-3 py-2 w-44 focus:outline-none"
              />
              <button
                onClick={checkPincode}
                className="px-4 py-2 bg-rose-100 text-maroon-800 text-xs font-bold rounded-xl hover:bg-rose-200"
              >
                Check
              </button>
            </div>
            {pincodeMsg && (
              <p className="text-xs font-semibold text-green-700 mt-1">{pincodeMsg}</p>
            )}
          </div>

        </div>
      </div>

      {/* Tabs: Description, Specs, Care, Reviews */}
      <div className="mt-14 bg-white rounded-3xl border border-rose-100 shadow-sm p-6 sm:p-10">
        <div className="flex space-x-4 border-b border-rose-100 pb-4 overflow-x-auto text-xs sm:text-sm font-bold">
          {[
            { id: 'description', label: 'Product Description' },
            { id: 'specs', label: 'Specifications' },
            { id: 'care', label: 'Jewellery Care Guide' },
            { id: 'reviews', label: `Reviews (${product.reviewsCount || 48})` }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 whitespace-nowrap transition ${
                activeTab === tab.id
                  ? 'border-b-2 border-maroon-800 text-maroon-800 font-bold'
                  : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="pt-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
          {activeTab === 'description' && (
            <div className="space-y-4 max-w-3xl">
              <p>{product.description}</p>
              <p>
                Each bangle set is personally inspected by Sindhu Arun to ensure smooth interior edging, tight stone settings, and flawless polish before dispatch from Doddabommasandra, Bengaluru.
              </p>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="max-w-xl">
              <table className="w-full text-xs">
                <tbody className="divide-y divide-rose-50">
                  {product.specifications ? (
                    Object.entries(product.specifications).map(([key, val]) => (
                      <tr key={key} className="py-2">
                        <td className="py-2 font-bold text-gray-900 w-1/3">{key}</td>
                        <td className="py-2 text-gray-600">{val}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="py-2">Standard high grade jewellery alloy & handcrafted stones.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'care' && (
            <div className="space-y-2 max-w-2xl text-xs">
              <p className="font-bold text-maroon-800">Follow these simple steps for everlasting brilliance:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Store each set individually in airtight ziplock bags or velvet boxes.</li>
                <li>Avoid spraying perfume, hairspray, or sanitizer directly onto the bangles.</li>
                <li>Remove before showering, swimming, or heavy housework.</li>
                <li>Clean gently with a dry, soft cotton cloth after wearing to remove moisture and skin oils.</li>
              </ul>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-rose-50">
                <div>
                  <h4 className="font-bold text-gray-900">Verified Customer Experiences</h4>
                  <span className="text-xs text-gray-500">Overall Rating: {product.rating || 4.9} out of 5 stars</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-rose-50/40 border border-rose-100">
                  <div className="flex items-center space-x-1 text-gold-500 mb-1">
                    {[1, 2, 3, 4, 5].map(i => <Icon key={i} name="Star" className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p className="text-xs text-gray-700 italic">"The velvet finish and ruby stones look breathtaking. Super fast delivery in Bengaluru within 2 days!"</p>
                  <span className="block text-[10px] text-gray-400 mt-1">— Soumya K., Bengaluru</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts && relatedProducts.length > 0 && (
        <div className="mt-14">
          <h3 className="text-xl font-serif font-black text-gray-900 mb-6">You May Also Love</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {relatedProducts.map(rel => (
              <div
                key={rel.id}
                onClick={() => onSelectRelated(rel)}
                className="cursor-pointer group bg-white p-3 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition card-hover"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-rose-50 mb-2">
                  <img src={rel.image} alt={rel.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <h4 className="text-xs font-bold text-gray-900 truncate">{rel.name}</h4>
                <span className="text-xs font-extrabold text-maroon-800">₹{rel.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

// --- SUB-COMPONENT: BANGLE SIZE GUIDE MODAL ---
function BangleSizeGuideModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-rose-100 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-rose-100 pb-3 mb-4">
          <div>
            <h3 className="text-xl font-serif font-bold text-maroon-800">
              Indian Bangle Size Chart & Guide
            </h3>
            <p className="text-[11px] text-gray-500">Measure your hand knuckle to find the perfect bangle size</p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-700">
            <Icon name="X" className="w-5 h-5" />
          </button>
        </div>

        {/* Size Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-xs text-left border border-rose-100 rounded-xl overflow-hidden">
            <thead className="bg-gradient-royal text-white uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-2.5 px-3">Bangle Size</th>
                <th className="py-2.5 px-3">Inner Diameter (Inches)</th>
                <th className="py-2.5 px-3">Inner Diameter (mm)</th>
                <th className="py-2.5 px-3">Standard Fit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rose-50 text-gray-700">
              <tr className="hover:bg-rose-50/50">
                <td className="py-2.5 px-3 font-bold text-maroon-800">2.2</td>
                <td className="py-2.5 px-3">2 2/16" (2.125 in)</td>
                <td className="py-2.5 px-3">54.0 mm</td>
                <td className="py-2.5 px-3">Extra Small / Teen</td>
              </tr>
              <tr className="hover:bg-rose-50/50">
                <td className="py-2.5 px-3 font-bold text-maroon-800">2.4</td>
                <td className="py-2.5 px-3">2 4/16" (2.250 in)</td>
                <td className="py-2.5 px-3">57.2 mm</td>
                <td className="py-2.5 px-3">Small / Petite Hand</td>
              </tr>
              <tr className="bg-rose-50/80 font-bold hover:bg-rose-100/50">
                <td className="py-2.5 px-3 text-maroon-900">2.6 ⭐</td>
                <td className="py-2.5 px-3">2 6/16" (2.375 in)</td>
                <td className="py-2.5 px-3">60.3 mm</td>
                <td className="py-2.5 px-3 text-green-700">Most Popular Medium</td>
              </tr>
              <tr className="hover:bg-rose-50/50">
                <td className="py-2.5 px-3 font-bold text-maroon-800">2.8</td>
                <td className="py-2.5 px-3">2 8/16" (2.500 in)</td>
                <td className="py-2.5 px-3">63.5 mm</td>
                <td className="py-2.5 px-3">Large / Broad Wrist</td>
              </tr>
              <tr className="hover:bg-rose-50/50">
                <td className="py-2.5 px-3 font-bold text-maroon-800">2.10</td>
                <td className="py-2.5 px-3">2 10/16" (2.625 in)</td>
                <td className="py-2.5 px-3">66.7 mm</td>
                <td className="py-2.5 px-3">Extra Large</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Measuring Tip */}
        <div className="bg-rose-50 p-4 rounded-2xl border border-rose-200/70 text-xs space-y-2">
          <h4 className="font-bold text-maroon-800 flex items-center space-x-1">
            <Icon name="Sparkles" className="w-4 h-4 text-gold-500" />
            <span>How to Measure with an Existing Bangle:</span>
          </h4>
          <p className="text-gray-600">
            Take a bangle that fits you well. Place a ruler flat across the center and measure the <strong>inner diameter</strong> in millimeters. Compare with the chart above!
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-3 bg-maroon-800 text-white text-xs font-bold rounded-full shadow"
        >
          Got It, Thanks!
        </button>
      </div>
    </div>
  );
}

// --- SUB-COMPONENT: TRACKING STEPPER ---
function TrackingStepper({ currentStatus }) {
  const statuses = [
    'Order Placed',
    'Payment Successful',
    'Processing',
    'Packed',
    'Shipped',
    'Out for Delivery',
    'Delivered'
  ];

  const currentIdx = statuses.indexOf(currentStatus);
  const activeIdx = currentIdx === -1 ? 0 : currentIdx;

  return (
    <div className="py-4">
      <div className="flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-rose-100 -translate-y-1/2 z-0"></div>
        <div 
          className="absolute top-1/2 left-0 h-1 bg-maroon-800 -translate-y-1/2 z-0 transition-all duration-700"
          style={{ width: `${(activeIdx / (statuses.length - 1)) * 100}%` }}
        ></div>

        {statuses.map((step, i) => {
          const isDone = i <= activeIdx;
          const isCurrent = i === activeIdx;

          return (
            <div key={step} className="relative z-10 flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition ${
                isDone ? 'bg-maroon-800 text-gold-300 ring-4 ring-rose-100' : 'bg-gray-200 text-gray-500'
              }`}>
                {isDone ? '✓' : i + 1}
              </div>
              <span className={`text-[10px] mt-2 font-bold max-w-[70px] text-center hidden sm:block ${
                isCurrent ? 'text-maroon-800' : isDone ? 'text-gray-800' : 'text-gray-400'
              }`}>
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- SUB-COMPONENT: ORDER CARD ---
function OrderCard({ order, onTrack }) {
  return (
    <div className="bg-rose-50/40 p-5 rounded-2xl border border-rose-100 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-rose-100 pb-3">
        <div>
          <span className="text-xs text-gray-400">Order ID:</span>
          <h4 className="text-sm font-mono font-bold text-maroon-800">{order.orderId}</h4>
          <span className="text-[10px] text-gray-500">{new Date(order.createdAt).toLocaleDateString('en-IN')}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-100 text-maroon-800">
            {order.orderStatus}
          </span>
          <button
            onClick={onTrack}
            className="px-3 py-1 bg-maroon-800 text-white text-xs font-bold rounded-lg shadow-sm"
          >
            Track
          </button>
        </div>
      </div>

      <div className="space-y-2 text-xs">
        {order.items.map((it, i) => (
          <div key={i} className="flex justify-between text-gray-700">
            <span>{it.name} (Size: {it.size}) × {it.quantity}</span>
            <span className="font-bold">₹{it.price * it.quantity}</span>
          </div>
        ))}
      </div>

      <div className="pt-2 border-t border-rose-100 flex justify-between items-center text-xs">
        <span className="text-gray-500">Payment: <strong className="text-gray-800">{order.paymentMethod}</strong> ({order.paymentStatus})</span>
        <span className="text-sm font-extrabold text-maroon-800">Total: ₹{order.total}</span>
      </div>
    </div>
  );
}

// --- SUB-COMPONENT: AUTH MODAL ---
function AuthModal({ mode, setMode, form, setForm, onSubmit, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-rose-100">
        <div className="flex items-center justify-between border-b border-rose-100 pb-3 mb-6">
          <div>
            <h3 className="text-xl font-serif font-bold text-maroon-800">
              {mode === 'admin' ? 'Owner / Admin Portal' : mode === 'register' ? 'Create Customer Account' : 'Welcome to AHBangles'}
            </h3>
            <p className="text-xs text-gray-500">
              {mode === 'admin' ? 'Sign in as store owner (Sindhu Arun)' : 'Manage your orders and address'}
            </p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-700">
            <Icon name="X" className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full text-xs border border-rose-200 rounded-xl px-3.5 py-2.5 focus:outline-none"
                placeholder="e.g. Sindhu Arun"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full text-xs border border-rose-200 rounded-xl px-3.5 py-2.5 focus:outline-none"
              placeholder={mode === 'admin' ? 'kpramod0207@gmail.com' : 'yourname@example.com'}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full text-xs border border-rose-200 rounded-xl px-3.5 py-2.5 focus:outline-none"
              placeholder={mode === 'admin' ? 'pramuharshu@123' : '••••••••'}
            />
          </div>

          {mode === 'admin' && (
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => {
                  setForm({ email: 'kpramod0207@gmail.com', password: 'pramuharshu@123', name: 'Sindhu Arun (Owner)' });
                }}
                className="w-full py-2.5 bg-rose-50 hover:bg-rose-100 border border-maroon-700 text-maroon-800 text-xs font-bold rounded-xl flex items-center justify-center space-x-1.5 transition"
              >
                <span>⚡ Click to Auto-Fill Owner Login</span>
              </button>
              <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-[11px] text-amber-800">
                💡 <strong>Owner Admin Portal:</strong><br />
                Email: <code className="font-bold">kpramod0207@gmail.com</code><br />
                Password: <code className="font-bold">pramuharshu@123</code>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-royal text-white text-xs font-bold rounded-full shadow-lg"
          >
            {mode === 'admin' ? 'Sign In to Admin Portal' : mode === 'register' ? 'Register Account' : 'Sign In'}
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-rose-50 text-center text-xs">
          {mode === 'login' && (
            <p className="text-gray-500">
              Don't have an account?{' '}
              <button onClick={() => setMode('register')} className="font-bold text-maroon-700 hover:underline">
                Register here
              </button>
            </p>
          )}
          {mode === 'register' && (
            <p className="text-gray-500">
              Already have an account?{' '}
              <button onClick={() => setMode('login')} className="font-bold text-maroon-700 hover:underline">
                Sign In
              </button>
            </p>
          )}
          {mode === 'admin' && (
            <button onClick={() => setMode('login')} className="text-xs text-gray-500 hover:underline">
              Switch to Customer Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENT: RAZORPAY SIMULATION MODAL ---
function RazorpaySimulationModal({ orderDetails, onSuccess, onClose }) {
  const [selectedMethod, setSelectedMethod] = useState('upi');
  const [upiId, setUpiId] = useState('sindhu@okhdfcbank');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      onSuccess(`pay_${Math.random().toString(36).substring(2, 12)}`);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        
        {/* Razorpay Luxury Blue Header */}
        <div className="bg-[#0c2340] text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-gold-400">
              AH
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wide">AHBangles Store</h4>
              <p className="text-[10px] text-gray-300">Sindhu Arun • Bengaluru</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-gray-300 block">Amount</span>
            <span className="text-lg font-mono font-bold text-white">₹{orderDetails.total}</span>
          </div>
        </div>

        {/* Razorpay Test Mode Badge */}
        <div className="bg-blue-50 px-4 py-2 text-[11px] font-bold text-blue-800 flex items-center justify-between border-b border-blue-100">
          <span>🛡️ Razorpay Secure Test Checkout</span>
          <span className="bg-blue-200 text-blue-900 px-2 py-0.5 rounded text-[9px] uppercase">Sandbox</span>
        </div>

        {/* Payment Methods */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'upi', label: 'UPI / QR', icon: '📱' },
              { id: 'cards', label: 'Card', icon: '💳' },
              { id: 'netbanking', label: 'NetBanking', icon: '🏦' }
            ].map(m => (
              <button
                key={m.id}
                onClick={() => setSelectedMethod(m.id)}
                className={`p-3 rounded-xl border text-xs font-bold text-center transition ${
                  selectedMethod === m.id
                    ? 'border-[#0c2340] bg-blue-50/50 text-[#0c2340]'
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="block text-lg mb-1">{m.icon}</span>
                <span>{m.label}</span>
              </button>
            ))}
          </div>

          {selectedMethod === 'upi' && (
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-bold text-gray-700">Enter VPA / UPI ID</label>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="mobile@upi or yourname@okaxis"
                className="w-full text-xs border border-gray-300 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#0c2340]"
              />
              <div className="flex gap-1.5 text-[10px] text-gray-500">
                <span className="bg-gray-100 px-2 py-1 rounded">Google Pay</span>
                <span className="bg-gray-100 px-2 py-1 rounded">PhonePe</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Paytm</span>
              </div>
            </div>
          )}

          {selectedMethod === 'cards' && (
            <div className="space-y-3 pt-2">
              <input
                type="text"
                placeholder="4111 2222 3333 4444 (Test Visa Card)"
                defaultValue="4111 2222 3333 4444"
                className="w-full text-xs border border-gray-300 rounded-xl px-3 py-2.5"
              />
              <div className="grid grid-cols-2 gap-2">
                <input type="text" placeholder="MM/YY" defaultValue="12/28" className="text-xs border border-gray-300 rounded-xl px-3 py-2" />
                <input type="text" placeholder="CVV" defaultValue="123" className="text-xs border border-gray-300 rounded-xl px-3 py-2" />
              </div>
            </div>
          )}

          {selectedMethod === 'netbanking' && (
            <div className="space-y-2 pt-2">
              <select className="w-full text-xs border border-gray-300 rounded-xl px-3 py-2.5">
                <option>State Bank of India (SBI)</option>
                <option>HDFC Bank</option>
                <option>ICICI Bank</option>
                <option>Axis Bank</option>
                <option>Canara Bank</option>
              </select>
            </div>
          )}

          <button
            onClick={handlePay}
            disabled={isProcessing}
            className="w-full py-3.5 bg-[#0c2340] hover:bg-[#15345d] text-white text-xs font-bold rounded-xl shadow-lg transition flex items-center justify-center space-x-2"
          >
            {isProcessing ? (
              <span>Verifying with Razorpay...</span>
            ) : (
              <span>Complete Payment of ₹{orderDetails.total}</span>
            )}
          </button>

          <button
            onClick={onClose}
            className="w-full text-center text-xs text-gray-400 hover:text-gray-600"
          >
            Cancel Payment
          </button>
        </div>

      </div>
    </div>
  );
}

// --- SUB-COMPONENT: ADMIN DASHBOARD ---
function AdminDashboard({ user, onSetUser, stats, orders, products, categories, onRefresh, onOpenLogin, showToast }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'orders' | 'products' | 'reports'
  const [orderSearch, setOrderSearch] = useState('');
  const [orderStatusFilter, setOrderStatusFilter] = useState('all');
  const [newProductModal, setNewProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [productSearch, setProductSearch] = useState('');
  const [productCategoryFilter, setProductCategoryFilter] = useState('all');
  const [productViewMode, setProductViewMode] = useState('grid'); // 'grid' | 'table'
  const [ownerEmail, setOwnerEmail] = useState('kpramod0207@gmail.com');
  const [ownerPass, setOwnerPass] = useState('pramuharshu@123');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Direct Inline Owner Login
  const handleInlineLogin = async (e, customEmail, customPass) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsLoggingIn(true);
    const emailToUse = customEmail || ownerEmail;
    const passToUse = customPass || ownerPass;

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailToUse, password: passToUse, role: 'admin' })
      });
      const data = await res.json();
      if (data.success) {
        if (onSetUser) onSetUser(data.user);
        localStorage.setItem('ahbangles_user', JSON.stringify(data.user));
        localStorage.setItem('ahbangles_token', data.token);
        showToast('Welcome! Signed into Owner Dashboard ✨');
        if (onRefresh) onRefresh();
      } else {
        showToast(data.error || 'Login failed. Check credentials.', 'error');
      }
    } catch (err) {
      showToast('Login server error', 'error');
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Handle Photo Upload directly from Computer or Phone
  const handlePhotoUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = async (uploadEvt) => {
      const base64Data = uploadEvt.target.result;
      try {
        const res = await fetch('/api/upload/base64', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ base64Data, filename: file.name })
        });
        const d = await res.json();
        if (d.success && d.imageUrl) {
          setProductForm(prev => ({ ...prev, image: d.imageUrl }));
          showToast('Bangle photo uploaded successfully! 📸');
        } else {
          setProductForm(prev => ({ ...prev, image: base64Data }));
          showToast('Bangle photo attached!');
        }
      } catch (err) {
        setProductForm(prev => ({ ...prev, image: base64Data }));
        showToast('Photo attached locally!');
      } finally {
        setIsUploading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  // New Product Form State
  const [productForm, setProductForm] = useState({
    name: '',
    category: 'Kundan Bangles',
    categoryId: 'kundan',
    price: '',
    originalPrice: '',
    sizes: '2.4, 2.6, 2.8',
    colors: 'Ruby Red, Gold',
    stock: 15,
    tag: 'Handcrafted Set',
    image: '/assets/ruby_black_set.jpg',
    description: ''
  });

  if (!user || user.role !== 'admin') {
    return (
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-rose-100 text-center space-y-5">
          <div className="w-16 h-16 rounded-full bg-gradient-royal text-gold-400 mx-auto flex items-center justify-center shadow-lg border-2 border-gold-400">
            <Icon name="Lock" className="w-8 h-8" />
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-rosegold-600">AHBangles Owner Portal</span>
            <h2 className="text-2xl font-serif font-black text-gray-900 mt-1">Owner Sign In</h2>
            <p className="text-xs text-gray-500 mt-1">Manage orders, update statuses & add new bangles</p>
          </div>

          {/* Quick One-Click Owner Login Button */}
          <button
            type="button"
            onClick={() => handleInlineLogin(null, 'kpramod0207@gmail.com', 'pramuharshu@123')}
            disabled={isLoggingIn}
            className="w-full py-3.5 rounded-2xl bg-gradient-royal text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.01] transition flex items-center justify-center space-x-2 border border-gold-400"
          >
            <Icon name="Sparkles" className="w-4 h-4 text-gold-300" />
            <span>{isLoggingIn ? 'Logging In...' : '⚡ Quick One-Click Sign In as Owner'}</span>
          </button>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-rose-100"></div>
            <span className="flex-shrink mx-3 text-[10px] font-bold text-gray-400 uppercase">Or Sign In Manually</span>
            <div className="flex-grow border-t border-rose-100"></div>
          </div>

          <form onSubmit={handleInlineLogin} className="space-y-3.5 text-left text-xs">
            <div>
              <label className="block font-bold text-gray-700 mb-1">Owner Email</label>
              <input
                type="text"
                value={ownerEmail}
                onChange={(e) => setOwnerEmail(e.target.value)}
                placeholder="kpramod0207@gmail.com"
                className="w-full border border-rose-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-maroon-700 font-medium"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={ownerPass}
                onChange={(e) => setOwnerPass(e.target.value)}
                placeholder="pramuharshu@123"
                className="w-full border border-rose-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-maroon-700 font-medium"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3 bg-maroon-800 hover:bg-maroon-700 text-white font-bold rounded-xl shadow transition"
            >
              Sign In to Admin Portal
            </button>
          </form>

          <div className="bg-rose-50 p-3 rounded-xl border border-rose-100 text-[11px] text-gray-600 text-left space-y-1">
            <p><strong>Configured Owner Credentials:</strong></p>
            <p>• Email: <code className="font-bold text-maroon-800">kpramod0207@gmail.com</code></p>
            <p>• Password: <code className="font-bold text-maroon-800">pramuharshu@123</code></p>
          </div>
        </div>
      </div>
    );
  }

  // Update order status handler
  const handleUpdateStatus = async (orderId, newStatus) => {
    try {
      const res = await fetch(`/api/orders/${orderId}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        showToast(`Order status updated to "${newStatus}"`);
        onRefresh();
      } else {
        showToast(data.error || 'Failed to update order', 'error');
      }
    } catch (e) {
      showToast('Error updating status', 'error');
    }
  };

  // Add Product handler
  const handleSaveProduct = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...productForm,
        price: Number(productForm.price),
        originalPrice: Number(productForm.originalPrice) || Number(productForm.price) * 1.5,
        stock: Number(productForm.stock),
        sizes: productForm.sizes.split(',').map(s => s.trim()),
        colors: productForm.colors.split(',').map(c => c.trim())
      };

      const url = editingProduct ? `/api/products/${editingProduct.id}` : '/api/products';
      const method = editingProduct ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        showToast(editingProduct ? 'Product updated!' : 'New bangle added to catalog!');
        setNewProductModal(false);
        setEditingProduct(null);
        onRefresh();
      } else {
        showToast(data.error || 'Failed to save product', 'error');
      }
    } catch (e) {
      showToast('Failed to save product', 'error');
    }
  };

  // Delete product handler
  const handleDeleteProduct = async (id, name = '') => {
    const label = name ? `"${name}" (${id})` : `product ${id}`;
    if (!window.confirm(`Are you sure you want to permanently delete ${label} from AHBangles store?`)) return;
    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        showToast(`🗑️ ${name || id} deleted successfully from store!`);
        if (onRefresh) onRefresh();
      } else {
        showToast(data.error || 'Failed to delete product', 'error');
      }
    } catch (e) {
      showToast('Failed to delete product', 'error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-rose-100 gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-gold-600">AHBangles Owner Portal</span>
          <h1 className="text-3xl font-serif font-black text-gray-900">
            Welcome, Sindhu Arun ✨
          </h1>
          <p className="text-xs text-gray-500">Live store management & sales analytics</p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              setEditingProduct(null);
              setProductForm({
                name: '',
                category: 'Kundan Bangles',
                categoryId: 'kundan',
                price: '',
                originalPrice: '',
                sizes: '2.4, 2.6, 2.8',
                colors: 'Ruby Red, Gold',
                stock: 15,
                tag: 'Handcrafted Set',
                image: '/assets/ruby_black_set.jpg',
                description: ''
              });
              setNewProductModal(true);
            }}
            className="px-4 py-2.5 bg-maroon-800 hover:bg-maroon-700 text-white text-xs font-bold rounded-xl shadow flex items-center space-x-1.5 transition"
          >
            <Icon name="Plus" className="w-4 h-4" />
            <span>Add New Bangle</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-rose-100 my-6 text-xs sm:text-sm font-bold">
        {[
          { id: 'overview', label: 'Store Overview & KPI' },
          { id: 'orders', label: `Manage Orders (${orders.length})` },
          { id: 'products', label: `Products & Inventory (${products.length})` },
          { id: 'reports', label: 'Sales Reports' }
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`pb-2.5 transition ${
              activeTab === t.id
                ? 'border-b-2 border-maroon-800 text-maroon-800 font-bold'
                : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && stats && (
        <div className="space-y-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-gray-400">Total Sales</span>
              <h3 className="text-2xl font-serif font-black text-maroon-800 mt-1">₹{stats.totalSales}</h3>
              <span className="text-[10px] text-green-700 font-semibold">Live revenue</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-gray-400">Total Orders</span>
              <h3 className="text-2xl font-serif font-black text-gray-900 mt-1">{stats.totalOrders}</h3>
              <span className="text-[10px] text-gray-500 font-semibold">{orders.filter(o => o.orderStatus === 'Delivered').length} Delivered</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-gray-400">Total Bangle Styles</span>
              <h3 className="text-2xl font-serif font-black text-gray-900 mt-1">{stats.totalProducts}</h3>
              <span className="text-[10px] text-gray-500 font-semibold">Kundan & Thread Bangles</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-gray-400">Low Stock Alert</span>
              <h3 className="text-2xl font-serif font-black text-rose-600 mt-1">{stats.lowStockCount}</h3>
              <span className="text-[10px] text-rose-600 font-semibold">Requires restocking</span>
            </div>
          </div>

          {/* DIRECT PRODUCT CATALOG & DELETE OPTION ON OVERVIEW */}
          <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-rose-100 gap-3">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                  <h3 className="text-base font-bold text-gray-900">Live Bangles Catalog & Quick Delete</h3>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">
                  Click the red <strong>Delete</strong> button to remove unwanted bangles immediately ({products.length} live styles)
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    setEditingProduct(null);
                    setProductForm({
                      name: '',
                      category: 'Kundan Bangles',
                      categoryId: 'kundan',
                      price: '',
                      originalPrice: '',
                      sizes: '2.4, 2.6, 2.8',
                      colors: 'Ruby Red, Gold',
                      stock: 15,
                      tag: 'Handcrafted Set',
                      image: '/assets/ruby_black_set.jpg',
                      description: ''
                    });
                    setNewProductModal(true);
                  }}
                  className="px-3.5 py-2 bg-maroon-800 hover:bg-maroon-700 text-white text-xs font-bold rounded-xl shadow flex items-center space-x-1.5 transition"
                >
                  <Icon name="Plus" className="w-3.5 h-3.5" />
                  <span>Add Bangle</span>
                </button>
                <button
                  onClick={() => setActiveTab('products')}
                  className="px-3.5 py-2 bg-rose-50 hover:bg-rose-100 text-maroon-800 text-xs font-bold rounded-xl border border-rose-200 transition"
                >
                  Full Inventory Tab →
                </button>
              </div>
            </div>

            {/* Bangle Grid for Overview Tab */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
              {products.map(p => (
                <div key={p.id} className="bg-rose-50/40 rounded-2xl p-3 border border-rose-100 flex flex-col justify-between hover:shadow-md transition">
                  <div>
                    <div className="relative aspect-square rounded-xl overflow-hidden mb-2 bg-white border border-rose-100">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      <span className="absolute top-2 left-2 bg-maroon-900/90 text-gold-300 text-[9px] font-bold px-2 py-0.5 rounded-full shadow">
                        {p.category}
                      </span>
                      {p.tag && (
                        <span className="absolute bottom-2 left-2 bg-white/95 text-maroon-800 text-[9px] font-bold px-2 py-0.5 rounded-full shadow">
                          {p.tag}
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-xs font-bold text-gray-900 line-clamp-1">{p.name}</h4>
                    </div>
                    <div className="flex items-baseline space-x-2 mt-1">
                      <span className="text-sm font-black text-maroon-800">₹{p.price}</span>
                      {p.originalPrice && <span className="text-[10px] text-gray-400 line-through">₹{p.originalPrice}</span>}
                      <span className="text-[10px] text-gray-400 font-mono ml-auto">{p.id}</span>
                    </div>
                    <span className={`inline-block mt-1 text-[10px] px-2 py-0.5 rounded font-bold ${
                      p.stock <= 5 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {p.stock} in stock
                    </span>
                  </div>

                  {/* High-visibility Action Buttons: Edit and Red Delete */}
                  <div className="mt-3 pt-2.5 border-t border-rose-100 flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setEditingProduct(p);
                        setProductForm({
                          name: p.name,
                          category: p.category,
                          categoryId: p.categoryId || 'kundan',
                          price: p.price,
                          originalPrice: p.originalPrice || '',
                          sizes: p.sizes ? p.sizes.join(', ') : '2.4, 2.6, 2.8',
                          colors: p.colors ? p.colors.join(', ') : 'Gold',
                          stock: p.stock,
                          tag: p.tag || '',
                          image: p.image,
                          description: p.description || ''
                        });
                        setNewProductModal(true);
                      }}
                      className="flex-1 py-1.5 bg-white hover:bg-blue-50 text-blue-700 rounded-lg text-xs font-bold border border-blue-200 transition text-center"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(p.id, p.name)}
                      className="flex-1 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition flex items-center justify-center space-x-1 shadow-sm"
                      title="Permanently delete this bangle"
                    >
                      <Icon name="Trash2" className="w-3.5 h-3.5 text-white" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders Preview */}
          <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-4">Latest Customer Orders</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-rose-50/70 text-gray-700 uppercase text-[10px]">
                  <tr>
                    <th className="py-2.5 px-3">Order ID</th>
                    <th className="py-2.5 px-3">Customer</th>
                    <th className="py-2.5 px-3">Amount</th>
                    <th className="py-2.5 px-3">Payment</th>
                    <th className="py-2.5 px-3">Status</th>
                    <th className="py-2.5 px-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rose-50">
                  {orders.slice(0, 5).map(o => (
                    <tr key={o.orderId} className="hover:bg-rose-50/30">
                      <td className="py-2.5 px-3 font-mono font-bold text-maroon-800">{o.orderId}</td>
                      <td className="py-2.5 px-3 font-semibold text-gray-800">{o.customer.name} ({o.customer.city})</td>
                      <td className="py-2.5 px-3 font-bold">₹{o.total}</td>
                      <td className="py-2.5 px-3">{o.paymentStatus}</td>
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-maroon-800">
                          {o.orderStatus}
                        </span>
                      </td>
                      <td className="py-2.5 px-3">
                        <select
                          value={o.orderStatus}
                          onChange={(e) => handleUpdateStatus(o.orderId, e.target.value)}
                          className="text-[10px] border border-rose-200 rounded px-1.5 py-1 font-bold"
                        >
                          {['Order Placed', 'Payment Successful', 'Processing', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered', 'Cancelled'].map(st => (
                            <option key={st} value={st}>{st}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MANAGE ORDERS */}
      {activeTab === 'orders' && (
        <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <input
              type="text"
              placeholder="Search by Order ID or customer name..."
              value={orderSearch}
              onChange={(e) => setOrderSearch(e.target.value)}
              className="text-xs border border-rose-200 rounded-xl px-4 py-2 w-full sm:w-72"
            />
            <div className="flex items-center space-x-2 text-xs">
              <span className="font-semibold text-gray-500">Filter:</span>
              <select
                value={orderStatusFilter}
                onChange={(e) => setOrderStatusFilter(e.target.value)}
                className="text-xs border border-rose-200 rounded-xl px-3 py-2"
              >
                <option value="all">All Statuses</option>
                {['Order Placed', 'Payment Successful', 'Processing', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered', 'Cancelled'].map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-rose-50/70 text-gray-700 uppercase text-[10px]">
                <tr>
                  <th className="py-3 px-3">Order ID</th>
                  <th className="py-3 px-3">Date</th>
                  <th className="py-3 px-3">Customer & Phone</th>
                  <th className="py-3 px-3">Items</th>
                  <th className="py-3 px-3">Total</th>
                  <th className="py-3 px-3">Update Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rose-50">
                {orders
                  .filter(o => orderStatusFilter === 'all' || o.orderStatus === orderStatusFilter)
                  .filter(o => !orderSearch || o.orderId.toLowerCase().includes(orderSearch.toLowerCase()) || (o.customer && o.customer.name.toLowerCase().includes(orderSearch.toLowerCase())))
                  .map(o => (
                    <tr key={o.orderId} className="hover:bg-rose-50/30">
                      <td className="py-3 px-3 font-mono font-bold text-maroon-800">{o.orderId}</td>
                      <td className="py-3 px-3 text-gray-500">{new Date(o.createdAt).toLocaleDateString('en-IN')}</td>
                      <td className="py-3 px-3">
                        <strong className="block text-gray-900">{o.customer.name}</strong>
                        <span className="text-[10px] text-gray-500">{o.customer.mobile} • {o.customer.city}</span>
                      </td>
                      <td className="py-3 px-3 text-[11px]">
                        {o.items.map((it, idx) => (
                          <div key={idx} className="truncate max-w-xs">{it.name} (x{it.quantity})</div>
                        ))}
                      </td>
                      <td className="py-3 px-3 font-bold text-maroon-800">₹{o.total}</td>
                      <td className="py-3 px-3">
                        <select
                          value={o.orderStatus}
                          onChange={(e) => handleUpdateStatus(o.orderId, e.target.value)}
                          className="text-xs font-bold border border-rose-300 rounded-lg px-2 py-1 bg-white"
                        >
                          {['Order Placed', 'Payment Successful', 'Processing', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered', 'Cancelled'].map(st => (
                            <option key={st} value={st}>{st}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: PRODUCTS & INVENTORY */}
      {activeTab === 'products' && (
        <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-sm space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-rose-100">
            <div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                <h3 className="text-base font-bold text-gray-900">All Bangles Catalog & Inventory</h3>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">
                Easily edit prices or click <strong>Delete</strong> to remove unwanted bangle styles immediately
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Category Filter */}
              <select
                value={productCategoryFilter}
                onChange={(e) => setProductCategoryFilter(e.target.value)}
                className="text-xs border border-rose-200 rounded-xl px-3 py-2 bg-rose-50/50 font-semibold focus:outline-none focus:border-maroon-700"
              >
                <option value="all">All Categories ({products.length})</option>
                {categories.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>

              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name or ID..."
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  className="text-xs border border-rose-200 rounded-xl px-3.5 py-2 w-48 sm:w-56 focus:outline-none focus:border-maroon-700"
                />
                {productSearch && (
                  <button onClick={() => setProductSearch('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">×</button>
                )}
              </div>

              {/* View Toggle */}
              <div className="flex items-center bg-rose-50 p-1 rounded-xl border border-rose-200">
                <button
                  onClick={() => setProductViewMode('grid')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1 ${
                    productViewMode === 'grid'
                      ? 'bg-maroon-800 text-white shadow'
                      : 'text-gray-600 hover:text-maroon-800'
                  }`}
                  title="Card View (No horizontal scrolling)"
                >
                  <span>📱 Card View</span>
                </button>
                <button
                  onClick={() => setProductViewMode('table')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1 ${
                    productViewMode === 'table'
                      ? 'bg-maroon-800 text-white shadow'
                      : 'text-gray-600 hover:text-maroon-800'
                  }`}
                  title="Table View"
                >
                  <span>📋 Table</span>
                </button>
              </div>

              {/* Add New Bangle Button */}
              <button
                onClick={() => {
                  setEditingProduct(null);
                  setProductForm({
                    name: '',
                    category: 'Kundan Bangles',
                    categoryId: 'kundan',
                    price: '',
                    originalPrice: '',
                    sizes: '2.4, 2.6, 2.8',
                    colors: 'Ruby Red, Gold',
                    stock: 15,
                    tag: 'Handcrafted Set',
                    image: '/assets/ruby_black_set.jpg',
                    description: ''
                  });
                  setNewProductModal(true);
                }}
                className="px-3.5 py-2 bg-maroon-800 hover:bg-maroon-700 text-white text-xs font-bold rounded-xl shadow flex items-center space-x-1 transition"
              >
                <Icon name="Plus" className="w-3.5 h-3.5" />
                <span>Add Bangle</span>
              </button>
            </div>
          </div>

          {/* CARD VIEW (DEFAULT - 100% VISIBLE ON ALL SCREENS, NO HORIZONTAL SCROLL) */}
          {productViewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {products
                .filter(p => productCategoryFilter === 'all' || p.category === productCategoryFilter || p.categoryId === productCategoryFilter)
                .filter(p => !productSearch || p.name.toLowerCase().includes(productSearch.toLowerCase()) || p.id.toLowerCase().includes(productSearch.toLowerCase()))
                .map(p => (
                  <div key={p.id} className="bg-rose-50/40 rounded-2xl p-4 border border-rose-200 flex flex-col justify-between hover:shadow-lg transition">
                    <div>
                      <div className="relative aspect-square rounded-xl overflow-hidden mb-3 bg-white border border-rose-100">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                        <span className="absolute top-2 left-2 bg-maroon-900/90 text-gold-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow">
                          {p.category}
                        </span>
                        {p.tag && (
                          <span className="absolute bottom-2 left-2 bg-white/95 text-maroon-800 text-[9px] font-bold px-2 py-0.5 rounded-full shadow">
                            {p.tag}
                          </span>
                        )}
                        <span className="absolute top-2 right-2 bg-white/95 text-gray-700 text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow">
                          {p.id}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-gray-900 line-clamp-1">{p.name}</h4>

                      <div className="flex items-baseline space-x-2 mt-1.5">
                        <span className="text-base font-black text-maroon-800">₹{p.price}</span>
                        {p.originalPrice && <span className="text-xs text-gray-400 line-through">₹{p.originalPrice}</span>}
                        {p.discount > 0 && <span className="text-[10px] text-green-700 font-bold">({p.discount}% OFF)</span>}
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-rose-100 text-[11px]">
                        <span className="text-gray-500">Stock:</span>
                        <span className={`px-2 py-0.5 rounded font-bold ${
                          p.stock <= 5 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                        }`}>
                          {p.stock} units available
                        </span>
                      </div>
                    </div>

                    {/* BIG PROMINENT ACTION BUTTONS */}
                    <div className="mt-4 pt-3 border-t border-rose-200 flex items-center space-x-2">
                      <button
                        onClick={() => {
                          setEditingProduct(p);
                          setProductForm({
                            name: p.name,
                            category: p.category,
                            categoryId: p.categoryId || 'kundan',
                            price: p.price,
                            originalPrice: p.originalPrice || '',
                            sizes: p.sizes ? p.sizes.join(', ') : '2.4, 2.6, 2.8',
                            colors: p.colors ? p.colors.join(', ') : 'Gold',
                            stock: p.stock,
                            tag: p.tag || '',
                            image: p.image,
                            description: p.description || ''
                          });
                          setNewProductModal(true);
                        }}
                        className="flex-1 py-2.5 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white rounded-xl text-xs font-bold border border-blue-200 transition text-center shadow-sm"
                      >
                        ✏️ Edit Details
                      </button>

                      <button
                        onClick={() => handleDeleteProduct(p.id, p.name)}
                        className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow-md"
                        title="Permanently delete this bangle"
                      >
                        <Icon name="Trash2" className="w-4 h-4 text-white" />
                        <span>🗑️ Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            /* TABLE VIEW */
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-rose-50/70 text-gray-700 uppercase text-[10px]">
                  <tr>
                    <th className="py-3 px-3">Product</th>
                    <th className="py-3 px-3">Product ID</th>
                    <th className="py-3 px-3">Category</th>
                    <th className="py-3 px-3">Price</th>
                    <th className="py-3 px-3">Stock Status</th>
                    <th className="py-3 px-3 text-right pr-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rose-50">
                  {products
                    .filter(p => productCategoryFilter === 'all' || p.category === productCategoryFilter || p.categoryId === productCategoryFilter)
                    .filter(p => !productSearch || p.name.toLowerCase().includes(productSearch.toLowerCase()) || p.id.toLowerCase().includes(productSearch.toLowerCase()))
                    .map(p => (
                    <tr key={p.id} className="hover:bg-rose-50/30 transition">
                      <td className="py-3 px-3 flex items-center space-x-3">
                        <img src={p.image} alt={p.name} className="w-11 h-11 rounded-lg object-cover border border-rose-100 shadow-sm" />
                        <div>
                          <span className="font-bold text-gray-900 block">{p.name}</span>
                          {p.tag && <span className="text-[10px] text-maroon-800 font-bold bg-rose-50 px-1.5 py-0.5 rounded">{p.tag}</span>}
                        </div>
                      </td>
                      <td className="py-3 px-3 font-mono font-bold text-gray-700">{p.id}</td>
                      <td className="py-3 px-3 text-gray-600 font-semibold">{p.category}</td>
                      <td className="py-3 px-3">
                        <span className="font-extrabold text-maroon-800 text-sm">₹{p.price}</span>
                        {p.originalPrice && <span className="text-[10px] text-gray-400 line-through block">₹{p.originalPrice}</span>}
                      </td>
                      <td className="py-3 px-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          p.stock <= 5 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                        }`}>
                          {p.stock} in stock
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right pr-4">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => {
                              setEditingProduct(p);
                              setProductForm({
                                name: p.name,
                                category: p.category,
                                categoryId: p.categoryId || 'kundan',
                                price: p.price,
                                originalPrice: p.originalPrice || '',
                                sizes: p.sizes ? p.sizes.join(', ') : '2.4, 2.6, 2.8',
                                colors: p.colors ? p.colors.join(', ') : 'Gold',
                                stock: p.stock,
                                tag: p.tag || '',
                                image: p.image,
                                description: p.description || ''
                              });
                              setNewProductModal(true);
                            }}
                            className="px-3 py-1.5 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white rounded-lg text-xs font-bold transition border border-blue-200"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(p.id, p.name)}
                            className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition flex items-center space-x-1 shadow-sm"
                            title="Permanently delete this bangle"
                          >
                            <Icon name="Trash2" className="w-3.5 h-3.5 text-white" />
                            <span>Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: SALES REPORTS */}
      {activeTab === 'reports' && stats && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Daily Sales Chart */}
            <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-4">Daily Sales (Last 7 Days)</h3>
              <div className="space-y-3">
                {stats.dailyData.map((d, i) => (
                  <div key={i} className="text-xs">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-gray-700">{d.label}</span>
                      <span className="font-bold text-maroon-800">₹{d.sales} ({d.orders} orders)</span>
                    </div>
                    <div className="w-full bg-rose-50 h-2.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-maroon-800 h-full rounded-full transition-all"
                        style={{ width: `${Math.min(100, Math.max(10, (d.sales / (stats.totalSales || 1)) * 100))}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Performance */}
            <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-4">Monthly Revenue Overview</h3>
              <div className="space-y-3">
                {stats.monthlyData.map((m, i) => (
                  <div key={i} className="text-xs">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-gray-700">{m.month}</span>
                      <span className="font-bold text-gold-600">₹{m.sales} ({m.orders} orders)</span>
                    </div>
                    <div className="w-full bg-rose-50 h-2.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-gold-500 h-full rounded-full transition-all"
                        style={{ width: `${Math.min(100, (m.sales / 65000) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ADD / EDIT PRODUCT MODAL */}
      {newProductModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-rose-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-rose-100 pb-3 mb-4">
              <h3 className="text-lg font-serif font-bold text-maroon-800">
                {editingProduct ? 'Edit Bangle Product' : 'Add New Bangle to Catalog'}
              </h3>
              <button onClick={() => setNewProductModal(false)} className="p-2 text-gray-400">
                <Icon name="X" className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Product Name *</label>
                <input
                  type="text"
                  required
                  value={productForm.name}
                  onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                  placeholder="e.g. Ruby Kundan Floral Bangle"
                  className="w-full border border-rose-200 rounded-xl px-3 py-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Category *</label>
                  <select
                    value={productForm.category}
                    onChange={(e) => {
                      const selected = categories.find(c => c.name === e.target.value);
                      setProductForm({
                        ...productForm,
                        category: e.target.value,
                        categoryId: selected ? selected.id : 'kundan'
                      });
                    }}
                    className="w-full border border-rose-200 rounded-xl px-3 py-2"
                  >
                    {categories.map(c => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Promotional Tag</label>
                  <input
                    type="text"
                    value={productForm.tag}
                    onChange={(e) => setProductForm({ ...productForm, tag: e.target.value })}
                    placeholder="e.g. Single Set ₹399"
                    className="w-full border border-rose-200 rounded-xl px-3 py-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Price (₹) *</label>
                  <input
                    type="number"
                    required
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                    placeholder="399"
                    className="w-full border border-rose-200 rounded-xl px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Original Price (₹)</label>
                  <input
                    type="number"
                    value={productForm.originalPrice}
                    onChange={(e) => setProductForm({ ...productForm, originalPrice: e.target.value })}
                    placeholder="799"
                    className="w-full border border-rose-200 rounded-xl px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Initial Stock</label>
                  <input
                    type="number"
                    value={productForm.stock}
                    onChange={(e) => setProductForm({ ...productForm, stock: e.target.value })}
                    className="w-full border border-rose-200 rounded-xl px-3 py-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Sizes (comma-separated)</label>
                  <input
                    type="text"
                    value={productForm.sizes}
                    onChange={(e) => setProductForm({ ...productForm, sizes: e.target.value })}
                    placeholder="2.4, 2.6, 2.8"
                    className="w-full border border-rose-200 rounded-xl px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Colors (comma-separated)</label>
                  <input
                    type="text"
                    value={productForm.colors}
                    onChange={(e) => setProductForm({ ...productForm, colors: e.target.value })}
                    placeholder="Ruby Red, Gold"
                    className="w-full border border-rose-200 rounded-xl px-3 py-2"
                  />
                </div>
              </div>

              {/* Bangle Photograph Upload & Live Preview */}
              <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block font-bold text-maroon-800 text-xs uppercase tracking-wider">
                    Bangle Photograph *
                  </label>
                  {isUploading && (
                    <span className="text-[10px] font-bold text-rose-600 animate-pulse">Uploading photo...</span>
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  {/* Live Thumbnail Preview */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-white border-2 border-rose-300 flex items-center justify-center shrink-0 shadow-sm relative">
                    {productForm.image ? (
                      <img src={productForm.image} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[9px] text-gray-400 font-bold text-center px-1">No Photo</span>
                    )}
                  </div>

                  <div className="flex-1 space-y-2">
                    <label className="cursor-pointer inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-maroon-800 hover:bg-maroon-700 text-white text-xs font-bold shadow transition">
                      <Icon name="Camera" className="w-4 h-4" />
                      <span>Upload Photo from Computer</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </label>
                    <p className="text-[10px] text-gray-500">Pick any photo from your phone or PC (JPG, PNG, WebP)</p>
                  </div>
                </div>

                {/* Quick Presets */}
                <div className="pt-2 border-t border-rose-100">
                  <span className="text-[10px] font-bold text-gray-600 block mb-1">Or Click to Use a Sample Photo:</span>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      type="button"
                      onClick={() => setProductForm({ ...productForm, image: '/assets/ruby_black_set.jpg' })}
                      className="text-[10px] bg-white border border-rose-200 px-2 py-1 rounded-lg text-gray-700 hover:border-maroon-800 font-medium"
                    >
                      Ruby Velvet Set (₹399)
                    </button>
                    <button
                      type="button"
                      onClick={() => setProductForm({ ...productForm, image: '/assets/royal_blue_bridal_set.jpg' })}
                      className="text-[10px] bg-white border border-rose-200 px-2 py-1 rounded-lg text-gray-700 hover:border-maroon-800 font-medium"
                    >
                      Royal Blue Bridal (₹850)
                    </button>
                    <button
                      type="button"
                      onClick={() => setProductForm({ ...productForm, image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80' })}
                      className="text-[10px] bg-white border border-rose-200 px-2 py-1 rounded-lg text-gray-700 hover:border-maroon-800 font-medium"
                    >
                      Silk Thread
                    </button>
                    <button
                      type="button"
                      onClick={() => setProductForm({ ...productForm, image: 'https://images.unsplash.com/photo-1611591475879-da0066ec79b0?auto=format&fit=crop&w=800&q=80' })}
                      className="text-[10px] bg-white border border-rose-200 px-2 py-1 rounded-lg text-gray-700 hover:border-maroon-800 font-medium"
                    >
                      Temple Gold
                    </button>
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    required
                    value={productForm.image}
                    onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                    placeholder="Or enter image URL (e.g. /assets/ruby_black_set.jpg or https://...)"
                    className="w-full border border-rose-200 rounded-xl px-3 py-1.5 font-mono text-[10px] bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Description</label>
                <textarea
                  rows="3"
                  value={productForm.description}
                  onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                  placeholder="Details of craftsmanship, stones, and occasion..."
                  className="w-full border border-rose-200 rounded-xl px-3 py-2"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-maroon-800 text-white font-bold rounded-xl shadow"
              >
                {editingProduct ? 'Update Bangle' : 'Publish to Store'}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

// --- SUB-COMPONENT: LEGAL POLICY PAGES ---
function LegalPolicyPages({ page, onBack }) {
  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms and Conditions',
    'return-refund': 'Return & Refund Policy',
    shipping: 'Shipping & Delivery Policy'
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button onClick={onBack} className="text-xs font-bold text-maroon-800 hover:underline mb-6 flex items-center space-x-1">
        <span>← Back to AHBangles Home</span>
      </button>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-rose-100 shadow-sm space-y-6 text-gray-700 text-xs sm:text-sm leading-relaxed">
        <h1 className="text-3xl font-serif font-black text-gray-900 border-b border-rose-50 pb-4">
          {titles[page]}
        </h1>

        {page === 'privacy' && (
          <div className="space-y-4">
            <p>At <strong>AHBangles</strong>, owned and operated by Sindhu Arun in Doddabommasandra, Bengaluru, we respect and safeguard the privacy of every visitor and customer.</p>
            <h4 className="font-bold text-gray-900 text-sm">1. Information We Collect</h4>
            <p>We collect customer name, shipping address, mobile phone number, and email strictly for processing your bangle orders, dispatching via courier partners, and sending WhatsApp status alerts.</p>
            <h4 className="font-bold text-gray-900 text-sm">2. Payment Security</h4>
            <p>All online transactions are processed through Razorpay's RBI-regulated secure servers. We never view or store debit/credit card numbers or UPI PINs on our servers.</p>
          </div>
        )}

        {page === 'terms' && (
          <div className="space-y-4">
            <p>By accessing or purchasing from <strong>AHBangles</strong>, you agree to these commercial terms.</p>
            <h4 className="font-bold text-gray-900 text-sm">1. Product Photography</h4>
            <p>We photograph actual bangles in natural and studio lighting. Slight differences in hue may occur due to individual mobile screen color balances.</p>
            <h4 className="font-bold text-gray-900 text-sm">2. Sizing Accuracy</h4>
            <p>Customers are advised to consult our Bangle Size Guide before placing orders. For any confusion, WhatsApp consultation with Sindhu Arun is available free of charge.</p>
          </div>
        )}

        {page === 'return-refund' && (
          <div className="space-y-4">
            <p>We stand behind the quality of every bangle created by <strong>Sindhu Arun</strong>.</p>
            <h4 className="font-bold text-gray-900 text-sm">1. 7-Day Hassle-Free Replacement</h4>
            <p>If you receive a bangle set with size mismatch or transit damage, simply notify us on WhatsApp (+91 8618836558) within 7 days of delivery with an unboxing video or photo.</p>
            <h4 className="font-bold text-gray-900 text-sm">2. Refund Processing</h4>
            <p>Approved refunds are processed back to your original UPI or bank payment method within 3 to 5 business days.</p>
          </div>
        )}

        {page === 'shipping' && (
          <div className="space-y-4">
            <p>We deliver handcrafted bangles across all Indian pin codes.</p>
            <h4 className="font-bold text-gray-900 text-sm">1. Shipping Charges</h4>
            <p><strong>FREE Shipping</strong> on all orders of ₹499 and above. A nominal charge of ₹49 applies for orders below ₹499.</p>
            <h4 className="font-bold text-gray-900 text-sm">2. Delivery Timelines</h4>
            <p>Bengaluru & Karnataka: 1 to 2 business days.<br />South India: 2 to 3 business days.<br />Rest of India: 3 to 5 business days via Blue Dart and Delhivery Express.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// --- RENDER REACT ROOT ---
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AHBanglesApp />);
