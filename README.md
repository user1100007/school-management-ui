## inventory

<html lang="km"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>តារាងសម្ភារ និងសង្ហារិម - ប្រព័ន្ធរួម</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        table { width:100%; border-collapse:collapse; margin-top:10px; font-family:Arial,sans-serif; }
        table, th, td { border:2px solid #ddd; }
        table td, table th { white-space:nowrap; }
        th, td { padding:1px 5px; line-height:1.0; text-align:left; }
        @media print { .no-print{display:none!important;} @page{margin:1cm;} }
        /* LOGIN */
        #login-screen{position:fixed;inset:0;background:linear-gradient(135deg,#0f2166,#1a56db,#7c3aed);display:flex;align-items:center;justify-content:center;z-index:9999;padding:16px;}
        .login-card{background:white;border-radius:20px;padding:28px 24px;width:100%;max-width:380px;box-shadow:0 24px 64px rgba(0,0,0,.3);}
        /* TOAST */
        #toast{position:fixed;bottom:18px;right:18px;background:#1e293b;color:white;padding:10px 16px;border-radius:10px;font-size:13px;font-weight:600;box-shadow:0 8px 28px rgba(0,0,0,.28);z-index:9999;display:none;align-items:center;gap:8px;max-width:calc(100vw - 36px);}
        #toast.show{display:flex;}
        #toast.ok{background:#10b981;}
        #toast.err{background:#ef4444;}
        .saving-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:#f59e0b;animation:pulse 1s infinite;}
        @keyframes pulse{0%,100%{opacity:1;}50%{opacity:.3;}}
    </style>
<style>*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/* ! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com */*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::after,::before{--tw-content:''}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:0.25rem}.mb-2{margin-bottom:0.5rem}.mb-3{margin-bottom:0.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mt-4{margin-top:1rem}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.min-h-screen{min-height:100vh}.w-full{width:100%}.min-w-\[200px\]{min-width:200px}.min-w-\[150px\]{min-width:150px}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.cursor-pointer{cursor:pointer}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr))}.grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.gap-2{gap:0.5rem}.gap-3{gap:0.75rem}.gap-4{gap:1rem}.overflow-x-auto{overflow-x:auto}.rounded{border-radius:0.25rem}.rounded-lg{border-radius:0.5rem}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-r{border-right-width:1px}.border-indigo-300{--tw-border-opacity:1;border-color:rgb(165 180 252 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.border-indigo-400{--tw-border-opacity:1;border-color:rgb(129 140 248 / var(--tw-border-opacity, 1))}.bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity, 1))}.bg-gray-400{--tw-bg-opacity:1;background-color:rgb(156 163 175 / var(--tw-bg-opacity, 1))}.bg-gray-600{--tw-bg-opacity:1;background-color:rgb(75 85 99 / var(--tw-bg-opacity, 1))}.bg-green-600{--tw-bg-opacity:1;background-color:rgb(22 163 74 / var(--tw-bg-opacity, 1))}.bg-indigo-600{--tw-bg-opacity:1;background-color:rgb(79 70 229 / var(--tw-bg-opacity, 1))}.bg-orange-600{--tw-bg-opacity:1;background-color:rgb(234 88 12 / var(--tw-bg-opacity, 1))}.bg-purple-600{--tw-bg-opacity:1;background-color:rgb(147 51 234 / var(--tw-bg-opacity, 1))}.bg-red-600{--tw-bg-opacity:1;background-color:rgb(220 38 38 / var(--tw-bg-opacity, 1))}.bg-teal-600{--tw-bg-opacity:1;background-color:rgb(13 148 136 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-yellow-600{--tw-bg-opacity:1;background-color:rgb(202 138 4 / var(--tw-bg-opacity, 1))}.bg-blue-50{--tw-bg-opacity:1;background-color:rgb(239 246 255 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-green-50{--tw-bg-opacity:1;background-color:rgb(240 253 244 / var(--tw-bg-opacity, 1))}.bg-indigo-50{--tw-bg-opacity:1;background-color:rgb(238 242 255 / var(--tw-bg-opacity, 1))}.bg-indigo-500{--tw-bg-opacity:1;background-color:rgb(99 102 241 / var(--tw-bg-opacity, 1))}.bg-red-50{--tw-bg-opacity:1;background-color:rgb(254 242 242 / var(--tw-bg-opacity, 1))}.bg-gradient-to-br{background-image:linear-gradient(to bottom right, var(--tw-gradient-stops))}.from-blue-50{--tw-gradient-from:#eff6ff var(--tw-gradient-from-position);--tw-gradient-to:rgb(239 246 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.to-indigo-100{--tw-gradient-to:#e0e7ff var(--tw-gradient-to-position)}.p-6{padding:1.5rem}.p-4{padding:1rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.py-1\.5{padding-top:0.375rem;padding-bottom:0.375rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-xs{font-size:0.75rem;line-height:1rem}.font-bold{font-weight:700}.font-semibold{font-weight:600}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-indigo-800{--tw-text-opacity:1;color:rgb(55 48 163 / var(--tw-text-opacity, 1))}.text-indigo-900{--tw-text-opacity:1;color:rgb(49 46 129 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-blue-900{--tw-text-opacity:1;color:rgb(30 58 138 / var(--tw-text-opacity, 1))}.text-green-900{--tw-text-opacity:1;color:rgb(20 83 45 / var(--tw-text-opacity, 1))}.text-red-900{--tw-text-opacity:1;color:rgb(127 29 29 / var(--tw-text-opacity, 1))}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.hover\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity, 1))}.hover\:bg-gray-500:hover{--tw-bg-opacity:1;background-color:rgb(107 114 128 / var(--tw-bg-opacity, 1))}.hover\:bg-gray-700:hover{--tw-bg-opacity:1;background-color:rgb(55 65 81 / var(--tw-bg-opacity, 1))}.hover\:bg-green-700:hover{--tw-bg-opacity:1;background-color:rgb(21 128 61 / var(--tw-bg-opacity, 1))}.hover\:bg-indigo-700:hover{--tw-bg-opacity:1;background-color:rgb(67 56 202 / var(--tw-bg-opacity, 1))}.hover\:bg-orange-700:hover{--tw-bg-opacity:1;background-color:rgb(194 65 12 / var(--tw-bg-opacity, 1))}.hover\:bg-purple-700:hover{--tw-bg-opacity:1;background-color:rgb(126 34 206 / var(--tw-bg-opacity, 1))}.hover\:bg-red-700:hover{--tw-bg-opacity:1;background-color:rgb(185 28 28 / var(--tw-bg-opacity, 1))}.hover\:bg-teal-700:hover{--tw-bg-opacity:1;background-color:rgb(15 118 110 / var(--tw-bg-opacity, 1))}.hover\:bg-yellow-700:hover{--tw-bg-opacity:1;background-color:rgb(161 98 7 / var(--tw-bg-opacity, 1))}.hover\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.focus\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.focus\:ring-indigo-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(99 102 241 / var(--tw-ring-opacity, 1))}@media (min-width: 768px){.md\:col-span-2{grid-column:span 2 / span 2}.md\:col-span-3{grid-column:span 3 / span 3}.md\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.md\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.md\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr))}}@media (min-width: 1024px){.lg\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}}</style></head>
<body class="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">

<!-- ══ LOGIN ══ -->

<div id="login-screen">
    <div class="login-card">
        <div style="text-align:center;margin-bottom:18px">
            <div style="width:48px;height:48px;background:linear-gradient(135deg,#1a56db,#7c3aed);border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;font-size:22px">📦</div>
            <div style="font-size:20px;font-weight:900;color:#1e3a8a">ប្រព័ន្ធគ្រប់គ្រងសម្ភារ</div>
            <div style="font-size:11px;color:#64748b">Inventory Management System</div>
        </div>
        <div id="auth-title" style="font-size:15px;font-weight:700;color:#1e293b;margin-bottom:14px;text-align:center">ចូលគណនី</div>

    <div id="login-form">
        <div style="margin-bottom:10px"><label style="font-size:11px;font-weight:700;color:#64748b;display:block;margin-bottom:4px;text-transform:uppercase">Email</label>
            <input id="l-email" type="email" placeholder="your@email.com" style="width:100%;padding:8px 10px;border:1.5px solid #e2e8f0;border-radius:8px;font-size:13px;outline:none;box-sizing:border-box"></div>
        <div style="margin-bottom:14px"><label style="font-size:11px;font-weight:700;color:#64748b;display:block;margin-bottom:4px;text-transform:uppercase">Password</label>
            <input id="l-pass" type="password" placeholder="••••••••" style="width:100%;padding:8px 10px;border:1.5px solid #e2e8f0;border-radius:8px;font-size:13px;outline:none;box-sizing:border-box" onkeydown="if(event.key==='Enter')doLogin()"></div>
        <button id="l-btn" onclick="doLogin()" style="width:100%;padding:10px;background:#1a56db;color:white;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer">🔑 ចូល</button>
    </div>

    <div id="register-form" style="display:none">
        <div style="margin-bottom:10px"><label style="font-size:11px;font-weight:700;color:#64748b;display:block;margin-bottom:4px;text-transform:uppercase">Email</label>
            <input id="r-email" type="email" placeholder="your@email.com" style="width:100%;padding:8px 10px;border:1.5px solid #e2e8f0;border-radius:8px;font-size:13px;outline:none;box-sizing:border-box"></div>
        <div style="margin-bottom:10px"><label style="font-size:11px;font-weight:700;color:#64748b;display:block;margin-bottom:4px;text-transform:uppercase">Password</label>
            <input id="r-pass" type="password" placeholder="អប្បបរមា 6 តួ" style="width:100%;padding:8px 10px;border:1.5px solid #e2e8f0;border-radius:8px;font-size:13px;outline:none;box-sizing:border-box"></div>
        <div style="margin-bottom:14px"><label style="font-size:11px;font-weight:700;color:#64748b;display:block;margin-bottom:4px;text-transform:uppercase">បញ្ជាក់ Password</label>
            <input id="r-pass2" type="password" placeholder="វាយម្ដងទៀត" style="width:100%;padding:8px 10px;border:1.5px solid #e2e8f0;border-radius:8px;font-size:13px;outline:none;box-sizing:border-box" onkeydown="if(event.key==='Enter')doRegister()"></div>
        <button onclick="doRegister()" style="width:100%;padding:10px;background:#1a56db;color:white;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer">📝 ចុះឈ្មោះ</button>
    </div>

    <div id="auth-switch" style="text-align:center;font-size:12px;color:#64748b;margin-top:12px">
        មិនមានគណនី? <a href="#" onclick="toggleAuth('register')" style="color:#1a56db;font-weight:700;text-decoration:none">ចុះឈ្មោះ</a>
    </div>
</div>


</div>

<!-- ══ TOAST ══ -->

<div id="toast"></div>

<!-- ══ MAIN APP ══ -->

<div id="app" style="display:none">

<!-- Top bar -->

<div class="no-print" style="background:linear-gradient(90deg,#0f2166,#1a56db);padding:10px 20px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100">
    <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:20px">📦</span>
        <div style="color:white;font-weight:900;font-size:15px">ប្រព័ន្ធគ្រប់គ្រងសម្ភារ</div>
        <span id="save-indicator" style="display:none"><span class="saving-dot"></span><span style="color:#fcd34d;font-size:11px">កំពុងរក្សាទុក...</span></span>
    </div>
    <div style="display:flex;align-items:center;gap:10px">
        <span id="top-email" style="color:rgba(255,255,255,.7);font-size:11px"></span>
        <button onclick="doLogout()" style="background:rgba(255,255,255,.15);color:white;border:1px solid rgba(255,255,255,.3);border-radius:7px;padding:5px 12px;font-size:12px;cursor:pointer">🚪 ចេញ</button>
    </div>
</div>

<div class="max-w-full mx-auto p-6">
    <!-- Header -->
    <div class="bg-white rounded-lg shadow-xl p-6 mb-6">
        <h1 class="text-lg font-bold text-indigo-900 mb-1">តារាងសម្ភារ និងសង្ហារិម</h1>
        <p class="text-gray-600 text-xs">ប្រព័ន្ធគ្រប់គ្រងសម្ភារបរិក្ខារពេញលេញ · Firebase Cloud Storage</p>
        <div class="mt-4 flex gap-3 no-print flex-wrap">
            <button onclick="switchSystem('warehouse')" id="btn-warehouse" class="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold text-xs">
                🏢 ប្រព័ន្ធឃ្លាំងផ្ទុក (សន្និធិដើម/ចូល/ចេញ)
            </button>
            <button onclick="switchSystem('simple')" id="btn-simple" class="px-3 py-1.5 bg-gray-400 text-white rounded-lg hover:bg-gray-500 font-semibold text-xs">
                📋 ប្រព័ន្ធធម្មតា (បញ្ជីសម្ភារ)
            </button>
        </div>
    </div>


<!-- System 1: Warehouse -->
<div id="warehouseSystem">
    <div class="bg-white rounded-lg shadow-xl p-6 mb-6">
        <h2 class="text-base font-bold text-indigo-800 mb-2">ប្រព័ន្ធគ្រប់គ្រងឃ្លាំងតាមកម្មវិធី</h2>
        <div class="mt-4 mb-4 no-print">
            <div class="flex gap-2 items-center mb-3 flex-wrap">
                <label class="font-semibold text-indigo-900 text-xs">ឃ្លាំង/កម្មវិធី:</label>
                <select id="warehouseSelect" onchange="switchWarehouse()" class="px-2 py-1 border border-indigo-300 rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 flex-1 min-w-[200px] text-xs"></select>
                <button onclick="showAddWarehouse()" class="px-2 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-xs">➕ បន្ថែមឃ្លាំង</button>
                <button onclick="editWarehouse()" class="px-2 py-1 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 text-xs">✏️ កែប្រែ</button>
                <button onclick="deleteWarehouse()" class="px-2 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 text-xs">🗑️ លុប</button>
            </div>
        </div>
        <div class="flex gap-2 mt-4 flex-wrap no-print">
            <button onclick="window.print()" class="px-2 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-xs">🖨️ បោះពុម្ព</button>
            <button onclick="downloadWarehouseJSON()" class="px-2 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-xs">⬇️ JSON</button>
            <button onclick="downloadWarehouseCSV()" class="px-2 py-1 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-xs">⬇️ CSV</button>
            <label class="px-2 py-1 bg-orange-600 text-white rounded-lg hover:bg-orange-700 cursor-pointer text-xs">
                ⬆️ នាំចូល JSON <input type="file" accept=".json" onchange="importWarehouseJSON(event)" class="hidden">
            </label>
            <button onclick="showWarehouseAddForm()" class="px-2 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-xs">➕ បន្ថែមសម្ភារ</button>
        </div>
    </div>

    <div id="warehouseFormContainer" class="bg-white rounded-lg shadow-lg p-6 mb-6 no-print hidden">
        <h3 class="text-sm font-bold mb-2" id="warehouseFormTitle">បន្ថែមឃ្លាំង/កម្មវិធីថ្មី</h3>
        <div class="grid gap-4">
            <div><label class="block font-semibold mb-1 text-xs">ឈ្មោះកម្មវិធី:</label><input type="text" id="warehouseName" placeholder="ឧ. កិច្ចដំណើរការរដ្ឋបាល" class="w-full px-2 py-1 border rounded text-xs"></div>
            <div><label class="block font-semibold mb-1 text-xs">លេខកូដសម្គាល់:</label><input type="text" id="warehouseCode" placeholder="ឧ. 60028" class="w-full px-2 py-1 border rounded text-xs"></div>
            <div class="flex gap-2">
                <button onclick="submitWarehouse()" class="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-xs">រក្សាទុក</button>
                <button onclick="cancelWarehouse()" class="px-2 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 text-xs">បោះបង់</button>
            </div>
        </div>
    </div>

    <div id="warehouseAddFormContainer" class="bg-white rounded-lg shadow-lg p-6 mb-6 no-print hidden">
        <h3 class="text-sm font-bold mb-2" id="warehouseItemFormTitle">បន្ថែមសម្ភារថ្មី</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="md:col-span-2"><label class="block font-semibold mb-1 text-xs">សម្ភារៈបរិក្ខារ ទំនិញតាមប្រភេទ ខ្នាតទំនិញ និងសញ្ញាសំគាល់:</label><textarea id="whInputDescription" placeholder="បរិយាយលម្អិត..." class="w-full px-2 py-1 border rounded text-xs" rows="2"></textarea></div>
            <div><label class="block font-semibold mb-1 text-xs">ឯកតាគិត:</label><input type="text" id="whInputUnit" placeholder="ឧ. កេស, កញ្ចប់, គ្រឿង..." class="w-full px-2 py-1 border rounded text-xs"></div>
            <div class="md:col-span-3 bg-blue-50 p-4 rounded">
                <h4 class="font-bold text-blue-900 mb-1 text-xs">សន្និធិដើមឆ្នាំ</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div><label class="block font-semibold mb-1 text-xs">ចំនួន:</label><input type="number" id="whInputOpeningQty" placeholder="0" class="w-full px-2 py-1 border rounded text-xs" value="0"></div>
                    <div><label class="block font-semibold mb-1 text-xs">តម្លៃរាយ (រៀល):</label><input type="text" id="whInputOpeningPrice" placeholder="0" class="w-full px-2 py-1 border rounded text-xs" value="0"></div>
                    <div><label class="block font-semibold mb-1 text-xs">តម្លៃសរុប (រៀល):</label><input type="text" id="whInputOpeningTotal" class="w-full px-2 py-1 border rounded bg-gray-100 text-xs" readonly=""></div>
                </div>
            </div>
            <div class="md:col-span-3 bg-green-50 p-4 rounded">
                <h4 class="font-bold text-green-900 mb-1 text-xs">សន្និធិចូលក្នុងឆ្នាំ</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div><label class="block font-semibold mb-1 text-xs">ចំនួន:</label><input type="number" id="whInputInQty" placeholder="0" class="w-full px-2 py-1 border rounded text-xs" value="0"></div>
                    <div><label class="block font-semibold mb-1 text-xs">តម្លៃរាយ (រៀល):</label><input type="text" id="whInputInPrice" placeholder="0" class="w-full px-2 py-1 border rounded text-xs" value="0"></div>
                    <div><label class="block font-semibold mb-1 text-xs">តម្លៃសរុប (រៀល):</label><input type="text" id="whInputInTotal" class="w-full px-2 py-1 border rounded bg-gray-100 text-xs" readonly=""></div>
                </div>
            </div>
            <div class="md:col-span-3 bg-red-50 p-4 rounded">
                <h4 class="font-bold text-red-900 mb-1 text-xs">សន្និធិចេញក្នុងឆ្នាំ</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div><label class="block font-semibold mb-1 text-xs">ចំនួន:</label><input type="number" id="whInputOutQty" placeholder="0" class="w-full px-2 py-1 border rounded text-xs" value="0"></div>
                    <div><label class="block font-semibold mb-1 text-xs">តម្លៃរាយ (រៀល):</label><input type="text" id="whInputOutPrice" placeholder="0" class="w-full px-2 py-1 border rounded text-xs" value="0"></div>
                    <div><label class="block font-semibold mb-1 text-xs">តម្លៃសរុប (រៀល):</label><input type="text" id="whInputOutTotal" class="w-full px-2 py-1 border rounded bg-gray-100 text-xs" readonly=""></div>
                </div>
            </div>
            <div class="md:col-span-3 flex gap-2">
                <button onclick="submitWarehouseItemForm()" class="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-xs">រក្សាទុក</button>
                <button onclick="cancelWarehouseItemForm()" class="px-2 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 text-xs">បោះបង់</button>
            </div>
        </div>
    </div>

    <div class="bg-white rounded-lg shadow-lg mb-6">
        <div class="p-6">
            <div id="currentWarehouseInfo" class="mb-4 p-4 bg-indigo-50 rounded-lg"></div>
            <div class="mb-4 no-print"><input type="text" id="whSearchInput" placeholder="🔍 ស្វែងរក..." onkeyup="filterWarehouseData()" class="w-full px-2 py-1 border border-gray-300 rounded-lg text-xs"></div>
            <div class="overflow-x-auto rounded-lg border border-gray-200">
                <table class="w-full text-sm" id="warehouseInventoryTable">
                    <thead class="bg-indigo-600 text-white">
                        <tr>
                            <th class="px-2 py-1 text-center border-r border-indigo-400 text-xs" rowspan="2">ល.រ</th>
                            <th class="px-2 py-1 text-left border-r border-indigo-400 text-xs" rowspan="2">សម្ភារៈបរិក្ខារ</th>
                            <th class="px-2 py-1 text-center border-r border-indigo-400 text-xs" rowspan="2">ឯកតាគិត</th>
                            <th class="px-2 py-1 text-center border-r border-indigo-400 text-xs" colspan="3">សន្និធិដើមឆ្នាំ</th>
                            <th class="px-2 py-1 text-center border-r border-indigo-400 text-xs" colspan="3">សន្និធិចូលក្នុងឆ្នាំ</th>
                            <th class="px-2 py-1 text-center border-r border-indigo-400 text-xs" colspan="3">សន្និធិចេញក្នុងឆ្នាំ</th>
                            <th class="px-2 py-1 text-center no-print text-xs" rowspan="2">សកម្មភាព</th>
                        </tr>
                        <tr class="bg-indigo-500">
                            <th class="px-2 py-1 text-center border-r border-indigo-400 text-xs">ចំនួន</th><th class="px-2 py-1 text-center border-r border-indigo-400 text-xs">តម្លៃរាយ(៛)</th><th class="px-2 py-1 text-center border-r border-indigo-400 text-xs">តម្លៃសរុប(៛)</th>
                            <th class="px-2 py-1 text-center border-r border-indigo-400 text-xs">ចំនួន</th><th class="px-2 py-1 text-center border-r border-indigo-400 text-xs">តម្លៃរាយ(៛)</th><th class="px-2 py-1 text-center border-r border-indigo-400 text-xs">តម្លៃសរុប(៛)</th>
                            <th class="px-2 py-1 text-center border-r border-indigo-400 text-xs">ចំនួន</th><th class="px-2 py-1 text-center border-r border-indigo-400 text-xs">តម្លៃរាយ(៛)</th><th class="px-2 py-1 text-center border-r border-indigo-400 text-xs">តម្លៃសរុប(៛)</th>
                        </tr>
                    </thead>
                    <tbody id="warehouseInventoryBody"></tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<!-- System 2: Simple -->
<div id="simpleSystem" class="hidden">
    <div class="bg-white rounded-lg shadow-xl p-6 mb-6">
        <h2 class="text-base font-bold text-indigo-800 mb-2">ប្រព័ន្ធគ្រប់គ្រងសម្ភារធម្មតា</h2>
        <div class="flex gap-2 mt-4 flex-wrap no-print">
            <button onclick="window.print()" class="px-2 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-xs">🖨️ បោះពុម្ព</button>
            <button onclick="downloadSimpleJSON()" class="px-2 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-xs">⬇️ JSON</button>
            <button onclick="downloadSimpleCSV()" class="px-2 py-1 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-xs">⬇️ CSV</button>
            <label class="px-2 py-1 bg-orange-600 text-white rounded-lg hover:bg-orange-700 cursor-pointer text-xs">
                ⬆️ នាំចូល JSON <input type="file" accept=".json" onchange="importSimpleJSON(event)" class="hidden">
            </label>
            <button onclick="showSimpleAddForm()" class="px-2 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-xs">➕ បន្ថែមថ្មី</button>
        </div>
    </div>

    <div id="simpleAddFormContainer" class="bg-white rounded-lg shadow-lg p-6 mb-6 no-print hidden">
        <h3 class="text-sm font-bold mb-2" id="simpleFormTitle">បន្ថែមថ្មី</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <select id="simpleInputType" class="px-3 py-2 border rounded"><option value="MOB">MOB</option><option value="MBU">MBU</option><option value="MIN">MIN</option></select>
            <input type="text" id="simpleInputDescription" placeholder="បរិយាយ" class="px-3 py-2 border rounded">
            <input type="number" id="simpleInputYear" placeholder="ឆ្នាំ" class="px-3 py-2 border rounded">
            <input type="text" id="simpleInputUser" placeholder="ឈ្មោះអ្នកប្រើ" class="px-3 py-2 border rounded">
            <input type="number" id="simpleInputQuantity" placeholder="បរិមាណ" class="px-3 py-2 border rounded">
            <input type="text" id="simpleInputPrice" placeholder="តម្លៃ" class="px-3 py-2 border rounded">
            <select id="simpleInputStatus" class="px-3 py-2 border rounded"><option value="ល្អ">ល្អ</option><option value="មធ្យម">មធ្យម</option><option value="អន់">អន់</option><option value="ខូច">ខូច</option></select>
            <div class="flex gap-2">
                <button onclick="submitSimpleForm()" class="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-xs">រក្សាទុក</button>
                <button onclick="cancelSimpleForm()" class="px-2 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 text-xs">បោះបង់</button>
            </div>
        </div>
    </div>

    <div class="bg-white rounded-lg shadow-lg mb-6">
        <div class="flex border-b no-print flex-wrap">
            <button onclick="switchSimpleTab('inventory')" id="simple-tab-inventory" class="px-3 py-2 font-semibold bg-indigo-600 text-white text-xs">📋 តារាងសម្ភារ និងសង្ហារិម</button>
            <button onclick="switchSimpleTab('yearly')" id="simple-tab-yearly" class="px-3 py-2 font-semibold text-gray-600 hover:bg-gray-50 text-xs">📈 តារាងសម្ភារកើនក្នុងឆ្នាំ</button>
            <button onclick="switchSimpleTab('tracking')" id="simple-tab-tracking" class="px-3 py-2 font-semibold text-gray-600 hover:bg-gray-50 text-xs">📊 តារាងតាមដាន</button>
        </div>
        <div class="p-6">
            <div id="simpleInventoryTab">
                <div class="mb-4 flex gap-4 no-print flex-wrap">
                    <input type="text" id="simpleSearchInput" placeholder="🔍 ស្វែងរក..." onkeyup="filterSimpleData()" class="flex-1 px-2 py-1 border border-gray-300 rounded-lg min-w-[150px] text-xs">
                    <select id="simpleYearFilter" onchange="filterSimpleData()" class="px-2 py-1 border border-gray-300 rounded-lg text-xs"><option value="all">ឆ្នាំទាំងអស់</option></select>
                </div>
                <div class="overflow-x-auto rounded-lg border border-gray-200">
                    <table class="w-full" id="simpleInventoryTable">
                        <thead class="bg-indigo-600 text-white">
                            <tr>
                                <th class="px-2 py-1 text-left text-xs">ល.រ</th><th class="px-2 py-1 text-left text-xs">តាមប្រភេទ</th><th class="px-2 py-1 text-left text-xs">បរិយាយ</th>
                                <th class="px-2 py-1 text-left text-xs">ប្រើប្រាស់ពីឆ្នាំ</th><th class="px-2 py-1 text-left text-xs">ឈ្មោះអ្នកប្រើ</th>
                                <th class="px-2 py-1 text-right text-xs">បរិមាណ</th><th class="px-2 py-1 text-right text-xs">តម្លៃ(រៀល)</th>
                                <th class="px-2 py-1 text-center text-xs">ស្ថានភាព</th><th class="px-2 py-1 text-center no-print text-xs">សកម្មភាព</th>
                            </tr>
                        </thead>
                        <tbody id="simpleInventoryBody"></tbody>
                    </table>
                </div>
            </div>
            <div id="simpleYearlyTab" class="hidden"></div>
            <div id="simpleTrackingTab" class="hidden"></div>
        </div>
    </div>
</div>


</div><!-- /max-w -->
</div><!-- /app -->

<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword }
    from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, setDoc, onSnapshot }
    from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🔥 Firebase Config (create-adf92)
const firebaseConfig = {
    apiKey: "AIzaSyDwYGbelzf1vVOaMmTPm63yDtsjTOGIxnU",
    authDomain: "create-adf92.firebaseapp.com",
    projectId: "create-adf92",
    storageBucket: "create-adf92.firebasestorage.app",
    messagingSenderId: "529723873139",
    appId: "1:529723873139:web:ee622f872ed9bb439a1706",
    measurementId: "G-EZ4JMN78EZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db_fire = getFirestore(app);

// ════ STATE ════
let currentSystem = 'warehouse';
let warehouses = {};
let currentWarehouseId = null;
let editingWarehouseId = null;
let editingWarehouseItemId = null;
let simpleEquipmentData = [];
let editingSimpleId = null;
let currentUser = null;
let unsubscribe = null;
let saveTimer = null;

// ════ DEFAULT DATA ════
const defaultWarehouses = {
    'wh1':{ id:'wh1', name:'I. កិច្ចដំណើរការរដ្ឋបាល', code:'60028', items:[
        {id:1,description:"កាវATM",unit:"ដប",opening:{qty:0,price:"8000"},in:{qty:13,price:"8000"},out:{qty:0,price:"8000"}},
        {id:2,description:"កាវបិតថ្លា ៥០មល",unit:"ដប",opening:{qty:0,price:"4000"},in:{qty:13,price:"4000"},out:{qty:0,price:"4000"}},
        {id:3,description:"កាវបិតថ្លា ៥០មល",unit:"ដប",opening:{qty:0,price:"3000"},in:{qty:20,price:"3000"},out:{qty:0,price:"3000"}},
        {id:4,description:"ក្រដាស excellent",unit:"ដុំ",opening:{qty:0,price:"18000"},in:{qty:7,price:"18000"},out:{qty:0,price:"18000"}},
        {id:5,description:"ក្រដាស statjet",unit:"ដុំ",opening:{qty:0,price:"19000"},in:{qty:4,price:"19000"},out:{qty:0,price:"19000"}},
        {id:6,description:"ក្រដាស statjet",unit:"ដុំ",opening:{qty:0,price:"19700"},in:{qty:2,price:"19700"},out:{qty:0,price:"19700"}},
        {id:7,description:"ក្រដាសរ៉ាមDoubble A",unit:"កេស",opening:{qty:0,price:"60000"},in:{qty:4,price:"60000"},out:{qty:0,price:"60000"}},
        {id:8,description:"ក្រដាសរ៉ាមDouble A",unit:"កេស",opening:{qty:0,price:"65000"},in:{qty:11,price:"65000"},out:{qty:0,price:"65000"}},
        {id:9,description:"ក្រូណូដាក់ឯកសារ ទំហំA4",unit:"ផ្ទាំង",opening:{qty:0,price:"15000"},in:{qty:1,price:"15000"},out:{qty:0,price:"15000"}},
        {id:10,description:"ក្រូណូដាក់ឯកសារ(៦)",unit:"ដុំ",opening:{qty:0,price:"70000"},in:{qty:1,price:"70000"},out:{qty:0,price:"70000"}},
        {id:11,description:"ក្រូណូដាក់ឯកសារ(៦)",unit:"ដុំ",opening:{qty:0,price:"63300"},in:{qty:1,price:"63300"},out:{qty:0,price:"63300"}},
        {id:12,description:"ឃ្នាបខ្មៅ 15mm",unit:"ប្រអប់",opening:{qty:0,price:"23500"},in:{qty:2,price:"23500"},out:{qty:0,price:"23500"}},
        {id:13,description:"ឃ្នាបខ្មៅ 15mm",unit:"ប្រអប់",opening:{qty:0,price:"8000"},in:{qty:4,price:"8000"},out:{qty:0,price:"8000"}},
        {id:14,description:"ជ័រថ្លាបិតរូបថត",unit:"ដប",opening:{qty:0,price:"2500"},in:{qty:4,price:"2500"},out:{qty:0,price:"2500"}},
        {id:15,description:"តាំប៉ុងGiraffe ពណ៍ក្រហម",unit:"ប្រអប់",opening:{qty:0,price:"8000"},in:{qty:4,price:"8000"},out:{qty:0,price:"8000"}},
        {id:16,description:"តារាងរដ្ឋបាល",unit:"ឈុត",opening:{qty:0,price:"36000"},in:{qty:2,price:"36000"},out:{qty:0,price:"36000"}},
        {id:17,description:"ទឹកត្រាGiraffe ពណ៍ក្រហម",unit:"ដប",opening:{qty:0,price:"5000"},in:{qty:2,price:"5000"},out:{qty:0,price:"5000"}},
        {id:18,description:"ទឹកហ្វឺត ជីរ៉ាហ្វ (ខៀវ)",unit:"ដុំ",opening:{qty:0,price:"55000"},in:{qty:7,price:"55000"},out:{qty:0,price:"55000"}},
        {id:19,description:"ទឹកហ្វឺតជីរ៉ាហ្វ",unit:"ដុំ",opening:{qty:0,price:"25000"},in:{qty:2,price:"25000"},out:{qty:0,price:"25000"}},
        {id:20,description:"បញ្ជីស្រង់ពិន្ទុ",unit:"ក្បាល",opening:{qty:0,price:"3500"},in:{qty:12,price:"3500"},out:{qty:0,price:"3500"}},
        {id:21,description:"បញ្ជីហៅឈ្មោះសិស្ស",unit:"ក្បាល",opening:{qty:0,price:"3500"},in:{qty:12,price:"3500"},out:{qty:0,price:"3500"}},
        {id:22,description:"ប៊ិកក្រហមម៉ាកជីរ៉ាហ្វ",unit:"ប្រអប់",opening:{qty:0,price:"25000"},in:{qty:1,price:"25000"},out:{qty:0,price:"25000"}},
        {id:23,description:"ប៊ិកខៀវម៉ាកជីរ៉ាហ្វ",unit:"ប្រអប់",opening:{qty:0,price:"25000"},in:{qty:1,price:"25000"},out:{qty:0,price:"25000"}},
        {id:24,description:"ប្រដាប់ចោះរន្ធពីរ",unit:"ប្រអប់",opening:{qty:0,price:"30000"},in:{qty:1,price:"30000"},out:{qty:0,price:"30000"}},
        {id:25,description:"សឺមីកិបឡេវ ទំហំA4",unit:"សន្លឹក",opening:{qty:0,price:"2000"},in:{qty:10,price:"2000"},out:{qty:0,price:"2000"}},
        {id:26,description:"សឺមីក្រដាស ទំហំA4",unit:"សន្លឹក",opening:{qty:0,price:"2500"},in:{qty:22,price:"2500"},out:{qty:0,price:"2500"}},
        {id:27,description:"សៀវភៅតាមដានការសិក្សា",unit:"ដុំ",opening:{qty:0,price:"26500"},in:{qty:1,price:"26500"},out:{qty:0,price:"26500"}},
        {id:28,description:"សៀវភៅសិក្ខាគារិក",unit:"ដុំ",opening:{qty:0,price:"26500"},in:{qty:1,price:"26500"},out:{qty:0,price:"26500"}},
        {id:29,description:"ហ្វឺតPILOT",unit:"ប្រអប់",opening:{qty:0,price:"28000"},in:{qty:1,price:"28000"},out:{qty:0,price:"28000"}}
    ]},
    'wh2':{ id:'wh2', name:'II. អប់រំបំណិនជីវិត កីឡា ការងារយុវជន និងកុមារ', code:'60058', items:[
        {id:1,description:"ថង់ខ្មៅ",unit:"ដុំ",opening:{qty:0,price:"12500"},in:{qty:4,price:"12500"},out:{qty:0,price:"12500"}},
        {id:2,description:"បាល់ទះ Mikasa",unit:"គ្រាប់",opening:{qty:0,price:"60000"},in:{qty:1,price:"60000"},out:{qty:0,price:"60000"}},
        {id:3,description:"បាល់ទះMikasa",unit:"គ្រាប់",opening:{qty:0,price:"60000"},in:{qty:2,price:"60000"},out:{qty:0,price:"60000"}},
        {id:4,description:"បាល់ទាត់ Mikasa",unit:"គ្រាប់",opening:{qty:0,price:"60000"},in:{qty:4,price:"60000"},out:{qty:0,price:"60000"}},
        {id:5,description:"បាល់ទាត់Mikasa",unit:"គ្រាប់",opening:{qty:0,price:"60000"},in:{qty:2,price:"60000"},out:{qty:0,price:"60000"}},
        {id:6,description:"ម៉ាស់",unit:"ដុំ",opening:{qty:0,price:"5000"},in:{qty:29,price:"5000"},out:{qty:0,price:"5000"}},
        {id:7,description:"សំណាញ់បាល់ទាត់",unit:"គូ",opening:{qty:0,price:"100500"},in:{qty:1,price:"100500"},out:{qty:0,price:"100500"}},
        {id:8,description:"អាល់កុល",unit:"ដប",opening:{qty:0,price:"5500"},in:{qty:1,price:"5500"},out:{qty:0,price:"5500"}},
        {id:9,description:"អាល់កុល៥០០ml",unit:"ដប",opening:{qty:0,price:"6000"},in:{qty:1,price:"6000"},out:{qty:0,price:"6000"}}
    ]},
    'wh3':{ id:'wh3', name:'III. សម្ភារៈរៀន និងបង្រៀន', code:'60058', items:[
        {id:1,description:"Color ផាត់រូបភាព",unit:"ដុំ",opening:{qty:0,price:"15000"},in:{qty:2,price:"15000"},out:{qty:0,price:"15000"}},
        {id:2,description:"កងបង្វិល",unit:"ឈុត",opening:{qty:0,price:"8000"},in:{qty:12,price:"8000"},out:{qty:0,price:"8000"}},
        {id:3,description:"កន្រ្តៃ",unit:"ដើម",opening:{qty:0,price:"3500"},in:{qty:20,price:"3500"},out:{qty:0,price:"3500"}},
        {id:4,description:"កន្រ្តៃ",unit:"ដើម",opening:{qty:0,price:"4000"},in:{qty:10,price:"4000"},out:{qty:0,price:"4000"}},
        {id:5,description:"កាវបិតថ្លា ៥០មល",unit:"ដប",opening:{qty:0,price:"5000"},in:{qty:14,price:"5000"},out:{qty:0,price:"5000"}},
        {id:6,description:"កូនបាល់",unit:"គ្រាប់",opening:{qty:0,price:"500000"},in:{qty:50,price:"500000"},out:{qty:0,price:"500000"}},
        {id:7,description:"ក្តារចំនួន0ដល់២០",unit:"ផ្ទាំង",opening:{qty:0,price:"4000"},in:{qty:10,price:"4000"},out:{qty:0,price:"4000"}},
        {id:8,description:"ក្តារព្យញ្ជនៈ៣៣តួ",unit:"ផ្ទាំង",opening:{qty:0,price:"4000"},in:{qty:20,price:"4000"},out:{qty:0,price:"4000"}},
        {id:9,description:"ក្រដាសកាតុង",unit:"សន្លឹក",opening:{qty:0,price:"1000"},in:{qty:207,price:"1000"},out:{qty:0,price:"1000"}},
        {id:10,description:"ក្រដាសកាតុង",unit:"ដុំ",opening:{qty:0,price:"54000"},in:{qty:1,price:"54000"},out:{qty:0,price:"54000"}},
        {id:11,description:"ក្រដាសផ្ទាំងធំ",unit:"សន្លឹក",opening:{qty:0,price:"500000"},in:{qty:266,price:"500000"},out:{qty:0,price:"500000"}},
        {id:12,description:"ក្រដាសពណ៌A4",unit:"កេស",opening:{qty:0,price:"60000"},in:{qty:1,price:"60000"},out:{qty:0,price:"60000"}},
        {id:13,description:"ក្រដាសពណ៌A4",unit:"ដំុ",opening:{qty:0,price:"15000"},in:{qty:5,price:"15000"},out:{qty:0,price:"15000"}},
        {id:14,description:"ក្រដាសរ៉ាមDouble A",unit:"កេស",opening:{qty:0,price:"60000"},in:{qty:2,price:"60000"},out:{qty:0,price:"60000"}},
        {id:15,description:"ក្រដាសរ៉ាមDouble A",unit:"ដុំ",opening:{qty:0,price:"15000"},in:{qty:4,price:"15000"},out:{qty:0,price:"15000"}}
    ]},
    'wh4':{ id:'wh4', name:'IV. ការកែលម្អបរិស្ថាន និងទីធ្លាកម្សាន្ត', code:'61058', items:[
        {id:1,description:"កែងទុយោមុខពីរ(27Cm)",unit:"គ្រាប់",opening:{qty:0,price:"10000"},in:{qty:6,price:"10000"},out:{qty:0,price:"10000"}},
        {id:2,description:"ខ្វែវ",unit:"ដើម",opening:{qty:0,price:"40000"},in:{qty:1,price:"40000"},out:{qty:0,price:"40000"}},
        {id:3,description:"ខ្វែវ",unit:"ដើម",opening:{qty:0,price:"43300"},in:{qty:1,price:"43300"},out:{qty:0,price:"43300"}},
        {id:4,description:"ចបកាប់",unit:"ដើម",opening:{qty:0,price:"40000"},in:{qty:10,price:"40000"},out:{qty:0,price:"40000"}},
        {id:5,description:"ចបជីក",unit:"ដើម",opening:{qty:0,price:"40000"},in:{qty:6,price:"40000"},out:{qty:0,price:"40000"}}
    ]},
    'wh5':{ id:'wh5', name:'V. ការថែទាំ និងជួសជុលផ្សេងៗ', code:'61068', items:[
        {id:1,description:"Keyboad",unit:"ឈុត",opening:{qty:0,price:"120000"},in:{qty:2,price:"120000"},out:{qty:0,price:"120000"}},
        {id:2,description:"Mouse Bluetooth",unit:"ឈុត",opening:{qty:0,price:"50000"},in:{qty:1,price:"50000"},out:{qty:0,price:"50000"}},
        {id:3,description:"SSD Hardrive",unit:"គ្រាប់",opening:{qty:0,price:"193000"},in:{qty:1,price:"193000"},out:{qty:0,price:"193000"}},
        {id:4,description:"USB Connect Wifi",unit:"គ្រាប់",opening:{qty:0,price:"45000"},in:{qty:1,price:"45000"},out:{qty:0,price:"45000"}},
        {id:5,description:"ដុំទឹកថ្នាំPrinter",unit:"ឈុត",opening:{qty:0,price:"106000"},in:{qty:1,price:"106000"},out:{qty:0,price:"106000"}}
    ]},
    'wh6':{ id:'wh6', name:'VI. ការចូលរៀនដោយសមធម៌និងបង្ការសិស្សបោះបង់', code:'61108', items:[
        {id:1,description:"ប្រដាប់កិបក្រដាសម៉ាក Kangaro",unit:"ប្រអប់",opening:{qty:0,price:"40000"},in:{qty:7,price:"40000"},out:{qty:0,price:"40000"}},
        {id:2,description:"ស្គុតក្រដាស",unit:"ដុំ",opening:{qty:0,price:"8600"},in:{qty:1,price:"8600"},out:{qty:0,price:"8600"}},
        {id:3,description:"ស្គុតថ្លា",unit:"ដុំ",opening:{qty:0,price:"5000"},in:{qty:61,price:"5000"},out:{qty:0,price:"5000"}},
        {id:4,description:"ហ្វឺត Highlight ម៉ាកជីរ៉ាហ្វ",unit:"ដើម",opening:{qty:0,price:"2000"},in:{qty:20,price:"2000"},out:{qty:0,price:"2000"}},
        {id:5,description:"ហ្វឺតHighLight ជីរ៉ាហ្វ",unit:"ដើម",opening:{qty:0,price:"2500"},in:{qty:4,price:"2500"},out:{qty:0,price:"2500"}}
    ]}
};

const defaultSimpleData = [
    {id:1,type:"MOB",description:"ធុងដែក",year:1998,user:"ក្នុងស្រុក",quantity:1,price:"1,200,000",status:"ខូច"},
    {id:2,type:"MOB",description:"តុសិស្ស៤បង្កុយ(ឈើ)",year:1999,user:"ក្នុងស្រុក",quantity:9,price:"900,000",status:"ខូច"},
    {id:3,type:"MOB",description:"កៅអីគ្រូ",year:2000,user:"ក្នុងស្រុក",quantity:6,price:"640,000",status:"អន់"},
    {id:4,type:"MOB",description:"តុសិស្ស២បង្កុយ(ឈើ)",year:2000,user:"ក្នុងស្រុក",quantity:85,price:"7,480,000",status:"ខូច"},
    {id:5,type:"MOB",description:"ក្ដារខៀនដីស",year:2000,user:"ក្នុងស្រុក",quantity:4,price:"400,000",status:"អន់"},
    {id:6,type:"MOB",description:"ក្ដារខៀនហ្វឺត",year:2000,user:"ក្នុងស្រុក",quantity:1,price:"250,000",status:"ខូច"},
    {id:7,type:"MOB",description:"ទូកញ្ចក់",year:2004,user:"ក្នុងស្រុក",quantity:1,price:"250,000",status:"ខូច"},
    {id:8,type:"MOB",description:"ហិបដែក",year:2010,user:"ក្នុងស្រុក",quantity:1,price:"200,000",status:"អន់"},
    {id:9,type:"MOB",description:"ធ្នើដាក់សៀវភៅធំ",year:2010,user:"ក្នុងស្រុក",quantity:1,price:"200,000",status:"មធ្យម"},
    {id:10,type:"MOB",description:"តុសិស្ស២បង្កុយ(ឈើ)",year:2013,user:"ក្នុងស្រុក",quantity:20,price:"1,400,000",status:"អន់"},
    {id:11,type:"MOB",description:"តុសិស្ស២បង្កុយ(ឈើ)",year:2013,user:"ក្នុងស្រុក",quantity:95,price:"40,679,000",status:"អន់"},
    {id:12,type:"MOB",description:"តុអាន(ដែក)",year:2013,user:"ក្នុងស្រុក",quantity:5,price:"2,848,000",status:"មធ្យម"},
    {id:13,type:"MOB",description:"ធ្នើមុខមួយ",year:2013,user:"ក្នុងស្រុក",quantity:2,price:"2,377,400",status:"មធ្យម"},
    {id:14,type:"MOB",description:"ក្ដារខៀនព័ត៌មាន",year:2016,user:"SOF",quantity:2,price:"160,000",status:"មធ្យម"},
    {id:15,type:"MOB",description:"កៅអីជ័រធុនតូច",year:2017,user:"W.V.S",quantity:31,price:"192,000",status:"ខូច"},
    {id:16,type:"MOB",description:"តុអាន(ដែក)",year:2017,user:"មន្ទីរអប់រំ",quantity:12,price:"576,000",status:"ខូច"},
    {id:17,type:"MBU",description:"ម៉ាស៊ីនព្រីន Epson L360",year:2018,user:"សប្បុសជន",quantity:1,price:"1,200,000",status:"ខូច"},
    {id:18,type:"MBU",description:"កង្ហារភ្ជាប់ពិដាន",year:2018,user:"មន្ទីរអប់រំ",quantity:12,price:"960,000",status:"អន់"},
    {id:19,type:"MOB",description:"តុសម្រាប់គ្រូ",year:2018,user:"មន្ទីរអប់រំ",quantity:6,price:"1,800,000",status:"មធ្យម"},
    {id:20,type:"MOB",description:"តុសិស្ស២បង្កុយ(ដែក)",year:2018,user:"ក្រសួងអប់រំ",quantity:145,price:"60,900,000",status:"មធ្យម"},
    {id:21,type:"MOB",description:"ទោងរំអិល",year:2018,user:"មន្ទីរអប់រំ",quantity:3,price:"1,080,000",status:"មធ្យម"},
    {id:22,type:"MOB",description:"ក្ដារខៀនហ្វឺត",year:2018,user:"មន្ទីរអប់រំ",quantity:18,price:"4,500,000",status:"មធ្យម"},
    {id:23,type:"MIN",description:"កុំព្យូទ័រយួរដៃ Asus",year:2019,user:"ក្រសួងអប់រំ",quantity:1,price:"2,713,500",status:"ខូច"},
    {id:24,type:"MOB",description:"ក្ដាររំអិល",year:2019,user:"W.V.S",quantity:4,price:"1,600,000",status:"មធ្យម"},
    {id:25,type:"MOB",description:"ជណ្ដើរស្វា",year:2019,user:"W.V.S",quantity:3,price:"1,584,000",status:"មធ្យម"},
    {id:26,type:"MOB",description:"ម៉ាស៊ីនព្រីនHP",year:2019,user:"ក្រសួងអប់រំ",quantity:1,price:"1,336,500",status:"ខូច"},
    {id:27,type:"MOB",description:"តុតឿ",year:2020,user:"W.V.S",quantity:6,price:"100,000",status:"ល្អ"},
    {id:28,type:"MOB",description:"ដែកតោង",year:2020,user:"W.V.S",quantity:3,price:"200,000",status:"មធ្យម"},
    {id:29,type:"MOB",description:"ទូដាក់កញ្ចក់ដាក់ឯកសារ",year:2020,user:"W.V.S",quantity:1,price:"750,000",status:"ល្អ"},
    {id:30,type:"MOB",description:"ធ្នើដាក់សៀវភៅតាមថ្នាក់",year:2020,user:"W.V.S",quantity:1,price:"60,000",status:"ល្អ"},
    {id:31,type:"MOB",description:"ធ្នើដាក់សៀវភៅតូច",year:2020,user:"W.V.S",quantity:5,price:"40,000",status:"ល្អ"},
    {id:32,type:"MOB",description:"ធ្នើមុខពីរ",year:2020,user:"W.V.S",quantity:3,price:"70,000",status:"ល្អ"},
    {id:33,type:"MOB",description:"ធ្នើមុខមួយ",year:2020,user:"W.V.S",quantity:4,price:"50,000",status:"ល្អ"},
    {id:34,type:"MIN",description:"កុំព្យូទ័រយួរដៃ Acer",year:2021,user:"SOF",quantity:1,price:"2,800,000",status:"មធ្យម"},
    {id:35,type:"MOB",description:"កៅអីគ្រូ",year:2021,user:"មន្ទីរអប់រំ",quantity:6,price:"720,000",status:"មធ្យម"},
    {id:36,type:"MOB",description:"តុគ្រូ(ដែក)",year:2021,user:"មន្ទីរអប់រំ",quantity:6,price:"100,000",status:"ល្អ"},
    {id:37,type:"MOB",description:"តុវែង",year:2021,user:"មន្ទីរអប់រំ",quantity:3,price:"200,000",status:"មធ្យម"},
    {id:38,type:"MBU",description:"ម៉ាស៊ីនព្រីន Epson L3210",year:2022,user:"SOF",quantity:1,price:"800,000",status:"ខូច"},
    {id:39,type:"MBU",description:"កង្ហារភ្ជាប់ជញ្ជាំង",year:2023,user:"SOF",quantity:4,price:"250,000",status:"មធ្យម"},
    {id:40,type:"MBU",description:"កុំព្យូទ័រលើតុ Desktop",year:2023,user:"សប្បុសជន",quantity:1,price:"1,800,000",status:"មធ្យម"},
    {id:41,type:"MBU",description:"ម៉ាស៊ីនព្រីន Canon",year:2023,user:"សប្បុសជន",quantity:1,price:"1,100,000",status:"មធ្យម"},
    {id:42,type:"MBU",description:"ម៉ូទ័របូមទឹក",year:2023,user:"SOF",quantity:1,price:"400,000",status:"មធ្យម"},
    {id:43,type:"MBU",description:"Speaker",year:2024,user:"សប្បុរសជន",quantity:1,price:"800,000",status:"មធ្យម"},
    {id:44,type:"MBU",description:"Micro sound (តូច)",year:2024,user:"SOF",quantity:1,price:"60,000",status:"មធ្យម"},
    {id:45,type:"MBU",description:"កង្ហារភ្ជាប់ជញ្ជាំង(ធំ)",year:2024,user:"SOF",quantity:1,price:"240,000",status:"ខូច"},
    {id:46,type:"MIN",description:"ម៉ាស៊ីនព្រីន Color",year:2025,user:"សប្បុរសជន",quantity:1,price:"1,000,000",status:"ល្អ"},
    {id:47,type:"MIN",description:"ម៉ាស៊ីនព្រីន Black white",year:2025,user:"សប្បុរសជន",quantity:1,price:"1,500,000",status:"មធ្យម"},
    {id:48,type:"MBU",description:"ម៉ូទ័រកាត់ផ្កា",year:2025,user:"SOF",quantity:1,price:"500,000",status:"មធ្យម"}
];

// ════ TOAST ════
function toast(msg, type='ok') {
    const t = document.getElementById('toast');
    t.innerHTML = (type==='ok'?'✅ ':'❌ ') + msg;
    t.className = 'show ' + type;
    setTimeout(()=>t.className='', 3000);
}

// ════ AUTH ════
onAuthStateChanged(auth, user => {
    if(user) {
        currentUser = user;
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        document.getElementById('top-email').textContent = user.email;
        listenData();
    } else {
        currentUser = null;
        document.getElementById('login-screen').style.display = 'flex';
        document.getElementById('app').style.display = 'none';
        if(unsubscribe){unsubscribe();unsubscribe=null;}
    }
});

window.doLogin = async function() {
    const email = document.getElementById('l-email').value.trim();
    const pass  = document.getElementById('l-pass').value;
    if(!email||!pass){toast('សូមបំពេញ Email និង Password!','err');return;}
    const btn = document.getElementById('l-btn');
    btn.disabled=true; btn.textContent='⏳ កំពុង...';
    try { await signInWithEmailAndPassword(auth,email,pass); }
    catch(e) {
        const msg = e.code==='auth/invalid-credential'?'Email ឬ Password មិនត្រឹមត្រូវ!':e.message;
        toast(msg,'err');
    }
    btn.disabled=false; btn.textContent='🔑 ចូល';
}

window.doRegister = async function() {
    const email=document.getElementById('r-email').value.trim();
    const pass=document.getElementById('r-pass').value;
    const pass2=document.getElementById('r-pass2').value;
    if(!email||!pass){toast('សូមបំពេញ!','err');return;}
    if(pass!==pass2){toast('Password មិនដូចគ្នា!','err');return;}
    if(pass.length<6){toast('Password ត្រូវតែ 6 តួ!','err');return;}
    try {
        await createUserWithEmailAndPassword(auth,email,pass);
        toast('បានចុះឈ្មោះ! សូមចូល App');
        toggleAuth('login');
    } catch(e) {
        toast(e.code==='auth/email-already-in-use'?'Email នេះប្រើរួចហើយ!':e.message,'err');
    }
}

window.doLogout = async function() {
    if(unsubscribe){unsubscribe();unsubscribe=null;}
    await signOut(auth);
}

window.toggleAuth = function(mode) {
    document.getElementById('login-form').style.display    = mode==='login'?'block':'none';
    document.getElementById('register-form').style.display = mode==='register'?'block':'none';
    document.getElementById('auth-title').textContent = mode==='login'?'ចូលគណនី':'ចុះឈ្មោះ';
    document.getElementById('auth-switch').innerHTML = mode==='login'
        ? 'មិនមានគណនី? <a href="#" onclick="toggleAuth(\'register\')" style="color:#1a56db;font-weight:700;text-decoration:none">ចុះឈ្មោះ</a>'
        : 'មានគណនីហើយ? <a href="#" onclick="toggleAuth(\'login\')" style="color:#1a56db;font-weight:700;text-decoration:none">ចូល</a>';
}

// ════ FIRESTORE REALTIME ════
function listenData() {
    if(unsubscribe) unsubscribe();
    const ref = doc(db_fire,'inventory', currentUser.uid);
    unsubscribe = onSnapshot(ref, snap => {
        if(snap.exists()) {
            const d = snap.data();
            warehouses = d.warehouses || defaultWarehouses;
            simpleEquipmentData = d.simpleEquipmentData || defaultSimpleData;
        } else {
            warehouses = JSON.parse(JSON.stringify(defaultWarehouses));
            simpleEquipmentData = JSON.parse(JSON.stringify(defaultSimpleData));
        }
        if(!currentWarehouseId || !warehouses[currentWarehouseId]) {
            currentWarehouseId = Object.keys(warehouses)[0];
        }
        updateWarehouseSelect();
        renderWarehouseInventory();
        updateCurrentWarehouseInfo();
        updateSimpleYearFilter();
        renderSimpleInventory();
    }, err => toast('Firebase: ' + err.message, 'err'));
}

// Auto-save with debounce (2s)
function scheduleSave() {
    document.getElementById('save-indicator').style.display = 'flex';
    clearTimeout(saveTimer);
    saveTimer = setTimeout(async ()=>{
        if(!currentUser) return;
        try {
            await setDoc(doc(db_fire,'inventory',currentUser.uid), {warehouses, simpleEquipmentData});
            document.getElementById('save-indicator').style.display = 'none';
        } catch(e) { toast('រក្សាទុកបានបរាជ័យ!','err'); }
    }, 2000);
}

// ════ SYSTEM SWITCH ════
window.switchSystem = function(system) {
    currentSystem = system;
    if(system==='warehouse') {
        document.getElementById('warehouseSystem').classList.remove('hidden');
        document.getElementById('simpleSystem').classList.add('hidden');
        document.getElementById('btn-warehouse').className='px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold text-xs';
        document.getElementById('btn-simple').className='px-3 py-1.5 bg-gray-400 text-white rounded-lg hover:bg-gray-500 font-semibold text-xs';
    } else {
        document.getElementById('warehouseSystem').classList.add('hidden');
        document.getElementById('simpleSystem').classList.remove('hidden');
        document.getElementById('btn-warehouse').className='px-3 py-1.5 bg-gray-400 text-white rounded-lg hover:bg-gray-500 font-semibold text-xs';
        document.getElementById('btn-simple').className='px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold text-xs';
    }
}

// ════ WAREHOUSE ════
function setupWarehouseCalculators() {
    ['Opening','In','Out'].forEach(type => {
        const qEl=document.getElementById('whInput'+type+'Qty');
        const pEl=document.getElementById('whInput'+type+'Price');
        if(qEl&&pEl){
            qEl.addEventListener('input',()=>calcWhTotal(type));
            pEl.addEventListener('input',()=>calcWhTotal(type));
        }
    });
}
function calcWhTotal(type) {
    const qty=parseFloat(document.getElementById('whInput'+type+'Qty').value)||0;
    const price=parseFloat(document.getElementById('whInput'+type+'Price').value.replace(/,/g,''))||0;
    document.getElementById('whInput'+type+'Total').value=(qty*price).toLocaleString();
}

function updateCurrentWarehouseInfo() {
    const wh=warehouses[currentWarehouseId];
    if(wh) document.getElementById('currentWarehouseInfo').innerHTML=`
        <div class="flex justify-between items-center flex-wrap gap-2">
            <div><h3 class="text-xl font-bold text-indigo-900">${wh.name}</h3><p class="text-gray-600 text-xs">លេខកូដ: <span class="font-semibold">${wh.code}</span></p></div>
            <div class="text-right"><p class="text-sm text-gray-600">ចំនួនសម្ភារ: <span class="font-bold text-indigo-900">${wh.items.length}</span></p></div>
        </div>`;
}

function updateWarehouseSelect() {
    const sel=document.getElementById('warehouseSelect');
    sel.innerHTML='';
    Object.values(warehouses).forEach(wh=>{
        const o=document.createElement('option');
        o.value=wh.id; o.textContent=`${wh.name} (${wh.code})`;
        if(wh.id===currentWarehouseId) o.selected=true;
        sel.appendChild(o);
    });
}

window.switchWarehouse = function() {
    currentWarehouseId=document.getElementById('warehouseSelect').value;
    renderWarehouseInventory(); updateCurrentWarehouseInfo();
}

window.showAddWarehouse = function() {
    editingWarehouseId=null;
    document.getElementById('warehouseFormTitle').textContent='បន្ថែមឃ្លាំង/កម្មវិធីថ្មី';
    document.getElementById('warehouseName').value=''; document.getElementById('warehouseCode').value='';
    document.getElementById('warehouseFormContainer').classList.remove('hidden');
}
window.editWarehouse = function() {
    const wh=warehouses[currentWarehouseId];
    if(wh){editingWarehouseId=currentWarehouseId;document.getElementById('warehouseFormTitle').textContent='កែប្រែ';document.getElementById('warehouseName').value=wh.name;document.getElementById('warehouseCode').value=wh.code;document.getElementById('warehouseFormContainer').classList.remove('hidden');}
}
window.cancelWarehouse = function() { document.getElementById('warehouseFormContainer').classList.add('hidden'); editingWarehouseId=null; }
window.submitWarehouse = function() {
    const name=document.getElementById('warehouseName').value.trim();
    const code=document.getElementById('warehouseCode').value.trim();
    if(!name||!code){toast('សូមបំពេញ!','err');return;}
    if(editingWarehouseId){warehouses[editingWarehouseId].name=name;warehouses[editingWarehouseId].code=code;}
    else{const id='wh'+Date.now();warehouses[id]={id,name,code,items:[]};currentWarehouseId=id;}
    updateWarehouseSelect(); updateCurrentWarehouseInfo(); cancelWarehouse(); scheduleSave(); toast('បានរក្សាទុក!');
}
window.deleteWarehouse = function() {
    if(Object.keys(warehouses).length<=1){toast('ត្រូវមានយ៉ាងតិច ១ ឃ្លាំង!','err');return;}
    const wh=warehouses[currentWarehouseId];
    if(confirm('លុប "'+wh.name+'" ?')){
        delete warehouses[currentWarehouseId];
        currentWarehouseId=Object.keys(warehouses)[0];
        updateWarehouseSelect(); renderWarehouseInventory(); updateCurrentWarehouseInfo(); scheduleSave(); toast('បានលុប!');
    }
}

function getCurrentWarehouseData(){return warehouses[currentWarehouseId]?.items||[];}
function setCurrentWarehouseData(data){if(warehouses[currentWarehouseId])warehouses[currentWarehouseId].items=data;}

function renderWarehouseInventory() {
    const q=document.getElementById('whSearchInput').value.toLowerCase();
    const data=getCurrentWarehouseData();
    const filtered=data.filter(i=>i.description.toLowerCase().includes(q));
    let html='';
    let tot={oQ:0,oT:0,iQ:0,iT:0,xQ:0,xT:0};
    filtered.forEach((item,idx)=>{
        const p=v=>parseFloat(String(v).replace(/,/g,''))||0;
        const oT=item.opening.qty*p(item.opening.price);
        const iT=item.in.qty*p(item.in.price);
        const xT=item.out.qty*p(item.out.price);
        tot.oQ+=item.opening.qty; tot.oT+=oT; tot.iQ+=item.in.qty; tot.iT+=iT; tot.xQ+=item.out.qty; tot.xT+=xT;
        html+=`<tr class="hover:bg-gray-50 border-b">
            <td class="px-1 py-1 text-center border-r text-xs">${idx+1}</td>
            <td class="px-1 py-1 border-r text-xs">${item.description}</td>
            <td class="px-1 py-1 text-center border-r text-xs">${item.unit}</td>
            <td class="px-1 py-1 text-right border-r bg-blue-50 text-xs">${item.opening.qty}</td>
            <td class="px-1 py-1 text-right border-r bg-blue-50 text-xs">${item.opening.price}</td>
            <td class="px-1 py-1 text-right border-r bg-blue-50 font-semibold text-xs">${oT.toLocaleString()}</td>
            <td class="px-1 py-1 text-right border-r bg-green-50 text-xs">${item.in.qty}</td>
            <td class="px-1 py-1 text-right border-r bg-green-50 text-xs">${item.in.price}</td>
            <td class="px-1 py-1 text-right border-r bg-green-50 font-semibold text-xs">${iT.toLocaleString()}</td>
            <td class="px-1 py-1 text-right border-r bg-red-50 text-xs">${item.out.qty}</td>
            <td class="px-1 py-1 text-right border-r bg-red-50 text-xs">${item.out.price}</td>
            <td class="px-1 py-1 text-right border-r bg-red-50 font-semibold text-xs">${xT.toLocaleString()}</td>
            <td class="px-1 py-1 text-center no-print text-xs">
                <button onclick="editWarehouseItem(${item.id})" class="text-blue-600 hover:text-blue-800 mr-2">✏️</button>
                <button onclick="deleteWarehouseItem(${item.id})" class="text-red-600 hover:text-red-800">🗑️</button>
            </td></tr>`;
    });
    html+=`<tr class="bg-indigo-100 font-bold">
        <td colspan="3" class="px-1 py-1 text-right border-r text-xs">សរុបទាំងអស់:</td>
        <td class="px-3 py-3 text-right border-r bg-blue-100">${tot.oQ}</td><td class="border-r bg-blue-100"></td><td class="px-3 py-3 text-right border-r bg-blue-100">${tot.oT.toLocaleString()}</td>
        <td class="px-3 py-3 text-right border-r bg-green-100">${tot.iQ}</td><td class="border-r bg-green-100"></td><td class="px-3 py-3 text-right border-r bg-green-100">${tot.iT.toLocaleString()}</td>
        <td class="px-3 py-3 text-right border-r bg-red-100">${tot.xQ}</td><td class="border-r bg-red-100"></td><td class="px-3 py-3 text-right border-r bg-red-100">${tot.xT.toLocaleString()}</td>
        <td class="no-print"></td></tr>`;
    document.getElementById('warehouseInventoryBody').innerHTML=html;
}

window.filterWarehouseData = renderWarehouseInventory;

window.showWarehouseAddForm = function() {
    editingWarehouseItemId=null;
    document.getElementById('warehouseItemFormTitle').textContent='បន្ថែមសម្ភារថ្មី';
    clearWhForm(); document.getElementById('warehouseAddFormContainer').classList.remove('hidden');
}
window.cancelWarehouseItemForm = function() { document.getElementById('warehouseAddFormContainer').classList.add('hidden'); clearWhForm(); editingWarehouseItemId=null; }
function clearWhForm() {
    document.getElementById('whInputDescription').value=''; document.getElementById('whInputUnit').value='';
    ['Opening','In','Out'].forEach(t=>{document.getElementById('whInput'+t+'Qty').value=0;document.getElementById('whInput'+t+'Price').value=0;document.getElementById('whInput'+t+'Total').value=0;});
}
window.submitWarehouseItemForm = function() {
    const desc=document.getElementById('whInputDescription').value.trim();
    if(!desc){toast('សូមបញ្ចូលសម្ភារ!','err');return;}
    const formData={description:desc,unit:document.getElementById('whInputUnit').value,
        opening:{qty:parseInt(document.getElementById('whInputOpeningQty').value)||0,price:document.getElementById('whInputOpeningPrice').value||'0'},
        in:{qty:parseInt(document.getElementById('whInputInQty').value)||0,price:document.getElementById('whInputInPrice').value||'0'},
        out:{qty:parseInt(document.getElementById('whInputOutQty').value)||0,price:document.getElementById('whInputOutPrice').value||'0'}};
    let data=getCurrentWarehouseData();
    if(editingWarehouseItemId){data=data.map(i=>i.id===editingWarehouseItemId?{...formData,id:editingWarehouseItemId}:i);}
    else{data.push({...formData,id:Date.now()});}
    setCurrentWarehouseData(data); renderWarehouseInventory(); updateCurrentWarehouseInfo(); cancelWarehouseItemForm(); scheduleSave(); toast('បានរក្សាទុក!');
}
window.editWarehouseItem = function(id) {
    const item=getCurrentWarehouseData().find(i=>i.id===id);
    if(item){
        editingWarehouseItemId=id;
        document.getElementById('warehouseItemFormTitle').textContent='កែប្រែ';
        document.getElementById('whInputDescription').value=item.description; document.getElementById('whInputUnit').value=item.unit;
        document.getElementById('whInputOpeningQty').value=item.opening.qty; document.getElementById('whInputOpeningPrice').value=item.opening.price;
        document.getElementById('whInputInQty').value=item.in.qty; document.getElementById('whInputInPrice').value=item.in.price;
        document.getElementById('whInputOutQty').value=item.out.qty; document.getElementById('whInputOutPrice').value=item.out.price;
        ['Opening','In','Out'].forEach(t=>calcWhTotal(t));
        document.getElementById('warehouseAddFormContainer').classList.remove('hidden');
    }
}
window.deleteWarehouseItem = function(id) {
    if(confirm('លុប?')){let d=getCurrentWarehouseData().filter(i=>i.id!==id);setCurrentWarehouseData(d);renderWarehouseInventory();updateCurrentWarehouseInfo();scheduleSave();toast('បានលុប!');}
}

window.downloadWarehouseJSON = function() {
    dlBlob(new Blob([JSON.stringify(warehouses,null,2)],{type:'application/json'}),'warehouses_all.json');
}
window.downloadWarehouseCSV = function() {
    const wh=warehouses[currentWarehouseId];const data=getCurrentWarehouseData();
    const h=['ល.រ','សម្ភារ','ឯកតា','ដើម-ចំនួន','ដើម-តម្លៃ','ដើម-សរុប','ចូល-ចំនួន','ចូល-តម្លៃ','ចូល-សរុប','ចេញ-ចំនួន','ចេញ-តម្លៃ','ចេញ-សរុប'];
    let csv='\uFEFF'+h.join(',')+'\n';
    data.forEach((item,i)=>{
        const p=v=>parseFloat(String(v).replace(/,/g,''))||0;
        csv+=`${i+1},"${item.description}","${item.unit}",${item.opening.qty},${item.opening.price},${item.opening.qty*p(item.opening.price)},${item.in.qty},${item.in.price},${item.in.qty*p(item.in.price)},${item.out.qty},${item.out.price},${item.out.qty*p(item.out.price)}\n`;
    });
    dlBlob(new Blob([csv],{type:'text/csv;charset=utf-8'}),wh.code+'_'+wh.name.substring(0,20)+'.csv');
}
window.importWarehouseJSON = function(event) {
    const file=event.target.files[0];if(!file)return;
    const r=new FileReader();r.onload=e=>{try{warehouses=JSON.parse(e.target.result);currentWarehouseId=Object.keys(warehouses)[0];updateWarehouseSelect();renderWarehouseInventory();updateCurrentWarehouseInfo();scheduleSave();toast('បាននាំចូល!');}catch(er){toast('JSON មិនត្រឹមត្រូវ!','err');}};r.readAsText(file);
}

// ════ SIMPLE SYSTEM ════
function updateSimpleYearFilter() {
    const years=[...new Set(simpleEquipmentData.map(i=>i.year))].sort((a,b)=>b-a);
    const sel=document.getElementById('simpleYearFilter');
    sel.innerHTML='<option value="all">ឆ្នាំទាំងអស់</option>';
    years.forEach(y=>sel.innerHTML+=`<option value="${y}">${y}</option>`);
}

function getStatusClass(s) {
    if(s==='ល្អ')return'bg-green-100 text-green-800';
    if(s==='មធ្យម')return'bg-yellow-100 text-yellow-800';
    if(s==='អន់')return'bg-orange-100 text-orange-800';
    return'bg-red-100 text-red-800';
}

function renderSimpleInventory() {
    const q=document.getElementById('simpleSearchInput').value.toLowerCase();
    const yr=document.getElementById('simpleYearFilter').value;
    const filtered=simpleEquipmentData.filter(i=>{
        const ms=i.description.toLowerCase().includes(q)||i.user.toLowerCase().includes(q);
        const my=yr==='all'||i.year.toString()===yr;
        return ms&&my;
    });
    let html=''; let tQ=0,tP=0;
    filtered.forEach((item,idx)=>{
        tQ+=item.quantity; tP+=parseInt(item.price.replace(/,/g,''));
        html+=`<tr class="hover:bg-gray-50">
            <td class="px-2 py-1 text-xs">${idx+1}</td>
            <td class="px-2 py-1 text-xs"><span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-semibold">${item.type}</span></td>
            <td class="px-2 py-1 text-xs">${item.description}</td>
            <td class="px-2 py-1 text-xs">${item.year}</td>
            <td class="px-2 py-1 text-xs">${item.user}</td>
            <td class="px-2 py-1 text-right font-semibold text-xs">${item.quantity}</td>
            <td class="px-2 py-1 text-right text-xs">${item.price}</td>
            <td class="px-2 py-1 text-center text-xs"><span class="px-3 py-1 rounded-full text-sm font-semibold ${getStatusClass(item.status)}">${item.status}</span></td>
            <td class="px-2 py-1 text-center no-print text-xs">
                <button onclick="editSimpleItem(${item.id})" class="text-blue-600 hover:text-blue-800 mr-2">✏️</button>
                <button onclick="deleteSimpleItem(${item.id})" class="text-red-600 hover:text-red-800">🗑️</button>
            </td></tr>`;
    });
    html+=`<tr class="bg-indigo-50 font-bold"><td colspan="5" class="px-2 py-1 text-right text-xs">សរុប:</td><td class="px-2 py-1 text-right text-xs">${tQ}</td><td class="px-2 py-1 text-right text-xs">${tP.toLocaleString()}</td><td colspan="2"></td></tr>`;
    document.getElementById('simpleInventoryBody').innerHTML=html;
}

window.filterSimpleData = renderSimpleInventory;

window.showSimpleAddForm = function() { editingSimpleId=null; document.getElementById('simpleFormTitle').textContent='បន្ថែមថ្មី'; clearSimpleForm(); document.getElementById('simpleAddFormContainer').classList.remove('hidden'); }
window.cancelSimpleForm = function() { document.getElementById('simpleAddFormContainer').classList.add('hidden'); clearSimpleForm(); editingSimpleId=null; }
function clearSimpleForm() {
    document.getElementById('simpleInputType').value='MOB'; document.getElementById('simpleInputDescription').value='';
    document.getElementById('simpleInputYear').value=new Date().getFullYear(); document.getElementById('simpleInputUser').value='';
    document.getElementById('simpleInputQuantity').value=1; document.getElementById('simpleInputPrice').value='';
    document.getElementById('simpleInputStatus').value='ល្អ';
}
window.submitSimpleForm = function() {
    const fd={type:document.getElementById('simpleInputType').value,description:document.getElementById('simpleInputDescription').value,year:parseInt(document.getElementById('simpleInputYear').value),user:document.getElementById('simpleInputUser').value,quantity:parseInt(document.getElementById('simpleInputQuantity').value),price:document.getElementById('simpleInputPrice').value,status:document.getElementById('simpleInputStatus').value};
    if(editingSimpleId){simpleEquipmentData=simpleEquipmentData.map(i=>i.id===editingSimpleId?{...fd,id:editingSimpleId}:i);}
    else{simpleEquipmentData.push({...fd,id:Math.max(...simpleEquipmentData.map(i=>i.id),0)+1});}
    updateSimpleYearFilter(); renderSimpleInventory(); cancelSimpleForm(); scheduleSave(); toast('បានរក្សាទុក!');
}
window.editSimpleItem = function(id) {
    const item=simpleEquipmentData.find(i=>i.id===id);
    if(item){editingSimpleId=id;document.getElementById('simpleFormTitle').textContent='កែប្រែ';document.getElementById('simpleInputType').value=item.type;document.getElementById('simpleInputDescription').value=item.description;document.getElementById('simpleInputYear').value=item.year;document.getElementById('simpleInputUser').value=item.user;document.getElementById('simpleInputQuantity').value=item.quantity;document.getElementById('simpleInputPrice').value=item.price;document.getElementById('simpleInputStatus').value=item.status;document.getElementById('simpleAddFormContainer').classList.remove('hidden');}
}
window.deleteSimpleItem = function(id) {
    if(confirm('លុប?')){simpleEquipmentData=simpleEquipmentData.filter(i=>i.id!==id);updateSimpleYearFilter();renderSimpleInventory();scheduleSave();toast('បានលុប!');}
}

window.downloadSimpleJSON = function() { dlBlob(new Blob([JSON.stringify(simpleEquipmentData,null,2)],{type:'application/json'}),'simple_equipment.json'); }
window.downloadSimpleCSV = function() {
    const h=['ល.រ','ប្រភេទ','បរិយាយ','ឆ្នាំ','អ្នកប្រើ','បរិមាណ','តម្លៃ','ស្ថានភាព'];
    let csv='\uFEFF'+h.join(',')+'\n';
    simpleEquipmentData.forEach((i,idx)=>csv+=`${idx+1},${i.type},"${i.description}",${i.year},"${i.user}",${i.quantity},${i.price},${i.status}\n`);
    dlBlob(new Blob([csv],{type:'text/csv;charset=utf-8'}),'simple_equipment.csv');
}
window.importSimpleJSON = function(event) {
    const file=event.target.files[0];if(!file)return;
    const r=new FileReader();r.onload=e=>{try{simpleEquipmentData=JSON.parse(e.target.result);updateSimpleYearFilter();renderSimpleInventory();scheduleSave();toast('បាននាំចូល!');}catch(er){toast('JSON មិនត្រឹមត្រូវ!','err');}};r.readAsText(file);
}

window.switchSimpleTab = function(tab) {
    ['inventory','yearly','tracking'].forEach(t=>{
        document.getElementById('simple'+t.charAt(0).toUpperCase()+t.slice(1)+'Tab').classList.add('hidden');
        document.getElementById('simple-tab-'+t).className='px-6 py-4 font-semibold text-gray-600 hover:bg-gray-50';
    });
    document.getElementById('simple'+tab.charAt(0).toUpperCase()+tab.slice(1)+'Tab').classList.remove('hidden');
    document.getElementById('simple-tab-'+tab).className='px-6 py-4 font-semibold bg-indigo-600 text-white';
    if(tab==='yearly') renderSimpleYearly();
    if(tab==='tracking') renderSimpleTracking();
}

function renderSimpleYearly() {
    const byYear={};
    simpleEquipmentData.forEach(i=>{if(!byYear[i.year])byYear[i.year]=[];byYear[i.year].push(i);});
    const years=Object.keys(byYear).sort((a,b)=>b-a);
    let html='<h2 class="text-base font-bold text-indigo-900 mb-2">សម្ភារកើនក្នុងឆ្នាំ</h2><div class="space-y-6">';
    years.forEach(yr=>{
        const items=byYear[yr]; let tQ=0,tP=0;
        html+=`<div class="bg-gray-50 rounded-lg p-4"><h3 class="text-sm font-bold text-indigo-800 mb-2">ឆ្នាំ ${yr}</h3><div class="overflow-x-auto rounded-lg border border-gray-200"><table class="w-full bg-white"><thead class="bg-indigo-500 text-white"><tr><th class="px-4 py-2 text-left">ល.រ</th><th class="px-4 py-2 text-left">បរិយាយ</th><th class="px-4 py-2 text-left">ប្រភេទ</th><th class="px-4 py-2 text-right">បរិមាណ</th><th class="px-4 py-2 text-right">តម្លៃ(រៀល)</th><th class="px-4 py-2 text-center">ស្ថានភាព</th></tr></thead><tbody class="divide-y divide-gray-200">`;
        items.forEach((item,i)=>{tQ+=item.quantity;tP+=parseInt(item.price.replace(/,/g,''));
            html+=`<tr class="hover:bg-gray-50"><td class="px-4 py-2">${i+1}</td><td class="px-4 py-2">${item.description}</td><td class="px-4 py-2"><span class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">${item.type}</span></td><td class="px-4 py-2 text-right font-semibold">${item.quantity}</td><td class="px-4 py-2 text-right">${item.price}</td><td class="px-4 py-2 text-center"><span class="px-2 py-1 rounded-full text-sm ${getStatusClass(item.status)}">${item.status}</span></td></tr>`;
        });
        html+=`<tr class="bg-indigo-50 font-bold"><td colspan="3" class="px-4 py-2 text-right">សរុប:</td><td class="px-4 py-2 text-right">${tQ}</td><td class="px-4 py-2 text-right">${tP.toLocaleString()}</td><td></td></tr></tbody></table></div></div>`;
    });
    html+='</div>';
    document.getElementById('simpleYearlyTab').innerHTML=html;
}

function renderSimpleTracking() {
    const sum={};
    simpleEquipmentData.forEach(i=>{
        if(!sum[i.description])sum[i.description]={good:0,medium:0,weak:0,broken:0,total:0};
        sum[i.description].total+=i.quantity;
        if(i.status==='ល្អ')sum[i.description].good+=i.quantity;
        else if(i.status==='មធ្យម')sum[i.description].medium+=i.quantity;
        else if(i.status==='អន់')sum[i.description].weak+=i.quantity;
        else if(i.status==='ខូច')sum[i.description].broken+=i.quantity;
    });
    let html='<h2 class="text-base font-bold text-indigo-900 mb-2">តារាងតាមដានស្ថានភាព</h2><div class="overflow-x-auto rounded-lg border border-gray-200"><table class="w-full bg-white"><thead class="bg-indigo-600 text-white"><tr><th class="px-2 py-1 text-left text-xs" rowspan="2">ល.រ</th><th class="px-2 py-1 text-left text-xs" rowspan="2">ឈ្មោះសម្ភារ</th><th class="px-4 py-3 text-center bg-green-600">ល្អ</th><th class="px-4 py-3 text-center bg-yellow-600">មធ្យម</th><th class="px-4 py-3 text-center bg-orange-600">អន់</th><th class="px-4 py-3 text-center bg-red-600">ខូច</th><th class="px-4 py-3 text-center bg-indigo-700">សរុប</th></tr></thead><tbody class="divide-y divide-gray-200">';
    let tG=0,tM=0,tW=0,tB=0,tAll=0,idx=0;
    for(const[desc,c] of Object.entries(sum)){idx++;tG+=c.good;tM+=c.medium;tW+=c.weak;tB+=c.broken;tAll+=c.total;
        const st=c.broken>0?'ខូច':c.weak>0?'អន់':c.medium>0?'មធ្យម':'ល្អ';
        html+=`<tr class="hover:bg-gray-50"><td class="px-2 py-1 text-xs">${idx}</td><td class="px-4 py-3 font-semibold">${desc}</td><td class="px-4 py-3 text-center bg-green-50">${c.good}</td><td class="px-4 py-3 text-center bg-yellow-50">${c.medium}</td><td class="px-4 py-3 text-center bg-orange-50">${c.weak}</td><td class="px-4 py-3 text-center bg-red-50">${c.broken}</td><td class="px-4 py-3 text-center bg-indigo-50 font-bold">${c.total}</td></tr>`;
    }
    html+=`<tr class="bg-indigo-50 font-bold"><td colspan="2" class="px-2 py-1 text-right text-xs">សរុប:</td><td class="px-4 py-3 text-center bg-green-100">${tG}</td><td class="px-4 py-3 text-center bg-yellow-100">${tM}</td><td class="px-4 py-3 text-center bg-orange-100">${tW}</td><td class="px-4 py-3 text-center bg-red-100">${tB}</td><td class="px-4 py-3 text-center bg-indigo-100">${tAll}</td></tr></tbody></table></div>`;
    document.getElementById('simpleTrackingTab').innerHTML=html;
}

// ════ UTILS ════
function dlBlob(blob,name){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();}

// Setup calculators after DOM ready
setupWarehouseCalculators();
</script>

<script defer="" src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon="{&quot;version&quot;:&quot;2024.11.0&quot;,&quot;token&quot;:&quot;e3c1c9af36de41759418005494a48906&quot;,&quot;r&quot;:1,&quot;server_timing&quot;:{&quot;name&quot;:{&quot;cfCacheStatus&quot;:true,&quot;cfEdge&quot;:true,&quot;cfExtPri&quot;:true,&quot;cfL4&quot;:true,&quot;cfOrigin&quot;:true,&quot;cfSpeedBrain&quot;:true},&quot;location_startswith&quot;:null}}" crossorigin="anonymous"></script>

</body></html>
