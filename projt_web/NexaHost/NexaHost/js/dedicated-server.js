// Dedicated Servers Data - Copie exacte du site React
const dedicatedServers = [
    {
        name: 'HP Proliant DL360 G7',
        price: '54.99',
        available: true,
        specs: {
            cpu: 'Intel Xeon X5675',
            cores: '6 Cores / 12 Threads',
            frequency: '3.06 GHz (Turbo 3.46 GHz)',
            ram: '64 GB DDR3 ECC',
            storage: '4x 146 GB SAS 15K RPM (584 GB total)',
            bandwidth: 'Illimité',
            network: '1 Gbps',
            ipv4: '5 IPv4 incluses'
        },
        features: [
            'Accès root complet',
            'HP iLO (remote management)',
            'Protection DDoS avancée',
            'Bande passante illimitée',
            'Support prioritaire',
            'Installation OS personnalisée',
            'Snapshots et backups',
            'Monitoring en temps réel',
            'Panel de gestion dédié',
            '5 adresses IPv4 incluses',
            'Reverse DNS configurable'
        ]
    },
    {
        name: 'Dell PowerEdge R230',
        price: '59.99',
        available: false,
        specs: {
            cpu: 'Intel Xeon E3-1220 v5',
            cores: '4 Cores / 4 Threads',
            frequency: '3.00 GHz (Turbo 3.50 GHz)',
            ram: '32 GB DDR4 ECC',
            storage: '1 TB SSD',
            bandwidth: 'Illimité',
            network: '1 Gbps',
            ipv4: '5 IPv4 incluses'
        },
        features: [
            'Accès root complet',
            'iDRAC (remote management)',
            'Protection DDoS avancée',
            'Bande passante illimitée',
            'Support prioritaire',
            'Installation OS personnalisée',
            'Snapshots et backups',
            'Monitoring en temps réel',
            'Panel de gestion dédié',
            '5 adresses IPv4 incluses',
            'Reverse DNS configurable'
        ]
    }
];

function renderServers() {
    const container = document.getElementById('server-container');
    
    let html = '<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">';
    
    dedicatedServers.forEach((server, index) => {
        const availabilityBadge = server.available 
            ? ''
            : '<div class="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-bold shadow-lg">🚧 Bientôt disponible</div>';
        
        const cardClass = server.available 
            ? 'bg-gradient-to-br from-purple-600 to-indigo-600' 
            : 'bg-gradient-to-br from-gray-400 to-gray-500 opacity-60';
        
        const textColor = server.available ? 'text-purple-100' : 'text-gray-200';
        const iconColor = server.available ? 'text-purple-200' : 'text-gray-300';
        
        html += `
            <div class="relative h-full p-8 rounded-3xl shadow-2xl flex flex-col ${cardClass} text-white plan-card animate-fade-in" style="animation-delay: ${index * 0.1}s;">
                ${availabilityBadge}
                
                <!-- Header -->
                <div class="text-center mb-6">
                    <h3 class="text-3xl font-bold mb-3">${server.name}</h3>
                    <div>
                        <span class="text-6xl font-bold">${server.price}€</span>
                        <span class="text-xl ml-1 ${textColor}">/mois</span>
                    </div>
                </div>

                <!-- Specs - Compact -->
                <div class="backdrop-blur-sm rounded-2xl p-5 mb-6 ${server.available ? 'bg-white/10' : 'bg-white/5'}">
                    <h4 class="text-lg font-bold mb-4 text-center">Spécifications Techniques</h4>
                    <div class="space-y-3 text-sm">
                        <div class="flex items-start space-x-2">
                            <svg class="w-4 h-4 flex-shrink-0 mt-0.5 ${iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                            </svg>
                            <div class="flex-1">
                                <p class="font-semibold ${server.available ? 'text-purple-100' : 'text-gray-200'}">
                                    ${server.specs.cpu}
                                </p>
                                <p class="${iconColor}">
                                    ${server.specs.cores} • ${server.specs.frequency}
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-center space-x-2">
                            <svg class="w-4 h-4 flex-shrink-0 ${iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            <span class="font-semibold">${server.specs.ram}</span>
                        </div>
                        
                        <div class="flex items-center space-x-2">
                            <svg class="w-4 h-4 flex-shrink-0 ${iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                            </svg>
                            <span class="font-semibold">${server.specs.storage}</span>
                        </div>
                        
                        <div class="flex items-center space-x-2">
                            <svg class="w-4 h-4 flex-shrink-0 ${iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                            <span class="font-semibold">${server.specs.network} • ${server.specs.bandwidth}</span>
                        </div>
                        
                        <div class="flex items-center space-x-2">
                            <svg class="w-4 h-4 flex-shrink-0 ${iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                            </svg>
                            <span class="font-semibold">${server.specs.ipv4}</span>
                        </div>
                    </div>
                </div>

                <!-- Features - Compact 2 columns -->
                <div class="mb-6 flex-grow">
                    <h4 class="text-lg font-bold mb-3 text-center">Fonctionnalités Incluses</h4>
                    <div class="grid grid-cols-2 gap-x-3 gap-y-2">
                        ${server.features.map(feature => `
                            <div class="flex items-start space-x-1.5">
                                <svg class="w-4 h-4 flex-shrink-0 mt-0.5 ${iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span class="text-xs leading-tight ${textColor}">
                                    ${feature}
                                </span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- CTA Button -->
                ${server.available 
                    ? `<a href="../order.html?service=dedicated-server&plan=${encodeURIComponent(server.name)}&price=${server.price}">
                        <button class="w-full py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105">
                            Commander Maintenant
                        </button>
                    </a>`
                    : `<button class="w-full py-4 bg-gray-500 text-gray-300 rounded-xl font-bold text-lg cursor-not-allowed" disabled>
                        Indisponible pour le moment
                    </button>`
                }
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    renderServers();
});
