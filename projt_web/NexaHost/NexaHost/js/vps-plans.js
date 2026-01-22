// VPS Plans Data - Copie exacte du site React
const vpsPlans = {
    xeon: [
        {
            name: 'VPS Léger',
            price: '5.99',
            processor: 'Intel Xeon E5',
            cores: '4 vCores',
            ram: '8 GB RAM',
            storage: '100 GB SSD',
            bandwidth: '2 TB',
            network: '1 Gbps',
            ipv4: '1 IPv4',
            features: [
                'KVM Virtualization',
                'Snapshots',
                'Backups hebdomadaires',
                'Panel de gestion',
                'Protection DDoS',
                'Support 24/7',
                'Installation OS rapide'
            ]
        },
        {
            name: 'VPS Avancé',
            price: '7.49',
            processor: 'Intel Xeon E5',
            cores: '6 vCores',
            ram: '12 GB RAM',
            storage: '250 GB SSD',
            bandwidth: '4 TB',
            network: '1 Gbps',
            ipv4: '2 IPv4',
            features: [
                'KVM Virtualization',
                'Snapshots illimités',
                'Backups quotidiens',
                'Panel avancé',
                'Protection DDoS',
                'Support prioritaire',
                'Monitoring en temps réel'
            ],
            popular: true
        },
        {
            name: 'VPS Lourd',
            price: '9.99',
            processor: 'Intel Xeon E5',
            cores: '8 vCores',
            ram: '16 GB RAM',
            storage: '500 GB SSD',
            bandwidth: '8 TB',
            network: '1 Gbps',
            ipv4: '4 IPv4',
            features: [
                'KVM Virtualization',
                'Snapshots illimités',
                'Backups en temps réel',
                'Panel personnalisé',
                'Protection DDoS avancée',
                'Support VIP',
                'Monitoring avancé'
            ]
        }
    ],
    i7: [
        {
            name: 'VPS Léger',
            price: '3.99',
            processor: 'Intel Core i7',
            cores: '1 vCore',
            ram: '2 GB RAM',
            storage: '45 GB SSD',
            bandwidth: '2 TB',
            network: '1 Gbps',
            ipv4: '1 IPv4',
            features: [
                'KVM Virtualization',
                'Snapshots',
                'Backups hebdomadaires',
                'Panel de gestion',
                'Protection DDoS',
                'Support 24/7'
            ]
        },
        {
            name: 'VPS Avancé',
            price: '5.49',
            processor: 'Intel Core i7',
            cores: '2 vCores',
            ram: '4 GB RAM',
            storage: '60 GB SSD',
            bandwidth: '4 TB',
            network: '1 Gbps',
            ipv4: '2 IPv4',
            features: [
                'KVM Virtualization',
                'Snapshots illimités',
                'Backups quotidiens',
                'Panel avancé',
                'Protection DDoS',
                'Support prioritaire',
                'Monitoring en temps réel'
            ],
            popular: true
        },
        {
            name: 'VPS Lourd',
            price: '6.99',
            processor: 'Intel Core i7',
            cores: '4 vCores',
            ram: '8 GB RAM',
            storage: '90 GB SSD',
            bandwidth: '8 TB',
            network: '1 Gbps',
            ipv4: '4 IPv4',
            features: [
                'KVM Virtualization',
                'Snapshots illimités',
                'Backups en temps réel',
                'Panel personnalisé',
                'Protection DDoS avancée',
                'Support VIP',
                'Monitoring avancé'
            ]
        }
    ]
};

let currentProcessor = 'xeon';

function switchProcessor(processor) {
    currentProcessor = processor;
    
    const xeonBtn = document.getElementById('btn-xeon');
    const i7Btn = document.getElementById('btn-i7');
    
    if (processor === 'xeon') {
        xeonBtn.className = 'processor-btn px-8 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-xl transition-all hover:scale-105';
        i7Btn.className = 'processor-btn px-8 py-4 rounded-xl font-semibold text-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 transition-all hover:scale-105';
    } else {
        xeonBtn.className = 'processor-btn px-8 py-4 rounded-xl font-semibold text-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 transition-all hover:scale-105';
        i7Btn.className = 'processor-btn px-8 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl transition-all hover:scale-105';
    }
    
    renderPlans();
}

function renderPlans() {
    const plans = vpsPlans[currentProcessor];
    const container = document.getElementById('plans-container');
    
    const processorName = currentProcessor === 'xeon' ? 'Intel Xeon E5' : 'Intel Core i7';
    
    let html = `
        <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                Offres VPS - ${processorName}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mt-2">
                ${currentProcessor === 'xeon' 
                    ? 'Processeurs Intel Xeon E5 pour stabilité et fiabilité professionnelle' 
                    : 'Processeurs Intel Core i7 pour des performances maximales'}
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    `;
    
    plans.forEach((plan, index) => {
        const popularClass = plan.popular 
            ? 'bg-gradient-to-br from-green-600 to-teal-600 text-white shadow-2xl ring-4 ring-green-400'
            : 'bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700';
        
        html += `
            <div class="relative p-8 rounded-2xl ${popularClass} plan-card animate-fade-in" style="animation-delay: ${index * 0.1}s;">
                ${plan.popular ? `
                    <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold popular-badge">
                        ⭐ Recommandé
                    </div>
                ` : ''}
                
                <h3 class="text-2xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}">
                    ${plan.name}
                </h3>
                <p class="text-xs mb-4 ${plan.popular ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}">
                    ${plan.processor}
                </p>
                
                <div class="mb-6">
                    <span class="text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}">
                        ${plan.price}€
                    </span>
                    <span class="${plan.popular ? 'text-green-100' : 'text-gray-600 dark:text-gray-400'}">
                        /mois
                    </span>
                </div>
                
                <div class="space-y-3 mb-6 pb-6 border-b ${plan.popular ? 'border-green-400' : 'border-gray-200 dark:border-gray-700'}">
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? 'text-green-200' : 'text-green-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                        </svg>
                        <span class="${plan.popular ? 'text-green-100' : 'text-gray-700 dark:text-gray-300'}">${plan.cores}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? 'text-green-200' : 'text-green-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <span class="${plan.popular ? 'text-green-100' : 'text-gray-700 dark:text-gray-300'}">${plan.ram}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? 'text-green-200' : 'text-green-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                        </svg>
                        <span class="${plan.popular ? 'text-green-100' : 'text-gray-700 dark:text-gray-300'}">${plan.storage}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? 'text-green-200' : 'text-green-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                        <span class="${plan.popular ? 'text-green-100' : 'text-gray-700 dark:text-gray-300'}">${plan.bandwidth} Bande passante</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? 'text-green-200' : 'text-green-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                        </svg>
                        <span class="${plan.popular ? 'text-green-100' : 'text-gray-700 dark:text-gray-300'}">${plan.ipv4}</span>
                    </div>
                </div>
                
                <ul class="space-y-3 mb-8">
                    ${plan.features.map(feature => `
                        <li class="flex items-start space-x-2">
                            <svg class="w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-green-200' : 'text-green-500'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-sm ${plan.popular ? 'text-green-100' : 'text-gray-600 dark:text-gray-400'}">${feature}</span>
                        </li>
                    `).join('')}
                </ul>
                
                <a href="../order.html?service=vps&plan=${encodeURIComponent(plan.name)}&price=${plan.price}&processor=${encodeURIComponent(plan.processor)}">
                    <button class="w-full py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                        plan.popular
                            ? 'bg-white text-green-600 hover:bg-gray-100'
                            : 'bg-gradient-to-r from-green-600 to-teal-600 text-white hover:opacity-90'
                    }">
                        Commander
                    </button>
                </a>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    renderPlans();
});